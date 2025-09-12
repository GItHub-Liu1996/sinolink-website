import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing & Process | GoChinaAdvisors',
  description: 'Transparent pricing and clear process for our China market entry services. Understand our fees and step-by-step approach.',
  keywords: 'pricing, process, China business, market entry, WFOE registration, fees',
};

export default function PricingProcessPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text-heading mb-6">
            Pricing & Process
          </h1>
          <p className="text-xl text-text-main max-w-3xl mx-auto">
            Transparent pricing and clear process for our China market entry services. Understand our fees and step-by-step approach.
          </p>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-heading mb-8 text-center">
            Service Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-text-heading mb-2">Basic</h3>
                <div className="text-4xl font-bold text-accent-cyan mb-2">¥15,000</div>
                <p className="text-text-main">Essential services for simple business setups</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Company Registration
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Basic Legal Support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Email Support
                </li>
              </ul>
              <a
                href="/contact"
                className="w-full bg-gray-100 hover:bg-gray-200 text-text-heading py-3 px-6 rounded-lg font-semibold transition-colors duration-300 text-center block"
              >
                Get Started
              </a>
            </div>

            {/* Professional Package */}
            <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-accent-cyan relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent-cyan text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-text-heading mb-2">Professional</h3>
                <div className="text-4xl font-bold text-accent-cyan mb-2">¥35,000</div>
                <p className="text-text-main">Comprehensive solution for most businesses</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Complete WFOE Registration
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Bank Account Opening
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Tax Registration
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Priority Support
                </li>
              </ul>
              <a
                href="/contact"
                className="w-full bg-gradient-to-r from-accent-cyan to-accent-magenta hover:from-accent-magenta hover:to-accent-cyan text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
            </div>

            {/* Enterprise Package */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-text-heading mb-2">Enterprise</h3>
                <div className="text-4xl font-bold text-accent-cyan mb-2">Custom</div>
                <p className="text-text-main">Tailored solutions for complex requirements</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Full Service Suite
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Dedicated Account Manager
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 Support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom Solutions
                </li>
              </ul>
              <a
                href="/contact"
                className="w-full bg-gray-100 hover:bg-gray-200 text-text-heading py-3 px-6 rounded-lg font-semibold transition-colors duration-300 text-center block"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-text-heading mb-8 text-center">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-cyan">1</span>
              </div>
              <h3 className="text-xl font-semibold text-text-heading mb-2">Consultation</h3>
              <p className="text-text-main">Initial discussion to understand your business needs and goals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-cyan">2</span>
              </div>
              <h3 className="text-xl font-semibold text-text-heading mb-2">Planning</h3>
              <p className="text-text-main">Detailed strategy development and documentation preparation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-cyan">3</span>
              </div>
              <h3 className="text-xl font-semibold text-text-heading mb-2">Execution</h3>
              <p className="text-text-main">Handling all regulatory processes and official submissions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-cyan">4</span>
              </div>
              <h3 className="text-xl font-semibold text-text-heading mb-2">Support</h3>
              <p className="text-text-main">Ongoing assistance and compliance monitoring.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text-heading mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-text-main mb-8">
            Contact us today for a free consultation and personalized quote.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-accent-cyan to-accent-magenta hover:from-accent-magenta hover:to-accent-cyan text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
