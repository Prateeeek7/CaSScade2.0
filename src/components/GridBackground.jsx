import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function GridBackground() {
  const canvasRef = useRef(null);
  const starsRef = useRef([]);
  const animationFrameRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Performance optimizations for canvas
    ctx.imageSmoothingEnabled = false;
    ctx.imageSmoothingQuality = 'high';
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Grid settings
    const gridSize = 50;
    const gridColor = '#0076C0';

    // Initialize shooting stars
    const initStars = () => {
      starsRef.current = [];
      const numStars = 8;
      
      for (let i = 0; i < numStars; i++) {
        const isHorizontal = Math.random() > 0.5;
        const star = {
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

    const drawGrid = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw grid with pulsing effect
      const pulseIntensity = 0.3 + 0.2 * Math.sin(time * 0.002);
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
      const scanY = (time * 0.2) % (canvas.height + 100);
      ctx.strokeStyle = `rgba(0, 118, 192, 0.8)`;
      ctx.lineWidth = 2;
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(canvas.width, scanY);
      ctx.stroke();
    };

    const updateStars = () => {
      starsRef.current.forEach(star => {
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
        if (star.trail.length > 15) {
          star.trail.shift();
        }
      });
    };

    const drawStars = () => {
      starsRef.current.forEach(star => {
        // Draw trail
        star.trail.forEach((point, index) => {
          const trailOpacity = (index / star.trail.length) * point.opacity * 0.6;
          const size = (index / star.trail.length) * 3;
          
          ctx.beginPath();
          ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${trailOpacity})`;
          ctx.shadowBlur = 15;
          ctx.shadowColor = '#0076C0';
          ctx.fill();
        });

        // Draw main star
        ctx.beginPath();
        ctx.arc(star.x, star.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#0076C0';
        ctx.fill();

        // Draw star aura
        ctx.beginPath();
        ctx.arc(star.x, star.y, 8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 118, 192, ${star.opacity * 0.3})`;
        ctx.shadowBlur = 25;
        ctx.fill();
      });
    };

    const animate = (time) => {
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
    animate(0);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0, 118, 192, 0.03), transparent 70%)' }}
    />
  );
}