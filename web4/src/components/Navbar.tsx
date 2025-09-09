import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-background/90 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-text-heading">
            ChinaBiz
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-text-main hover:text-text-heading transition-colors">
              About
            </Link>
            <Link href="/services" className="text-text-main hover:text-text-heading transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-text-main hover:text-text-heading transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
