import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: "About Us | ChinaBiz Solutions",
  description: "Learn about our mission, values, and the expert team dedicated to helping your business succeed in the complex China market.",
  keywords: [
    "about ChinaBiz Solutions",
    "China business consultants",
    "China market experts",
    "foreign investment China",
    "China business team",
    "China consulting company",
    "China market entry experts"
  ],
  openGraph: {
    title: "About Us | ChinaBiz Solutions",
    description: "Learn about our mission, values, and the expert team dedicated to helping your business succeed in the complex China market.",
    url: "https://sinolink-website.vercel.app/about",
    siteName: "ChinaBiz Solutions",
    type: "website",
  },
  alternates: {
    canonical: "https://sinolink-website.vercel.app/about",
  },
};

export default function About() {
  return <AboutClient />;
}