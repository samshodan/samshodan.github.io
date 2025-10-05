import { blogPosts as fallbackPosts } from './blog-data'

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  readTime: string
  tags: string[]
  slug: string
  published: boolean
  featuredImage?: string
}

// Client-side functions that use static data
export function getAllPosts(): BlogPost[] {
  return fallbackPosts
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return fallbackPosts.find(post => post.slug === slug && post.published)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts().filter(post => post.category === category)
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter(post => post.tags.includes(tag))
}

export function getCategories(): string[] {
  const posts = getAllPosts()
  const categories = new Set(posts.map(post => post.category))
  return Array.from(categories).sort()
}

export function getTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set(posts.flatMap(post => post.tags))
  return Array.from(tags).sort()
}

export function getRecentPosts(limit: number = 3): BlogPost[] {
  return getAllPosts().slice(0, limit)
}

export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  return getAllPosts()
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit)
}