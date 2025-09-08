import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, PostMeta } from '@/lib/posts';
import ArticleCard from './_components/ArticleCard';
import Pagination from './_components/Pagination';


// 精选文章大卡片组件
function FeaturedArticleCard({ post }: { post: PostMeta }) {
  return (
    <Link href={post.href} className="group block">
      <div className="bg-background-secondary rounded-2xl overflow-hidden border border-gray-700 hover:border-accent-cyan transition-all duration-300 hover:shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* 图片部分 */}
          <div className="relative h-64 lg:h-auto overflow-hidden">
            <Image
              src={post.image || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-accent-cyan text-background px-3 py-1 rounded-full text-sm font-semibold">
                Featured
              </span>
            </div>
          </div>
          
          {/* 内容部分 */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-accent-cyan/20 to-accent-magenta/20 text-accent-cyan rounded-full text-sm font-medium border border-accent-cyan/30">
                {post.category}
              </span>
            </div>
            
            <h2 className="text-2xl lg:text-3xl font-bold text-text-heading mb-4 group-hover:text-accent-cyan transition-colors duration-300">
              {post.title}
            </h2>
            
            <p className="text-text-main mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between text-sm text-text-main">
              <div className="flex items-center space-x-4">
                <span>{post.readTime}</span>
                <span>•</span>
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center text-accent-cyan group-hover:text-accent-magenta transition-colors duration-300">
                <span className="mr-2">Read More</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default async function InsightsPage() {
  // 获取所有文章
  const allPosts = await getAllPosts();
  
  // 如果没有文章，显示空状态
  if (allPosts.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-heading mb-4">No Articles Found</h1>
          <p className="text-text-main">Please check back later for new content.</p>
        </div>
      </div>
    );
  }

  // 第一篇作为精选文章，其余作为文章列表
  const featuredPost = allPosts[0];
  const remainingPosts = allPosts.slice(1);

  // 分页设置：每页显示8篇文章（在网格中）
  const postsPerPage = 8;
  const totalPages = Math.ceil(remainingPosts.length / postsPerPage);

  // 分类数据
  const topicCategories = [
    { name: "Market Entry", href: "/insights/category/market-entry" },
    { name: "Operations and Compliance", href: "/insights/category/operations-compliance" },
    { name: "HR and Visa", href: "/insights/category/hr-visa" },
    { name: "Growth and Protection", href: "/insights/category/growth-strategy" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text-heading mb-6 font-sans">
              Insights & Resources
            </h1>
            <p className="text-lg text-text-main font-body leading-relaxed max-w-3xl mx-auto mb-12">
              Stay ahead with expert insights, market analysis, and practical guidance for your China business journey.
            </p>

            {/* Search Module */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles... (e.g., 'WFOE', 'Tax', 'Visa')"
                  className="w-full px-6 py-4 pl-12 bg-background border border-gray-700 rounded-xl text-text-main placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all duration-300"
                />
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-heading mb-12 font-sans text-center">Featured Article</h2>
          <FeaturedArticleCard post={featuredPost} />
        </div>
      </section>

      {/* Topic Exploration */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-heading mb-12 font-sans">Explore by Topic</h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {topicCategories.map((category, index) => (
                <Link
                  key={index}
                  href={category.href}
                  className="inline-block px-6 py-3 bg-background border border-gray-700 rounded-lg text-text-main hover:text-accent-cyan hover:border-accent-cyan transition-all duration-300 font-medium"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-heading mb-12 font-sans text-center">All Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.slice(0, postsPerPage).map((post, index) => (
              <ArticleCard key={post.slug} {...post} />
            ))}
          </div>

          {/* 分页组件 */}
          {totalPages > 1 && (
            <Pagination
              currentPage={1}
              totalPages={totalPages}
            />
          )}
        </div>
      </section>

      {/* Subscription Module */}
      <section className="py-24 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background-secondary rounded-2xl p-8 md:p-12 text-center border border-gray-700">
            <h2 className="text-3xl font-bold text-text-heading mb-4 font-sans">
              Become a China Insider.
            </h2>
            <p className="text-lg text-text-main font-body leading-relaxed mb-8 max-w-2xl mx-auto">
              Get the latest market analysis and compliance updates delivered straight to your inbox.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-background border border-gray-700 rounded-lg text-text-main placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all duration-300"
              />
              <button className="bg-gradient-to-r from-accent-cyan to-accent-magenta hover:from-accent-magenta hover:to-accent-cyan text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}