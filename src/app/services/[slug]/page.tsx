import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { servicesConfig } from '../_components/servicesConfig';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = servicesConfig[params.slug as keyof typeof servicesConfig];
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | China Business Solutions`,
    description: service.description,
    keywords: ['China business', 'market entry', 'compliance', 'WFOE registration'],
  };
}

export async function generateStaticParams() {
  return Object.keys(servicesConfig).map((slug) => ({
    slug: slug,
  }));
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = servicesConfig[params.slug as keyof typeof servicesConfig];
  
  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8">{service.title}</h1>
          
          <div className="text-gray-300 space-y-8">
            <p className="text-xl text-gray-200 leading-relaxed">
              {service.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="bg-background-secondary/50 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4">What We Offer</h2>
                <ul className="space-y-3">
                  {service.services.slice(0, 5).map((serviceItem, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent-cyan mr-3 mt-1">✓</span>
                      <span className="text-gray-300">{serviceItem.title}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background-secondary/50 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Why Choose Us</h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-accent-cyan mr-3 mt-1">✓</span>
                    <span className="text-gray-300">Expert local knowledge and regulatory expertise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-cyan mr-3 mt-1">✓</span>
                    <span className="text-gray-300">Streamlined processes and faster approvals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-cyan mr-3 mt-1">✓</span>
                    <span className="text-gray-300">Ongoing support and compliance monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-cyan mr-3 mt-1">✓</span>
                    <span className="text-gray-300">Cost-effective solutions tailored to your needs</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-accent-cyan/10 to-accent-magenta/10 rounded-xl p-8 my-12">
              <h2 className="text-2xl font-bold text-white mb-4">Process Overview</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Consultation</h3>
                  <p className="text-gray-300 text-sm">Initial discussion to understand your business needs and goals</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Planning</h3>
                  <p className="text-gray-300 text-sm">Detailed strategy development and documentation preparation</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Execution</h3>
                  <p className="text-gray-300 text-sm">Handling all regulatory processes and official submissions</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-cyan to-accent-magenta text-white font-semibold rounded-lg hover:from-accent-magenta hover:to-accent-cyan transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get Started Today
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
