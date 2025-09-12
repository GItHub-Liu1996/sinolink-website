'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ServiceCard, RelatedInsights } from './_components';
import ServiceCategoryTabs from './_components/ServiceCategoryTabs';
import FeaturedServices from './_components/FeaturedServices';
import { Accordion } from '@/components';
import { servicesConfig, featuredServices } from './_components/servicesConfig';

// Metadata is handled in layout.tsx for client components

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

const iconMap = {
  LegalEntityIcon: <LegalEntityIcon />,
  BankAccountIcon: <BankAccountIcon />,
  PremisesIcon: <PremisesIcon />,
  IndustryLicensingIcon: <IndustryLicensingIcon />,
  TaxComplianceIcon: <TaxComplianceIcon />,
  FinancialOutsourcingIcon: <FinancialOutsourcingIcon />,
  HRVisaIcon: <HRVisaIcon />,
  CrossBorderFundsIcon: <CrossBorderFundsIcon />,
  IntellectualPropertyIcon: <IntellectualPropertyIcon />,
  DigitalInfrastructureIcon: <DigitalInfrastructureIcon />,
  PolicySubsidyIcon: <PolicySubsidyIcon />
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('market-entry');

  const categories = [
    {
      id: 'market-entry',
      title: 'Market Entry & Setup',
      description: 'Establishing your legal foundation and operational infrastructure in China.'
    },
    {
      id: 'operations',
      title: 'Operations & Compliance',
      description: 'Maintaining smooth operations while ensuring full regulatory compliance.'
    },
    {
      id: 'growth',
      title: 'Growth & Protection',
      description: 'Protecting your assets and accelerating growth through strategic initiatives.'
    }
  ];

  const currentServices = servicesConfig[activeCategory as keyof typeof servicesConfig];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-accent-primary rounded-full mr-2"></span>
            Professional Services
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-heading mb-6 font-sans leading-tight">
            An End-to-End Service Ecosystem
          </h1>
          <p className="text-xl text-text-main max-w-4xl mx-auto font-body leading-relaxed mb-8">
            Covering the entire lifecycle of your business in China—from initial setup to long-term growth. 
            Our comprehensive solutions ensure your success at every stage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center text-sm text-text-muted">
              <span className="w-8 h-8 bg-accent-primary/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-accent-primary font-bold">15+</span>
              </span>
              Years of Experience
            </div>
            <div className="flex items-center text-sm text-text-muted">
              <span className="w-8 h-8 bg-accent-primary/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-accent-primary font-bold">500+</span>
              </span>
              Successful Projects
            </div>
            <div className="flex items-center text-sm text-text-muted">
              <span className="w-8 h-8 bg-accent-primary/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-accent-primary font-bold">99%</span>
              </span>
              Success Rate
            </div>
          </div>
        </motion.div>

        {/* Featured Services */}
        <FeaturedServices services={featuredServices} />

        {/* Service Categories */}
        <ServiceCategoryTabs
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* All Services Section */}
        <section id="all-services" className="mb-20">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {currentServices.services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={iconMap[service.icon as keyof typeof iconMap] || <LegalEntityIcon />}
                title={service.title}
                description={service.description}
                servicePoints={service.servicePoints}
                href={service.href}
              />
            ))}
          </motion.div>
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
  );
}
