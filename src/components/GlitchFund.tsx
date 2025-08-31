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
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.div
      key={prize.rank}
      className={`relative p-6 rounded-lg border-2 bg-gradient-to-br ${prize.color} text-white overflow-hidden`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold">{prize.rank}</div>
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.6 }}
          >
            {prize.icon}
          </motion.div>
        </div>
        
        <div className="text-3xl font-black mb-4">{prize.amount}</div>
        
        <div className="space-y-2">
          {prize.features.map((feature: string, idx: number) => (
            <motion.div
              key={idx}
              className="flex items-center space-x-2 text-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: (index * 0.1) + (idx * 0.1) }}
            >
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        animate={{
          boxShadow: [
            '0 0 20px rgba(255, 255, 255, 0.2)',
            '0 0 40px rgba(255, 255, 255, 0.4)',
            '0 0 20px rgba(255, 255, 255, 0.2)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default function GlitchFund(): JSX.Element {
  const [totalPrize, setTotalPrize] = useState<string>("₹0");

  useEffect(() => {
    // Animate total prize count
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
          <motion.h2
            className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
            animate={{
              textShadow: [
                '0 0 20px rgba(255, 193, 7, 0.5)',
                '0 0 40px rgba(255, 193, 7, 0.8)',
                '0 0 20px rgba(255, 193, 7, 0.5)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            GLITCH FUND
          </motion.h2>
          
          <motion.div
            className="text-2xl md:text-3xl font-space-grotesk text-blue-400 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Total Prize Pool
          </motion.div>
          
          <motion.div
            className="text-5xl md:text-6xl font-orbitron font-black text-yellow-400"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
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
          className="text-center p-8 border border-yellow-500/30 rounded-lg bg-gradient-to-r from-yellow-500/10 to-orange-500/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h3 className="text-2xl font-space-grotesk font-bold text-yellow-400 mb-4">
            Special Recognition
          </h3>
          <p className="text-lg text-yellow-300 mb-6">
            All participants receive certificates and exclusive networking opportunities
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-yellow-200">
            <span className="px-3 py-1 border border-yellow-400/50 rounded-full">Mentorship Access</span>
            <span className="px-3 py-1 border border-yellow-400/50 rounded-full">Industry Connections</span>
            <span className="px-3 py-1 border border-yellow-400/50 rounded-full">Future Opportunities</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}