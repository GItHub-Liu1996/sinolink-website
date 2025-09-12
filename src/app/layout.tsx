import type { Metadata } from "next";
import "./globals.css";
import { Navbar, Footer, ErrorBoundary } from "@/components";
import { Montserrat, Lexend } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: '700',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: false,
});

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  weight: ['400', '500'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: false,
});

// Generate metadata with structured data
export async function generateMetadata(): Promise<Metadata> {
  const companyName = "GoChinaAdvisors";
  const siteUrl = "https://gochinaadvisors.com";

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: companyName,
    url: siteUrl,
    logo: `${siteUrl}/images/logo/logo.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+86-21-1234-5678',
      contactType: 'Customer Service',
      areaServed: 'CN',
      availableLanguage: ['English', 'Chinese']
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Suite 2001, Shanghai Tower, 501 Yincheng Middle Road',
      addressLocality: 'Shanghai',
      postalCode: '200120',
      addressCountry: 'CN'
    },
    sameAs: [
      'https://www.linkedin.com/company/gochinaadvisors',
      'https://twitter.com/gochinaadvisors'
    ],
    description: 'Professional consulting services for company registration, compliance, and growth in China.'
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: companyName,
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: companyName
    }
  };

  return {
    metadataBase: new URL(siteUrl),
    title: "GoChinaAdvisors - Your Trusted Partner for Market Entry",
    description: "Professional consulting services for company registration, compliance, and growth in China. Expert guidance for WFOE, Joint Ventures, and business operations.",
    keywords: ["China business", "WFOE registration", "company setup", "business compliance", "China market entry", "business consulting"],
    authors: [{ name: "GoChinaAdvisors" }],
    creator: "GoChinaAdvisors",
    publisher: "GoChinaAdvisors",
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
        { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
        { url: '/images/logo/favicon.svg', type: 'image/svg+xml' }
      ],
      apple: [
        { url: '/images/logo/favicon.svg', sizes: '180x180', type: 'image/svg+xml' }
      ],
      shortcut: '/favicon.ico'
    },
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
      url: siteUrl,
      title: 'GoChinaAdvisors - Your Trusted Partner for Market Entry',
      description: 'Professional consulting services for company registration, compliance, and growth in China.',
      siteName: 'GoChinaAdvisors',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'GoChinaAdvisors - Your Trusted Partner for Market Entry',
      description: 'Professional consulting services for company registration, compliance, and growth in China.',
    },
    other: {
      'font-display': 'swap',
      'script-organization': {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(organizationSchema),
      },
      'script-website': {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(websiteSchema),
      },
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="16x16" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" type="image/x-icon" />
        <link rel="icon" href="/images/logo/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/logo/favicon.svg" sizes="180x180" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MLXZT29K');`
        }} />
        {/* End Google Tag Manager */}
        
        <meta name="theme-color" content="#0B1120" />
        <meta name="color-scheme" content="dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className={`${montserrat.variable} ${lexend.variable} font-body antialiased bg-background-primary text-text-main`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-MLXZT29K"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent-cyan text-background-primary px-4 py-2 rounded-lg z-50">
          Skip to main content
        </a>
        <ErrorBoundary>
          <Navbar />
          <main id="main-content" className="min-h-screen" role="main">
            {children}
          </main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}
