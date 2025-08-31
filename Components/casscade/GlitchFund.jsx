import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Trophy, Zap, Star } from 'lucide-react';

const prizeTiers = [
  {
    rank: "1ST",
    amount: "₹15,000",
    title: "GRAND CASCADE",
    description: "The ultimate glitch master. Your solution will be remembered in the digital archives.",
    icon: Trophy,
    color: "#FFD700",
    glow: "#FFD700",
    features: ["Eternal glory", "Tech swag package", "Mentorship opportunities", "Direct entry to next hackathon"]
  },
  {
    rank: "2ND", 
    amount: "₹10,000",
    title: "SILVER STREAM",
    description: "A force to be reckoned with. Your creativity has been acknowledged by the system.",
    icon: Star,
    color: "#C0C0C0",
    glow: "#C0C0C0",
    features: ["Respect from peers", "Tech swag package", "Networking access", "Future hackathon priority"]
  },
  {
    rank: "3RD",
    amount: "₹5,000", 
    title: "BRONZE BUG",
    description: "You've proven your worth. The matrix recognizes your potential.",
    icon: Zap,
    color: "#CD7F32",
    glow: "#CD7F32",
    features: ["Recognition", "Tech swag package", "Community access", "Skill validation"]
  }
];



const PrizeCard = ({ prize, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: `0 0 40px ${prize.glow}40`
      }}
      className="bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm border rounded-xl p-8 relative overflow-hidden h-full"
      style={{
        borderColor: prize.color + '40',
        boxShadow: `0 0 30px ${prize.glow}20`
      }}
    >
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 opacity-0"
        whileHover={{ opacity: 0.1 }}
        style={{
          background: `radial-gradient(circle at center, ${prize.color}20, transparent)`
        }}
      />
      
      <div className="relative z-10 text-center">
        {/* Rank Badge */}
        <motion.div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto border-4"
          style={{
            backgroundColor: prize.color + '20',
            borderColor: prize.color,
            boxShadow: `0 0 30px ${prize.glow}60`
          }}
          whileHover={{
            boxShadow: `0 0 50px ${prize.glow}80`,
            scale: 1.1
          }}
          animate={{
            boxShadow: [
              `0 0 30px ${prize.glow}60`,
              `0 0 50px ${prize.glow}80`,
              `0 0 30px ${prize.glow}60`
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <prize.icon 
            className="w-10 h-10"
            style={{ color: prize.color }}
          />
        </motion.div>
        
        {/* Rank */}
        <motion.h3 
          className="text-4xl font-mono font-black mb-2"
          style={{ 
            color: prize.color,
            textShadow: `0 0 20px ${prize.glow}`
          }}
        >
          {prize.rank}
        </motion.h3>
        
        {/* Amount */}
        <motion.div
          className="text-6xl font-mono font-bold mb-4"
          style={{ 
            color: prize.color,
            textShadow: `0 0 30px ${prize.glow}`
          }}
          animate={{
            textShadow: [
              `0 0 30px ${prize.glow}`,
              `0 0 50px ${prize.glow}`,
              `0 0 30px ${prize.glow}`
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {prize.amount}
        </motion.div>
        
        {/* Title */}
        <h4 className="text-xl font-mono font-bold mb-3 text-white">
          {prize.title}
        </h4>
        
        {/* Description */}
        <p className="text-gray-300 font-mono text-sm mb-6 leading-relaxed">
          {prize.description}
        </p>
        
        {/* Features */}
        <div className="space-y-2">
          {prize.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center gap-2 text-sm"
            >
              <div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: prize.color }}
              />
              <span className="text-gray-400 font-mono">{feature}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};



export default function GlitchFund() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-4 mb-6"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 2, -2, 0]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <DollarSign className="w-12 h-12 text-green-400" />
            <h2 
              className="text-5xl font-mono font-black text-green-400"
              style={{
                textShadow: '0 0 30px #10B981'
              }}
            >
              GLITCH FUND
            </h2>
            <DollarSign className="w-12 h-12 text-green-400" />
          </motion.div>
          
          <p className="text-xl font-mono text-gray-300 max-w-3xl mx-auto">
            The digital vault has been unlocked. These are the rewards for those brave enough to dance with chaos.
          </p>
        </motion.div>
        
        {/* Main Prize Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {prizeTiers.map((prize, index) => (
            <PrizeCard key={index} prize={prize} index={index} />
          ))}
        </div>
        

        
        {/* Total Prize Pool */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center p-8 border-2 border-dashed rounded-xl"
          style={{ borderColor: '#10B981' }}
        >
          <motion.div
            className="text-4xl font-mono font-bold text-green-400 mb-4"
            style={{
              textShadow: '0 0 20px #10B981'
            }}
            animate={{
              textShadow: [
                '0 0 20px #10B981',
                '0 0 40px #10B981',
                '0 0 20px #10B981'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            TOTAL PRIZE POOL: ₹30,000
          </motion.div>
          
          <p className="text-gray-400 font-mono">
            Plus exclusive swag, mentorship, and eternal glory in the digital realm.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}