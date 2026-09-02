import React from 'react';

// Import logos
import iitmrpLogo from '../assets/logos/iitmrp.png';
import build3Logo from '../assets/logos/build3.jpeg';
import razorpayLogo from '../assets/logos/razorpay.webp';
import thubLogo from '../assets/logos/thub.jpg';
import scalerLogo from '../assets/logos/scaler.jpeg';
import awsLogo from '../assets/logos/aws.png';
import dbsLogo from '../assets/logos/dbs.png';
import googleCloudLogo from '../assets/logos/googlecloud.png';
import githubLogo from '../assets/logos/github.png';
import perplexityLogo from '../assets/logos/perplexity.avif';
import microsoftLogo from '../assets/logos/microsoft.webp';
import replitLogo from '../assets/logos/replit.webp';
import anthropicLogo from '../assets/logos/anthropic.svg';
import zohoLogo from '../assets/logos/zoho.jpg';
import dpiitLogo from '../assets/logos/dpiit.webp';
import ynosLogo from '../assets/logos/ynos.png';
import viseyLogo from '../assets/logos/visey.webp';

interface LogoItem {
  name: string;
  logo: string;
  url: string;
}

const miniLogos: LogoItem[] = [
  { name: 'IIT Madras Research Park', logo: iitmrpLogo, url: 'https://respark.iitm.ac.in/startups' },
  { name: 'Build 3', logo: build3Logo, url: 'https://www.build3.org/' },
  { name: 'Razorpay', logo: razorpayLogo, url: 'https://razorpay.com/' },
  { name: 'T-HUB', logo: thubLogo, url: 'https://www.t-hub.co/' },
  { name: 'Scaler Innovation Lab', logo: scalerLogo, url: 'https://modest-use-253097.framer.app/innovation-lab' },
  { name: 'AWS Startups', logo: awsLogo, url: 'https://aws.amazon.com/startups/' },
  { name: 'DBS Bank', logo: dbsLogo, url: 'https://www.dbs.bank.in/in/sme/default.page' },
  { name: 'Google Cloud', logo: googleCloudLogo, url: 'https://cloud.google.com/startup' },
  { name: 'GitHub', logo: githubLogo, url: 'https://github.com/enterprise/startups' },
  { name: 'Perplexity', logo: perplexityLogo, url: 'https://www.perplexity.ai/startups' },
  { name: 'Microsoft for Startups', logo: microsoftLogo, url: 'https://www.microsoft.com/en-us/startups' },
  { name: 'Replit', logo: replitLogo, url: 'https://replit.com/startups' },
  { name: 'Anthropic', logo: anthropicLogo, url: 'https://www.anthropic.com/startup-program-official-terms' },
  { name: 'Zoho for Startups', logo: zohoLogo, url: 'https://www.zoho.com/en-in/startups/' },
  { name: 'Startup India (DPIIT)', logo: dpiitLogo, url: 'https://www.startupindia.gov.in/' },
  { name: 'YNOS Venture Engine', logo: ynosLogo, url: 'https://www.ynos.in/' },
  { name: 'Visey', logo: viseyLogo, url: 'https://visey.co.in/' },
];

export const MiniBackersMarquee: React.FC = () => {
  // Duplicate array for seamless infinite marquee loop
  const duplicatedLogos = [...miniLogos, ...miniLogos];

  return (
    <div className="w-full py-6 relative overflow-hidden bg-transparent border-y border-gray-200/40 my-2">
      <div className="text-center mb-3">
        <span className="font-mono text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] text-[#5b5675] uppercase opacity-75">
          Supported by leading ecosystem partners, accelerators & cloud programs
        </span>
      </div>

      <div className="marquee-container relative w-full overflow-hidden mask-fade-edges">
        {/* Left & Right gradient fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#fafcff] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#fafcff] to-transparent z-10" />

        <div className="animate-marquee-fast flex items-center gap-6 py-2">
          {duplicatedLogos.map((item, index) => (
            <a
              key={`${item.name}-${index}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white/70 hover:bg-white border border-gray-200/70 hover:border-accent/40 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-200 shrink-0 group"
            >
              <div className="w-6 h-6 rounded-md bg-white flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-200"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-semibold text-gray-700 group-hover:text-accent font-sans whitespace-nowrap transition-colors">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
