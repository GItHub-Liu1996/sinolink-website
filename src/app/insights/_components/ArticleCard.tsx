'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface ArticleCardProps {
  category: string;
  title: string;
  excerpt: string;
  image?: string;
  readTime?: string;
  date: string;
  href?: string;
  featured?: boolean;
}

// Category tag style mapping
const getCategoryStyle = (category: string) => {
  const categoryLower = category.toLowerCase();
  
  if (categoryLower.includes('market') || categoryLower.includes('entry')) {
    return 'bg-gradient-to-r from-blue-500/20 to-blue-600/20 text-black border-blue-500/30';
  } else if (categoryLower.includes('operations') || categoryLower.includes('compliance')) {
    return 'bg-gradient-to-r from-green-500/20 to-green-600/20 text-black border-green-500/30';
  } else if (categoryLower.includes('hr') || categoryLower.includes('visa')) {
    return 'bg-gradient-to-r from-purple-500/20 to-purple-600/20 text-black border-purple-500/30';
  } else if (categoryLower.includes('growth') || categoryLower.includes('protection')) {
    return 'bg-gradient-to-r from-orange-500/20 to-orange-600/20 text-black border-orange-500/30';
  } else {
    return 'bg-gradient-to-r from-accent-cyan/20 to-accent-magenta/20 text-black border-accent-cyan/30';
  }
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  category,
  title,
  excerpt,
  image,
  readTime,
  date,
  href = "#",
  featured = false
}) => {
  return (
    <Link href={href} className="group block">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        whileHover={{ y: -8, scale: 1.02 }}
        className={`bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-accent-primary transition-all duration-300 shadow-lg hover:shadow-2xl group-hover:shadow-2xl ${
          featured ? 'shadow-xl' : ''
        }`}
      >
        {/* Image */}
        <div className={`relative ${featured ? 'h-64' : 'h-48'} overflow-hidden`}>
          <Image
            src={image || 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60'}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            quality={65}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
          <div className="absolute top-4 left-4">
            <span className={`px-3 py-1 rounded-full text-sm font-semibold border ${getCategoryStyle(category)}`}>
              {category}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className={`${featured ? 'p-8' : 'p-6'}`}>
          <h3 className={`font-bold text-black mb-3 font-sans line-clamp-2 group-hover:text-accent-cyan transition-colors duration-300 ${
            featured ? 'text-2xl' : 'text-xl'
          }`}>
            {title}
          </h3>
          <p className={`text-gray-800 font-body leading-relaxed mb-4 line-clamp-3 ${
            featured ? 'text-lg' : 'text-base'
          }`}>
            {excerpt}
          </p>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <span>{readTime || '5 min read'}</span>
              <span>•</span>
              <span>{new Date(date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>
          
          <div className="inline-flex items-center space-x-2 text-accent-cyan group-hover:text-accent-magenta font-semibold transition-colors duration-300">
            <span>Read More</span>
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </motion.article>
    </Link>
  );
};

export default ArticleCard;
