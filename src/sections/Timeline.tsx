import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Aperture, GitFork, Search, Airplay, Trophy } from 'lucide-react';

const timelineEvents = [
  {
    title: "The Absurdity Filter",
    description: "Every idea passes through the first gate where logic is politely asked to leave. Judges don’t want “practical,” they want “beautifully broken.”",
    status: "GATE_OPEN",
    icon: Aperture,
    color: "#0076C0"
  },
  {
    title: "The Frankenbuild", 
    description: "Now comes the part where wild imagination collides with no-code tools. Think of it as stitching random limbs together and calling it a prototype.",
    status: "BUILDING",
    icon: GitFork,
    color: "#EA4B21"
  },
  {
    title: "The Reality Checkpoint",
    description: "Mentors descend like detectives in a sci-fi movie, poking holes in your design... you creatively disguise the holes with more nonsense.",
    status: "ANALYZING", 
    icon: Search,
    color: "#8B5CF6"
  },
  {
    title: "The Final Cascade",
    description: "The stage lights turn on. It’s your moment to showcase a prototype so unnecessarily layered that it feels like a Rube Goldberg machine.",
    status: "SHOWCASE",
    icon: Airplay, 
    color: "#10B981"
  },
  {
    title: "Curtain Drop of Chaos",
    description: "Finally, the arena quiets, the winners are chosen, and the most gloriously inconvenient solution is crowned supreme.",
    status: "COMPLETE",
    icon: Trophy,
    color: "#F59E0B"
  }
];

export default function Timeline() {
  const { scrollYProgress } = useScroll();
  const pathLength = useTransform(scrollYProgress, [0.3, 0.8], [0, 1]);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h3 
          className="text-4xl font-mono font-bold text-center text-blue-400 mb-16"
          style={{
            textShadow: '0 0 15px #0076C0'
          }}
        >
          [MISSION_TIMELINE]
        </motion.h3>

        <div className="relative">
          {/* Animated Timeline Line */}
          <svg
            className="absolute left-8 top-0 h-full w-1 z-0"
            viewBox="0 0 4 1000"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M2 0 L2 1000"
              stroke="url(#gradient)"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
                strokeOpacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                pathLength: { duration: 3, ease: "easeInOut" },
                strokeOpacity: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            />
            <defs>
              <linearGradient id="gradient" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#EA4B21" />
                <stop offset="25%" stopColor="#0076C0" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="75%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#F59E0B" />
              </linearGradient>
            </defs>
          </svg>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-center group"
              >
                {/* Timeline Node */}
                <motion.div 
                  className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center border-4"
                  style={{
                    backgroundColor: 'black',
                    borderColor: event.color,
                    boxShadow: `0 0 20px ${event.color}60`
                  }}
                  whileHover={{
                    scale: 1.2,
                    boxShadow: `0 0 30px ${event.color}80`
                  }}
                  animate={event.status === 'BUILDING' ? {
                    boxShadow: [
                      `0 0 20px ${event.color}60`,
                      `0 0 40px ${event.color}80`, 
                      `0 0 20px ${event.color}60`
                    ],
                    scale: [1, 1.1, 1]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <event.icon 
                    className="w-8 h-8"
                    style={{ color: event.color }}
                  />
                </motion.div>

                {/* Event Content */}
                <motion.div 
                  className="ml-8 flex-1 bg-black/40 backdrop-blur-sm border rounded-lg p-6"
                  style={{
                    borderColor: event.color + '40'
                  }}
                  whileHover={{
                    borderColor: event.color + '80',
                    boxShadow: `0 0 20px ${event.color}30`
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 
                        className="text-xl font-mono font-bold mb-2"
                        style={{ 
                          color: event.color,
                          textShadow: `0 0 10px ${event.color}60`
                        }}
                      >
                        {event.title}
                      </h4>
                      <p className="text-gray-300 font-mono text-sm">
                        {event.description}
                      </p>
                    </div>
                    <motion.span 
                      className="px-3 py-1 rounded-full text-xs font-mono font-bold whitespace-nowrap"
                      style={{
                        backgroundColor: event.color + '20',
                        color: event.color,
                        border: `1px solid ${event.color}60`
                      }}
                      animate={event.status === 'BUILDING' ? {
                        backgroundColor: [
                          event.color + '20',
                          event.color + '40',
                          event.color + '20'
                        ]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {event.status.toUpperCase()}
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}