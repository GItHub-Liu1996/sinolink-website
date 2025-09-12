import { Metadata } from 'next';

const companyName = "GoChinaAdvisors";
const siteUrl = "https://gochinaadvisors.com";

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: companyName,
  url: siteUrl,
  image: `${siteUrl}/images/logo/logo.svg`,
  description: 'Comprehensive consulting services for foreign businesses entering the Chinese market.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Suite 2001, Shanghai Tower, 501 Yincheng Middle Road',
    addressLocality: 'Shanghai',
    postalCode: '200120',
    addressCountry: 'CN'
  },
  telephone: '+86-21-1234-5678',
  provider: {
    '@type': 'Organization',
    name: companyName,
    url: siteUrl
  },
  serviceType: [
    'Company Registration',
    'Tax & Compliance',
    'HR & Visa Services',
    'Intellectual Property Protection',
    'Market Entry Consulting',
    'Business Planning',
    'Financial Outsourcing',
    'Cross-border Funds Flow',
    'Legal Support',
    'Partnership Development'
  ],
  areaServed: {
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
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Intellectual Property Protection',
          description: 'IP registration and protection services'
        }
      }
    ]
  }
};

export const metadata: Metadata = {
  title: 'Our Services | GoChinaAdvisors',
  description: 'Explore our comprehensive suite of services, covering market entry, daily operations, compliance, HR, and intellectual property in China.',
  keywords: ['China business services', 'WFOE registration', 'tax compliance', 'HR services', 'intellectual property', 'market entry', 'business consulting'],
  openGraph: {
    title: 'Our Services | GoChinaAdvisors',
    description: 'Explore our comprehensive suite of services, covering market entry, daily operations, compliance, HR, and intellectual property in China.',
    url: `${siteUrl}/services`,
    type: 'website',
    images: [`${siteUrl}/images/services-og-image.png`]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services | GoChinaAdvisors',
    description: 'Explore our comprehensive suite of services, covering market entry, daily operations, compliance, HR, and intellectual property in China.',
    images: [`${siteUrl}/images/services-og-image.png`]
  },
  other: {
    'script-service': {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(serviceSchema),
    },
  },
};
