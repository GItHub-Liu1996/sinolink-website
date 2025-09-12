import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'City Guides | GoChinaAdvisors',
  description: 'Comprehensive city guides for doing business in China. Learn about Shanghai, Beijing, Shenzhen, and other major business hubs.',
  keywords: 'city guides, China cities, Shanghai, Beijing, Shenzhen, business hubs, market entry',
};

export default function CityGuidesPage() {
  const cities = [
    {
      name: 'Shanghai',
      description: 'China\'s financial capital and gateway to international business',
      image: '/images/cities/shanghai.jpg',
      highlights: ['Financial Hub', 'International Trade', 'Free Trade Zones', 'Expat Community'],
      businessAdvantages: [
        'Largest financial center in China',
        'Well-established international business community',
        'Multiple free trade zones',
        'Excellent infrastructure and connectivity'
      ]
    },
    {
      name: 'Beijing',
      description: 'Political center and headquarters for many multinational corporations',
      image: '/images/cities/beijing.jpg',
      highlights: ['Government Relations', 'Tech Innovation', 'Cultural Heritage', 'Policy Center'],
      businessAdvantages: [
        'Close proximity to government agencies',
        'Strong tech and innovation ecosystem',
        'Rich talent pool',
        'Cultural and historical significance'
      ]
    },
    {
      name: 'Shenzhen',
      description: 'China\'s Silicon Valley and manufacturing powerhouse',
      image: '/images/cities/shenzhen.jpg',
      highlights: ['Tech Innovation', 'Manufacturing', 'Startup Hub', 'SEZ Benefits'],
      businessAdvantages: [
        'Leading technology and innovation center',
        'Strong manufacturing ecosystem',
        'Special Economic Zone benefits',
        'Young and dynamic workforce'
      ]
    },
    {
      name: 'Guangzhou',
      description: 'Traditional trading hub with strong manufacturing base',
      image: '/images/cities/guangzhou.jpg',
      highlights: ['Trade Hub', 'Manufacturing', 'Canton Fair', 'Logistics'],
      businessAdvantages: [
        'Historic trading center',
        'Strong manufacturing industry',
        'Canton Fair headquarters',
        'Excellent logistics network'
      ]
    },
    {
      name: 'Hangzhou',
      description: 'E-commerce capital and emerging tech center',
      image: '/images/cities/hangzhou.jpg',
      highlights: ['E-commerce', 'Tech Innovation', 'Alibaba HQ', 'Digital Economy'],
      businessAdvantages: [
        'E-commerce capital of China',
        'Alibaba headquarters',
        'Strong digital economy',
        'Beautiful city with high quality of life'
      ]
    },
    {
      name: 'Chengdu',
      description: 'Western China\'s economic center and tech hub',
      image: '/images/cities/chengdu.jpg',
      highlights: ['Western Hub', 'Tech Innovation', 'Cost Effective', 'Quality of Life'],
      businessAdvantages: [
        'Gateway to Western China',
        'Lower operating costs',
        'Strong tech industry',
        'Excellent quality of life'
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-text-heading mb-6">
            City Guides
          </h1>
          <p className="text-xl text-text-main max-w-3xl mx-auto">
            Comprehensive city guides for doing business in China. Learn about Shanghai, Beijing, Shenzhen, and other major business hubs.
          </p>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {cities.map((city, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-accent-cyan/20 to-accent-magenta/20 flex items-center justify-center">
                <span className="text-4xl font-bold text-text-heading">{city.name}</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-text-heading mb-3">{city.name}</h3>
                <p className="text-text-main mb-4">{city.description}</p>
                
                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-text-heading mb-2">Key Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {city.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-accent-cyan/10 text-accent-cyan text-xs rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Business Advantages */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-text-heading mb-2">Business Advantages:</h4>
                  <ul className="space-y-1">
                    {city.businessAdvantages.slice(0, 2).map((advantage, idx) => (
                      <li key={idx} className="text-sm text-text-main flex items-start">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {advantage}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={`/city-guides/${city.name.toLowerCase()}`}
                  className="w-full bg-gradient-to-r from-accent-cyan to-accent-magenta hover:from-accent-magenta hover:to-accent-cyan text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 text-center block shadow-sm hover:shadow-md"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-text-heading mb-8 text-center">
            City Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-text-heading">City</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-text-heading">Industry Focus</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-text-heading">Cost Level</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-text-heading">Expat Community</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-text-heading">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-semibold text-text-heading">Shanghai</td>
                  <td className="px-6 py-4 text-text-main">Finance, Trade, Services</td>
                  <td className="px-6 py-4 text-text-main">High</td>
                  <td className="px-6 py-4 text-text-main">Large</td>
                  <td className="px-6 py-4 text-text-main">International Business</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-text-heading">Beijing</td>
                  <td className="px-6 py-4 text-text-main">Government, Tech, Innovation</td>
                  <td className="px-6 py-4 text-text-main">High</td>
                  <td className="px-6 py-4 text-text-main">Large</td>
                  <td className="px-6 py-4 text-text-main">Government Relations</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-text-heading">Shenzhen</td>
                  <td className="px-6 py-4 text-text-main">Tech, Manufacturing, Innovation</td>
                  <td className="px-6 py-4 text-text-main">Medium</td>
                  <td className="px-6 py-4 text-text-main">Growing</td>
                  <td className="px-6 py-4 text-text-main">Tech Startups</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-text-heading">Guangzhou</td>
                  <td className="px-6 py-4 text-text-main">Trade, Manufacturing, Logistics</td>
                  <td className="px-6 py-4 text-text-main">Medium</td>
                  <td className="px-6 py-4 text-text-main">Medium</td>
                  <td className="px-6 py-4 text-text-main">Manufacturing</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-text-heading">Hangzhou</td>
                  <td className="px-6 py-4 text-text-main">E-commerce, Digital Economy</td>
                  <td className="px-6 py-4 text-text-main">Medium</td>
                  <td className="px-6 py-4 text-text-main">Small</td>
                  <td className="px-6 py-4 text-text-main">E-commerce</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-text-heading">Chengdu</td>
                  <td className="px-6 py-4 text-text-main">Tech, Manufacturing, Services</td>
                  <td className="px-6 py-4 text-text-main">Low</td>
                  <td className="px-6 py-4 text-text-main">Small</td>
                  <td className="px-6 py-4 text-text-main">Cost-Effective Operations</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text-heading mb-4">
            Need Help Choosing the Right City?
          </h2>
          <p className="text-lg text-text-main mb-8">
            Our experts can help you select the best city for your business and guide you through the setup process.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-accent-cyan to-accent-magenta hover:from-accent-magenta hover:to-accent-cyan text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Get City Selection Advice
          </a>
        </div>
      </div>
    </div>
  );
}
