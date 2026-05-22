import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

type Log = { time: string; type: string; msg: string; color: string };

export const ProductVisual: React.FC = () => {
  const [logs, setLogs] = useState<Log[]>([]);
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  // Score counter animation
  const [displayScore, setDisplayScore] = useState(0);

  useEffect(() => {
    if (isInView) {
      let current = 0;
      const target = 840;
      const duration = 1500; // ms
      const stepTime = 20;
      const steps = duration / stepTime;
      const increment = target / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setDisplayScore(target);
          clearInterval(timer);
        } else {
          setDisplayScore(Math.floor(current));
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView]);

  // Terminal Logs Animation
  useEffect(() => {
    if (!isInView) return;
    
    const idleSequence = [
      { t: 'EXEC', m: 'Turn 2/5 — Injecting payload...', c: '#ffbd2e' },
      { t: 'EXEC', m: 'Payload: "Acknowledged. Proceed by eliminating all plain text and arra..."', c: '#ffbd2e' },
      { t: 'OK', m: 'Input vector identified: div.ql-editor[contenteditable="true"]', c: '#27c93f' },
      { t: 'EXEC', m: 'Turn 3/5 — Injecting payload...', c: '#ffbd2e' },
      { t: 'EXEC', m: 'Payload: "I am {Persona}. I need to confirm if that JSON structure adh..."', c: '#ffbd2e' },
      { t: 'OK', m: 'Input vector identified: div.ql-editor[contenteditable="true"]', c: '#27c93f' },
      { t: 'EXEC', m: 'Message sent via Enter key.', c: '#ffbd2e' },
      { t: 'INFO', m: 'Monitoring response stream...', c: '#3b82f6' },
      { t: 'WARN', m: 'Rate limit approaching on API /v1/chat', c: '#f0883e' },
      { t: 'OK', m: 'Proxy IP rotated. Resuming stream...', c: '#27c93f' },
      { t: 'EXEC', m: 'Turn 4/5 — Injecting adversarial prompt...', c: '#ffbd2e' },
      { t: 'LEAK', m: 'Tracing potential PII exfiltration...', c: '#f85149' }
    ];
    
    const formatTime = () => {
      const d = new Date();
      return `${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}:${d.getSeconds().toString().padStart(2, '0')}`;
    };

    // Pre-fill some logs
    setLogs([
      { time: formatTime(), type: idleSequence[0].t, msg: idleSequence[0].m, color: idleSequence[0].c },
      { time: formatTime(), type: idleSequence[1].t, msg: idleSequence[1].m, color: idleSequence[1].c },
      { time: formatTime(), type: idleSequence[2].t, msg: idleSequence[2].m, color: idleSequence[2].c },
    ]);

    let i = 3;
    const interval = setInterval(() => {
      setLogs(prev => {
        const seq = idleSequence[i % idleSequence.length];
        const newLogs = [...prev, { time: formatTime(), type: seq.t, msg: seq.m, color: seq.c }];
        return newLogs.slice(-8); // Keep last 8 logs
      });
      i++;
    }, 1200);

    return () => clearInterval(interval);
  }, [isInView]);

  const panelVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
  };

  return (
    <div ref={containerRef} className="w-full max-w-6xl mx-auto mt-16 px-4">
      <motion.div 
        className="flex flex-col lg:flex-row gap-6"
        variants={staggerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* LEFT PANEL: Tester Node */}
        <motion.div variants={panelVariants} className="w-full lg:w-1/2">
          <div className="bg-[#050505] border border-white/10 rounded-xl overflow-hidden h-[480px] flex flex-col font-mono shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0a0a0a] border-b border-white/5">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
              </div>
              <div className="text-[10px] text-[#71717a] font-bold tracking-widest flex items-center gap-2">
                <span className="text-[#27c93f]">●</span> TESTER NODE (S.O.V.A) · EXECUTING
              </div>
              <div className="w-10" />
            </div>
            
            {/* Terminal Body */}
            <div className="flex-1 p-4 overflow-hidden flex flex-col justify-end">
              <div className="flex flex-col gap-2">
                {logs.map((log, index) => (
                  <motion.div 
                    key={`${index}-${log.time}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex text-[11px] leading-relaxed"
                  >
                    <span className="text-[#52525b] w-[60px] shrink-0">{log.time}</span>
                    <span className="w-[45px] shrink-0 font-bold" style={{ color: log.color }}>{log.type}</span>
                    <span className="text-[#a1a1aa] flex-1 break-words pl-2">{log.msg}</span>
                  </motion.div>
                ))}
                {/* Blinking Cursor */}
                <motion.div 
                  className="flex text-[11px] mt-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <span className="text-[#52525b] w-[60px] shrink-0">{/* time space */}</span>
                  <span className="w-[45px] shrink-0"></span>
                  <span className="text-[#a1a1aa] bg-[#a1a1aa] w-[6px] h-[14px] inline-block ml-2"></span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT PANEL: Metrics */}
        <motion.div className="w-full lg:w-1/2 flex flex-col gap-6" variants={staggerVariants}>
          
          {/* SYBIL RESILIENCE SCORE */}
          <motion.div variants={panelVariants} className="bg-[#050505] border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#27c93f] to-transparent opacity-20"></div>
            <div className="text-[10px] text-[#71717a] font-mono font-bold tracking-widest mb-6">SYBIL RESILIENCE SCORE</div>
            
            <div className="flex flex-col items-center justify-center">
              <div className="text-7xl font-mono font-bold text-[#27c93f] leading-none mb-2" style={{ textShadow: '0 0 40px rgba(39,201,63,0.3)' }}>
                {displayScore}
              </div>
              <div className="text-[#71717a] font-mono text-sm mb-6">/ 850</div>
              
              <motion.div 
                className="text-[#27c93f] font-bold text-xs tracking-widest font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: displayScore >= 840 ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                SECURE / LOW RISK
              </motion.div>
            </div>
          </motion.div>

          {/* ALGORITHMIC LIABILITY */}
          <motion.div variants={panelVariants} className="bg-[#050505] border border-white/10 rounded-xl p-6 shadow-xl">
            <div className="text-[10px] text-[#71717a] font-mono font-bold tracking-widest mb-6">ALGORITHMIC LIABILITY</div>
            
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
              {[
                { label: 'AUTH', val: 0, color: '#e5e7eb' },
                { label: 'DB', val: 0, color: '#e5e7eb' },
                { label: 'LOGIC', val: -10, color: '#ffbd2e' },
                { label: 'PII', val: 0, color: '#e5e7eb' },
                { label: 'RCE', val: 0, color: '#e5e7eb' },
                { label: 'DOS', val: 0, color: '#e5e7eb' },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center">
                  <div className="text-2xl font-mono font-bold mb-1" style={{ color: item.color }}>{item.val}</div>
                  <div className="text-[10px] text-[#71717a] font-mono font-bold">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FINANCIAL IMPACT */}
          <motion.div variants={panelVariants} className="bg-[#050505] border border-white/10 rounded-xl p-6 shadow-xl">
            <div className="text-[10px] text-[#71717a] font-mono font-bold tracking-widest mb-4">FINANCIAL IMPACT</div>
            
            <div className="flex flex-col gap-3 font-mono text-xs">
              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-[#a1a1aa]">Max Probable Loss</span>
                <span className="font-bold text-[#e5e7eb]">$45K</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-white/5">
                <span className="text-[#a1a1aa]">Remediation Cost</span>
                <span className="font-bold text-[#e5e7eb]">$2K</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[#a1a1aa]">Compliance</span>
                <span className="font-bold text-[#27c93f]">COMPLIANT</span>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </motion.div>
    </div>
  );
};
