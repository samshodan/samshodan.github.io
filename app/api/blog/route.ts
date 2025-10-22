import { NextResponse } from 'next/server'
import { getAllPosts, getCategories } from '../../../lib/blog-server'

export const dynamic = 'force-static'

export async function GET() {
  try {
    const posts = getAllPosts()
    const categories = getCategories()
    
    return NextResponse.json({
      posts,
      categories,
      success: true
    })
  } catch (error) {
    console.error('Error fetching blog data:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog data', success: false },
      { status: 500 }
    )
  }
}