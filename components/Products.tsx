import { Bot, BookOpen, Zap, Shield, Cloud, Users } from 'lucide-react'
import Link from 'next/link'

export default function Products() {
  const products = [
    {
      name: 'Ultron',
      subtitle: 'AI Chatbot Platform',
      description: 'Intelligent conversational AI powered by RAG agents with configurable backend LLM models including AWS Bedrock, OpenAI, and ChatGPT.',
      features: [
        'RAG (Retrieval-Augmented Generation) agents',
        'Multi-LLM backend support (Bedrock, ChatGPT, Gemini)',
        'Configurable conversation flows',
        'Real-time analytics and insights',
        'Seamless retail system integration'
      ],
      icon: Bot,
      color: 'bg-blue-500'
    },
    {
      name: 'Specly',
      subtitle: 'API Specification Portal',
      description: 'Comprehensive developer portal for cataloging APIs, managing teams, and organizing development resources in structured folders.',
      features: [
        'API specification management',
        'Team collaboration tools',
        'Organized folder structures',
        'Interactive API documentation',
        'Version control and change tracking'
      ],
      icon: BookOpen,
      color: 'bg-green-500'
    }
  ]

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Innovative solutions designed to accelerate digital transformation across industries 
            and enhance developer productivity. Built with deep expertise in retail and other key domains.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className={`${product.color} w-12 h-12 rounded-lg flex items-center justify-center mr-4`}>
                  <product.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                  <p className="text-primary-600 font-medium">{product.subtitle}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Key Features:</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Zap className="text-primary-600 mr-2 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 flex gap-4">
                <a href={`/products/${product.name.toLowerCase()}`} className="btn-primary">
                  Learn More
                </a>
                <Link href="/contact" className="btn-secondary">
                  Get Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}