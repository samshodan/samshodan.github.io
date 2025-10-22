import type { Metadata } from 'next'
import Header from '@/components/Header'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact Samshodan - Get Started with AI Products & Developer Tools',
  description: 'Contact Samshodan for AI chatbot solutions and API portal development. Schedule a consultation to explore our innovative products.',
  keywords: 'contact Samshodan, AI products consultation, developer tools contact, AI chatbot consultation, schedule consultation, get quote',
  openGraph: {
    title: 'Contact Samshodan - Get Started with AI Products & Developer Tools',
    description: 'Contact Samshodan for AI chatbot solutions and API portal development.',
    type: 'website',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}