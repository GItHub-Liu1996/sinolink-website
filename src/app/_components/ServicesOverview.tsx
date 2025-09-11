'use client';

import { motion } from 'framer-motion';
import SolutionCard from './SolutionCard';
import { CompanySetupIcon, OperationsSupportIcon, VisaServicesIcon } from '@/components/ui/icons';

export default function OurSolutions() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 lg:mb-12 text-text-heading font-sans leading-tight">
            Integrated Solutions for Every Stage.
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-text-main font-body leading-relaxed max-w-3xl mx-auto px-4">
            Comprehensive services designed to address every aspect of your China market entry and operations.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            viewport={{ once: true }}
          >
            <SolutionCard
              icon={<CompanySetupIcon />}
              title="Establish Your Presence"
              overviewText="From selecting the right legal structure to opening your bank accounts, we provide a seamless, end-to-end company formation service, ensuring you are established correctly and efficiently."
              services={['WFOE & JV Registration', 'Bank Account Opening', 'Company Chop Application', 'Initial Tax Registration']}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <SolutionCard
              icon={<OperationsSupportIcon />}
              title="Operate with Confidence"
              overviewText="Focus on your growth while we handle the complexities of day-to-day operations. Our expert accounting, tax, and HR services keep your business compliant and running smoothly."
              services={['Accounting & Tax Advisory', 'HR & Payroll Management', 'Annual Compliance & Audit', 'Business License Renewals']}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <SolutionCard
              icon={<VisaServicesIcon />}
              title="Mobilize Your Talent"
              overviewText="Bring your key international talent to China with ease. We manage the entire immigration process for your executives and their families, from work permits to residence permits."
              services={['Work Permit Applications', 'Business Visa Processing', 'Residence Permit Services', 'Family & Dependant Visa Support']}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
