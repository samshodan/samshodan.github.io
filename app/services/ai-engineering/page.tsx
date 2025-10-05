import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Brain, Bot, Eye, MessageSquare, Cpu, Database, CheckCircle, ArrowRight, Zap, Shield, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Engineering Services - Custom AI Solutions & Machine Learning | Samshodan',
  description: 'Expert AI engineering services including custom AI model development, RAG systems, chatbots, computer vision, and NLP solutions. Transform your business with artificial intelligence.',
  keywords: 'AI engineering, artificial intelligence, machine learning, custom AI models, RAG systems, chatbot development, computer vision, natural language processing, AI automation',
  openGraph: {
    title: 'AI Engineering Services - Custom AI Solutions & Machine Learning | Samshodan',
    description: 'Build intelligent applications with our AI engineering expertise. Custom AI models, chatbots, and automation solutions.',
    type: 'website',
  },
  alternates: {
    canonical: '/services/ai-engineering',
  },
}

export default function AIEngineeringPage() {
  const services = [
    {
      icon: Brain,
      title: 'Custom AI Model Development',
      description: 'Build tailored AI models for your specific use cases using state-of-the-art machine learning techniques and frameworks.'
    },
    {
      icon: MessageSquare,
      title: 'RAG Systems',
      description: 'Implement Retrieval Augmented Generation systems that combine AI with your proprietary data for accurate, contextual responses.'
    },
    {
      icon: Bot,
      title: 'Chatbot & Virtual Assistants',
      description: 'Develop intelligent conversational AI that understands context, maintains conversations, and provides valuable assistance.'
    },
    {
      icon: Eye,
      title: 'Computer Vision Solutions',
      description: 'Create AI systems that can analyze, understand, and process visual information for automation and insights.'
    },
    {
      icon: Cpu,
      title: 'Natural Language Processing',
      description: 'Build NLP solutions for text analysis, sentiment analysis, document processing, and language understanding.'
    },
    {
      icon: Zap,
      title: 'AI-Powered Automation',
      description: 'Automate complex business processes using AI to improve efficiency and reduce manual work.'
    }
  ]

  const aiCapabilities = [
    {
      category: 'Machine Learning',
      technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'XGBoost']
    },
    {
      category: 'Large Language Models',
      technologies: ['OpenAI GPT', 'Claude', 'Llama', 'Gemini', 'Custom Fine-tuning']
    },
    {
      category: 'Computer Vision',
      technologies: ['OpenCV', 'YOLO', 'ResNet', 'CNN', 'Object Detection']
    },
    {
      category: 'NLP & Text Processing',
      technologies: ['spaCy', 'NLTK', 'Transformers', 'BERT', 'Sentiment Analysis']
    },
    {
      category: 'AI Infrastructure',
      technologies: ['MLflow', 'Kubeflow', 'Docker', 'Kubernetes', 'AWS SageMaker']
    },
    {
      category: 'Vector Databases',
      technologies: ['Pinecone', 'Weaviate', 'Chroma', 'Qdrant', 'FAISS']
    }
  ]

  const useCases = [
    {
      industry: 'E-commerce',
      applications: ['Product recommendations', 'Price optimization', 'Inventory forecasting', 'Customer service automation']
    },
    {
      industry: 'Healthcare',
      applications: ['Medical image analysis', 'Drug discovery', 'Patient monitoring', 'Clinical decision support']
    },
    {
      industry: 'Finance',
      applications: ['Fraud detection', 'Risk assessment', 'Algorithmic trading', 'Credit scoring']
    },
    {
      industry: 'Manufacturing',
      applications: ['Quality control', 'Predictive maintenance', 'Supply chain optimization', 'Process automation']
    }
  ]

  const benefits = [
    'Increased operational efficiency by up to 60%',
    'Reduced manual processing time',
    'Improved decision-making with data insights',
    'Enhanced customer experience and satisfaction',
    'Automated complex business processes',
    'Scalable AI solutions that grow with your business',
    'Real-time intelligent responses and actions',
    'Competitive advantage through AI innovation'
  ]

  const process = [
    {
      step: '01',
      title: 'AI Strategy & Assessment',
      description: 'Analyze your business needs and identify AI opportunities with the highest impact and ROI.'
    },
    {
      step: '02',
      title: 'Data Preparation & Analysis',
      description: 'Prepare, clean, and analyze your data to ensure optimal AI model performance and accuracy.'
    },
    {
      step: '03',
      title: 'Model Development & Training',
      description: 'Build, train, and fine-tune AI models using the most appropriate algorithms and techniques.'
    },
    {
      step: '04',
      title: 'Integration & Deployment',
      description: 'Seamlessly integrate AI solutions into your existing systems with monitoring and optimization.'
    }
  ]

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-br from-purple-50 to-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Engineering Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Transform your business with custom AI solutions. From intelligent chatbots to 
                advanced machine learning models, we build AI systems that drive real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Start AI Project
                </Link>
                <a href="#services" className="btn-secondary">
                  Explore AI Solutions
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">25+</div>
                  <div className="text-purple-100">AI Models Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">60%</div>
                  <div className="text-purple-100">Efficiency Gain</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <div className="text-purple-100">Model Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-purple-100">AI Operations</div>
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
              AI Engineering Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI services to integrate artificial intelligence into your business processes and applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-purple-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technologies */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Technologies & Frameworks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge AI technologies and frameworks to build robust, scalable AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{capability.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {capability.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Use Cases by Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI can transform different industries with tailored solutions and applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{useCase.industry}</h3>
                <ul className="space-y-2">
                  {useCase.applications.map((app, appIndex) => (
                    <li key={appIndex} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-3 flex-shrink-0" size={16} />
                      <span className="text-gray-600">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to AI development that ensures successful implementation and measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transform Your Business with AI
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                AI engineering delivers measurable business value through intelligent automation, 
                enhanced decision-making, and improved customer experiences.
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
            
            <div className="bg-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Implement AI?</h3>
              <p className="text-purple-100 mb-6">
                Start your AI transformation journey with a strategic consultation and custom AI roadmap 
                tailored to your business objectives.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Brain className="mr-3" size={20} />
                  <span>Custom AI strategy development</span>
                </div>
                <div className="flex items-center">
                  <Shield className="mr-3" size={20} />
                  <span>Enterprise-grade AI security</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-3" size={20} />
                  <span>Expert AI engineering team</span>
                </div>
              </div>
              <Link href="/contact" className="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center">
                Start AI Consultation <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}