import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { BookOpen, Users, FolderTree, Code, GitBranch, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Specly API Portal - Developer Documentation & Team Collaboration | Samshodan',
  description: 'Specly is a comprehensive API specification portal for cataloging APIs, managing development teams, and organizing resources. Perfect for developer experience enhancement.',
  keywords: 'Specly API portal, API documentation, developer portal, API specification, team collaboration, API management, developer experience, API catalog',
  openGraph: {
    title: 'Specly API Portal - Developer Documentation & Team Collaboration',
    description: 'Comprehensive API specification portal for cataloging APIs, managing teams, and organizing development resources.',
    type: 'website',
  },
  alternates: {
    canonical: '/products/specly',
  },
}

export default function SpeclyPage() {
  const features = [
    {
      icon: BookOpen,
      title: 'Interactive API Documentation',
      description: 'Create beautiful, interactive API documentation that developers love to use and explore.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Manage development teams, assign roles, and collaborate on API specifications in real-time.'
    },
    {
      icon: FolderTree,
      title: 'Organized Structure',
      description: 'Organize APIs, teams, and resources in structured folders for easy navigation and management.'
    },
    {
      icon: Code,
      title: 'Code Generation',
      description: 'Automatically generate client SDKs and code samples in multiple programming languages.'
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Track API changes, manage versions, and maintain backward compatibility with ease.'
    }
  ]

  const benefits = [
    'Reduce API onboarding time by 70%',
    'Centralized API documentation hub',
    'Automated testing and validation',
    'Real-time collaboration features',
    'Integration with popular dev tools',
    'Comprehensive analytics and insights'
  ]

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-br from-green-50 to-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookOpen className="text-green-600" size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Specly API Portal
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The ultimate developer portal for cataloging APIs, managing teams, and organizing 
              development resources. Enhance your developer experience with comprehensive 
              documentation and collaboration tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Start Free Trial
              </Link>
              <a href="#features" className="btn-secondary">
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything Developers Need
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specly provides all the tools your development team needs to create, manage, and share APIs effectively
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
                Streamline Your Developer Experience
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Specly transforms how your development teams work with APIs. From documentation 
                to collaboration, everything is designed to enhance productivity and reduce friction.
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
              <h3 className="text-2xl font-bold mb-6">Ready to Transform Your API Management?</h3>
              <p className="text-green-100 mb-6">
                Join hundreds of development teams who have streamlined their API workflows 
                with Specly. Start your free trial today.
              </p>
              <Link href="/contact" className="bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-block">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}