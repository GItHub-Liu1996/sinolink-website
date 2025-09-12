import { Metadata } from 'next';
import { articles } from '@/config/articles';

const companyName = "GoChinaAdvisors";
const siteUrl = "https://gochinaadvisors.com";

const insightsPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'News & Insights - GoChinaAdvisors',
  description: 'Expert insights and practical guidance for your China business journey.',
  url: `${siteUrl}/insights`,
  mainEntity: {
    '@type': 'ItemList',
    name: 'China Business Insights',
    description: 'Comprehensive collection of articles, guides, and insights for China business operations',
    numberOfItems: articles.length,
    itemListElement: articles.slice(0, 10).map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt,
        url: `${siteUrl}/insights/blog/${article.slug}`,
        image: article.image ? `${siteUrl}${article.image}` : `${siteUrl}/images/insights/business-abstract-1.svg`,
        datePublished: article.publishDate,
        author: {
          '@type': 'Organization',
          name: companyName
        },
        publisher: {
          '@type': 'Organization',
          name: companyName,
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/images/logo/logo.svg`
          }
        },
        articleSection: article.category,
        keywords: ['China business', 'market entry', 'compliance']
      }
    }))
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Insights',
        item: `${siteUrl}/insights`
      }
    ]
  }
};

export const metadata: Metadata = {
  title: 'News & Insights | GoChinaAdvisors',
  description: 'Expert insights and practical guidance for your China business journey. Stay updated with the latest market trends, regulatory changes, and strategic advice.',
  keywords: [
    'China business insights',
    'China market news',
    'business guidance China',
    'China regulatory updates',
    'market entry insights',
    'China business articles',
    'WFOE registration guide',
    'China compliance news'
  ],
  openGraph: {
    title: 'News & Insights | GoChinaAdvisors',
    description: 'Expert insights and practical guidance for your China business journey. Stay updated with the latest market trends, regulatory changes, and strategic advice.',
    url: `${siteUrl}/insights`,
    siteName: 'GoChinaAdvisors',
    type: 'website',
    images: [`${siteUrl}/images/insights/og-image.png`]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'News & Insights | GoChinaAdvisors',
    description: 'Expert insights and practical guidance for your China business journey.',
    images: [`${siteUrl}/images/insights/og-image.png`]
  },
  alternates: {
    canonical: `${siteUrl}/insights`,
  },
  other: {
    'script-insights': JSON.stringify(insightsPageSchema),
  },
};
