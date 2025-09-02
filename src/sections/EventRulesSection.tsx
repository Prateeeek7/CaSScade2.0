import React from 'react';
import { motion } from 'framer-motion';
import { EVENT_RULES, MISSION_PARAMETERS } from '../helpers/constants';

export default function EventRulesSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h3 
          className="text-4xl font-mono font-bold text-cyan-400 mb-8"
          style={{
            textShadow: '0 0 15px #06B6D4'
          }}
        >
          [PROTOCOL DIRECTIVE]
        </motion.h3>
        
        {/* Mission Parameters */}
        <motion.div 
          className="space-y-4 text-lg font-mono text-gray-300 mb-12"
          style={{
            textShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
          }}
        >
          <p>
            <motion.span 
              className="text-green-400 font-bold"
              animate={{ 
                textShadow: [
                  '0 0 10px #10B981',
                  '0 0 20px #10B981',
                  '0 0 10px #10B981'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {MISSION_PARAMETERS.title}
            </motion.span>
            {MISSION_PARAMETERS.description}
          </p>
          <p>
            <motion.span 
              className="text-blue-400 font-bold"
              animate={{ 
                textShadow: [
                  '0 0 10px #0076C0',
                  '0 0 20px #0076C0',
                  '0 0 10px #0076C0'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              {MISSION_PARAMETERS.execution.title}
            </motion.span>
            {MISSION_PARAMETERS.execution.description}
          </p>
        </motion.div>

        {/* Event Rules */}
        <motion.h4 
          className="text-2xl font-mono font-bold text-blue-400 mb-6"
          style={{
            textShadow: '0 0 15px #0076C0'
          }}
        >
          [EVENT RULES]
        </motion.h4>
        <div className="grid gap-4 max-w-3xl mx-auto">
          {EVENT_RULES.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                textShadow: '0 0 15px #0076C0'
              }}
              className="border border-gray-600 p-3 rounded-lg bg-black/40 backdrop-blur-sm font-mono text-base cursor-pointer"
              style={{
                borderImage: 'linear-gradient(45deg, #0076C0, transparent, #0076C0) 1'
              }}
            >
              <span className="text-orange-400 mr-4">[{String(index + 1).padStart(2, '0')}]</span>
              <span className="text-white">{rule}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
