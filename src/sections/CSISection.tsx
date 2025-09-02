import React from 'react';
import { motion } from 'framer-motion';
import { CSI_INFO, EVENT_INFO } from '../helpers/constants';

export default function CSISection() {
  return (
    <motion.div 
      className="grid md:grid-cols-2 gap-8 items-center mb-12"
    >
      <div>
        <motion.div className="flex items-center gap-4 mb-6">
          <motion.div
            className="w-32 h-32"
            whileHover={{ 
              scale: 1.05
            }}
          >
            <img 
              src="/images/CSI Logo.svg" 
              alt="CSI VIT Logo" 
              className="w-full h-full object-contain"
            />
          </motion.div>
          <div>
            <motion.h3 
              className="text-4xl font-space-grotesk font-bold text-blue-400"
              style={{
                textShadow: '0 0 15px #0076C0'
              }}
            >
              {CSI_INFO.name}
            </motion.h3>
            <motion.p 
              className="text-xl font-space-grotesk text-orange-400 font-bold"
              style={{
                textShadow: '0 0 10px #EA4B21'
              }}
            >
              {CSI_INFO.tagline}
            </motion.p>
          </div>
        </motion.div>
        
        <motion.div 
          className="space-y-4 text-lg font-space-grotesk text-gray-300"
          style={{
            textShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
          }}
        >
          <p>
            {CSI_INFO.description}
          </p>
          <p>
            Backed by India's largest network of computer professionals, {CSI_INFO.name} gives you the skills, exposure and platform to grow. Whether you want to code, design or disrupt, there is always a place for you here.
          </p>
        </motion.div>
      </div>
      
      <div className="relative order-2 md:order-1">
        <motion.div
          className="w-full h-64 border border-purple-500 rounded-lg bg-black/30 backdrop-blur-sm p-6"
          style={{
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)'
          }}
          animate={{
            borderColor: ['#8B5CF6', '#0076C0', '#EA4B21', '#8B5CF6']
          }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <div className="font-space-grotesk text-sm">
            <div className="text-green-400 mb-2">$ csi-vit --status</div>
            <div className="text-yellow-400 mb-2">Loading community modules...</div>
            <div className="text-blue-400 mb-2">Connecting to CSI network...</div>
            <div className="text-purple-400 mb-2">Initializing innovation hub...</div>
            <div className="text-orange-400 mb-2">Community active and thriving.</div>
            <div className="text-cyan-400 mb-2">Events: {CSI_INFO.events.slice(0, 3).join(', ')}</div>
            <div className="text-green-400 mb-2">Events: {CSI_INFO.events.slice(3).join(', ')}</div>
            <motion.div 
              className="text-white"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ▊
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div className="mt-6 text-center">
          <motion.a
            href={EVENT_INFO.csiWebsite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-orange-600 text-white font-space-grotesk font-bold rounded-full relative overflow-hidden group"
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
            <span className="relative z-10">Visit CSI India</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-700 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
}
