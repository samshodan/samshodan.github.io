# Samshodan Website

A modern, SEO-friendly website for Samshodan - Next-Generation Solutions for Modern Business.

## Features

- **SEO Optimized**: Individual pages with unique meta tags, structured data (JSON-LD), dynamic sitemap, and robots.txt
- **App Router Structure**: Dedicated pages for better SEO and user experience
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Stack**: Next.js 14 with App Router, TypeScript, and React 18
- **Static Export**: Optimized for GitHub Pages hosting
- **Performance**: Optimized images and code splitting
- **Structured Navigation**: Dropdown menus and organized page hierarchy

## Products & Services

### Products
- **Ultron**: AI Chatbot platform with RAG agents and configurable LLM backends (Bedrock, OpenAI, ChatGPT)
- **Specly**: API specification portal for developers with team collaboration features

### IT Consulting Services
- Application Development
- Testing Services  
- Managed Services for back office support

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/samshodan-website.git
cd samshodan-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to GitHub Pages

### Manual Deployment

1. Build and export the static site:
```bash
npm run export
```

2. The static files will be generated in the `out` directory.

3. Deploy the `out` directory to your GitHub Pages repository.

### Configuration for GitHub Pages

Make sure to update the following in `next.config.js`:
- Replace `/samshodan-website` with your actual repository name
- Update the `assetPrefix` and `basePath` accordingly

### SEO Configuration

Update the following files with your actual domain:
- `public/robots.txt` - Update the sitemap URL
- `public/sitemap.xml` - Update the domain URLs
- `app/layout.tsx` - Update OpenGraph and Twitter meta tags

## Customization

### Contact Form Setup (Important!)
The contact form requires a third-party service since this is a static site:

1. **Recommended: Formspree**
   - Sign up at [formspree.io](https://formspree.io)
   - Create a form and get your form ID
   - Replace `YOUR_FORM_ID` in `components/Contact.tsx`

2. **Alternative: Use multiple options**
   - Replace Contact component with ContactFormOptions
   - Provides mailto, Formspree, and direct email options

📖 **See `FORM_SETUP.md` for detailed instructions**

### Legal Pages Setup (Important!)
The website includes comprehensive legal pages:

1. **Privacy Policy** (`/privacy`) - GDPR/CCPA compliant data protection policy
2. **Terms of Service** (`/terms`) - Professional service terms and conditions

⚖️ **See `LEGAL_COMPLIANCE.md` for customization instructions**

**Before going live:**
- Update company information and contact details
- Customize for your jurisdiction and governing law
- Have documents reviewed by qualified legal counsel

### Styling
- Colors and themes can be customized in `tailwind.config.js`
- Global styles are in `app/globals.css`

### Content
- Update company information in the components
- Modify contact details in `components/Contact.tsx` and `components/Footer.tsx`
- Add your actual social media links in `components/Footer.tsx`

### Images
- Add your company logo and product images to the `public` directory
- Update image references in the components

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with SEO meta tags
│   ├── page.tsx           # Homepage
│   ├── sitemap.ts         # Dynamic sitemap generator
│   ├── manifest.ts        # PWA manifest
│   ├── globals.css        # Global styles
│   ├── about/             # About page
│   │   └── page.tsx
│   ├── contact/           # Contact page
│   │   └── page.tsx
│   ├── services/          # Services page
│   │   └── page.tsx
│   └── products/          # Products section
│       ├── page.tsx       # Products overview
│       ├── ultron/        # Ultron AI Chatbot page
│       │   └── page.tsx
│       └── specly/        # Specly API Portal page
│           └── page.tsx
├── components/            # React components
│   ├── Header.tsx         # Navigation header with dropdown
│   ├── Hero.tsx           # Hero section
│   ├── Products.tsx       # Products showcase
│   ├── Services.tsx       # IT consulting services
│   ├── About.tsx          # About company
│   ├── Contact.tsx        # Contact form
│   ├── Footer.tsx         # Footer
│   └── StructuredData.tsx # JSON-LD structured data
├── public/                # Static assets
│   ├── robots.txt         # SEO robots file
│   └── sitemap.xml        # Static sitemap (backup)
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── package.json           # Dependencies and scripts
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **Static Export**: For GitHub Pages compatibility

## SEO Features

### Individual Pages for Better SEO
- **Homepage** (`/`) - Company overview and key services
- **Products** (`/products`) - Product showcase with links to individual products
- **Ultron AI Chatbot** (`/products/ultron`) - Dedicated page with detailed features
- **Specly API Portal** (`/products/specly`) - Comprehensive product information
- **Services** (`/services`) - IT consulting services details
- **About** (`/about`) - Company information, mission, and values
- **Contact** (`/contact`) - Contact form and company details
- **Privacy Policy** (`/privacy`) - Comprehensive data protection and privacy rights
- **Terms of Service** (`/terms`) - Legal terms and conditions for service usage

### SEO Optimizations
- **Unique Meta Tags**: Each page has specific title, description, and keywords
- **Structured Data**: JSON-LD schema markup for organization, products, and website
- **Dynamic Sitemap**: Automatically generated sitemap with proper priorities
- **Canonical URLs**: Proper canonical tags for each page
- **Open Graph**: Social media sharing optimization
- **Mobile-First**: Responsive design for all devices
- **Fast Loading**: Optimized static generation

## Performance Features

- Static site generation for fast loading
- Optimized images and assets
- Minimal JavaScript bundle
- SEO-friendly URLs and meta tags
- Mobile-responsive design
- App Router for better performance

## License

This project is licensed under the MIT License.

## Support

For support or questions about this website, please contact:
- Email: hello@samshodan.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ for the retail industry by Samshodan