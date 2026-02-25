import type { Metadata } from 'next'
import './globals.css'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Samshodan - AI Products & IT Consulting Services',
  description: 'Innovative AI-powered products and expert IT consulting services. We deliver cutting-edge technology solutions including cloud services, AI integration, and custom software development.',
  keywords: 'AI products, IT consulting, software development, cloud solutions, AI integration, enterprise development, custom software, technology consulting',
  authors: [{ name: 'Samshodan' }],
  openGraph: {
    title: 'Samshodan - AI Products & Developer Tools',
    description: 'We create innovative AI-powered products and developer tools that enhance productivity and drive innovation.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samshodan - AI Products & Developer Tools',
    description: 'We create innovative AI-powered products and developer tools that enhance productivity and drive innovation.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}