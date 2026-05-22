import { useState, useEffect } from 'react';
import { Waitlist } from './components/Waitlist';
import { DemoDownload } from './components/DemoDownload';

import { LoadingScreen } from './components/LoadingScreen';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { LiveAudit } from './components/LiveAudit';
import { DemoTeaser } from './components/DemoTeaser';

import { Team } from './components/Team';

import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { ReciprocalExchangeVisual } from './components/ReciprocalExchangeVisual';

import Lenis from 'lenis';

function App() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [aboutExpanded, setAboutExpanded] = useState(false);

  useEffect(() => {
    // Force the browser to start at the top of the page on refresh
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Initialize smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <LoadingScreen onLoadingComplete={() => setHasLoaded(true)} />

      <Navigation hasLoaded={hasLoaded} aboutExpanded={aboutExpanded} />

      <div className="scroll-container">
        <Hero hasLoaded={hasLoaded} />
        <DemoTeaser />
        <LiveAudit />
        <DemoDownload />
        <ReciprocalExchangeVisual />
        <AboutUs isExpanded={aboutExpanded} setIsExpanded={setAboutExpanded} />
        <Team />
        <Waitlist />
        <Footer />
      </div>
    </>
  );
}

export default App;
