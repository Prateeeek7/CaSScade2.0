import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Zap } from 'lucide-react';

interface PrizeTier {
  rank: string;
  amount: string;
  icon: React.ReactNode;
  color: string;
  features: string[];
}

const prizeTiers: PrizeTier[] = [
  {
    rank: "1st Place",
    amount: "₹15,000",
    icon: <Trophy className="w-8 h-8" />,
    color: "from-yellow-400 to-yellow-600",
    features: ["Grand Prize", "Winner's Certificate", "Direct Entry to Finals"]
  },
  {
    rank: "2nd Place",
    amount: "₹10,000",
    icon: <Star className="w-8 h-8" />,
    color: "from-gray-400 to-gray-600",
    features: ["Runner-up Prize", "Achievement Certificate", "Mentorship Program"]
  },
  {
    rank: "3rd Place",
    amount: "₹5,000",
    icon: <Zap className="w-8 h-8" />,
    color: "from-orange-400 to-orange-600",
    features: ["Third Place Prize", "Completion Certificate", "Networking Access"]
  }
];

const PrizeCard = ({ prize, index }: { prize: PrizeTier; index: number }) => {
  return (
    <motion.div
      className="relative p-6 rounded-xl border border-gray-600 bg-black/50 backdrop-blur-sm overflow-hidden"
      initial={{ opacity: 0, y: 30, rotateX: -5 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.03,
        rotateY: 2,
        boxShadow: "0 0 30px rgba(0, 118, 192, 0.4)"
      }}
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform"
      }}
    >
      {/* Subtle Background Glow */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0"
        style={{
          background: `radial-gradient(circle at center, ${prize.color.includes('yellow') ? 'rgba(255, 193, 7, 0.1)' : prize.color.includes('gray') ? 'rgba(156, 163, 175, 0.1)' : 'rgba(251, 146, 60, 0.1)'} 0%, transparent 70%)`
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Animated Border Glow */}
      <motion.div
        className="absolute inset-0 rounded-xl border border-transparent"
        style={{
          background: `linear-gradient(45deg, transparent, ${prize.color.includes('yellow') ? '#F59E0B' : prize.color.includes('gray') ? '#6B7280' : '#F97316'}, transparent)`,
          backgroundSize: '200% 200%'
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "linear",
          delay: index * 0.5
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Header with Icon */}
        <div className="flex items-center justify-between mb-4">
          <motion.div 
            className="text-xl font-bold text-white"
            whileHover={{ 
              textShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              scale: 1.05
            }}
            transition={{ duration: 0.2 }}
          >
            {prize.rank}
          </motion.div>
          <motion.div
            className="text-white"
            whileHover={{ 
              rotate: 360,
              scale: 1.2,
              color: prize.color.includes('yellow') ? '#F59E0B' : prize.color.includes('gray') ? '#6B7280' : '#F97316'
            }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {prize.icon}
          </motion.div>
        </div>
        
        {/* Prize Amount with Pulse */}
        <motion.div 
          className="text-3xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300"
          whileHover={{ 
            scale: 1.05,
            textShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
          }}
          animate={{
            textShadow: [
              "0 0 5px rgba(255, 255, 255, 0.1)",
              "0 0 15px rgba(255, 255, 255, 0.2)",
              "0 0 5px rgba(255, 255, 255, 0.1)"
            ]
          }}
          transition={{ 
            textShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 0.2 }
          }}
        >
          {prize.amount}
        </motion.div>
        
        {/* Features List with Staggered Animation */}
        <div className="space-y-2">
          {prize.features.map((feature: string, idx: number) => (
            <motion.div
              key={idx}
              className="flex items-center space-x-2 text-sm text-gray-300"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.4, 
                delay: (index * 0.1) + (idx * 0.1),
                ease: "easeOut"
              }}
              whileHover={{ 
                x: 5,
                color: prize.color.includes('yellow') ? '#F59E0B' : prize.color.includes('gray') ? '#6B7280' : '#F97316'
              }}
            >
              <motion.div 
                className="w-2 h-2 rounded-full"
                style={{ 
                  backgroundColor: prize.color.includes('yellow') ? '#F59E0B' : prize.color.includes('gray') ? '#6B7280' : '#F97316'
                }}
                whileHover={{ scale: 1.5 }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  scale: { duration: 0.2 },
                  opacity: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }
                }}
              />
              <span className="font-medium">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0"
        style={{
          background: `radial-gradient(circle at center, ${prize.color.includes('yellow') ? 'rgba(255, 193, 7, 0.05)' : prize.color.includes('gray') ? 'rgba(156, 163, 175, 0.05)' : 'rgba(251, 146, 60, 0.05)'} 0%, transparent 70%)`
        }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default function GlitchFund(): JSX.Element {
  const [totalPrize, setTotalPrize] = useState<string>("₹0");

  useEffect(() => {
    // Simple count animation
    const targetAmount = 30000;
    const duration = 2000;
    const steps = 60;
    const increment = targetAmount / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetAmount) {
        current = targetAmount;
        clearInterval(timer);
      }
      setTotalPrize(`₹${Math.floor(current).toLocaleString()}`);
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-xs font-mono text-cyan-400 mb-2 tracking-widest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            [SYSTEM_ACCESS: PRIZE_POOL_ACTIVE]
          </motion.div>
          
          <motion.h2
            className="text-5xl md:text-7xl font-orbitron font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            GLITCH FUND
          </motion.h2>
          
          {/* Subtitle */}
          <motion.div
            className="text-xl font-mono text-blue-400 mb-6 tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <span className="text-cyan-400">$</span> Total Prize Pool <span className="text-cyan-400">$</span>
          </motion.div>
          
          {/* Prize Amount */}
          <motion.div
            className="text-6xl md:text-8xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-orange-500"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
          >
            {totalPrize}
          </motion.div>
        </motion.div>

        {/* Prize Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {prizeTiers.map((prize, index) => (
            <PrizeCard key={prize.rank} prize={prize} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="text-center p-8 border border-cyan-500/50 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.div
            className="text-xs font-mono text-cyan-400 mb-3 tracking-widest"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            [BONUS_REWARDS: UNLOCKED]
          </motion.div>
          
          <motion.h3 
            className="title-heading text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Special Recognition
          </motion.h3>
          
          <motion.p 
            className="text-lg text-cyan-300 mb-8 font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            All participants receive certificates and exclusive networking opportunities
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            {[
              { text: "Mentorship Access", color: "#00FFFF" },
              { text: "Industry Connections", color: "#0080FF" },
              { text: "Future Opportunities", color: "#8000FF" }
            ].map((item, idx) => (
              <motion.span
                key={idx}
                className="px-4 py-2 border rounded-full font-mono font-medium backdrop-blur-sm"
                style={{
                  borderColor: `${item.color}50`,
                  color: item.color,
                  backgroundColor: `${item.color}10`
                }}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + (idx * 0.1) }}
              >
                {item.text}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}