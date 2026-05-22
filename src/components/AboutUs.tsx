import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TopicAnimation } from './TopicAnimations';
import { AboutCanvas } from './AboutCanvas';
import { AutonomousEraVisual } from './AutonomousEraVisual';
import { AutonomousEngineVisual } from './AutonomousEngineVisual';
import { InsuranceViewVisual } from './InsuranceViewVisual';
import { MeasurementInstrumentVisual } from './MeasurementInstrumentVisual';
import { ActuarialEngineVisual } from './ActuarialEngineVisual';
import { TechnologyMoatsVisual } from './TechnologyMoatsVisual';
import { FinancialEndgameVisual } from './FinancialEndgameVisual';
import { BusinessModelPricingVisual } from './BusinessModelPricingVisual';
import { ReciprocalExchangeVisual } from './ReciprocalExchangeVisual';

// Virtual section: mounts children when near viewport, but DOES NOT UNMOUNT them.
// This prevents catastrophic scroll jumping caused by document height collapsing above the viewport.
const InViewSection: React.FC<{ children: React.ReactNode; minHeight?: string }> = ({ children, minHeight = '200px' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { 
        if (entry.isIntersecting) {
          setVisible(true); 
        }
      },
      { rootMargin: '800px 0px 800px 0px' } // mount well before entering
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ minHeight: visible ? undefined : minHeight }}>
      {visible ? children : null}
    </div>
  );
};

const scrollVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] as any } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};


