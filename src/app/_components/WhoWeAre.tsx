'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function WhoWeAre() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Managing Director",
      credentials: "Former MOFCOM Official, 12 years China regulatory experience",
      expertise: "WFOE Registration, Government Relations",
      avatar: "SC",
      color: "from-accent-cyan to-accent-magenta"
    },
    {
      name: "David Thompson", 
      role: "Head of Legal",
      credentials: "Partner at Dentons Beijing, 15 years M&A experience",
      expertise: "Corporate Law, Cross-border Transactions",
      avatar: "DT",
      color: "from-accent-magenta to-accent-orange"
    },
    {
      name: "Lisa Wang",
      role: "Tax Director", 
      credentials: "Ex-PwC Tax Partner, CPA China & US",
      expertise: "Tax Planning, Transfer Pricing",
      avatar: "LW",
      color: "from-accent-orange to-yellow-500"
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-20 sm:py-24 lg:py-32 bg-background-secondary relative overflow-hidden"
      aria-labelledby="who-we-are-heading"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-accent-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-magenta/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-orange/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            id="who-we-are-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-heading font-heading leading-tight mb-6"
          >
            Meet Our Expert Team
          </h2>
          <p className="text-lg sm:text-xl text-text-main font-body leading-relaxed max-w-3xl mx-auto">
            Our team combines former government officials, Big 4 partners, and seasoned legal experts with deep China market knowledge.
          </p>
        </motion.div>

        {/* Creative team display - Circular layout */}
        <div className="relative">
          {/* Central core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-accent-cyan to-accent-magenta rounded-full flex items-center justify-center shadow-2xl z-10"
          >
            <div className="text-center text-white">
              <div className="text-2xl font-bold font-heading">15+</div>
              <div className="text-sm font-body">Years</div>
            </div>
          </motion.div>

          {/* Team members - Circular arrangement */}
          <div className="relative h-96 flex items-center justify-center">
            {teamMembers.map((member, index) => {
              const angle = (index * 120) * (Math.PI / 180); // 120 degree intervals
              const radius = 180; // radius
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
                  whileInView={{ opacity: 1, scale: 1, x, y }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                  className="absolute"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  <div className="bg-white rounded-3xl p-6 w-64 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                    {/* Avatar */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${member.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white font-bold text-lg font-heading">{member.avatar}</span>
                    </div>
                    
                    {/* Information */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-text-heading mb-2 font-heading">
                        {member.name}
                      </h3>
                      <p className={`text-${member.color.split(' ')[0].replace('from-', '')} font-semibold mb-3 font-body`}>
                        {member.role}
                      </p>
                      <p className="text-sm text-text-main mb-3 font-body leading-relaxed">
                        {member.credentials}
                      </p>
                      <p className="text-sm text-accent-magenta font-medium font-body">
                        {member.expertise}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom statistics - Wave design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-accent-cyan/10 via-accent-magenta/10 to-accent-orange/10 rounded-3xl p-8 border-2 border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent-cyan font-heading">Former</div>
                <div className="text-sm text-text-main font-body">MOFCOM Officials</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent-magenta font-heading">Big 4</div>
                <div className="text-sm text-text-main font-body">Accounting Partners</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent-orange font-heading">Top-tier</div>
                <div className="text-sm text-text-main font-body">Law Firm Partners</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-green-500 font-heading">Multilingual</div>
                <div className="text-sm text-text-main font-body">Local Experts</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}