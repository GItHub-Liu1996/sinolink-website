'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { articles } from '@/config/articles';

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter articles based on category and search
  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(articles.map(article => article.category)))];

  return (
    <div className="min-h-screen bg-background">
      {/* Compact Header */}
      <section className="py-12 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-text-heading mb-4 font-sans">
              News & Insights
            </h1>
            <p className="text-base text-text-main font-body max-w-2xl mx-auto">
              Expert insights and practical guidance for your China business journey.
            </p>
          </div>

          {/* Compact Filters and Search */}
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
            {/* Category Filters - Horizontal Scroll on Mobile */}
            <div className="flex gap-2 overflow-x-auto pb-2 w-full lg:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-accent-cyan text-white'
                      : 'bg-white border border-gray-300 text-text-main hover:border-accent-cyan hover:text-accent-cyan'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Compact Search Bar */}
            <div className="relative w-full lg:w-64">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 pl-9 bg-white border border-gray-300 rounded-lg text-text-main placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all duration-300 text-sm"
              />
              <svg
                className="absolute left-2.5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Results count */}
          <div className="text-sm text-text-main mb-6">
            Showing {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </div>
        </div>
      </section>

      {/* Articles Grid - Start immediately */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-text-heading mb-2">No articles found</h3>
              <p className="text-text-main">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredArticles.map((article) => (
                <Link key={article.id} href={`/insights/blog/${article.slug}`} className="group block">
                  <article className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-accent-cyan transition-all duration-300 shadow-sm hover:shadow-lg group-hover:shadow-lg h-full">
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={article.image || 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60'}
                        alt={article.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        quality={65}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 rounded-full text-xs font-semibold bg-accent-cyan/90 text-white backdrop-blur-sm">
                          {article.category}
                        </span>
                      </div>
                      {article.featured && (
                        <div className="absolute top-3 right-3">
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-accent-magenta/90 text-white backdrop-blur-sm">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Content */}
                    <div className="p-4 flex flex-col h-full">
                      <h3 className="text-lg font-bold text-text-heading mb-2 font-sans line-clamp-2 group-hover:text-accent-cyan transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-sm text-text-main font-body leading-relaxed mb-3 line-clamp-2 flex-grow">
                        {article.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-text-main mb-3">
                        <span>{article.readTime}</span>
                        <span>•</span>
                        <span>{new Date(article.publishDate).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}</span>
                      </div>
                      
                      <div className="inline-flex items-center space-x-1 text-accent-cyan group-hover:text-accent-magenta font-semibold transition-colors duration-300 text-sm">
                        <span>Read More</span>
                        <svg className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Compact Subscription Module */}
      <section className="py-12 bg-background-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-6 text-center border border-gray-200">
            <h2 className="text-2xl font-bold text-text-heading mb-3 font-sans">
              Stay Updated
            </h2>
            <p className="text-text-main font-body mb-6 max-w-xl mx-auto">
              Get the latest China business insights delivered to your inbox.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-background border border-gray-300 rounded-lg text-text-main placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all duration-300 text-sm"
                />
                <button 
                  type="submit"
                  className="px-6 py-2 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-accent-cyan to-accent-magenta hover:from-accent-magenta hover:to-accent-cyan text-white hover:shadow-lg text-sm"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}