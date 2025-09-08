import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export interface PostMeta {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  slug: string;
  image?: string;
  readTime?: string;
  featured?: boolean;
  author?: string;
  tags?: string[];
  href: string;
}

export interface Post extends PostMeta {
  content: string;
}

// 获取所有文章的元数据（按日期降序）
export async function getAllPosts(): Promise<PostMeta[]> {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter((name) => name.endsWith('.mdx'))
      .map((fileName) => {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
          slug,
          title: data.title || 'Untitled',
          date: data.date || new Date().toISOString(),
          excerpt: data.excerpt || '',
          category: data.category || 'General',
          image: data.image || '',
          readTime: data.readTime || '5 min read',
          featured: data.featured || false,
          author: data.author || 'ChinaBiz Solutions',
          tags: data.tags || [],
          href: `/insights/blog/${slug}`,
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return allPostsData;
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

// 根据slug获取单篇文章的完整内容
export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      excerpt: data.excerpt || '',
      category: data.category || 'General',
      image: data.image || '',
      readTime: data.readTime || '5 min read',
      featured: data.featured || false,
      author: data.author || 'ChinaBiz Solutions',
      tags: data.tags || [],
      href: `/insights/blog/${slug}`,
      content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

// 获取精选文章
export async function getFeaturedPosts(): Promise<PostMeta[]> {
  const posts = await getAllPosts();
  return posts.filter(post => post.featured);
}

// 获取最新文章（排除精选）
export async function getLatestPosts(): Promise<PostMeta[]> {
  const posts = await getAllPosts();
  return posts.filter(post => !post.featured).slice(0, 2);
}

// 获取所有文章（排除精选）
export async function getAllNonFeaturedPosts(): Promise<PostMeta[]> {
  const posts = await getAllPosts();
  return posts.filter(post => !post.featured);
}

// 根据分类获取文章
export async function getPostsByCategory(category: string): Promise<PostMeta[]> {
  const posts = await getAllPosts();
  return posts.filter(post => 
    post.category.toLowerCase().includes(category.toLowerCase())
  );
}

// 获取所有分类
export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  const categories = new Set(posts.map(post => post.category));
  return Array.from(categories);
}

// 获取所有标签
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = new Set(posts.flatMap(post => post.tags || []));
  return Array.from(tags);
}

// 搜索文章
export async function searchPosts(query: string): Promise<PostMeta[]> {
  const posts = await getAllPosts();
  const lowercaseQuery = query.toLowerCase();
  
  return posts.filter(post => 
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.category.toLowerCase().includes(lowercaseQuery) ||
    (post.tags && post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)))
  );
}