interface AboutUsProps {
  isExpanded: boolean;
  setIsExpanded: (v: boolean) => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ isExpanded, setIsExpanded }) => {

  return (
    <div id="about" className="bg-transparent">
      {!isExpanded && (
        <section className="scroll-section flex-center relative overflow-hidden" style={{ minHeight: '40vh', borderTop: '1px solid var(--border)' }}>
          {/* Animated Thematic Background */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Geometric Orbital Rings Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.15]">
              {/* Center Node */}
              <motion.div 
                className="absolute w-2 h-2 bg-accent rounded-full" 
                style={{ boxShadow: '0 0 40px 20px var(--accent-purple)' }}
                animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.5, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as any }}
              />
              
              {/* Expanding Rings */}
              {[1, 2, 3, 4, 5].map((ring) => (
                <motion.div
                  key={ring}
                  className="absolute rounded-full border border-accent"
                  style={{
                    width: `${ring * 22}vw`,
                    height: `${ring * 22}vw`,
                    borderStyle: ring % 2 === 0 ? 'dashed' : 'solid',
                    borderWidth: '1px'
                  }}
                  animate={{
                    rotate: ring % 2 === 0 ? 360 : -360,
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    rotate: { duration: 60 + ring * 15, repeat: Infinity, ease: "linear" as any },
                    scale: { duration: 10 + ring * 2, repeat: Infinity, ease: "easeInOut" as any },
                  }}
                />
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-center relative z-10"
          >
            <motion.h2 
              className="headline-section font-sans font-extrabold tracking-tight mb-12 lg:mb-20 text-center px-4 mt-8" 
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#040224', lineHeight: 1.2 }}
              animate={{ 
                textShadow: ["0px 0px 0px rgba(167, 112, 255, 0)", "0px 0px 40px rgba(167, 112, 255, 0.4)", "0px 0px 0px rgba(167, 112, 255, 0)"],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as any }}
            >
              The TRUSCOR Masterplan<br/>
              <span style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: '#6e7781', fontWeight: 500, display: 'block', marginTop: '2.5rem', letterSpacing: '-0.01em', lineHeight: 1.6 }}>
                Explore our complete pitch deck:<br/>technology, compounding moats, and the financial endgame.
              </span>
            </motion.h2>
            <motion.button 
              onClick={() => setIsExpanded(true)} 
              className="relative overflow-hidden group cursor-pointer mt-12 mb-16"
              style={{ 
                padding: 'clamp(1rem, 2vw, 1.5rem) clamp(2.5rem, 5vw, 4rem)', 
                fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                background: 'linear-gradient(135deg, #a770ff, #7f3bff)',
                color: 'white',
                border: '2px solid rgba(255,255,255,0.4)',
                borderRadius: '9999px',
                fontWeight: '900',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
              animate={{
                boxShadow: [
                  "0 0 30px rgba(167, 112, 255, 0.6), inset 0 0 10px rgba(255,255,255,0.3)", 
                  "0 0 80px rgba(167, 112, 255, 1), inset 0 0 25px rgba(255,255,255,0.8)", 
                  "0 0 30px rgba(167, 112, 255, 0.6), inset 0 0 10px rgba(255,255,255,0.3)"
                ],
                scale: [1, 1.05, 1]
              }}
              whileHover={{ scale: 1.1, boxShadow: "0 0 120px rgba(167, 112, 255, 1), inset 0 0 30px rgba(255,255,255,0.9)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" as any }}
            >
              <span className="relative z-10 flex items-center gap-3">
                LEARN MORE ABOUT US
                <motion.span animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>↓</motion.span>
              </span>
              <motion.div 
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" as any }}
              />
            </motion.button>
          </motion.div>
        </section>
      )}

      {isExpanded && (

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="pb-32 space-y-8"
        >
          {/* THE CANVAS PRESENTATION */}
          <div className="container relative z-20">
            <AboutCanvas />
          </div>

          {/* 1. THE PROBLEM */}
          <section className="scroll-section pt-4" id="about-problem">
            <div className="container">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scrollVariants} className="text-center mb-8">
                <TopicAnimation type="problem" />
                <div className="eyebrow mx-auto">— THE PROBLEM</div>
                <h2 className="headline-section text-[#040224] font-sans font-extrabold tracking-tight" style={{ fontSize: '2.5rem' }}>
                  $400B Deployed. Zero Insurance-Grade Risk.
                </h2>
                <p className="text-gray-700 font-medium mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
                  Every enterprise is rushing to deploy AI agents. No underwriter knows how to price the liability. We have transitioned from simple text-box chatbots into the era of "Autonomous Organisms" — complex AI agents handling 80% of internal workflows.
                </p>
                <p className="text-gray-700 font-medium mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
                  By 2027, AI handles 80% of internal enterprise operations. Today's agents don't just return text — they execute dynamic, multi-turn workflows directly in the browser DOM and command host operating systems.
                </p>
              </motion.div>
              
              <InViewSection minHeight="400px"><AutonomousEraVisual /></InViewSection>
            </div>
          </section>

          {/* 2. THE SOLUTION */}
          <section className="scroll-section bg-transparent" id="about-solution">
            <div className="container">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scrollVariants} className="text-center mb-12">
                <TopicAnimation type="solution" />
                <div className="eyebrow mx-auto">— THE SOLUTION</div>
                <h2 className="headline-section text-[#040224] font-sans font-extrabold tracking-tight" style={{ fontSize: '2.5rem' }}>
                  TRUSCOR: The FICO Score for Corporate AI
                </h2>
                <p className="text-gray-700 font-medium mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
                  We are not a bug tracker for developers. <span className="text-accent font-bold">Our primary customers are Cyber-Insurance Underwriters and CFOs who need an insurable, auditable grade</span> — not a ticket queue.
                </p>
              </motion.div>

              <div className="relative pt-12 mt-8">
                {/* The Glowing Tree Trunk */}
                <motion.div 
                  className="absolute top-0 left-[16.66%] right-[16.66%] h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_10px_var(--accent-purple)] hidden md:block"
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, ease: "easeInOut" as any }}
                />

                <motion.div className="grid md:grid-cols-3 gap-8 relative z-10" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.6 } } }}>
                  
                  {/* CARD 1 */}
                  <motion.div variants={scrollVariants} className="relative p-8 bg-white/90 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                    {/* Tree Branch */}
                    <motion.div className="absolute -top-12 left-1/2 w-[2px] h-12 bg-gradient-to-b from-accent to-transparent -translate-x-1/2 hidden md:block origin-top" variants={{ hidden: { scaleY: 0, opacity: 0 }, visible: { scaleY: 1, opacity: 1, transition: { duration: 0.8 } } }} />
                    <motion.div className="absolute -top-12 left-1/2 w-3 h-3 rounded-full bg-accent shadow-[0_0_12px_var(--accent-purple)] -translate-x-1/2 -translate-y-1/2 hidden md:block" variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } } }} />
                    
                    <div className="font-mono text-sm font-bold text-accent mb-4">01</div>
                    <h3 className="font-sans font-bold text-lg mb-3 text-[#040224] flex items-center gap-2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" className="text-accent"><path d="M13 2L3 14h9l-1 8 10-12h-9l-1-8z"/></svg>
                      Deploy S.O.V.A
                    </h3>
                    <p className="text-gray-700 font-medium text-base leading-relaxed mb-6 flex-grow">Headless browser tester and offensive penetrator targets OS and UI-layer simultaneously in swarms. S.O.V.A sees what you see—clicking, typing, and navigating menus while injecting adversarial payloads.</p>
                    
                    <div className="font-mono text-xs mt-auto" style={{ padding: '12px', background: '#0a0a0a', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', color: '#a1a1aa' }}>
                      <span className="text-accent font-bold">{'>'}</span> sova deploy --target enterprise-workspace.ai<br/>
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }} className="mt-1">
                        <span className="text-accent font-bold">{'>'}</span> Swarm initialized: 5 concurrent test vectors...
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* CARD 2 */}
                  <motion.div variants={scrollVariants} className="relative p-8 bg-white/90 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                    {/* Tree Branch */}
                    <motion.div className="absolute -top-12 left-1/2 w-[2px] h-12 bg-gradient-to-b from-accent to-transparent -translate-x-1/2 hidden md:block origin-top" variants={{ hidden: { scaleY: 0, opacity: 0 }, visible: { scaleY: 1, opacity: 1, transition: { duration: 0.8 } } }} />
                    <motion.div className="absolute -top-12 left-1/2 w-3 h-3 rounded-full bg-accent shadow-[0_0_12px_var(--accent-purple)] -translate-x-1/2 -translate-y-1/2 hidden md:block" variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } } }} />
                    
                    <div className="font-mono text-sm font-bold text-accent mb-4">02</div>
                    <h3 className="font-sans font-bold text-lg mb-3 text-[#040224] flex items-center gap-2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" className="text-accent"><path d="M12 20V10M6 20V4M18 20v-4"/></svg>
                      Quantify Risk
                    </h3>
                    <p className="text-gray-700 font-medium text-base leading-relaxed mb-6 flex-grow">Translate semantic chaos into deterministic financial penalties. We map total system vulnerability exactly as an advanced threat actor would, converting technical chaos into an insurable asset.</p>
                    
                    <div className="flex gap-3 mt-auto w-full">
                      <div className="flex-1 p-3 bg-[#0a0a0a] rounded-lg border border-white/10 text-center">
                        <div className="text-lg font-bold text-[#f85149]">-120</div>
                        <div className="text-[10px] text-gray-400 font-mono mt-1">AUTH Penalty</div>
                      </div>
                      <div className="flex-1 p-3 bg-[#0a0a0a] rounded-lg border border-white/10 text-center">
                        <div className="text-lg font-bold text-accent">-30</div>
                        <div className="text-[10px] text-gray-400 font-mono mt-1">LOGIC Penalty</div>
                      </div>
                      <div className="flex-1 p-3 bg-[#0a0a0a] rounded-lg border border-white/10 text-center">
                        <div className="text-lg font-bold text-[#27c93f]">0</div>
                        <div className="text-[10px] text-gray-400 font-mono mt-1">PII Clean</div>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* CARD 3 */}
                  <motion.div variants={scrollVariants} className="relative p-8 bg-white/90 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                    {/* Tree Branch */}
                    <motion.div className="absolute -top-12 left-1/2 w-[2px] h-12 bg-gradient-to-b from-accent to-transparent -translate-x-1/2 hidden md:block origin-top" variants={{ hidden: { scaleY: 0, opacity: 0 }, visible: { scaleY: 1, opacity: 1, transition: { duration: 0.8 } } }} />
                    <motion.div className="absolute -top-12 left-1/2 w-3 h-3 rounded-full bg-accent shadow-[0_0_12px_var(--accent-purple)] -translate-x-1/2 -translate-y-1/2 hidden md:block" variants={{ hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } } }} />
                    
                    <div className="font-mono text-sm font-bold text-accent mb-4">03</div>
                    <h3 className="font-sans font-bold text-lg mb-3 text-[#040224] flex items-center gap-2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" className="text-accent"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                      Issue Grade
                    </h3>
                    <p className="text-gray-700 font-medium text-base leading-relaxed mb-6 flex-grow">Deterministic FICO-style Sybil Resilience Score (SRS). We price the true financial risk of corporate AI, providing Total Value at Risk (VaR) and Estimated Remediation Cost Models.</p>
                    
                    <div className="flex items-center gap-4 p-4 bg-[#0a0a0a] rounded-lg border border-white/10 mt-auto">
                      <div className="text-4xl font-mono font-bold text-[#27c93f]">680</div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-white tracking-wider mb-1">MODERATE RISK</div>
                        <div className="text-[10px] text-gray-400 font-mono">Sybil Resilience Score</div>
                      </div>
                      <div className="w-16 h-2 rounded-full relative overflow-hidden" style={{ background: 'linear-gradient(90deg, #f85149, #ffbd2e, #27c93f)' }}>
                        <motion.div initial={{ left: "0%" }} whileInView={{ left: "70%" }} transition={{ duration: 1.5, ease: "easeOut" as any }} className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_4px_white] rounded-full" style={{ transform: 'translateX(-50%)' }} />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* 3. THE PRODUCT + LIVE SOFTWARE (merged — single video) */}
          <section className="scroll-section bg-transparent" id="about-product">
            <div className="container">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scrollVariants} className="text-center mb-8">
                <TopicAnimation type="product" />
                <div className="eyebrow mx-auto">— THE PRODUCT</div>
                <h2 className="headline-section text-[#040224] font-sans font-extrabold tracking-tight" style={{ fontSize: '2.5rem' }}>
                  S.O.V.A: Live Test Simulation
                </h2>
                <p className="text-gray-700 font-medium mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
                  TRUSCOR audits the entire organism. We systematically bombard the API while S.O.V.A breaches the DOM and OS layers — mapping total system vulnerability exactly as an advanced threat actor would.
                </p>
                <p className="text-gray-700 font-medium mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
                  Real-time test orchestration and actuarial reporting — watch S.O.V.A breach, audit, and score an enterprise AI system through the TRUSCOR Audit Interface.
                </p>
              </motion.div>
              
              {/* Video Window */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto mt-12"
                style={{ 
                  border: '1px solid rgba(255,255,255,0.1)',
                  maxWidth: '1100px'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Mac-style header */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10" style={{ background: '#0c0c0c' }}>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex-1 text-center text-[11px] font-mono text-white/40 tracking-widest">TRUSCOR · AUDIT INTERFACE</div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-white/40 tracking-wider">
                    <motion.span 
                      className="inline-block w-1.5 h-1.5 rounded-full bg-[#28c840]"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    LIVE
                  </div>
                </div>

                {/* Video */}
                <div className="relative bg-black">
                  <video 
                    src="/1min.mp4"
                    className="w-full h-auto block"
                    playsInline
                    preload="metadata"
                    controls
                  />
                </div>
              </motion.div>
            </div>
          </section>

          {/* 5. AUTONOMOUS ENGINE */}
          <section className="scroll-section bg-transparent" id="about-engine">
            <div className="container">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scrollVariants} className="text-center mb-8">
                <TopicAnimation type="engine" />
                <div className="eyebrow mx-auto">— AUTONOMOUS ENGINE</div>
                <h2 className="headline-section text-[#040224] font-sans font-extrabold tracking-tight" style={{ fontSize: '2.5rem' }}>
                  S.O.V.A Sees What You See
                </h2>
                <p className="text-gray-700 font-medium mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
                  Our headless browser tester navigates enterprise applications exactly like a human — clicking, typing, navigating menus — while injecting adversarial payloads.
                </p>
              </motion.div>
              
              <InViewSection minHeight="360px"><AutonomousEngineVisual /></InViewSection>
            </div>
          </section>

          {/* 6. THE INSURANCE VIEW */}
          <section className="scroll-section" id="about-insurance">
            <div className="container">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scrollVariants} className="text-center mb-12">
                <TopicAnimation type="insurance" />
                <div className="eyebrow mx-auto">— THE INSURANCE VIEW</div>
                <h2 className="headline-section text-[#040224] font-sans font-extrabold tracking-tight" style={{ fontSize: '2.5rem' }}>
                  Pricing Risk in Real-Time
                </h2>
                <p className="text-gray-700 font-medium mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
                  While S.O.V.A speaks to the machine, our Actuarial Dashboard speaks to the CFO and the Underwriter. We convert technical chaos into a priced, insurable asset.
                </p>
              </motion.div>
              
              <motion.div className="grid md:grid-cols-3 gap-6 font-mono text-base text-[#040224] relative z-10 max-w-5xl mx-auto text-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
                 <motion.div variants={scrollVariants} className="p-6 bg-white/80 border border-gray-200 rounded-xl shadow-sm">Total Value at Risk (VaR) Calculation</motion.div>
                 <motion.div variants={scrollVariants} className="p-6 bg-white/80 border border-gray-200 rounded-xl shadow-sm">Estimated Remediation Cost Models</motion.div>
                 <motion.div variants={scrollVariants} className="p-6 bg-white/80 border border-gray-200 rounded-xl shadow-sm">Parametric Policy Trigger Thresholds</motion.div>
              </motion.div>
              
              <InViewSection minHeight="400px"><InsuranceViewVisual /></InViewSection>
            </div>
          </section>

          {/* 7. THE MEASUREMENT INSTRUMENT */}
          <section className="scroll-section bg-transparent text-primary" id="tiers">
            <div className="container">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scrollVariants} className="text-center mb-12">
                <TopicAnimation type="measurement" />
                <div className="eyebrow mx-auto">— THE MEASUREMENT INSTRUMENT</div>
                <h2 className="headline-section text-[#040224] font-sans font-extrabold tracking-tight" style={{ fontSize: '2.5rem' }}>
                  S.O.V.A: 5-Tier Actuarial Audit Matrix
                </h2>
                <p className="text-gray-700 font-medium mt-4 max-w-2xl mx-auto text-lg">
                  Our 5-tier escalation matrix moves from foundational logic testing to boardroom financial extrapolation.
                </p>
              </motion.div>

              <InViewSection minHeight="300px"><MeasurementInstrumentVisual /></InViewSection>
            </div>
          </section>

          {/* 8. INTELLECTUAL PROPERTY */}
          <section className="scroll-section" id="about-ip">
            <div className="container">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scrollVariants} className="text-center mb-8">
                <TopicAnimation type="ip" />
                <div className="eyebrow mx-auto">— INTELLECTUAL PROPERTY</div>
                <h2 className="headline-section text-[#040224] font-sans font-extrabold tracking-tight" style={{ fontSize: '2.5rem' }}>
                  TAFAAR: The Actuarial Engine
                </h2>
                <p className="text-gray-700 font-medium mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
                  TRUSCOR Actuarial Framework for Adversarial AI Risk — the mathematical foundation that translates chaos into insurable metrics.
                </p>
              </motion.div>
              
              <InViewSection minHeight="300px"><ActuarialEngineVisual /></InViewSection>
            </div>
          </section>

          {/* 9. TECHNOLOGY MOATS */}
          <section className="scroll-section bg-transparent" id="about-moats">
            <div className="container">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scrollVariants} className="text-center mb-12">
                <TopicAnimation type="moats" />
                <div className="eyebrow mx-auto">— TECHNOLOGY MOATS</div>
                <h2 className="headline-section text-[#040224] font-sans font-extrabold tracking-tight" style={{ fontSize: '2.5rem' }}>
                  Five Compounding Defensibilities
                </h2>
              </motion.div>

              <InViewSection minHeight="400px"><TechnologyMoatsVisual /></InViewSection>
            </div>
          </section>

          {/* 10. FINANCIAL ENDGAME / BUSINESS MODEL (merged) */}
          <section className="scroll-section" id="about-business">
            <div className="container">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scrollVariants} className="text-center mb-8">
                <TopicAnimation type="endgame" />
                <div className="eyebrow mx-auto">— FINANCIAL ENDGAME / BUSINESS MODEL</div>
                <h2 className="headline-section text-[#040224] font-sans font-extrabold tracking-tight" style={{ fontSize: '2.5rem' }}>
                  We Abandon Testing. We Own the Standard.
                </h2>
                <p className="text-gray-700 font-medium mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
                  TRUSCOR becomes the mandatory actuarial layer between AI deployment and AI insurance — the rating agency, the oracle, and the Safe Harbor, simultaneously. We are not selling bug reports to developers. <span className="text-accent font-bold">Our primary customers are Cyber-Insurance underwriters and CFOs.</span>
                </p>
              </motion.div>
              
              <InViewSection minHeight="300px"><FinancialEndgameVisual /></InViewSection>

              <div className="container relative z-20 mt-16 mb-24">
                <ReciprocalExchangeVisual />
              </div>

              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scrollVariants} className="text-center mt-24 mb-4" id="about-pricing">
                <TopicAnimation type="measurement" />
                <div className="eyebrow mx-auto">— PRICING</div>
                <h2 className="headline-section text-[#040224] font-sans font-extrabold tracking-tight" style={{ fontSize: '2.5rem' }}>
                  Pricing
                </h2>
              </motion.div>

              <InViewSection minHeight="300px"><BusinessModelPricingVisual /></InViewSection>
            </div>
          </section>
        </motion.div>

      )}
    </div>
  );
};
