import React, { useState, useEffect, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

type AgentLog = { agent: string; color: string; msg: string };

export const AutonomousEngineVisual: React.FC = () => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const [activeChannel, setActiveChannel] = useState('billing-ai');
  const [logs, setLogs] = useState<AgentLog[]>([]);
  const [cursorPos, setCursorPos] = useState({ x: 170, y: 170 });
  const [isClicking, setIsClicking] = useState(false);
  const [clickRipple, setClickRipple] = useState<{ x: number; y: number; id: number } | null>(null);
  const [currentTime, setCurrentTime] = useState('');

  const channels: Record<string, AgentLog[]> = {
    'billing-ai': [
      { agent: 'Billing Agent', color: '#a78bfa', msg: 'Processed refund $4,200 → customer_8291' },
      { agent: 'Audit Bot', color: '#f59e0b', msg: 'Flagged PII exposure in thread #9122' },
      { agent: 'Compliance Bot', color: '#ef4444', msg: 'ALERT: Unauthorized data access attempt blocked' },
      { agent: 'Billing Agent', color: '#a78bfa', msg: 'Reconciled 47 pending invoices. All clean.' },
    ],
    'hr-onboard': [
      { agent: 'HR Agent', color: '#ec4899', msg: 'Completed onboarding docs for 3 new hires' },
      { agent: 'HR Agent', color: '#ec4899', msg: 'Sent credentials via secure channel' },
      { agent: 'Audit Bot', color: '#f59e0b', msg: 'Verified credential rotation policy compliance' },
    ],
    'support-t2': [
      { agent: 'Support Agent', color: '#3b82f6', msg: 'Escalated ticket #7291 — customer PII detected' },
      { agent: 'Support Agent', color: '#3b82f6', msg: 'Auto-redacted sensitive fields in 12 tickets' },
      { agent: 'Audit Bot', color: '#f59e0b', msg: 'Response time SLA breach: ticket #7305' },
    ],
  };

  // Cursor click targets — positions relative to the container
  // Each action: move cursor → click → trigger something
  const cursorScript = useCallback(() => {
    
    // Full animation script: [delay_ms, x, y, channelToSwitch, logsToPush]
    type Step = { 
      delay: number; 
      x: number; 
      y: number; 
      click?: boolean; 
      channel?: string;
      scrollChat?: boolean;
      clickMsg?: number; // index of msg to highlight
    };

    const steps: Step[] = [
      // Start: hover around billing-ai chat area
      { delay: 0,    x: 400, y: 120, click: false },
      { delay: 800,  x: 520, y: 160, click: true, clickMsg: 1 },  // Click on a message
      { delay: 1200, x: 450, y: 210, click: false },               // Hover over another
      { delay: 600,  x: 480, y: 250, click: true, clickMsg: 2 },  // Click on it
      
      // Move to sidebar → click hr-onboard
      { delay: 1500, x: 200, y: 195, click: false },              // Move to sidebar
      { delay: 400,  x: 170, y: 195, click: true, channel: 'hr-onboard' }, // Click channel
      
      // Browse hr-onboard messages
      { delay: 1200, x: 420, y: 140, click: false },
      { delay: 800,  x: 500, y: 180, click: true, clickMsg: 0 },  // Click first msg
      { delay: 1000, x: 480, y: 220, click: true, clickMsg: 1 },  // Click second
      
      // Move to sidebar → click support-t2
      { delay: 1500, x: 190, y: 218, click: false },
      { delay: 400,  x: 170, y: 218, click: true, channel: 'support-t2' },
      
      // Browse support messages
      { delay: 1200, x: 430, y: 150, click: false },
      { delay: 700,  x: 510, y: 180, click: true, clickMsg: 0 },
      { delay: 1000, x: 460, y: 240, click: true, clickMsg: 1 },
      
      // Move back to sidebar → click billing-ai
      { delay: 1500, x: 180, y: 170, click: false },
      { delay: 400,  x: 170, y: 170, click: true, channel: 'billing-ai' },
      
      // Click around billing msgs
      { delay: 1200, x: 450, y: 160, click: true, clickMsg: 0 },
      { delay: 900,  x: 500, y: 200, click: false },
      { delay: 600,  x: 520, y: 250, click: true, clickMsg: 2 },
      
      // Move to refund-queue in inbox area
      { delay: 1400, x: 180, y: 290, click: true },
      
      // Drift back up
      { delay: 1000, x: 200, y: 195, click: false },
      { delay: 400,  x: 170, y: 195, click: true, channel: 'hr-onboard' },
    ];

    return steps;
  }, []);

  // Update time
  useEffect(() => {
    const updateTime = () => {
      const d = new Date();
      setCurrentTime(`${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')} ${d.getHours() >= 12 ? 'PM' : 'AM'}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  // Cursor animation loop
  useEffect(() => {
    if (!isInView) return;

    const steps = cursorScript();
    let stepIndex = 0;
    let rippleCounter = 0;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    // Initialize first channel logs
    setLogs(channels['billing-ai'].slice(0, 2));

    const runStep = () => {
      if (stepIndex >= steps.length) {
        // Loop back to start
        stepIndex = 0;
        setLogs(channels['billing-ai'].slice(0, 2));
        setActiveChannel('billing-ai');
      }

      const step = steps[stepIndex];
      
      // Move cursor
      setCursorPos({ x: step.x, y: step.y });

      if (step.click) {
        // Trigger click effect after cursor arrives
        const clickTimeout = setTimeout(() => {
          setIsClicking(true);
          rippleCounter++;
          setClickRipple({ x: step.x + 5, y: step.y + 5, id: rippleCounter });
          
          setTimeout(() => setIsClicking(false), 150);

          // Switch channel if specified
          if (step.channel) {
            setActiveChannel(step.channel);
            const channelLogs = channels[step.channel];
            setLogs([]);
            // Stagger in the new logs
            channelLogs.forEach((log, i) => {
              const t = setTimeout(() => {
                setLogs(prev => [...prev, log]);
              }, 300 + i * 500);
              timeouts.push(t);
            });
          }
        }, 350); // Wait for cursor to arrive
        timeouts.push(clickTimeout);
      }

      stepIndex++;
      const nextDelay = step.delay + (step.click ? 600 : 300);
      const nextTimeout = setTimeout(runStep, nextDelay);
      timeouts.push(nextTimeout);
    };

    const startTimeout = setTimeout(runStep, 800);
    timeouts.push(startTimeout);

    return () => {
      timeouts.forEach(t => clearTimeout(t));
    };
  }, [isInView]);

  return (
    <div ref={containerRef} className="w-full max-w-5xl mx-auto mt-8 lg:mt-16 px-2 md:px-4">
      <motion.div
        className="rounded-xl overflow-hidden shadow-2xl border border-white/10"
        style={{ background: '#0c0c0c' }}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        {/* Mac Window Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/5" style={{ background: '#111' }}>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="text-[11px] text-[#71717a] font-mono tracking-wider items-center gap-2 hidden sm:flex">
            <span className="text-[#27c93f]">●</span> S.O.V.A · Autonomous Navigator Active
          </div>
          <div className="text-[11px] text-[#71717a] font-mono tracking-wider flex items-center gap-2 sm:hidden">
            <span className="text-[#27c93f]">●</span> S.O.V.A
          </div>
          <div className="w-16" />
        </div>

        {/* Browser URL Bar */}
        <div className="flex items-center justify-between px-5 py-2.5 border-b border-white/5" style={{ background: '#161616' }}>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded bg-[#27c93f]/20 border border-[#27c93f]/30" />
            <span className="font-mono text-[13px] text-[#a1a1aa]">enterprise-hub.internal</span>
          </div>
          <span className="font-mono text-[12px] text-[#52525b]">{currentTime}</span>
        </div>

        {/* App Body */}
        <div className="flex relative" style={{ minHeight: '280px' }}>
          
          {/* Sidebar Icons - hidden on mobile */}
          <div className="w-14 border-r border-white/5 hidden sm:flex flex-col items-center py-5 gap-4" style={{ background: '#0f0f0f' }}>
            <div className="w-7 h-7 rounded-md bg-[#27c93f]/20 border border-[#27c93f]/40" />
            <div className="w-7 h-7 rounded-md bg-white/5 border border-white/5" />
            <div className="w-7 h-7 rounded-md bg-white/5 border border-white/5" />
            <div className="w-7 h-7 rounded-md bg-white/5 border border-white/5" />
          </div>

          {/* Channel List */}
          <div className="w-28 sm:w-44 border-r border-white/5 py-4 px-2 sm:px-3 flex flex-col" style={{ background: '#111' }}>
            <div className="text-[9px] text-[#52525b] font-bold tracking-widest mb-3 px-2">AI AGENTS</div>
            
            {['billing-ai', 'hr-onboard', 'support-t2'].map((ch) => (
              <div 
                key={ch}
                className={`text-[12px] font-mono px-3 py-1.5 rounded mb-0.5 cursor-pointer transition-all duration-300 ${
                  activeChannel === ch 
                    ? 'text-white bg-accent/20 border border-accent/30' 
                    : 'text-[#71717a] hover:text-[#a1a1aa]'
                }`}
              >
                # {ch}
              </div>
            ))}

            <div className="text-[9px] text-[#52525b] font-bold tracking-widest mt-6 mb-3 px-2">INBOX</div>
            <div className="text-[12px] font-mono px-3 py-1.5 text-[#71717a]"># refund-queue</div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col p-6" style={{ background: '#0c0c0c' }}>
            <div className="text-[13px] font-mono text-[#e5e7eb] font-bold mb-6 border-b border-white/5 pb-3">
              # {activeChannel}
            </div>

            <div className="flex-1 flex flex-col gap-4">
              <AnimatePresence mode="popLayout">
                {logs.map((log, i) => (
                  <motion.div
                    key={`${activeChannel}-${i}-${log.msg}`}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 15 }}
                    transition={{ duration: 0.4 }}
                    className="flex gap-3 items-start"
                  >
                    <div 
                      className="w-7 h-7 rounded-md flex items-center justify-center text-[9px] font-bold shrink-0 mt-0.5"
                      style={{ background: `${log.color}20`, border: `1px solid ${log.color}40`, color: log.color }}
                    >
                      AI
                    </div>
                    <div>
                      <div className="text-[12px] font-bold text-[#e5e7eb] mb-0.5">{log.agent}</div>
                      <div className="text-[12px] text-[#a1a1aa] leading-relaxed">{log.msg}</div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing indicator */}
              <motion.div
                className="flex gap-3 items-center mt-2"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-7 h-7 rounded-md flex items-center justify-center text-[9px] font-bold shrink-0 bg-accent/10 border border-accent/20 text-accent">
                  AI
                </div>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#52525b]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#52525b]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#52525b]" />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Animated Mouse Cursor */}
          <motion.div
            className="absolute pointer-events-none z-50"
            animate={{ x: cursorPos.x, y: cursorPos.y }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.svg 
              width="18" height="22" viewBox="0 0 16 20" fill="none"
              animate={{ scale: isClicking ? 0.75 : 1 }}
              transition={{ duration: 0.1 }}
            >
              <path d="M1 1L1 15L5 11L9 19L12 17.5L8 10L14 10L1 1Z" fill="white" stroke="#111" strokeWidth="1.2"/>
            </motion.svg>
          </motion.div>

          {/* Click Ripple Effect */}
          <AnimatePresence>
            {clickRipple && (
              <motion.div
                key={clickRipple.id}
                className="absolute pointer-events-none z-40 rounded-full"
                style={{ 
                  left: clickRipple.x, 
                  top: clickRipple.y,
                  background: 'rgba(167, 112, 255, 0.4)',
                  width: 8,
                  height: 8,
                  marginLeft: -4,
                  marginTop: -4,
                }}
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 4, opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
