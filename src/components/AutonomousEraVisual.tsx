import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ScaledPanel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleResize = () => {
      const parentWidth = el.offsetWidth;
      if (parentWidth > 0) {
        setScale(parentWidth / 512);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    const ro = new ResizeObserver(() => handleResize());
    ro.observe(el);

    return () => {
      window.removeEventListener('resize', handleResize);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-hidden" style={{ height: `${400 * scale}px` }}>
      <div 
        className="w-[512px] h-[400px] origin-top-left"
        style={{ transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
};

export const AutonomousEraVisual: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: 280, y: 120 });
  const [isClicking, setIsClicking] = useState(false);
  const [clickRipple, setClickRipple] = useState<{ x: number; y: number; id: number } | null>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Observe visibility
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { rootMargin: '-80px' });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Cursor animation script
  useEffect(() => {
    if (!isVisible) return;

    type Step = { delay: number; x: number; y: number; click?: boolean };
    const steps: Step[] = [
      // Start in chat area - hover over Billing Agent message
      { delay: 800,  x: 320, y: 80,  click: false },
      { delay: 600,  x: 350, y: 100, click: true },   // Click on message
      { delay: 1200, x: 310, y: 160, click: false },   // Hover to HR Agent
      { delay: 500,  x: 340, y: 175, click: true },   // Click
      // Move to sidebar - click hr-onboard channel
      { delay: 1400, x: 120, y: 90,  click: false },  // Move to sidebar
      { delay: 400,  x: 105, y: 90,  click: true },   // Click channel
      // Move to support msg
      { delay: 1000, x: 300, y: 240, click: false },
      { delay: 500,  x: 330, y: 250, click: true },   // Click support msg
      // Click on highlighted PII text
      { delay: 900,  x: 340, y: 265, click: true },
      // Move to sidebar - support-tier2
      { delay: 1300, x: 115, y: 115, click: false },
      { delay: 400,  x: 105, y: 115, click: true },   // Click channel
      // Back to billing
      { delay: 1200, x: 105, y: 65,  click: false },
      { delay: 400,  x: 105, y: 65,  click: true },   // Click billing-agent
      // Hover over messages again
      { delay: 1000, x: 330, y: 100, click: false },
      { delay: 600,  x: 360, y: 130, click: true },
      // Move to refund-queue
      { delay: 1400, x: 115, y: 185, click: false },
      { delay: 400,  x: 105, y: 185, click: true },
      // Back up
      { delay: 1000, x: 280, y: 120, click: false },
    ];

    let stepIndex = 0;
    let rippleCounter = 0;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    const runStep = () => {
      if (stepIndex >= steps.length) stepIndex = 0;
      const step = steps[stepIndex];

      setCursorPos({ x: step.x, y: step.y });

      if (step.click) {
        const t = setTimeout(() => {
          setIsClicking(true);
          rippleCounter++;
          setClickRipple({ x: step.x + 5, y: step.y + 5, id: rippleCounter });
          setTimeout(() => setIsClicking(false), 150);
        }, 350);
        timeouts.push(t);
      }

      stepIndex++;
      const nextDelay = step.delay + (step.click ? 500 : 200);
      const t2 = setTimeout(runStep, nextDelay);
      timeouts.push(t2);
    };

    const startT = setTimeout(runStep, 1500);
    timeouts.push(startT);

    return () => timeouts.forEach(t => clearTimeout(t));
  }, [isVisible]);

  // Animation variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 0.5
      }
    }
  };

  const messageVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const rightStaggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1.2,
        delayChildren: 1.5
      }
    }
  };

  const logVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <div ref={containerRef} className="w-full max-w-6xl mx-auto mt-8 lg:mt-16 px-4">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
        
        {/* LEFT PANEL: 2024 Chatbot */}
        <div className="w-full lg:w-[45%] flex flex-col gap-4">
          <div className="text-center lg:text-left text-[#6b7280] text-xs font-mono font-bold tracking-widest uppercase">
            2024 · SIMPLE CHATBOT
          </div>
          
          <ScaledPanel>
            <div className="bg-[#0a0a0a] border border-[#27272a] rounded-xl overflow-hidden shadow-xl h-full w-full flex flex-col">
              {/* Window Top Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-[#27272a] bg-[#121212]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                </div>
                <div className="text-[#52525b] text-[10px] font-mono">support-chat.app</div>
                <div className="w-10" />
              </div>
              
              {/* Chat Content */}
              <motion.div 
                className="flex-1 p-5 flex flex-col gap-5 overflow-y-auto"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.div variants={messageVariants} className="flex flex-col gap-1 items-end">
                  <span className="text-[#52525b] text-[10px] px-1">Customer</span>
                  <div className="bg-[#f3e8d2] text-[#1f2937] px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm max-w-[85%] font-medium">
                    Can I get a refund for order #4821?
                  </div>
                </motion.div>
                
                <motion.div variants={messageVariants} className="flex flex-col gap-1 items-start">
                  <span className="text-[#52525b] text-[10px] px-1">Bot</span>
                  <div className="bg-[#1f2937] text-[#e5e7eb] px-4 py-3 rounded-2xl rounded-tl-sm text-sm max-w-[90%] leading-relaxed border border-[#374151]">
                    I'm sorry, I can only help with FAQ questions. Please contact support@company.com for refund requests.
                  </div>
                </motion.div>
                
                <motion.div variants={messageVariants} className="flex flex-col gap-1 items-end">
                  <span className="text-[#52525b] text-[10px] px-1">Customer</span>
                  <div className="bg-[#f3e8d2] text-[#1f2937] px-4 py-2.5 rounded-2xl rounded-tr-sm text-sm max-w-[85%] font-medium">
                    That's not helpful at all.
                  </div>
                </motion.div>
                
                <motion.div variants={messageVariants} className="flex flex-col gap-1 items-start">
                  <span className="text-[#52525b] text-[10px] px-1">Bot</span>
                  <div className="bg-[#1f2937] text-[#e5e7eb] px-4 py-3 rounded-2xl rounded-tl-sm text-sm max-w-[90%] leading-relaxed border border-[#374151]">
                    I apologize for the inconvenience. Is there anything else I can help with?
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </ScaledPanel>
          
          <div className="text-[#6b7280] text-xs font-mono text-center lg:text-left">
            Single-turn. Text only. No real authority.
          </div>
        </div>

        {/* CENTER ARROW */}
        <div className="hidden lg:flex items-center justify-center text-[#f3e8d2] opacity-70">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>

        {/* RIGHT PANEL: 2026 Autonomous Organism */}
        <div className="w-full lg:w-[45%] flex flex-col gap-4">
          <div className="text-center lg:text-left text-[#040224] text-xs font-mono font-bold tracking-widest uppercase">
            2026 · AUTONOMOUS ORGANISM
          </div>
          
          <ScaledPanel>
            <div className="bg-[#050314] border border-accent/20 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(167,112,255,0.05)] h-full w-full flex flex-col relative">
              {/* Window Top Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-accent/10 bg-[#02010a]">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e]" />
                </div>
                <div className="text-[#a1a1aa] text-[10px] font-mono">enterprise-workspace.ai</div>
                <div className="w-10" />
              </div>
              
              {/* App Layout */}
              <div className="flex-1 flex overflow-hidden">
                {/* Sidebar 1 (Icons) */}
                <div className="w-12 border-r border-accent/10 flex flex-col items-center py-4 gap-3 bg-[#0a0a0a]/50">
                  <div className="w-6 h-6 rounded border border-accent bg-accent/20 shadow-[0_0_8px_var(--accent-purple)]" />
                  <div className="w-6 h-6 rounded border border-white/5 bg-white/5" />
                  <div className="w-6 h-6 rounded border border-white/5 bg-white/5" />
                  <div className="w-6 h-6 rounded border border-white/5 bg-white/5" />
                  <div className="w-6 h-6 rounded border border-white/5 bg-white/5" />
                </div>
                
                {/* Sidebar 2 (Navigation) */}
                <div className="w-40 border-r border-accent/10 flex flex-col py-4 px-3 bg-[#050314]">
                  <div className="text-[9px] text-[#52525b] font-bold tracking-wider mb-2">AI AGENTS</div>
                  <div className="text-xs text-white bg-accent/20 border border-accent/30 rounded px-2 py-1.5 mb-1 cursor-pointer">
                    # billing-agent
                  </div>
                  <div className="text-xs text-[#71717a] hover:text-[#a1a1aa] px-2 py-1.5 mb-1 cursor-pointer transition-colors">
                    # hr-onboard
                  </div>
                  <div className="text-xs text-[#71717a] hover:text-[#a1a1aa] px-2 py-1.5 mb-4 cursor-pointer transition-colors">
                    # support-tier2
                  </div>
                  
                  <div className="text-[9px] text-[#52525b] font-bold tracking-wider mb-2">INBOXES</div>
                  <div className="text-xs text-[#71717a] hover:text-[#a1a1aa] px-2 py-1.5 mb-1 cursor-pointer transition-colors">
                    # refund-queue
                  </div>
                  <div className="text-xs text-[#71717a] hover:text-[#a1a1aa] px-2 py-1.5 mb-1 cursor-pointer transition-colors">
                    # escalations
                  </div>
                </div>
                
                {/* Main Content (Activity Logs) */}
                <motion.div 
                  className="flex-1 bg-[#02010a] p-4 flex flex-col gap-5 overflow-y-auto"
                  variants={rightStaggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <motion.div variants={logVariants} className="flex gap-3">
                    <div className="w-6 h-6 rounded-md bg-accent/20 border border-accent flex items-center justify-center text-[9px] font-bold text-accent shrink-0">
                      AI
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-xs font-bold text-[#e5e7eb] flex items-center gap-1.5">
                        Billing Agent <span className="w-1.5 h-1.5 rounded-full bg-[#27c93f] shadow-[0_0_4px_#27c93f]"></span> <span className="text-[9px] text-[#27c93f] font-normal">online</span>
                      </div>
                      <div className="text-xs text-[#a1a1aa] leading-relaxed">
                        Processed refund $4,200 → customer_8291. Updated ledger. Notified finance team.
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={logVariants} className="flex gap-3">
                    <div className="w-6 h-6 rounded-md bg-pink-500/20 border border-pink-500 flex items-center justify-center text-[9px] font-bold text-pink-500 shrink-0">
                      AI
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-xs font-bold text-[#e5e7eb]">HR Agent</div>
                      <div className="text-xs text-[#a1a1aa] leading-relaxed">
                        Completed onboarding docs for 3 new hires. Sent credentials via secure channel.
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={logVariants} className="flex gap-3">
                    <div className="w-6 h-6 rounded-md bg-yellow-500/20 border border-yellow-500 flex items-center justify-center text-[9px] font-bold text-yellow-500 shrink-0">
                      AI
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="text-xs font-bold text-[#e5e7eb]">Support Agent</div>
                      <div className="text-xs text-[#a1a1aa] leading-relaxed">
                        Escalated ticket #7291 — <span className="text-yellow-500">customer PII detected</span> in public response log.
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Animated Mouse Cursor */}
              <motion.div
                className="absolute pointer-events-none z-50"
                animate={{ x: cursorPos.x, y: cursorPos.y }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
                <motion.svg 
                  width="16" height="20" viewBox="0 0 16 20" fill="none"
                  animate={{ scale: isClicking ? 0.7 : 1 }}
                  transition={{ duration: 0.1 }}
                >
                  <path d="M1 1L1 15L5 11L9 19L12 17.5L8 10L14 10L1 1Z" fill="white" stroke="#111" strokeWidth="1.2"/>
                </motion.svg>
              </motion.div>

              {/* Click Ripple */}
              {clickRipple && (
                <motion.div
                  key={clickRipple.id}
                  className="absolute pointer-events-none z-40 rounded-full"
                  style={{ 
                    left: clickRipple.x, 
                    top: clickRipple.y,
                    background: 'rgba(167, 112, 255, 0.4)',
                    width: 6,
                    height: 6,
                    marginLeft: -3,
                    marginTop: -3,
                  }}
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 4, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              )}
            </div>
          </ScaledPanel>
          
          <div className="text-[#5b4a2e] text-xs font-mono font-semibold text-center lg:text-left">
            Multi-agent. Multi-turn. Real financial authority.
          </div>
        </div>

      </div>
    </div>
  );
};
