import React from 'react';
import { motion } from 'framer-motion';
import gautamImg from '../assets/gautam.png';
import dheerajImg from '../assets/dheeraj.png';



export const Team: React.FC = () => {
  const scrollVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="team" className="scroll-section" style={{ zIndex: 3, position: 'relative', background: 'transparent' }}>
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={scrollVariants} className="text-center mb-12">
          <div className="eyebrow mx-auto">— THE TEAM</div>
          <h2 className="headline-section text-[#040224] font-sans font-extrabold tracking-tight" style={{ fontSize: '2.5rem' }}>
            Built by the Architects of the Category
          </h2>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}>
          
          {/* Gautam Patil */}
          <motion.div variants={scrollVariants} className="flex flex-col items-center text-center p-8 bg-white/90 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg relative bg-gray-100 flex items-center justify-center">
              <img src={gautamImg} alt="Gautam Patil" className="w-full h-full object-cover scale-[1.35]" />
            </div>
            <h3 className="font-sans font-bold text-2xl mb-4 text-[#040224]">Gautam Patil</h3>
            <div className="font-mono text-accent text-sm font-bold mb-4 tracking-wide">FOUNDING CEO & CTO</div>
            <p className="text-gray-700 font-medium text-base leading-relaxed mb-6">
              Architect of the S.O.V.A offensive engine and the TAFAAR actuarial framework. Built the core IP from first principles — both the test surface and the math behind it. AIR 8303, JEE Advanced.
            </p>
            <a href="mailto:gautam@truscor.org" className="mt-auto px-6 py-3 bg-[#f8f9fa] hover:bg-white rounded-xl text-[#040224] font-bold text-sm transition-all flex items-center justify-center gap-2 border border-gray-200 hover:border-accent hover:shadow-md hover:text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              gautam@truscor.org
            </a>
          </motion.div>

          {/* Dheeraj S */}
          <motion.div variants={scrollVariants} className="flex flex-col items-center text-center p-8 bg-white/90 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg relative bg-gray-100 flex items-center justify-center">
              <img src={dheerajImg} alt="Dheeraj S" className="w-full h-full object-cover scale-[1.35]" />
            </div>
            <h3 className="font-sans font-bold text-2xl mb-4 text-[#040224]">Dheeraj S</h3>
            <div className="font-mono text-accent text-sm font-bold mb-4 tracking-wide leading-relaxed">FOUNDING PARTNER<br />OPERATIONS & REVENUE</div>
            <p className="text-gray-700 font-medium text-base leading-relaxed mb-6">
              6 years scaling outbound enterprise sales pipelines for agencies. Previously Founded and was the CEO of 'Coding-Desk'. Owns GTM execution — broker partnerships, enterprise contracts, and distribution into the insurance underwriting workflow. Young Innovators Program(2023) Winner.
            </p>
            <a href="mailto:dheeraj@truscor.org" className="mt-auto px-6 py-3 bg-[#f8f9fa] hover:bg-white rounded-xl text-[#040224] font-bold text-sm transition-all flex items-center justify-center gap-2 border border-gray-200 hover:border-accent hover:shadow-md hover:text-accent">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              dheeraj@truscor.org
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
