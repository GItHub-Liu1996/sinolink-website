'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function AboutClient() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/60" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-text-heading mb-6 font-sans"
          >
            Your Ambition, Our Mission.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-text-main font-body leading-relaxed"
          >
            We were founded on a simple principle: to be the most trusted bridge for ambitious global companies entering the complex China market.
          </motion.p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6 font-sans">
              Our Core Values
            </h2>
            <p className="text-lg text-text-main max-w-3xl mx-auto font-body leading-relaxed">
              These principles guide every decision we make and every relationship we build.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Integrity First",
                description: "We believe in transparent communication, honest advice, and ethical business practices that build lasting trust.",
                icon: "🛡️"
              },
              {
                title: "Client Success",
                description: "Your success is our success. We measure our achievements by the growth and prosperity of our clients.",
                icon: "🎯"
              },
              {
                title: "Cultural Bridge",
                description: "We understand both Western business practices and Chinese market dynamics, creating seamless connections.",
                icon: "🌉"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-background-primary rounded-2xl border border-gray-700 hover:border-accent-cyan transition-all duration-300"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-text-heading mb-4 font-sans">{value.title}</h3>
                <p className="text-text-main font-body leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6 font-sans">
              Our Impact in Numbers
            </h2>
            <p className="text-lg text-text-main max-w-3xl mx-auto font-body leading-relaxed">
              Over a decade of experience, hundreds of successful projects, and countless satisfied clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-background-secondary rounded-2xl border border-gray-700"
            >
              <div className="text-4xl md:text-5xl font-bold text-accent-cyan mb-4 font-sans">
                <AnimatedCounter end={15} duration={2} />+
              </div>
              <h3 className="text-xl font-bold text-text-heading mb-2 font-sans">Years of Experience</h3>
              <p className="text-text-main font-body">Deep expertise in China business landscape</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-background-secondary rounded-2xl border border-gray-700"
            >
              <div className="text-4xl md:text-5xl font-bold text-accent-cyan mb-4 font-sans">
                <AnimatedCounter end={500} duration={2} />+
              </div>
              <h3 className="text-xl font-bold text-text-heading mb-2 font-sans">Successful Projects</h3>
              <p className="text-text-main font-body">Companies launched and thriving in China</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-background-secondary rounded-2xl border border-gray-700"
            >
              <div className="text-4xl md:text-5xl font-bold text-accent-cyan mb-4 font-sans">
                98%
              </div>
              <h3 className="text-xl font-bold text-text-heading mb-2 font-sans">Client Satisfaction</h3>
              <p className="text-text-main font-body">Consistently high client retention rate</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6 font-sans">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-text-main max-w-3xl mx-auto font-body leading-relaxed">
              A diverse team of professionals with deep local knowledge and international experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Founder & CEO",
                description: "15+ years in China business consulting, former McKinsey consultant",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "David Wang",
                role: "Head of Legal Affairs",
                description: "Expert in Chinese corporate law and regulatory compliance",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "Lisa Zhang",
                role: "Tax & Finance Director",
                description: "CPA with extensive experience in China tax planning",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-background-primary rounded-2xl p-8 border border-gray-700 hover:border-accent-cyan transition-all duration-300"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-text-heading mb-2 font-sans">{member.name}</h3>
                <p className="text-accent-cyan font-semibold mb-4">{member.role}</p>
                <p className="text-text-main font-body leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6 font-sans">
              Ready to Start Your China Journey?
            </h2>
            <p className="text-lg text-text-main mb-8 font-body leading-relaxed">
              Let our experienced team guide you through every step of your China market entry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-accent-cyan to-accent-magenta hover:from-accent-magenta hover:to-accent-cyan text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                href="/services"
                className="border-2 border-accent-cyan hover:bg-accent-cyan hover:text-background-primary text-accent-cyan px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
