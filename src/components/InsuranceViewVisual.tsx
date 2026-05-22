import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

export const InsuranceViewVisual: React.FC = () => {
  const containerRef = React.useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Live chart data points
  const [riskPoints, setRiskPoints] = useState([20, 25, 22, 35, 30, 45, 40, 55, 50, 60]);
  const [gradePoints, setGradePoints] = useState([30, 28, 35, 32, 40, 38, 45, 42, 50, 55]);
  
  // Live telemetry feed
  const [feedItems, setFeedItems] = useState<{left: string; right: string; color: string}[]>([]);

  const feedSequence = [
    { left: 'S.O.V.A Thread #42A', right: '+ $12,000 Risk Exposure', color: '#e5e7eb' },
    { left: 'PML Threshold Breach', right: 'Re-pricing Policy Premium', color: '#e5e7eb' },
    { left: 'Audit Complete', right: 'Generating FICO Report...', color: '#27c93f' },
    { left: 'S.O.V.A Thread #43B', right: '+ $8,400 Risk Exposure', color: '#e5e7eb' },
    { left: 'Compliance Alert', right: 'SOC2 Deviation Detected', color: '#f85149' },
    { left: 'VaR Recalculated', right: '$1.24M → $1.31M', color: '#ffbd2e' },
    { left: 'Policy Trigger #7', right: 'Parametric threshold met', color: '#f85149' },
    { left: 'SRS Grade Updated', right: 'B+ → B (downgrade)', color: '#ffbd2e' },
  ];

  // Animate chart data
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setRiskPoints(prev => {
        const newPoints = [...prev.slice(1)];
        const last = newPoints[newPoints.length - 1];
        newPoints.push(Math.max(15, Math.min(80, last + (Math.random() - 0.4) * 15)));
        return newPoints;
      });
      setGradePoints(prev => {
        const newPoints = [...prev.slice(1)];
        const last = newPoints[newPoints.length - 1];
        newPoints.push(Math.max(15, Math.min(80, last + (Math.random() - 0.45) * 12)));
        return newPoints;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [isInView]);

  // Animate feed
  useEffect(() => {
    if (!isInView) return;

    // Pre-fill
    setFeedItems(feedSequence.slice(0, 3));
    let i = 3;

    const interval = setInterval(() => {
      setFeedItems(prev => {
        const next = feedSequence[i % feedSequence.length];
        const updated = [...prev, next].slice(-4);
        return updated;
      });
      i++;
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView]);

  // Build SVG path from points
  const buildPath = (points: number[], width: number, height: number) => {
    const stepX = width / (points.length - 1);
    return points.map((p, i) => {
      const x = i * stepX;
      const y = height - (p / 100) * height;
      return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  };

  const buildAreaPath = (points: number[], width: number, height: number) => {
    const linePath = buildPath(points, width, height);
    return `${linePath} L ${width} ${height} L 0 ${height} Z`;
  };

  return (
    <div ref={containerRef} className="w-full max-w-4xl mx-auto mt-8 lg:mt-16 px-2 md:px-4">
      <motion.div
        className="rounded-2xl overflow-hidden shadow-2xl"
        style={{ background: '#0c0c0c', border: '1px solid rgba(200, 180, 100, 0.15)' }}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 md:px-8 py-4 md:py-5 border-b" style={{ borderColor: 'rgba(200, 180, 100, 0.1)' }}>
          <div className="flex items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#27c93f" strokeWidth="2" strokeLinecap="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
            <span className="text-[#e5e7eb] text-lg font-bold tracking-tight">Underwriter Portal</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#27c93f] shadow-[0_0_8px_#27c93f]" />
            <span className="text-[#27c93f] font-mono text-xs font-bold tracking-widest">LIVE STREAM</span>
          </div>
        </div>

        {/* Two Cards */}
        <div className="p-4 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            
            {/* Total Value at Risk */}
            <motion.div
              className="rounded-xl p-6"
              style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.06)' }}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="text-[10px] text-[#71717a] font-mono font-bold tracking-widest mb-2">TOTAL VALUE AT RISK</div>
              <div className="text-4xl font-mono font-bold text-[#e5e7eb] mb-4">$1.24M</div>
              
              <svg viewBox="0 0 300 80" className="w-full h-16" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="riskGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d={buildAreaPath(riskPoints, 300, 80)}
                  fill="url(#riskGrad)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.path
                  d={buildPath(riskPoints, 300, 80)}
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1 }}
                />
              </svg>
            </motion.div>

            {/* TRUSCOR SRS Grade */}
            <motion.div
              className="rounded-xl p-6"
              style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.06)' }}
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="text-[10px] text-[#71717a] font-mono font-bold tracking-widest mb-2">TRUSCOR SRS GRADE</div>
              <div className="text-4xl font-mono font-bold text-[#e5e7eb] mb-4">B+</div>
              
              <svg viewBox="0 0 300 80" className="w-full h-16" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="gradeGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d={buildAreaPath(gradePoints, 300, 80)}
                  fill="url(#gradeGrad)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.path
                  d={buildPath(gradePoints, 300, 80)}
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1 }}
                />
              </svg>
            </motion.div>
          </div>

          {/* Live Telemetry Feed */}
          <motion.div
            className="rounded-xl p-6"
            style={{ background: '#161616', border: '1px solid rgba(255,255,255,0.06)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="text-[10px] text-[#71717a] font-mono font-bold tracking-widest mb-5">LIVE TELEMETRY FEED</div>
            
            <div className="flex flex-col gap-4">
              {feedItems.map((item, i) => (
                <motion.div
                  key={`${i}-${item.left}`}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                >
                  <span className="text-sm font-medium" style={{ color: item.color }}>{item.left}</span>
                  <span className="text-sm text-[#a1a1aa] font-mono">{item.right}</span>
                </motion.div>
              ))}

              {/* Blinking row */}
              <motion.div
                className="flex items-center justify-between py-2"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-sm text-[#52525b] font-medium">Awaiting next event...</span>
                <span className="text-sm text-[#52525b] font-mono">—</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
