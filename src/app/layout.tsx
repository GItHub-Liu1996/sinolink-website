import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer } from "@/components";
import { Montserrat, Lexend } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: '700',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  weight: ['400', '500'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: "China Business Solutions - Your Trusted Partner for Market Entry",
  description: "Professional consulting services for company registration, compliance, and growth in China. Expert guidance for WFOE, Joint Ventures, and business operations.",
  keywords: ["China business", "WFOE registration", "company setup", "business compliance", "China market entry", "business consulting"],
  authors: [{ name: "ChinaBiz Solutions" }],
  creator: "ChinaBiz Solutions",
  publisher: "ChinaBiz Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sinolink-website.vercel.app',
    title: 'China Business Solutions - Your Trusted Partner for Market Entry',
    description: 'Professional consulting services for company registration, compliance, and growth in China.',
    siteName: 'ChinaBiz Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'China Business Solutions - Your Trusted Partner for Market Entry',
    description: 'Professional consulting services for company registration, compliance, and growth in China.',
  },
  other: {
    'font-display': 'swap',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0B1120" />
        <meta name="color-scheme" content="dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className={`${montserrat.variable} ${lexend.variable} font-body antialiased bg-background-primary text-text-main`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent-cyan text-background-primary px-4 py-2 rounded-lg z-50">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
