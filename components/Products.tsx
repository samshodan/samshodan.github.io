import { Bot, BookOpen, Zap, Shield, Cloud, Users } from 'lucide-react'
import Link from 'next/link'

export default function Products() {
  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Products & Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver innovative AI-powered products and expert IT consulting services to help businesses 
            accelerate their digital transformation and achieve their technology goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <Cloud className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Cloud Solutions</h3>
            </div>
            <p className="text-gray-600">
              Cloud architecture, migration, and optimization services for scalable and resilient applications.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <Bot className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">AI Integration</h3>
            </div>
            <p className="text-gray-600">
              Custom AI and machine learning solutions to enhance your business processes and decision-making.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <Shield className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Enterprise Development</h3>
            </div>
            <p className="text-gray-600">
              Full-stack application development with focus on security, scalability, and maintainability.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/contact" className="btn-primary">
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  )
}