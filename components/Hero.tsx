'use client'

import { ArrowRight, Bot, Code, Settings } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])
  return (
    <section id="home" className="section-padding pt-32 bg-gradient-to-br from-primary-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 left-1/2 w-60 h-60 bg-primary-50 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container-max relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 min-h-[120px] md:min-h-[180px] flex items-center justify-center">
            <span
              className={`text-center transition-all duration-1000 ease-out transform ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              <span className="text-primary-600">Next-Generation Solutions</span>
              <br />
              <span className="text-gray-900">for Modern Business</span>
            </span>
          </h1>
          <div
            className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '1.4s' }}
          >
            <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              We deliver innovative AI-powered products and expert IT consulting services 
              that transform businesses through cutting-edge technology and strategic guidance.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '1.8s' }}
          >
            <Link href="/products" className="btn-primary inline-flex items-center justify-center group hover:scale-105 transition-transform duration-200">
              Explore Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </Link>
            <Link href="/contact" className="btn-secondary inline-flex items-center justify-center hover:scale-105 transition-transform duration-200">
              Schedule Consultation
            </Link>
          </div>

          {/* Key Value Propositions */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div
              className={`text-center transition-all duration-1000 ease-out hover:scale-105 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '2.2s' }}
            >
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-primary-200 transition-all duration-300 hover:rotate-12 transform animate-float">
                <Bot className="text-primary-600" size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Technology Excellence</h3>
              <p className="text-gray-600">Cutting-edge solutions and modern technologies that give you competitive advantage</p>
            </div>

            <div
              className={`text-center transition-all duration-1000 ease-out hover:scale-105 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '2.6s' }}
            >
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-primary-200 transition-all duration-300 hover:rotate-12 transform animate-float-delayed">
                <Code className="text-primary-600" size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Custom Solutions</h3>
              <p className="text-gray-600">Tailored software development that integrates seamlessly into your business</p>
            </div>

            <div
              className={`text-center transition-all duration-1000 ease-out hover:scale-105 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '3.0s' }}
            >
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-primary-200 transition-all duration-300 hover:rotate-12 transform animate-float">
                <Settings className="text-primary-600" size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Reliable Technology</h3>
              <p className="text-gray-600">Built for scale with enterprise-grade reliability and performance</p>
            </div>
          </div>

          {/* Trust indicators */}
          <div
            className={`mt-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{ transitionDelay: '3.4s' }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-500 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>AI-Powered Products</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>IT Consulting</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>Custom Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}