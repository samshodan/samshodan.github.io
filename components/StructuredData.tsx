export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Samshodan",
    "description": "We create innovative AI-powered products and developer tools that enhance productivity and drive innovation across industries.",
    "url": "https://yourusername.github.io/samshodan-website",
    "logo": "https://yourusername.github.io/samshodan-website/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hello@samshodan.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Global",
      "addressCountry": "Remote"
    },
    "sameAs": [
      "https://linkedin.com/company/samshodan",
      "https://github.com/samshodan"
    ],
    "foundingDate": "2014",
    "numberOfEmployees": "25-50",
    "industry": "Information Technology",
    "services": [
      "AI Chatbot Development",
      "API Portal Development",
      "Application Development",
      "AI Chatbot Development",
      "API Portal Solutions",
      "Developer Tools"
    ]
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Samshodan",
    "url": "https://yourusername.github.io/samshodan-website",
    "description": "Next-Generation Solutions for Modern Business",
    "publisher": {
      "@type": "Organization",
      "name": "Samshodan"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://yourusername.github.io/samshodan-website/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const softwareApplicationUltron = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Ultron AI Chatbot",
    "description": "Intelligent conversational AI powered by RAG agents with configurable backend LLM models including AWS Bedrock, OpenAI, and ChatGPT.",
    "url": "https://yourusername.github.io/samshodan-website/products/ultron",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "offers": {
      "@type": "Offer",
      "price": "Contact for pricing",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "Samshodan"
    },
    "featureList": [
      "RAG (Retrieval-Augmented Generation) agents",
      "Multi-LLM backend support",
      "Configurable conversation flows",
      "Real-time analytics",
      "Enterprise security"
    ]
  }

  const softwareApplicationSpecly = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Specly API Portal",
    "description": "Comprehensive developer portal for cataloging APIs, managing teams, and organizing development resources in structured folders.",
    "url": "https://yourusername.github.io/samshodan-website/products/specly",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web-based",
    "offers": {
      "@type": "Offer",
      "price": "Contact for pricing",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "Samshodan"
    },
    "featureList": [
      "API specification management",
      "Team collaboration tools",
      "Interactive documentation",
      "Version control",
      "Code generation"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationUltron) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSpecly) }}
      />
    </>
  )
}