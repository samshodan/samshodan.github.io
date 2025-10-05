# Deployment Guide for GitHub Pages

## Manual Deployment Steps

### 1. Prepare the Repository
1. Create a new repository on GitHub named `samshodan-website`
2. Clone this repository to your local machine
3. Copy all the files from this project to your repository

### 2. Update Configuration
Before deploying, update these files with your actual GitHub username/organization:

**next.config.js**
```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/samshodan-website' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/samshodan-website' : ''
}
```
Replace `/samshodan-website` with your actual repository name.

**public/robots.txt**
```
User-agent: *
Allow: /

Sitemap: https://yourusername.github.io/samshodan-website/sitemap.xml
```
Replace `yourusername` with your GitHub username.

**public/sitemap.xml**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourusername.github.io/samshodan-website/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```
Replace `yourusername` with your GitHub username.

### 3. Build and Deploy

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the static site:**
   ```bash
   npm run build
   ```

3. **The static files are now in the `out` directory**

4. **Deploy to GitHub Pages:**
   
   **Option A: Using gh-pages branch (Recommended)**
   ```bash
   # Install gh-pages package globally
   npm install -g gh-pages
   
   # Deploy the out directory to gh-pages branch
   gh-pages -d out
   ```

   **Option B: Manual deployment**
   1. Create a new branch called `gh-pages`
   2. Copy all contents from the `out` directory to the root of the `gh-pages` branch
   3. Commit and push the `gh-pages` branch

### 4. Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Select **gh-pages** branch and **/ (root)** folder
5. Click **Save**

Your website will be available at: `https://yourusername.github.io/samshodan-website/`

## Updating the Website

To update the website:

1. Make changes to your source code
2. Run `npm run build` to generate new static files
3. Deploy the `out` directory to the `gh-pages` branch using one of the methods above

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to the `public` directory with your domain name
2. Configure your domain's DNS to point to GitHub Pages
3. Update the `assetPrefix` and `basePath` in `next.config.js` to be empty strings for custom domains

## Troubleshooting

### Images not loading
- Make sure `images.unoptimized: true` is set in `next.config.js`
- Verify the `assetPrefix` and `basePath` are correctly configured

### CSS/JS not loading
- Check that the `assetPrefix` matches your repository name
- Ensure the `gh-pages` branch contains all the files from the `out` directory

### 404 errors
- Verify that `trailingSlash: true` is set in `next.config.js`
- Check that the repository name in the configuration matches your actual repository name

## SEO Considerations

After deployment:
- Submit your sitemap to Google Search Console
- Update any hardcoded URLs in the metadata to use your actual domain
- Consider adding Google Analytics or other tracking tools