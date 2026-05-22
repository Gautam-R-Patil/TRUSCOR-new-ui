import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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

  return (
    <section className="scroll-section" style={{ zIndex: 5 }}>
      <div className="split-layout">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={scrollVariants}
        >
          <div className="eyebrow">GET IN TOUCH</div>
          <h2 className="headline-section mb-4">
            Ready to grade your<br />
            <span className="text-muted">AI exposure?</span>
          </h2>
          
          <div style={{ marginTop: '2rem' }}>
            <div style={{ marginBottom: '2.5rem' }}>
              <div className="font-mono text-primary font-bold tracking-wide" style={{ fontSize: '14px', marginBottom: '8px' }}>REQUEST A FULL AUDIT</div>
              <p className="text-muted" style={{ fontSize: '16px', margin: '0 0 12px 0' }}>For enterprises ready for the complete 5-tier actuarial audit.</p>
              <a href="mailto:gautam@truscor.org" className="font-mono text-accent" style={{ fontSize: '15px', textDecoration: 'none' }}>gautam@truscor.org</a>
            </div>
            
            <div style={{ marginBottom: '2.5rem' }}>
              <div className="font-mono text-primary font-bold tracking-wide" style={{ fontSize: '14px', marginBottom: '8px' }}>BROKER & UNDERWRITER PARTNERSHIPS</div>
              <p className="text-muted" style={{ fontSize: '16px', margin: '0 0 12px 0' }}>For cyber-insurance carriers and Lloyd's syndicates.</p>
              <a href="mailto:gautam@truscor.org" className="font-mono text-accent" style={{ fontSize: '15px', textDecoration: 'none' }}>gautam@truscor.org</a>
            </div>
            
            <div>
              <div className="font-mono text-primary font-bold tracking-wide" style={{ fontSize: '14px', marginBottom: '8px' }}>GENERAL ENQUIRIES</div>
              <a href="mailto:gautam@truscor.org" className="font-mono text-accent" style={{ fontSize: '15px', textDecoration: 'none' }}>gautam@truscor.org</a>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any, delay: 0.2 } }
          }}
          style={{ justifyContent: 'center' }}
        >
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input type="text" className="form-input" required disabled={submitted} />
            </div>
            <div className="form-group">
              <label className="form-label">Company</label>
              <input type="text" className="form-input" required disabled={submitted} />
            </div>
            <div className="form-group">
              <label className="form-label">Role</label>
              <input type="text" className="form-input" placeholder="CFO / Underwriter / CISO / Other" required disabled={submitted} />
            </div>
            <div className="form-group">
              <label className="form-label">Work Email</label>
              <input type="email" className="form-input" required disabled={submitted} />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-textarea" rows={4} required disabled={submitted}></textarea>
            </div>
            <button 
              type="submit" 
              className="btn-primary" 
              style={{ width: '100%', backgroundColor: submitted ? 'var(--accent-green)' : 'var(--accent-purple)' }}
              disabled={submitted}
            >
              {submitted ? "Message received. We'll respond within 24 hours." : "Send Message →"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
