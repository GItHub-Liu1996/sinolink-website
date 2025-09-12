# GoChinaAdvisors - China Business Solutions Website

A comprehensive Next.js website providing professional business consulting services for companies looking to enter and operate in the Chinese market.

## 🌟 Features

- **Modern Design**: Clean, professional interface inspired by leading business consulting websites
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Consultation Quiz**: Smart questionnaire system to understand client needs
- **Comprehensive Services**: WFOE registration, market entry, tax compliance, HR services, and more
- **Blog & Insights**: Regular updates on China business regulations and market trends
- **SEO Optimized**: Complete sitemap, robots.txt, and meta tags for search engine visibility
- **Performance Optimized**: Fast loading times with Next.js optimization features

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Content**: MDX for blog posts
- **Deployment**: Vercel
- **Analytics**: Google Analytics 4

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── _components/       # Page-specific components
│   ├── api/              # API routes
│   ├── insights/         # Blog and insights pages
│   ├── services/         # Service pages
│   └── globals.css       # Global styles
├── components/            # Reusable components
│   ├── ui/              # UI components
│   └── consultation-quiz/ # Quiz-related components
├── config/               # Configuration files
├── content/             # MDX blog content
└── lib/                 # Utility functions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/gochinaadvisors.git
cd gochinaadvisors
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Notion API (for form submissions)
NOTION_API_KEY=your_notion_api_key
NOTION_DATABASE_ID=your_database_id
NOTION_CONSULTATION_DATABASE_ID=your_consultation_database_id

# Google Analytics
NEXT_PUBLIC_GA_ID=your_ga_id

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://gochinaadvisors.com
```

### Notion Setup

1. Create a Notion workspace
2. Create databases for newsletter subscriptions and consultation quiz submissions
3. Get API keys from [Notion Developers](https://developers.notion.com/)
4. Update environment variables with your database IDs

## 📝 Content Management

### Adding Blog Posts

1. Create new `.mdx` files in `src/content/blog/`
2. Use the following frontmatter structure:

```mdx
---
title: "Your Article Title"
excerpt: "Brief description of the article"
date: "2025-01-01"
author: "Author Name"
category: "Market Entry"
tags: ["tag1", "tag2"]
featured: false
image: "/images/insights/your-image.svg"
---

Your article content here...
```

### Adding Services

Services are managed through the configuration file `src/config/services.ts`. Add new services by updating the services array.

## 🎨 Customization

### Colors and Themes

The website uses a custom color palette defined in `src/app/globals.css`. Update CSS variables to change the color scheme:

```css
:root {
  --primary: #your-color;
  --secondary: #your-color;
  --accent-cyan: #your-color;
  --accent-magenta: #your-color;
}
```

### Fonts

Fonts are configured in `tailwind.config.js` and imported in `globals.css`. The site uses:
- **Headings**: Inter (Google Fonts)
- **Body**: Inter (Google Fonts)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on every push

### Manual Deployment

```bash
npm run build
npm start
```

## 📊 Performance

The website is optimized for performance with:
- **Image Optimization**: Next.js Image component with WebP support
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: Pre-rendered pages for faster loading
- **Resource Preloading**: Smart preloading of critical resources

## 🔍 SEO Features

- **Sitemap**: Automatically generated at `/sitemap.xml`
- **Robots.txt**: Configured at `/robots.txt`
- **Meta Tags**: Dynamic meta tags for each page
- **Structured Data**: JSON-LD structured data for better search results
- **Open Graph**: Social media sharing optimization

## 📱 Mobile Optimization

- Responsive design for all screen sizes
- Touch-friendly navigation
- Optimized images for mobile devices
- Fast loading on mobile networks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:
- Email: contact@gochinaadvisors.com
- Website: https://gochinaadvisors.com

## 🙏 Acknowledgments

- Design inspiration from leading business consulting websites
- Icons provided by Lucide React
- Fonts by Google Fonts
- Built with Next.js and Tailwind CSS

---

**GoChinaAdvisors** - Your trusted partner for China business success.