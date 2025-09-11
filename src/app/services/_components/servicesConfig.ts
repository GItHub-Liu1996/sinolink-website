// Service configuration mapping
export const servicesConfig = {
  'market-entry': {
    title: 'Market Entry & Setup',
    description: 'Establishing your legal foundation and operational infrastructure in China.',
    services: [
      {
        id: 'legal-entity',
        title: 'Legal Entity',
        description: 'Building a solid legal foundation for your success.',
        href: '/services/wfoe-registration',
        icon: 'LegalEntityIcon',
        servicePoints: [
          'Company Type Selection',
          'Equity Structure Design',
          'Business Scope Definition',
          'Registered Capital Setup',
          'Company Naming & Registration'
        ]
      },
      {
        id: 'bank-account',
        title: 'Bank Account Opening',
        description: 'Navigating the complexities of corporate banking in China.',
        href: '/services/accounting',
        icon: 'BankAccountIcon',
        servicePoints: [
          'Corporate Account Setup',
          'Capital Account Opening',
          'Multi-Currency Accounts',
          'Bank Interview Facilitation',
          'KYC Compliance Support'
        ]
      },
      {
        id: 'premises',
        title: 'Premises & Property',
        description: 'Securing the right physical or virtual space for your business.',
        href: '/services/consulting',
        icon: 'PremisesIcon',
        servicePoints: [
          'Virtual Office Solutions',
          'Physical Office Setup',
          'Lease Agreement Negotiation',
          'Property Management Liaison',
          'Location Analysis & Selection'
        ]
      },
      {
        id: 'industry-licensing',
        title: 'Industry Licensing',
        description: 'Obtaining the necessary licenses and permits for your specific industry.',
        href: '/services/legal-support',
        icon: 'IndustryLicensingIcon',
        servicePoints: [
          'Special Permits & Licenses',
          'Qualification Applications',
          'Import/Export Rights',
          'ICP Filing & Registration',
          'Pre-Approval Processing'
        ]
      }
    ]
  },
  'operations': {
    title: 'Operations & Compliance',
    description: 'Maintaining smooth operations while ensuring full regulatory compliance.',
    services: [
      {
        id: 'tax-compliance',
        title: 'Tax & Compliance',
        description: 'Ensuring your business stays fully compliant with China\'s tax regulations.',
        href: '/services/tax-compliance',
        icon: 'TaxComplianceIcon',
        servicePoints: [
          'Tax Registration & Setup',
          'Tax Type Education',
          'Tax Filing & Reporting',
          'Annual Audit Support',
          'Invoice Management System'
        ]
      },
      {
        id: 'financial-outsourcing',
        title: 'Financial Outsourcing',
        description: 'Professional outsourcing to streamline your financial management.',
        href: '/services/accounting',
        icon: 'FinancialOutsourcingIcon',
        servicePoints: [
          'Bookkeeping Services',
          'Payroll Management',
          'Tax Agency Services',
          'Expense Reimbursement',
          'Financial Reporting'
        ]
      },
      {
        id: 'hr-visa',
        title: 'HR & Visa',
        description: 'Managing your local and international workforce effectively.',
        href: '/services/hr-services',
        icon: 'HRVisaIcon',
        servicePoints: [
          'Employment Contract Management',
          'Social Insurance & Benefits',
          'Work Permit Processing',
          'Residence Permit Services',
          'Compensation System Design'
        ]
      },
      {
        id: 'cross-border-funds',
        title: 'Cross-border Funds Flow',
        description: 'Strategically managing your capital flows in and out of China.',
        href: '/services/consulting',
        icon: 'CrossBorderFundsIcon',
        servicePoints: [
          'Profit Repatriation',
          'Cross-border Payments',
          'Foreign Debt Registration',
          'Cash Pool Management',
          'Foreign Exchange Compliance'
        ]
      }
    ]
  },
  'growth': {
    title: 'Growth & Protection',
    description: 'Protecting your assets and accelerating growth through strategic initiatives.',
    services: [
      {
        id: 'intellectual-property',
        title: 'Intellectual Property',
        description: 'Protecting your most valuable assets in the Chinese market.',
        href: '/services/legal-support',
        icon: 'IntellectualPropertyIcon',
        servicePoints: [
          'Trademark Registration',
          'Patent Consultation',
          'Software Copyright',
          'Brand Protection',
          'Infringement Response'
        ]
      },
      {
        id: 'digital-infrastructure',
        title: 'Digital Infrastructure',
        description: 'Building your online presence for the Chinese ecosystem.',
        href: '/services/consulting',
        icon: 'DigitalInfrastructureIcon',
        servicePoints: [
          'WeChat Official Account',
          'Website ICP Filing',
          '.cn Domain Registration',
          'Server Setup & Management',
          'Corporate Email Systems'
        ]
      },
      {
        id: 'policy-subsidy',
        title: 'Policy & Subsidy',
        description: 'Leveraging local policies and subsidies to accelerate your growth.',
        href: '/services/consulting',
        icon: 'PolicySubsidyIcon',
        servicePoints: [
          'Policy Interpretation',
          'Subsidy Applications',
          'High-Tech Certification',
          'Industrial Park Benefits',
          'Government Relations'
        ]
      }
    ]
  }
};

// Featured services for the hero section
export const featuredServices = [
  {
    id: 'wfoe-registration',
    title: 'WFOE Registration',
    description: 'Complete WFOE registration services with expert guidance.',
    href: '/services/wfoe-registration',
    icon: 'LegalEntityIcon',
    category: 'Market Entry'
  },
  {
    id: 'tax-compliance',
    title: 'Tax Compliance',
    description: 'Comprehensive tax compliance and optimization services.',
    href: '/services/tax-compliance',
    icon: 'TaxComplianceIcon',
    category: 'Operations'
  },
  {
    id: 'market-entry',
    title: 'Market Entry Strategy',
    description: 'Strategic guidance for successful China market entry.',
    href: '/services/market-entry',
    icon: 'BankAccountIcon',
    category: 'Strategy'
  },
  {
    id: 'hr-services',
    title: 'HR Services',
    description: 'Complete HR and visa management solutions.',
    href: '/services/hr-services',
    icon: 'HRVisaIcon',
    category: 'Operations'
  }
];
