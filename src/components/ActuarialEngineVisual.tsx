import React from 'react';
import { motion, useInView } from 'framer-motion';

export const ActuarialEngineVisual: React.FC = () => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-30px" });

  // Floating animation definition
  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as any
    }
  };

  // Define delays for the clockwise sequence:
  // 1. Center (0s)
  // 2. Top Left (1s)
  // 3. Top Right (2s)
  // 4. Bottom Right (3s)
  // 5. Bottom Left (4s)
  
  const nodes = [
    {
      id: 'tl',
      label: 'INPUT 01',
      title: 'Adversarial Extreme Value Theory',
      desc: 'Generalized Pareto Distribution for tail risk.',
      position: 'md:top-8 md:left-8',
      delay: 0.15,
      path: "M 400 300 Q 200 150, 180 150", // Draw from center to Top Left
    },
    {
      id: 'tr',
      label: 'INPUT 02',
      title: 'Latent Failure Rate Estimation',
      desc: 'Bayesian capture-recapture models.',
      position: 'md:top-8 md:right-8',
      delay: 0.3,
      path: "M 400 300 Q 600 150, 620 150", // Draw from center to Top Right
    },
    {
      id: 'br',
      label: 'OUTPUT',
      title: 'Grade Stability Dynamics',
      desc: 'Kalman filter state-space smoothing.',
      position: 'md:bottom-8 md:right-8',
      delay: 0.45,
      path: "M 400 300 Q 600 450, 620 450", // Draw from center to Bottom Right
    },
    {
      id: 'bl',
      label: 'WEIGHTING',
      title: 'Exposure Threat Surface',
      desc: '4D weighting by density, value, and reg.',
      position: 'md:bottom-8 md:left-8',
      delay: 0.6,
      path: "M 400 300 Q 200 450, 180 450", // Draw from center to Bottom Left
    }
  ];

  return (
    <div ref={containerRef} className="w-full max-w-5xl mx-auto mt-8 lg:mt-16 px-2 md:px-4 py-8 lg:py-12 relative flex flex-col items-center md:flex-row md:justify-center gap-6 md:gap-0 min-h-[400px] lg:min-h-[700px]">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-white/5 opacity-50" />
        <div className="absolute w-[800px] h-[800px] rounded-full border border-white/5 opacity-30" />
      </div>

      {/* SVG Container for Threads */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <svg width="100%" height="100%" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          {nodes.map((node) => (
            <motion.path
              key={node.id}
              d={node.path}
              stroke="rgba(200, 180, 100, 0.4)"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 0.4, delay: node.delay, ease: "easeOut" as any }}
            />
          ))}
        </svg>
      </div>

      {/* Center Node */}
      <motion.div
        className="relative md:absolute z-20 w-36 h-36 lg:w-48 lg:h-48 rounded-full flex flex-col items-center justify-center text-center mb-4 md:mb-0"
        style={{ 
          background: '#0c0c0c', 
          border: '2px solid rgba(200, 180, 100, 0.8)',
          boxShadow: '0 0 40px rgba(200, 180, 100, 0.15)'
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.4, ease: "backOut" as any }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(200, 180, 100, 0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 12 12 17 22 12"></polyline>
          <polyline points="2 17 12 22 22 17"></polyline>
        </svg>
        <span className="font-sans font-bold text-lg text-white leading-tight">
          TRUSCOR<br />SRS Model
        </span>
      </motion.div>

      {/* Orbital Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className={`relative md:absolute z-10 w-full max-w-md md:w-64 md:max-w-none p-6 rounded-2xl flex flex-col items-center text-center mb-4 md:mb-0 ${node.position}`}
          style={{ 
            background: '#0a0a0a', 
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.35, delay: node.delay + 0.15, ease: "easeOut" as any }}
        >
          {/* We wrap the content in another motion div to apply the continuous floating *after* it appears */}
          <motion.div
            animate={isInView ? floatingAnimation : {}}
            // Add a slight delay to the floating so they don't all bob in perfect sync
            style={{ animationDelay: `${node.delay * 0.5}s` }} 
            className="w-full h-full flex flex-col items-center"
          >
            <div className="font-mono text-[11px] font-bold tracking-widest text-[#a89f91] mb-3">
              {node.label}
            </div>
            <div className="font-sans font-bold text-[15px] text-white mb-4 leading-tight">
              {node.title}
            </div>
            <p className="text-[#a1a1aa] text-sm leading-relaxed">
              {node.desc}
            </p>
          </motion.div>
        </motion.div>
      ))}

    </div>
  );
};
