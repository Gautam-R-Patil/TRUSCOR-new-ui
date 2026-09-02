import React from 'react';
import { motion } from 'framer-motion';

// Backers Logos
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
import sarvamLogo from '../assets/logos/sarvam.jpeg';

// Ecosystem Logos
import ynosLogo from '../assets/logos/ynos.png';
import viseyLogo from '../assets/logos/visey.webp';

// Featured in Logos
import newsTrailLogo from '../assets/logos/newstrail.jpeg';
import tycoonWorldLogo from '../assets/logos/tycoonworld.png';

interface BackerItem {
  name: string;
  category: string;
  logo: string;
  url: string;
}

interface FeaturedItem {
  title: string;
  outlet: string;
  date: string;
  logo: string;
  url: string;
  quote: string;
  badge: string;
}

const backersList: BackerItem[] = [
  {
    name: 'IIT Madras Research Park',
    category: 'Incubation & Deeptech Hub',
    logo: iitmrpLogo,
    url: 'https://respark.iitm.ac.in/startups'
  },
  {
    name: 'Build 3',
    category: 'Venture Studio & Accelerator',
    logo: build3Logo,
    url: 'https://www.build3.org/'
  },
  {
    name: 'Razorpay',
    category: 'Fintech & Enterprise Cloud',
    logo: razorpayLogo,
    url: 'https://razorpay.com/'
  },
  {
    name: 'T-HUB',
    category: 'Innovation Ecosystem',
    logo: thubLogo,
    url: 'https://www.t-hub.co/'
  },
  {
    name: 'Scaler Innovation Lab',
    category: 'AI & Research Lab',
    logo: scalerLogo,
    url: 'https://modest-use-253097.framer.app/innovation-lab'
  },
  {
    name: 'AWS',
    category: 'AWS for Startups',
    logo: awsLogo,
    url: 'https://aws.amazon.com/startups/'
  },
  {
    name: 'DBS Bank',
    category: 'SME Innovation Program',
    logo: dbsLogo,
    url: 'https://www.dbs.bank.in/in/sme/default.page'
  },
  {
    name: 'Google Cloud',
    category: 'Google for Startups Cloud',
    logo: googleCloudLogo,
    url: 'https://cloud.google.com/startup'
  },
  {
    name: 'GitHub',
    category: 'GitHub for Startups',
    logo: githubLogo,
    url: 'https://github.com/enterprise/startups'
  },
  {
    name: 'Perplexity',
    category: 'Perplexity AI Startups',
    logo: perplexityLogo,
    url: 'https://www.perplexity.ai/startups'
  },
  {
    name: 'Microsoft',
    category: 'Microsoft Founders Hub',
    logo: microsoftLogo,
    url: 'https://www.microsoft.com/en-us/startups'
  },
  {
    name: 'Replit',
    category: 'Replit for Startups',
    logo: replitLogo,
    url: 'https://replit.com/startups'
  },
  {
    name: 'Anthropic',
    category: 'Anthropic Startup Program',
    logo: anthropicLogo,
    url: 'https://www.anthropic.com/startup-program-official-terms'
  },
  {
    name: 'Zoho',
    category: 'Zoho for Startups',
    logo: zohoLogo,
    url: 'https://www.zoho.com/en-in/startups/'
  },
  {
    name: 'Startup India',
    category: 'DPIIT Recognised Enterprise',
    logo: dpiitLogo,
    url: 'https://www.startupindia.gov.in/'
  },
  {
    name: 'Sarvam AI',
    category: 'Sovereign AI Ecosystem',
    logo: sarvamLogo,
    url: 'https://www.sarvam.ai/'
  }
];

const ecosystemsList: BackerItem[] = [
  {
    name: 'YNOS Venture Engine',
    category: 'IIT Madras Intelligence Platform',
    logo: ynosLogo,
    url: 'https://www.ynos.in/'
  },
  {
    name: 'Visey',
    category: 'Founder Network & Advisory',
    logo: viseyLogo,
    url: 'https://visey.co.in/'
  },
  {
    name: 'Razorpay Rize',
    category: 'Founder Community & Benefits',
    logo: razorpayLogo,
    url: 'https://razorpay.com/rize/community/'
  }
];

const mediaFeatures: FeaturedItem[] = [
  {
    outlet: 'News Trail',
    badge: 'National Press Feature',
    title: 'Truscor pioneers AI liability & insurance actuarial testing',
    date: 'Tech & Enterprise',
    logo: newsTrailLogo,
    url: 'https://newstrailindia.com/inner.php?id=30566',
    quote: 'Chennai-based startup builds the definitive actuarial safety rating and risk assessment framework for enterprise AI models.'
  },
  {
    outlet: 'Tycoon World',
    badge: 'Exclusive Story',
    title: 'Who gives AI a CIBIL score? Two 20-year-old Indians are building the answer',
    date: 'Cover Story',
    logo: tycoonWorldLogo,
    url: 'https://tycoonworld.in/who-gives-ai-a-cibil-score-two-20-year-old-indians-are-building-the-answer/',
    quote: 'Meet the founders building TRUSCOR: developing actuarial math and sovereign offensive testing to quantify enterprise AI liability.'
  }
];

interface BackersAndEcosystemsProps {
  variant?: 'standalone' | 'inline';
}

