import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partnership Setup | China Business Solutions',
  description: 'Strategic partnership development services in China. Find and establish partnerships with local companies, suppliers, and distributors.',
  keywords: 'China partnerships, joint ventures, strategic alliances, partnership development, business partnerships',
};

export default function PartnershipPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">Partnership Setup</h1>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-xl text-gray-200 leading-relaxed">
              Build strategic partnerships that drive your China success. Our partnership services help you identify, evaluate, and establish relationships with the right local partners.
            </p>

            <section>
              <h2 className="text-3xl font-semibold text-white mb-6">Our Partnership Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Partner Identification</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Potential partner research</li>
                    <li>• Industry network mapping</li>
                    <li>• Partner qualification assessment</li>
                    <li>• Due diligence support</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Partnership Development</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Partnership strategy design</li>
                    <li>• Negotiation support</li>
                    <li>• Agreement structuring</li>
                    <li>• Relationship management</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Joint Ventures</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• JV structure design</li>
                    <li>• Legal framework setup</li>
                    <li>• Governance structure</li>
                    <li>• Performance monitoring</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Distribution Partnerships</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Distributor identification</li>
                    <li>• Channel strategy development</li>
                    <li>• Partnership agreements</li>
                    <li>• Performance optimization</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/30 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">Build Strategic Partnerships</h2>
              <p className="text-gray-300 mb-6">
                Our partnership experts will help you identify and establish the right strategic partnerships to accelerate your China market success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="bg-accent-cyan text-background-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent-cyan-light transition-colors duration-300 text-center">
                  Find Partners
                </a>
                <a href="/insights" className="border border-accent-cyan text-accent-cyan px-6 py-3 rounded-lg font-semibold hover:bg-accent-cyan hover:text-background-primary transition-colors duration-300 text-center">
                  Learn More
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
