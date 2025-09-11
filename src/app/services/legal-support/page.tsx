import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Support | China Business Solutions',
  description: 'Comprehensive legal support services for foreign companies in China. Contract review, dispute resolution, and legal compliance.',
  keywords: 'China legal support, contract review, dispute resolution, legal compliance, business law',
};

export default function LegalSupportPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">Legal Support</h1>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-xl text-gray-200 leading-relaxed">
              Protect your business interests with comprehensive legal support. Our legal experts provide guidance on Chinese business law, contract management, and dispute resolution.
            </p>

            <section>
              <h2 className="text-3xl font-semibold text-white mb-6">Our Legal Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Contract Management</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Contract drafting and review</li>
                    <li>• Agreement negotiation</li>
                    <li>• Contract compliance monitoring</li>
                    <li>• Risk assessment and mitigation</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Dispute Resolution</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Commercial dispute mediation</li>
                    <li>• Arbitration proceedings</li>
                    <li>• Litigation support</li>
                    <li>• Settlement negotiations</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Regulatory Compliance</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Business law compliance</li>
                    <li>• Regulatory change monitoring</li>
                    <li>• Compliance training</li>
                    <li>• Risk management</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Intellectual Property</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• IP protection strategies</li>
                    <li>• Trademark registration</li>
                    <li>• Patent applications</li>
                    <li>• IP infringement protection</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/30 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">Protect Your Business Interests</h2>
              <p className="text-gray-300 mb-6">
                Our legal experts will help you navigate Chinese business law and protect your company's interests in all legal matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="bg-accent-cyan text-background-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent-cyan-light transition-colors duration-300 text-center">
                  Get Legal Support
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
