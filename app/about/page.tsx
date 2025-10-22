import type { Metadata } from 'next'
import Header from '@/components/Header'
import About from '@/components/About'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Samshodan - AI Product Innovators & Developer Tool Creators',
  description: 'Learn about Samshodan\'s mission, vision, and values. We create innovative AI-powered products and developer tools that enhance productivity and drive innovation.',
  keywords: 'about Samshodan, AI products, developer tools, technology company, artificial intelligence, company mission, company values',
  openGraph: {
    title: 'About Samshodan - AI Product Innovators & Developer Tool Creators',
    description: 'Learn about Samshodan\'s mission, vision, and values in AI product development and developer tools.',
    type: 'website',
  },
  alternates: {
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </main>
  )
}