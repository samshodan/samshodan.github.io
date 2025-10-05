import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getPostBySlug, getAllPosts, getRelatedPosts } from '../../../lib/blog-server'
import { Calendar, User, Clock, Tag, ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import MarkdownRenderer from '@/components/MarkdownRenderer'

interface BlogPostPageProps {
    params: {
        slug: string
    }
}

export async function generateStaticParams() {
    const posts = getAllPosts()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const post = getPostBySlug(params.slug)

    if (!post) {
        return {
            title: 'Post Not Found | Samshodan Blog',
        }
    }

    return {
        title: `${post.title} | Samshodan Blog`,
        description: post.excerpt,
        keywords: post.tags.join(', '),
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
            tags: post.tags,
        },
        alternates: {
            canonical: `/blog/${post.slug}`,
        },
    }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const post = getPostBySlug(params.slug)

    if (!post) {
        notFound()
    }

    const relatedPosts = getRelatedPosts(post)

    return (
        <main>
            <Header />

            {/* Article Header */}
            <article className="pt-32 pb-16">
                <div className="container-max px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="mb-8">
                        <Link href="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors">
                            <ArrowLeft size={16} className="mr-2" />
                            Back to Blog
                        </Link>
                    </nav>

                    {/* Article Header */}
                    <header className="max-w-4xl mx-auto text-center mb-12">
                        <div className="mb-4">
                            <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            {post.title}
                        </h1>

                        <p className="text-xl text-gray-600 mb-8">
                            {post.excerpt}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                            <div className="flex items-center">
                                <User size={16} className="mr-2" />
                                <span>{post.author}</span>
                            </div>
                            <div className="flex items-center">
                                <Calendar size={16} className="mr-2" />
                                <span>{new Date(post.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}</span>
                            </div>
                            <div className="flex items-center">
                                <Clock size={16} className="mr-2" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </header>

                    {/* Article Content */}
                    <div className="max-w-4xl mx-auto">
                        <MarkdownRenderer content={post.content} />
                    </div>

                    {/* Tags */}
                    <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-gray-200">
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, index) => (
                                <Link
                                    key={index}
                                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                                    className="inline-flex items-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors"
                                >
                                    <Tag size={12} className="mr-1" />
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="container-max px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                            Related Articles
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedPosts.map((relatedPost) => (
                                <article key={relatedPost.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                                    <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center relative">
                                        <div className="text-white text-4xl">📝</div>
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white text-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                                                {relatedPost.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                                            <Link href={`/blog/${relatedPost.slug}`} className="hover:text-primary-600 transition-colors">
                                                {relatedPost.title}
                                            </Link>
                                        </h3>

                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {relatedPost.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                            <div className="flex items-center">
                                                <Calendar size={16} className="mr-1" />
                                                <span>{new Date(relatedPost.date).toLocaleDateString()}</span>
                                            </div>
                                            <span>{relatedPost.readTime}</span>
                                        </div>

                                        <Link
                                            href={`/blog/${relatedPost.slug}`}
                                            className="text-primary-600 font-medium inline-flex items-center hover:text-primary-700 transition-colors"
                                        >
                                            Read More <ArrowRight className="ml-1" size={16} />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </main>
    )
}