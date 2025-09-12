import dynamic from 'next/dynamic';
import { HeroSection } from './_components';
import { ResourcePreloader, LoadingProgress, ErrorBoundary, EmbeddedConsultationQuiz } from '@/components';
import type { Metadata } from 'next';

// Import critical components directly
import StatsSection from './_components/StatsSection';
import ServicesOverview from './_components/ServicesOverview';

// Non-critical components - lazy loaded
const ModernWhoWeAre = dynamic(() => import('./_components/ModernWhoWeAre'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
});

const InsightsSection = dynamic(() => import('./_components/InsightsSection'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>
});

const FeaturedCaseStudy = dynamic(() => import('./_components/FeaturedCaseStudy'), {
  loading: () => <div className="animate-pulse bg-gray-200 h-48 rounded-lg"></div>
});

export const metadata: Metadata = {
  title: "China Business Solutions | Your Gateway to the China Market",
  description: "End-to-end services for foreign investors in China, specializing in WFOE registration, tax compliance, and operational support.",
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
    <ErrorBoundary>
      {/* Loading Progress Indicator */}
      <LoadingProgress />
      
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
        {/* 1. Hero Section - Main value proposition */}
        <HeroSection />
        
        {/* 2. Why Choose Us - Core competitive advantages */}
        <StatsSection />
        
        {/* 3. Our Solutions - Services and solutions */}
        <ServicesOverview />
        
                 {/* 3.5. Smart Consultation Quiz - Interactive questionnaire */}
                 <section className="py-8 bg-gradient-to-br from-gray-50 to-gray-100">
                   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <EmbeddedConsultationQuiz
                   title="To Better Understand Your Needs"
                   subtitle="Answer a few questions to get personalized business consultation and recommendations"
                   showTitle={true}
                   maxQuestions={6}
                 />
          </div>
        </section>
        
        {/* 4. Insights Section - Insights content */}
        <InsightsSection />
        
        {/* 5. Featured Solution - Specific service showcase */}
        <FeaturedCaseStudy />
        
        {/* 6. Modern Team Section - Expert team showcase */}
        <ModernWhoWeAre />
        
        {/* Smart Resource Preloader */}
        <ResourcePreloader 
          preloadRoutes={['/services', '/about', '/contact', '/insights']}
          preloadImages={['/images/hero-background.webp']}
          preloadComponents={[
            '@/components/ui/AnimatedCounter',
            '@/components/ui/hover-effect'
          ]}
          delay={1500}
          userInteraction={true}
        />
      </main>
      
    </ErrorBoundary>
  );
}