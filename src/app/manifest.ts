import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'China Business Solutions - Your Trusted Partner for Market Entry',
    short_name: 'ChinaBiz Solutions',
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
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
