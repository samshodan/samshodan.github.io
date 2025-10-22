import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Samshodan - AI Products & Developer Tools',
    short_name: 'Samshodan',
    description: 'Leading creator of AI-powered products and developer tools including Ultron AI chatbot and Specly API portal.',
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