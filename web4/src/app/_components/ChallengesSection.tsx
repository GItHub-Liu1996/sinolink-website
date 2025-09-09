'use client';

import { motion } from 'framer-motion';
import { HoverEffect } from '@/components/ui/hover-effect';

export default function ChallengesSection() {
  const challenges = [
    {
      title: "Will my business get lost in Chinese bureaucracy?",
      description: "Maps with Clarity.",
      link: "#",
      hoverTitle: "Maps with Clarity.",
      hoverDescription: "Our streamlined process and expert government relations ensure a smooth, compliant registration from day one. We handle the paperwork, so you can focus on your business."
    },
    {
      title: "Are my finances and taxes being handled correctly and transparently?",
      description: "Achieve Full Compliance.",
      link: "#",
      hoverTitle: "Achieve Full Compliance.",
      hoverDescription: "Gain complete peace of mind. We provide rigorous, bilingual accounting and tax advisory to ensure you're always audit-ready and in control."
    },
    {
      title: "How do I manage hiring, contracts, and daily operations in a new culture?",
      description: "Operate with Confidence.",
      link: "#",
      hoverTitle: "Operate with Confidence.",
      hoverDescription: "From HR and payroll to intellectual property protection, we provide the ongoing operational support you need to thrive long-term in the China market."
    }
  ];

  return (
    <section className="py-24 bg-background-primary relative z-0">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-text-heading font-sans">
            Anticipate Challenges Before They Become Problems.
          </h2>
          <p className="text-lg text-text-main font-body leading-relaxed max-w-3xl mx-auto">
            We turn your biggest uncertainties into your greatest strengths.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <HoverEffect 
            items={challenges.map(challenge => ({
              title: challenge.title,
              description: challenge.description,
              link: challenge.link,
              hoverTitle: challenge.hoverTitle,
              hoverDescription: challenge.hoverDescription
            }))}
            className="max-w-6xl mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
