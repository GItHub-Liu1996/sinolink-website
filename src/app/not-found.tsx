import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "404 - Page Not Found | ChinaBiz Solutions",
  description: "Sorry, the page you are looking for does not exist. Return to our homepage to explore our China business services.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background-primary flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-8xl sm:text-9xl font-bold text-accent-cyan mb-4 font-sans">
            404
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-cyan to-accent-magenta mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-sans">
            Page Not Found
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 font-body leading-relaxed">
            Sorry, the page you are looking for does not exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="bg-gradient-to-r from-accent-cyan to-accent-magenta hover:from-accent-magenta hover:to-accent-cyan text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-block"
          >
            Go Back Home
          </Link>
          <Link 
            href="/contact"
            className="border-2 border-accent-cyan hover:bg-accent-cyan hover:text-background-primary text-accent-cyan px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 inline-block"
          >
            Contact Support
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-400 mb-6 font-body">You might be looking for:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <Link 
              href="/services" 
              className="text-gray-400 hover:text-accent-cyan transition-colors duration-300 p-3 rounded-lg hover:bg-background-secondary/50"
            >
              Our Services
            </Link>
            <Link 
              href="/about" 
              className="text-gray-400 hover:text-accent-cyan transition-colors duration-300 p-3 rounded-lg hover:bg-background-secondary/50"
            >
              About Us
            </Link>
            <Link 
              href="/insights" 
              className="text-gray-400 hover:text-accent-cyan transition-colors duration-300 p-3 rounded-lg hover:bg-background-secondary/50"
            >
              Insights & Resources
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-400 hover:text-accent-cyan transition-colors duration-300 p-3 rounded-lg hover:bg-background-secondary/50"
            >
              Contact Us
            </Link>
            <Link 
              href="/privacy-policy" 
              className="text-gray-400 hover:text-accent-cyan transition-colors duration-300 p-3 rounded-lg hover:bg-background-secondary/50"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms-of-service" 
              className="text-gray-400 hover:text-accent-cyan transition-colors duration-300 p-3 rounded-lg hover:bg-background-secondary/50"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center space-x-4">
          <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-accent-magenta rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-2 h-2 bg-accent-cyan rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  );
}
