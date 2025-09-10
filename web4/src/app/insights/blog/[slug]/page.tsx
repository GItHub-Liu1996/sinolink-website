import { getPostBySlug, getAllPosts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import BlogPostContent from './BlogPostContent';

// 生成静态路径
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// 生成元数据
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


// 目录生成函数 - 从MDX内容中提取标题
const generateTableOfContents = (content: string) => {
  // 匹配MDX中的标题语法 ## 或 ###
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

// 文章页面组件
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  // 序列化MDX内容
  // 获取相关文章（同分类的其他文章）
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
