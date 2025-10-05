interface MarkdownRendererProps {
  content: string
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Enhanced markdown to HTML conversion
  const renderMarkdown = (text: string): string => {
    // Split content into lines for better processing
    const lines = text.split('\n')
    const processedLines: string[] = []
    let inCodeBlock = false
    let inList = false
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i]
      
      // Handle code blocks
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          processedLines.push('</code></pre>')
          inCodeBlock = false
        } else {
          const language = line.substring(3).trim()
          processedLines.push(`<pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6"><code class="language-${language}">`)
          inCodeBlock = true
        }
        continue
      }
      
      if (inCodeBlock) {
        processedLines.push(line)
        continue
      }
      
      // Handle headers
      if (line.startsWith('### ')) {
        line = `<h3 class="text-xl font-semibold text-gray-900 mb-3 mt-8">${line.substring(4)}</h3>`
      } else if (line.startsWith('## ')) {
        line = `<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-10">${line.substring(3)}</h2>`
      } else if (line.startsWith('# ')) {
        line = `<h1 class="text-3xl font-bold text-gray-900 mb-6 mt-8">${line.substring(2)}</h1>`
      }
      // Handle lists
      else if (line.match(/^[\*\-] /)) {
        if (!inList) {
          processedLines.push('<ul class="list-disc pl-6 my-4 space-y-2">')
          inList = true
        }
        line = `<li class="text-gray-700">${line.substring(2)}</li>`
      } else if (line.match(/^\d+\. /)) {
        if (!inList) {
          processedLines.push('<ol class="list-decimal pl-6 my-4 space-y-2">')
          inList = true
        }
        line = `<li class="text-gray-700">${line.replace(/^\d+\. /, '')}</li>`
      } else if (inList && line.trim() === '') {
        processedLines.push('</ul>')
        inList = false
      }
      // Handle paragraphs
      else if (line.trim() !== '' && !line.startsWith('<')) {
        line = `<p class="text-gray-700 leading-relaxed mb-4">${line}</p>`
      }
      
      // Apply inline formatting
      line = line
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
        // Italic
        .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
        // Inline code
        .replace(/`([^`]+)`/g, '<code class="bg-gray-100 px-2 py-1 rounded text-sm font-mono">$1</code>')
        // Links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-primary-600 hover:text-primary-700 transition-colors underline">$1</a>')
      
      processedLines.push(line)
    }
    
    // Close any open lists
    if (inList) {
      processedLines.push('</ul>')
    }
    
    return processedLines.join('\n')
  }

  const processedContent = renderMarkdown(content)

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
      dangerouslySetInnerHTML={{ __html: processedContent }}
    />
  )
}