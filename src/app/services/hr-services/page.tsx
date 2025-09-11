import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HR Services | China Business Solutions',
  description: 'Comprehensive HR services for foreign companies in China. Recruitment, payroll, benefits, and compliance management.',
  keywords: 'China HR services, recruitment, payroll, benefits, HR compliance',
};

export default function HRServicesPage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">HR Services</h1>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-xl text-gray-200 leading-relaxed">
              Build and manage your China team with confidence. Our comprehensive HR services cover everything from recruitment to compliance, ensuring your human resources operations run smoothly.
            </p>

            <section>
              <h2 className="text-3xl font-semibold text-white mb-6">Our HR Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Recruitment & Staffing</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Executive search and placement</li>
                    <li>• Local talent acquisition</li>
                    <li>• Background verification</li>
                    <li>• Interview coordination</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Payroll & Benefits</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Payroll processing and management</li>
                    <li>• Social insurance administration</li>
                    <li>• Benefits package design</li>
                    <li>• Compensation benchmarking</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">HR Compliance</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Labor law compliance</li>
                    <li>• Employment contract management</li>
                    <li>• Workplace safety compliance</li>
                    <li>• HR policy development</li>
                  </ul>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-accent-cyan mb-4">Training & Development</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Cross-cultural training</li>
                    <li>• Leadership development</li>
                    <li>• Technical skills training</li>
                    <li>• Performance management</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-gray-800/30 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-white mb-4">Build Your China Team</h2>
              <p className="text-gray-300 mb-6">
                Our HR experts will help you attract, retain, and develop top talent while ensuring full compliance with Chinese labor regulations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="bg-accent-cyan text-background-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent-cyan-light transition-colors duration-300 text-center">
                  Get HR Support
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
