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

const companyName = "GoChinaAdvisors";
const siteUrl = "https://gochinaadvisors.com";

const homePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'GoChinaAdvisors - Your Gateway to the China Market',
  description: 'End-to-end services for foreign investors in China, specializing in WFOE registration, tax compliance, and operational support.',
  url: siteUrl,
  mainEntity: {
    '@type': 'Organization',
    name: companyName,
    url: siteUrl,
    logo: `${siteUrl}/images/logo/logo.svg`,
    description: 'Professional consulting services for company registration, compliance, and growth in China.',
    foundingDate: '2008',
    numberOfEmployees: '50-100',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Suite 2001, Shanghai Tower, 501 Yincheng Middle Road',
      addressLocality: 'Shanghai',
      postalCode: '200120',
      addressCountry: 'CN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-21-1234-5678',
      contactType: 'Customer Service',
      areaServed: 'CN',
      availableLanguage: ['English', 'Chinese']
    },
    serviceArea: {
      '@type': 'Country',
      name: 'China'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'China Business Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'WFOE Registration',
            description: 'Complete Wholly Foreign-Owned Enterprise registration services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Tax Compliance',
            description: 'Comprehensive tax compliance and reporting services'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HR & Visa Services',
            description: 'Human resources and visa application support'
          }
        }
      ]
    }
  }
};

export const metadata: Metadata = {
  title: "GoChinaAdvisors | Your Gateway to the China Market",
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
    title: "GoChinaAdvisors - Launch, Operate & Thrive in China",
    description: "Expert consulting services for WFOE registration, business compliance, and market entry in China. 15+ years experience, 500+ successful projects.",
    url: siteUrl,
    siteName: "GoChinaAdvisors",
    images: [
      {
        url: `${siteUrl}/images/hero-background.webp`,
        width: 1200,
        height: 630,
        alt: "Professional GoChinaAdvisors team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoChinaAdvisors - Launch, Operate & Thrive in China",
    description: "Expert consulting services for WFOE registration, business compliance, and market entry in China.",
    images: [`${siteUrl}/images/hero-background.webp`],
  },
  alternates: {
    canonical: siteUrl,
  },
  other: {
    'script-homepage': {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(homePageSchema),
    },
  },
};

export default function HomePage() {
  return (
    <ErrorBoundary>
      {/* Loading Progress Indicator */}
      <LoadingProgress />
      
      
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