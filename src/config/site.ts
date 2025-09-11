// Site configuration constants
export const siteConfig = {
  name: 'GoChinaAdvisors',
  description: 'Your trusted partner for seamless market entry into China. Professional consulting services for company registration, compliance, and sustainable growth.',
  url: 'https://chinabizsolutions.com',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/chinabizsolutions',
    github: 'https://github.com/chinabizsolutions',
  },
};

// Navigation links
export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Solutions' },
  { href: '/about', label: 'About Us' },
  { href: '/insights', label: 'News & Insights' },
  { href: '/contact', label: 'Contact' },
];

// Contact information
export const contactInfo = {
  email: 'info@gochinaadvisors.com',
  phone: '+86 21 1234 5678',
  address: {
    street: 'Suite 2001, Shanghai Tower',
    city: '501 Yincheng Middle Road',
    district: 'Pudong New Area, Shanghai 200120',
  },
};

// Social media links
export const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/gochinaadvisors', icon: 'linkedin' },
  { name: 'YouTube', href: 'https://youtube.com/@gochinaadvisors', icon: 'youtube' },
  { name: 'TikTok', href: 'https://tiktok.com/@gochinaadvisors', icon: 'tiktok' },
  { name: 'Facebook', href: 'https://facebook.com/gochinaadvisors', icon: 'facebook' },
];

// Service categories for insights
export const insightCategories = [
  { slug: 'market-entry', label: 'Market Entry' },
  { slug: 'operations-compliance', label: 'Operations & Compliance' },
  { slug: 'hr-visa', label: 'HR & Visa' },
  { slug: 'growth-strategy', label: 'Growth & Strategy' },
];

// Core service areas for footer (simplified)
export const coreServices = [
  {
    title: 'Strategic Consulting',
    description: 'Market entry strategies and business planning',
    links: [
      { href: '/services/market-entry', label: 'Market Entry Strategy' },
      { href: '/services/business-planning', label: 'Business Planning' },
      { href: '/services/expansion', label: 'Business Expansion' },
    ]
  },
  {
    title: 'Operations & Compliance',
    description: 'Regulatory compliance and operational excellence',
    links: [
      { href: '/services/wfoe-registration', label: 'WFOE Registration' },
      { href: '/services/tax-compliance', label: 'Tax Compliance' },
      { href: '/services/accounting', label: 'Accounting Services' },
    ]
  },
  {
    title: 'Compliance Management',
    description: 'Ongoing compliance and regulatory support',
    links: [
      { href: '/services/hr-services', label: 'HR Services' },
      { href: '/services/visa-services', label: 'Visa Services' },
      { href: '/services/legal-support', label: 'Legal Support' },
    ]
  },
  {
    title: 'Market Entry',
    description: 'Complete market entry solutions',
    links: [
      { href: '/services/market-research', label: 'Market Research' },
      { href: '/services/partnership', label: 'Partnership Setup' },
      { href: '/services/consulting', label: 'Strategic Consulting' },
    ]
  }
];

// Professional resources for footer (simplified)
export const professionalResources = [
  { href: '/insights', label: 'Latest Insights', description: 'Industry analysis and trends' },
  { href: '/insights/case-studies', label: 'Client Success Stories', description: 'Real-world case studies' },
  { href: '/insights/whitepapers', label: 'Research Reports', description: 'In-depth market research' },
  { href: '/insights/tools', label: 'Business Tools', description: 'Practical resources and guides' },
];

// Legal links
export const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
  { href: '/disclaimer', label: 'Disclaimer' },
];

// FAQ items
export const faqItems = [
  {
    question: 'What is the typical timeframe for a WFOE registration?',
    answer: 'The typical timeframe for WFOE registration is 4-6 weeks, depending on the complexity of your business scope and the specific requirements of your industry.',
  },
  {
    question: 'Is a physical office required to register a company in China?',
    answer: 'Yes, a physical office address is required for WFOE registration. We can help you find suitable office space or provide virtual office solutions.',
  },
  {
    question: 'How do I legally get my profits out of China?',
    answer: 'Profits can be repatriated through dividend distributions, service fees, or royalty payments. We\'ll help you structure the most tax-efficient approach for your business.',
  },
];
