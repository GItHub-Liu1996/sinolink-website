'use client';

import { motion } from 'framer-motion';
import { ServiceCard, RelatedInsights } from './_components';
import { Accordion } from '@/components';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Services | ChinaBiz Solutions",
  description: "Explore our comprehensive suite of services, covering market entry, daily operations, compliance, HR, and intellectual property in China.",
  keywords: [
    "China business services",
    "WFOE registration services",
    "China market entry",
    "business compliance China",
    "China consulting services",
    "foreign investment China",
    "China business setup",
    "China operations support"
  ],
  openGraph: {
    title: "Our Services | ChinaBiz Solutions",
    description: "Explore our comprehensive suite of services, covering market entry, daily operations, compliance, HR, and intellectual property in China.",
    url: "https://sinolink-website.vercel.app/services",
    siteName: "ChinaBiz Solutions",
    type: "website",
  },
  alternates: {
    canonical: "https://sinolink-website.vercel.app/services",
  },
};

import {
  LegalEntityIcon,
  BankAccountIcon,
  PremisesIcon,
  IndustryLicensingIcon,
  TaxComplianceIcon,
  FinancialOutsourcingIcon,
  HRVisaIcon,
  CrossBorderFundsIcon,
  IntellectualPropertyIcon,
  DigitalInfrastructureIcon,
  PolicySubsidyIcon
} from './_components';

