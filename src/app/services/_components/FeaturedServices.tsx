'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import {
  LegalEntityIcon,
  TaxComplianceIcon,
  BankAccountIcon,
  HRVisaIcon
} from './ServiceIcons';

const iconMap = {
  LegalEntityIcon: <LegalEntityIcon />,
  TaxComplianceIcon: <TaxComplianceIcon />,
  BankAccountIcon: <BankAccountIcon />,
  HRVisaIcon: <HRVisaIcon />
};

interface FeaturedService {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  category: string;
}

interface FeaturedServicesProps {
  services: FeaturedService[];
}

export default function FeaturedServices({ services }: FeaturedServicesProps) {
  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-text-heading mb-4">
          Our Most Popular Services
        </h2>
        <p className="text-lg text-text-main max-w-3xl mx-auto">
          Start with these essential services that most businesses need for their China operations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ServiceCard
              icon={iconMap[service.icon as keyof typeof iconMap] || <LegalEntityIcon />}
              title={service.title}
              description={service.description}
              servicePoints={[]}
              href={service.href}
              isCompact={true}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href="#all-services"
          className="inline-flex items-center gap-2 bg-accent-cyan text-background-primary px-8 py-4 rounded-xl font-semibold hover:bg-accent-cyan-light transition-colors duration-300"
        >
          View All Services
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
