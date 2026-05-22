import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC<{ hasLoaded: boolean }> = ({ hasLoaded }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax fade-out effect when scrolling down to the next section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  // Single corner orb expands smoothly on scroll (slower transition over full scroll range)
  const singleOrbScale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const singleOrbOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="orb-section">
      {/* Corner Orbs - Only the bottom-right one animates on scroll now */}
      <div className="corner-orb" style={{ top: '-150px', left: '-150px' }}></div>
      <div className="corner-orb" style={{ top: '-200px', right: '-150px' }}></div>
      <div className="corner-orb" style={{ bottom: '-150px', left: '-200px' }}></div>
      <motion.div className="corner-orb" style={{ bottom: '-150px', right: '-150px', scale: singleOrbScale, opacity: singleOrbOpacity }}></motion.div>

      <motion.div 
        className="w-full flex flex-col items-center justify-center max-w-5xl mx-auto relative z-10"
        style={{ scale, opacity, y }}
      >
        <motion.h1 
          className="hero-headline-serif"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={hasLoaded ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(8px)" }}
          transition={{ duration: 1.5, ease: "easeOut" as any, delay: 0.2 }}
        >
          The Actuarial Standard for<br />
          Agentic AI Liability
        </motion.h1>

        <motion.div 
          style={{ position: 'relative', width: '100%', maxWidth: '800px', height: 'clamp(280px, 50vw, 500px)', margin: '0 auto' }}
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={hasLoaded ? { opacity: 1, scale: 1, filter: "blur(0px)" } : { opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          transition={{ duration: 2.0, ease: "easeOut" as any, delay: 0.6 }}
        >
          {/* SVG Connection Lines */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} viewBox="0 0 800 500">
            {/* Top-Left: $1.2B Loss Avoidance */}
            <path d="M 165 120 L 230 120 L 270 170" fill="none" stroke="rgba(167, 112, 255, 0.5)" strokeWidth="1" />
            {/* Bottom-Left: 1,450 AI Models */}
            <path d="M 165 380 L 230 380 L 270 330" fill="none" stroke="rgba(167, 112, 255, 0.5)" strokeWidth="1" />
            {/* Top-Right: 92% Risk Level */}
            <path d="M 635 120 L 570 120 L 530 170" fill="none" stroke="rgba(167, 112, 255, 0.5)" strokeWidth="1" />
            {/* Bottom-Right: High Threat Detection */}
            <path d="M 635 380 L 570 380 L 530 330" fill="none" stroke="rgba(167, 112, 255, 0.5)" strokeWidth="1" />
          </svg>

          {/* Stat Labels */}
          <div className="stat-label-container" style={{ top: '95px', right: 'calc(50% + 235px)', textAlign: 'right', minWidth: '160px' }}>
            <div className="stat-val">$1.2B</div>
            <div className="stat-desc">Loss Avoidance</div>
          </div>
          
          <div className="stat-label-container" style={{ top: '355px', right: 'calc(50% + 235px)', textAlign: 'right', minWidth: '160px' }}>
            <div className="stat-val">1,450 AI</div>
            <div className="stat-desc">Models Audited</div>
          </div>

          <div className="stat-label-container" style={{ top: '95px', left: 'calc(50% + 235px)', textAlign: 'left', minWidth: '160px' }}>
            <div className="stat-val">92% Risk</div>
            <div className="stat-desc">Level Audit</div>
          </div>

          <div className="stat-label-container" style={{ top: '355px', left: 'calc(50% + 235px)', textAlign: 'left', minWidth: '160px' }}>
            <div className="stat-val">High Threat</div>
            <div className="stat-desc">Detection</div>
          </div>

          {/* The 3D Glass Orb */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="orb-container" style={{ margin: 0, position: 'relative' }}>
              <div className="absolute inset-0 w-full h-full flex items-center justify-center" style={{ animation: 'float 6s ease-in-out infinite' }}>
                <div className="orb-core"></div>
                <div className="orb-glass"></div>
              </div>
              
              {/* The Static 3D 'E' on top of the glass */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center z-50"
                style={{ perspective: '1000px' }}
              >
                <motion.div 
                  className="flex flex-col justify-between h-[110px] w-[104px]"
                  style={{ mixBlendMode: 'hard-light', transformStyle: 'preserve-3d' }}
                >
                  <div className="h-[22px] w-[80px] rounded-full shadow-[0_5px_20px_rgba(255,255,255,0.7)] border border-white/80 bg-gradient-to-b from-white/95 to-[#d8b4fe]/70 backdrop-blur-md" />
                  <div className="h-[22px] w-[80px] ml-6 rounded-full shadow-[0_5px_20px_rgba(255,255,255,0.7)] border border-white/80 bg-gradient-to-b from-white/95 to-[#d8b4fe]/70 backdrop-blur-md" />
                  <div className="h-[22px] w-[80px] rounded-full shadow-[0_5px_20px_rgba(255,255,255,0.7)] border border-white/80 bg-gradient-to-b from-white/95 to-[#d8b4fe]/70 backdrop-blur-md" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Enter Audit Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hasLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.0, delay: 1.2 }}
          style={{ marginTop: '0rem' }}
        >
          <a href="#section-audit" className="btn-pill" onClick={(e: React.MouseEvent) => { e.preventDefault(); document.querySelector('#section-audit')?.scrollIntoView({ behavior: 'smooth' }); }}>
            ENTER AUDIT
          </a>
        </motion.div>

        {/* Supporting Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={hasLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1.0, delay: 1.4 }}
          style={{ marginTop: '2rem', textAlign: 'center', maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '0 1rem' }}
        >
          <div className="font-sans font-bold text-gray-800 uppercase tracking-widest" style={{ fontSize: '0.9rem' }}>
            BUILT FOR THE $400B ENTERPRISE AI DEPLOYMENT WAVE
          </div>
          <p className="font-sans font-medium text-gray-700" style={{ fontSize: '1.15rem', lineHeight: '1.6' }}>
            We test the API, the UI, and the OS layer simultaneously in autonomous swarms — then grade what the world is struggling to even measure: <strong className="text-[#040224] font-extrabold">the true financial risk of corporate AI.</strong>
          </p>
        </motion.div>

      </motion.div>
    </section>
  );
};
