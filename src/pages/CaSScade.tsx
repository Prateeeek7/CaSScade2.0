
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GridBackground from '../components/GridBackground';
import SystemBroadcast from '../components/SystemBroacast';
import Timeline from '../components/Timeline';
import JudgingCriteria from '../components/JudgingCriteria';
import GlitchFund from '../components/GlitchFund';

export default function CaSScade() {
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Animated Grid Background */}
      <motion.div 
        style={{ opacity: backgroundOpacity }}
        className="fixed inset-0 z-0"
      >
        <GridBackground />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center mb-12"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-mono font-black mb-6 glitch-text"
              style={{ 
                textShadow: '0 0 20px #0076C0, 0 0 40px #0076C0, 0 0 60px #0076C0',
                fontFamily: 'Space Grotesk, monospace'
              }}
              animate={{
                textShadow: [
                  '0 0 20px #0076C0, 0 0 40px #0076C0, 0 0 60px #0076C0',
                  '0 0 25px #EA4B21, 0 0 45px #EA4B21, 0 0 65px #EA4B21',
                  '0 0 20px #0076C0, 0 0 40px #0076C0, 0 0 60px #0076C0'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              CaSScade'25
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-xl md:text-2xl font-mono text-blue-400 mb-8"
              style={{
                textShadow: '0 0 10px #0076C0'
              }}
            >
              [SYSTEM_STATUS: COMPETITION_ACTIVE]
            </motion.div>
          </motion.div>

          <SystemBroadcast />
        </section>

        {/* System Notice */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-20 px-4"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="border border-orange-500 p-8 rounded-lg bg-black/50 backdrop-blur-sm mb-12"
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
                className="text-3xl md:text-4xl font-mono font-bold text-orange-400 mb-4"
                style={{
                  textShadow: '0 0 15px #EA4B21'
                }}
              >
                [SYSTEM NOTICE]
              </motion.h2>
              <motion.p 
                className="text-xl font-mono text-orange-300"
                style={{
                  textShadow: '0 0 10px #EA4B21'
                }}
              >
                The Grid is unstable... Loading Event Directives...
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        {/* Event Description */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="py-20 px-4"
        >
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <motion.h3 
                  className="text-4xl font-mono font-bold text-blue-400 mb-6"
                  style={{
                    textShadow: '0 0 15px #0076C0'
                  }}
                >
                  Event Description
                </motion.h3>
                <motion.div 
                  className="space-y-4 text-lg font-mono text-gray-300"
                  style={{
                    textShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
                  }}
                >
                  <p>
                    Dive into the digital realm where creativity meets code. 
                    <motion.span 
                      className="text-blue-400 font-bold"
                      animate={{ 
                        textShadow: [
                          '0 0 10px #0076C0',
                          '0 0 20px #0076C0',
                          '0 0 10px #0076C0'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {" HTML, CSS, JavaScript "}
                    </motion.span>
                    become your weapons in this cyberpunk coding arena.
                  </p>
                  <p>
                    Build responsive, interactive web experiences that push 
                    the boundaries of modern web development.
                  </p>
                  <p className="text-orange-400">
                    Only the most innovative solutions will survive the digital uprising.
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
                    <div className="text-green-400 mb-2">$ cascade-init --competition</div>
                    <div className="text-yellow-400 mb-2">Initializing competition environment...</div>
                    <div className="text-blue-400 mb-2">Loading participant modules...</div>
                    <div className="text-orange-400 mb-2">System ready for cascade deployment.</div>
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

        {/* Event Rules */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-20 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h3 
              className="text-4xl font-mono font-bold text-center text-blue-400 mb-12"
              style={{
                textShadow: '0 0 15px #0076C0'
              }}
            >
              [PROTOCOL DIRECTIVES]
            </motion.h3>
            <div className="grid gap-6">
              {[
                "Teams of 2-4 participants maximum",
                "Use only HTML, CSS, and JavaScript",
                "Original code and assets required",
                "48-hour development window",
                "Responsive design mandatory",
                "Submit via designated portal before deadline"
              ].map((rule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    textShadow: '0 0 15px #0076C0'
                  }}
                  className="border border-gray-600 p-4 rounded-lg bg-black/40 backdrop-blur-sm font-mono text-lg cursor-pointer"
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
        </motion.section>

        {/* Judging Criteria */}
        <JudgingCriteria />

        {/* Glitch Fund Prize Pool */}
        <GlitchFund />

        {/* Timeline */}
        <Timeline />

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-20 px-4 border-t border-gray-800"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="font-mono text-lg text-gray-400"
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
              className="text-blue-400 mt-4 font-mono"
              style={{
                textShadow: '0 0 10px #0076C0'
              }}
            >
              May the cascade be with you.
            </motion.p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
