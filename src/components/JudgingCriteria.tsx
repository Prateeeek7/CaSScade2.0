
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Repeat, Monitor, Settings, Radio, AlertTriangle } from 'lucide-react';

const criteria = [
  {
    icon: Repeat,
    title: "ORIGINALITY OVERLOAD",
    description: "Does your solution break the matrix? Fresh, weird, unrepeatable ideas earn higher voltage.",
    color: "#0076C0"
  },
  {
    icon: Zap,
    title: "THEME ALIGNMENT",
    subtitle: "INCONVENIENCE MODE",
    description: "Every creation must embrace the spirit of glorious inefficiency. The more inconvenient, the stronger the resonance.",
    color: "#EA4B21"
  },
  {
    icon: Radio,
    title: "QUIRK FACTOR",
    description: "Code should feel alive, twitchy, maybe even unreasonable—but never boring. Quirk is the new currency.",
    color: "#F59E0B"
  },
  {
    icon: Settings,
    title: "EXECUTION & STABILITY",
    description: "A messy glitch is fun, but a prototype that actually runs (even if absurd) proves your control over chaos.",
    color: "#8B5CF6"
  },
  {
    icon: Monitor,
    title: "NARRATIVE SYNC",
    description: "Sell your story. Spin your hack as if it’s a rebellion. The judges don’t just want a build—they want a broadcast.",
    color: "#10B981"
  }
];

const TypewriterText = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(prev => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 20);
    return () => clearInterval(interval);
  }, [text]);

  return <p className="text-gray-300 text-sm text-center font-mono h-24">{displayedText}</p>;
};

const CriteriaCard = ({ criterion }: { criterion: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.05,
        boxShadow: `0 0 40px ${criterion.color}40`
      }}
      className="bg-black/60 backdrop-blur-sm border rounded-lg p-6 cursor-pointer relative overflow-hidden h-full flex flex-col justify-start"
      style={{
        borderColor: criterion.color + '40'
      }}
    >
      <motion.div
        className="absolute inset-0 opacity-0"
        whileHover={{ opacity: 0.1 }}
        style={{
          background: `linear-gradient(45deg, ${criterion.color}20, transparent)`
        }}
      />
      
      <div className="relative z-10 text-center">
        <motion.div 
          className="w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto"
          style={{
            backgroundColor: criterion.color + '20',
            border: `2px solid ${criterion.color}60`
          }}
          whileHover={{
            boxShadow: `0 0 20px ${criterion.color}60`
          }}
        >
          <criterion.icon 
            className="w-6 h-6"
            style={{ color: criterion.color }}
          />
        </motion.div>
        
        <h4 
          className="text-lg font-mono font-bold mb-1"
          style={{ 
            color: criterion.color,
            textShadow: `0 0 10px ${criterion.color}60`
          }}
        >
          {criterion.title}
        </h4>
        {criterion.subtitle && (
          <p className="text-xs font-mono mb-3 text-orange-300">{criterion.subtitle}</p>
        )}
        
        {isHovered ? (
          <TypewriterText text={criterion.description} />
        ) : (
          <p className="text-gray-400 text-sm text-center font-mono h-24 italic">
            [HOVER TO DECODE DIRECTIVE]
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default function JudgingCriteria() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h3 
          className="text-4xl font-mono font-bold text-center text-blue-400 mb-12"
          style={{
            textShadow: '0 0 15px #0076C0'
          }}
        >
          [EVALUATION_MATRIX]
        </motion.h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {criteria.map((criterion, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="h-full"
            >
              <CriteriaCard criterion={criterion} />
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 text-center max-w-4xl mx-auto p-8 border-2 border-dashed rounded-lg"
          style={{ borderColor: '#EA4B21' }}
        >
          <div className="flex justify-center items-center gap-4 mb-6">
            <AlertTriangle className="w-8 h-8 text-orange-400 animate-pulse" />
            <h4 className="text-3xl font-mono font-bold text-orange-400" style={{ textShadow: '0 0 10px #EA4B21' }}>
              [FINAL_DIRECTIVE]
            </h4>
            <AlertTriangle className="w-8 h-8 text-orange-400 animate-pulse" />
          </div>
          
          <div className="space-y-6 text-left">
            {[
              {
                title: "INCONVENIENCE IS THE MISSION",
                description: "Your task: craft the most chaotically impractical yet still functional solutions to the simplest website bugs we throw at you.",
                color: "#EA4B21"
              },
              {
                title: "REALITY IS BENDABLE",
                description: "You hold full creative override. Twist the problem, break it, rebuild it—surprise the system with your own out-of-box hacks.",
                color: "#0076C0"
              },
              {
                title: "MACHINES MAY ASSIST, BUT YOU MUST COMMAND",
                description: "Use AI tools, online vaults, and dark-web knowledge—but every line you run, you must be able to explain like it's your own battle code.",
                color: "#8B5CF6"
              },
              {
                title: "COPYPASTE IS A CRIME",
                description: "Any act of one-to-one duplication, blind cloning, or direct plagiarism = instant disqualification. (We'll find you. The system always finds out.)",
                color: "#F59E0B"
              },
              {
                title: "OPEN-ENDED GLITCH PROMPTS AWAIT",
                description: "On event day, you'll choose your poison: open prompts designed to push you off the map. No fixed path. Only chaos. Only creativity.",
                color: "#10B981"
              }
            ].map((directive, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: `0 0 25px ${directive.color}40`
                }}
                className="border border-gray-700 p-4 rounded-lg bg-black/30 backdrop-blur-sm"
                style={{
                  borderLeft: `4px solid ${directive.color}`
                }}
              >
                <motion.h5 
                  className="font-mono font-bold text-lg mb-2"
                  style={{ 
                    color: directive.color,
                    textShadow: `0 0 8px ${directive.color}60`
                  }}
                  animate={{
                    textShadow: [
                      `0 0 8px ${directive.color}60`,
                      `0 0 15px ${directive.color}80`,
                      `0 0 8px ${directive.color}60`
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ⚡ {directive.title}
                </motion.h5>
                <p className="text-gray-300 font-mono text-sm leading-relaxed">
                  {directive.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8 p-4 border border-red-500 rounded-lg bg-red-900/20"
            animate={{
              borderColor: ['#EF4444', '#DC2626', '#EF4444'],
              boxShadow: [
                '0 0 20px rgba(239, 68, 68, 0.3)',
                '0 0 30px rgba(239, 68, 68, 0.5)',
                '0 0 20px rgba(239, 68, 68, 0.3)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-red-400 animate-bounce" />
              <span className="font-mono font-bold text-red-400 text-lg">FINAL WARNING</span>
              <AlertTriangle className="w-5 h-5 text-red-400 animate-bounce" />
            </div>
            <p className="font-mono text-red-300 text-center">
              Only the most <span className="text-red-400 font-bold">inconvenient</span> yet cleverly engineered anomaly will rise. 
              The rest will vanish into <span className="text-red-400 font-bold animate-pulse">static</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
