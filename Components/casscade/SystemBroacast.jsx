import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const broadcastText = [
  "[System Broadcast Initiated...]",
  "",
  "PARAMETERS: Innovation, Technical Excellence, User Experience",
  "ORIGINALITY: 40% weight factor - Unique solutions prioritized",
  "QUIRK: Unexpected features and creative implementations valued", 
  "EXECUTION: Clean code, responsive design, performance optimized",
  "COLLABORATION: Team synergy and git workflow assessment",
  "",
  "EVENTS: Laser Tag, Fork This, DevSpace, Riddler, ByteBistro, Init with CSI",
  "",
  "[Broadcast Complete - Standing By]"
];

export default function SystemBroadcast() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    // Start typing with proper delays for letter-by-letter effect
    const startTyping = () => {
      if (visibleLines < broadcastText.length) {
        const currentLine = broadcastText[visibleLines];
        
        if (currentChar < currentLine.length) {
          setCurrentChar(prev => prev + 1);
          
          // Random glitch effect - reduced frequency for performance
          if (Math.random() < 0.05) {
            setIsGlitching(true);
            setTimeout(() => setIsGlitching(false), 80);
          }
        } else {
          setVisibleLines(prev => prev + 1);
          setCurrentChar(0);
        }
      }
    };

    // Start first line immediately, then continue with proper timing
    const timer = setTimeout(() => {
      startTyping();
    }, visibleLines === 0 ? 50 : Math.random() * 80 + 40);

    return () => clearTimeout(timer);
  }, [visibleLines, currentChar]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0, delay: 0 }}
      className="max-w-4xl mx-auto"
      style={{ willChange: 'opacity' }}
    >
      <div className="border border-blue-500 p-4 sm:p-6 md:p-8 rounded-lg bg-black/70 backdrop-blur-sm">
        <div 
          className="font-mono text-xs sm:text-sm md:text-base space-y-2"
          style={{ 
            textShadow: '0 0 10px rgba(0, 118, 192, 0.5)',
            filter: isGlitching ? 'hue-rotate(180deg) contrast(2)' : 'none'
          }}
        >
          {broadcastText.slice(0, visibleLines).map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`${
                line.includes('[') ? 'text-orange-400' : 'text-green-400'
              } ${line.includes('PARAMETERS') ? 'text-blue-400 font-bold' : ''} ${
                line.includes('ORIGINALITY') ? 'text-purple-400' : ''
              } ${line.includes('QUIRK') ? 'text-pink-400' : ''} ${
                line.includes('EXECUTION') ? 'text-yellow-400' : ''
              } ${line.includes('COLLABORATION') ? 'text-cyan-400' : ''} ${
                line.includes('EVENTS') ? 'text-green-400 font-bold' : ''
              }`}
            >
              {index === visibleLines - 1 
                ? line.slice(0, currentChar)
                : line
              }
              {index === visibleLines - 1 && (
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-white"
                >
                  ▊
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="mt-6 text-center"
          animate={{
            boxShadow: [
              '0 0 20px rgba(0, 118, 192, 0.3)',
              '0 0 30px rgba(0, 118, 192, 0.6)',
              '0 0 20px rgba(0, 118, 192, 0.3)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="inline-block px-4 py-2 border border-blue-400 rounded text-blue-400 font-mono text-sm">
            SIGNAL_STRENGTH: [████████░░] 80%
          </div>
        </motion.div>
        

      </div>
    </motion.div>
  );
}