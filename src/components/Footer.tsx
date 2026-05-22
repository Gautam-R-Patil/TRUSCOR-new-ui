import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any } }
  };

  return (
    <footer className="scroll-section" style={{ height: 'auto', minHeight: '50vh', justifyContent: 'flex-end', zIndex: 6 }}>
      <motion.div 
        className="footer"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        <div className="footer-grid">
          <motion.div variants={itemVariants}>
            <div className="logo-mark" style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>TRUSCOR</div>
            <p className="text-muted" style={{ fontSize: '14px', maxWidth: '300px', marginBottom: '1.5rem' }}>
              The Actuarial Standard for Agentic Liability.<br />
              We bypass the API and test the visual interface.
            </p>
            <div style={{ display: 'flex', gap: '1.25rem' }}>
              {/* Instagram */}
              <a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              {/* Twitter / X */}
              <a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>About Us</a>
            <a href="#technology" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Download Demo</a>
            <a href="mailto:gautam@truscor.org" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>gautam@truscor.org</a>
          </motion.div>
          
          <motion.div variants={itemVariants} style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="#section-audit" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>S.O.V.A Engine</a>
            <a href="#section-audit" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Audit Tiers</a>
            <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Trust Center</a>
          </motion.div>
        </div>
        
        <motion.div variants={itemVariants} className="footer-bottom">
          <div>© 2026 TRUSCOR. All rights reserved.</div>
          <div>Founders: Gautam Patil (CEO/CTO) & Dheeraj S (Operations/Revenue)</div>
        </motion.div>
      </motion.div>
    </footer>
  );
};
