
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GridBackground from '../components/GridBackground';
import SystemBroadcast from '../components/SystemBroacast';
import Timeline from '../components/Timeline';
import JudgingCriteria from '../components/JudgingCriteria';
import GlitchFund from '../components/GlitchFund';
import FuzzyText from '../components/FuzzyText';
import CustomCursor from '../components/CustomCursor';

export default function CaSScade() {
  const { scrollYProgress } = useScroll();
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Custom Cursor */}
      <CustomCursor />
      
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
            <motion.div 
              className="mb-6 text-center"
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
                CaSScade'25
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
              DIVS GONE WILD
            </motion.h2>
          </motion.div>

          {/* System Status - Moved closer to SystemBroadcast */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl font-mono text-blue-400 mb-6 text-center"
              style={{
                textShadow: '0 0 10px #0076C0'
              }}
            >
              [SYSTEM_STATUS: COMPETITION_ACTIVE]
          </motion.div>

          <SystemBroadcast />
          
          {/* Get Register Button */}
          <motion.div
            className="text-center mt-12 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="https://WWW.EventLinkDedoBhaiyaJi.com"
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

        {/* What is CaSScade Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="py-12 sm:py-16 md:py-20 px-4"
        >
          <div className="max-w-6xl mx-auto">
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
                  What is CaSScade?
                </motion.h3>
                <motion.div 
                  className="space-y-4 text-lg font-mono text-gray-300"
                  style={{
                    textShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
                  }}
                >
                  <p>
                    CaSScade isn't your everyday hackathon—it's a 
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
                    From glitchy grids to unnecessarily complex flows, CaSScade celebrates creativity that doesn't follow rules—it breaks them, then styles the cracks with neon gradients and cyberpunk vibes.
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

        {/* Why Participate Section */}
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
              <div className="relative order-2 md:order-1">
                <motion.div
                  className="w-full h-64 border border-orange-500 rounded-lg bg-black/30 backdrop-blur-sm p-6"
                  style={{
                    boxShadow: '0 0 30px rgba(234, 75, 33, 0.3)'
                  }}
                  animate={{
                    borderColor: ['#EA4B21', '#0076C0', '#EA4B21']
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="font-mono text-sm">
                    <div className="text-green-400 mb-2">$ chaos-engine --activate</div>
                    <div className="text-yellow-400 mb-2">Breaking conventional rules...</div>
                    <div className="text-blue-400 mb-2">Loading creative protocols...</div>
                    <div className="text-orange-400 mb-2">Madness matrix online.</div>
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
              <div className="order-1 md:order-2">
                <motion.h3 
                  className="text-4xl font-mono font-bold text-orange-400 mb-6"
                  style={{
                    textShadow: '0 0 15px #EA4B21'
                  }}
                >
                  Why Participate?
                </motion.h3>
                <motion.div 
                  className="space-y-4 text-lg font-mono text-gray-300"
                  style={{
                    textShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
                  }}
                >
                  <p>
                    Because CaSScade isn't just another hackathon—it's a 
                    <motion.span 
                      className="text-green-400 font-bold"
                      animate={{ 
                        textShadow: [
                          '0 0 10px #10B981',
                          '0 0 20px #10B981',
                          '0 0 10px #10B981'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                      {" digital playground "}
                    </motion.span>
                    where chaos meets creativity.
                  </p>
                  <p>
                    It's where you take that wild idea, break it apart, and rebuild it with a splash of 
                    <motion.span 
                      className="text-pink-400 font-bold"
                      animate={{ 
                        textShadow: [
                          '0 0 10px #EC4899',
                          '0 0 20px #EC4899',
                          '0 0 10px #EC4899'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                    >
                      {" glitch and madness "}
                    </motion.span>
                    .
                  </p>
                  <p className="text-yellow-400">
                    Every line of code is a chance to twist logic, every bug is an invitation to innovate, and every teammate is a co-conspirator in building something brilliantly bizarre.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Who Can Join Section */}
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
                  className="text-4xl font-mono font-bold text-purple-400 mb-6"
                  style={{
                    textShadow: '0 0 15px #8B5CF6'
                  }}
                >
                  Who Can Join?
                </motion.h3>
                <motion.div 
                  className="space-y-4 text-lg font-mono text-gray-300"
                  style={{
                    textShadow: '0 0 5px rgba(255, 255, 255, 0.3)'
                  }}
                >
                  <p>
                    CaSScade is open to anyone ready to 
                    <motion.span 
                      className="text-cyan-400 font-bold"
                      animate={{ 
                        textShadow: [
                          '0 0 10px #06B6D4',
                          '0 0 20px #06B6D4',
                          '0 0 10px #06B6D4'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                    >
                      {" tinker, twist, and tear apart "}
                    </motion.span>
                    the ordinary.
                  </p>
                  <p>
                    Whether you're a fresher scribbling your first HTML tag, a designer who dreams in pixels, or a coder who speaks in semicolons—this hackathon is your stage.
                  </p>
                  <p className="text-green-400">
                    You don't need to be a pro; you just need curiosity, chaos, and the courage to experiment. If you've ever wanted to break the matrix of normal and stitch it back with your own glitch, then congratulations—you're already one of us.
                  </p>
                </motion.div>
              </div>
              <div className="relative">
                <motion.div
                  className="w-full h-64 border border-purple-500 rounded-lg bg-black/30 backdrop-blur-sm p-6"
                  style={{
                    boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)'
                  }}
                  animate={{
                    borderColor: ['#8B5CF6', '#EA4B21', '#8B5CF6']
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="font-mono text-sm">
                    <div className="text-green-400 mb-2">$ matrix-break --initiate</div>
                    <div className="text-yellow-400 mb-2">Scanning for chaos potential...</div>
                    <div className="text-purple-400 mb-2">Loading glitch protocols...</div>
                    <div className="text-cyan-400 mb-2">Welcome to the matrix, glitch.</div>
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

        {/* About CSI Chapter Section */}
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
                      CSI VIT
                    </motion.h3>
                    <motion.p 
                      className="text-xl font-space-grotesk text-orange-400 font-bold"
                      style={{
                        textShadow: '0 0 10px #EA4B21'
                      }}
                    >
                      WE BUILD, IT MATTERS.
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
                    CSI VIT is a vibrant community of makers, breakers and innovators. We bring together developers, designers and problem solvers to explore cutting edge technology through hackathons, workshops and real world projects.
                  </p>
                  <p>
                    Backed by India's largest network of computer professionals, CSI VIT gives you the skills, exposure and platform to grow. Whether you want to code, design or disrupt, there is always a place for you here.
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
                    <div className="text-cyan-400 mb-2">Events: Laser Tag, Fork This, DevSpace</div>
                    <div className="text-green-400 mb-2">Events: Riddler, ByteBistro, Init with CSI</div>
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
                    href="https://www.csi-india.org"
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
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-20 px-4 border-t border-gray-800"
        >
          <div className="max-w-6xl mx-auto">
            {/* Main Footer Content */}
            <div className="text-center mb-12">
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
              
              {/* Social Media Links */}
              <motion.div 
                className="flex justify-center items-center gap-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Facebook */}
                <motion.a
                  href="https://www.facebook.com/csivitu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 0 20px rgba(59, 89, 152, 0.6)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>

                {/* Instagram */}
                <motion.a
                  href="https://www.instagram.com/csivitu?igsh=dWg5c2ZrZmVxcW5i"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 0 20px rgba(193, 53, 132, 0.6)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/company/csivitu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 0 20px rgba(0, 119, 181, 0.6)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href="https://github.com/csivit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 0 20px rgba(36, 41, 46, 0.6)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </motion.a>

                {/* X (Twitter) */}
                <motion.a
                  href="https://x.com/csivitu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 0 20px rgba(0, 0, 0, 0.6)'
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </motion.a>
              </motion.div>
            </div>
            
            {/* Copyright */}  
            <motion.div 
              className="text-center border-t border-gray-700 pt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-gray-500 font-space-grotesk text-sm">
                © 2025 CaSScade'25. Powered by CSI VIT. All rights reserved.
              </p>
            </motion.div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}
