import { Metadata } from 'next';

const companyName = "GoChinaAdvisors";
const siteUrl = "https://gochinaadvisors.com";

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact GoChinaAdvisors',
  description: 'Get in touch with our experts for a free consultation and personalized guidance on establishing your business in China.',
  url: `${siteUrl}/contact`,
  mainEntity: {
    '@type': 'Organization',
    name: companyName,
    url: siteUrl,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+86-21-1234-5678',
        contactType: 'Customer Service',
        areaServed: 'CN',
        availableLanguage: ['English', 'Chinese'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
          validFrom: '2024-01-01',
          validThrough: '2024-12-31'
        }
      },
      {
        '@type': 'ContactPoint',
        email: 'info@gochinaadvisors.com',
        contactType: 'Customer Service',
        areaServed: 'CN',
        availableLanguage: ['English', 'Chinese']
      }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Suite 2001, Shanghai Tower, 501 Yincheng Middle Road',
      addressLocality: 'Shanghai',
      addressRegion: 'Pudong New Area',
      postalCode: '200120',
      addressCountry: 'CN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '31.2304',
      longitude: '121.4737'
    }
  }
};

export const metadata: Metadata = {
  title: 'Contact Us | GoChinaAdvisors',
  description: 'Get in touch with our experts for a free consultation and personalized guidance on establishing your business in China.',
  keywords: [
    'contact GoChinaAdvisors',
    'China business consultation',
    'free consultation',
    'China business experts',
    'business setup China',
    'WFOE registration help',
    'China market entry consultation'
  ],
  openGraph: {
    title: 'Contact Us | GoChinaAdvisors',
    description: 'Get in touch with our experts for a free consultation and personalized guidance on establishing your business in China.',
    url: `${siteUrl}/contact`,
    siteName: 'GoChinaAdvisors',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | GoChinaAdvisors',
    description: 'Get in touch with our experts for a free consultation and personalized guidance on establishing your business in China.',
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  other: {
    'script-contact': {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(contactPageSchema),
    },
  },
};