export default function Services() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-text-heading mb-6 font-sans">
            An End-to-End Service Ecosystem
          </h1>
          <p className="text-xl text-text-main max-w-3xl mx-auto font-body leading-relaxed">
            Covering the entire lifecycle of your business in China—from initial setup to long-term growth.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Left Sidebar - Sticky Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <nav className="space-y-2">
                <a
                  href="#setup"
                  className="block px-4 py-3 text-text-main hover:text-accent-cyan hover:bg-background-secondary rounded-lg transition-all duration-200 font-medium"
                >
                  Market Entry & Setup
                </a>
                <a
                  href="#operations"
                  className="block px-4 py-3 text-text-main hover:text-accent-cyan hover:bg-background-secondary rounded-lg transition-all duration-200 font-medium"
                >
                  Operations & Compliance
                </a>
                <a
                  href="#growth"
                  className="block px-4 py-3 text-text-main hover:text-accent-cyan hover:bg-background-secondary rounded-lg transition-all duration-200 font-medium"
                >
                  Growth & Protection
                </a>
              </nav>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-3 space-y-16">
            {/* Phase 1: Market Entry & Setup */}
            <section id="setup" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-text-heading mb-4 font-sans">
                  Phase 1: Market Entry & Setup
                </h2>
                <p className="text-lg text-text-main font-body leading-relaxed">
                  Establishing your legal foundation and operational infrastructure in China.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ServiceCard
                  icon={<LegalEntityIcon />}
                  title="Legal Entity"
                  description="Building a solid legal foundation for your success."
                  servicePoints={[
                    'Company Type Selection',
                    'Equity Structure Design',
                    'Business Scope Definition',
                    'Registered Capital Setup',
                    'Company Naming & Registration'
                  ]}
                />

                <ServiceCard
                  icon={<BankAccountIcon />}
                  title="Bank Account Opening"
                  description="Navigating the complexities of corporate banking in China."
                  servicePoints={[
                    'Corporate Account Setup',
                    'Capital Account Opening',
                    'Multi-Currency Accounts',
                    'Bank Interview Facilitation',
                    'KYC Compliance Support'
                  ]}
                />

                <ServiceCard
                  icon={<PremisesIcon />}
                  title="Premises & Property"
                  description="Securing the right physical or virtual space for your business."
                  servicePoints={[
                    'Virtual Office Solutions',
                    'Physical Office Setup',
                    'Lease Agreement Negotiation',
                    'Property Management Liaison',
                    'Location Analysis & Selection'
                  ]}
                />

                <ServiceCard
                  icon={<IndustryLicensingIcon />}
                  title="Industry Licensing"
                  description="Obtaining the necessary licenses and permits for your specific industry."
                  servicePoints={[
                    'Special Permits & Licenses',
                    'Qualification Applications',
                    'Import/Export Rights',
                    'ICP Filing & Registration',
                    'Pre-Approval Processing'
                  ]}
                />
              </div>

              {/* Related Insights for Market Entry & Setup */}
              <RelatedInsights
                articles={[
                  {
                    id: 'wfoe-guide',
                    title: 'Complete Guide to WFOE Registration in China',
                    link: '/insights/wfoe-registration-guide'
                  },
                  {
                    id: 'bank-account-setup',
                    title: 'Opening Corporate Bank Accounts: A Step-by-Step Guide',
                    link: '/insights/bank-account-setup'
                  },
                  {
                    id: 'business-licenses',
                    title: 'Understanding China Business Licenses and Permits',
                    link: '/insights/business-licenses'
                  }
                ]}
              />
            </section>

            {/* Phase 2: Operations & Compliance */}
            <section id="operations" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-text-heading mb-4 font-sans">
                  Phase 2: Operations & Compliance
                </h2>
                <p className="text-lg text-text-main font-body leading-relaxed">
                  Maintaining smooth operations while ensuring full regulatory compliance.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ServiceCard
                  icon={<TaxComplianceIcon />}
                  title="Tax & Compliance"
                  description="Ensuring your business stays fully compliant with China's tax regulations."
                  servicePoints={[
                    'Tax Registration & Setup',
                    'Tax Type Education',
                    'Tax Filing & Reporting',
                    'Annual Audit Support',
                    'Invoice Management System'
                  ]}
                />

                <ServiceCard
                  icon={<FinancialOutsourcingIcon />}
                  title="Financial Outsourcing"
                  description="Professional outsourcing to streamline your financial management."
                  servicePoints={[
                    'Bookkeeping Services',
                    'Payroll Management',
                    'Tax Agency Services',
                    'Expense Reimbursement',
                    'Financial Reporting'
                  ]}
                />

                <ServiceCard
                  icon={<HRVisaIcon />}
                  title="HR & Visa"
                  description="Managing your local and international workforce effectively."
                  servicePoints={[
                    'Employment Contract Management',
                    'Social Insurance & Benefits',
                    'Work Permit Processing',
                    'Residence Permit Services',
                    'Compensation System Design'
                  ]}
                />

                <ServiceCard
                  icon={<CrossBorderFundsIcon />}
                  title="Cross-border Funds Flow"
                  description="Strategically managing your capital flows in and out of China."
                  servicePoints={[
                    'Profit Repatriation',
                    'Cross-border Payments',
                    'Foreign Debt Registration',
                    'Cash Pool Management',
                    'Foreign Exchange Compliance'
                  ]}
                />
              </div>

              {/* Related Insights for Operations & Compliance */}
              <RelatedInsights
                articles={[
                  {
                    id: 'tax-compliance-guide',
                    title: 'China Tax Compliance: A Comprehensive Guide',
                    link: '/insights/tax-compliance-guide'
                  },
                  {
                    id: 'hr-visa-process',
                    title: 'HR and Visa Management in China: Best Practices',
                    link: '/insights/hr-visa-process'
                  },
                  {
                    id: 'financial-outsourcing',
                    title: 'Financial Outsourcing Services: What You Need to Know',
                    link: '/insights/financial-outsourcing'
                  }
                ]}
              />
            </section>

            {/* Phase 3: Growth & Protection */}
            <section id="growth" className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-text-heading mb-4 font-sans">
                  Phase 3: Growth & Protection
                </h2>
                <p className="text-lg text-text-main font-body leading-relaxed">
                  Protecting your assets and accelerating growth through strategic initiatives.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ServiceCard
                  icon={<IntellectualPropertyIcon />}
                  title="Intellectual Property"
                  description="Protecting your most valuable assets in the Chinese market."
                  servicePoints={[
                    'Trademark Registration',
                    'Patent Consultation',
                    'Software Copyright',
                    'Brand Protection',
                    'Infringement Response'
                  ]}
                />

                <ServiceCard
                  icon={<DigitalInfrastructureIcon />}
                  title="Digital Infrastructure"
                  description="Building your online presence for the Chinese ecosystem."
                  servicePoints={[
                    'WeChat Official Account',
                    'Website ICP Filing',
                    '.cn Domain Registration',
                    'Server Setup & Management',
                    'Corporate Email Systems'
                  ]}
                />

                <ServiceCard
                  icon={<PolicySubsidyIcon />}
                  title="Policy & Subsidy"
                  description="Leveraging local policies and subsidies to accelerate your growth."
                  servicePoints={[
                    'Policy Interpretation',
                    'Subsidy Applications',
                    'High-Tech Certification',
                    'Industrial Park Benefits',
                    'Government Relations'
                  ]}
                />
              </div>

              {/* Related Insights for Growth & Protection */}
              <RelatedInsights
                articles={[
                  {
                    id: 'ip-protection',
                    title: 'Intellectual Property Protection in China',
                    link: '/insights/ip-protection'
                  },
                  {
                    id: 'digital-infrastructure',
                    title: 'Building Your Digital Presence in China',
                    link: '/insights/digital-infrastructure'
                  },
                  {
                    id: 'government-subsidies',
                    title: 'Government Subsidies and Incentives for Foreign Companies',
                    link: '/insights/government-subsidies'
                  }
                ]}
              />
            </section>

            {/* FAQ Section */}
            <section className="mt-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-text-heading mb-4 font-sans">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-text-main font-body leading-relaxed max-w-3xl mx-auto">
                  Get answers to the most common questions about our services and China business operations.
                </p>
              </motion.div>

              <Accordion
                items={[
                  {
                    id: 'wfoe-timeframe',
                    question: 'What is the typical timeframe for a WFOE registration?',
                    answer: 'The standard timeframe is typically 2-3 months from the submission of all required documents. However, this can vary based on the city of registration and the specific industry.'
                  },
                  {
                    id: 'physical-office',
                    question: 'Is a physical office required to register a company in China?',
                    answer: 'While a physical office is generally required, we offer solutions such as virtual addresses for registration purposes, providing flexibility for your initial setup.'
                  },
                  {
                    id: 'profit-repatriation',
                    question: 'How do I legally get my profits out of China?',
                    answer: 'Profits can be legally repatriated to your home country as dividends after the annual corporate income tax reconciliation. We provide comprehensive guidance to ensure this process is smooth and compliant.'
                  }
                ]}
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}