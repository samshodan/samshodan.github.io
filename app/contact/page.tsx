import type { Metadata } from 'next'
import Header from '@/components/Header'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact Samshodan - Get Started with AI Solutions & IT Consulting',
  description: 'Contact Samshodan for AI chatbot solutions, API portal development, and IT consulting services. Schedule a consultation to transform your retail business.',
  keywords: 'contact Samshodan, AI solutions consultation, IT consulting contact, retail technology consultation, schedule consultation, get quote',
  openGraph: {
    title: 'Contact Samshodan - Get Started with AI Solutions & IT Consulting',
    description: 'Contact Samshodan for AI chatbot solutions, API portal development, and IT consulting services.',
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