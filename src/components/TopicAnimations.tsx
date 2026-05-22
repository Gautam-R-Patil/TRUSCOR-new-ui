import React from 'react';
import { motion } from 'framer-motion';

// Helper: reduce repeat count to avoid infinite GPU accumulation
const inf = { repeat: Infinity } as const;

// 1. The Problem
const ProblemAnimation = () => (
  <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center overflow-hidden">
    <motion.div
      className="absolute w-16 h-16 rounded-full border-2 border-dashed border-gray-300"
      animate={{ rotate: 360 }}
      transition={{ duration: 6, ...inf, ease: "linear" }}
    />
    <motion.div
      className="w-4 h-4 bg-[#040224] rounded-sm relative z-10"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 4, ...inf }}
    />
    <motion.svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute inset-0">
      <motion.path
        d="M-10,50 L40,50 L45,40 L55,60 L60,50 L110,50"
        fill="none"
        stroke="#ef4444"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 4, ...inf, ease: "easeInOut" }}
      />
    </motion.svg>
  </div>
);

// 2. The Solution
const SolutionAnimation = () => (
  <div className="relative w-24 h-24 mx-auto mb-6 flex flex-col justify-between items-center py-2">
    {[...Array(6)].map((_, i) => (
      <div key={i} className="relative w-12 h-3 flex items-center justify-center">
        <motion.div
          className="absolute w-full h-[1.5px] bg-gradient-to-r from-accent to-[#27c93f] opacity-40"
          animate={{ scaleX: [1, 0, 1] }}
          transition={{ duration: 2, ...inf, delay: i * 0.15 }}
        />
        <motion.div
          className="absolute w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent-purple)]"
          animate={{ x: [-20, 20, -20] }}
          transition={{ duration: 2, ...inf, delay: i * 0.15 }}
        />
        <motion.div
          className="absolute w-2.5 h-2.5 rounded-full bg-[#27c93f] shadow-[0_0_8px_#27c93f]"
          animate={{ x: [20, -20, 20] }}
          transition={{ duration: 2, ...inf, delay: i * 0.15 }}
        />
      </div>
    ))}
  </div>
);

// 3. Era
const EraAnimation = () => (
  <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
    <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute">
      <motion.path
        d="M50 20 L20 80 L80 80 Z"
        fill="none"
        stroke="var(--accent-purple)"
        strokeWidth="1"
        strokeDasharray="4 4"
        animate={{ strokeDashoffset: [0, 20] }}
        transition={{ duration: 1.5, ...inf, ease: "linear" }}
      />
    </svg>
    <motion.div className="absolute top-[15px] w-3 h-3 rounded-full bg-accent shadow-[0_0_8px_var(--accent-purple)]" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, ...inf }} />
    <motion.div className="absolute bottom-[15px] left-[15px] w-3 h-3 rounded-full bg-accent shadow-[0_0_8px_var(--accent-purple)]" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, ...inf, delay: 0.6 }} />
    <motion.div className="absolute bottom-[15px] right-[15px] w-3 h-3 rounded-full bg-accent shadow-[0_0_8px_var(--accent-purple)]" animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2, ...inf, delay: 1.2 }} />
  </div>
);

// 4. Product
const ProductAnimation = () => (
  <div className="relative w-24 h-24 mx-auto mb-6 rounded-full border border-accent/30 flex items-center justify-center overflow-hidden bg-white/50">
    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(var(--accent-purple) 1px, transparent 1px)', backgroundSize: '8px 8px', opacity: 0.2 }} />
    <motion.div
      className="absolute top-1/2 left-1/2 w-12 h-12 bg-gradient-to-tr from-transparent to-accent/40 rounded-tl-full"
      style={{ transformOrigin: '0% 0%' }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 3, ...inf, ease: "linear" }}
    />
    <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_5px_var(--accent-purple)] z-10" />
  </div>
);

// 5. Live Software
const LiveSoftwareAnimation = () => (
  <div className="w-24 h-24 mx-auto mb-6 flex justify-between items-end overflow-hidden px-2">
    {[0, 1, 2, 3, 4].map((i) => (
      <motion.div
        key={i}
        className="w-2 bg-accent/80 rounded-sm"
        animate={{ height: ["10%", "90%", "10%"], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.8, ...inf, delay: i * 0.2 }}
      />
    ))}
  </div>
);

// 6. Engine
const EngineAnimation = () => (
  <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
    <motion.div
      className="absolute w-16 h-16 rounded-full border-2 border-dashed border-accent"
      animate={{ rotate: 360 }}
      transition={{ duration: 8, ...inf, ease: "linear" }}
    />
    <motion.div
      className="absolute w-10 h-10 rounded-full border-2 border-dotted border-[#040224]"
      animate={{ rotate: -360 }}
      transition={{ duration: 6, ...inf, ease: "linear" }}
    />
    <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_8px_var(--accent-purple)]" />
  </div>
);

