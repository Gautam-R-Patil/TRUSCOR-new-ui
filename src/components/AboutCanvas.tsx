import React, { useEffect, useRef, useState } from 'react';


export const AboutCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeScene, setActiveScene] = useState(0);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ct = cv.getContext('2d', { alpha: false });
    if (!ct) return;

    let W = 700, H = 560, CX = 0, CY = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    
    function resize() {
      if (!cv) return;
      const parent = wrapperRef.current?.parentElement;
      let pWidth = parent ? parent.clientWidth : 800;
      if (pWidth === 0) pWidth = 800;
      
      const BASE_W = 800;
      if (pWidth < BASE_W) {
        W = BASE_W;
        setScale(pWidth / BASE_W);
      } else {
        W = pWidth;
        setScale(1);
      }
      H = Math.min(W * 0.65, 620);
      
      cv.width = W * DPR;
      cv.height = H * DPR;
      cv.style.width = W + 'px';
      cv.style.height = H + 'px';
      ct!.setTransform(DPR, 0, 0, DPR, 0, 0);
      CX = W / 2;
      CY = H / 2;
    }

    let T = 0, scene = 0, sT = 0;
    const SDUR = 8, FDUR = 0.7;

    let isPaused = false;
    let mouseDownTime = 0;
    
    const handleMouseDown = () => {
      mouseDownTime = performance.now();
      // Start pause after a short delay (150ms) to distinguish from quick clicks
      setTimeout(() => {
        if (mouseDownTime > 0) {
          isPaused = true;
        }
      }, 150);
    };
    
    const handleMouseUp = () => {
      const holdDuration = performance.now() - mouseDownTime;
      mouseDownTime = 0;
      
      if (holdDuration < 300 && !isPaused) {
        // Short click = advance scene
        scene = (scene + 1) % 4;
        sT = 0;
        setActiveScene(scene);
      }
      isPaused = false;
    };
    
    const handleMouseLeave = () => {
      mouseDownTime = 0;
      isPaused = false;
    };
    
    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener('mousedown', handleMouseDown);
      wrapper.addEventListener('mouseup', handleMouseUp);
      wrapper.addEventListener('mouseleave', handleMouseLeave);
      // Touch support
      wrapper.addEventListener('touchstart', handleMouseDown);
      wrapper.addEventListener('touchend', handleMouseUp);
    }
    window.addEventListener('resize', resize);

    // Particle field (floating dots in background)
    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0003,
      vy: (Math.random() - 0.5) * 0.0002,
      r: Math.random() * 1.8 + 0.4,
      phase: Math.random() * Math.PI * 2
    }));

    // Easing & utility
    function easeOut(t: number) { return 1 - Math.pow(1 - t, 3); }
    function easeInOut(t: number) { return t < 0.5 ? 4*t*t*t : 1 - Math.pow(-2*t+2, 3)/2; }
    function clamp(v: number, a: number, b: number) { return Math.max(a, Math.min(b, v)); }
    function sceneAlpha(st: number) {
      const fi = FDUR / SDUR;
      if (st < fi) return easeOut(st / fi);
      if (st > 1 - fi) return easeOut((1 - st) / fi);
      return 1;
    }
    
    function setGlow(color: string, blur: number) {
      if (!ct) return;
      ct.shadowColor = color;
      ct.shadowBlur = blur;
    }
    function clearGlow() { if (ct) ct.shadowBlur = 0; }

    function drawText(text: string, x: number, y: number, size: number, color: string, weight: string | number = 400, align: CanvasTextAlign = 'center') {
      if (!ct) return;
      ct.save();
      ct.textAlign = align;
      ct.textBaseline = 'middle';
      ct.font = `${weight} ${size}px "Inter", system-ui, -apple-system, sans-serif`;
      ct.fillStyle = color;
      ct.fillText(text, x, y);
      ct.restore();
    }

    function drawMonoText(text: string, x: number, y: number, size: number, color: string, weight: string | number = 400, align: CanvasTextAlign = 'center') {
      if (!ct) return;
      ct.save();
      ct.textAlign = align;
      ct.textBaseline = 'middle';
      ct.font = `${weight} ${size}px "JetBrains Mono", monospace`;
      ct.fillStyle = color;
      ct.fillText(text, x, y);
      ct.restore();
    }

    // ─── BACKGROUND ───
    function drawBackground() {
      if (!ct) return;
      // Flat, uniform light background to prevent washout
      ct.fillStyle = '#f8f9fc';
      ct.fillRect(0, 0, W, H);
      
      // Subtle grid
      ct.save();
      ct.globalAlpha = 0.04;
      ct.strokeStyle = '#6366f1';
      ct.lineWidth = 0.5;
      const gridSize = 50;
      for (let x = 0; x <= W; x += gridSize) { ct.beginPath(); ct.moveTo(x, 0); ct.lineTo(x, H); ct.stroke(); }
      for (let y = 0; y <= H; y += gridSize) { ct.beginPath(); ct.moveTo(0, y); ct.lineTo(W, y); ct.stroke(); }
      ct.restore();
      
      // Animated particles with connections
      ct.save();
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x = (p.x + p.vx + 1) % 1;
        p.y = (p.y + p.vy + 1) % 1;
        const px = p.x * W, py = p.y * H;
        const pulse = Math.sin(T * 0.8 + p.phase) * 0.3 + 0.7;
        
        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = (q.x - p.x) * W, dy = (q.y - p.y) * H;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 90) {
            ct.globalAlpha = (1 - d / 90) * 0.06;
            ct.strokeStyle = '#6366f1';
            ct.lineWidth = 0.5;
            ct.beginPath(); ct.moveTo(px, py); ct.lineTo(q.x * W, q.y * H); ct.stroke();
          }
        }
        ct.globalAlpha = 0.25 * pulse;
        ct.fillStyle = '#6366f1';
        ct.beginPath(); ct.arc(px, py, p.r * pulse, 0, Math.PI * 2); ct.fill();
      }
      ct.restore();
    }

    // ─── SCENE 0 · DEPLOYMENT SCALE ───
    function drawScene0(st: number) {
      if (!ct) return;
      const a = sceneAlpha(st);
      const t = easeOut(clamp(st * 2.2, 0, 1));
      ct.save(); ct.globalAlpha = a;
      
      const S = W / 700; // Scale factor for responsive sizing
      
      // Scene label
      drawMonoText('01  ·  DEPLOYMENT SCALE', CX, 45 * S + 15, Math.max(8, 10 * S), 'rgba(99,102,241,0.8)', 600);
      
      // ── Central hero number ──
      const val = Math.floor(t * 400);
      ct.save();
      ct.textAlign = 'center'; ct.textBaseline = 'middle';
      ct.font = `800 ${Math.min(W * 0.15, 110)}px "Inter", system-ui`;
      
      // Gold gradient fill for light theme (no bright white spots)
      const ng = ct.createLinearGradient(CX - 200, CY - 60, CX + 200, CY + 20);
      ng.addColorStop(0, '#D4A017');
      ng.addColorStop(0.5, '#F0CC52');
      ng.addColorStop(1, '#B8860B');
      
      // Render number without glow for clean visibility on light theme
      ct.fillStyle = ng;
      ct.fillText(`$${val}B`, CX, CY - 30);
      ct.restore();
      
      // Subtitle
      drawText('DEPLOYED IN AI AGENTS', CX, CY + 35 * S, Math.max(11, 15 * S), 'rgba(15,23,42,0.8)', 600);
      
      // ── Side stats in separate cards ──
      const cardAlpha = easeOut(clamp((st - 0.3) / 0.4, 0, 1));
      ct.globalAlpha = a * cardAlpha;
      
      const cardW = Math.max(90, 140 * S);
      const cardH = Math.max(55, 80 * S);
      const cardY = CY + 55 * S;
      const numSize = Math.max(16, 28 * S);
      const labelSize = Math.max(7, 9 * S);
      
      // Left stat card
      const leftCardX = CX - Math.min(W * 0.32, 260 * S);
      drawRoundedCard(leftCardX - cardW/2, cardY, cardW, cardH, 'rgba(255,255,255,1)', 'rgba(226,232,240,1)');
      drawText('40M+', leftCardX, cardY + cardH * 0.38, numSize, 'rgba(15,23,42,0.8)', 800);
      drawMonoText('AGENT TASKS / DAY', leftCardX, cardY + cardH * 0.75, labelSize, 'rgba(167,112,255,0.6)', 600);
      
      // Right stat card
      const rightCardX = CX + Math.min(W * 0.32, 260 * S);
      drawRoundedCard(rightCardX - cardW/2, cardY, cardW, cardH, 'rgba(255,255,255,1)', 'rgba(226,232,240,1)');
      drawText('1,450+', rightCardX, cardY + cardH * 0.38, numSize, 'rgba(15,23,42,0.8)', 800);
      drawMonoText('ENTERPRISES', rightCardX, cardY + cardH * 0.75, labelSize, 'rgba(167,112,255,0.6)', 600);
      
      // Center stat card
      drawRoundedCard(CX - cardW/2, cardY, cardW, cardH, 'rgba(255,255,255,1)', 'rgba(226,232,240,1)');
      drawText('$0', CX, cardY + cardH * 0.38, numSize, '#ef4444', 800);
      drawMonoText('INSURED', CX, cardY + cardH * 0.75, labelSize, 'rgba(239,68,68,0.7)', 600);
      
      // Animated orbital rings around the hero number
      ct.globalAlpha = a * 0.15;
      for (let ring = 0; ring < 3; ring++) {
        const radius = 100 + ring * 50;
        const speed = (ring % 2 === 0 ? 1 : -1) * (0.3 + ring * 0.1);
        ct.save();
        ct.translate(CX, CY - 20);
        ct.rotate(T * speed);
        ct.strokeStyle = '#6366f1';
        ct.lineWidth = 0.8;
        ct.setLineDash([4 + ring * 2, 8 + ring * 3]);
        const rScaled = radius * S;
        ct.beginPath(); ct.ellipse(0, 0, rScaled, rScaled * 0.35, 0, 0, Math.PI * 2); ct.stroke();
        ct.setLineDash([]);
        
        // Orbiting dot
        const dotAngle = T * speed * 2;
        const dx = Math.cos(dotAngle) * rScaled;
        const dy = Math.sin(dotAngle) * rScaled * 0.35;
        ct.globalAlpha = a * 0.5;
        ct.fillStyle = '#6366f1';
        ct.beginPath(); ct.arc(dx, dy, 2.5, 0, Math.PI * 2); ct.fill();
        ct.restore();
      }
      
      // Bottom caption
      ct.globalAlpha = a * easeOut(clamp((st - 0.55) / 0.35, 0, 1));
      if (W > 500) {
        drawText('Every enterprise is rushing to deploy AI agents — zero underwriter knows how to price it', CX, H - 30 * S, Math.max(10, 13 * S), 'rgba(15,23,42,0.8)', 500);
      } else {
        drawText('Every enterprise is rushing to deploy AI agents —', CX, H - 40, Math.max(9, 11), 'rgba(15,23,42,0.8)', 500);
        drawText('zero underwriter knows how to price it', CX, H - 22, Math.max(9, 11), 'rgba(15,23,42,0.8)', 500);
      }
      
      ct.restore();
    }

    // ─── SCENE 1 · EXPOSURE GAP ───
    function drawScene1(st: number) {
      if (!ct) return;
      const a = sceneAlpha(st);
      const t = easeOut(clamp(st * 1.8, 0, 1));
      ct.save(); ct.globalAlpha = a;
      
      const S1 = W / 700;
      drawMonoText('02  ·  THE EXPOSURE GAP', CX, 45 * S1 + 15, Math.max(8, 10 * S1), 'rgba(99,102,241,0.8)', 600);
      
      const barWidth = Math.min(100, W * 0.12);
      const maxBarH = Math.min(260, H * 0.45);
      const barBottom = CY + maxBarH / 2 + 30;
      const leftX = CX - Math.min(140, W * 0.15);
      const rightX = CX + Math.min(140, W * 0.15);
      
      // Axis line
      ct.strokeStyle = 'rgba(167,112,255,0.12)';
      ct.lineWidth = 1;
      ct.beginPath(); ct.moveTo(CX - W * 0.35, barBottom); ct.lineTo(CX + W * 0.35, barBottom); ct.stroke();
      
      // ── Left bar: AI Deployment (Gold) ──
      const deployH = maxBarH * t;
      
      // Ghost background
      ct.fillStyle = 'rgba(240,170,48,0.03)';
      drawRoundedRect(leftX - barWidth/2, barBottom - maxBarH, barWidth, maxBarH, 6);
      ct.fill();
      
      // Filled bar with gradient
      const dg = ct.createLinearGradient(0, barBottom - deployH, 0, barBottom);
      dg.addColorStop(0, '#F0CC52');
      dg.addColorStop(0.5, '#E8A828');
      dg.addColorStop(1, 'rgba(238,148,38,0.3)');
      ct.fillStyle = dg;
      drawRoundedRect(leftX - barWidth/2, barBottom - deployH, barWidth, deployH, 6);
      ct.fill();
      
      // Glow cap
      setGlow('rgba(242,188,52,0.5)', 15);
      ct.fillStyle = '#FFE450';
      drawRoundedRect(leftX - barWidth/2, barBottom - deployH, barWidth, 3, 2);
      ct.fill();
      clearGlow();
      
      // Value and label
      drawText(`$${Math.floor(t * 400)}B`, leftX, barBottom - deployH - 25, Math.max(14, 22 * S1), '#F0CC52', 800);
      drawMonoText('AI DEPLOYMENT', leftX, barBottom + 20, Math.max(8, 10 * S1), 'rgba(15,23,42,0.8)', 600);
      
      // ── Right bar: Insurance Coverage (Red/flatline) ──
      const pulseH = Math.sin(T * 5) * 2 + 4;
      
      ct.fillStyle = 'rgba(239,68,68,0.03)';
      drawRoundedRect(rightX - barWidth/2, barBottom - maxBarH, barWidth, maxBarH, 6);
      ct.fill();
      
      const ig = ct.createLinearGradient(0, barBottom - pulseH, 0, barBottom);
      ig.addColorStop(0, '#ef4444');
      ig.addColorStop(1, 'rgba(239,68,68,0.15)');
      ct.fillStyle = ig;
      drawRoundedRect(rightX - barWidth/2, barBottom - pulseH, barWidth, pulseH, 3);
      ct.fill();
      
      // Big $0
      setGlow('rgba(239,68,68,0.6)', 25);
      ct.textAlign = 'center'; ct.textBaseline = 'middle';
      ct.font = `bold ${Math.min(56, W * 0.07)}px "Inter", system-ui`;
      ct.fillStyle = '#ef4444';
      ct.fillText('$0', rightX, barBottom - maxBarH * 0.45);
      clearGlow();
      
      drawMonoText('INSURANCE COVERAGE', rightX, barBottom + 20, Math.max(8, 10 * S1), 'rgba(239,68,68,0.7)', 600);
      
      // ── Gap warning zone ──
      if (t > 0.5) {
        const ga = easeOut((t - 0.5) / 0.5);
        ct.save();
        ct.globalAlpha = a * ga;
        
        // Dashed danger line
        ct.strokeStyle = 'rgba(239,68,68,0.3)';
        ct.lineWidth = 1.5;
        ct.setLineDash([6, 6]);
        ct.beginPath();
        ct.moveTo(leftX + barWidth/2 + 8, barBottom - deployH);
        ct.lineTo(rightX - barWidth/2 - 8, barBottom - deployH);
        ct.stroke();
        ct.setLineDash([]);
        
        // Warning label
        const warningPulse = Math.sin(T * 3) * 0.15 + 0.85;
        ct.globalAlpha = a * ga * warningPulse;
        setGlow('rgba(239,68,68,0.4)', 12);
        drawText('⚠ $400B+ UNINSURED EXPOSURE', CX, barBottom - deployH - 45, Math.max(10, 13 * S1), '#ef4444', 700);
        clearGlow();
        
        // Pulsing warning dot
        ct.fillStyle = '#ef4444';
        ct.beginPath(); ct.arc(CX, barBottom - deployH * 0.5, 5 + warningPulse * 3, 0, Math.PI * 2); ct.fill();
        ct.strokeStyle = 'rgba(239,68,68,0.3)'; ct.lineWidth = 1.5;
        ct.beginPath(); ct.arc(CX, barBottom - deployH * 0.5, 15 + warningPulse * 10, 0, Math.PI * 2); ct.stroke();
        
        ct.restore();
      }
      
      ct.globalAlpha = a * easeOut(clamp((st - 0.6) / 0.35, 0, 1));
      if (W > 500) {
        drawText('No underwriter in the world has a framework to price autonomous AI liability', CX, H - 30, Math.max(10, 13 * S1), 'rgba(15,23,42,0.8)', 500);
      } else {
        drawText('No underwriter has a framework', CX, H - 40, 10, 'rgba(15,23,42,0.8)', 500);
        drawText('to price autonomous AI liability', CX, H - 22, 10, 'rgba(15,23,42,0.8)', 500);
      }
      ct.restore();
    }

    // ─── SCENE 2 · EVOLUTION ───
    function drawScene2(st: number) {
      if (!ct) return;
      const a = sceneAlpha(st);
      ct.save(); ct.globalAlpha = a;
      
      const S2 = W / 700;
      drawMonoText('03  ·  THE EVOLUTION', CX, 45 * S2 + 15, Math.max(8, 10 * S2), 'rgba(99,102,241,0.8)', 600);
      
      const stages = [
        { year: '2018–22', title: 'TEXT-BOX', sub: 'CHATBOT', col: '#60a5fa', glow: 'rgba(96,165,250,0.4)' },
        { year: '2023–24', title: 'AGENTIC', sub: 'AI WORKER', col: '#6366f1', glow: 'rgba(167,112,255,0.4)' },
        { year: '2025+', title: 'AUTONOMOUS', sub: 'ORGANISM', col: '#ec4899', glow: 'rgba(236,72,153,0.5)' }
      ];
      
      const spacing = Math.min(W / 4, 200) * Math.max(0.6, S2);
      
      stages.forEach((s, i) => {
        const stageT = easeInOut(clamp(st * 3.5 - i * 0.7, 0, 1));
        const cx = CX + (i - 1) * spacing;
        const cy = CY - 10;
        ct.save(); ct.globalAlpha = a * stageT;
        
        // Connector line to next stage
        if (i < 2) {
          const nextCx = CX + (i) * spacing;
          const connT = easeOut(clamp(st * 3.5 - (i + 0.5) * 0.7, 0, 1));
          ct.globalAlpha = a * connT * 0.35;
          ct.strokeStyle = '#6366f1';
          ct.lineWidth = 1.5;
          ct.setLineDash([3, 5]);
          ct.beginPath(); ct.moveTo(cx + 52, cy); ct.lineTo(nextCx - 52, cy); ct.stroke();
          ct.setLineDash([]);
          
          // Arrow head
          const arrowX = cx + 52 + (nextCx - 52 - cx - 52) * connT;
          ct.fillStyle = '#6366f1';
          ct.beginPath();
          ct.moveTo(arrowX, cy - 4);
          ct.lineTo(arrowX + 8, cy);
          ct.lineTo(arrowX, cy + 4);
          ct.closePath();
          ct.fill();
          ct.globalAlpha = a * stageT;
        }
        
        // Organism special effects (3rd stage)
        if (i === 2 && stageT > 0.3) {
          const orgAlpha = easeOut((stageT - 0.3) / 0.7);
          const pulse = Math.sin(T * 2) * 0.15 + 0.85;
          
          // Ambient glow rings
          ct.globalAlpha = a * orgAlpha * 0.08 * pulse;
          ct.fillStyle = s.col;
          ct.beginPath(); ct.arc(cx, cy, 120, 0, Math.PI * 2); ct.fill();
          ct.globalAlpha = a * orgAlpha * 0.04 * pulse;
          ct.beginPath(); ct.arc(cx, cy, 170, 0, Math.PI * 2); ct.fill();
          
          // Orbiting rings
          ct.globalAlpha = a * orgAlpha * 0.25;
          for (let rn = 0; rn < 3; rn++) {
            ct.save();
            ct.translate(cx, cy);
            ct.rotate(T * (0.4 + rn * 0.15) * (rn % 2 ? 1 : -1));
            ct.strokeStyle = s.col;
            ct.lineWidth = 0.8;
            ct.beginPath(); ct.ellipse(0, 0, 55 + rn * 18, 18 + rn * 6, 0, 0, Math.PI * 2); ct.stroke();
            ct.restore();
          }
          ct.globalAlpha = a * stageT;
        }
        
        // Main circle
        const circleR = (i === 2 ? 48 : 42) * Math.max(0.6, S2);
        const grad = ct.createRadialGradient(cx - 10, cy - 10, 0, cx, cy, circleR);
        grad.addColorStop(0, s.col + '40');
        grad.addColorStop(0.7, s.col + '15');
        grad.addColorStop(1, 'transparent');
        ct.fillStyle = grad;
        ct.beginPath(); ct.arc(cx, cy, circleR, 0, Math.PI * 2); ct.fill();
        
        // Circle border
        setGlow(s.glow, i === 2 ? 20 : 12);
        ct.strokeStyle = s.col;
        ct.lineWidth = i === 2 ? 2.5 : 1.5;
        ct.beginPath(); ct.arc(cx, cy, circleR, 0, Math.PI * 2); ct.stroke();
        clearGlow();
        
        // Icons
        ct.strokeStyle = 'rgba(15,23,42,0.8)';
        ct.fillStyle = 'rgba(15,23,42,0.8)';
        ct.lineWidth = 2;
        ct.lineCap = 'round';
        ct.lineJoin = 'round';
        
        if (i === 0) {
          // Chat bubble icon
          const bx = cx - 12, by = cy - 8, bw = 24, bh = 16;
          ct.beginPath();
          ct.moveTo(bx + 3, by); ct.lineTo(bx + bw - 3, by);
          ct.quadraticCurveTo(bx + bw, by, bx + bw, by + 3);
          ct.lineTo(bx + bw, by + bh - 3);
          ct.quadraticCurveTo(bx + bw, by + bh, bx + bw - 3, by + bh);
          ct.lineTo(bx + 7, by + bh);
          ct.lineTo(bx + 2, by + bh + 6);
          ct.lineTo(bx + 2, by + bh);
          ct.quadraticCurveTo(bx, by + bh, bx, by + bh - 3);
          ct.lineTo(bx, by + 3);
          ct.quadraticCurveTo(bx, by, bx + 3, by);
          ct.closePath(); ct.stroke();
          [-6, 0, 6].forEach(dx => { ct.beginPath(); ct.arc(cx + dx, cy, 1.5, 0, Math.PI * 2); ct.fill(); });
        } else if (i === 1) {
          // Network nodes
          const nodes = [[cx - 14, cy - 8], [cx + 14, cy - 8], [cx, cy + 12]];
          nodes.forEach(([nx, ny]) => { ct.beginPath(); ct.arc(nx, ny, 4, 0, Math.PI * 2); ct.stroke(); });
          ct.lineWidth = 1.5;
          [[0,1],[1,2],[0,2]].forEach(([ai,bi]) => { ct.beginPath(); ct.moveTo(nodes[ai][0], nodes[ai][1]); ct.lineTo(nodes[bi][0], nodes[bi][1]); ct.stroke(); });
        } else {
          // Neural organism - rotating connected points
          const npts = 7;
          const pts = Array.from({length: npts}, (_, k) => {
            const ang = (k / npts) * Math.PI * 2 + T * 0.5;
            return [cx + Math.cos(ang) * 16, cy + Math.sin(ang) * 16] as [number, number];
          });
          pts.forEach(([px, py], k) => {
            ct.beginPath(); ct.arc(px, py, 3, 0, Math.PI * 2); ct.fill();
            pts.forEach(([qx, qy], l) => {
              if (l > k) {
                ct.globalAlpha = a * stageT * 0.3;
                ct.lineWidth = 0.8;
                ct.beginPath(); ct.moveTo(px, py); ct.lineTo(qx, qy); ct.stroke();
                ct.globalAlpha = a * stageT;
                ct.lineWidth = 2;
              }
            });
          });
        }
        
        // Labels
        ct.globalAlpha = a * stageT * 0.8;
        drawMonoText(s.year, cx, cy - circleR - 18, 10, s.col, 600);
        
        ct.globalAlpha = a * stageT;
        drawText(s.title, cx, cy + circleR + 18, i === 2 ? 16 : 13, i === 2 ? s.col : '#0f172a', 800);
        drawText(s.sub, cx, cy + circleR + 36, i === 2 ? 12 : 10, s.col + 'AA', 500);
        
        ct.restore();
      });
      
      ct.globalAlpha = a * easeOut(clamp((st - 0.6) / 0.35, 0, 1));
      if (W > 500) {
        drawText('"Autonomous Organisms handle 80% of internal workflows — no human in the loop"', CX, H - 30, Math.max(10, 13 * S2), 'rgba(15,23,42,0.8)', 'italic');
      } else {
        drawText('"Autonomous Organisms handle 80% of', CX, H - 40, 10, 'rgba(15,23,42,0.8)', 'italic');
        drawText('internal workflows — no human in the loop"', CX, H - 22, 10, 'rgba(15,23,42,0.8)', 'italic');
      }
      ct.restore();
    }

    // ─── SCENE 3 · 80% TAKEOVER ───
    function drawScene3(st: number) {
      if (!ct) return;
      const a = sceneAlpha(st);
      const t = easeInOut(clamp(st * 1.8, 0, 1));
      ct.save(); ct.globalAlpha = a;
      
      const S3 = W / 700;
      drawMonoText('04  ·  THE 80% TAKEOVER', CX, 45 * S3 + 15, Math.max(8, 10 * S3), 'rgba(99,102,241,0.8)', 600);
      
      const outerR = Math.min(130, W * 0.15);
      const innerR = outerR * 0.65;
      const ringW = outerR - innerR;
      
      // Background ring track (full circle = 100% of workflows)
      ct.lineWidth = ringW;
      ct.strokeStyle = 'rgba(167,112,255,0.04)';
      ct.beginPath(); ct.arc(CX, CY, outerR - ringW/2, 0, Math.PI * 2); ct.stroke();
      
      // 80% AI-operated arc (gradient: pink → purple → blue)
      const aiEndAngle = -Math.PI / 2 + Math.PI * 2 * 0.8 * t;
      const arcGrad = ct.createLinearGradient(CX - outerR, CY, CX + outerR, CY);
      arcGrad.addColorStop(0, '#f43f5e'); // rose-500
      arcGrad.addColorStop(0.5, '#4f46e5'); // indigo-600
      arcGrad.addColorStop(1, '#818cf8'); // indigo-400
      
      ct.lineCap = 'round';
      setGlow('rgba(99,102,241,0.8)', 25);
      ct.strokeStyle = arcGrad;
      ct.lineWidth = ringW;
      ct.beginPath(); ct.arc(CX, CY, outerR - ringW/2, -Math.PI / 2, aiEndAngle); ct.stroke();
      clearGlow();
      ct.lineCap = 'butt';
      
      // 20% human-operated remainder (subtle gray, appears after main arc fills)
      if (t > 0.8) {
        const remAlpha = easeOut((t - 0.8) / 0.2);
        ct.globalAlpha = a * remAlpha * 0.4;
        ct.strokeStyle = '#cbd5e1'; // slate-300 light grey
        ct.lineWidth = ringW;
        ct.beginPath(); ct.arc(CX, CY, outerR - ringW/2, aiEndAngle, -Math.PI / 2 + Math.PI * 2); ct.stroke();
        ct.globalAlpha = a;
        
        // Label for 20% human slice
        const midAngle = aiEndAngle + Math.PI * 0.2;
        const labelR = outerR + 50;
        ct.globalAlpha = a * remAlpha * 0.8;
        drawText('20%', CX + Math.cos(midAngle) * labelR, CY + Math.sin(midAngle) * labelR, 12, '#64748b', 700);
        drawMonoText('HUMAN', CX + Math.cos(midAngle) * labelR, CY + Math.sin(midAngle) * labelR + 15, 8, '#64748b', 600);
        ct.globalAlpha = a;
      }
      
      // Center percentage
      ct.globalAlpha = a * clamp(t * 2.5, 0, 1);
      ct.textAlign = 'center'; ct.textBaseline = 'middle';
      ct.font = `800 ${Math.min(72, W * 0.09)}px "Inter", system-ui`;
      setGlow('rgba(99,102,241,0.8)', 35);
      ct.fillStyle = '#0f172a';
      ct.fillText(`${Math.round(t * 80)}%`, CX, CY - 10);
      clearGlow();
      
      drawText('AI-OPERATED WORKFLOWS', CX, CY + 25, 11, 'rgba(15,23,42,0.8)', 600);
      
      // Department tags — arranged in two rows (left and right of the ring) to avoid bottom overlap
      if (t > 0.4) {
        const tagAlpha = easeOut((t - 0.4) / 0.5);
        const tags = ['Legal', 'IT Ops', 'Security', 'CX', 'HR', 'Finance'];
        tags.forEach((tag, i) => {
          // Spread tags across the right, bottom, and left sides, avoiding top-left human section
          const ang = -0.25 * Math.PI + i * 0.25 * Math.PI;
          const tagR = outerR + 45 * Math.max(0.5, S3);
          const tx = CX + Math.cos(ang) * tagR;
          const ty = CY + Math.sin(ang) * tagR;
          
          ct.globalAlpha = a * tagAlpha * 0.75;
          drawText(tag, tx, ty, Math.max(8, 11 * S3), 'rgba(15,23,42,0.8)', 500);
          
          // Connecting dot
          ct.fillStyle = 'rgba(99,102,241,0.8)';
          ct.beginPath(); ct.arc(tx, ty + 13, 2, 0, Math.PI * 2); ct.fill();
        });
      }
      
      // "0% INSURED" danger callout — the key insight: ALL 80% is uninsured
      if (t > 0.6) {
        const dangerAlpha = easeOut((t - 0.6) / 0.3);
        const pulse = Math.sin(T * 3) * 0.12 + 0.88;
        ct.globalAlpha = a * dangerAlpha * pulse;
        
        // Red warning card below the ring — explicitly positioned to avoid overlapping bottom text
        const cW = Math.max(160, 220 * S3);
        const cH = Math.max(38, 52 * S3);
        const cardY = H - (105 * S3); // Position above the text
        setGlow('rgba(239,68,68,0.2)', 10);
        drawRoundedCard(CX - cW/2, cardY, cW, cH, '#fee2e2', '#fca5a5');
        clearGlow();
        drawText('0% INSURED', CX, cardY + cH * 0.35, Math.max(12, 16 * S3), '#ef4444', 800);
        drawMonoText('OF AI-OPERATED WORKFLOWS', CX, cardY + cH * 0.73, Math.max(7, 8 * S3), 'rgba(239,68,68,0.6)', 600);
      }
      
      // Bottom question
      const qa = easeOut(clamp((st - 0.7) / 0.25, 0, 1));
      ct.globalAlpha = a * qa;
      setGlow('rgba(239,68,68,0.4)', 15);
      if (W > 500) {
        drawText('Who is liable when an Autonomous Organism fails and causes $10M in damage?', CX, H - 30, Math.max(10, 14 * S3), '#ef4444', 600);
      } else {
        drawText('Who is liable when an Autonomous Organism', CX, H - 40, 10, '#ef4444', 600);
        drawText('fails and causes $10M in damage?', CX, H - 22, 10, '#ef4444', 600);
      }
      clearGlow();
      ct.restore();
    }

    // ─── Helpers ───
    function drawRoundedCard(x: number, y: number, w: number, h: number, fill: string, stroke: string) {
      if (!ct) return;
      const r = 10;
      ct.fillStyle = fill;
      ct.strokeStyle = stroke;
      ct.lineWidth = 1;
      drawRoundedRect(x, y, w, h, r);
      ct.fill();
      ct.stroke();
    }

    function drawRoundedRect(x: number, y: number, w: number, h: number, r: number) {
      if (!ct) return;
      ct.beginPath();
      ct.moveTo(x + r, y);
      ct.lineTo(x + w - r, y);
      ct.quadraticCurveTo(x + w, y, x + w, y + r);
      ct.lineTo(x + w, y + h - r);
      ct.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ct.lineTo(x + r, y + h);
      ct.quadraticCurveTo(x, y + h, x, y + h - r);
      ct.lineTo(x, y + r);
      ct.quadraticCurveTo(x, y, x + r, y);
      ct.closePath();
    }

    // ─── ANIMATION LOOP ───
    let animId: number;
    let last = performance.now();
    let isVisible = true;
    
    function loop(ts: number) {
      if (!isVisible) return;
      const dt = Math.min((ts - last) / 1000, 0.05);
      last = ts;
      T += dt; // Always advance global time for particle animations
      
      // Only advance scene timer when NOT paused
      if (!isPaused) {
        sT += dt / SDUR;
      }
      
      if (sT >= 1) {
        sT = 0;
        scene = (scene + 1) % 4;
        setActiveScene(scene);
      }
      
      drawBackground();
      [drawScene0, drawScene1, drawScene2, drawScene3][scene](sT);
      
      // Pause indicator
      if (isPaused && ct) {
        ct.save();
        ct.globalAlpha = 0.7 + Math.sin(T * 4) * 0.15;
        ct.fillStyle = 'rgba(0,0,0,0.5)';
        drawRoundedRect(CX - 40, 65, 80, 28, 8);
        ct.fill();
        drawMonoText('PAUSED', CX, 79, 10, 'rgba(15,23,42,0.8)', 700);
        ct.restore();
      }
      
      // Scene progress bar
      if (ct) {
        ct.save();
        ct.fillStyle = 'rgba(15,23,42,0.8)';
        ct.fillRect(0, H - 3, W, 3);
        
        const colors = ['#F0CC52', '#ef4444', '#6366f1', '#3b82f6'];
        const pg = ct.createLinearGradient(0, 0, W * sT, 0);
        pg.addColorStop(0, colors[scene] + '80');
        pg.addColorStop(1, colors[scene]);
        ct.fillStyle = pg;
        ct.fillRect(0, H - 3, W * sT, 3);
        ct.restore();
      }
      
      animId = requestAnimationFrame(loop);
    }

    // IntersectionObserver to pause when offscreen
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!isVisible) {
            isVisible = true;
            last = performance.now();
            animId = requestAnimationFrame(loop);
          }
        } else {
          isVisible = false;
          cancelAnimationFrame(animId);
        }
      });
    }, { threshold: 0.01 });

    if (cv) observer.observe(cv);
    resize();
    animId = requestAnimationFrame(loop);

    return () => {
      isVisible = false;
      cancelAnimationFrame(animId);
      observer.disconnect();
      if (wrapper) {
        wrapper.removeEventListener('mousedown', handleMouseDown);
        wrapper.removeEventListener('mouseup', handleMouseUp);
        wrapper.removeEventListener('mouseleave', handleMouseLeave);
        wrapper.removeEventListener('touchstart', handleMouseDown);
        wrapper.removeEventListener('touchend', handleMouseUp);
      }
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="w-full mt-8 mb-4 flex justify-center" style={{ height: scale < 1 ? `${(Math.min(800 * 0.65, 620)) * scale}px` : 'auto' }}>
      <div 
        className="relative overflow-hidden rounded-2xl shadow-2xl origin-top shrink-0"
        style={{ 
          cursor: 'pointer', 
          border: '1px solid rgba(226,232,240,1)',
          transform: `scale(${scale})`,
          width: scale < 1 ? '800px' : '100%',
          minWidth: scale < 1 ? '800px' : 'auto',
          height: scale < 1 ? `${Math.min(800 * 0.65, 620)}px` : 'auto'
        }}
        ref={wrapperRef}
      >
        <canvas 
          ref={canvasRef} 
          className="block w-full bg-[#f8f9fc]" 
          style={{ width: '100%', height: '100%' }}
        />
        
        {/* Navigation Indicators Overlay */}
        <div className="absolute top-3 left-0 right-0 flex justify-center gap-3 z-10 pointer-events-none">
          {[0, 1, 2, 3].map((idx) => (
            <div 
              key={idx} 
              className={`h-1 rounded-full transition-all duration-500 ${activeScene === idx ? 'w-6 bg-white/80' : 'w-1.5 bg-white/15'}`}
            />
          ))}
        </div>
        
        <div className="absolute bottom-5 right-6 text-white/20 text-[10px] font-mono uppercase tracking-[0.2em] pointer-events-none">
          Click to advance · Hold to pause
        </div>
      </div>
    </div>
  );
};
