import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showDesignerE, setShowDesignerE] = useState(false);

  // We want exactly 3.2 seconds total loading time (3200ms)
  const TOTAL_DURATION_MS = 3200;

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;
    let exitTimeoutId: ReturnType<typeof setTimeout>;

    const updateProgress = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const currentProgress = Math.min((elapsed / TOTAL_DURATION_MS) * 100, 100);
      if (currentProgress < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        setIsExiting(true);
        // The exit animation takes 0.8 seconds (800ms)
        exitTimeoutId = setTimeout(() => {
          setIsComplete(true);
          onLoadingComplete();
        }, 800);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    const eTimeout = setTimeout(() => {
      setShowDesignerE(true);
    }, 2000);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(eTimeout);
      if (exitTimeoutId) clearTimeout(exitTimeoutId);
    };
  }, [onLoadingComplete]);

  if (isComplete) return null;

  const brandName = "TRUSCORE";
  const letterEasing = [0.22, 1, 0.36, 1];
  const exitEasing = [0.76, 0, 0.24, 1];

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ backgroundColor: '#f0eaff' }}
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.8, ease: exitEasing as any }}
    >
      <div className="flex flex-col items-center w-full relative h-screen">
        
        {/* Top Section: Brand Name Typography */}
        <motion.div 
          className="absolute flex items-center"
          initial={{ top: "50%", y: "-50%", left: "50%", x: "-50%", scale: 1 }}
          animate={{ top: "50%", y: "-50%", left: "50%", x: "-50%", scale: 1 }}
          transition={{ duration: 0.8, ease: exitEasing as any }}
          style={{ originX: 0.5, originY: 0.5 }}
        >
          {/* Brand Letters */}
          {brandName.split('').map((char, index) => {
            const isLastE = index === 7 && char === 'E';
            return (
              <motion.span
                key={index}
                className={`relative inline-flex items-center justify-center text-3xl md:text-5xl font-sans font-bold text-[#040224] leading-none ${isLastE ? 'tracking-normal' : 'tracking-[0.3em]'}`}
                style={isLastE ? { marginRight: '0.3em' } : undefined}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 1.4,
                  ease: letterEasing as any,
                  delay: index * 0.08
                }}
              >
                <motion.span
                  initial={{ opacity: 1, scale: 1 }}
                  animate={isLastE && showDesignerE ? { opacity: 0, scale: 1.5, filter: "blur(10px)" } : { opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.3, ease: "easeIn" as any }}
                  className="relative z-10"
                >
                  {char}
                </motion.span>

                {isLastE && (
                  <>
                    {/* Splash Shockwave */}
                    <motion.div
                      className="absolute inset-0 m-auto rounded-full border-2 border-[#040224]"
                      style={{ width: '60px', height: '60px' }}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={showDesignerE ? { opacity: [0, 1, 0], scale: [0.5, 2, 2.5] } : { opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" as any }}
                    />
                    
                    {/* Designer E / Old Logo */}
                    <motion.svg 
                      xmlns="http://www.w3.org/2000/svg" viewBox="16 16 68 68" fill="#040224" 
                      className="absolute inset-0 m-auto"
                      style={{ height: '1em', width: '1em' }}
                      initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                      animate={{ opacity: showDesignerE ? 1 : 0, scale: showDesignerE ? 1 : 0.5, rotate: showDesignerE ? 0 : -15 }}
                      transition={{ duration: 0.6, ease: "easeOut" as any, delay: 0.1 }}
                    >
                        <rect x="16" y="16" width="54" height="16" rx="3" />
                        <rect x="30" y="42" width="54" height="16" rx="3" />
                        <rect x="16" y="68" width="54" height="16" rx="3" />
                    </motion.svg>
                  </>
                )}
              </motion.span>
            );
          })}
        </motion.div>

        {/* Bottom Section: Circular Progress Indicator - Removed by user request */}

      </div>
    </motion.div>
  );
};
