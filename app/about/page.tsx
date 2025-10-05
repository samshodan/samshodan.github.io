import type { Metadata } from 'next'
import Header from '@/components/Header'
import About from '@/components/About'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Samshodan - Retail Domain Experts & Technology Leaders',
  description: 'Learn about Samshodan\'s mission, vision, and values. We specialize in retail domain solutions, developer experience, and IT consulting with 10+ years of experience.',
  keywords: 'about Samshodan, retail domain experts, technology company, IT consulting company, developer experience, company mission, company values',
  openGraph: {
    title: 'About Samshodan - Retail Domain Experts & Technology Leaders',
    description: 'Learn about Samshodan\'s mission, vision, and values in retail domain solutions and IT consulting.',
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