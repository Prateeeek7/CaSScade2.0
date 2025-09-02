import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <>
      {/* Footer Section */}
      <motion.div 
        className="text-center border-t border-gray-800 pt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <motion.div 
          className="font-space-grotesk text-lg text-gray-400 mb-6"
          animate={{
            textShadow: [
              '0 0 5px rgba(255, 255, 255, 0.2)',
              '0 0 10px rgba(0, 118, 192, 0.3)',
              '0 0 5px rgba(255, 255, 255, 0.2)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          [END_TRANSMISSION]
        </motion.div>
        <motion.p 
          className="text-blue-400 text-xl font-space-grotesk mb-8"
          style={{
            textShadow: '0 0 10px #0076C0'
          }}
        >
          May the cascade be with you.
        </motion.p>
      </motion.div>
      
      {/* Copyright Section */}
      <motion.div 
        className="text-center border-t border-gray-700 pt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        <p className="text-gray-500 font-space-grotesk text-sm">
          © 2025 CaSScade'25. Powered by CSI VIT. All rights reserved.
        </p>
      </motion.div>
    </>
  );
}
