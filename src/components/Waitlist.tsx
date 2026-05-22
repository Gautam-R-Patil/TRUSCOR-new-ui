import React, { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';

export const Waitlist: React.FC = () => {
  const [companyCount, setCompanyCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({ name: '', company: '', role: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Countdown State
  const [timeLeft, setTimeLeft] = useState({ days: 14, hours: 8, minutes: 34, seconds: 12 });

  // Number Roll Animation
  useEffect(() => {
    if (isInView) {
      const controls = animate(0, 115, {
        duration: 3,
        ease: "easeOut" as any,
        onUpdate: (val) => setCompanyCount(Math.floor(val))
      });
      return controls.stop;
    }
  }, [isInView]);

  // Countdown Timer Logic (Target: June 1, 2026)
  useEffect(() => {
    const targetDate = new Date('2026-06-01T00:00:00Z').getTime();
    
    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000)
      });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API Call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" as any as any, staggerChildren: 0.2  } as any 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="scroll-section relative overflow-hidden" id="waitlist" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      
      {/* Background Grid Animation */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(var(--accent-purple) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <motion.div 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none z-0"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" as any }}
      />

      <div className="container relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          onViewportEnter={() => setIsInView(true)}
          variants={scrollVariants}
        >
          
          {/* LEFT: Stats & Countdown */}
          <motion.div variants={itemVariants} className="text-left">
            <div className="eyebrow">— EARLY ACCESS</div>
            <h2 className="headline-section text-[#040224] font-sans font-extrabold tracking-tight mb-6" style={{ fontSize: '3rem', lineHeight: 1.1 }}>
              Join the TRUSCOR<br/>Platform
            </h2>
            <p className="text-gray-700 font-medium text-lg leading-relaxed mb-10 max-w-md">
              Secure your spot to leverage the world's first adversarial actuarial engine for AI deployment.
            </p>

            {/* Metrics */}
            <div className="flex flex-col gap-8">
              <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-xl p-6 shadow-sm">
                <div className="font-mono text-accent text-sm font-bold mb-2 tracking-wide uppercase">Companies in Queue</div>
                <div className="text-5xl font-extrabold text-[#040224] font-sans flex items-baseline gap-2">
                  {companyCount}
                  <motion.span 
                    className="w-3 h-3 bg-accent rounded-full"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
              </div>

              <div className="bg-[#040224] text-white rounded-xl p-6 shadow-lg border border-accent/20 relative overflow-hidden group">
                <motion.div 
                  className="absolute inset-0 bg-accent/10"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" as any }}
                />
                <div className="font-mono text-accent text-sm font-bold mb-3 tracking-wide uppercase relative z-10">T-Minus to Global Rollout</div>
                <div className="flex gap-4 font-mono text-2xl font-bold relative z-10">
                  <div className="flex flex-col items-center">
                    <span>{timeLeft.days.toString().padStart(2, '0')}</span>
                    <span className="text-[10px] text-gray-400 mt-1">DAYS</span>
                  </div>
                  <span className="text-accent animate-pulse">:</span>
                  <div className="flex flex-col items-center">
                    <span>{timeLeft.hours.toString().padStart(2, '0')}</span>
                    <span className="text-[10px] text-gray-400 mt-1">HRS</span>
                  </div>
                  <span className="text-accent animate-pulse">:</span>
                  <div className="flex flex-col items-center">
                    <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>
                    <span className="text-[10px] text-gray-400 mt-1">MIN</span>
                  </div>
                  <span className="text-accent animate-pulse">:</span>
                  <div className="flex flex-col items-center">
                    <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
                    <span className="text-[10px] text-gray-400 mt-1">SEC</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div variants={itemVariants} className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-xl relative">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 h-full"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 border border-green-200">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="font-sans font-extrabold text-2xl text-[#040224] mb-2">Request Received</h3>
                <p className="text-gray-600 font-medium">Your enterprise has been added to the queue. Our deployment team will contact you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="font-sans font-bold text-2xl text-[#040224] mb-4">Request Early Access</h3>
                
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                  <input 
                    required type="text" name="name" value={formData.name} onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 text-[#040224] font-medium rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Company Name</label>
                  <input 
                    required type="text" name="company" value={formData.company} onChange={handleChange}
                    className="w-full bg-gray-50 border border-gray-200 text-[#040224] font-medium rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                    placeholder="Acme Corp"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Role</label>
                    <input 
                      required type="text" name="role" value={formData.role} onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 text-[#040224] font-medium rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      placeholder="CISO / CTO"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Work Email</label>
                    <input 
                      required type="email" name="email" value={formData.email} onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 text-[#040224] font-medium rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                      placeholder="jane@acme.com"
                    />
                  </div>
                </div>

                <motion.button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full mt-4 relative overflow-hidden group rounded-lg"
                  style={{ 
                    padding: '1rem', 
                    fontSize: '1.1rem',
                    backgroundColor: 'var(--accent-purple)',
                    color: 'white',
                    border: 'none',
                    fontWeight: 'bold',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    boxShadow: '0 10px 20px rgba(167, 112, 255, 0.3)'
                  }}
                  whileHover={!isSubmitting ? { scale: 1.02, boxShadow: '0 15px 30px rgba(167, 112, 255, 0.5)' } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" as any }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                    ) : (
                      "Join the Swarm →"
                    )}
                  </span>
                  {!isSubmitting && (
                    <motion.div 
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6, ease: "easeInOut" as any }}
                    />
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};
