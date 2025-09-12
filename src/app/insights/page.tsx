'use client';

import Link from 'next/link';
import Image from 'next/image';
import { articles } from '@/config/articles';

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="py-16 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-text-heading mb-6 font-sans">
              News & Insights
            </h1>
            <p className="text-lg text-text-main font-body leading-relaxed max-w-3xl mx-auto">
              Stay ahead with expert insights, market analysis, and practical guidance for your China business journey.
            </p>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {['All', 'Market Entry', 'Operations & Compliance', 'HR & Visa', 'Growth & Strategy'].map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-white border border-gray-300 text-text-main hover:border-accent-cyan hover:text-accent-cyan"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-80">
              <input
                type="text"
                placeholder="Search insights..."
                className="w-full px-4 py-2 pl-10 bg-white border border-gray-300 rounded-lg text-text-main placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all duration-300"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Results count */}
          <div className="text-sm text-text-main mb-8">
            Displaying 1 - {Math.min(8, articles.length)} of {articles.length} insights
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-heading mb-12 font-sans text-center">Featured Article</h2>
          
          {articles.length > 0 && (
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-accent-cyan transition-all duration-300 hover:shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image section */}
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <Image
                    src={articles[0].image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'}
                    alt={articles[0].title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent-cyan text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                
                {/* Content section */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-accent-cyan/20 to-accent-magenta/20 text-accent-cyan rounded-full text-sm font-medium border border-accent-cyan/30">
                      {articles[0].category}
                    </span>
                  </div>
                  
                  <h2 className="text-2xl lg:text-3xl font-bold text-text-heading mb-4 hover:text-accent-cyan transition-colors duration-300">
                    {articles[0].title}
                  </h2>
                  
                  <p className="text-text-main mb-6 leading-relaxed">
                    {articles[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-text-main">
                    <div className="flex items-center space-x-4">
                      <span>{articles[0].readTime}</span>
                      <span>•</span>
                      <span>{new Date(articles[0].publishDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center text-accent-cyan hover:text-accent-magenta transition-colors duration-300">
                      <span className="mr-2">Read More</span>
                      <svg className="w-4 h-4 transform hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-16 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-heading mb-12 font-sans text-center">All Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {articles.slice(1, 9).map((article) => (
              <Link key={article.id} href={`/insights/blog/${article.slug}`} className="group block">
                <article className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-accent-primary transition-all duration-300 shadow-lg hover:shadow-2xl group-hover:shadow-2xl">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image || 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60'}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      quality={65}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-accent-cyan/20 to-accent-magenta/20 text-accent-cyan border border-accent-cyan/30">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-text-heading mb-3 font-sans line-clamp-2 group-hover:text-accent-cyan transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-base text-text-main font-body leading-relaxed mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3 text-sm text-text-main">
                        <span>{article.readTime}</span>
                        <span>•</span>
                        <span>{new Date(article.publishDate).toLocaleDateString('en-US', { 
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
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Module */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background-secondary rounded-2xl p-8 md:p-12 text-center border border-gray-200">
            <h2 className="text-3xl font-bold text-text-heading mb-4 font-sans">
              Become a China Insider.
            </h2>
            <p className="text-lg text-text-main font-body leading-relaxed mb-8 max-w-2xl mx-auto">
              Get the latest market analysis and compliance updates delivered straight to your inbox.
            </p>
            <form className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-background border border-gray-300 rounded-lg text-text-main placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all duration-300"
                />
                <button 
                  type="submit"
                  className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg bg-gradient-to-r from-accent-cyan to-accent-magenta hover:from-accent-magenta hover:to-accent-cyan text-white hover:shadow-xl"
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