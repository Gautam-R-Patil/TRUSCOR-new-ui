import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export const TechnologyMoatsVisual: React.FC = () => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Terminal Typing Effect State
  const [terminalText1, setTerminalText1] = useState('');
  const [terminalText2, setTerminalText2] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  const fullText1 = "> TRUSCORE-AI-2026-0137: Indexed.";
  const fullText2 = "> Infrastructure lock-in achieved.";

  useEffect(() => {
    if (!isInView) return;

    let activeTimers: (ReturnType<typeof setTimeout> | ReturnType<typeof setInterval>)[] = [];

    const typeText = (text: string, setter: React.Dispatch<React.SetStateAction<string>>, delay: number, onComplete?: () => void) => {
      let i = 0;
      const timeout = setTimeout(() => {
        const interval = setInterval(() => {
          setter(text.substring(0, i + 1));
          i++;
          if (i === text.length) {
            clearInterval(interval);
            activeTimers = activeTimers.filter(t => t !== interval);
            if (onComplete) onComplete();
          }
        }, 50);
        activeTimers.push(interval);
      }, delay);
      activeTimers.push(timeout);
    };

    const runSequence = () => {
      // Clear existing timers before restarting sequence
      activeTimers.forEach(timer => {
        clearTimeout(timer);
        clearInterval(timer);
      });
      activeTimers = [];

      setTerminalText1('');
      setTerminalText2('');
      typeText(fullText1, setTerminalText1, 1000, () => {
        typeText(fullText2, setTerminalText2, 500);
      });
    };

    runSequence();
    const loopInterval = setInterval(runSequence, 8000);

    return () => {
      activeTimers.forEach(timer => {
        clearTimeout(timer);
        clearInterval(timer);
      });
      clearInterval(loopInterval);
    };
  }, [isInView]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setCursorVisible(v => !v), 500);
    return () => clearInterval(interval);
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay: 0.1 * custom, ease: "easeOut" as any }
    })
  };

  return (
    <div ref={containerRef} className="w-full max-w-6xl mx-auto mt-8 lg:mt-16 p-3 md:p-8 rounded-[1.5rem] md:rounded-[2rem] bg-black">
      
      {/* Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        
        {/* Card 1: AI Failure Registry (Spans 2 cols on Desktop) */}
        <motion.div
          custom={1}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={cardVariants}
          className="lg:col-span-2 rounded-[1.5rem] p-5 md:p-10 flex flex-col justify-between relative overflow-hidden"
          style={{ 
            background: 'linear-gradient(135deg, #111111 0%, #0a0a0a 100%)',
            border: '1px solid rgba(255,255,255,0.05)'
          }}
        >
          {/* Subtle gradient glow in top right */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#a16207]/10 border border-[#a16207]/30 flex items-center justify-center mb-6">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
            </div>
            
            <h3 className="text-white font-sans font-bold text-2xl md:text-3xl mb-4 tracking-tight">The AI Failure Registry</h3>
            <p className="text-[#a1a1aa] font-medium text-base md:text-lg leading-relaxed max-w-2xl">
              The CVE database for LLM exploits. Every jailbreak, tool-misuse chain, and prompt injection is cataloged, versioned, scored, and attached to a reproducible Proof-of-Concept. Data compounds; math doesn't.
            </p>
          </div>

          <div className="mt-12 font-mono text-sm text-[#52525b] z-10 flex flex-col gap-1">
            <div className="flex h-5 items-center">
              <span>{terminalText1}</span>
            </div>
            <div className="flex h-5 items-center">
              <span>{terminalText2}</span>
              {terminalText1.length === fullText1.length && <span className={`ml-1 w-2 h-4 bg-[#52525b] ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} />}
            </div>
          </div>
        </motion.div>

        {/* Right Column Stack */}
        <div className="lg:col-span-1 flex flex-col gap-4 lg:gap-6">
          
          {/* Card 2: Replay Engine */}
          <motion.div
            custom={2}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="flex-1 rounded-[1.5rem] p-6 md:p-8 flex flex-col"
            style={{ 
              background: '#0a0a0a',
              border: '1px solid rgba(255,255,255,0.05)'
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-[#0d9488]/10 border border-[#0d9488]/30 flex items-center justify-center mb-5">
              <motion.svg 
                width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" as any }}
              >
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                <path d="M3 3v5h5"/>
              </motion.svg>
            </div>
            <h3 className="text-white font-sans font-bold text-xl mb-3 tracking-tight">The Replay Engine</h3>
            <p className="text-[#71717a] font-medium text-sm leading-relaxed">
              "Metasploit for LLMs." A one-click execution environment. Every known exploit attempted in 20 minutes.
            </p>
          </motion.div>

          {/* Card 3: Canary Network */}
          <motion.div
            custom={3}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="flex-1 rounded-[1.5rem] p-6 md:p-8 flex flex-col"
            style={{ 
              background: '#0a0a0a',
              border: '1px solid rgba(255,255,255,0.05)'
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-[#059669]/10 border border-[#059669]/30 flex items-center justify-center mb-5">
              <motion.svg 
                width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as any, times: [0, 0.1, 1] }}
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                <circle cx="12" cy="12" r="3"/>
              </motion.svg>
            </div>
            <h3 className="text-white font-sans font-bold text-xl mb-3 tracking-tight">Adversarial Canary Network</h3>
            <p className="text-[#71717a] font-medium text-sm leading-relaxed">
              A fleet of decoy AI honeypots disguised as real corporate chatbots, capturing zero-days in real-time.
            </p>
          </motion.div>
        </div>

        {/* Bottom Row - 2 Equal Columns */}
        <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {/* Card 4: Forensic Telemetry */}
          <motion.div
            custom={4}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="rounded-[1.5rem] p-6 md:p-8 flex flex-col"
            style={{ 
              background: '#0a0a0a',
              border: '1px solid rgba(255,255,255,0.05)'
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-[#b45309]/10 border border-[#b45309]/30 flex items-center justify-center mb-5">
              <motion.svg 
                width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" as any }}
              >
                <circle cx="12" cy="12" r="2"/>
                <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48 0a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"/>
              </motion.svg>
            </div>
            <h3 className="text-white font-sans font-bold text-xl mb-3 tracking-tight">Forensic Telemetry</h3>
            <p className="text-[#71717a] font-medium text-sm leading-relaxed">
              Lightweight SDK capturing cryptographically signed forensic packets. The flight data recorder for AI litigation.
            </p>
          </motion.div>

          {/* Card 5: Zero-Knowledge Audits */}
          <motion.div
            custom={5}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={cardVariants}
            className="rounded-[1.5rem] p-6 md:p-8 flex flex-col"
            style={{ 
              background: '#0a0a0a',
              border: '1px solid rgba(255,255,255,0.05)'
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-[#4338ca]/10 border border-[#4338ca]/30 flex items-center justify-center mb-5">
              <motion.svg 
                width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as any }}
              >
                <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </motion.svg>
            </div>
            <h3 className="text-white font-sans font-bold text-xl mb-3 tracking-tight">Zero-Knowledge Audits</h3>
            <p className="text-[#71717a] font-medium text-sm leading-relaxed">
              Cryptographic model attestation via TEEs to evaluate foundation models without exposing weights.
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
};
