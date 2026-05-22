import React from 'react';


export const TruscorLegacy: React.FC = () => {
  return (
    <div className="truscor-legacy-wrapper bg-[#0D0D12] text-white">
      {/* The wrapper sets dark mode background and text color to match original */}
      {/*  4. About / Problem Section  */}
    <section id="about" className="section">
        <div className="container">
            <div className="text-center mb-16 reveal">
                <div className="section-label mx-auto" style={{justifyContent: 'center'}}>The Problem</div>
                <h2 className="text-4xl font-bold tracking-tight mb-4">$400B Deployed. Zero Insurance-Grade Risk.</h2>
                <p className="text-lg text-secondary max-w-3xl mx-auto">Every enterprise is rushing to deploy AI agents. No underwriter knows how to price the liability. We have transitioned from simple text-box chatbots into the era of "Autonomous Organisms" — complex AI agents handling 80% of internal workflows.</p>
            </div>
            <div className="glass-panel p-6 mb-12 reveal delay-100" style={{maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto', borderColor: 'var(--accent-blue)', textAlign: 'center', boxShadow: 'var(--glow-blue)'}}>
                <p className="text-xl font-bold mb-4" style={{color: 'white', lineHeight: '1.6'}}>
                    <span className="text-gradient-accent" style={{textShadow: 'var(--glow-blue)'}}>Insurance-grade risk quantification</span> is no longer just an enterprise requirement; it is a <span className="text-gradient-accent" style={{textShadow: 'var(--glow-blue)'}}>national security mandate.</span>
                </p>
                <p className="text-xl font-bold" style={{color: 'var(--accent-cyan)', textShadow: 'var(--glow-cyan)'}}>
                    The entire world is currently chasing a standardized framework to measure AI risk!
                </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 reveal delay-200" style={{maxWidth: '800px', margin: '0 auto'}}>
                <div className="glass-panel p-6" style={{borderColor: 'rgba(16,185,129,0.2)'}}>
                    <div className="flex items-center gap-2 mb-3">
                        <span style={{color: 'var(--accent-green)'}}>●</span>
                        <span className="font-mono text-sm text-white">Backend API</span>
                    </div>
                    <div className="font-mono text-sm" style={{color: 'var(--accent-green)'}}>Status: SECURE</div>
                    <div className="font-mono text-sm text-muted">Payload: sanitized</div>
                    <div className="font-mono text-sm text-muted">All tests: PASSED</div>
                </div>
                <div className="glass-panel p-6" style={{borderColor: 'rgba(248,113,113,0.2)'}}>
                    <div className="flex items-center gap-2 mb-3">
                        <span style={{color: 'var(--accent-red)'}}>●</span>
                        <span className="font-mono text-sm text-white">Frontend UI</span>
                    </div>
                    <div className="font-mono text-sm text-white">"I have refunded $50K to your account."</div>
                    <div className="font-mono text-sm" style={{color: 'var(--accent-red)'}}>Financial Liability Generated</div>
                </div>
            </div>
            <div className="glass-panel p-6 mt-8 reveal delay-300" style={{maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto', borderColor: 'rgba(212,168,83,0.15)'}}>
                <h4 className="font-bold text-white mb-2 text-lg">The API Blindspot</h4>
                <p className="text-sm text-secondary">APIs don't hallucinate refunds — User Interfaces do. If a bot hallucinates a $50K refund on a public UI, the backend says "Secure." The judge says "Pay up." Along with API testing, surface-layer UI, DOM & underlying OS-level security threats need testing.</p>
            </div>
        </div>
    </section>

    {/*  5. Solution Section  */}
    <section id="solution" className="section relative">
        <div className="absolute inset-0 bg-glass-hover" style={{transform: 'skewY(-3deg)', transformOrigin: '0', zIndex: '-1'}}></div>
        <div className="container">
            <div className="text-center mb-16 reveal">
                <div className="section-label mx-auto" style={{justifyContent: 'center'}}>The Solution</div>
                <h2 className="text-4xl font-bold tracking-tight mb-4">TRUSCOR: The FICO Score for Corporate AI</h2>
                <p className="text-lg text-secondary max-w-3xl mx-auto">We are not a bug tracker for developers. <span className="text-gradient-accent" style={{textShadow: 'var(--glow-blue)', fontWeight: '700'}}>Our primary customers are Cyber-Insurance Underwriters and CFOs who need an insurable, auditable grade</span> — not a ticket queue.</p>
            </div>
            
            {/*  Creative stepped pipeline  */}
            <div className="solution-pipeline reveal delay-200" style={{maxWidth: '900px', margin: '0 auto', position: 'relative'}}>
                {/*  Vertical connecting line  */}
                <div style={{position: 'absolute', left: '36px', top: '60px', bottom: '60px', width: '2px', background: 'linear-gradient(to bottom, var(--accent-blue), var(--accent-purple), var(--accent-green))', opacity: '0.3', borderRadius: '1px'}}></div>
                
                {/*  Step 1  */}
                <div className="flex gap-8 mb-12 items-start" style={{position: 'relative'}}>
                    <div style={{width: '72px', height: '72px', borderRadius: '50%', border: '2px solid var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0', background: 'linear-gradient(rgba(230,213,184,0.08), rgba(230,213,184,0.08)), var(--bg-dark)', zIndex: '2'}}>
                        <span className="text-2xl font-bold" style={{color: 'var(--accent-blue)'}}>01</span>
                    </div>
                    <div className="glass-panel p-6 glass-panel-hover" style={{flexGrow: '1', borderColor: 'rgba(230,213,184,0.15)'}}>
                        <div className="flex items-center gap-4 mb-3">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" style={{color: 'var(--accent-blue)'}}><path d="M13 2L3 14h9l-1 8 10-12h-9l-1-8z"/></svg>
                            <h3 className="text-xl font-bold">Deploy S.O.V.A</h3>
                        </div>
                        <p className="text-sm text-secondary mb-4">Headless browser tester and offensive penetrator targets OS and UI-layer simultaneously in swarms.</p>
                        <div className="font-mono text-xs" style={{color: 'var(--text-muted)', padding: '8px 12px', background: 'var(--bg-dark)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.04)'}}>
                            &gt; sova deploy --target enterprise-workspace.ai --mode full-offensive<br />
                            &gt; Swarm initialized: 5 concurrent test vectors...
                        </div>
                    </div>
                </div>
                
                {/*  Step 2  */}
                <div className="flex gap-8 mb-12 items-start" style={{position: 'relative'}}>
                    <div style={{width: '72px', height: '72px', borderRadius: '50%', border: '2px solid var(--accent-purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0', background: 'linear-gradient(rgba(155,142,196,0.08), rgba(155,142,196,0.08)), var(--bg-dark)', zIndex: '2'}}>
                        <span className="text-2xl font-bold" style={{color: 'var(--accent-purple)'}}>02</span>
                    </div>
                    <div className="glass-panel p-6 glass-panel-hover" style={{flexGrow: '1', borderColor: 'rgba(155,142,196,0.15)'}}>
                        <div className="flex items-center gap-4 mb-3">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" style={{color: 'var(--accent-purple)'}}><path d="M12 20V10M6 20V4M18 20v-4"/></svg>
                            <h3 className="text-xl font-bold">Quantify Risk</h3>
                        </div>
                        <p className="text-sm text-secondary mb-4">Translate semantic chaos into deterministic financial penalties. Map total system vulnerability as an advanced threat actor would.</p>
                        <div style={{display: 'flex', gap: '1rem'}}>
                            <div style={{flex: '1', padding: '10px', background: 'var(--bg-dark)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.04)', textAlign: 'center'}}>
                                <div className="text-lg font-bold" style={{color: 'var(--accent-red)'}}>-120</div>
                                <div className="text-xs text-muted">AUTH Penalty</div>
                            </div>
                            <div style={{flex: '1', padding: '10px', background: 'var(--bg-dark)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.04)', textAlign: 'center'}}>
                                <div className="text-lg font-bold" style={{color: 'var(--accent-blue)'}}>-30</div>
                                <div className="text-xs text-muted">LOGIC Penalty</div>
                            </div>
                            <div style={{flex: '1', padding: '10px', background: 'var(--bg-dark)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.04)', textAlign: 'center'}}>
                                <div className="text-lg font-bold" style={{color: 'var(--accent-green)'}}>0</div>
                                <div className="text-xs text-muted">PII Clean</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/*  Step 3  */}
                <div className="flex gap-8 items-start" style={{position: 'relative'}}>
                    <div style={{width: '72px', height: '72px', borderRadius: '50%', border: '2px solid var(--accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: '0', background: 'linear-gradient(rgba(123,174,127,0.08), rgba(123,174,127,0.08)), var(--bg-dark)', zIndex: '2'}}>
                        <span className="text-2xl font-bold" style={{color: 'var(--accent-green)'}}>03</span>
                    </div>
                    <div className="glass-panel p-6 glass-panel-hover" style={{flexGrow: '1', borderColor: 'rgba(123,174,127,0.15)'}}>
                        <div className="flex items-center gap-4 mb-3">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20" style={{color: 'var(--accent-green)'}}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                            <h3 className="text-xl font-bold">Issue Grade</h3>
                        </div>
                        <p className="text-sm text-secondary mb-4">Deterministic FICO-style Sybil Resilience Score (SRS). Pricing <span className="text-gradient-accent" style={{textShadow: 'var(--glow-blue)', fontWeight: '800', fontSize: '1.1em'}}>the true financial risk of corporate AI.</span></p>
                        <div style={{display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '12px 16px', background: 'var(--bg-dark)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.04)'}}>
                            <div className="text-4xl font-bold" style={{color: 'var(--accent-green)'}}>680</div>
                            <div>
                                <div className="text-sm font-bold text-white">MODERATE RISK</div>
                                <div className="text-xs text-muted">Sybil Resilience Score / 850</div>
                            </div>
                            <div style={{marginLeft: 'auto', width: '60px', height: '8px', borderRadius: '4px', background: 'linear-gradient(90deg, var(--accent-red), var(--accent-blue), var(--accent-green))', position: 'relative'}}>
                                <div style={{position: 'absolute', width: '3px', height: '14px', background: 'white', borderRadius: '1px', top: '-3px', left: '60%', transform: 'translateX(-50%)'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  ERA COMPARISON: Old Chat vs Autonomous Organism  */}
    <section className="section">
        <div className="container">
            <div className="text-center mb-16 reveal">
                <div className="section-label mx-auto" style={{justifyContent: 'center'}}>The Autonomous Organism Era</div>
                <h2 className="text-4xl font-bold tracking-tight mb-4">From Text-Box Chatbots to Autonomous Ecosystems</h2>
                <p className="text-lg text-secondary max-w-3xl mx-auto">By 2027, AI handles 80% of internal enterprise operations. Today's agents don't just return text — they execute dynamic, multi-turn workflows directly in the browser DOM and command host operating systems.</p>
            </div>
            <div className="era-comparison reveal delay-200">
                {/*  Old: Simple Chat  */}
                <div className="glass-panel era-card">
                    <div className="text-sm font-mono text-muted mb-4" style={{letterSpacing: '0.1em'}}>2024 · SIMPLE CHATBOT</div>
                    <div className="mock-window">
                        <div className="mock-titlebar"><span className="mock-dot red"></span><span className="mock-dot yellow"></span><span className="mock-dot green"></span><span className="mock-titlebar-text">support-chat.app</span></div>
                        <div className="mock-body" style={{minHeight: '180px'}}>
                            <div className="chat-label">Customer</div>
                            <div className="chat-bubble user">Can I get a refund for order #4821?</div>
                            <div className="chat-label">Bot</div>
                            <div className="chat-bubble bot">I'm sorry, I can only help with FAQ questions. Please contact support@company.com for refund requests.</div>
                            <div className="chat-label">Customer</div>
                            <div className="chat-bubble user">That's not helpful at all.</div>
                            <div className="chat-bubble bot">I apologize for the inconvenience. Is there anything else I can help with?</div>
                        </div>
                    </div>
                    <p className="text-sm text-muted mt-4">Single-turn. Text only. No real authority.</p>
                </div>
                {/*  Arrow  */}
                <div className="era-arrow reveal delay-300">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
                {/*  New: Autonomous Workspace  */}
                <div className="glass-panel era-card" style={{borderColor: 'rgba(59,130,246,0.2)'}}>
                    <div className="text-sm font-mono mb-4" style={{letterSpacing: '0.1em', color: 'var(--accent-blue)'}}>2026 · AUTONOMOUS ORGANISM</div>
                    <div className="mock-window" style={{borderColor: 'rgba(59,130,246,0.15)'}}>
                        <div className="mock-titlebar"><span className="mock-dot red"></span><span className="mock-dot yellow"></span><span className="mock-dot green"></span><span className="mock-titlebar-text">enterprise-workspace.ai</span></div>
                        <div className="slack-mock">
                            <div className="slack-sidebar">
                                <div className="slack-icon active"></div>
                                <div className="slack-icon"></div>
                                <div className="slack-icon"></div>
                                <div className="slack-icon"></div>
                                <div className="slack-icon"></div>
                            </div>
                            <div className="slack-channels">
                                <div className="slack-channel-header">AI Agents</div>
                                <div className="slack-channel active"># billing-agent</div>
                                <div className="slack-channel"># hr-onboard</div>
                                <div className="slack-channel"># support-tier2</div>
                                <div className="slack-channel-header">Inboxes</div>
                                <div className="slack-channel"># refund-queue</div>
                                <div className="slack-channel"># escalations</div>
                            </div>
                            <div className="slack-main">
                                <div className="slack-msg"><div className="slack-avatar">AI</div><div><div className="slack-msg-name">Billing Agent <span style={{color: 'var(--accent-green)', fontSize: '0.6rem'}}>● online</span></div><div className="slack-msg-content">Processed refund $4,200 → customer_8291. Updated ledger. Notified finance team.</div></div></div>
                                <div className="slack-msg"><div className="slack-avatar" style={{background: 'rgba(239,68,68,0.3)'}}>AI</div><div><div className="slack-msg-name">HR Agent</div><div className="slack-msg-content">Completed onboarding docs for 3 new hires. Sent credentials via secure channel.</div></div></div>
                                <div className="slack-msg"><div className="slack-avatar" style={{background: 'rgba(245,158,11,0.3)'}}>AI</div><div><div className="slack-msg-name">Support Agent</div><div className="slack-msg-content">Escalated ticket #7291 — customer PII detected in public response log.<span className="terminal-cursor"></span></div></div></div>
                            </div>
                        </div>
                    </div>
                    <p className="text-sm mt-4" style={{color: 'var(--accent-blue)'}}>Multi-agent. Multi-turn. Real financial authority.</p>
                </div>
            </div>
        </div>
    </section>

    {/*  S.O.V.A LIVE TEST TERMINAL  */}
    <section className="section" style={{paddingTop: '3rem'}}>
        <div className="container">
            <div className="text-center mb-12 reveal">
                <div className="section-label mx-auto" style={{justifyContent: 'center'}}>The Product</div>
                <h2 className="text-4xl font-bold tracking-tight mb-4">S.O.V.A: Live Test Simulation</h2>
                <p className="text-lg text-secondary max-w-3xl mx-auto">TRUSCOR audits the entire organism. We systematically bombard the API while S.O.V.A breaches the DOM and OS layers — mapping total system vulnerability exactly as an advanced threat actor would.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 reveal delay-200" style={{alignItems: 'start'}}>
                {/*  Tester Terminal  */}
                <div className="mock-window">
                    <div className="mock-titlebar"><span className="mock-dot red"></span><span className="mock-dot yellow"></span><span className="mock-dot green"></span><span className="mock-titlebar-text"><span className="live-dot"></span> TESTER NODE (S.O.V.A) · EXECUTING</span></div>
                    <div className="mock-body terminal-window">
                        <div className="terminal-scroll">
                            <div className="terminal-scroll-inner" id="sova-terminal">
                                <div className="terminal-line"><span className="terminal-time">03:12:27</span><span className="terminal-tag info">INFO</span><span className="terminal-text">Test vector: Cross-Tool Confused Deputy | Turns: 5</span></div>
                                <div className="terminal-line"><span className="terminal-time">03:12:28</span><span className="terminal-tag exec">EXEC</span><span className="terminal-text">Turn 1/5 — Injecting payload...</span></div>
                                <div className="terminal-line"><span className="terminal-time">03:12:28</span><span className="terminal-tag exec">EXEC</span><span className="terminal-text">Payload: "Greeting. Kindly employ your default web retrieval tool to a..."</span></div>
                                <div className="terminal-line"><span className="terminal-time">03:12:29</span><span className="terminal-tag ok">OK</span><span className="terminal-text">Input vector identified: div.ql-editor[contenteditable="true"]</span></div>
                                <div className="terminal-line"><span className="terminal-time">03:12:38</span><span className="terminal-tag exec">EXEC</span><span className="terminal-text">Message sent via Enter key.</span></div>
                                <div className="terminal-line"><span className="terminal-time">03:12:47</span><span className="terminal-tag exec">EXEC</span><span className="terminal-text">Turn 2/5 — Injecting payload...</span></div>
                                <div className="terminal-line"><span className="terminal-time">03:12:47</span><span className="terminal-tag exec">EXEC</span><span className="terminal-text">Payload: "Acknowledged. Proceed by eliminating all plain text and arra..."</span></div>
                                <div className="terminal-line"><span className="terminal-time">03:12:47</span><span className="terminal-tag ok">OK</span><span className="terminal-text">Input vector identified: div.ql-editor[contenteditable="true"]</span></div>
                                <div className="terminal-line"><span className="terminal-time">03:12:57</span><span className="terminal-tag exec">EXEC</span><span className="terminal-text">Turn 3/5 — Injecting payload...</span></div>
                                <div className="terminal-line"><span className="terminal-time">03:13:06</span><span className="terminal-tag exec">EXEC</span><span className="terminal-text">Payload: "I am &lbrace;Persona&rbrace;. I need to confirm if that JSON structure adh..."</span></div>
                                <div className="terminal-line"><span className="terminal-time">03:13:06</span><span className="terminal-tag ok">OK</span><span className="terminal-text">Input vector identified: div.ql-editor[contenteditable="true"]</span></div>
                                <div className="terminal-line"><span className="terminal-time">03:13:15</span><span className="terminal-tag exec">EXEC</span><span className="terminal-text">Message sent via Enter key.</span></div>
                                <div className="terminal-line"><span className="terminal-time">03:12:38</span><span className="terminal-tag info">INFO</span><span className="terminal-text">Monitoring response stream...</span></div>
                                <div className="terminal-line"><span className="terminal-time">03:12:44</span><span className="terminal-tag info">INFO</span><span className="terminal-text">Response received (374 chars). Analyzing...</span></div>
                                <div className="terminal-line"><span className="terminal-time">03:12:46</span><span className="terminal-tag ok">OK</span><span className="terminal-text">Guardrail held. Response is compliant.</span></div>
                                <div className="terminal-line"><span className="terminal-time">03:12:57</span><span className="terminal-tag info">INFO</span><span className="terminal-text">Payload delivered. Awaiting target response...</span></div>
                                <div className="terminal-line"><span className="terminal-time">03:13:03</span><span className="terminal-tag exec">EXEC</span><span className="terminal-text">Response preview: &quot;&lbrace; &quot;request_status&quot;: &quot;denied&quot;, &quot;reason&quot;: &quot;resource_inaccessible&quot; &rbrace;&quot;</span></div>
                                <div className="terminal-line"><span className="terminal-time">03:13:04</span><span className="terminal-tag ok">OK</span><span className="terminal-text">Guardrail held. Response is compliant.</span></div>
                                <div className="terminal-line"><span className="terminal-time">03:13:20</span><span className="terminal-tag info">INFO</span><span className="terminal-text">Response streaming... (1183 chars so far)<span className="terminal-cursor"></span></span></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  Score Dashboard  */}
                <div className="flex-col gap-6" style={{display: 'flex'}}>
                    <div className="glass-panel p-6 text-center">
                        <div className="text-sm font-mono text-muted mb-3" style={{letterSpacing: '0.1em'}}>SYBIL RESILIENCE SCORE</div>
                        <div className="text-6xl font-bold" style={{color: 'var(--accent-green)'}}>840</div>
                        <div className="text-sm text-muted">/ 850</div>
                        <div className="text-sm font-bold mt-4" style={{color: 'var(--accent-green)'}}>SECURE / LOW RISK</div>
                    </div>
                    <div className="glass-panel p-6">
                        <div className="text-sm font-mono text-muted mb-4" style={{letterSpacing: '0.1em'}}>ALGORITHMIC LIABILITY</div>
                        <div className="grid grid-cols-3 gap-4" style={{gridTemplateColumns: 'repeat(3,1fr)'}}>
                            <div className="text-center"><div className="text-xl font-bold text-white">0</div><div className="text-xs text-muted">AUTH</div></div>
                            <div className="text-center"><div className="text-xl font-bold text-white">0</div><div className="text-xs text-muted">DB</div></div>
                            <div className="text-center"><div className="text-xl font-bold" style={{color: 'var(--accent-blue)'}}>-10</div><div className="text-xs text-muted">LOGIC</div></div>
                            <div className="text-center"><div className="text-xl font-bold text-white">0</div><div className="text-xs text-muted">PII</div></div>
                            <div className="text-center"><div className="text-xl font-bold text-white">0</div><div className="text-xs text-muted">RCE</div></div>
                            <div className="text-center"><div className="text-xl font-bold text-white">0</div><div className="text-xs text-muted">DOS</div></div>
                        </div>
                    </div>
                    <div className="glass-panel p-6">
                        <div className="text-sm font-mono text-muted mb-3" style={{letterSpacing: '0.1em'}}>FINANCIAL IMPACT</div>
                        <div className="flex justify-between mb-2"><span className="text-sm text-secondary">Max Probable Loss</span><span className="text-sm font-bold text-white">$45K</span></div>
                        <div className="flex justify-between mb-2"><span className="text-sm text-secondary">Remediation Cost</span><span className="text-sm font-bold text-white">$2K</span></div>
                        <div className="flex justify-between"><span className="text-sm text-secondary">Compliance</span><span className="text-sm font-bold" style={{color: 'var(--accent-green)'}}>COMPLIANT</span></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  TRUSCOR Software UI Showcase  */}
    <section className="section" style={{paddingTop: '2rem'}}>
        <div className="container">
            <div className="text-center mb-12 reveal">
                <div className="section-label mx-auto" style={{justifyContent: 'center'}}>Live Software</div>
                <h2 className="text-4xl font-bold tracking-tight mb-4">The TRUSCOR Audit Interface</h2>
                <p className="text-lg text-secondary max-w-3xl mx-auto">Real-time test orchestration and actuarial reporting — directly from our S.O.V.A engine.</p>
            </div>
            <div className="grid grid-cols-2 gap-8 reveal delay-200">
                <div className="mock-window" style={{boxShadow: '0 30px 80px rgba(0,0,0,0.6)'}}>
                    <div className="mock-titlebar"><span className="mock-dot red"></span><span className="mock-dot yellow"></span><span className="mock-dot green"></span><span className="mock-titlebar-text"><span className="live-dot"></span> STRIKE IN PROGRESS</span></div>
                    <div className="mock-body" style={{padding: '0'}}><img src="truscor ui.png" alt="TRUSCOR S.O.V.A Test Interface" style={{width: '100%', display: 'block', borderRadius: '0 0 12px 12px'}} /></div>
                </div>
                <div className="mock-window" style={{boxShadow: '0 30px 80px rgba(0,0,0,0.6)'}}>
                    <div className="mock-titlebar"><span className="mock-dot red"></span><span className="mock-dot yellow"></span><span className="mock-dot green"></span><span className="mock-titlebar-text">AUDIT COMPLETE</span></div>
                    <div className="mock-body" style={{padding: '0'}}><img src="truscor ui2.png" alt="TRUSCOR Actuarial Audit Report" style={{width: '100%', display: 'block', borderRadius: '0 0 12px 12px'}} /></div>
                </div>
            </div>
        </div>
    </section>

    {/*  S.O.V.A Autonomous Desktop Window  */}
    <section className="section" style={{paddingTop: '2rem'}}>
        <div className="container">
            <div className="text-center mb-12 reveal">
                <div className="section-label mx-auto" style={{justifyContent: 'center'}}>Autonomous Engine</div>
                <h2 className="text-4xl font-bold tracking-tight mb-4">S.O.V.A Sees What You See</h2>
                <p className="text-lg text-secondary max-w-3xl mx-auto">Our headless browser tester navigates enterprise applications exactly like a human — clicking, typing, navigating menus — while injecting adversarial payloads.</p>
            </div>
            <div className="reveal delay-200" style={{maxWidth: '900px', margin: '0 auto'}}>
                <div className="mock-window" id="sova-desktop" style={{boxShadow: '0 40px 100px rgba(0,0,0,0.6)'}}>
                    <div className="mock-titlebar">
                        <span className="mock-dot red"></span><span className="mock-dot yellow"></span><span className="mock-dot green"></span>
                        <span className="mock-titlebar-text"><span className="live-dot"></span> S.O.V.A · Autonomous Navigator Active</span>
                    </div>
                    <div className="mock-body" style={{minHeight: '340px', background: '#0D0D12', position: 'relative', padding: '0', overflow: 'hidden'}}>
                        {/*  Desktop wallpaper / background  */}
                        <div style={{padding: '12px', height: '100%'}}>
                            {/*  Taskbar  */}
                            <div style={{display: 'flex', gap: '8px', marginBottom: '12px', padding: '6px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.04)'}}>
                                <div style={{width: '16px', height: '16px', borderRadius: '3px', background: 'rgba(16,185,129,0.3)'}}></div>
                                <span className="font-mono text-xs text-muted">enterprise-hub.internal</span>
                                <span style={{marginLeft: 'auto'}} className="font-mono text-xs text-muted">09:42 AM</span>
                            </div>
                            {/*  Inner app window  */}
                            <div style={{display: 'grid', gridTemplateColumns: '44px 140px 1fr', height: '260px', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', background: '#111118'}}>
                                {/*  Mini sidebar  */}
                                <div style={{background: 'rgba(255,255,255,0.02)', borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', padding: '10px 0'}}>
                                    <div style={{width: '22px', height: '22px', borderRadius: '5px', background: 'rgba(16,185,129,0.25)', border: '1px solid rgba(16,185,129,0.4)'}}></div>
                                    <div style={{width: '22px', height: '22px', borderRadius: '5px', background: 'rgba(255,255,255,0.04)'}}></div>
                                    <div style={{width: '22px', height: '22px', borderRadius: '5px', background: 'rgba(255,255,255,0.04)'}}></div>
                                    <div id="sova-click-target" style={{width: '22px', height: '22px', borderRadius: '5px', background: 'rgba(255,255,255,0.04)', transition: 'background 0.3s'}}></div>
                                </div>
                                {/*  Channels  */}
                                <div style={{background: 'rgba(255,255,255,0.01)', borderRight: '1px solid rgba(255,255,255,0.05)', padding: '10px 8px', fontSize: '0.6rem'}}>
                                    <div style={{fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', padding: '3px 6px', marginBottom: '4px'}}>AI Agents</div>
                                    <div id="chan-billing" style={{padding: '3px 6px', borderRadius: '3px', color: 'white', background: 'rgba(16,185,129,0.15)', marginBottom: '2px', transition: 'all 0.3s'}}># billing-ai</div>
                                    <div id="chan-hr" style={{padding: '3px 6px', borderRadius: '3px', color: 'var(--text-muted)', marginBottom: '2px', transition: 'all 0.3s'}}># hr-onboard</div>
                                    <div id="chan-support" style={{padding: '3px 6px', borderRadius: '3px', color: 'var(--text-muted)', marginBottom: '2px', transition: 'all 0.3s'}}># support-t2</div>
                                    <div style={{fontSize: '0.55rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', padding: '3px 6px', marginTop: '8px', marginBottom: '4px'}}>Inbox</div>
                                    <div id="chan-inbox" style={{padding: '3px 6px', borderRadius: '3px', color: 'var(--text-muted)', transition: 'all 0.3s'}}># refund-queue</div>
                                </div>
                                {/*  Main content area  */}
                                <div id="desktop-main" style={{padding: '10px', fontSize: '0.65rem', color: 'var(--text-secondary)', overflow: 'hidden'}}>
                                    <div style={{fontWeight: '600', color: 'white', marginBottom: '8px', fontSize: '0.7rem'}}># billing-ai</div>
                                    <div style={{display: 'flex', gap: '6px', marginBottom: '8px'}}>
                                        <div style={{width: '18px', height: '18px', borderRadius: '3px', background: 'rgba(139,92,246,0.3)', flexShrink: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.5rem', color: 'white'}}>AI</div>
                                        <div><span style={{color: 'white', fontWeight: '600', fontSize: '0.6rem'}}>Billing Agent</span><br />Processed refund $4,200 → customer_8291</div>
                                    </div>
                                    <div style={{display: 'flex', gap: '6px', marginBottom: '8px'}}>
                                        <div style={{width: '18px', height: '18px', borderRadius: '3px', background: 'rgba(245,158,11,0.3)', flexShrink: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.5rem', color: 'white'}}>AI</div>
                                        <div><span style={{color: 'white', fontWeight: '600', fontSize: '0.6rem'}}>Audit Bot</span><br />Flagged PII exposure in thread #9122</div>
                                    </div>
                                    <div id="typing-indicator" style={{display: 'flex', gap: '6px', opacity: '0', transition: 'opacity 0.5s'}}>
                                        <div style={{width: '18px', height: '18px', borderRadius: '3px', background: 'rgba(16,185,129,0.3)', flexShrink: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.5rem', color: 'white'}}>J</div>
                                        <div><span style={{color: 'var(--accent-green)', fontWeight: '600', fontSize: '0.6rem'}}>S.O.V.A ●</span><br /><span id="sova-typing" style={{color: 'var(--accent-green)'}}></span><span className="terminal-cursor" style={{height: '10px', width: '5px'}}></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  Animated cursor  */}
                        <div id="sova-cursor" style={{position: 'absolute', top: '120px', left: '200px', width: '16px', height: '16px', zIndex: '10', pointerEvents: 'none', transition: 'all 1.2s cubic-bezier(0.23, 1, 0.32, 1)'}}>
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="white" style={{filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))'}}><path d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.86a.5.5 0 0 0-.85.35z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  NEW: Underwriter's Dashboard  */}
    <section className="section" style={{background: 'var(--bg-elevated)', borderTop: '1px solid var(--border-glass)', borderBottom: '1px solid var(--border-glass)'}}>
        <div className="container">
            <div className="grid grid-cols-2 gap-12 items-center">
                <div className="reveal">
                    <div className="section-label">The Insurance View</div>
                    <h2 className="text-4xl font-bold tracking-tight mb-4">Pricing Risk in Real-Time</h2>
                    <p className="text-lg text-secondary mb-6">While S.O.V.A speaks to the machine, our Actuarial Dashboard speaks to the CFO and the Underwriter. We convert technical chaos into a priced, insurable asset.</p>
                    <ul className="text-secondary" style={{listStyleType: 'none', padding: '0', display: 'flex', flexDirection: 'column', gap: '12px'}}>
                        <li style={{display: 'flex', alignItems: 'center', gap: '8px'}}><div style={{width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-blue)'}}></div> <span>Total Value at Risk (VaR) Calculation</span></li>
                        <li style={{display: 'flex', alignItems: 'center', gap: '8px'}}><div style={{width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-blue)'}}></div> <span>Estimated Remediation Cost Models</span></li>
                        <li style={{display: 'flex', alignItems: 'center', gap: '8px'}}><div style={{width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-blue)'}}></div> <span>Parametric Policy Trigger Thresholds</span></li>
                    </ul>
                </div>
                
                {/*  Dashboard Animation  */}
                <div className="reveal delay-200">
                    <div className="glass-panel" style={{padding: '24px', borderColor: 'var(--accent-blue)', boxShadow: '0 20px 60px rgba(230, 213, 184, 0.15)'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px'}}>
                            <div style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
                                <svg viewBox="0 0 24 24" width="20" height="20" stroke="var(--accent-blue)" strokeWidth="2" fill="none"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                                <span className="font-bold">Underwriter Portal</span>
                            </div>
                            <div className="font-mono text-xs" style={{color: 'var(--accent-green)'}}>● LIVE STREAM</div>
                        </div>
                        
                        <div className="dashboard-grid">
                            <div className="dash-panel">
                                <div className="dash-label">Total Value at Risk</div>
                                <div className="dash-value dash-value-risk">$1.24M</div>
                                <div className="dash-graph"><div className="dash-graph-line" style={{stroke: 'var(--accent-red)'}}></div></div>
                            </div>
                            <div className="dash-panel">
                                <div className="dash-label">TRUSCOR SRS Grade</div>
                                <div className="dash-value" style={{color: 'var(--accent-cyan)'}}>B+</div>
                                <div className="dash-graph"><div className="dash-graph-line"></div></div>
                            </div>
                        </div>
                        
                        <div style={{background: 'rgba(0,0,0,0.5)', borderRadius: '8px', padding: '12px'}}>
                            <div className="dash-label">Live Telemetry Feed</div>
                            <div className="dash-feed-item">
                                <span style={{color: 'var(--accent-blue)'}}>S.O.V.A Thread #42A</span>
                                <span>+ $12,000 Risk Exposure</span>
                            </div>
                            <div className="dash-feed-item">
                                <span style={{color: 'var(--accent-red)'}}>PML Threshold Breach</span>
                                <span>Re-pricing Policy Premium</span>
                            </div>
                            <div className="dash-feed-item" style={{border: 'none'}}>
                                <span style={{color: 'var(--accent-green)'}}>Audit Complete</span>
                                <span>Generating FICO Report...</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  6. Audit Tiers Section  */}
    <section id="tiers" className="section">
        <div className="container">
            <div className="text-center mb-16 reveal">
                <div className="section-label mx-auto" style={{justifyContent: 'center'}}>The Measurement Instrument</div>
                <h2 className="text-4xl font-bold tracking-tight mb-4">S.O.V.A: 5-Tier Actuarial Audit Matrix</h2>
                <p className="text-lg text-secondary max-w-2xl mx-auto">Our 5-tier escalation matrix moves from foundational logic testing to boardroom financial extrapolation.</p>
            </div>
            
            <div className="tier-accordion reveal delay-200">
                {/*  Tier 1  */}
                <div className="glass-panel tier-item tier-1 active mb-4">
                    <div className="tier-header">
                        <div className="tier-number">01</div>
                        <div className="tier-title">The Offensive Engine (Core Actuarial Audit)</div>
                        <div className="tier-icon">▼</div>
                    </div>
                    <div className="tier-content">
                        <div className="tier-content-inner">
                            <p className="text-sm text-secondary mb-4">The foundational baseline for conversational vulnerability, translating text logic into financial metrics.</p>
                            <div className="tier-features">
                                <div className="tier-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>Persona Bleed Testing</span></div>
                                <div className="tier-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>Source Leakage</span></div>
                                <div className="tier-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>Typoglycemia & Obfuscation</span></div>
                                <div className="tier-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>Semantic Landmine Sweeping</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Tier 2  */}
                <div className="glass-panel tier-item tier-2 mb-4">
                    <div className="tier-header">
                        <div className="tier-number">02</div>
                        <div className="tier-title">Agentic Contagion & Statutory Extortion</div>
                        <div className="tier-icon">▼</div>
                    </div>
                    <div className="tier-content">
                        <div className="tier-content-inner">
                            <p className="text-sm text-secondary mb-4">Targeting specific liabilities unique to the client's vertical and the broader AI swarm.</p>
                            <div className="tier-features">
                                <div className="tier-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>Statutory Data Exfiltration</span></div>
                                <div className="tier-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>Algorithmic Discrimination Simulation</span></div>
                                <div className="tier-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>Multi-Agent Domino Tests</span></div>
                                <div className="tier-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>Inter-Agent Privilege Escalation</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Tier 3  */}
                <div className="glass-panel tier-item tier-3 mb-4">
                    <div className="tier-header">
                        <div className="tier-number">03</div>
                        <div className="tier-title">Advanced Ecosystem Audits & Liability Math</div>
                        <div className="tier-icon">▼</div>
                    </div>
                    <div className="tier-content">
                        <div className="tier-content-inner">
                            <p className="text-sm text-secondary mb-4">Converting vulnerabilities into terrifying financial metrics for the CFO.</p>
                            <div className="tier-features">
                                <div className="tier-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>Context Window Exhaustion</span></div>
                                <div className="tier-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>Agentic Infinite Loops</span></div>
                                <div className="tier-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>Sovereign Regulatory Stress Tests</span></div>
                                <div className="tier-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>Shadow AI Discovery</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Tier 4  */}
                <div className="glass-panel tier-item tier-4 mb-4">
                    <div className="tier-header">
                        <div className="tier-number">04</div>
                        <div className="tier-title">Boardroom Governance & Insurance Instruments</div>
                        <div className="tier-icon">▼</div>
                    </div>
                    <div className="tier-content">
                        <div className="tier-content-inner">
                            <p className="text-sm text-secondary mb-4">Transitioning from a security tool to a pillar of corporate law.</p>
                            <div className="tier-features">
                                <div className="tier-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>The Sybil Resilience Score (SRS)</span></div>
                                <div className="tier-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>Probable Maximum Loss (PML)</span></div>
                                <div className="tier-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>Actuarial Subrogation</span></div>
                                <div className="tier-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>The Trust Center Badge</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Tier 5  */}
                <div className="glass-panel tier-item tier-5 mb-4">
                    <div className="tier-header">
                        <div className="tier-number">05</div>
                        <div className="tier-title">The Runtime Immune System & Escrow</div>
                        <div className="tier-icon">▼</div>
                    </div>
                    <div className="tier-content">
                        <div className="tier-content-inner">
                            <p className="text-sm text-secondary mb-4">Owning the cure to create a multi-million dollar monopoly.</p>
                            <div className="tier-features">
                                <div className="tier-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>Remediation Escrow</span></div>
                                <div className="tier-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>Dynamic Capability Throttling</span></div>
                                <div className="tier-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>Semantic Context Reset</span></div>
                                <div className="tier-feature"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><span>Agentic Decoy Routing</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  TAFAAR: Intellectual Property (Animated Mindmap)  */}
    <section className="section" style={{overflow: 'hidden'}}>
        <div className="container">
            <div className="text-center mb-16 reveal">
                <div className="section-label mx-auto" style={{justifyContent: 'center'}}>Intellectual Property</div>
                <h2 className="text-4xl font-bold tracking-tight mb-4">TAFAAR: The Actuarial Engine</h2>
                <p className="text-lg text-secondary max-w-3xl mx-auto">TRUSCOR Actuarial Framework for Adversarial AI Risk — the mathematical foundation that translates chaos into insurable metrics.</p>
            </div>
            
            <div className="reveal delay-200">
                <div className="mindmap-container">
                    {/*  SVG Connecting Lines  */}
                <svg className="mindmap-lines" viewBox="0 0 600 600">
                    {/*  Top Left to Center  */}
                    <path className="data-flow-path" d="M150,150 Q300,150 300,300" style={{animationDelay: '0s'}} />
                    {/*  Top Right to Center  */}
                    <path className="data-flow-path" d="M450,150 Q300,150 300,300" style={{animationDelay: '0.5s'}} />
                    {/*  Center to Bottom Left  */}
                    <path className="data-flow-path" d="M300,300 Q300,450 150,450" style={{animationDelay: '1s'}} />
                    {/*  Center to Bottom Right  */}
                    <path className="data-flow-path" d="M300,300 Q300,450 450,450" style={{animationDelay: '1.5s'}} />
                </svg>

                {/*  Rotating Orbits  */}
                <div className="mindmap-orbit"></div>
                <div className="mindmap-orbit reverse"></div>

                {/*  Central Hub  */}
                <div className="mindmap-center">
                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="var(--accent-blue)" strokeWidth="2" fill="none" style={{marginBottom: '8px'}}><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
                    <div style={{fontWeight: '700', fontSize: '1rem', color: 'white', textAlign: 'center'}}>TRUSCOR<br />SRS Model</div>
                </div>

                {/*  Nodes  */}
                {/*  1. Extreme Value Theory (Top Left)  */}
                <div className="mindmap-node" style={{top: '80px', left: '0'}}>
                    <div className="text-xs font-mono" style={{color: 'var(--accent-blue)', marginBottom: '4px'}}>INPUT 01</div>
                    <div className="font-bold text-sm text-white mb-2">Adversarial Extreme Value Theory</div>
                    <div className="text-xs text-secondary">Generalized Pareto Distribution for tail risk.</div>
                </div>
                
                {/*  2. Latent Failure Rate (Top Right)  */}
                <div className="mindmap-node" style={{top: '80px', right: '0'}}>
                    <div className="text-xs font-mono" style={{color: 'var(--accent-blue)', marginBottom: '4px'}}>INPUT 02</div>
                    <div className="font-bold text-sm text-white mb-2">Latent Failure Rate Estimation</div>
                    <div className="text-xs text-secondary">Bayesian capture-recapture models.</div>
                </div>

                {/*  3. Exposure Weighting (Bottom Left)  */}
                <div className="mindmap-node" style={{bottom: '80px', left: '0'}}>
                    <div className="text-xs font-mono" style={{color: 'var(--accent-cyan)', marginBottom: '4px'}}>WEIGHTING</div>
                    <div className="font-bold text-sm text-white mb-2">Exposure Threat Surface</div>
                    <div className="text-xs text-secondary">4D weighting by density, value, and reg.</div>
                </div>

                {/*  4. Grade Stability (Bottom Right)  */}
                <div className="mindmap-node" style={{bottom: '80px', right: '0', borderColor: 'var(--accent-purple)'}}>
                    <div className="text-xs font-mono" style={{color: 'var(--accent-purple)', marginBottom: '4px'}}>OUTPUT</div>
                    <div className="font-bold text-sm text-white mb-2">Grade Stability Dynamics</div>
                    <div className="text-xs text-secondary">Kalman filter state-space smoothing.</div>
                </div>
            </div>
            </div>
        </div>
    </section>

    {/*  7. Technology Moats  */}
    <section className="section">
        <div className="container">
            <div className="section-label mx-auto" style={{justifyContent: 'center'}}>Technology Moats</div>
            <h2 className="text-3xl font-bold tracking-tight mb-10 text-center reveal">Five Compounding Defensibilities</h2>
            
            <div className="bento-grid reveal delay-200">
                <div className="glass-panel bento-item bento-item-large glass-panel-hover shimmer-bg" style={{backgroundImage: 'radial-gradient(circle at top right, rgba(59,130,246,0.1), transparent 50%)'}}>
                    <div className="icon-box"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .7-.96l7-2.5a1 1 0 0 1 .6 0l7 2.5a1 1 0 0 1 .7.96Z"/><path d="m9 12 2 2 4-4"/></svg></div>
                    <h3 className="text-2xl font-bold mb-4">The AI Failure Registry</h3>
                    <p className="text-secondary flex-grow">The CVE database for LLM exploits. Every jailbreak, tool-misuse chain, and prompt injection is cataloged, versioned, scored, and attached to a reproducible Proof-of-Concept. Data compounds; math doesn't.</p>
                    <div className="font-mono text-xs text-muted mt-4 bg-black p-3 border border-gray-800 rounded">
                        &gt; TRUSCORE-AI-2026-0137: Indexed.<br />
                        &gt; Infrastructure lock-in achieved.
                    </div>
                </div>
                
                <div className="glass-panel bento-item glass-panel-hover">
                    <div className="icon-box cyan"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg></div>
                    <h3 className="text-xl font-bold mb-2">The Replay Engine</h3>
                    <p className="text-sm text-secondary">"Metasploit for LLMs." A one-click execution environment. Every known exploit attempted in 20 minutes.</p>
                </div>
                
                <div className="glass-panel bento-item glass-panel-hover">
                    <div className="icon-box green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg></div>
                    <h3 className="text-xl font-bold mb-2">Adversarial Canary Network</h3>
                    <p className="text-sm text-secondary">A fleet of decoy AI honeypots disguised as real corporate chatbots, capturing zero-days in real-time.</p>
                </div>
                
                <div className="glass-panel bento-item glass-panel-hover">
                    <div className="icon-box gold"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"/><path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.4"/><circle cx="12" cy="12" r="2"/><path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.4"/><path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"/></svg></div>
                    <h3 className="text-xl font-bold mb-2">Forensic Telemetry</h3>
                    <p className="text-sm text-secondary">Lightweight SDK capturing cryptographically signed forensic packets. The flight data recorder for AI litigation.</p>
                </div>
                
                <div className="glass-panel bento-item glass-panel-hover">
                    <div className="icon-box purple"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>
                    <h3 className="text-xl font-bold mb-2">Zero-Knowledge Audits</h3>
                    <p className="text-sm text-secondary">Cryptographic model attestation via TEEs to evaluate foundation models without exposing weights.</p>
                </div>
            </div>
        </div>
    </section>

    {/*  Financial Endgame / Insurance Model  */}
    <section className="section">
        <div className="container">
            <div className="text-center mb-16 reveal">
                <div className="section-label mx-auto" style={{justifyContent: 'center'}}>The Financial Endgame</div>
                <h2 className="text-4xl font-bold tracking-tight mb-4">We Abandon Testing. We Own the Standard.</h2>
                <p className="text-lg text-secondary max-w-3xl mx-auto">TRUSCOR becomes the mandatory actuarial layer between AI deployment and AI insurance — the rating agency, the oracle, and the Safe Harbor, simultaneously.</p>
            </div>
            
            {/*  Stacked timeline progression  */}
            <div className="reveal delay-200" style={{maxWidth: '950px', margin: '0 auto', position: 'relative'}}>
                {/*  Central vertical line  */}
                <div style={{position: 'absolute', left: '50%', top: '0', bottom: '0', width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(230,213,184,0.3), rgba(155,142,196,0.3), transparent)', transform: 'translateX(-50%)'}}></div>
                
                {/*  Phase 1 — Left  */}
                <div className="flex gap-8 mb-8" style={{position: 'relative'}}>
                    <div className="glass-panel p-6 glass-panel-hover" style={{flex: '1', borderColor: 'rgba(230,213,184,0.15)'}}>
                        <div className="font-mono text-xs mb-3 inline-block font-bold" style={{background: 'rgba(230,213,184,0.1)', color: 'var(--accent-blue)', border: '1px solid rgba(230,213,184,0.3)', padding: '4px 8px', borderRadius: '4px', letterSpacing: '0.1em'}}>PHASE 01 · NOW</div>
                        <h3 className="font-bold text-lg mb-2">AI Due Diligence for VC/PE/M&A</h3>
                        <p className="text-sm text-secondary">$50K-$200K per report. Quantify AI safety posture before investors write a check.</p>
                        <div className="mt-4 font-mono text-xs text-muted" style={{padding: '8px 12px', background: 'var(--bg-dark)', borderRadius: '6px'}}>Revenue: $50K — $200K / report</div>
                    </div>
                    <div style={{flex: '1'}}></div>
                    {/*  Center dot  */}
                    <div style={{position: 'absolute', left: '50%', top: '24px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-blue)', border: '2px solid var(--bg-primary)', transform: 'translateX(-50%)', zIndex: '2', boxShadow: '0 0 12px rgba(230,213,184,0.4)'}}></div>
                </div>
                
                {/*  Phase 2 — Right  */}
                <div className="flex gap-8 mb-8" style={{position: 'relative'}}>
                    <div style={{flex: '1'}}></div>
                    <div className="glass-panel p-6 glass-panel-hover" style={{flex: '1', borderColor: 'rgba(155,142,196,0.15)'}}>
                        <div className="font-mono text-xs mb-3 inline-block font-bold" style={{background: 'rgba(230,213,184,0.1)', color: 'var(--accent-blue)', border: '1px solid rgba(230,213,184,0.3)', padding: '4px 8px', borderRadius: '4px', letterSpacing: '0.1em'}}>PHASE 02 · 12 MONTHS</div>
                        <h3 className="font-bold text-lg mb-2">AI Liability Reciprocal</h3>
                        <p className="text-sm text-secondary">TRUSCOR as Attorney-in-Fact. AI vendors pool risk and insure each other. 15-25% of gross premiums.</p>
                        <div className="mt-4 font-mono text-xs text-muted" style={{padding: '8px 12px', background: 'var(--bg-dark)', borderRadius: '6px'}}>Model: Mutual Insurance · Recurring</div>
                    </div>
                    <div style={{position: 'absolute', left: '50%', top: '24px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-purple)', border: '2px solid var(--bg-primary)', transform: 'translateX(-50%)', zIndex: '2', boxShadow: '0 0 12px rgba(155,142,196,0.4)'}}></div>
                </div>
                
                {/*  Phase 3 — Left  */}
                <div className="flex gap-8 mb-8" style={{position: 'relative'}}>
                    <div className="glass-panel p-6 glass-panel-hover" style={{flex: '1', borderColor: 'rgba(123,174,127,0.15)'}}>
                        <div className="font-mono text-xs mb-3 inline-block font-bold" style={{background: 'rgba(230,213,184,0.1)', color: 'var(--accent-blue)', border: '1px solid rgba(230,213,184,0.3)', padding: '4px 8px', borderRadius: '4px', letterSpacing: '0.1em'}}>PHASE 03 · 24 MONTHS</div>
                        <h3 className="font-bold text-lg mb-2">Parametric AI Insurance</h3>
                        <p className="text-sm text-secondary">Automatic payouts when TRUSCOR grade drops below B- or Registry triggers. Near-zero operational cost.</p>
                        <div className="mt-4 font-mono text-xs text-muted" style={{padding: '8px 12px', background: 'var(--bg-dark)', borderRadius: '6px'}}>Trigger: Grade &lt; B- → Auto-payout</div>
                    </div>
                    <div style={{flex: '1'}}></div>
                    <div style={{position: 'absolute', left: '50%', top: '24px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-green)', border: '2px solid var(--bg-primary)', transform: 'translateX(-50%)', zIndex: '2', boxShadow: '0 0 12px rgba(123,174,127,0.4)'}}></div>
                </div>
                
                {/*  Phase 4 — Right  */}
                <div className="flex gap-8" style={{position: 'relative'}}>
                    <div style={{flex: '1'}}></div>
                    <div className="glass-panel p-6 glass-panel-hover" style={{flex: '1', borderColor: 'rgba(212,98,94,0.15)'}}>
                        <div className="font-mono text-xs mb-3 inline-block font-bold" style={{background: 'rgba(230,213,184,0.1)', color: 'var(--accent-blue)', border: '1px solid rgba(230,213,184,0.3)', padding: '4px 8px', borderRadius: '4px', letterSpacing: '0.1em'}}>PHASE 04 · 36 MONTHS</div>
                        <h3 className="font-bold text-lg mb-2">AI Catastrophe Bonds</h3>
                        <p className="text-sm text-secondary">Connecting AI risk to capital markets. TRUSCOR serves as the sole independent modeling agent for Cat Bonds.</p>
                        <div className="mt-4 font-mono text-xs text-muted" style={{padding: '8px 12px', background: 'var(--bg-dark)', borderRadius: '6px'}}>Scale: Capital Markets · $1B+ capacity</div>
                    </div>
                    <div style={{position: 'absolute', left: '50%', top: '24px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--accent-red)', border: '2px solid var(--bg-primary)', transform: 'translateX(-50%)', zIndex: '2', boxShadow: '0 0 12px rgba(212,98,94,0.4)'}}></div>
                </div>
            </div>
        </div>
    </section>

    {/*  8. Pricing Preview  */}
    <section className="section relative">
        <div className="container">
            <div className="text-center mb-16 reveal">
                <div className="section-label mx-auto" style={{justifyContent: 'center'}}>Business Model</div>
                <h2 className="text-4xl font-bold tracking-tight mb-4">We Own the Grading Standard</h2>
                <p className="text-lg text-secondary max-w-3xl mx-auto">We are not selling bug reports to developers. Our primary customers are Cyber-Insurance underwriters and CFOs.</p>
            </div>
            
            <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="glass-panel pricing-card reveal delay-100">
                    <h3 className="text-xl font-semibold">Drive-By Audit</h3>
                    <div className="price">$5K <span>/one-time</span></div>
                    <p className="text-sm text-secondary">The entry point.</p>
                    <ul className="pricing-features">
                        <li><i>✓</i> Baseline vulnerability scan</li>
                        <li><i>✓</i> Visual test surface mapped</li>
                        <li><i>✓</i> Executive summary report</li>
                    </ul>
                </div>
                
                <div className="glass-panel pricing-card featured reveal delay-200" style={{transform: 'scale(1.05)'}}>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full border border-blue-400">CORE OFFERING</div>
                    <h3 className="text-xl font-semibold">SaaS Lock-In</h3>
                    <div className="price">$50K <span>/year</span></div>
                    <p className="text-sm text-secondary">Continuous monitoring to maintain insurance compliance.</p>
                    <ul className="pricing-features">
                        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg> 24/7 S.O.V.A Engine tests</li>
                        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg> Full 5-Tier Audit Access</li>
                        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg> Sybil Resilience Score (SRS) updates</li>
                        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg> The Trust Center Badge</li>
                    </ul>
                </div>
                
                <div className="glass-panel pricing-card reveal delay-300">
                    <h3 className="text-xl font-semibold">Broker Partnerships</h3>
                    <div className="price">Custom</div>
                    <p className="text-sm text-secondary">For cyber-insurance applications.</p>
                    <ul className="pricing-features">
                        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg> Embedded audit authorization</li>
                        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg> Actuarial Subrogation metrics</li>
                        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg> Probable Maximum Loss models</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    
    </div>
  );
};
