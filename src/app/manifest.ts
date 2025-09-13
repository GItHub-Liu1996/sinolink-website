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
        src: '/favicon.ico',
        sizes: '16x16 32x32 48x48',
        type: 'image/x-icon',
      },
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/favicon.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
  }
}