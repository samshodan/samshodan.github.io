'use client'

// import { useState } from 'react'
import { Mail, MapPin, CheckCircle } from 'lucide-react'

export default function Contact() {
  // Form state commented out until form setup is complete
  /*
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  */

  // Form handlers commented out until form setup is complete
  /*
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')

    try {
      // Using Formspree - replace YOUR_FORM_ID with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        })
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setSubmitError('Failed to send message. Please try again or contact us directly.')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  */

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@samshodan.com',
      href: 'mailto:hello@samshodan.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Global Remote Team',
      href: '#'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with our solutions? Let&apos;s discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form - Commented out until form setup is complete */}
          {/* 
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            
            {isSubmitted && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center">
                <CheckCircle className="text-green-500 mr-3" size={20} />
                <span className="text-green-700">Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.</span>
              </div>
            )}

            {submitError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center">
                <div className="text-red-500 mr-3">⚠</div>
                <span className="text-red-700">{submitError}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="ultron">Ultron AI Chatbot</option>
                    <option value="specly">Specly API Portal</option>
                    <option value="consulting">General Consulting</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us about your project or requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message <Send className="ml-2" size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
          */}

          {/* Contact Information - Column 1 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <info.icon className="text-primary-600" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.label}</h4>
                    {info.href !== '#' ? (
                      <a href={info.href} className="text-gray-600 hover:text-primary-600 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-gray-600">{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Samshodan - Column 2 */}
          <div className="bg-primary-600 rounded-2xl p-8 text-white">
            <h4 className="text-xl font-bold mb-4">Why Choose Samshodan?</h4>
            <ul className="space-y-3 text-primary-100">
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-0.5 flex-shrink-0" size={16} />
                <span>AI-powered innovation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-0.5 flex-shrink-0" size={16} />
                <span>Cutting-edge AI solutions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-0.5 flex-shrink-0" size={16} />
                <span>Comprehensive IT services</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 mt-0.5 flex-shrink-0" size={16} />
                <span>Dedicated support team</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}