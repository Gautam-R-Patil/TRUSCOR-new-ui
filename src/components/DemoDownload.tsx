import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

export const DemoDownload: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" as any } 
    }
  };

  // 3D Tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-200, 200], [15, -15]);
  const rotateY = useTransform(x, [-200, 200], [-15, 15]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Score counter
  const [score, setScore] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, 680, {
        duration: 3,
        ease: "easeOut" as any,
        onUpdate: (val) => setScore(Math.floor(val))
      });
      return controls.stop;
    }
  }, [isInView]);

  // Glitching logs
  const [logText, setLogText] = useState("> INITIALIZING S.O.V.A ENGINE...");
  useEffect(() => {
    const logs = [
      "> INJECTING PAYLOAD INTO DOM...",
      "> MAPPING API ENDPOINTS...",
      "> EXTRACTING EXPOSED PII...",
      "> SIMULATING LATERAL MOVEMENT...",
      "> GENERATING ACTUARIAL REPORT..."
    ];
    let i = 0;
    const interval = setInterval(() => {
      setLogText(logs[i]);
      i = (i + 1) % logs.length;
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="scroll-section" id="technology" style={{ zIndex: 3 }}>
      <div className="split-layout">
        <motion.div
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={containerVariants}
        >
          <motion.div variants={textItemVariants} className="eyebrow">THE SOVA DEMO</motion.div>
          <motion.h2 variants={textItemVariants} className="headline-section mb-2">
            See what a full audit<br />
            <span className="text-muted">looks like.</span>
          </motion.h2>
          <motion.p variants={textItemVariants} className="font-sans font-medium text-gray-700" style={{ fontSize: '1.15rem', lineHeight: '1.6', marginBottom: '2rem', maxWidth: '450px' }}>
            The S.O.V.A demo shows a complete 5-tier adversarial audit on a sample enterprise AI interface — including test logs, score breakdown, financial exposure modeling, and <strong className="text-[#040224] font-extrabold">remediation recommendations.</strong>
          </motion.p>
          <motion.ul variants={textItemVariants} className="font-sans font-medium text-gray-800" style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', fontSize: '1.05rem', lineHeight: 2 }}>
            <li><strong className="text-accent">·</strong> Complete SRS score breakdown (A through D)</li>
            <li><strong className="text-accent">·</strong> Live test session logs from S.O.V.A</li>
            <li><strong className="text-accent">·</strong> Financial exposure + Max Probable Loss model</li>
            <li><strong className="text-accent">·</strong> Remediation priority matrix</li>
          </motion.ul>
          <motion.div variants={textItemVariants}>
            <a href="#" className="btn-primary relative overflow-hidden group" style={{ marginBottom: '0.5rem' }}>
              <span className="relative z-10">↓ Download Demo</span>
              <motion.div 
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" as any }}
              />
            </a>

          </motion.div>
        </motion.div>
        
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          onViewportEnter={() => setIsInView(true)}
          variants={{
            hidden: { opacity: 0, scale: 0.85, rotateY: -30 },
            visible: { opacity: 1, scale: 1, rotateY: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as any, delay: 0.2 } }
          }}
          style={{ alignItems: 'center', perspective: '1200px' }}
          className="relative"
        >
          {/* Animated Background Ring */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20"
            style={{ width: '130%', aspectRatio: '1/1', zIndex: 0 }}
            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
            transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" as any }, scale: { duration: 4, repeat: Infinity, ease: "easeInOut" as any } }}
          />

          <motion.div 
            className="demo-preview relative overflow-hidden bg-white/95"
            style={{ rotateX, rotateY, zIndex: 10, cursor: 'crosshair', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as any }}
          >
            {/* Subtle scanning laser over the report */}
            <motion.div 
              style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '2px',
                background: 'rgba(167, 112, 255, 0.6)',
                boxShadow: '0 0 15px rgba(167, 112, 255, 0.5)'
              }}
              animate={{ top: ['0%', '100%', '0%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" as any }}
            />
            
            <div className="font-mono tracking-wide relative z-10" style={{ fontSize: '12px', marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', opacity: 0.7 }}>
              <span>TRUSCOR</span>
              <span>REV. 2026.04</span>
            </div>
            
            <div className="relative z-10" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', marginBottom: '8px', letterSpacing: '0.05em' }}>AUDIT REPORT</h3>
              <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>SAMPLE ENTERPRISE</div>
              
              <motion.div 
                style={{ fontSize: '13px', color: '#ef4444', marginTop: '8px', fontWeight: 600, letterSpacing: '0.1em' }}
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                CONFIDENTIAL
              </motion.div>
            </div>

            {/* Dynamic Console Log Area */}
            <div className="bg-[#0a0a0a] rounded-lg p-3 mb-6 relative z-10 border border-white/10 shadow-inner overflow-hidden text-left">
              <motion.div 
                className="font-mono text-[10px] font-bold"
                style={{ color: '#00ff66' }}
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, ease: "steps(2)" as any }}
              >
                {logText}
              </motion.div>
            </div>

            <div className="font-mono relative z-10 text-left" style={{ fontSize: '13px', paddingTop: '1.5rem', borderTop: '1px solid #e5e7eb' }}>
              <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>SYBIL RESILIENCE SCORE:</span> 
                <strong style={{ fontSize: '1.2rem', color: score < 500 ? '#ef4444' : (score < 700 ? '#ffbd2e' : '#27c93f'), transition: 'color 0.5s' }}>
                  {score}/850
                </strong>
              </div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full mt-3 mb-5 overflow-hidden shadow-inner">
                <motion.div 
                  className="h-full rounded-full"
                  style={{ backgroundColor: score < 500 ? '#ef4444' : (score < 700 ? '#ffbd2e' : '#27c93f') }}
                  initial={{ width: 0 }}
                  animate={{ width: `${(score / 850) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="text-gray-500">PREPARED BY: <span className="font-bold text-[#040224]">S.O.V.A ENGINE</span></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
