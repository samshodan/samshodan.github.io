# Decap CMS Setup Guide

This project uses Decap CMS (formerly Netlify CMS) for content management. This allows non-technical users to add and edit blog posts through a user-friendly interface.

## Setup Instructions

### 1. Deploy to Netlify

1. Push your code to GitHub
2. Connect your GitHub repository to Netlify
3. Deploy the site

### 2. Enable Netlify Identity

1. Go to your Netlify site dashboard
2. Navigate to **Identity** tab
3. Click **Enable Identity**
4. Under **Registration preferences**, select "Invite only" (recommended)
5. Under **External providers**, you can optionally enable GitHub, Google, etc.

### 3. Enable Git Gateway

1. In the Identity tab, scroll down to **Services**
2. Click **Enable Git Gateway**
3. This allows the CMS to commit directly to your repository

### 4. Add Netlify Identity Widget to Your Site

The widget is already included in the admin interface (`public/admin/index.html`).

For the main site, add this script to your main layout if you want login/logout functionality:

```html
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
```

### 5. Invite Users

1. Go to the Identity tab in your Netlify dashboard
2. Click **Invite users**
3. Enter email addresses of people who should have access to the CMS
4. They'll receive an email invitation

### 6. Access the CMS

Once set up, users can access the CMS at: `https://your-site.netlify.app/admin/`

## CMS Features

### Blog Management
- Create new blog posts with rich text editor
- Set categories (Application Development, Application Modernization, AI Engineering)
- Add tags for better organization
- Upload featured images
- Set publish status (draft/published)
- Preview posts before publishing

### Content Structure
Blog posts are stored as Markdown files in `content/blog/` with frontmatter:

```yaml
---
title: "Your Blog Post Title"
date: 2024-03-15T10:00:00.000Z
author: "Author Name"
category: "Application Development"
tags: ["tag1", "tag2"]
excerpt: "Brief description of the post"
readTime: "5 min read"
published: true
featuredImage: "/images/uploads/image.jpg"
---

Your blog content in Markdown format...
```

### Workflow
1. **Create**: Authors create new posts in the CMS
2. **Edit**: Content can be edited with live preview
3. **Publish**: Posts are automatically deployed when published
4. **Update**: Changes trigger automatic rebuilds

## File Structure

```
public/
├── admin/
│   ├── config.yml          # CMS configuration
│   ├── index.html          # CMS interface
│   └── netlify-identity.js # Identity widget setup
├── images/
│   └── uploads/            # Uploaded media files
content/
├── blog/                   # Blog posts (Markdown files)
├── pages/                  # Static pages
└── settings/               # Site settings
lib/
└── blog-utils.ts          # Utility functions for reading blog data
```

## Local Development

For local development, you can:

1. **Add posts directly**: Create `.md` files in `content/blog/`
2. **Use the CMS locally**: 
   - Run `npx netlify-cms-proxy-server` in one terminal
   - Run your Next.js dev server in another
   - Access CMS at `http://localhost:3000/admin/`

## Benefits of This Setup

1. **No Code Deployments**: Content creators can add posts without touching code
2. **Git-based**: All content is version controlled
3. **Fast**: Static site generation for optimal performance
4. **SEO-friendly**: Automatic sitemap generation and meta tags
5. **Flexible**: Easy to customize fields and workflows
6. **Secure**: Authentication through Netlify Identity

## Troubleshooting

### CMS Not Loading
- Check that Git Gateway is enabled
- Verify the config.yml file is correct
- Ensure users are invited through Netlify Identity

### Posts Not Appearing
- Check that `published: true` in frontmatter
- Verify the file is in the correct directory (`content/blog/`)
- Check for YAML syntax errors in frontmatter

### Build Failures
- Ensure all required frontmatter fields are present
- Check for special characters in filenames
- Verify image paths are correct

## Adding New Fields

To add new fields to blog posts, edit `public/admin/config.yml`:

```yaml
fields:
  - { label: "New Field", name: "newField", widget: "string" }
```

Then update the TypeScript interface in `lib/blog-utils.ts` and the rendering components as needed.