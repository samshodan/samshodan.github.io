import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react'
import { getRecentPosts } from '../lib/blog-server'
import Link from 'next/link'

export default function Blog() {
  const blogPosts = getRecentPosts(3)

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, best practices, and insights in technology and digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100">
              <div className="h-48 bg-gray-200 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                  <BookOpen className="text-white" size={48} />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary-600 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                  <Link href={`/blog/${post.slug}`} className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700 transition-colors">
                    Read More <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts CTA */}
        <div className="text-center">
          <Link href="/blog" className="btn-primary inline-flex items-center">
            View All Posts <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </section>
  )
}