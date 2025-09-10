// Article data configuration
export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content?: string;
  image: string;
  readTime: string;
  publishDate: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: '1',
    title: 'The Ultimate Guide to WFOE Registration in China (2025 Edition)',
    slug: 'wfoe-registration-guide-2025',
    category: 'Market Entry',
    excerpt: 'A comprehensive step-by-step walkthrough of the entire Wholly Foreign-Owned Enterprise registration process, from name approval to bank account opening.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
    readTime: '12 min read',
    publishDate: 'January 15, 2025',
    featured: true,
  },
  {
    id: '2',
    title: 'Decoding the Chinese Tax System: A Primer for Foreign Enterprises',
    slug: 'chinese-tax-system-primer',
    category: 'Operations & Compliance',
    excerpt: 'Understanding Corporate Income Tax (CIT), Value-Added Tax (VAT), and other key tax obligations is crucial for compliance.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
    readTime: '10 min read',
    publishDate: 'January 12, 2025',
  },
  {
    id: '3',
    title: 'Work Permits and Residence Permits: A Complete Guide for Foreign Employees',
    slug: 'work-permits-residence-guide',
    category: 'HR & Visa',
    excerpt: 'Navigate the complex process of obtaining work permits and residence permits for your international team members in China.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
    readTime: '8 min read',
    publishDate: 'January 10, 2025',
  },
  {
    id: '4',
    title: 'Choosing Your Battlefield: A Comparison of China\'s Top Tier-1 Cities for Foreign Businesses',
    slug: 'china-tier1-cities-comparison',
    category: 'Business Strategy',
    excerpt: 'Shanghai, Beijing, Shenzhen, or Guangzhou? We break down the pros and cons of each city for different industries and business models.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
    readTime: '8 min read',
    publishDate: 'January 8, 2025',
  },
  {
    id: '5',
    title: 'Intellectual Property Protection in China: What Foreign Companies Need to Know',
    slug: 'ip-protection-china-guide',
    category: 'Growth & Strategy',
    excerpt: 'Learn how to protect your trademarks, patents, and trade secrets in the Chinese market with our comprehensive IP strategy guide.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
    readTime: '9 min read',
    publishDate: 'January 5, 2025',
  },
  {
    id: '6',
    title: 'Bank Account Opening in China: A Step-by-Step Guide for Foreign Companies',
    slug: 'bank-account-opening-guide',
    category: 'Market Entry',
    excerpt: 'Everything you need to know about opening corporate bank accounts in China, including required documents and common challenges.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
    readTime: '7 min read',
    publishDate: 'January 3, 2025',
  },
  {
    id: '7',
    title: 'Annual Compliance Checklist for Foreign Companies in China',
    slug: 'annual-compliance-checklist',
    category: 'Operations & Compliance',
    excerpt: 'Stay compliant with our comprehensive annual checklist covering tax filings, audits, and regulatory requirements.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
    readTime: '6 min read',
    publishDate: 'December 28, 2024',
  },
  {
    id: '8',
    title: 'Social Insurance and Benefits for Foreign Employees in China',
    slug: 'social-insurance-foreign-employees',
    category: 'HR & Visa',
    excerpt: 'Understanding the Chinese social insurance system and how it applies to foreign employees working in China.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
    readTime: '5 min read',
    publishDate: 'December 25, 2024',
  },
  {
    id: '9',
    title: 'Digital Marketing Strategies for Foreign Brands in China',
    slug: 'digital-marketing-china-strategies',
    category: 'Growth & Strategy',
    excerpt: 'Learn how to effectively market your brand in China\'s unique digital ecosystem, including WeChat, Weibo, and other platforms.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60',
    readTime: '11 min read',
    publishDate: 'December 22, 2024',
  },
];

// Get featured articles
export const getFeaturedArticles = () => articles.filter(article => article.featured);

// Get latest articles (excluding featured)
export const getLatestArticles = () => articles.filter(article => !article.featured).slice(0, 2);

// Get all articles (excluding featured)
export const getAllArticles = () => articles.filter(article => !article.featured);

// Get articles by category
export const getArticlesByCategory = (category: string) => 
  articles.filter(article => article.category.toLowerCase().includes(category.toLowerCase()));

// Get article by slug
export const getArticleBySlug = (slug: string) => 
  articles.find(article => article.slug === slug);
