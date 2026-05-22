import React from 'react';
import { motion, useInView } from 'framer-motion';

const phases = [
  {
    phase: "PHASE 01 · NOW",
    title: "AI Due Diligence for VC/PE/M&A",
    desc: "$50K-$200K per report. Quantify AI safety posture before investors write a check.",
    metric: "Revenue: $50K — $200K / report",
    side: "left"
  },
  {
    phase: "PHASE 02 · 12 MONTHS",
    title: "AI Liability Reciprocal",
    desc: "TRUSCOR as Attorney-in-Fact. AI vendors pool risk and insure each other. 15-25% of gross premiums.",
    metric: "Model: Mutual Insurance · Recurring",
    side: "right"
  },
  {
    phase: "PHASE 03 · 24 MONTHS",
    title: "Parametric AI Insurance",
    desc: "Automatic payouts when TRUSCOR grade drops below B- or Registry triggers. Near-zero operational cost.",
    metric: "Trigger: Grade < B- → Auto-payout",
    side: "left"
  },
  {
    phase: "PHASE 04 · 36 MONTHS",
    title: "AI Catastrophe Bonds",
    desc: "Connecting AI risk to capital markets. TRUSCOR serves as the sole independent modeling agent for Cat Bonds.",
    metric: "Scale: Capital Markets · $1B+ capacity",
    side: "right"
  }
];

export const FinancialEndgameVisual: React.FC = () => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="w-full max-w-5xl mx-auto mt-8 lg:mt-16 px-2 md:px-4 py-8 lg:py-12 relative font-sans text-white">
      
      {/* The RNA Strand (Central Timeline) */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 z-0">
        <svg width="100%" height="100%" preserveAspectRatio="none">
          {/* Base faint strand */}
          <motion.path
            d="M 16 0 Q 32 100 16 200 T 16 400 T 16 600 T 16 800 T 16 1000 T 16 1200 T 16 1400"
            fill="none"
            stroke="rgba(200, 180, 100, 0.15)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: 2, ease: "easeInOut" as any }}
          />
          {/* Glowing flowing RNA "pulses" */}
          <motion.path
            d="M 16 0 Q 32 100 16 200 T 16 400 T 16 600 T 16 800 T 16 1000 T 16 1200 T 16 1400"
            fill="none"
            stroke="rgba(200, 180, 100, 0.8)"
            strokeWidth="3"
            strokeDasharray="20 100"
            animate={{ strokeDashoffset: [120, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" as any }}
            style={{ filter: 'blur(1px)' }}
          />
        </svg>
      </div>

      <div className="flex flex-col gap-6 lg:gap-12 relative z-10">
        {phases.map((item, i) => {
          const isLeft = item.side === 'left';
          
          return (
            <div key={item.phase} className={`flex w-full items-center ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
              
              {/* Card Container */}
              <motion.div
                initial={{ opacity: 0, x: isLeft ? -50 : 50, y: 30 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: isLeft ? -50 : 50, y: 30 }}
                transition={{ duration: 0.6, delay: i * 0.3, ease: "easeOut" as any }}
                className="w-full md:w-[45%] rounded-[1.5rem] p-6 relative ml-12 md:ml-0"
                style={{ 
                  background: 'linear-gradient(135deg, #0f0f0f 0%, #050505 100%)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                }}
              >
                {/* Connection Node (Dot) */}
                <div 
                  className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-[#111] z-20
                    ${isLeft ? '-left-12 md:-right-3 md:left-auto md:translate-x-[50%]' : '-left-12 md:-left-3 md:-translate-x-[50%]'}
                  `}
                  style={{ background: '#d97706', boxShadow: '0 0 10px rgba(217, 119, 6, 0.6)' }}
                />

                {/* Phase Header */}
                <div className="border border-white/10 rounded px-4 py-2 mb-6" style={{ background: '#1a1a1a' }}>
                  <span className="font-mono text-xs tracking-widest text-[#d97706] font-bold">
                    {item.phase}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-sans font-bold text-xl md:text-2xl mb-3 text-white">
                  {item.title}
                </h3>
                <p className="text-[#a1a1aa] text-sm md:text-base leading-relaxed mb-6 font-medium">
                  {item.desc}
                </p>

                {/* Bottom Metric */}
                <div className="rounded border border-white/5 bg-[#0a0a0a] px-4 py-3">
                  <span className="font-mono text-xs text-[#52525b] font-bold tracking-wide">
                    {item.metric}
                  </span>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
