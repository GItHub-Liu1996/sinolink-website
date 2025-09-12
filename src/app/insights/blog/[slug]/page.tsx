import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BlogPostContent from './BlogPostContent';

// Generate static paths
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  };
}


// Table of contents generation function - extract headings from MDX content
const generateTableOfContents = (content: string) => {
  // Match MDX heading syntax ## or ###
  const headings = content.match(/^#{2,3}\s+(.+)$/gm);
  if (!headings) return [];

  return headings.map((heading, index) => {
    const text = heading.replace(/^#{2,3}\s+/, '');
    const level = heading.startsWith('###') ? 3 : 2;
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    
    return {
      id,
      text,
      level,
      index
    };
  });
};

// Blog post page component
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  // Serialize MDX content
  // Get related articles (other articles in the same category)
  const allPosts = await getAllPosts();
  const relatedPosts = allPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);
  
  const tableOfContents = generateTableOfContents(post.content);

  return (
    <BlogPostContent 
      post={post} 
      content={post.content}
      tableOfContents={tableOfContents}
      relatedPosts={relatedPosts}
    />
  );
}
