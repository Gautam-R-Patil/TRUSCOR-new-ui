import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const DemoTeaser: React.FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section 
      ref={containerRef}
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ 
        padding: 'clamp(2rem, 5vw, 5rem) 0',
        background: 'transparent'
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
        >
          <div className="font-mono text-[12px] font-bold tracking-[0.3em] text-accent mb-4 uppercase">
            — See It In Action
          </div>
          <h2 className="font-sans font-extrabold text-[#040224] tracking-tight" style={{ fontSize: '2.5rem', lineHeight: '1.15' }}>
            S.O.V.A Demo
          </h2>
          <p className="text-gray-700 font-medium mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
            Watch our autonomous test engine spawn multiple testers coordinating together to breach, audit, and score an enterprise AI system — in real time.
          </p>
        </motion.div>

        {/* Video Window */}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto"
          style={{ 
            border: '1px solid rgba(0,0,0,0.08)',
            maxWidth: '1100px'
          }}
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.96 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Mac-style header */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10" style={{ background: '#0c0c0c' }}>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 text-center text-[11px] font-mono text-white/40 tracking-widest">TRUSCOR · S.O.V.A DEMO</div>
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/40 tracking-wider">
              <motion.span 
                className="inline-block w-1.5 h-1.5 rounded-full bg-[#28c840]"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              LIVE
            </div>
          </div>

          {/* Video — autoplay muted */}
          <div className="relative bg-black">
            <video 
              src="/demo-teaser.mp4"
              className="w-full h-auto block"
              playsInline
              preload="auto"
              autoPlay
              muted
              loop
              controls
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
