import type { Metadata } from 'next'
import './globals.css'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Samshodan - Next-Generation Solutions for Modern Business',
  description: 'We empower businesses across industries with intelligent AI solutions, enhance developer productivity with cutting-edge tools, and deliver transformative IT consulting. Featuring Ultron AI chatbot and Specly API portal.',
  keywords: 'AI chatbot, developer experience, IT consulting, retail solutions, API portal, RAG agents, application development',
  authors: [{ name: 'Samshodan' }],
  openGraph: {
    title: 'Samshodan - Next-Generation Solutions for Modern Business',
    description: 'We empower businesses across industries with intelligent AI solutions, enhance developer productivity with cutting-edge tools, and deliver transformative IT consulting.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samshodan - Next-Generation Solutions for Modern Business',
    description: 'We empower businesses across industries with intelligent AI solutions, enhance developer productivity with cutting-edge tools, and deliver transformative IT consulting.',
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