// 7. Insurance
const InsuranceAnimation = () => (
  <div className="w-24 h-24 mx-auto mb-6 flex items-end justify-center gap-2 border-b border-gray-300 pb-1">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="w-4 bg-gradient-to-t from-accent to-[#040224] rounded-t-sm"
        animate={{ height: [i === 1 ? "40px" : "20px", i === 1 ? "70px" : "50px", i === 1 ? "40px" : "20px"] }}
        transition={{ duration: 2.5, ...inf, delay: i * 0.4 }}
      />
    ))}
  </div>
);

// 8. Measurement
const MeasurementAnimation = () => (
  <div className="w-24 h-24 mx-auto mb-6 flex flex-col items-center justify-end gap-1">
    {[4, 3, 2, 1, 0].map((tier) => (
      <motion.div
        key={tier}
        className="h-3 rounded-sm"
        style={{ width: `${(5 - tier) * 15}px`, backgroundColor: tier === 4 ? '#ef4444' : tier === 3 ? '#f97316' : tier === 2 ? '#ffbd2e' : tier === 1 ? '#84cc16' : '#27c93f' }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2.5, ...inf, delay: tier * 0.3 }}
      />
    ))}
  </div>
);

// 9. IP
const IPAnimation = () => (
  <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
    <motion.div
      className="w-12 h-12 border-2 border-accent flex items-center justify-center"
      animate={{ rotate: [0, 180, 360] }}
      transition={{ duration: 5, ...inf, ease: "easeInOut" }}
    >
      <motion.div className="w-4 h-4 bg-[#040224]" animate={{ scale: [1, 0.5, 1] }} transition={{ duration: 2.5, ...inf }} />
    </motion.div>
  </div>
);

// 10. Moats
const MoatsAnimation = () => (
  <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        className="absolute rounded-full border-t-2 border-l-2 border-transparent"
        style={{ width: `${(i + 1) * 24}px`, height: `${(i + 1) * 24}px`, borderTopColor: 'var(--accent-purple)', opacity: 1 - i * 0.2 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 3 + i * 1.5, ...inf, ease: "linear" }}
      />
    ))}
    <div className="w-2 h-2 rounded-full bg-[#040224]" />
  </div>
);

// 11. Endgame
const EndgameAnimation = () => (
  <div className="relative w-24 h-24 mx-auto mb-6">
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      <motion.path
        d="M10 80 Q 30 70, 50 50 T 90 20"
        fill="none"
        stroke="var(--accent-purple)"
        strokeWidth="3"
        strokeLinecap="round"
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{ duration: 4, ...inf, times: [0, 0.6, 0.8, 1] }}
      />
    </svg>
  </div>
);

// 12. Business Model
const BusinessModelAnimation = () => (
  <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-between relative">
    <div className="w-full h-0.5 bg-gray-200 absolute top-1/2 -translate-y-1/2 z-0" />
    <motion.div className="w-2 h-2 bg-accent rounded-full absolute top-1/2 -translate-y-1/2 shadow-[0_0_8px_var(--accent-purple)] z-10" animate={{ left: ['0%', '100%'] }} transition={{ duration: 2, ...inf, ease: "linear" }} />
    <div className="w-4 h-4 rounded-sm border-2 border-[#040224] bg-white z-10" />
    <div className="w-4 h-4 rounded-sm border-2 border-[#040224] bg-white z-10" />
    <div className="w-4 h-4 rounded-sm border-2 border-[#040224] bg-white z-10" />
  </div>
);

export type TopicType = 'problem' | 'solution' | 'era' | 'product' | 'software' | 'engine' | 'insurance' | 'measurement' | 'ip' | 'moats' | 'endgame' | 'business';

interface Props {
  type: TopicType;
}

export const TopicAnimation: React.FC<Props> = ({ type }) => {
  switch (type) {
    case 'problem': return <ProblemAnimation />;
    case 'solution': return <SolutionAnimation />;
    case 'era': return <EraAnimation />;
    case 'product': return <ProductAnimation />;
    case 'software': return <LiveSoftwareAnimation />;
    case 'engine': return <EngineAnimation />;
    case 'insurance': return <InsuranceAnimation />;
    case 'measurement': return <MeasurementAnimation />;
    case 'ip': return <IPAnimation />;
    case 'moats': return <MoatsAnimation />;
    case 'endgame': return <EndgameAnimation />;
    case 'business': return <BusinessModelAnimation />;
    default: return null;
  }
};
