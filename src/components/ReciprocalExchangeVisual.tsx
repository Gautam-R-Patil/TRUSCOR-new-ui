import React from 'react';
import { motion } from 'framer-motion';

const HeartIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 md:w-5 md:h-5 text-rose-500"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>;
const TruckIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 md:w-5 md:h-5 text-indigo-500"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>;
const DollarIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 md:w-5 md:h-5 text-amber-500"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>;
const ShieldIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5 md:w-5 md:h-5 text-emerald-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>;

export const ReciprocalExchangeVisual: React.FC = () => {
    return (
        <div className="w-full flex justify-center py-6 md:py-12 px-3 md:px-8">
            <div 
                className="w-full max-w-6xl mx-auto overflow-hidden rounded-3xl md:rounded-[2.5rem] bg-[#f8f9fc] flex flex-col"
                style={{ 
                    boxShadow: '0 20px 60px -15px rgba(0,0,0,0.05), inset 0 0 0 1px rgba(255,255,255,1)'
                }}
            >
                {/* Text Content - Positioned ABOVE the animation */}
                <div className="pt-8 md:pt-16 px-6 md:px-16 pb-2 md:pb-4 z-20 w-full text-center md:text-left">
                    <h3 className="text-indigo-600 font-mono text-[9px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 md:mb-3">
                        The Modern Day Business
                    </h3>
                    <h2 className="text-slate-900 font-sans text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3 md:mb-4 leading-[1.1]">
                        Reciprocal Insurance<br className="hidden md:block"/> Exchange
                    </h2>
                    <p className="text-slate-500 text-xs sm:text-sm md:text-lg font-medium leading-relaxed max-w-4xl mx-auto md:mx-0">
                        <span className="font-semibold text-slate-600">Custom plans | 1 Day go-live | No-friction claims.</span><br className="hidden md:block" />
                        <span className="block mt-1 md:mt-2">
                            TRUSCOR acts as the intelligent middleman, seamlessly handling risk capital so that AI startups can efficiently insure each other through a mutually-backed capital exchange. <span className="bg-indigo-100 text-indigo-900 font-bold px-1.5 py-0.5 rounded shadow-sm inline-block mt-1">Since we own the testing and rating standards, it's only fair we are the best equipped to handle their insurance.</span>
                        </span>
                    </p>
                </div>

                {/* 3D Rendered Animation Area */}
                <div className="relative w-full h-[350px] sm:h-[450px] md:h-[700px] flex items-center justify-center overflow-hidden">
                    {/* Background Image (Seamlessly Blended) */}
                    <div 
                        className="absolute inset-0 z-0 flex items-center justify-center opacity-90"
                        style={{
                            maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
                            WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
                        }}
                    >
                        <img 
                            src="/truscor_hub.png" 
                            alt="3D Isometric Tech Hub" 
                            className="w-[150%] h-[150%] sm:w-[120%] sm:h-[120%] md:w-[100%] md:h-[100%] object-cover object-center transform md:scale-[1.15]"
                        />
                    </div>

                    {/* Floating UI Elements over the 3D scene to add life and motion */}
                    <div className="absolute inset-0 z-10 pointer-events-none">
                        
                        {/* Center Hub Label: TRUSCOR */}
                        <motion.div 
                            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 mt-[-30px] md:mt-[-60px]"
                            animate={{ y: [-3, 3, -3] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="text-white font-bold text-[9px] md:text-sm tracking-widest uppercase bg-[#040224]/95 backdrop-blur-md px-3 py-1.5 md:px-6 md:py-2.5 rounded-full shadow-[0_15px_30px_rgba(4,2,36,0.5)] border border-slate-700/50">
                                TRUSCOR
                            </div>
                        </motion.div>

                        {/* Node 1: Healthcare */}
                        <motion.div 
                            className="absolute left-[2%] top-[15%] sm:left-[10%] sm:top-[20%] md:left-[20%] md:top-[30%]"
                            animate={{ y: [-5, 5, -5] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                            <div className="flex items-center gap-1.5 md:gap-2.5 bg-white/95 backdrop-blur-md px-2 py-1 md:px-3 md:py-1.5 rounded-lg md:rounded-xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15)] border border-white">
                                <div className="bg-rose-50 p-1 md:p-1.5 rounded-md md:rounded-lg">
                                    <HeartIcon />
                                </div>
                                <span className="font-sans font-bold text-slate-700 text-[8px] sm:text-[9px] md:text-[11px] whitespace-nowrap">Healthcare AI<br className="block sm:hidden" /> Startup</span>
                            </div>
                        </motion.div>

                        {/* Node 2: Logistics */}
                        <motion.div 
                            className="absolute right-[2%] top-[25%] sm:right-[10%] sm:top-[30%] md:right-[15%] md:top-[40%]"
                            animate={{ y: [-4, 4, -4] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <div className="flex items-center gap-1.5 md:gap-2.5 bg-white/95 backdrop-blur-md px-2 py-1 md:px-3 md:py-1.5 rounded-lg md:rounded-xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15)] border border-white">
                                <div className="bg-indigo-50 p-1 md:p-1.5 rounded-md md:rounded-lg">
                                    <TruckIcon />
                                </div>
                                <span className="font-sans font-bold text-slate-700 text-[8px] sm:text-[9px] md:text-[11px] whitespace-nowrap">Logistics AI<br className="block sm:hidden" /> Startup</span>
                            </div>
                        </motion.div>

                        {/* Node 3: FinTech */}
                        <motion.div 
                            className="absolute left-[5%] bottom-[20%] sm:left-[15%] sm:bottom-[25%] md:left-[25%] md:bottom-[30%]"
                            animate={{ y: [-6, 6, -6] }}
                            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        >
                            <div className="flex items-center gap-1.5 md:gap-2.5 bg-white/95 backdrop-blur-md px-2 py-1 md:px-3 md:py-1.5 rounded-lg md:rounded-xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15)] border border-white">
                                <div className="bg-amber-50 p-1 md:p-1.5 rounded-md md:rounded-lg">
                                    <DollarIcon />
                                </div>
                                <span className="font-sans font-bold text-slate-700 text-[8px] sm:text-[9px] md:text-[11px] whitespace-nowrap">FinTech AI<br className="block sm:hidden" /> Startup</span>
                            </div>
                        </motion.div>

                        {/* Node 4: Cyber Security */}
                        <motion.div 
                            className="absolute right-[5%] bottom-[10%] sm:right-[15%] sm:bottom-[15%] md:right-[30%] md:bottom-[20%]"
                            animate={{ y: [-4, 4, -4] }}
                            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        >
                            <div className="flex items-center gap-1.5 md:gap-2.5 bg-white/95 backdrop-blur-md px-2 py-1 md:px-3 md:py-1.5 rounded-lg md:rounded-xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.15)] border border-white">
                                <div className="bg-emerald-50 p-1 md:p-1.5 rounded-md md:rounded-lg">
                                    <ShieldIcon />
                                </div>
                                <span className="font-sans font-bold text-slate-700 text-[8px] sm:text-[9px] md:text-[11px] whitespace-nowrap">Cyber Security AI<br className="block sm:hidden" /> Startup</span>
                            </div>
                        </motion.div>


                    </div>
                </div>
            </div>
        </div>
    );
};
