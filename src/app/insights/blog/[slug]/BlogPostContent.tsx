'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { Post } from '@/lib/posts';

// MDX component configuration
const mdxComponents = {
  Link: ({ href, children, ...props }: any) => (
    <Link href={href} {...props} className="text-accent-cyan hover:text-accent-magenta transition-colors duration-200">
      {children}
    </Link>
  ),
};

interface BlogPostContentProps {
  post: Post;
  content: string;
  tableOfContents: any[];
  relatedPosts: any[];
}

export default function BlogPostContent({ 
  post, 
  content,
  tableOfContents, 
  relatedPosts 
}: BlogPostContentProps) {
  const [activeHeading, setActiveHeading] = useState<string>('');
  const [isSticky, setIsSticky] = useState(false);
  const [mdxSource, setMdxSource] = useState<any>(null);

  // Serialize MDX content
  useEffect(() => {
    const serializeContent = async () => {
      const serialized = await serialize(content);
      setMdxSource(serialized);
    };
    serializeContent();
  }, [content]);

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 200);
      
      // Update active heading
      const headings = tableOfContents.map(item => document.getElementById(item.id)).filter(Boolean);
      const currentHeading = headings.find(heading => {
        if (!heading) return false;
        const rect = heading.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentHeading) {
        setActiveHeading(currentHeading.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tableOfContents]);

  // Share functionality
  const handleShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title);
    
    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`
    };
    
    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
  };

  // If MDX content is still loading, show loading state
  if (!mdxSource) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-cyan mx-auto mb-4"></div>
          <p className="text-text-main">Loading article...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Article Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-background-secondary py-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block"
            >
              <span className="bg-accent-cyan text-background px-4 py-2 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-text-heading mt-6 mb-4 font-sans leading-tight"
            >
              {post.title}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-text-main text-lg mb-6 font-body"
            >
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Featured Image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative h-96 md:h-[500px] overflow-hidden"
      >
        <Image
          src={post.image || 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f'}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
      </motion.div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Left Side Article Content */}
          <motion.article
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="lg:col-span-3"
          >
            <div 
              className="prose prose-lg max-w-none
                prose-headings:text-text-heading prose-headings:font-sans
                prose-p:text-text-main prose-p:font-body prose-p:leading-relaxed
                prose-strong:text-text-heading prose-strong:font-semibold
                prose-ul:text-text-main prose-li:text-text-main
                prose-blockquote:border-accent-cyan prose-blockquote:bg-background-secondary prose-blockquote:p-6 prose-blockquote:rounded-xl
                prose-code:bg-background-secondary prose-code:text-accent-cyan prose-code:px-2 prose-code:py-1 prose-code:rounded
                prose-a:text-accent-cyan prose-a:no-underline hover:prose-a:text-accent-magenta
                prose-img:rounded-xl prose-img:shadow-lg"
            >
              <MDXRemote {...mdxSource} components={mdxComponents} />
            </div>
          </motion.article>

          {/* Right Side Sticky Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className={`lg:col-span-1 ${isSticky ? 'lg:sticky lg:top-24' : ''}`}
          >
            <div className="bg-background-secondary rounded-2xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold text-text-heading mb-4 font-sans">
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block py-2 px-3 rounded-lg transition-all duration-200 ${
                      activeHeading === item.id
                        ? 'bg-accent-cyan text-background font-semibold'
                        : 'text-text-main hover:text-accent-cyan hover:bg-gray-700/50'
                    } ${item.level === 3 ? 'ml-4 text-sm' : ''}`}
                  >
                    {item.text}
                  </a>
                ))}
              </nav>
            </div>
          </motion.aside>
        </div>
      </div>

      {/* Author Bio and Share Buttons */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="bg-background-secondary py-16"
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Author Bio */}
            <div className="bg-background rounded-2xl p-8 border border-gray-700">
              <div className="flex items-start gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786"
                  alt={post.author || 'ChinaBiz Solutions'}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h3 className="text-xl font-bold text-text-heading mb-2 font-sans">
                    {post.author || 'ChinaBiz Solutions'}
                  </h3>
                  <p className="text-accent-cyan font-semibold mb-3">
                    Senior Legal Consultant
                  </p>
                  <p className="text-text-main font-body leading-relaxed">
                    Expert in helping foreign companies establish their presence in China with over 10 years of experience in WFOE registration and compliance matters.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Share */}
            <div className="bg-background rounded-2xl p-8 border border-gray-700">
              <h3 className="text-xl font-bold text-text-heading mb-4 font-sans">
                Share this Article
              </h3>
              <div className="flex gap-4">
                <button
                  onClick={() => handleShare('twitter')}
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  Twitter
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.023-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Related Articles Recommendation */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-text-heading mb-12 text-center font-sans">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <motion.article
                key={relatedPost.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-background-secondary rounded-2xl overflow-hidden border border-gray-700 hover:border-accent-cyan transition-all duration-300 group"
              >
                <Link href={relatedPost.href}>
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.image || 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f'}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent-cyan text-background px-3 py-1 rounded-full text-sm font-semibold">
                        {relatedPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-text-heading mb-3 font-sans line-clamp-2 group-hover:text-accent-cyan transition-colors duration-200">
                      {relatedPost.title}
                    </h3>
                    <p className="text-text-main font-body leading-relaxed mb-4 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-text-main">
                      <span>{new Date(relatedPost.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                      <span className="text-accent-cyan font-semibold group-hover:text-accent-magenta transition-colors duration-200">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}