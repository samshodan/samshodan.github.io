'use client'

import { useEffect } from 'react'

export default function AdminPage() {
  useEffect(() => {
    // Load Netlify Identity
    const identityScript = document.createElement('script')
    identityScript.src = 'https://identity.netlify.com/v1/netlify-identity-widget.js'
    document.head.appendChild(identityScript)

    // Load Decap CMS
    const cmsScript = document.createElement('script')
    cmsScript.src = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js'
    document.body.appendChild(cmsScript)

    // Initialize Netlify Identity
    identityScript.onload = () => {
      if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", (user: any) => {
          if (!user) {
            window.netlifyIdentity.on("login", () => {
              document.location.href = "/admin/"
            })
          }
        })
      }
    }

    return () => {
      // Cleanup
      if (identityScript.parentNode) {
        identityScript.parentNode.removeChild(identityScript)
      }
      if (cmsScript.parentNode) {
        cmsScript.parentNode.removeChild(cmsScript)
      }
    }
  }, [])

  return (
    <div>
      <div id="nc-root"></div>
    </div>
  )
}