// Site configuration constants
export const siteConfig = {
  name: 'ChinaBiz Solutions',
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
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

// Contact information
export const contactInfo = {
  email: 'info@chinabizsolutions.com',
  phone: '+86 21 1234 5678',
  address: {
    street: 'Suite 2001, Shanghai Tower',
    city: '501 Yincheng Middle Road',
    district: 'Pudong New Area, Shanghai 200120',
  },
};

// Social media links
export const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/chinabizsolutions', icon: 'linkedin' },
  { name: 'YouTube', href: 'https://youtube.com/@chinabizsolutions', icon: 'youtube' },
  { name: 'TikTok', href: 'https://tiktok.com/@chinabizsolutions', icon: 'tiktok' },
  { name: 'Facebook', href: 'https://facebook.com/chinabizsolutions', icon: 'facebook' },
];

// Service categories for insights
export const insightCategories = [
  { slug: 'market-entry', label: 'Market Entry' },
  { slug: 'operations-compliance', label: 'Operations & Compliance' },
  { slug: 'hr-visa', label: 'HR & Visa' },
  { slug: 'growth-strategy', label: 'Growth & Strategy' },
];

// Service categories for footer
export const serviceCategories = [
  {
    title: 'Company Formation',
    links: [
      { href: '/services/wfoe-registration', label: 'WFOE Registration' },
      { href: '/services/company-setup', label: 'Company Setup' },
      { href: '/services/business-license', label: 'Business License' },
    ]
  },
  {
    title: 'Compliance & Operations',
    links: [
      { href: '/services/tax-compliance', label: 'Tax Compliance' },
      { href: '/services/accounting', label: 'Accounting Services' },
      { href: '/services/hr-services', label: 'HR Services' },
    ]
  },
  {
    title: 'Market Entry',
    links: [
      { href: '/services/market-research', label: 'Market Research' },
      { href: '/services/partnership', label: 'Partnership Setup' },
      { href: '/services/expansion', label: 'Business Expansion' },
    ]
  },
  {
    title: 'Support Services',
    links: [
      { href: '/services/visa-services', label: 'Visa Services' },
      { href: '/services/legal-support', label: 'Legal Support' },
      { href: '/services/consulting', label: 'Strategic Consulting' },
    ]
  }
];

// Resource center links
export const resourceLinks = [
  { href: '/insights', label: 'Latest Insights', description: 'Industry news and analysis' },
  { href: '/insights/case-studies', label: 'Case Studies', description: 'Success stories from our clients' },
  { href: '/insights/whitepapers', label: 'White Papers', description: 'In-depth research reports' },
  { href: '/insights/tools', label: 'Business Tools', description: 'Calculators and templates' },
  { href: '/insights/downloads', label: 'Downloads', description: 'Free resources and guides' },
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
