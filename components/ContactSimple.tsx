'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function ContactSimple() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Generate mailto link with form data
    const subject = `Contact from ${formData.name} - ${formData.service || 'General Inquiry'}`
    const body = `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Service Interest: ${formData.service}

Message:
${formData.message}

---
Sent from Samshodan website contact form`

    const mailtoLink = `mailto:hello@samshodan.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Open email client
    window.location.href = mailtoLink
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@samshodan.com',
      href: 'mailto:hello@samshodan.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
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
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-800 text-sm">
                📧 This form will open your email client with a pre-filled message. 
                Make sure you have an email client configured (Gmail, Outlook, etc.)
              </p>
            </div>

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
                    <option value="Ultron AI Chatbot">Ultron AI Chatbot</option>
                    <option value="Specly API Portal">Specly API Portal</option>
                    <option value="Experience Transformation">Experience Transformation</option>
                    <option value="Digital Engineering">Digital Engineering</option>
                    <option value="Digital Commerce">Digital Commerce</option>
                    <option value="Cloud Engineering">Cloud Engineering</option>
                    <option value="Application Management Services">Application Management Services</option>
                    <option value="AI Solutions">AI Solutions</option>
                    <option value="General Consulting">General Consulting</option>
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
                className="btn-primary w-full inline-flex items-center justify-center"
              >
                <Mail className="mr-2" size={20} />
                Send via Email Client
              </button>
              
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Or contact us directly:</p>
                <a 
                  href="mailto:hello@samshodan.com"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  hello@samshodan.com
                </a>
              </div>
            </form>
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
                  <span>Retail domain expertise</span>
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