import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visa Services | China Business Solutions',
  description: 'Comprehensive visa and immigration services for foreign employees in China. Work permits, residence permits, and visa applications.',
  keywords: 'China visa services, work permit, residence permit, immigration, visa application',
};

export default function VisaServicesPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">Visa Services</h1>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-xl text-gray-200 leading-relaxed">
              Navigate China's visa and immigration requirements with ease. Our visa services ensure your foreign employees can work legally and efficiently in China.
            </p>

            <section>
              <h2 className="text-3xl font-semibold text-white mb-6">Our Visa Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Work Permit Applications</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Foreign Expert Work Permit</li>
                    <li>• General Work Permit</li>
                    <li>• Work permit renewal</li>
                    <li>• Work permit transfer</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Residence Permits</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Work residence permit</li>
                    <li>• Family residence permit</li>
                    <li>• Student residence permit</li>
                    <li>• Residence permit renewal</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Visa Applications</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Z-visa (work visa)</li>
                    <li>• M-visa (business visa)</li>
                    <li>• F-visa (visitor visa)</li>
                    <li>• X-visa (student visa)</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Documentation Support</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Document preparation</li>
                    <li>• Authentication services</li>
                    <li>• Translation services</li>
                    <li>• Application tracking</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/30 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">Streamline Your Visa Process</h2>
              <p className="text-gray-300 mb-6">
                Our visa experts will handle all the paperwork and ensure your foreign employees can start working in China as quickly as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="bg-accent-cyan text-background-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent-cyan-light transition-colors duration-300 text-center">
                  Get Visa Support
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
