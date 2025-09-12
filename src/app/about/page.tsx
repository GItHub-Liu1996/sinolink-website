import type { Metadata } from 'next';
import AboutClient from './AboutClient';

const companyName = "GoChinaAdvisors";
const siteUrl = "https://gochinaadvisors.com";

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About GoChinaAdvisors',
  description: 'Learn about our mission, values, and the expert team dedicated to helping your business succeed in the complex China market.',
  url: `${siteUrl}/about`,
  mainEntity: {
    '@type': 'Organization',
    name: companyName,
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
    knowsAbout: [
      'China Business Registration',
      'WFOE Setup',
      'Tax Compliance',
      'HR Services',
      'Intellectual Property',
      'Market Entry Strategy',
      'Business Consulting'
    ],
    serviceArea: {
      '@type': 'Country',
      name: 'China'
    }
  }
};

export const metadata: Metadata = {
  title: "About Us | GoChinaAdvisors",
  description: "Learn about our mission, values, and the expert team dedicated to helping your business succeed in the complex China market.",
  keywords: [
    "about GoChinaAdvisors",
    "China business consultants",
    "China market experts",
    "foreign investment China",
    "China business team",
    "China consulting company",
    "China market entry experts"
  ],
  openGraph: {
    title: "About Us | GoChinaAdvisors",
    description: "Learn about our mission, values, and the expert team dedicated to helping your business succeed in the complex China market.",
    url: `${siteUrl}/about`,
    siteName: "GoChinaAdvisors",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  other: {
    'script-about': {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(aboutPageSchema),
    },
  },
};

export default function About() {
  return <AboutClient />;
}