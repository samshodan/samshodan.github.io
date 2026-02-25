export default function StructuredData() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Samshodan",
    "description": "Innovative AI-powered products and expert IT consulting services for modern businesses.",
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
      "IT Consulting",
      "Cloud Solutions",
      "AI Integration",
      "Custom Software Development",
      "Enterprise Development"
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
    </>
  )
}