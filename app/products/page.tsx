import type { Metadata } from 'next'
import Header from '@/components/Header'
import Products from '@/components/Products'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Services - AI Products & IT Consulting | Samshodan',
  description: 'Discover our innovative AI-powered products and expert IT consulting services including cloud solutions, AI integration, and custom software development.',
  keywords: 'AI products, IT consulting, software development, cloud solutions, AI integration, enterprise development, custom software',
  openGraph: {
    title: 'Services - AI Products & IT Consulting | Samshodan',
    description: 'Innovative AI-powered products and expert IT consulting services to accelerate your digital transformation.',
    type: 'website',
  },
  alternates: {
    canonical: '/products',
  },
}

export default function ProductsPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <Products />
      </div>
      <Footer />
    </main>
  )
}