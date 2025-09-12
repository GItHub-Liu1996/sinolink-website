import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://gochinaadvisors.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '/temp/',
          '/test/',
          '/dev/',
          '/staging/',
          '/consultation-quiz', // 保护核心业务功能
        ],
      },
      // 允许搜索引擎和主要AI工具访问公开内容
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '/consultation-quiz',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '/consultation-quiz',
        ],
      },
      // 对AI工具采用选择性开放策略
      {
        userAgent: 'GPTBot',
        allow: [
          '/insights/blog/', // 允许访问博客内容
          '/about',
          '/services',
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '/consultation-quiz',
          '/contact', // 保护联系信息
        ],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: [
          '/insights/blog/',
          '/about',
          '/services',
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '/consultation-quiz',
          '/contact',
        ],
      },
      {
        userAgent: 'anthropic-ai',
        allow: [
          '/insights/blog/',
          '/about',
          '/services',
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '/consultation-quiz',
          '/contact',
        ],
      },
      {
        userAgent: 'Claude-Web',
        allow: [
          '/insights/blog/',
          '/about',
          '/services',
        ],
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '/consultation-quiz',
          '/contact',
        ],
      },
      // 阻止其他AI爬虫
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
