import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Star {
  x: number;
  y: number;
  speed: number;
  isHorizontal: boolean;
  trail: Array<{ x: number; y: number; opacity: number }>;
  opacity: number;
}

export default function GridBackground(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Performance optimizations for canvas
    ctx.imageSmoothingEnabled = false;
    ctx.imageSmoothingQuality = 'high';
    
    const resizeCanvas = (): void => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Grid settings
    const gridSize: number = 50;
    const gridColor: string = '#0076C0';

    // Initialize shooting stars
    const initStars = (): void => {
      starsRef.current = [];
      const numStars: number = 8;
      
      for (let i = 0; i < numStars; i++) {
        const isHorizontal: boolean = Math.random() > 0.5;
        const star: Star = {
          x: isHorizontal ? -20 : Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
          y: isHorizontal ? Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize : -20,
          speed: 4 + Math.random() * 4,
          isHorizontal,
          trail: [],
          opacity: 0.8 + Math.random() * 0.2
        };
        starsRef.current.push(star);
      }
    };

    const drawGrid = (time: number): void => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid with pulsing effect
      const pulseIntensity: number = 0.3 + 0.2 * Math.sin(time * 0.002);
      ctx.strokeStyle = `rgba(0, 118, 192, ${pulseIntensity})`;
      ctx.lineWidth = 1;
      ctx.shadowBlur = 10;
      ctx.shadowColor = gridColor;

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Scan line effect
      const scanY: number = (time * 0.2) % (canvas.height + 100);
      ctx.strokeStyle = `rgba(0, 118, 192, 0.8)`;
      ctx.lineWidth = 2;
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(canvas.width, scanY);
      ctx.stroke();
    };

    const updateStars = (): void => {
      if (!canvas) return;
      
      starsRef.current.forEach((star: Star) => {
        // Update position
        if (star.isHorizontal) {
          star.x += star.speed;
          if (star.x > canvas.width + 50) {
            star.x = -20;
            star.y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
          }
        } else {
          star.y += star.speed;
          if (star.y > canvas.height + 50) {
            star.y = -20;
            star.x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
          }
        }

        // Update trail
        star.trail.push({ x: star.x, y: star.y, opacity: star.opacity });
        if (star.trail.length > 10) {
          star.trail.shift();
        }
      });
    };

    const drawStars = (): void => {
      if (!ctx) return;
      
      starsRef.current.forEach((star: Star) => {
        // Draw trail
        star.trail.forEach((trailPoint, index) => {
          const opacity = (index / star.trail.length) * star.opacity;
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.lineWidth = 2;
          ctx.shadowBlur = 15;
          ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
          
          if (index > 0) {
            const prevPoint = star.trail[index - 1];
            ctx.beginPath();
            ctx.moveTo(prevPoint.x, prevPoint.y);
            ctx.lineTo(trailPoint.x, trailPoint.y);
            ctx.stroke();
          }
        });

        // Draw star head
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.shadowBlur = 20;
        ctx.shadowColor = 'rgba(255, 255, 255, 0.9)';
        ctx.beginPath();
        ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const animate = (time: number): void => {
      // Performance optimization: Only update if tab is visible
      if (document.hidden) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }
      
      drawGrid(time);
      updateStars();
      drawStars();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    initStars();
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
}