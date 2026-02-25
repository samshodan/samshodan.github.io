'use client'

import { marked } from 'marked'
import DOMPurify from 'dompurify'
import { useEffect, useState } from 'react'

interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  const [sanitizedHtml, setSanitizedHtml] = useState('')

  useEffect(() => {
    // Configure marked options
    marked.setOptions({
      gfm: true,
      breaks: true,
    })

    // Convert markdown to HTML
    const rawHtml = marked(content) as string

    // Sanitize HTML to prevent XSS
    const clean = DOMPurify.sanitize(rawHtml, {
      ALLOWED_TAGS: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'ul', 'ol', 'li', 'strong', 'em', 'code', 'pre', 'blockquote', 'br'],
      ALLOWED_ATTR: ['href', 'class', 'target', 'rel']
    })

    setSanitizedHtml(clean)
  }, [content])

  return (
    <div 
      className="prose prose-lg prose-gray max-w-none
        prose-headings:text-gray-900 prose-headings:font-bold
        prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-8
        prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-10
        prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-8
        prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
        prose-a:text-primary-600 prose-a:no-underline hover:prose-a:text-primary-700
        prose-strong:text-gray-900 prose-strong:font-semibold
        prose-ul:my-6 prose-ol:my-6 prose-ul:pl-6 prose-ol:pl-6
        prose-li:text-gray-700 prose-li:mb-2
        prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:pl-6 prose-blockquote:italic
        prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
        prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:my-6"
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  )
}