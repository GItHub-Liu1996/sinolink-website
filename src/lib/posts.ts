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
  draft?: boolean;
}

export interface Post extends PostMeta {
  content: string;
}

// Get all post metadata (sorted by date descending)
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
          draft: data.draft || false,
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Filter out draft posts in production
    const isProduction = process.env.NODE_ENV === 'production';
    const publishedPosts = isProduction 
      ? allPostsData.filter(post => !post.draft)
      : allPostsData;

    return publishedPosts;
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

// Get single post content by slug
export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const post = {
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
      draft: data.draft || false,
    };

    // Filter out draft posts in production
    const isProduction = process.env.NODE_ENV === 'production';
    if (isProduction && post.draft) {
      return null;
    }

    return post;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

// Get featured posts
export async function getFeaturedPosts(): Promise<PostMeta[]> {
  const posts = await getAllPosts();
  return posts.filter(post => post.featured);
}

// Get latest posts (excluding featured)
export async function getLatestPosts(): Promise<PostMeta[]> {
  const posts = await getAllPosts();
  return posts.filter(post => !post.featured).slice(0, 2);
}

// Get all posts (excluding featured)
export async function getAllNonFeaturedPosts(): Promise<PostMeta[]> {
  const posts = await getAllPosts();
  return posts.filter(post => !post.featured);
}

// Get posts by category
export async function getPostsByCategory(category: string): Promise<PostMeta[]> {
  const posts = await getAllPosts();
  return posts.filter(post => 
    post.category.toLowerCase().includes(category.toLowerCase())
  );
}

// Get all categories
export async function getAllCategories(): Promise<string[]> {
  const posts = await getAllPosts();
  const categories = new Set(posts.map(post => post.category));
  return Array.from(categories);
}

// Get all tags
export async function getAllTags(): Promise<string[]> {
  const posts = await getAllPosts();
  const tags = new Set(posts.flatMap(post => post.tags || []));
  return Array.from(tags);
}

// Search posts
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
