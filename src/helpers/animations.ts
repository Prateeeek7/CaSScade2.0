import { AnimationConfig } from './types';
// Common animation variants for Framer Motion
export const fadeInUp = (delay: number = 0): AnimationConfig => ({
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay }
});

export const fadeInLeft = (delay: number = 0): AnimationConfig => ({
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay }
});

export const fadeInRight = (delay: number = 0): AnimationConfig => ({
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay }
});

export const scaleIn = (delay: number = 0): AnimationConfig => ({
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, delay }
});

// Hover animations
export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

export const hoverGlow = (color: string) => ({
  whileHover: { 
    boxShadow: `0 0 30px ${color}`,
    scale: 1.02
  }
});

// Scroll-triggered animations
export const scrollReveal = (threshold: number = 0.1) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { threshold, once: true },
  transition: { duration: 0.8 }
});
