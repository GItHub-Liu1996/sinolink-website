import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Business Tools | China Business Solutions',
  description: 'Practical business tools, calculators, and templates to help you navigate China market entry and operations.',
  keywords: 'China business tools, calculators, templates, market entry tools, business planning',
};

export default function ToolsPage() {
  const tools = [
    {
      title: 'WFOE Registration Cost Calculator',
      description: 'Estimate the total cost of WFOE registration including government fees, legal costs, and operational expenses.',
      category: 'Registration',
      type: 'Calculator',
      icon: '💰'
    },
    {
      title: 'Market Entry Timeline Planner',
      description: 'Interactive timeline tool to plan your China market entry process from initial research to full operations.',
      category: 'Planning',
      type: 'Planner',
      icon: '📅'
    },
    {
      title: 'Business Scope Generator',
      description: 'AI-powered tool to help you define the optimal business scope for your WFOE registration.',
      category: 'Registration',
      type: 'Generator',
      icon: '🤖'
    },
    {
      title: 'Tax Compliance Checklist',
      description: 'Comprehensive checklist to ensure your business meets all Chinese tax compliance requirements.',
      category: 'Compliance',
      type: 'Checklist',
      icon: '✅'
    },
    {
      title: 'HR Policy Templates',
      description: 'Ready-to-use HR policy templates customized for Chinese labor law requirements.',
      category: 'Human Resources',
      type: 'Template',
      icon: '📋'
    },
    {
      title: 'Market Research Questionnaire',
      description: 'Structured questionnaire to guide your China market research and competitive analysis.',
      category: 'Research',
      type: 'Template',
      icon: '📊'
    },
    {
      title: 'Partnership Agreement Template',
      description: 'Legal template for establishing partnerships with Chinese companies and suppliers.',
      category: 'Legal',
      type: 'Template',
      icon: '📝'
    },
    {
      title: 'ROI Calculator for China Operations',
      description: 'Calculate potential return on investment for your China market entry and operations.',
      category: 'Finance',
      type: 'Calculator',
      icon: '📈'
    }
  ];

  const categories = ['All', 'Registration', 'Planning', 'Compliance', 'Human Resources', 'Research', 'Legal', 'Finance'];

  return (
    <div className="min-h-screen bg-background-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">Business Tools</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Access our collection of practical tools, calculators, and templates designed to streamline your China market entry and operations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full border border-gray-600 text-gray-300 hover:border-accent-cyan hover:text-accent-cyan transition-colors duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-700/50 transition-all duration-300 group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{tool.icon}</span>
                <span className="bg-accent-cyan text-background-primary px-3 py-1 rounded-full text-sm font-semibold">
                  {tool.type}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-accent-cyan transition-colors duration-300">
                {tool.title}
              </h3>
              
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {tool.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">{tool.category}</span>
                <a 
                  href="#"
                  className="text-accent-cyan hover:text-accent-cyan-light font-semibold text-sm transition-colors duration-300"
                >
                  Access Tool →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800/30 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">Need Custom Tools?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Our team can develop custom tools and calculators tailored to your specific industry and business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-accent-cyan text-background-primary px-8 py-3 rounded-lg font-semibold hover:bg-accent-cyan-light transition-colors duration-300">
              Request Custom Tool
            </Link>
            <Link href="/services" className="border border-accent-cyan text-accent-cyan px-8 py-3 rounded-lg font-semibold hover:bg-accent-cyan hover:text-background-primary transition-colors duration-300">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
