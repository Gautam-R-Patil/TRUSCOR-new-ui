import React, { useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const tiers = [
  {
    num: "01",
    title: "The Offensive Engine (Core Actuarial Audit)",
    desc: "The foundational baseline for conversational vulnerability, translating text logic into initial risk metrics. S.O.V.A performs semantic probing to map the outer surface area of the model's defenses."
  },
  {
    num: "02",
    title: "Agentic Contagion & Statutory Extortion",
    desc: "Targeting specific liabilities unique to the client's vertical. Simulating cascading failures across multi-agent swarms where one compromised agent infects connected statutory systems."
  },
  {
    num: "03",
    title: "Advanced Ecosystem Audits & Liability Math",
    desc: "Converting vulnerabilities into terrifying financial metrics for the CFO. We quantify the blast radius of an exploit in precise dollar amounts based on data sensitivity and access."
  },
  {
    num: "04",
    title: "Boardroom Governance & Insurance Instruments",
    desc: "Transforming technical reports into boardroom-ready risk disclosures. This tier establishes the underwriting criteria necessary to secure robust parametric insurance policies."
  },
  {
    num: "05",
    title: "The Runtime Immune System & Escrow",
    desc: "The ultimate safeguard. Deploying active countermeasures and securing critical capital in escrow, ensuring immediate remediation and payout in the event of a catastrophic failure."
  }
];

export const MeasurementInstrumentVisual: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="w-full max-w-4xl mx-auto mt-8 lg:mt-16 px-2 md:px-4 relative">
      
      {/* Tree Branch SVG Animation */}
      <div className="absolute left-4 md:left-8 top-0 bottom-0 w-16 pointer-events-none hidden md:block">
        <svg className="w-full h-full" preserveAspectRatio="none">
          {/* Main Trunk */}
          <motion.path
            d="M 20 0 L 20 1000"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" as any }}
          />
          {/* Active Glow Trunk */}
          <motion.path
            d="M 20 0 L 20 1000"
            stroke="#27c93f"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 2, ease: "easeInOut" as any, delay: 0.5 }}
            style={{ filter: 'blur(4px)' }}
          />

          {/* Branches to each item */}
          {tiers.map((_, i) => {
            const yOffset = i * 110 + 60; // Approximate center of each closed item
            return (
              <g key={`branch-${i}`}>
                {/* Background branch */}
                <motion.path
                  d={`M 20 ${yOffset} Q 40 ${yOffset}, 60 ${yOffset}`}
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                  transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
                />
                {/* Active branch if open */}
                <motion.path
                  d={`M 20 ${yOffset} Q 40 ${yOffset}, 60 ${yOffset}`}
                  stroke={openIndex === i ? "#27c93f" : "transparent"}
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: openIndex === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
                {/* Node dot */}
                <motion.circle
                  cx="20"
                  cy={yOffset}
                  r="4"
                  fill={openIndex === i ? "#27c93f" : "#3f3f46"}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: openIndex === i ? 1.5 : 1 } : { scale: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + i * 0.2 }}
                />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="flex flex-col gap-4 md:pl-20 relative z-10">
        {tiers.map((tier, i) => {
          const isOpen = openIndex === i;
          
          return (
            <motion.div
              key={tier.num}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                isOpen 
                  ? 'bg-[#111111] border-[#27c93f]/30 shadow-[0_0_15px_rgba(39,201,63,0.1)]' 
                  : 'bg-[#0a0a0a] border-white/5 hover:border-white/20'
              }`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <div className="p-6 md:p-8 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <span className={`font-mono text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-[#27c93f]' : 'text-[#52525b]'}`}>
                    {tier.num}
                  </span>
                  <span className={`font-sans text-lg md:text-xl font-bold transition-colors duration-300 ${isOpen ? 'text-white' : 'text-[#a1a1aa]'}`}>
                    {tier.title}
                  </span>
                </div>
                
                {/* Arrow */}
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-[#52525b]"
                >
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" as any }}
                  >
                    <div className="px-6 md:px-8 pb-8 pt-2 pl-[4.5rem] md:pl-[5.5rem]">
                      <p className="text-[#a1a1aa] leading-relaxed text-base">
                        {tier.desc}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
