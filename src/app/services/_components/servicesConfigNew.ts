export interface ServiceConfig {
  slug: string;
  title: string;
  description: string;
  keywords: string;
  features: string[];
  benefits: string[];
  process: {
    title: string;
    description: string;
  }[];
}

export const servicesConfig: ServiceConfig[] = [
  {
    slug: 'accounting',
    title: 'Accounting Services',
    description: 'Maintain accurate financial records and ensure compliance with Chinese accounting standards. Our professional accounting services keep your business financially sound and compliant.',
    keywords: 'China accounting services, bookkeeping, financial reporting, accounting compliance',
    features: [
      'Monthly bookkeeping and financial statements',
      'VAT and tax compliance reporting',
      'Payroll processing and management',
      'Financial analysis and budgeting',
      'Audit preparation and support'
    ],
    benefits: [
      'Expert knowledge of Chinese accounting standards',
      'Automated reporting systems',
      'Real-time financial insights',
      'Compliance guarantee',
      'Cost-effective solutions'
    ],
    process: [
      {
        title: 'Assessment',
        description: 'Review your current accounting needs and requirements'
      },
      {
        title: 'Setup',
        description: 'Configure accounting systems and processes'
      },
      {
        title: 'Ongoing Support',
        description: 'Provide continuous accounting and reporting services'
      }
    ]
  },
  {
    slug: 'business-planning',
    title: 'Business Planning',
    description: 'Develop comprehensive business strategies tailored for the Chinese market. Our planning services help you navigate market complexities and achieve sustainable growth.',
    keywords: 'China business planning, market strategy, business development, strategic planning',
    features: [
      'Market entry strategy development',
      'Business model optimization',
      'Financial projections and planning',
      'Risk assessment and mitigation',
      'Growth strategy formulation'
    ],
    benefits: [
      'Local market expertise',
      'Data-driven insights',
      'Customized strategies',
      'Risk mitigation',
      'Competitive advantage'
    ],
    process: [
      {
        title: 'Analysis',
        description: 'Analyze market conditions and business requirements'
      },
      {
        title: 'Strategy Development',
        description: 'Create comprehensive business strategies'
      },
      {
        title: 'Implementation',
        description: 'Support strategy execution and monitoring'
      }
    ]
  },
  {
    slug: 'consulting',
    title: 'Business Consulting',
    description: 'Expert consulting services to help you navigate the complexities of doing business in China. Get strategic advice from experienced professionals.',
    keywords: 'China business consulting, strategic advice, business development, market entry',
    features: [
      'Strategic business advice',
      'Market entry consulting',
      'Regulatory compliance guidance',
      'Operational optimization',
      'Risk management consulting'
    ],
    benefits: [
      'Expert local knowledge',
      'Proven methodologies',
      'Customized solutions',
      'Ongoing support',
      'Cost-effective advice'
    ],
    process: [
      {
        title: 'Consultation',
        description: 'Initial consultation to understand your needs'
      },
      {
        title: 'Analysis',
        description: 'Deep analysis of your business situation'
      },
      {
        title: 'Recommendations',
        description: 'Provide actionable recommendations and support'
      }
    ]
  },
  {
    slug: 'expansion',
    title: 'Business Expansion',
    description: 'Scale your operations in China with our comprehensive expansion services. From new markets to operational scaling, we help you grow strategically.',
    keywords: 'China business expansion, scaling operations, market expansion, business growth',
    features: [
      'Market expansion planning',
      'Operational scaling strategies',
      'New location setup',
      'Team expansion support',
      'Technology integration'
    ],
    benefits: [
      'Scalable solutions',
      'Market expertise',
      'Operational efficiency',
      'Risk management',
      'Sustainable growth'
    ],
    process: [
      {
        title: 'Planning',
        description: 'Develop expansion strategy and roadmap'
      },
      {
        title: 'Execution',
        description: 'Implement expansion plans systematically'
      },
      {
        title: 'Optimization',
        description: 'Monitor and optimize expansion results'
      }
    ]
  },
  {
    slug: 'hr-services',
    title: 'HR Services',
    description: 'Comprehensive human resources services for your China operations. From recruitment to payroll, we handle all your HR needs.',
    keywords: 'China HR services, recruitment, payroll, employee management, HR compliance',
    features: [
      'Recruitment and staffing',
      'Payroll processing',
      'Employee onboarding',
      'HR policy development',
      'Compliance management'
    ],
    benefits: [
      'Local talent network',
      'Compliance expertise',
      'Cost-effective solutions',
      'Scalable services',
      'Expert support'
    ],
    process: [
      {
        title: 'Assessment',
        description: 'Evaluate your HR needs and requirements'
      },
      {
        title: 'Implementation',
        description: 'Set up HR systems and processes'
      },
      {
        title: 'Management',
        description: 'Ongoing HR management and support'
      }
    ]
  },
  {
    slug: 'legal-support',
    title: 'Legal Support',
    description: 'Professional legal services to ensure your business operates within Chinese law. Get expert legal advice and support for all your business needs.',
    keywords: 'China legal services, business law, legal compliance, legal advice',
    features: [
      'Contract drafting and review',
      'Legal compliance consulting',
      'Dispute resolution',
      'Intellectual property protection',
      'Regulatory guidance'
    ],
    benefits: [
      'Expert legal knowledge',
      'Local law expertise',
      'Risk mitigation',
      'Compliance assurance',
      'Cost-effective solutions'
    ],
    process: [
      {
        title: 'Consultation',
        description: 'Initial legal consultation and assessment'
      },
      {
        title: 'Service Delivery',
        description: 'Provide legal services and support'
      },
      {
        title: 'Ongoing Support',
        description: 'Continuous legal support and monitoring'
      }
    ]
  },
  {
    slug: 'market-entry',
    title: 'Market Entry Strategy',
    description: 'Comprehensive market entry services to help you successfully enter the Chinese market. From planning to execution, we guide you every step of the way.',
    keywords: 'China market entry, business setup, market entry strategy, China business',
    features: [
      'Market research and analysis',
      'Entry strategy development',
      'Regulatory compliance setup',
      'Local partnership development',
      'Market entry execution'
    ],
    benefits: [
      'Market expertise',
      'Proven methodologies',
      'Risk mitigation',
      'Local connections',
      'Comprehensive support'
    ],
    process: [
      {
        title: 'Research',
        description: 'Conduct market research and analysis'
      },
      {
        title: 'Strategy',
        description: 'Develop market entry strategy'
      },
      {
        title: 'Execution',
        description: 'Execute market entry plan'
      }
    ]
  },
  {
    slug: 'market-research',
    title: 'Market Research',
    description: 'In-depth market research services to help you understand the Chinese market landscape. Get valuable insights for your business decisions.',
    keywords: 'China market research, market analysis, business intelligence, market insights',
    features: [
      'Market size and opportunity analysis',
      'Competitive landscape research',
      'Consumer behavior studies',
      'Industry trend analysis',
      'Market entry feasibility studies'
    ],
    benefits: [
      'Data-driven insights',
      'Local market knowledge',
      'Comprehensive analysis',
      'Actionable recommendations',
      'Cost-effective research'
    ],
    process: [
      {
        title: 'Planning',
        description: 'Define research objectives and methodology'
      },
      {
        title: 'Data Collection',
        description: 'Collect market data and information'
      },
      {
        title: 'Analysis',
        description: 'Analyze data and provide insights'
      }
    ]
  },
  {
    slug: 'partnership',
    title: 'Partnership Development',
    description: 'Build strategic partnerships in China to accelerate your business growth. We help you identify and develop valuable business relationships.',
    keywords: 'China partnerships, business partnerships, strategic alliances, partnership development',
    features: [
      'Partner identification and screening',
      'Partnership negotiation support',
      'Due diligence services',
      'Partnership agreement drafting',
      'Relationship management'
    ],
    benefits: [
      'Local network access',
      'Expert negotiation support',
      'Risk assessment',
      'Relationship building',
      'Strategic guidance'
    ],
    process: [
      {
        title: 'Identification',
        description: 'Identify potential partners and opportunities'
      },
      {
        title: 'Evaluation',
        description: 'Evaluate and screen potential partners'
      },
      {
        title: 'Development',
        description: 'Develop and manage partnerships'
      }
    ]
  },
  {
    slug: 'tax-compliance',
    title: 'Tax Compliance',
    description: 'Ensure full compliance with Chinese tax regulations. Our tax experts help you navigate complex tax requirements and optimize your tax position.',
    keywords: 'China tax compliance, tax services, tax planning, tax optimization',
    features: [
      'Tax registration and setup',
      'Monthly tax filing and reporting',
      'Tax planning and optimization',
      'Tax audit support',
      'Transfer pricing compliance'
    ],
    benefits: [
      'Tax expertise',
      'Compliance assurance',
      'Cost optimization',
      'Risk mitigation',
      'Ongoing support'
    ],
    process: [
      {
        title: 'Setup',
        description: 'Set up tax registration and systems'
      },
      {
        title: 'Compliance',
        description: 'Ensure ongoing tax compliance'
      },
      {
        title: 'Optimization',
        description: 'Optimize tax position and planning'
      }
    ]
  },
  {
    slug: 'visa-services',
    title: 'Visa Services',
    description: 'Comprehensive visa and immigration services for your international team. We handle all visa applications and immigration requirements.',
    keywords: 'China visa services, work permits, immigration, visa applications',
    features: [
      'Work permit applications',
      'Residence permit processing',
      'Visa renewal services',
      'Family visa support',
      'Immigration consulting'
    ],
    benefits: [
      'Expert immigration knowledge',
      'High success rates',
      'Comprehensive support',
      'Time-efficient processing',
      'Ongoing assistance'
    ],
    process: [
      {
        title: 'Assessment',
        description: 'Assess visa requirements and eligibility'
      },
      {
        title: 'Application',
        description: 'Prepare and submit visa applications'
      },
      {
        title: 'Support',
        description: 'Provide ongoing visa support and renewal'
      }
    ]
  },
  {
    slug: 'wfoe-registration',
    title: 'WFOE Registration',
    description: 'Complete WFOE (Wholly Foreign-Owned Enterprise) registration services. We guide you through the entire process from planning to operation.',
    keywords: 'WFOE registration, China company registration, foreign investment, business registration',
    features: [
      'Company name reservation',
      'Business scope definition',
      'Registered capital setup',
      'Government approvals',
      'Business license acquisition'
    ],
    benefits: [
      'Expert guidance',
      'Fast processing',
      'Compliance assurance',
      'Cost-effective service',
      'Ongoing support'
    ],
    process: [
      {
        title: 'Planning',
        description: 'Plan company structure and requirements'
      },
      {
        title: 'Registration',
        description: 'Complete registration process'
      },
      {
        title: 'Setup',
        description: 'Set up operational infrastructure'
      }
    ]
  }
];
