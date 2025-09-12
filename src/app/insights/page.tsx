'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { articles } from '@/config/articles';
import Pagination from './_components/Pagination';
import { EmbeddedConsultationQuiz } from '@/components';

// Metadata is handled in layout.tsx for client components

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(8); // 8 articles per page

  // Filter articles based on category and search
  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(articles.map(article => article.category)))];

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of articles section
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  // Check if we have any published articles
  const hasPublishedArticles = filteredArticles.length > 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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
        </div>
      </section>

      {/* Main Content - Show Coming Soon if no articles */}
      {!hasPublishedArticles ? (
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 lg:p-12 text-center border border-gray-200 shadow-lg">
              <div className="max-w-3xl mx-auto">
                {/* Coming Soon Icon */}
                <div className="w-20 h-20 bg-gradient-to-r from-accent-cyan to-accent-magenta rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-text-heading mb-4 font-sans">
                  Expert Insights Coming Soon
                </h2>
                <p className="text-lg text-text-main font-body mb-8 max-w-2xl mx-auto leading-relaxed">
                  We are currently preparing in-depth articles, guides, and market analysis. Please check back later or subscribe to our newsletter for updates.
                </p>
                
                {/* Features Preview */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="flex flex-col items-center p-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-cyan to-accent-magenta rounded-full flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-text-heading mb-2">Market Analysis</h3>
                    <p className="text-sm text-gray-600">In-depth reports on China's business landscape</p>
                  </div>
                  
                  <div className="flex flex-col items-center p-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-cyan to-accent-magenta rounded-full flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-text-heading mb-2">Regulatory Updates</h3>
                    <p className="text-sm text-gray-600">Latest policy changes and compliance guidance</p>
                  </div>
                  
                  <div className="flex flex-col items-center p-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-cyan to-accent-magenta rounded-full flex items-center justify-center mb-3">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-text-heading mb-2">Strategic Insights</h3>
                    <p className="text-sm text-gray-600">Expert guidance for business success</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                  <Link href="/contact" className="flex-1 px-8 py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-accent-cyan to-accent-magenta hover:from-accent-magenta hover:to-accent-cyan text-white hover:shadow-lg hover:scale-105 text-center">
                    Get Expert Consultation
                  </Link>
                  <button className="flex-1 px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-white">
                    Subscribe for Updates
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Be the first to know when our insights are published. No spam, unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Filters and Search - Only show if we have articles */}
          <section className="py-8 bg-background-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
                {/* Category Filters */}
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

                {/* Search Bar */}
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
                {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
              </div>
            </div>
          </section>

      {/* Articles Grid */}
      <section className="py-8 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentArticles.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-text-heading mb-2">No articles found</h3>
              <p className="text-text-main">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentArticles.map((article) => (
                  <Link key={article.id} href={`/insights/blog/${article.slug}`} className="group block">
                    <article className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-accent-cyan transition-all duration-300 shadow-sm hover:shadow-lg group-hover:shadow-lg h-full flex flex-col">
                      {/* Image - 1/3 of card height */}
                      <div className="relative h-32 overflow-hidden flex-shrink-0">
                        <Image
                          src={article.image || '/images/insights/business-abstract-1.svg'}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          quality={60}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="px-2 py-1 rounded-full text-xs font-semibold bg-accent-cyan/90 text-white backdrop-blur-sm">
                            {article.category}
                          </span>
                        </div>
                        {article.featured && (
                          <div className="absolute top-2 right-2">
                            <span className="px-2 py-1 rounded-full text-xs font-semibold bg-accent-magenta/90 text-white backdrop-blur-sm">
                              Featured
                            </span>
                          </div>
                        )}
                      </div>
                      
                      {/* Content - 2/3 of card height */}
                      <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-text-heading mb-2 font-sans line-clamp-2 group-hover:text-accent-cyan transition-colors duration-300">
                          {article.title}
                        </h3>
                        <p className="text-sm text-text-main font-body leading-relaxed mb-3 line-clamp-3 flex-grow">
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
                        
                        {/* Read More Button */}
                        <div className="mt-auto">
                          <div className="inline-flex items-center space-x-1 text-accent-cyan group-hover:text-accent-magenta font-semibold transition-colors duration-300 text-sm">
                            <span>Read More</span>
                            <svg className="w-3 h-3 transform group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          )}
        </div>
      </section>

      {/* Enhanced Value Proposition Section */}
      <section className="py-16 bg-gradient-to-br from-background-secondary to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 text-center border border-gray-200 shadow-lg">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-heading mb-4 font-sans">
                Become a China Market Insider
              </h2>
              <p className="text-lg text-text-main font-body mb-8 max-w-3xl mx-auto leading-relaxed">
                Join 2,000+ business leaders who rely on our exclusive insights to navigate China's complex market landscape. Get weekly updates on regulatory changes, market opportunities, and strategic guidance.
              </p>
              
              {/* Value Points */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-cyan to-accent-magenta rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-text-heading mb-2">Weekly Insights</h3>
                  <p className="text-sm text-gray-600">Market trends, policy updates, and strategic analysis</p>
                </div>
                
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-cyan to-accent-magenta rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-text-heading mb-2">Early Access</h3>
                  <p className="text-sm text-gray-600">Be first to know about regulatory changes and opportunities</p>
                </div>
                
                <div className="flex flex-col items-center p-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent-cyan to-accent-magenta rounded-full flex items-center justify-center mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-text-heading mb-2">Expert Network</h3>
                  <p className="text-sm text-gray-600">Connect with China business experts and peers</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
                <button className="flex-1 px-8 py-3 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-accent-cyan to-accent-magenta hover:from-accent-magenta hover:to-accent-cyan text-white hover:shadow-lg hover:scale-105">
                  Start Smart Consultation
                </button>
                <button className="flex-1 px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-white">
                  Subscribe to Newsletter
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Get personalized advice or stay updated with our insights. No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

          {/* Smart Consultation Quiz Section */}
          <section className="py-8 bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <EmbeddedConsultationQuiz
                title="To Better Understand Your Needs"
                subtitle="Answer a few questions to get personalized business consultation and recommendations"
                showTitle={true}
                maxQuestions={6}
              />
            </div>
          </section>
        </>
      )}
    </div>
  );
}