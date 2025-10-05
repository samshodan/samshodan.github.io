import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Services from '@/components/Services'

export const metadata: Metadata = {
  title: 'Solutions - Digital Transformation & Technology Services | Samshodan',
  description: 'Comprehensive digital solutions including experience transformation, digital engineering, cloud engineering, AI solutions, and more. Transform your business with our expert services.',
  keywords: 'digital transformation, experience transformation, digital engineering, cloud engineering, AI solutions, digital commerce, application management, technology consulting',
  openGraph: {
    title: 'Solutions - Digital Transformation & Technology Services | Samshodan',
    description: 'Expert digital solutions to accelerate your business transformation journey.',
    type: 'website',
  },
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <Services />
      </div>
      <Footer />
    </main>
  )
}