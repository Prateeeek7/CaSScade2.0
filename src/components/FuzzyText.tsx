import React, { useEffect, useRef } from "react";

interface FuzzyTextProps {
  children: React.ReactNode;
  fontSize?: string | number;
  fontWeight?: number;
  fontFamily?: string;
  color?: string;
  enableHover?: boolean;
  baseIntensity?: number;
  hoverIntensity?: number;
}

interface ExtendedCanvasElement extends HTMLCanvasElement {
  cleanupFuzzyText?: () => void;
}

const FuzzyText: React.FC<FuzzyTextProps> = ({
  children,
  fontSize = "clamp(2rem, 10vw, 10rem)",
  fontWeight = 900,
  fontFamily = "inherit",
  color = "#fff",
  enableHover = true,
  baseIntensity = 0.18,
  hoverIntensity = 0.5,
}) => {
  const canvasRef = useRef<ExtendedCanvasElement>(null);

  useEffect(() => {
    let animationFrameId: number | undefined;
    let isCancelled = false;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const init = async () => {
      if (document.fonts?.ready) {
        await document.fonts.ready;
      }
      if (isCancelled) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const computedFontFamily =
        fontFamily === "inherit"
          ? window.getComputedStyle(canvas).fontFamily || "sans-serif"
          : fontFamily;

      const fontSizeStr =
        typeof fontSize === "number" ? `${fontSize}px` : fontSize;
      let numericFontSize;
      if (typeof fontSize === "number") {
        numericFontSize = fontSize;
      } else {
        const temp = document.createElement("span");
        temp.style.fontSize = fontSize;
        document.body.appendChild(temp);
        const computedSize = window.getComputedStyle(temp).fontSize;
        numericFontSize = parseFloat(computedSize);
        document.body.removeChild(temp);
      }

      const text = React.Children.toArray(children).join("");

      const offscreen = document.createElement("canvas");
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;

      offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
      offCtx.textBaseline = "alphabetic";
      const metrics = offCtx.measureText(text);

      const actualLeft = metrics.actualBoundingBoxLeft ?? 0;
      const actualRight = metrics.actualBoundingBoxRight ?? metrics.width;
      const actualAscent = metrics.actualBoundingBoxAscent ?? numericFontSize;
      const actualDescent =
        metrics.actualBoundingBoxDescent ?? numericFontSize * 0.2;

      const textBoundingWidth = Math.ceil(actualLeft + actualRight);
      const tightHeight = Math.ceil(actualAscent + actualDescent);

      const extraWidthBuffer = 50; // Increased from 10 to 50 for more width buffer
      const extraHeightBuffer = 20; // Added height buffer
      const offscreenWidth = textBoundingWidth + extraWidthBuffer;
      const offscreenHeight = tightHeight + extraHeightBuffer;

      offscreen.width = offscreenWidth;
      offscreen.height = offscreenHeight;

      const xOffset = extraWidthBuffer / 2;
      offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
      offCtx.textBaseline = "alphabetic";
      // Apply different colors to different parts of the text
      const colorMap: Record<string, string> = {
        'C': '#EA4B21',    // Orange
        'a': '#0076C0',    // Blue
        'S': '#EA4B21',    // Orange
        'c': '#0076C0',    // Blue
        'd': '#0076C0',    // Blue
        'e': '#0076C0',    // Blue
        "'": '#EA4B21',    // Orange
        '2': '#EA4B21',    // Orange
        '5': '#EA4B21'     // Orange
      };
      
      // Draw each character with its specific color
      let currentX = xOffset - actualLeft;
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const charColor = colorMap[char] || color; // Fallback to default color
        offCtx.fillStyle = charColor;
        offCtx.fillText(char, currentX, actualAscent);
        
        // Measure the width of this character to position the next one
        const charMetrics = offCtx.measureText(char);
        currentX += charMetrics.width;
      }

      const horizontalMargin = 100; // Increased from 50 to 100 for more right/left space
      const verticalMargin = 80; // Increased from 40 to 80 for more top/bottom space
      const fuzzRange = 50; // Increased from 30 to 50 for more fuzzy effect space
      // Ensure canvas is large enough for fuzzy effect and text margins on ALL sides
      const totalWidth = offscreenWidth + horizontalMargin * 2 + fuzzRange * 2;
      const totalHeight = offscreenHeight + verticalMargin * 2 + fuzzRange * 2;
      canvas.width = totalWidth;
      canvas.height = totalHeight;
      ctx.translate(horizontalMargin + fuzzRange, verticalMargin + fuzzRange + actualAscent);

      const interactiveLeft = horizontalMargin + fuzzRange + xOffset;
      const interactiveTop = verticalMargin + fuzzRange + actualAscent;
      const interactiveRight = interactiveLeft + textBoundingWidth;
      const interactiveBottom = interactiveTop + tightHeight;

      let isHovering = false;

      const run = () => {
        if (isCancelled) return;
        ctx.clearRect(
          0,
          0,
          totalWidth,
          totalHeight
        );
        const intensity = isHovering ? hoverIntensity : baseIntensity;
        for (let j = 0; j < tightHeight; j++) {
          const dx = Math.floor(intensity * (Math.random() - 0.5) * fuzzRange);
          ctx.drawImage(
            offscreen,
            0,
            j,
            offscreenWidth,
            1,
            dx,
            j,
            offscreenWidth,
            1
          );
        }
        animationFrameId = window.requestAnimationFrame(run);
      };

      run();

      const isInsideTextArea = (x: number, y: number) => {
        return (
          x >= interactiveLeft &&
          x <= interactiveRight &&
          y >= interactiveTop &&
          y <= interactiveBottom
        );
      };

      const handleMouseMove = (e: MouseEvent) => {
        if (!enableHover) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        isHovering = isInsideTextArea(x, y);
      };

      const handleMouseLeave = () => {
        isHovering = false;
      };

      const handleTouchMove = (e: TouchEvent) => {
        if (!enableHover) return;
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        isHovering = isInsideTextArea(x, y);
      };

      const handleTouchEnd = () => {
        isHovering = false;
      };

      if (enableHover) {
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseleave", handleMouseLeave);
        canvas.addEventListener("touchmove", handleTouchMove, { passive: false });
        canvas.addEventListener("touchend", handleTouchEnd);
      }

      const cleanup = () => {
        if (animationFrameId) {
          window.cancelAnimationFrame(animationFrameId);
        }
        if (enableHover) {
          canvas.removeEventListener("mousemove", handleMouseMove);
          canvas.removeEventListener("mouseleave", handleMouseLeave);
          canvas.removeEventListener("touchmove", handleTouchMove);
          canvas.removeEventListener("touchend", handleTouchEnd);
        }
      };

      canvas.cleanupFuzzyText = cleanup;
    };

    init();

    return () => {
      isCancelled = true;
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
      if (canvas && canvas.cleanupFuzzyText) {
        canvas.cleanupFuzzyText();
      }
    };
  }, [
    children,
    fontSize,
    fontWeight,
    fontFamily,
    color,
    enableHover,
    baseIntensity,
    hoverIntensity,
  ]);

  return <canvas ref={canvasRef} />;
};

export default FuzzyText;
