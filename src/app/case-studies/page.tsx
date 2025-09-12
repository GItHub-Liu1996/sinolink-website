import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | GoChinaAdvisors',
  description: 'Explore real success stories of foreign businesses that have successfully entered and grown in the Chinese market.',
  keywords: 'case studies, success stories, China business, market entry, WFOE registration',
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text-heading mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-text-main max-w-3xl mx-auto">
            Explore real success stories of foreign businesses that have successfully entered and grown in the Chinese market.
          </p>
        </div>

        {/* Placeholder Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500">Case Study Image</span>
            </div>
            <h3 className="text-xl font-semibold text-text-heading mb-2">
              Tech Startup Success Story
            </h3>
            <p className="text-text-main mb-4">
              How a European tech startup successfully registered their WFOE and scaled operations in Shanghai.
            </p>
            <div className="text-sm text-accent-cyan font-medium">
              Read Full Case Study →
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500">Case Study Image</span>
            </div>
            <h3 className="text-xl font-semibold text-text-heading mb-2">
              Manufacturing Company Expansion
            </h3>
            <p className="text-text-main mb-4">
              A US manufacturing company's journey from market research to full-scale production in China.
            </p>
            <div className="text-sm text-accent-cyan font-medium">
              Read Full Case Study →
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
            <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-500">Case Study Image</span>
            </div>
            <h3 className="text-xl font-semibold text-text-heading mb-2">
              Service Industry Breakthrough
            </h3>
            <p className="text-text-main mb-4">
              How a consulting firm navigated regulatory compliance and built a thriving practice in Beijing.
            </p>
            <div className="text-sm text-accent-cyan font-medium">
              Read Full Case Study →
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-text-heading mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-text-main mb-8">
            Let us help you navigate the complexities of the Chinese market and achieve your business goals.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-accent-cyan to-accent-magenta hover:from-accent-magenta hover:to-accent-cyan text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </div>
  );
}
