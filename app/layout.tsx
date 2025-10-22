import type { Metadata } from 'next'
import './globals.css'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Samshodan - AI Products & Developer Tools',
  description: 'We create innovative AI-powered products and developer tools that enhance productivity and drive innovation. Featuring Ultron AI chatbot and Specly API portal.',
  keywords: 'AI chatbot, developer experience, IT consulting, retail solutions, API portal, RAG agents, application development',
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