'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function ModernWhoWeAre() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeMember, setActiveMember] = useState(0);

  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Managing Director",
      credentials: "Former MOFCOM Official, 12 years China regulatory experience",
      expertise: "WFOE Registration, Government Relations",
      avatar: "SC",
      color: "from-blue-500 to-cyan-400",
      achievements: ["500+ Companies Registered", "15+ Years Experience", "Zero Compliance Issues"]
    },
    {
      name: "David Thompson", 
      role: "Head of Legal",
      credentials: "Partner at Dentons Beijing, 15 years M&A experience",
      expertise: "Corporate Law, Cross-border Transactions",
      avatar: "DT",
      color: "from-purple-500 to-pink-400",
      achievements: ["$2B+ Transactions", "Top-tier Law Firm", "International Expertise"]
    },
    {
      name: "Lisa Wang",
      role: "Tax Director", 
      credentials: "Ex-PwC Tax Partner, CPA China & US",
      expertise: "Tax Planning, Transfer Pricing",
      avatar: "LW",
      color: "from-orange-500 to-red-400",
      achievements: ["Tax Optimization Expert", "Dual CPA License", "Big 4 Background"]
    }
  ];

  return (
    <section 
      ref={ref}
      className="py-32 sm:py-40 lg:py-48 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
      aria-labelledby="who-we-are-heading"
    >
      {/* Modern background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.05),transparent_50%)]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-50/10 to-purple-50/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Expert Team
          </div>
          
          <h2 
            id="who-we-are-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Meet the <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our team combines former government officials, Big 4 partners, and seasoned legal experts with deep China market knowledge.
          </p>
        </motion.div>

        {/* Modern Grid Layout */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 h-full cursor-pointer overflow-hidden">
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Floating avatar */}
                  <div className="relative z-10 mb-6">
                    <div className={`w-24 h-24 bg-gradient-to-br ${member.color} rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl`}>
                      <span className="text-white font-bold text-3xl">{member.avatar}</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className={`text-lg font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                      {member.role}
                    </p>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {member.credentials}
                    </p>
                    
                    {/* Specialization badge */}
                    <div className="inline-block">
                      <div className="bg-gray-50 rounded-2xl px-4 py-2 border border-gray-200 group-hover:bg-gray-100 transition-colors duration-300">
                        <p className="text-sm font-medium text-gray-700 mb-1">Specialization</p>
                        <p className="text-blue-600 font-semibold text-base">{member.expertise}</p>
                      </div>
                    </div>
                    
                    {/* Achievements */}
                    <div className="space-y-2 pt-2">
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center justify-center gap-2 text-sm text-gray-600">
                          <div className={`w-2 h-2 bg-gradient-to-r ${member.color} rounded-full flex-shrink-0`}></div>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Hover effect border */}
                  <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-${member.color.split(' ')[1]} group-hover:to-${member.color.split(' ')[3]} transition-all duration-500`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Former</div>
              <div className="text-sm text-gray-600">MOFCOM Officials</div>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Big 4</div>
              <div className="text-sm text-gray-600">Accounting Partners</div>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Top-tier</div>
              <div className="text-sm text-gray-600">Law Firm Partners</div>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Multilingual</div>
              <div className="text-sm text-gray-600">Local Experts</div>
            </div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Work with Our Experts?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get personalized consultation from our team of China market specialists. 
              Schedule a free 30-minute discovery call today.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Schedule Free Consultation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
