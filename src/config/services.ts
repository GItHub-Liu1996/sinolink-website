// Services data configuration
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  servicePoints: string[];
  phase: 'setup' | 'operations' | 'growth';
}

export const services: Service[] = [
  // Phase 1: Market Entry & Setup
  {
    id: 'legal-entity',
    title: 'Legal Entity',
    description: 'Building a solid legal foundation for your success.',
    icon: null, // Will be set dynamically
    servicePoints: [
      'Company Type Selection',
      'Equity Structure Design',
      'Business Scope Definition',
      'Registered Capital Setup',
      'Company Naming & Registration',
    ],
    phase: 'setup',
  },
  {
    id: 'bank-account',
    title: 'Bank Account Opening',
    description: 'Navigating the complexities of corporate banking in China.',
    icon: null,
    servicePoints: [
      'Corporate Account Setup',
      'Capital Account Opening',
      'Multi-Currency Accounts',
      'Bank Interview Facilitation',
      'KYC Compliance Support',
    ],
    phase: 'setup',
  },
  {
    id: 'premises-property',
    title: 'Premises & Property',
    description: 'Securing the right physical or virtual space for your business.',
    icon: null,
    servicePoints: [
      'Virtual Office Solutions',
      'Physical Office Setup',
      'Lease Agreement Negotiation',
      'Property Management Liaison',
      'Location Analysis & Selection',
    ],
    phase: 'setup',
  },
  {
    id: 'industry-licensing',
    title: 'Industry Licensing',
    description: 'Obtaining the necessary licenses and permits for your specific industry.',
    icon: null,
    servicePoints: [
      'Special Permits & Licenses',
      'Qualification Applications',
      'Import/Export Rights',
      'ICP Filing & Registration',
      'Pre-Approval Processing',
    ],
    phase: 'setup',
  },
  
  // Phase 2: Operations & Compliance
  {
    id: 'tax-compliance',
    title: 'Tax & Compliance',
    description: 'Ensuring your business stays fully compliant with China\'s tax regulations.',
    icon: null,
    servicePoints: [
      'Tax Registration & Setup',
      'Tax Type Education',
      'Tax Filing & Reporting',
      'Annual Audit Support',
      'Invoice Management System',
    ],
    phase: 'operations',
  },
  {
    id: 'financial-outsourcing',
    title: 'Financial Outsourcing',
    description: 'Professional outsourcing to streamline your financial management.',
    icon: null,
    servicePoints: [
      'Bookkeeping Services',
      'Payroll Management',
      'Tax Agency Services',
      'Expense Reimbursement',
      'Financial Reporting',
    ],
    phase: 'operations',
  },
  {
    id: 'hr-visa',
    title: 'HR & Visa',
    description: 'Managing your local and international workforce effectively.',
    icon: null,
    servicePoints: [
      'Employment Contract Management',
      'Social Insurance & Benefits',
      'Work Permit Processing',
      'Residence Permit Services',
      'Compensation System Design',
    ],
    phase: 'operations',
  },
  {
    id: 'cross-border-funds',
    title: 'Cross-border Funds Flow',
    description: 'Strategically managing your capital flows in and out of China.',
    icon: null,
    servicePoints: [
      'Profit Repatriation',
      'Cross-border Payments',
      'Foreign Debt Registration',
      'Cash Pool Management',
      'Foreign Exchange Compliance',
    ],
    phase: 'operations',
  },
  
  // Phase 3: Growth & Protection
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    description: 'Protecting your most valuable assets in the Chinese market.',
    icon: null,
    servicePoints: [
      'Trademark Registration',
      'Patent Consultation',
      'Software Copyright',
      'Brand Protection',
      'Infringement Response',
    ],
    phase: 'growth',
  },
  {
    id: 'digital-infrastructure',
    title: 'Digital Infrastructure',
    description: 'Building your online presence for the Chinese ecosystem.',
    icon: null,
    servicePoints: [
      'WeChat Official Account',
      'Website ICP Filing',
      '.cn Domain Registration',
      'Server Setup & Management',
      'Corporate Email Systems',
    ],
    phase: 'growth',
  },
  {
    id: 'policy-subsidy',
    title: 'Policy & Subsidy',
    description: 'Leveraging local policies and subsidies to accelerate your growth.',
    icon: null,
    servicePoints: [
      'Policy Interpretation',
      'Subsidy Applications',
      'High-Tech Certification',
      'Industrial Park Benefits',
      'Government Relations',
    ],
    phase: 'growth',
  },
];

// Get services by phase
export const getServicesByPhase = (phase: 'setup' | 'operations' | 'growth') => 
  services.filter(service => service.phase === phase);

// Get all phases
export const getPhases = () => [
  { id: 'setup', title: 'Market Entry & Setup', description: 'Establishing your legal foundation and operational infrastructure in China.' },
  { id: 'operations', title: 'Operations & Compliance', description: 'Maintaining smooth operations while ensuring full regulatory compliance.' },
  { id: 'growth', title: 'Growth & Protection', description: 'Protecting your assets and accelerating growth through strategic initiatives.' },
];
