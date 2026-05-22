import React from 'react';
import { motion, useInView } from 'framer-motion';

export const LiveSoftwareVisual: React.FC = () => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <div ref={containerRef} className="w-full mx-auto mt-12 px-4">
      <div className="grid md:grid-cols-2 gap-6 items-start">
        
        {/* LEFT: Strike In Progress */}
        <motion.div 
          className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10"
          style={{ background: '#0a0a0a' }}
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Mac-style header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 text-center text-[10px] font-mono text-white/40 tracking-wider">TRUSCOR</div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-white/50 tracking-wider">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#28c840] animate-pulse" />
              STRIKE IN PROGRESS
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <img 
              src="/strike-panel.png" 
              alt="S.O.V.A Strike In Progress — Live test simulation showing tester node logs, victim telemetry, and real-time scoring" 
              className="w-full h-auto block"
              loading="lazy"
            />
            {/* Subtle scan line animation for "live" feel */}
            <motion.div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(180deg, transparent 0%, rgba(167,112,255,0.03) 50%, transparent 100%)',
                backgroundSize: '100% 30px',
              }}
              animate={{ y: [0, 30] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            {/* Live indicator dot */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1">
              <motion.div 
                className="w-2 h-2 rounded-full bg-[#28c840]"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-[9px] font-mono text-white/70 tracking-wider">LIVE</span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Audit Complete */}
        <motion.div 
          className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10"
          style={{ background: '#0a0a0a' }}
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Mac-style header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 text-center text-[10px] font-mono text-white/40 tracking-wider">TRUSCOR</div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-white/50 tracking-wider">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent-purple)]" />
              AUDIT COMPLETE
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <img 
              src="/audit-panel.png" 
              alt="Actuarial Audit Report — Final score 680/850, risk metrics, and forensic stack trace" 
              className="w-full h-auto block"
              loading="lazy"
            />
            {/* Completed badge */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm rounded-full px-2.5 py-1">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="4" stroke="#28c840" strokeWidth="1.5"/><path d="M3 5l1.5 1.5L7 4" stroke="#28c840" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span className="text-[9px] font-mono text-white/70 tracking-wider">COMPLETE</span>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
