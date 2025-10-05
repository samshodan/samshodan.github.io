import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Cloud, Server, Shield, Zap, Database, Globe, CheckCircle, ArrowRight, TrendingUp, Lock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cloud Engineering Services - AWS, Azure & Multi-Cloud Solutions | Specly',
  description: 'Leverage cloud technologies to build scalable, resilient, and cost-effective solutions with expert cloud architecture and migration services.',
  keywords: 'cloud engineering, AWS, Azure, cloud migration, cloud architecture, serverless, containerization, DevOps',
  openGraph: {
    title: 'Cloud Engineering Services - AWS, Azure & Multi-Cloud Solutions | Specly',
    description: 'Leverage cloud technologies to build scalable, resilient, and cost-effective solutions.',
    type: 'website',
  },
  alternates: {
    canonical: '/services/cloud-engineering',
  },
}

export default function CloudEngineeringPage() {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Architecture Design',
      description: 'Design scalable, secure, and cost-optimized cloud architectures tailored to your business needs.'
    },
    {
      icon: Globe,
      title: 'Multi-Cloud & Hybrid Solutions',
      description: 'Implement multi-cloud strategies and hybrid solutions for maximum flexibility and vendor independence.'
    },
    {
      icon: Server,
      title: 'Containerization & Orchestration',
      description: 'Modernize applications with Docker containers and Kubernetes orchestration for better scalability.'
    },
    {
      icon: Zap,
      title: 'Serverless Computing',
      description: 'Build event-driven, serverless applications that scale automatically and reduce operational overhead.'
    },
    {
      icon: TrendingUp,
      title: 'Cloud Migration & Optimization',
      description: 'Seamlessly migrate existing applications to the cloud with performance and cost optimization.'
    },
    {
      icon: Database,
      title: 'Infrastructure as Code',
      description: 'Automate infrastructure provisioning and management using Infrastructure as Code practices.'
    }
  ]

  const cloudProcess = [
    {
      step: '01',
      title: 'Assessment & Strategy',
      description: 'Evaluate current infrastructure and define cloud adoption strategy aligned with business goals.'
    },
    {
      step: '02',
      title: 'Architecture & Planning',
      description: 'Design cloud architecture and create detailed migration or implementation roadmap.'
    },
    {
      step: '03',
      title: 'Implementation & Migration',
      description: 'Execute cloud deployment or migration with minimal downtime and risk mitigation.'
    },
    {
      step: '04',
      title: 'Optimization & Monitoring',
      description: 'Continuously optimize performance, costs, and security with comprehensive monitoring.'
    }
  ]

  const benefits = [
    'Reduced infrastructure costs by up to 40%',
    'Improved scalability and elasticity',
    'Enhanced security and compliance',
    'Faster deployment and time-to-market',
    'Better disaster recovery and backup',
    'Increased operational efficiency',
    'Global reach and availability',
    'Automatic scaling and load balancing'
  ]

  const technologies = [
    { name: 'AWS', category: 'Cloud Provider' },
    { name: 'Microsoft Azure', category: 'Cloud Provider' },
    { name: 'Google Cloud', category: 'Cloud Provider' },
    { name: 'Kubernetes', category: 'Orchestration' },
    { name: 'Docker', category: 'Containerization' },
    { name: 'Terraform', category: 'IaC' },
    { name: 'Ansible', category: 'Automation' },
    { name: 'Prometheus', category: 'Monitoring' }
  ]

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-br from-cyan-50 to-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Cloud Engineering
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Leverage cloud technologies to build scalable, resilient, and cost-effective solutions 
                with expert cloud architecture, migration, and optimization services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Start Cloud Journey
                </Link>
                <a href="#services" className="btn-secondary">
                  Explore Services
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">40%</div>
                  <div className="text-cyan-100">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">99.99%</div>
                  <div className="text-cyan-100">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">10x</div>
                  <div className="text-cyan-100">Faster Scaling</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">200+</div>
                  <div className="text-cyan-100">Cloud Migrations</div>
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
              Cloud Engineering Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud solutions that transform your infrastructure and accelerate digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-cyan-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Cloud Engineering Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to cloud adoption that ensures successful transformation with minimal risk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudProcess.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-cyan-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
              Cloud Technologies & Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with leading cloud providers and cutting-edge technologies to deliver optimal solutions.
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
                Transform with Cloud Excellence
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our cloud engineering expertise helps organizations harness the full power of cloud computing 
                to drive innovation, reduce costs, and accelerate business growth.
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
            
            <div className="bg-cyan-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to Embrace the Cloud?</h3>
              <p className="text-cyan-100 mb-6">
                Accelerate your digital transformation with our comprehensive cloud engineering services. 
                From strategy to implementation, we&apos;ll guide you every step of the way.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Cloud className="mr-3" size={20} />
                  <span>Multi-cloud expertise</span>
                </div>
                <div className="flex items-center">
                  <Lock className="mr-3" size={20} />
                  <span>Security-first approach</span>
                </div>
                <div className="flex items-center">
                  <Zap className="mr-3" size={20} />
                  <span>Performance optimization</span>
                </div>
              </div>
              <Link href="/contact" className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center">
                Start Migration <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}