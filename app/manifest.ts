import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Samshodan - Retail Domain, Developer Experience & IT Consulting',
    short_name: 'Samshodan',
    description: 'Leading provider of AI-powered solutions, developer tools, and IT consulting services specializing in retail domain.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2563eb',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}