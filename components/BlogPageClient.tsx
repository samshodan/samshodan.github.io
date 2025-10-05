'use client'

import { useState, useEffect, useMemo } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, User, BookOpen, Search, Tag, X } from 'lucide-react'
import { getAllPosts, getCategories } from '@/lib/blog-utils'
import Link from 'next/link'
import type { BlogPost } from '@/lib/blog-utils'

const POSTS_PER_PAGE = 6

export default function BlogPageClient() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  
  const [allPosts, setAllPosts] = useState<BlogPost[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTag, setSelectedTag] = useState('')
  const [displayedPosts, setDisplayedPosts] = useState(POSTS_PER_PAGE)
  const [isLoading, setIsLoading] = useState(true)

  // Load posts on component mount
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await fetch('/api/blog')
        const data = await response.json()
        
        if (data.success) {
          setAllPosts(data.posts)
          setCategories(['All', ...data.categories])
        } else {
          // Fallback to client-side data
          const posts = getAllPosts()
          const cats = ['All', ...getCategories()]
          setAllPosts(posts)
          setCategories(cats)
        }
      } catch (error) {
        console.error('Error fetching blog data:', error)
        // Fallback to client-side data
        const posts = getAllPosts()
        const cats = ['All', ...getCategories()]
        setAllPosts(posts)
        setCategories(cats)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBlogData()
  }, [])

  // Initialize from URL parameters
  useEffect(() => {
    const search = searchParams.get('search') || ''
    const category = searchParams.get('category') || 'All'
    const tag = searchParams.get('tag') || ''
    
    setSearchTerm(search)
    setSelectedCategory(category)
    setSelectedTag(tag)
  }, [searchParams])

  // Filter and search posts
  const filteredPosts = useMemo(() => {
    let filtered = allPosts

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    // Filter by tag
    if (selectedTag) {
      filtered = filtered.filter(post => post.tags.includes(selectedTag))
    }

    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        post.category.toLowerCase().includes(searchLower)
      )
    }

    return filtered
  }, [allPosts, selectedCategory, selectedTag, searchTerm])

  // Posts to display (with pagination)
  const postsToShow = filteredPosts.slice(0, displayedPosts)
  const hasMorePosts = filteredPosts.length > displayedPosts

  // Reset pagination when filters change
  useEffect(() => {
    setDisplayedPosts(POSTS_PER_PAGE)
  }, [searchTerm, selectedCategory, selectedTag])

  const handleLoadMore = () => {
    setDisplayedPosts(prev => prev + POSTS_PER_PAGE)
  }

  // Update URL when filters change
  const updateURL = (newSearch: string, newCategory: string, newTag: string) => {
    const params = new URLSearchParams()
    if (newSearch) params.set('search', newSearch)
    if (newCategory !== 'All') params.set('category', newCategory)
    if (newTag) params.set('tag', newTag)
    
    const queryString = params.toString()
    const newURL = queryString ? `${pathname}?${queryString}` : pathname
    router.push(newURL, { scroll: false })
  }

  const handleSearchChange = (value: string) => {
    setSearchTerm(value)
    updateURL(value, selectedCategory, selectedTag)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setSelectedTag('') // Clear tag filter when changing category
    updateURL(searchTerm, category, '')
  }

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag)
    setSelectedCategory('All') // Clear category filter when selecting tag
    updateURL(searchTerm, 'All', tag)
  }

  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('All')
    setSelectedTag('')
    router.push(pathname, { scroll: false })
  }

  if (isLoading) {
    return (
      <main>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading blog posts...</p>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Technology Insights
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stay ahead with expert insights, best practices, and the latest trends in 
              application development, modernization, and AI engineering.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              {searchTerm && (
                <button
                  onClick={() => handleSearchChange('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Filters */}
      {(searchTerm || selectedCategory !== 'All' || selectedTag) && (
        <section className="py-4 bg-gray-50 border-b">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-sm text-gray-600">Active filters:</span>
              
              {searchTerm && (
                <span className="inline-flex items-center bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                  Search: &quot;{searchTerm}&quot;
                  <button
                    onClick={() => handleSearchChange('')}
                    className="ml-2 hover:text-primary-900"
                  >
                    <X size={14} />
                  </button>
                </span>
              )}
              
              {selectedCategory !== 'All' && (
                <span className="inline-flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  Category: {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory('All')}
                    className="ml-2 hover:text-blue-900"
                  >
                    <X size={14} />
                  </button>
                </span>
              )}
              
              {selectedTag && (
                <span className="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                  Tag: {selectedTag}
                  <button
                    onClick={() => setSelectedTag('')}
                    className="ml-2 hover:text-green-900"
                  >
                    <X size={14} />
                  </button>
                </span>
              )}
              
              <button
                onClick={clearFilters}
                className="text-sm text-gray-500 hover:text-gray-700 underline"
              >
                Clear all filters
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Results Summary */}
      <section className="py-4 bg-white">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-600 text-center">
            {filteredPosts.length === 0 
              ? 'No articles found matching your criteria'
              : `Showing ${postsToShow.length} of ${filteredPosts.length} article${filteredPosts.length !== 1 ? 's' : ''}`
            }
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-gray-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="mx-auto text-gray-400 mb-4" size={64} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or filters to find what you&apos;re looking for.
              </p>
              <button
                onClick={clearFilters}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {postsToShow.map((post) => (
                  <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center relative">
                      <BookOpen className="text-white" size={48} />
                      <div className="absolute top-4 left-4">
                        <button
                          onClick={() => handleCategoryChange(post.category)}
                          className="bg-white text-primary-600 px-3 py-1 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
                        >
                          {post.category}
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        <Link href={`/blog/${post.slug}`} className="hover:text-primary-600 transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <button
                            key={tag}
                            onClick={() => handleTagClick(tag)}
                            className="inline-flex items-center text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-2 py-1 rounded transition-colors"
                          >
                            <Tag size={12} className="mr-1" />
                            {tag}
                          </button>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="text-xs text-gray-500">
                            +{post.tags.length - 3} more
                          </span>
                        )}
                      </div>
                      
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
                        <Link href={`/blog/${post.slug}`} className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Load More */}
              {hasMorePosts && (
                <div className="text-center mt-12">
                  <button
                    onClick={handleLoadMore}
                    className="btn-primary"
                  >
                    Load More Articles ({filteredPosts.length - displayedPosts} remaining)
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}