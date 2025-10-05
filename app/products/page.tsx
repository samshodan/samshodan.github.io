import type { Metadata } from 'next'
import Header from '@/components/Header'
import Products from '@/components/Products'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Products - Ultron AI Chatbot & Specly API Portal | Samshodan',
  description: 'Discover Samshodan\'s innovative products: Ultron AI Chatbot with RAG agents and configurable LLM backends (Bedrock, OpenAI, ChatGPT), and Specly API specification portal for developers.',
  keywords: 'Ultron AI chatbot, Specly API portal, RAG agents, LLM backends, AWS Bedrock, OpenAI, ChatGPT, API management, developer tools',
  openGraph: {
    title: 'Products - Ultron AI Chatbot & Specly API Portal | Samshodan',
    description: 'Discover Samshodan\'s innovative products: Ultron AI Chatbot with RAG agents and Specly API specification portal.',
    type: 'website',
  },
  alternates: {
    canonical: '/products',
  },
}

export default function ProductsPage() {
  return (
    <main>
      <Header />
      <div className="pt-20">
        <Products />
      </div>
      <Footer />
    </main>
  )
}