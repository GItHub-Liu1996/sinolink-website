'use client';

import { motion } from 'framer-motion';

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Consultation & Strategy",
      description: "We start with a detailed consultation to understand your business goals and recommend the best structure for your China venture.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Document Preparation",
      description: "Our experts prepare all required documentation, ensuring compliance with Chinese regulations and requirements.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Government Submission",
      description: "We handle all government submissions and liaise with relevant authorities to ensure smooth processing.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      number: "4",
      title: "License & Handover",
      description: "Once approved, we deliver your business licenses and provide comprehensive handover with ongoing support.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-text-heading text-center mb-12 font-sans"
        >
          Our Process
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-accent-cyan to-accent-magenta rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mx-auto absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  {step.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-text-heading mb-4 font-sans">{step.title}</h3>
              <p className="text-text-main font-body leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Process Flow Arrow */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="hidden lg:block mt-12"
        >
          <div className="flex justify-center items-center space-x-4">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="flex items-center">
                <div className="w-8 h-0.5 bg-gradient-to-r from-accent-cyan to-accent-magenta"></div>
                <div className="w-0 h-0 border-l-4 border-l-accent-magenta border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
