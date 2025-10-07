import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Code, Database, Cloud, Shield, Zap, GitBranch, CheckCircle, ArrowRight, TrendingUp, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Digital Engineering Services - Full-Stack Development & Architecture | Specly',
  description: 'Build robust, scalable digital solutions using modern engineering practices, microservices architecture, and cutting-edge technologies.',
  keywords: 'digital engineering, full-stack development, microservices, API development, DevOps, software architecture',
  openGraph: {
    title: 'Digital Engineering Services - Full-Stack Development & Architecture | Specly',
    description: 'Build robust, scalable digital solutions using modern engineering practices and technologies.',
    type: 'website',
  },
  alternates: {
    canonical: '/services/digital-engineering',
  },
}

export default function DigitalEngineeringPage() {
  const services = [
    {
      icon: Code,
      title: 'Full-Stack Application Development',
      description: 'End-to-end application development using modern frameworks and best practices for scalable solutions.'
    },
    {
      icon: Database,
      title: 'Microservices Architecture',
      description: 'Design and implement microservices architectures for better scalability, maintainability, and deployment flexibility.'
    },
    {
      icon: Shield,
      title: 'API-First Development',
      description: 'Build robust, secure APIs that enable seamless integration and future-proof your digital ecosystem.'
    },
    {
      icon: GitBranch,
      title: 'DevOps & CI/CD',
      description: 'Implement continuous integration and deployment pipelines for faster, more reliable software delivery.'
    },
    {
      icon: Zap,
      title: 'Quality Assurance & Testing',
      description: 'Comprehensive testing strategies including unit, integration, and end-to-end testing for reliable software.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Engineering',
      description: 'Optimize application performance, scalability, and reliability through advanced engineering practices.'
    }
  ]

  const engineeringProcess = [
    {
      step: '01',
      title: 'Architecture Design',
      description: 'Design scalable, maintainable architecture that aligns with business requirements and technical constraints.'
    },
    {
      step: '02',
      title: 'Development & Testing',
      description: 'Implement features using best practices with comprehensive testing at every level of the application.'
    },
    {
      step: '03',
      title: 'Integration & Deployment',
      description: 'Seamless integration with existing systems and automated deployment pipelines for reliable releases.'
    },
    {
      step: '04',
      title: 'Monitoring & Optimization',
      description: 'Continuous monitoring, performance optimization, and iterative improvements based on real-world usage.'
    }
  ]

  const benefits = [
    'Faster time-to-market with agile development',
    'Scalable architecture that grows with your business',
    'Reduced technical debt through best practices',
    'Improved system reliability and uptime',
    'Enhanced security and compliance',
    'Better developer productivity and collaboration',
    'Cost-effective maintenance and operations',
    'Future-proof technology stack'
  ]

  const technologies = [
    { name: 'React/Next.js', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python/Django', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Kubernetes', category: 'Orchestration' },
    { name: 'AWS/Azure', category: 'Cloud' },
    { name: 'GraphQL', category: 'API' }
  ]

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-br from-blue-50 to-white">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Digital Engineering
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Build robust, scalable digital solutions using modern engineering practices, 
                microservices architecture, and cutting-edge technologies that drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Start Engineering
                </Link>
                <a href="#services" className="btn-secondary">
                  Explore Services
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="text-blue-100">System Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">25+</div>
                  <div className="text-blue-100">Applications Built</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50%</div>
                  <div className="text-blue-100">Faster Deployment</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-blue-100">Support & Monitoring</div>
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
              Digital Engineering Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive engineering services that transform your ideas into scalable, reliable digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Engineering Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to building scalable, maintainable, and high-performance digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {engineeringProcess.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
              Technologies & Frameworks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and proven frameworks to build exceptional digital solutions.
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
                Engineering Excellence That Delivers
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our digital engineering services combine technical expertise with business acumen 
                to deliver solutions that scale, perform, and drive measurable business outcomes.
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
              <h3 className="text-2xl font-bold mb-6">Ready to Build Something Amazing?</h3>
              <p className="text-blue-100 mb-6">
                Transform your ideas into scalable digital solutions with our expert engineering team. 
                Let&apos;s architect and build the future of your business together.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Code className="mr-3" size={20} />
                  <span>Modern development practices</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-3" size={20} />
                  <span>Agile delivery methodology</span>
                </div>
                <div className="flex items-center">
                  <Shield className="mr-3" size={20} />
                  <span>Security-first approach</span>
                </div>
              </div>
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center">
                Start Your Project <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}