
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  GridBackground,
  SystemBroadcast,
  Timeline,
  JudgingCriteria,
  GlitchFund,
  FuzzyText,
  CustomCursor,
  HeroSection,
  AboutSection,
  EventRulesSection,
  CSISection,
  SocialMediaSection,
  Footer
} from '../components';

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
      <div className="relative z-10 -mt-40">
        {/* Page 1: Hero Section */}
        <HeroSection />

        {/* Page 2: System Notice + What is CaSScade */}
        <AboutSection />

        {/* Page 3: Why Participate Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="min-h-screen flex flex-col justify-center items-center px-4 py-20"
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

        {/* Page 4: Who Can Join Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="min-h-screen flex flex-col justify-center items-center px-4 py-20"
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

        {/* Page 5: Protocol Directive - Complete */}
        <EventRulesSection />

        {/* Page 6: Mission Timeline */}
        <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20">
          <Timeline />
        </section>

        {/* Page 7: Evaluation Matrix */}
        <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20">
          <JudgingCriteria />
        </section>

        {/* Page 8: Glitch Fund Prize Pool */}
        <section className="min-h-screen flex flex-col justify-center items-center px-4 py-20">
          <GlitchFund />
        </section>

        {/* Page 9: About CSI + Social Media + Footer */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="min-h-screen flex flex-col justify-center items-center px-4 py-20"
        >
          <div className="max-w-6xl mx-auto">
            {/* About CSI Section */}
            <CSISection />

            {/* Social Media Section */}
            <SocialMediaSection />

            {/* Footer Section */}
            <Footer />
          </div>
        </motion.section>
      </div>
    </div>
  );
}
