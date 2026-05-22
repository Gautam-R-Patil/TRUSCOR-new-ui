import React from 'react';
import { motion, useInView } from 'framer-motion';

const pricingTiers = [
  {
    title: "Drive-By Audit",
    price: "$5K",
    period: "/one-time",
    subtitle: "The entry point.",
    features: [
      "Baseline vulnerability scan",
      "Visual test surface mapped",
      "Executive summary report"
    ],
    isCore: false
  },
  {
    tag: "CORE OFFERING",
    title: "SaaS Lock-In",
    price: "$50K",
    period: "/year",
    subtitle: "Continuous monitoring to maintain insurance compliance.",
    features: [
      "24/7 S.O.V.A Engine tests",
      "Full 5-Tier Audit Access",
      "Sybil Resilience Score (SRS) updates",
      "The Trust Center Badge"
    ],
    isCore: true
  },
  {
    title: "Broker Partnerships",
    price: "Custom",
    period: "",
    subtitle: "For cyber-insurance applications.",
    features: [
      "Embedded audit authorization",
      "Actuarial Subrogation metrics",
      "Probable Maximum Loss models"
    ],
    isCore: false
  }
];

export const BusinessModelPricingVisual: React.FC = () => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" as any } 
    }
  };

  const checkmarkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" as any } }
  };

  return (
    <div ref={containerRef} className="w-full max-w-6xl mx-auto mt-8 lg:mt-16 px-2 md:px-4 py-4 lg:py-8">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {pricingTiers.map((tier, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className={`relative rounded-[2rem] p-8 lg:p-10 flex flex-col group overflow-hidden ${
              tier.isCore ? 'z-10' : 'z-0'
            }`}
            style={{ 
              background: '#0a0a0a',
              border: tier.isCore ? '1px solid transparent' : '1px solid rgba(255,255,255,0.05)',
              transformStyle: 'preserve-3d'
            }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            {/* Animated Border for Core Offering */}
            {tier.isCore && (
              <>
                {/* The glowing moving background border effect */}
                <motion.div 
                  className="absolute inset-[-100%] z-0 rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0 300deg, #d97706 360deg)',
                    opacity: 0.5
                  }}
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" as any }}
                />
                {/* The actual inner card background hiding the gradient except for borders */}
                <div className="absolute inset-[1px] rounded-[2rem] bg-[#0c0c0c] z-0" />
              </>
            )}

            <div className="relative z-10 flex-1 flex flex-col">
              {tier.tag && (
                <div className="font-sans font-bold text-[11px] tracking-widest text-white mb-2 uppercase">
                  {tier.tag}
                </div>
              )}
              
              <h3 className="font-sans font-bold text-xl md:text-2xl text-white mb-6">
                {tier.title}
              </h3>
              
              <div className="flex items-baseline gap-2 mb-6 border-b border-white/5 pb-6">
                <span className="font-sans font-extrabold text-4xl md:text-5xl text-white tracking-tight">
                  {tier.price}
                </span>
                <span className="font-mono text-sm text-[#52525b]">
                  {tier.period}
                </span>
              </div>
              
              <p className="text-[#a1a1aa] font-medium text-sm md:text-base leading-relaxed mb-8 flex-1">
                {tier.subtitle}
              </p>
              
              <ul className="space-y-4">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-4 h-4 mt-1 shrink-0" viewBox="0 0 24 24" fill="none">
                      <motion.path 
                        d="M20 6L9 17L4 12" 
                        stroke={tier.isCore ? "white" : "#a1a1aa"} 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        variants={checkmarkVariants}
                      />
                    </svg>
                    <span className={`text-sm md:text-base font-medium leading-relaxed ${tier.isCore ? 'text-gray-300' : 'text-[#71717a]'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
