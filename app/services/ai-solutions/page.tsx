import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Brain, Bot, Eye, MessageSquare, BarChart3, Zap, CheckCircle, ArrowRight, TrendingUp, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Solutions - Custom AI Development & Machine Learning | Specly',
  description: 'Integrate artificial intelligence and machine learning to automate processes, enhance decision-making, and drive innovation with custom AI solutions.',
  keywords: 'AI solutions, machine learning, artificial intelligence, custom AI models, RAG systems, chatbots, computer vision, NLP',
  openGraph: {
    title: 'AI Solutions - Custom AI Development & Machine Learning | Specly',
    description: 'Integrate artificial intelligence and machine learning to automate processes and enhance decision-making.',
    type: 'website',
  },
  alternates: {
    canonical: '/services/ai-solutions',
  },
}

export default function AISolutionsPage() {
  const services = [
    {
      icon: Brain,
      title: 'Custom AI Model Development',
      description: 'Develop tailored AI models and machine learning solutions designed specifically for your business needs and data.'
    },
    {
      icon: MessageSquare,
      title: 'RAG (Retrieval Augmented Generation) Systems',
      description: 'Build intelligent knowledge systems that combine your data with large language models for accurate, contextual responses.'
    },
    {
      icon: Zap,
      title: 'Intelligent Automation',
      description: 'Automate complex business processes using AI to improve efficiency, reduce errors, and free up human resources.'
    },
    {
      icon: Eye,
      title: 'Computer Vision & NLP',
      description: 'Implement computer vision for image analysis and natural language processing for text understanding and generation.'
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Leverage machine learning for predictive analytics, forecasting, and data-driven business insights.'
    },
    {
      icon: Bot,
      title: 'AI-Powered Chatbots & Assistants',
      description: 'Create intelligent conversational AI systems that provide 24/7 customer support and assistance.'
    }
  ]

  const aiProcess = [
    {
      step: '01',
      title: 'AI Strategy & Assessment',
      description: 'Identify AI opportunities, assess data readiness, and define AI strategy aligned with business objectives.'
    },
    {
      step: '02',
      title: 'Data Preparation & Modeling',
      description: 'Prepare and clean data, develop AI models, and train algorithms for optimal performance.'
    },
    {
      step: '03',
      title: 'Integration & Deployment',
      description: 'Integrate AI solutions into existing systems and deploy models with proper monitoring and governance.'
    },
    {
      step: '04',
      title: 'Optimization & Scaling',
      description: 'Continuously optimize model performance, retrain with new data, and scale AI capabilities.'
    }
  ]

  const benefits = [
    'Increased operational efficiency by up to 60%',
    'Reduced manual processing time and errors',
    'Enhanced customer experience and satisfaction',
    'Data-driven insights for better decision making',
    'Automated workflows and intelligent processes',
    'Improved accuracy in predictions and analysis',
    'Scalable AI solutions that grow with your business',
    'Competitive advantage through AI innovation'
  ]

  const technologies = [
    { name: 'OpenAI GPT', category: 'LLM' },
    { name: 'TensorFlow', category: 'ML Framework' },
    { name: 'PyTorch', category: 'ML Framework' },
    { name: 'Langchain', category: 'AI Framework' },
    { name: 'Hugging Face', category: 'Model Hub' },
    { name: 'Pinecone', category: 'Vector DB' },
    { name: 'AWS SageMaker', category: 'ML Platform' },
    { name: 'Azure AI', category: 'AI Services' }
  ]

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-br from-indigo-50 to-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                AI Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Integrate artificial intelligence and machine learning to automate processes, 
                enhance decision-making, and drive innovation with custom AI solutions tailored to your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Start AI Journey
                </Link>
                <a href="#services" className="btn-secondary">
                  Explore AI Services
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">60%</div>
                  <div className="text-indigo-100">Efficiency Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">10+</div>
                  <div className="text-indigo-100">AI Models Deployed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">95%</div>
                  <div className="text-indigo-100">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-indigo-100">AI Operations</div>
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
              AI Solutions & Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI services that transform your business operations and unlock the power of artificial intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-indigo-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our AI Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to AI implementation that ensures successful deployment and measurable business impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiProcess.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-indigo-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
              AI Technologies & Frameworks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge AI technologies and frameworks to build intelligent, scalable solutions.
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
                Transform with Intelligent AI
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our AI solutions help businesses harness the power of artificial intelligence to automate processes, 
                gain insights, and create competitive advantages in today&apos;s data-driven world.
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
            
            <div className="bg-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Embrace AI Innovation?</h3>
              <p className="text-indigo-100 mb-6">
                Unlock the potential of artificial intelligence for your business. From custom AI models to 
                intelligent automation, we&apos;ll help you leverage AI to drive growth and innovation.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Brain className="mr-3" size={20} />
                  <span>Custom AI model development</span>
                </div>
                <div className="flex items-center">
                  <Lightbulb className="mr-3" size={20} />
                  <span>Innovative AI solutions</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="mr-3" size={20} />
                  <span>Measurable business impact</span>
                </div>
              </div>
              <Link href="/contact" className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center">
                Start AI Project <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}