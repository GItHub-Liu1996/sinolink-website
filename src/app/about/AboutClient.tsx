'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { EmbeddedConsultationQuiz } from '@/components';

export default function AboutClient() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/50" />
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-8 font-heading leading-tight"
            style={{ color: '#FFFFFF' }}
          >
            Your Ambition, Our Mission.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-body leading-relaxed max-w-4xl mx-auto"
            style={{ color: '#FFFFFF' }}
          >
            We were founded on a simple principle: to be the most trusted bridge for ambitious global companies entering the complex China market.
          </motion.p>
          
          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex justify-center"
          >
            <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-magenta rounded-full shadow-lg"></div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section - Advanced card stacking design */}
      <section className="py-24 bg-background-primary relative overflow-hidden">
        {/* Dynamic background */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/3 via-transparent to-accent-magenta/3"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-accent-cyan/8 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-accent-magenta/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-text-heading mb-6 font-heading">
              Our Core Values
            </h2>
            <p className="text-xl text-text-main max-w-4xl mx-auto font-body leading-relaxed">
              These principles guide every decision we make and every relationship we build.
            </p>
          </motion.div>

          {/* Advanced card stacking design */}
          <div className="relative">
            {/* Main card container */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Integrity First",
                  description: "We believe in transparent communication, honest advice, and ethical business practices that build lasting trust.",
                  icon: (
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  color: "accent-cyan",
                  gradient: "from-accent-cyan to-accent-cyan/80",
                  bgColor: "bg-accent-cyan/5",
                  borderColor: "border-accent-cyan/20"
                },
                {
                  title: "Client Success",
                  description: "Your success is our success. We measure our achievements by the growth and prosperity of our clients.",
                  icon: (
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  ),
                  color: "accent-magenta",
                  gradient: "from-accent-magenta to-accent-magenta/80",
                  bgColor: "bg-accent-magenta/5",
                  borderColor: "border-accent-magenta/20"
                },
                {
                  title: "Cultural Bridge",
                  description: "We understand both Western business practices and Chinese market dynamics, creating seamless connections.",
                  icon: (
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  ),
                  color: "accent-orange",
                  gradient: "from-accent-orange to-accent-orange/80",
                  bgColor: "bg-accent-orange/5",
                  borderColor: "border-accent-orange/20"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* Card stacking effect */}
                  <div className="relative">
                    {/* Background cards */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-3xl transform rotate-1 scale-95 opacity-20 group-hover:rotate-2 group-hover:scale-100 transition-all duration-500`}></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-3xl transform -rotate-1 scale-98 opacity-10 group-hover:-rotate-2 group-hover:scale-105 transition-all duration-700`}></div>
                    
                    {/* Main card */}
                    <div className={`relative bg-white rounded-3xl p-8 border-2 ${value.borderColor} shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-105`}>
                      {/* Icon area */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        {value.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-text-heading mb-4 font-heading group-hover:text-accent-cyan transition-colors duration-300">
                          {value.title}
                        </h3>
                        <div className={`w-12 h-1 bg-gradient-to-r ${value.gradient} rounded-full mx-auto mb-6 group-hover:w-16 transition-all duration-300`}></div>
                        <p className="text-text-main font-body leading-relaxed group-hover:text-text-heading transition-colors duration-300">
                          {value.description}
                        </p>
                      </div>
                      
                      {/* 悬停时的装饰元素 */}
                      <div className={`absolute top-4 right-4 w-8 h-8 ${value.bgColor} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`}></div>
                      <div className={`absolute bottom-4 left-4 w-6 h-6 ${value.bgColor} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125`}></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 底部数据展示 - 紧凑网格 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "100%", label: "Ethical Standards", color: "accent-cyan" },
                { value: "98%", label: "Client Retention", color: "accent-magenta" },
                { value: "24/7", label: "Support", color: "accent-orange" },
                { value: "500+", label: "Success Stories", color: "green-500" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group"
                >
                  <div className={`text-3xl font-bold text-${stat.color} font-heading mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-main font-body">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              className="text-center p-8 bg-white rounded-3xl border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
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
              className="text-center p-8 bg-white rounded-3xl border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
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
              className="text-center p-8 bg-white rounded-3xl border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
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
                className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-xl hover:shadow-2xl hover:border-accent-cyan transition-all duration-300 hover:-translate-y-1 group"
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

             {/* Smart Consultation Quiz Section */}
             <section className="py-8 bg-gradient-to-br from-gray-50 to-gray-100">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <EmbeddedConsultationQuiz
                   title="To Better Understand Your Needs"
                   subtitle="Answer a few questions to get personalized business consultation and recommendations"
                   showTitle={true}
                   maxQuestions={11}
                 />
        </div>
      </section>
    </div>
  );
}
