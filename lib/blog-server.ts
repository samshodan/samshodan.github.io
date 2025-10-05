import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
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

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getAllPosts(): BlogPost[] {
  try {
    // Check if directory exists
    if (!fs.existsSync(postsDirectory)) {
      console.warn('Blog directory does not exist, falling back to static data')
      return fallbackPosts.filter(post => post.published)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    }

    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        return {
          id: slug,
          slug: slug,
          title: data.title || '',
          excerpt: data.excerpt || '',
          content: content,
          author: data.author || 'Samshodan Team',
          date: data.date ? new Date(data.date).toISOString().split('T')[0] : '',
          category: data.category || '',
          readTime: data.readTime || '5 min read',
          tags: data.tags || [],
          published: data.published !== false,
          featuredImage: data.featuredImage || undefined,
        } as BlogPost
      })
      .filter(post => post.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    return allPostsData
  } catch (error) {
    console.error('Error reading blog posts:', error)
    console.warn('Falling back to static blog data')
    return fallbackPosts.filter(post => post.published)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  }
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      // Fallback to static data
      return fallbackPosts.find(post => post.slug === slug && post.published)
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      id: slug,
      slug: slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      content: content,
      author: data.author || 'Samshodan Team',
      date: data.date ? new Date(data.date).toISOString().split('T')[0] : '',
      category: data.category || '',
      readTime: data.readTime || '5 min read',
      tags: data.tags || [],
      published: data.published !== false,
      featuredImage: data.featuredImage || undefined,
    } as BlogPost
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    // Fallback to static data
    return fallbackPosts.find(post => post.slug === slug && post.published)
  }
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