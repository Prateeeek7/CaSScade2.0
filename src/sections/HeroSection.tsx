import React from 'react';
import { motion } from 'framer-motion';
import { EVENT_INFO } from '../helpers/constants';
import FuzzyText from '../components/FuzzyText';
import SystemBroadcast from '../components/SystemBroadcast';

export default function HeroSection() {
  return (
    <section className="h-screen flex flex-col justify-start items-center px-4 -mt-26">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center mb-10 mt-0"
      >
        <motion.div 
          className="mb-0 text-center px-8 py-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <FuzzyText
            fontSize="clamp(3rem, 8vw, 8rem)"
            fontWeight={950}
            fontFamily="Space Grotesk, monospace"
            color="#EA4B21"
            baseIntensity={0.15}
            hoverIntensity={0.4}
          >
            {EVENT_INFO.name}
          </FuzzyText>
        </motion.div>
        
        {/* Tagline */}
        <motion.h2 
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-space-grotesk font-black mb-6 text-yellow-400 relative px-4"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            textShadow: [
              '0 0 10px #F59E0B',
              '0 0 20px #F59E0B',
              '0 0 30px #F59E0B'
            ]
          }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -2, 2, 0],
            textShadow: [
              '0 0 20px #F59E0B',
              '0 0 40px #F59E0B',
              '0 0 60px #F59E0B'
            ]
          }}
          whileTap={{ scale: 0.95 }}
        >
          {EVENT_INFO.tagline}
        </motion.h2>
      </motion.div>

      {/* System Status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="text-xl md:text-2xl font-mono text-blue-400 mb-4 text-center"
        style={{
          textShadow: '0 0 10px #0076C0'
        }}
      >
        [SYSTEM_STATUS: COMPETITION_ACTIVE]
      </motion.div>

      <SystemBroadcast />
      
      {/* Get Register Button */}
      <motion.div
        className="text-center mt-6 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.a
          href={EVENT_INFO.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-600 text-white font-space-grotesk font-bold rounded-full relative overflow-hidden group text-lg"
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 30px rgba(0, 118, 192, 0.6)'
          }}
          whileTap={{ scale: 0.95 }}
          style={{ 
            boxShadow: '0 0 20px rgba(0, 118, 192, 0.5)',
            willChange: 'transform, box-shadow'
          }}
        >
          <span className="relative z-10">GET REGISTER</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-700 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          />
        </motion.a>
      </motion.div>
    </section>
  );
}
