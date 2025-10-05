import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Settings, Monitor, Shield, Wrench, AlertTriangle, TrendingUp, CheckCircle, ArrowRight, Clock, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Application Management Services - 24/7 Support & Monitoring | Specly',
  description: 'Comprehensive application lifecycle management and support services for optimal performance, security, and reliability.',
  keywords: 'application management, 24/7 monitoring, application support, maintenance, performance optimization, incident response',
  openGraph: {
    title: 'Application Management Services - 24/7 Support & Monitoring | Specly',
    description: 'Comprehensive application lifecycle management and support services for optimal performance.',
    type: 'website',
  },
  alternates: {
    canonical: '/services/application-management-services',
  },
}

export default function ApplicationManagementServicesPage() {
  const services = [
    {
      icon: Monitor,
      title: '24/7 Application Monitoring',
      description: 'Continuous monitoring of application performance, availability, and user experience with real-time alerts.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Proactive performance tuning, bottleneck identification, and optimization for peak application efficiency.'
    },
    {
      icon: Shield,
      title: 'Security Management',
      description: 'Comprehensive security monitoring, vulnerability assessments, and threat response for application protection.'
    },
    {
      icon: Wrench,
      title: 'Maintenance & Updates',
      description: 'Regular maintenance, security patches, feature updates, and system upgrades to keep applications current.'
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response & Support',
      description: 'Rapid incident response, troubleshooting, and resolution with comprehensive support documentation.'
    },
    {
      icon: Settings,
      title: 'Capacity Planning & Scaling',
      description: 'Proactive capacity planning and automated scaling to handle traffic spikes and business growth.'
    }
  ]

  const managementProcess = [
    {
      step: '01',
      title: 'Assessment & Onboarding',
      description: 'Comprehensive application assessment and setup of monitoring, alerting, and management systems.'
    },
    {
      step: '02',
      title: 'Monitoring & Maintenance',
      description: 'Continuous monitoring with proactive maintenance, updates, and performance optimization.'
    },
    {
      step: '03',
      title: 'Incident Management',
      description: 'Rapid incident detection, response, and resolution with detailed reporting and analysis.'
    },
    {
      step: '04',
      title: 'Optimization & Growth',
      description: 'Ongoing optimization, capacity planning, and strategic improvements for business growth.'
    }
  ]

  const benefits = [
    '99.9% application uptime guarantee',
    'Reduced operational costs by up to 30%',
    'Faster incident resolution times',
    'Improved application performance and reliability',
    'Enhanced security and compliance',
    'Proactive issue prevention and monitoring',
    'Scalable support for business growth',
    'Comprehensive reporting and analytics'
  ]

  const technologies = [
    { name: 'New Relic', category: 'Monitoring' },
    { name: 'Datadog', category: 'Monitoring' },
    { name: 'Splunk', category: 'Analytics' },
    { name: 'PagerDuty', category: 'Incident Management' },
    { name: 'Grafana', category: 'Visualization' },
    { name: 'Prometheus', category: 'Metrics' },
    { name: 'ELK Stack', category: 'Logging' },
    { name: 'Nagios', category: 'Infrastructure' }
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
                Application Management Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive application lifecycle management and support services for optimal performance,
                security, and reliability with 24/7 monitoring and expert support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Get Support
                </Link>
                <a href="#services" className="btn-secondary">
                  Explore Services
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="text-orange-100">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-orange-100">Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">&lt; 5min</div>
                  <div className="text-orange-100">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-orange-100">Apps Managed</div>
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
              Application Management Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end application management services that ensure your applications run smoothly, securely, and efficiently.
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

      {/* Management Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Management Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach to application management that ensures reliability, performance, and continuous improvement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementProcess.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
              Management Tools & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use industry-leading tools and technologies for comprehensive application monitoring and management.
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
                Reliable Application Operations
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our application management services ensure your critical applications run smoothly,
                allowing you to focus on your core business while we handle the technical operations.
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
              <h3 className="text-2xl font-bold mb-6">Need Reliable Application Support?</h3>
              <p className="text-orange-100 mb-6">
                Ensure your applications run at peak performance with our comprehensive management services.
                From monitoring to maintenance, we&apos;ve got your applications covered 24/7.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <Monitor className="mr-3" size={20} />
                  <span>Real-time monitoring & alerts</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-3" size={20} />
                  <span>24/7 expert support team</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-3" size={20} />
                  <span>Dedicated account management</span>
                </div>
              </div>
              <Link href="/contact" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center">
                Get Support Now <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}