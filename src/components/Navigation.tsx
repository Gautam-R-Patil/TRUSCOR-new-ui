import React, { useState } from 'react';

interface NavigationProps {
  hasLoaded: boolean;
  aboutExpanded: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ hasLoaded, aboutExpanded }) => {
  type NavLink = { label: string; href: string; isButton?: boolean };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Main page navigation
  const mainLinks: NavLink[] = [
    { label: 'About Us', href: '#about' },
    { label: 'Try Audit', href: '#section-audit' },
    { label: 'Download Demo', href: '#technology' },
    { label: 'Team', href: '#team' },
    { label: 'Join', href: '#waitlist', isButton: true }
  ];

  // Expanded about section navigation
  const expandedLinks: NavLink[] = [
    { label: 'Problem', href: '#about-problem' },
    { label: 'Solution', href: '#about-solution' },
    { label: 'Product Demo', href: '#about-product' },
    { label: 'Insurance', href: '#about-insurance' },
    { label: 'S.O.V.A', href: '#about-engine' },
    { label: 'TAFAAR', href: '#about-ip' },
    { label: 'Moats', href: '#about-moats' },
    { label: 'Business Model', href: '#about-business' },
    { label: 'Pricing', href: '#about-pricing' },
  ];

  const navLinks = aboutExpanded ? expandedLinks : mainLinks;

  const handleLogoClick = () => {
    if (aboutExpanded) {
      window.location.reload();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-50 transition-opacity duration-500 backdrop-blur-xl bg-white/30 border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.05)]" 
      style={{ opacity: hasLoaded ? 1 : 0, pointerEvents: hasLoaded ? 'auto' : 'none' }}
    >
      <div className="flex items-center justify-between px-4 md:px-8 py-4">
        {/* LEFT: Logo */}
        <div 
          className="flex items-center cursor-pointer transition-opacity duration-200" 
          style={{ transitionDelay: hasLoaded ? '0.8s' : '0s' }}
          onClick={handleLogoClick}
        >
          <span className="text-primary tracking-[0.3em] font-sans font-bold" style={{ fontSize: '18px', lineHeight: '18px' }}>
            TRUSCOR
          </span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="16 16 68 68" 
            fill="currentColor" 
            className="text-primary flex-shrink-0" 
            style={{ height: '18px', width: '18px', marginLeft: '4px' }}
          >
              <rect x="16" y="16" width="54" height="16" rx="3" />
              <rect x="30" y="42" width="54" height="16" rx="3" />
              <rect x="16" y="68" width="54" height="16" rx="3" />
          </svg>
        </div>
        
        {/* CENTER: Desktop Navigation Links */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-6 font-sans font-semibold text-[14px] text-gray-800 tracking-wide">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={
                link.isButton
                  ? "px-4 py-1.5 bg-[#7c3aed] text-white text-[13px] font-bold rounded-lg hover:bg-[#6d28d9] transition-colors duration-200 shadow-sm"
                  : "hover:text-accent transition-colors duration-200 whitespace-nowrap"
              }
            >
              {link.label}
            </a>
          ))}
        </div>
        
        {/* RIGHT: Mobile Hamburger */}
        <button 
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <rect x="0" y="4" width="24" height="2" />
              <rect x="0" y="11" width="24" height="2" />
              <rect x="0" y="18" width="24" height="2" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-white/20 px-6 py-4 flex flex-col gap-3 max-h-[70vh] overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={
                link.isButton
                  ? "px-4 py-2.5 bg-[#7c3aed] text-white text-[14px] font-bold rounded-lg text-center"
                  : "text-[15px] font-semibold text-gray-800 py-2 border-b border-gray-100 hover:text-accent transition-colors"
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