export const BackersAndEcosystems: React.FC<BackersAndEcosystemsProps> = ({ variant = 'standalone' }) => {
  const isInline = variant === 'inline';

  // Duplicate arrays for infinite loop
  const duplicatedBackers = [...backersList, ...backersList];
  const duplicatedEcosystems = [...ecosystemsList, ...ecosystemsList, ...ecosystemsList, ...ecosystemsList];

  return (
    <div className={`w-full relative z-20 overflow-hidden ${isInline ? 'my-12' : 'my-20'}`}>
      
      {/* SECTION HEADER */}
      <div className="container mx-auto px-4 text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <div className="eyebrow mx-auto mb-3">— INSTITUTIONAL BACKING & ECOSYSTEM</div>
          <h2 className="headline-section text-[#040224] font-sans font-extrabold tracking-tight" style={{ fontSize: isInline ? '2.2rem' : '2.6rem' }}>
            Backed by Premier Labs, Cloud Giants & Accelerators
          </h2>
          <p className="text-gray-700 font-medium mt-3 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Supported by leading innovation hubs, Tier-1 cloud startup programs, and global research ecosystems.
          </p>
        </motion.div>
      </div>

      {/* ROW 1: PRIMARY BACKERS ROLLING BANNER */}
      <div className="w-full relative py-3 marquee-container mb-6 overflow-hidden">
        {/* Edge Fade Gradients */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-20 sm:w-36 bg-gradient-to-r from-[#fafcff] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-20 sm:w-36 bg-gradient-to-l from-[#fafcff] to-transparent z-10" />

        <div className="animate-marquee flex items-center gap-5">
          {duplicatedBackers.map((backer, idx) => (
            <a
              key={`backer-${backer.name}-${idx}`}
              href={backer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-4 px-5 py-3.5 rounded-2xl bg-white/85 hover:bg-white border border-gray-200/90 hover:border-accent/40 shadow-xs hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 shrink-0 cursor-pointer"
              style={{ minWidth: '220px', maxWidth: '320px' }}
            >
              {/* Logo Box */}
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center p-2 shrink-0 shadow-2xs group-hover:scale-105 transition-transform duration-300">
                <img
                  src={backer.logo}
                  alt={backer.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              {/* Text Info */}
              <div className="flex flex-col min-w-0 pr-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-sans font-bold text-sm text-[#040224] group-hover:text-accent truncate transition-colors">
                    {backer.name}
                  </span>
                  <svg
                    className="w-3.5 h-3.5 text-gray-400 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all opacity-0 group-hover:opacity-100 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <span className="font-mono text-[11px] text-gray-500 truncate">
                  {backer.category}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ROW 2: ECOSYSTEMS BANNER (Smaller, Subtle Secondary Row) */}
      <div className="container mx-auto px-4 mt-8 mb-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gray-300" />
          <span className="font-mono text-[11px] font-bold tracking-[0.25em] text-[#5b5675] uppercase">
            ECOSYSTEM NETWORKS & PARTNERS
          </span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gray-300" />
        </div>
      </div>

      <div className="w-full relative py-2 marquee-container mb-16 overflow-hidden">
        {/* Edge Fade Gradients */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-20 sm:w-36 bg-gradient-to-r from-[#fafcff] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-20 sm:w-36 bg-gradient-to-l from-[#fafcff] to-transparent z-10" />

        <div className="animate-marquee-reverse flex items-center gap-4">
          {duplicatedEcosystems.map((eco, idx) => (
            <a
              key={`eco-${eco.name}-${idx}`}
              href={eco.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/70 hover:bg-white border border-gray-200/80 hover:border-accent/40 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 shrink-0 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center p-1.5 shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
                <img
                  src={eco.logo}
                  alt={eco.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <span className="font-sans font-semibold text-xs text-[#040224] group-hover:text-accent whitespace-nowrap transition-colors">
                    {eco.name}
                  </span>
                  <svg className="w-3 h-3 text-gray-400 group-hover:text-accent opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <span className="font-mono text-[10px] text-gray-500 whitespace-nowrap">
                  {eco.category}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* FEATURED IN SECTION */}
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl border border-gray-200/90 p-8 sm:p-10 shadow-sm relative overflow-hidden">
          {/* Subtle decorative background glow */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />

          <div className="text-center mb-8 relative z-10">
            <div className="font-mono text-xs font-bold tracking-[0.25em] text-accent uppercase mb-2">
              — AS SEEN IN THE PRESS
            </div>
            <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-[#040224] tracking-tight">
              Featured in National Tech & Business Media
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 relative z-10">
            {mediaFeatures.map((article, idx) => (
              <a
                key={`article-${article.outlet}-${idx}`}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#fafcff] hover:bg-white border border-gray-200/90 hover:border-accent hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Logo & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-10 px-3 py-1.5 bg-white rounded-xl border border-gray-200 flex items-center justify-center shadow-2xs">
                      <img
                        src={article.logo}
                        alt={article.outlet}
                        className="h-full w-auto max-w-[120px] object-contain"
                      />
                    </div>
                    <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-accent/10 text-accent uppercase tracking-wider">
                      {article.badge}
                    </span>
                  </div>

                  {/* Article Title */}
                  <h4 className="font-sans font-bold text-lg sm:text-xl text-[#040224] group-hover:text-accent transition-colors leading-snug mb-3">
                    "{article.title}"
                  </h4>

                  {/* Quote / Excerpt */}
                  <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6">
                    {article.quote}
                  </p>
                </div>

                {/* Bottom CTA Link */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-accent font-semibold text-sm group-hover:translate-x-0.5 transition-transform">
                  <span>Read Article on {article.outlet}</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};
