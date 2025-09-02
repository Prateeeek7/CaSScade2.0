// Component Props Types
export interface FuzzyTextProps {
  children: React.ReactNode;
  fontSize?: string | number;
  fontWeight?: number;
  fontFamily?: string;
  color?: string;
  enableHover?: boolean;
  baseIntensity?: number;
  hoverIntensity?: number;
}

export interface PrizeTier {
  rank: string;
  amount: string;
  icon: React.ReactNode;
  color: string;
  features: string[];
}

export interface TimelineEvent {
  title: string;
  description: string;
  status: string;
  icon: React.ComponentType<any>;
  color: string;
}

export interface JudgingCriterion {
  icon: React.ComponentType<any>;
  title: string;
  subtitle?: string;
  description: string;
  color: string;
}

export interface Star {
  x: number;
  y: number;
  speed: number;
  isHorizontal: boolean;
  trail: Array<{ x: number; y: number; opacity: number }>;
  opacity: number;
}

// Animation Types
export interface AnimationConfig {
  initial?: any;
  animate?: any;
  transition?: any;
  whileHover?: any;
  whileTap?: any;
  whileInView?: any;
  viewport?: any;
}
