import type { Metadata } from 'next'
import { Suspense } from 'react'
import BlogPageClient from '../../components/BlogPageClient'

export const metadata: Metadata = {
  title: 'Blog - Technology Insights & Best Practices | Samshodan',
  description: 'Stay updated with the latest trends, best practices, and insights in digital transformation, experience design, cloud engineering, and AI solutions from Samshodan experts.',
  keywords: 'technology blog, digital transformation, experience transformation, digital engineering, cloud engineering, AI solutions, digital commerce, software development',
  openGraph: {
    title: 'Blog - Technology Insights & Best Practices | Samshodan',
    description: 'Stay updated with the latest trends and insights in technology and digital transformation.',
    type: 'website',
  },
  alternates: {
    canonical: '/blog',
  },
}

function BlogLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
    </div>
  )
}

export default function BlogPage() {
  return (
    <Suspense fallback={<BlogLoading />}>
      <BlogPageClient />
    </Suspense>
  )
}

