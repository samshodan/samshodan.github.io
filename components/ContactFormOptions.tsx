'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, ExternalLink } from 'lucide-react'

export default function ContactFormOptions() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // Generate mailto link with form data
  const generateMailtoLink = () => {
    const subject = `Contact from ${formData.name} - ${formData.service || 'General Inquiry'}`
    const body = `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Service Interest: ${formData.service}

Message:
${formData.message}

---
Sent from Samshodan website contact form`

    return `mailto:hello@samshodan.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

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
          {/* Contact Form Options */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            
            {/* Form Fields */}
            <div className="space-y-6 mb-8">
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
                    <option value="cloud">Cloud Solutions</option>
                    <option value="ai">AI Integration</option>
                    <option value="enterprise">Enterprise Development</option>
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
            </div>

            {/* Multiple Contact Options */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 mb-4">Choose how to send your message:</h4>
              
              {/* Option 1: Email Client */}
              <a
                href={generateMailtoLink()}
                className="btn-primary w-full inline-flex items-center justify-center"
              >
                <Mail className="mr-2" size={20} />
                Send via Email Client
              </a>
              
              {/* Option 2: Formspree */}
              <form 
                action="https://formspree.io/f/YOUR_FORM_ID" 
                method="POST"
                className="w-full"
              >
                <input type="hidden" name="name" value={formData.name} />
                <input type="hidden" name="email" value={formData.email} />
                <input type="hidden" name="company" value={formData.company} />
                <input type="hidden" name="service" value={formData.service} />
                <input type="hidden" name="message" value={formData.message} />
                <button
                  type="submit"
                  className="btn-secondary w-full inline-flex items-center justify-center"
                >
                  <Send className="mr-2" size={20} />
                  Send via Formspree
                </button>
              </form>

              {/* Option 3: Direct Email */}
              <div className="text-center pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Or contact us directly:</p>
                <a 
                  href="mailto:hello@samshodan.com"
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                >
                  hello@samshodan.com <ExternalLink className="ml-1" size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
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
      </div>
    </section>
  )
}