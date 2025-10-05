import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { RefreshCw, Cloud, Database, Shield, Zap, Code, CheckCircle, ArrowRight, TrendingUp, Clock, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Application Modernization Services - Legacy System Transformation | Samshodan',
  description: 'Transform legacy applications into modern, cloud-native solutions. Expert application modernization services including cloud migration, microservices architecture, and performance optimization.',
  keywords: 'application modernization, legacy system modernization, cloud migration, microservices, system transformation, legacy application upgrade, digital transformation',
  openGraph: {
    title: 'Application Modernization Services - Legacy System Transformation | Samshodan',
    description: 'Modernize your legacy applications with cloud-native architecture, improved performance, and enhanced security.',
    type: 'website',
  },
  alternates: {
    canonical: '/services/application-modernization',
  },
}

export default function ApplicationModernizationPage() {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate legacy applications to cloud platforms with minimal downtime and maximum efficiency.'
    },
    {
      icon: Code,
      title: 'Microservices Architecture',
      description: 'Break down monolithic applications into scalable microservices for better maintainability and performance.'
    },
    {
      icon: Database,
      title: 'Database Modernization',
      description: 'Upgrade legacy databases to modern solutions with improved performance, security, and scalability.'
    },
    {
      icon: Shield,
      title: 'Security Enhancement',
      description: 'Implement modern security practices and compliance standards to protect your modernized applications.'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize application performance with modern caching, CDNs, and efficient code architecture.'
    },
    {
      icon: RefreshCw,
      title: 'Legacy System Assessment',
      description: 'Comprehensive analysis of existing systems to create the optimal modernization strategy.'
    }
  ]

  const modernizationApproaches = [
    {
      title: 'Rehosting (Lift & Shift)',
      description: 'Move applications to cloud with minimal changes for quick migration.',
      icon: '🚀'
    },
    {
      title: 'Replatforming',
      description: 'Make targeted optimizations to leverage cloud capabilities.',
      icon: '⚡'
    },
    {
      title: 'Refactoring',
      description: 'Restructure code to improve performance and maintainability.',
      icon: '🔧'
    },
    {
      title: 'Rearchitecting',
      description: 'Redesign applications using cloud-native architecture patterns.',
      icon: '🏗️'
    },
    {
      title: 'Rebuilding',
      description: 'Completely rewrite applications using modern technologies.',
      icon: '🆕'
    },
    {
      title: 'Replacing',
      description: 'Replace legacy systems with modern SaaS or commercial solutions.',
      icon: '🔄'
    }
  ]

  const benefits = [
    'Reduced operational costs by up to 40%',
    'Improved application performance and reliability',
    'Enhanced security and compliance',
    'Better scalability and flexibility',
    'Faster deployment and time-to-market',
    'Improved developer productivity',
    'Modern user experience',
    'Future-proof technology stack'
  ]

  const challenges = [
    {
      challenge: 'Technical Debt',
      solution: 'Systematic code refactoring and architecture improvements'
    },
    {
      challenge: 'Data Migration',
      solution: 'Comprehensive data mapping and migration strategies'
    },
    {
      challenge: 'Downtime Concerns',
      solution: 'Zero-downtime migration techniques and rollback plans'
    },
    {
      challenge: 'Integration Issues',
      solution: 'API-first approach and modern integration patterns'
    }
  ]

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-br from-orange-50 to-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Application Modernization Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your legacy applications into modern, cloud-native solutions. 
                Reduce costs, improve performance, and future-proof your technology stack.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Start Modernization
                </Link>
                <a href="#assessment" className="btn-secondary">
                  Get Assessment
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">40%</div>
                  <div className="text-orange-100">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">3x</div>
                  <div className="text-orange-100">Faster Deployment</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="text-orange-100">Uptime Achieved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">100+</div>
                  <div className="text-orange-100">Apps Modernized</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modernization Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive modernization solutions to transform your legacy systems into efficient, scalable applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-orange-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modernization Approaches */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modernization Approaches
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We choose the right modernization strategy based on your specific requirements, timeline, and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modernizationApproaches.map((approach, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{approach.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{approach.title}</h3>
                <p className="text-gray-600">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Challenges We Solve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We address the most common modernization challenges with proven solutions and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <div className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium mr-4">
                    Challenge
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.challenge}</h3>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium mr-4">
                    Solution
                  </div>
                  <p className="text-gray-600">{item.solution}</p>
                </div>
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
                Benefits of Modernization
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Modernizing your applications delivers immediate and long-term benefits that transform 
                your business operations and competitive advantage.
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
            
            <div className="bg-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Modernize?</h3>
              <p className="text-orange-100 mb-6">
                Start your modernization journey with a comprehensive assessment of your current systems 
                and a customized transformation roadmap.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <TrendingUp className="mr-3" size={20} />
                  <span>Proven modernization methodology</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-3" size={20} />
                  <span>Minimal business disruption</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-3" size={20} />
                  <span>Expert modernization team</span>
                </div>
              </div>
              <Link href="/contact" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center">
                Get Free Assessment <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}