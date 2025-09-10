import dynamic from 'next/dynamic';
import { HeroSection } from './_components';
import type { Metadata } from 'next';

// 懒加载非首屏组件
const WhoWeAre = dynamic(() => import('./_components').then(mod => ({ default: mod.WhoWeAre })));
const ChallengesSection = dynamic(() => import('./_components').then(mod => ({ default: mod.ChallengesSection })));
const OurSolutions = dynamic(() => import('./_components').then(mod => ({ default: mod.ServicesOverview })));
const FeaturedCaseStudy = dynamic(() => import('./_components').then(mod => ({ default: mod.FeaturedCaseStudy })));

export const metadata: Metadata = {
  title: "China Business Solutions - Launch, Operate & Thrive in China",
  description: "Expert consulting services for WFOE registration, business compliance, and market entry in China. 15+ years experience, 500+ successful projects. Get professional guidance for your China business journey.",
  keywords: [
    "China business consulting",
    "WFOE registration",
    "China market entry",
    "business compliance China",
    "company setup China",
    "China business services",
    "foreign investment China",
    "business registration China"
  ],
  openGraph: {
    title: "China Business Solutions - Launch, Operate & Thrive in China",
    description: "Expert consulting services for WFOE registration, business compliance, and market entry in China. 15+ years experience, 500+ successful projects.",
    url: "https://sinolink-website.vercel.app",
    siteName: "ChinaBiz Solutions",
    images: [
      {
        url: "/images/hero-background.webp",
        width: 1200,
        height: 630,
        alt: "Professional China Business Solutions team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "China Business Solutions - Launch, Operate & Thrive in China",
    description: "Expert consulting services for WFOE registration, business compliance, and market entry in China.",
    images: ["/images/hero-background.webp"],
  },
  alternates: {
    canonical: "https://sinolink-website.vercel.app",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "China Business Solutions",
            "alternateName": "ChinaBiz Solutions",
            "url": "https://sinolink-website.vercel.app",
            "logo": "https://sinolink-website.vercel.app/favicon.ico",
            "description": "Professional consulting services for company registration, compliance, and growth in China.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Business District",
              "addressLocality": "Shanghai",
              "addressRegion": "Shanghai",
              "addressCountry": "CN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+86-21-1234-5678",
              "contactType": "customer service",
              "availableLanguage": ["English", "Chinese"]
            },
            "sameAs": [
              "https://sinolink-website.vercel.app"
            ],
            "foundingDate": "2010",
            "numberOfEmployees": "50-100",
            "serviceArea": {
              "@type": "Country",
              "name": "China"
            }
          })
        }}
      />
      
      <main>
        <HeroSection />
        <WhoWeAre />
        <ChallengesSection />
        <OurSolutions />
        <FeaturedCaseStudy />
      </main>
    </>
  );
}