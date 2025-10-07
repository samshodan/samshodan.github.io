import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { ShoppingCart, CreditCard, BarChart3, Smartphone, Globe, Shield, CheckCircle, ArrowRight, TrendingUp, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Digital Commerce Solutions - E-commerce Development & Optimization | Specly',
  description: 'Create powerful e-commerce platforms and digital marketplace solutions that drive business growth with modern commerce technologies.',
  keywords: 'digital commerce, e-commerce development, online marketplace, payment integration, commerce optimization, digital retail',
  openGraph: {
    title: 'Digital Commerce Solutions - E-commerce Development & Optimization | Specly',
    description: 'Create powerful e-commerce platforms and digital marketplace solutions that drive business growth.',
    type: 'website',
  },
  alternates: {
    canonical: '/services/digital-commerce',
  },
}

export default function DigitalCommercePage() {
  const services = [
    {
      icon: ShoppingCart,
      title: 'E-commerce Platform Development',
      description: 'Custom e-commerce solutions built for scalability, performance, and exceptional user experiences.'
    },
    {
      icon: CreditCard,
      title: 'Payment Gateway Integration',
      description: 'Secure, seamless payment processing with support for multiple payment methods and currencies.'
    },
    {
      icon: BarChart3,
      title: 'Inventory Management Systems',
      description: 'Advanced inventory tracking, automated reordering, and real-time stock management solutions.'
    },
    {
      icon: Users,
      title: 'Customer Experience Optimization',
      description: 'Personalized shopping experiences, recommendation engines, and conversion rate optimization.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Commerce Solutions',
      description: 'Native mobile apps and progressive web apps optimized for mobile shopping experiences.'
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics dashboards and business intelligence for data-driven commerce decisions.'
    }
  ]

  const commerceProcess = [
    {
      step: '01',
      title: 'Commerce Strategy',
      description: 'Define commerce goals, target audience, and create a comprehensive digital commerce roadmap.'
    },
    {
      step: '02',
      title: 'Platform Development',
      description: 'Build scalable e-commerce platforms with modern technologies and best practices.'
    },
    {
      step: '03',
      title: 'Integration & Testing',
      description: 'Integrate payment systems, third-party services, and conduct thorough testing for reliability.'
    },
    {
      step: '04',
      title: 'Launch & Optimization',
      description: 'Deploy your commerce platform and continuously optimize based on user behavior and analytics.'
    }
  ]

  const benefits = [
    'Increased online sales and revenue growth',
    'Improved customer retention and loyalty',
    'Reduced cart abandonment rates',
    'Enhanced mobile shopping experiences',
    'Streamlined inventory and order management',
    'Better customer insights and analytics',
    'Scalable architecture for business growth',
    'Secure and compliant payment processing'
  ]

  const technologies = [
    { name: 'Shopify Plus', category: 'Platform' },
    { name: 'WooCommerce', category: 'Platform' },
    { name: 'Magento', category: 'Platform' },
    { name: 'Stripe', category: 'Payments' },
    { name: 'PayPal', category: 'Payments' },
    { name: 'Klaviyo', category: 'Marketing' },
    { name: 'Algolia', category: 'Search' },
    { name: 'Contentful', category: 'CMS' }
  ]

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-br from-green-50 to-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Digital Commerce
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Create powerful e-commerce platforms and digital marketplace solutions that drive business growth 
                with modern commerce technologies and exceptional user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Start Selling Online
                </Link>
                <a href="#services" className="btn-secondary">
                  Explore Solutions
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">300%</div>
                  <div className="text-green-100">Sales Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">20+</div>
                  <div className="text-green-100">Commerce Platforms</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">25%</div>
                  <div className="text-green-100">Cart Recovery</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="text-green-100">Platform Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Digital Commerce Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive commerce solutions that transform your business into a thriving digital marketplace.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commerce Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Commerce Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for building successful e-commerce platforms that convert visitors into customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commerceProcess.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Commerce Technologies & Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with leading e-commerce platforms and technologies to build scalable commerce solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300">
                <div className="font-semibold text-gray-900">{tech.name}</div>
                <div className="text-sm text-gray-500">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Drive Commerce Success
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our digital commerce solutions help businesses of all sizes create exceptional online shopping 
                experiences that convert visitors into loyal customers and drive sustainable growth.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-green-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Grow Your Online Business?</h3>
              <p className="text-green-100 mb-6">
                Transform your business with a powerful e-commerce platform that scales with your growth. 
                Let&apos;s build a commerce solution that drives results and delights customers.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <ShoppingCart className="mr-3" size={20} />
                  <span>Conversion-optimized design</span>
                </div>
                <div className="flex items-center">
                  <Globe className="mr-3" size={20} />
                  <span>Multi-channel commerce</span>
                </div>
                <div className="flex items-center">
                  <Shield className="mr-3" size={20} />
                  <span>Secure payment processing</span>
                </div>
              </div>
              <Link href="/contact" className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center">
                Launch Your Store <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}