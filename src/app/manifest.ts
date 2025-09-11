import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GoChinaAdvisors - Your Trusted Partner for Market Entry',
    short_name: 'GoChinaAdvisors',
    description: 'Professional consulting services for company registration, compliance, and growth in China. Expert guidance for WFOE, Joint Ventures, and business operations.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B1120',
    theme_color: '#22d3ee',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en',
    categories: ['business', 'consulting', 'china'],
    icons: [
      {
        src: '/images/logo/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}