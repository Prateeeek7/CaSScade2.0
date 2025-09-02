import React from 'react';
import { motion } from 'framer-motion';
import { EVENT_INFO } from '../helpers/constants';

export default function AboutSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col justify-center items-center px-4 py-20 mt-40"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* System Notice */}
        <motion.div
          className="border border-orange-500 p-6 rounded-lg bg-black/50 backdrop-blur-sm mb-8"
          style={{
            boxShadow: '0 0 30px rgba(234, 75, 33, 0.3), inset 0 0 30px rgba(234, 75, 33, 0.1)'
          }}
          animate={{
            boxShadow: [
              '0 0 30px rgba(234, 75, 33, 0.3), inset 0 0 30px rgba(234, 75, 33, 0.1)',
              '0 0 50px rgba(234, 75, 33, 0.5), inset 0 0 50px rgba(234, 75, 33, 0.2)',
              '0 0 30px rgba(234, 75, 33, 0.3), inset 0 0 30px rgba(234, 75, 33, 0.1)'
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <motion.h2 
            className="text-2xl md:text-3xl font-mono font-bold text-orange-400 mb-3"
            style={{
              textShadow: '0 0 15px #EA4B21'
            }}
          >
            [SYSTEM NOTICE]
          </motion.h2>
          <motion.p 
            className="text-lg font-mono text-orange-300"
            style={{
              textShadow: '0 0 10px #EA4B21'
            }}
          >
            The Grid is unstable... Loading Event Directives...
          </motion.p>
        </motion.div>

        {/* What is CaSScade */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          <div>
            <motion.h3 
              className="text-4xl font-mono font-bold text-blue-400 mb-4 sm:mb-6"
              style={{
                textShadow: '0 0 15px #0076C0'
              }}
            >
              What is {EVENT_INFO.name}?
            </motion.h3>
            <motion.div 
              className="space-y-4 text-lg font-mono text-gray-300"
              style={{
                textShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
              }}
            >
              <p>
                {EVENT_INFO.name} isn't your everyday hackathon—it's a 
                <motion.span 
                  className="text-orange-400 font-bold"
                  animate={{ 
                    textShadow: [
                      '0 0 10px #EA4B21',
                      '0 0 20px #EA4B21',
                      '0 0 10px #EA4B21'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {" design-first chaos experiment "}
                </motion.span>
                where HTML, CSS, and JS collide in the most absurd, over-engineered ways possible.
              </p>
              <p>
                It's not about building the perfect product, but about embracing the 
                <motion.span 
                  className="text-purple-400 font-bold"
                  animate={{ 
                    textShadow: [
                      '0 0 10px #8B5CF6',
                      '0 0 20px #8B5CF6',
                      '0 0 10px #8B5CF6'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  {" \"why does this even exist?\" "}
                </motion.span>
                energy of quirky prototypes.
              </p>
              <p className="text-cyan-400">
                From glitchy grids to unnecessarily complex flows, {EVENT_INFO.name} celebrates creativity that doesn't follow rules—it breaks them, then styles the cracks with neon gradients and cyberpunk vibes.
              </p>
            </motion.div>
          </div>
          <div className="relative">
            <motion.div
              className="w-full h-64 border border-blue-500 rounded-lg bg-black/30 backdrop-blur-sm p-6"
              style={{
                boxShadow: '0 0 30px rgba(0, 118, 192, 0.3)'
              }}
              animate={{
                borderColor: ['#0076C0', '#EA4B21', '#0076C0']
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="font-mono text-sm">
                <div className="text-green-400 mb-2">$ cascade-init --chaos-mode</div>
                <div className="text-yellow-400 mb-2">Loading glitch protocols...</div>
                <div className="text-purple-400 mb-2">Initializing absurdity matrix...</div>
                <div className="text-orange-400 mb-2">Chaos engine ready for deployment.</div>
                <motion.div 
                  className="text-white"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  ▊
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
