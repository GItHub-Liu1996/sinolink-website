import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Research Reports | China Business Solutions',
  description: 'In-depth research reports and whitepapers on China market trends, regulatory changes, and business opportunities.',
  keywords: 'China market research, whitepapers, business reports, market analysis, industry insights',
};

export default function WhitepapersPage() {
  const whitepapers = [
    {
      title: 'China Market Entry Guide 2025',
      description: 'Comprehensive guide covering the latest regulatory changes, market trends, and entry strategies for foreign companies.',
      category: 'Market Entry',
      date: 'January 2025',
      pages: '45',
      downloadUrl: '#'
    },
    {
      title: 'WFOE Registration: Complete Process Guide',
      description: 'Step-by-step guide to WFOE registration, including document requirements, timelines, and common pitfalls to avoid.',
      category: 'Legal & Compliance',
      date: 'December 2024',
      pages: '32',
      downloadUrl: '#'
    },
    {
      title: 'China Tax System: A Foreign Investor\'s Guide',
      description: 'Understanding China\'s tax landscape, including corporate tax, VAT, and transfer pricing regulations.',
      category: 'Tax & Finance',
      date: 'November 2024',
      pages: '38',
      downloadUrl: '#'
    },
    {
      title: 'Digital Economy Opportunities in China',
      description: 'Analysis of China\'s digital transformation and opportunities for foreign tech companies.',
      category: 'Technology',
      date: 'October 2024',
      pages: '28',
      downloadUrl: '#'
    },
    {
      title: 'HR & Visa Requirements for Foreign Employees',
      description: 'Complete guide to hiring foreign talent in China, including visa requirements and compliance obligations.',
      category: 'Human Resources',
      date: 'September 2024',
      pages: '24',
      downloadUrl: '#'
    },
    {
      title: 'China\'s E-commerce Landscape 2024',
      description: 'Market analysis of China\'s e-commerce ecosystem and strategies for foreign brands.',
      category: 'E-commerce',
      date: 'August 2024',
      pages: '41',
      downloadUrl: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Research Reports</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access our comprehensive research reports and whitepapers covering the latest trends, regulations, and opportunities in the Chinese market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {whitepapers.map((paper, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-accent-cyan text-background-primary px-3 py-1 rounded-full text-sm font-semibold">
                  {paper.category}
                </span>
                <span className="text-gray-400 text-sm">{paper.pages} pages</span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-cyan transition-colors duration-300">
                {paper.title}
              </h3>
              
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {paper.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">{paper.date}</span>
                <a 
                  href={paper.downloadUrl}
                  className="text-accent-cyan hover:text-accent-cyan-light font-semibold text-sm transition-colors duration-300"
                >
                  Download PDF →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800/30 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Stay Updated with Our Research</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest research reports, market insights, and regulatory updates directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-accent-cyan text-background-primary px-8 py-3 rounded-lg font-semibold hover:bg-accent-cyan-light transition-colors duration-300">
              Subscribe Now
            </Link>
            <Link href="/insights" className="border border-accent-cyan text-accent-cyan px-8 py-3 rounded-lg font-semibold hover:bg-accent-cyan hover:text-background-primary transition-colors duration-300">
              View All Insights
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
