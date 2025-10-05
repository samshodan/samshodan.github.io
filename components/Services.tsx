import { Palette, Code, ShoppingCart, Cloud, Settings, Brain, Briefcase, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Services() {
  const services = [
    {
      name: 'Experience Transformation',
      description: 'Transform user experiences with modern design thinking and cutting-edge frontend technologies.',
      features: [
        'User experience (UX) design',
        'User interface (UI) development',
        'Design system creation',
        'Accessibility compliance',
        'Performance optimization',
        'Cross-platform experiences'
      ],
      icon: Palette,
      color: 'bg-purple-500'
    },
    {
      name: 'Digital Engineering',
      description: 'Build robust, scalable digital solutions using modern engineering practices and technologies.',
      features: [
        'Full-stack application development',
        'Microservices architecture',
        'API-first development',
        'DevOps and CI/CD',
        'Quality assurance and testing',
        'Performance engineering'
      ],
      icon: Code,
      color: 'bg-blue-500'
    },
    {
      name: 'Digital Commerce',
      description: 'Create powerful e-commerce platforms and digital marketplace solutions that drive business growth.',
      features: [
        'E-commerce platform development',
        'Payment gateway integration',
        'Inventory management systems',
        'Customer experience optimization',
        'Mobile commerce solutions',
        'Analytics and reporting'
      ],
      icon: ShoppingCart,
      color: 'bg-green-500'
    },
    {
      name: 'Cloud Engineering',
      description: 'Leverage cloud technologies to build scalable, resilient, and cost-effective solutions.',
      features: [
        'Cloud architecture design',
        'Multi-cloud and hybrid solutions',
        'Containerization and orchestration',
        'Serverless computing',
        'Cloud migration and optimization',
        'Infrastructure as Code'
      ],
      icon: Cloud,
      color: 'bg-cyan-500'
    },
    {
      name: 'Application Management Services',
      description: 'Comprehensive application lifecycle management and support services for optimal performance.',
      features: [
        '24/7 application monitoring',
        'Performance optimization',
        'Security management',
        'Maintenance and updates',
        'Incident response and support',
        'Capacity planning and scaling'
      ],
      icon: Settings,
      color: 'bg-orange-500'
    },
    {
      name: 'AI Solutions',
      description: 'Integrate artificial intelligence and machine learning to automate processes and enhance decision-making.',
      features: [
        'Custom AI model development',
        'RAG (Retrieval Augmented Generation) systems',
        'Intelligent automation',
        'Computer vision and NLP',
        'Predictive analytics',
        'AI-powered chatbots and assistants'
      ],
      icon: Brain,
      color: 'bg-indigo-500'
    }
  ]

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to accelerate your business transformation.
            From experience design to AI integration, we deliver end-to-end technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className={`${service.color} w-12 h-12 rounded-lg flex items-center justify-center mr-4`}>
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
              </div>

              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`} className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700 transition-colors">
                Learn More <ArrowRight className="ml-1" size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="flex items-center justify-center mb-4">
            <Briefcase className="mr-3" size={32} />
            <h3 className="text-2xl md:text-3xl font-bold">Ready to Transform Your Business?</h3>
          </div>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Let our expert team help you leverage cutting-edge technology to achieve your business goals.
            From AI solutions to comprehensive IT services, we&apos;ve got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              Schedule Consultation
            </Link>
            <Link href="/products" className="border border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
              View Our Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}