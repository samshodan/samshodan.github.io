import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Bot, Zap, Shield, Cloud, Settings, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ultron AI Chatbot - RAG Agents with Configurable LLM Backends | Samshodan',
  description: 'Ultron is an intelligent AI chatbot platform powered by RAG agents with configurable backend LLM models including AWS Bedrock, OpenAI, and ChatGPT. Perfect for retail businesses.',
  keywords: 'Ultron AI chatbot, RAG agents, retrieval augmented generation, AWS Bedrock, OpenAI, ChatGPT, LLM backends, conversational AI, retail chatbot',
  openGraph: {
    title: 'Ultron AI Chatbot - RAG Agents with Configurable LLM Backends',
    description: 'Intelligent conversational AI powered by RAG agents with configurable backend LLM models.',
    type: 'website',
  },
  alternates: {
    canonical: '/products/ultron',
  },
}

export default function UltronPage() {
  const features = [
    {
      icon: Bot,
      title: 'RAG-Powered Intelligence',
      description: 'Advanced Retrieval-Augmented Generation agents that provide accurate, contextual responses based on your business data.'
    },
    {
      icon: Cloud,
      title: 'Multi-LLM Backend Support',
      description: 'Seamlessly switch between AWS Bedrock, OpenAI, ChatGPT, and other leading LLM providers based on your needs.'
    },
    {
      icon: Settings,
      title: 'Configurable Workflows',
      description: 'Customize conversation flows, response patterns, and integration points to match your business processes.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built with enterprise-grade security features including data encryption, access controls, and compliance standards.'
    },
    {
      icon: Zap,
      title: 'Real-time Analytics',
      description: 'Comprehensive analytics dashboard to track performance, user interactions, and business insights.'
    }
  ]

  const benefits = [
    '24/7 customer support automation',
    'Reduced response times by up to 90%',
    'Seamless integration with existing systems',
    'Multi-language support',
    'Scalable architecture for growing businesses',
    'Cost-effective customer service solution'
  ]

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bot className="text-blue-600" size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Ultron AI Chatbot
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Intelligent conversational AI powered by RAG agents with configurable backend LLM models 
              including AWS Bedrock, OpenAI, and ChatGPT. Transform your customer interactions with 
              enterprise-grade AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Schedule Demo
              </Link>
              <a href="#features" className="btn-secondary">
                Learn More
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
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ultron combines cutting-edge AI technology with practical business applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-blue-600" size={24} />
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
                Why Choose Ultron?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ultron isn&apos;t just another chatbot. It&apos;s a comprehensive AI solution designed 
                specifically for retail businesses that need intelligent, scalable customer interactions.
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
            
            <div className="bg-blue-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-blue-100 mb-6">
                Transform your customer service with Ultron&apos;s intelligent AI chatbot. 
                Schedule a personalized demo to see how it can work for your business.
              </p>
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-block">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}