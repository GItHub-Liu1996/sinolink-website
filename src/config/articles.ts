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
    image: '/images/insights/morandi-gradient-1.svg',
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
    image: '/images/insights/morandi-gradient-2.svg',
    readTime: '10 min read',
    publishDate: 'January 12, 2025',
  },
  {
    id: '3',
    title: 'Work Permits and Residence Permits: A Complete Guide for Foreign Employees',
    slug: 'work-permits-residence-guide',
    category: 'HR & Visa',
    excerpt: 'Navigate the complex process of obtaining work permits and residence permits for your international team members in China.',
    image: '/images/insights/morandi-gradient-3.svg',
    readTime: '8 min read',
    publishDate: 'January 10, 2025',
  },
  {
    id: '4',
    title: 'Choosing Your Battlefield: A Comparison of China\'s Top Tier-1 Cities for Foreign Businesses',
    slug: 'china-tier1-cities-comparison',
    category: 'Business Strategy',
    excerpt: 'Shanghai, Beijing, Shenzhen, or Guangzhou? We break down the pros and cons of each city for different industries and business models.',
    image: '/images/insights/morandi-gradient-4.svg',
    readTime: '8 min read',
    publishDate: 'January 8, 2025',
  },
  {
    id: '5',
    title: 'Intellectual Property Protection in China: What Foreign Companies Need to Know',
    slug: 'ip-protection-china-guide',
    category: 'Growth & Strategy',
    excerpt: 'Learn how to protect your trademarks, patents, and trade secrets in the Chinese market with our comprehensive IP strategy guide.',
    image: '/images/insights/morandi-gradient-5.svg',
    readTime: '9 min read',
    publishDate: 'January 5, 2025',
  },
  {
    id: '6',
    title: 'Bank Account Opening in China: A Step-by-Step Guide for Foreign Companies',
    slug: 'bank-account-opening-guide',
    category: 'Market Entry',
    excerpt: 'Everything you need to know about opening corporate bank accounts in China, including required documents and common challenges.',
    image: '/images/insights/morandi-gradient-1.svg',
    readTime: '7 min read',
    publishDate: 'January 3, 2025',
  },
  {
    id: '7',
    title: 'Annual Compliance Checklist for Foreign Companies in China',
    slug: 'annual-compliance-checklist',
    category: 'Operations & Compliance',
    excerpt: 'Stay compliant with our comprehensive annual checklist covering tax filings, audits, and regulatory requirements.',
    image: '/images/insights/morandi-gradient-2.svg',
    readTime: '6 min read',
    publishDate: 'December 28, 2024',
  },
  {
    id: '8',
    title: 'Social Insurance and Benefits for Foreign Employees in China',
    slug: 'social-insurance-foreign-employees',
    category: 'HR & Visa',
    excerpt: 'Understanding the Chinese social insurance system and how it applies to foreign employees working in China.',
    image: '/images/insights/morandi-gradient-3.svg',
    readTime: '5 min read',
    publishDate: 'December 25, 2024',
  },
  {
    id: '9',
    title: 'Digital Marketing Strategies for Foreign Brands in China',
    slug: 'digital-marketing-china-strategies',
    category: 'Growth & Strategy',
    excerpt: 'Learn how to effectively market your brand in China\'s unique digital ecosystem, including WeChat, Weibo, and other platforms.',
    image: '/images/insights/morandi-gradient-6.svg',
    readTime: '11 min read',
    publishDate: 'December 22, 2024',
  },
  {
    id: '10',
    title: 'Understanding Chinese Business Culture and Etiquette',
    slug: 'chinese-business-culture-etiquette',
    category: 'Business Strategy',
    excerpt: 'Essential guide to Chinese business culture, negotiation styles, and relationship building for foreign companies.',
    image: '/images/insights/morandi-gradient-5.svg',
    readTime: '9 min read',
    publishDate: 'December 20, 2024',
  },
  {
    id: '11',
    title: 'Supply Chain Management in China: Best Practices',
    slug: 'supply-chain-management-china',
    category: 'Operations & Compliance',
    excerpt: 'Optimize your supply chain operations in China with our comprehensive guide to logistics, quality control, and vendor management.',
    image: '/images/insights/morandi-gradient-7.svg',
    readTime: '13 min read',
    publishDate: 'December 18, 2024',
  },
  {
    id: '12',
    title: 'Data Privacy and Cybersecurity in China',
    slug: 'data-privacy-cybersecurity-china',
    category: 'Operations & Compliance',
    excerpt: 'Navigate China\'s data protection laws and cybersecurity requirements to ensure your business stays compliant.',
    image: '/images/insights/morandi-gradient-2.svg',
    readTime: '10 min read',
    publishDate: 'December 15, 2024',
  },
  {
    id: '13',
    title: 'China\'s Free Trade Zones: Opportunities and Benefits',
    slug: 'china-free-trade-zones-opportunities',
    category: 'Market Entry',
    excerpt: 'Explore the advantages of setting up operations in China\'s Free Trade Zones and Special Economic Zones.',
    image: '/images/insights/morandi-gradient-3.svg',
    readTime: '8 min read',
    publishDate: 'December 12, 2024',
  },
  {
    id: '14',
    title: 'Employee Benefits and Compensation in China',
    slug: 'employee-benefits-compensation-china',
    category: 'HR & Visa',
    excerpt: 'Comprehensive guide to employee benefits, compensation packages, and HR policies for foreign companies in China.',
    image: '/images/insights/morandi-gradient-4.svg',
    readTime: '7 min read',
    publishDate: 'December 10, 2024',
  },
  {
    id: '15',
    title: 'E-commerce and Online Business in China',
    slug: 'ecommerce-online-business-china',
    category: 'Growth & Strategy',
    excerpt: 'Tap into China\'s massive e-commerce market with strategies for online sales, platform selection, and digital payments.',
    image: '/images/insights/morandi-gradient-5.svg',
    readTime: '12 min read',
    publishDate: 'December 8, 2024',
  },
  {
    id: '16',
    title: 'Environmental Compliance and Green Business in China',
    slug: 'environmental-compliance-green-business-china',
    category: 'Operations & Compliance',
    excerpt: 'Understand China\'s environmental regulations and discover opportunities for sustainable business practices.',
    image: '/images/insights/morandi-gradient-1.svg',
    readTime: '9 min read',
    publishDate: 'December 5, 2024',
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
