/**
 * Schema Markup 自动化生成工具
 * 提供统一的Schema.org结构化数据生成和管理功能
 */

// 基础配置
export const SCHEMA_CONFIG = {
  companyName: "GoChinaAdvisors",
  siteUrl: "https://gochinaadvisors.com",
  logo: "https://gochinaadvisors.com/images/logo/logo.svg",
  phone: "+86-21-1234-5678",
  address: {
    streetAddress: "Suite 2001, Shanghai Tower, 501 Yincheng Middle Road",
    addressLocality: "Shanghai",
    postalCode: "200120",
    addressCountry: "CN"
  },
  foundingDate: "2008",
  numberOfEmployees: "50-100",
  languages: ["English", "Chinese"] as string[],
  serviceArea: "China"
} as const;

// Schema类型定义
export interface BaseSchema {
  '@context': string;
  '@type': string;
  name?: string;
  description?: string;
  url?: string;
  mainEntity?: any;
}

export interface OrganizationSchema extends BaseSchema {
  '@type': 'Organization';
  name: string;
  url: string;
  logo?: string;
  description?: string;
  foundingDate?: string;
  numberOfEmployees?: string;
  address?: PostalAddress;
  contactPoint?: ContactPoint;
  serviceArea?: Country;
  hasOfferCatalog?: OfferCatalog;
  sameAs?: string[];
}

export interface PostalAddress {
  '@type': 'PostalAddress';
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
  addressCountry: string;
}

export interface ContactPoint {
  '@type': 'ContactPoint';
  telephone: string;
  contactType: string;
  areaServed: string;
  availableLanguage: string[];
}

export interface Country {
  '@type': 'Country';
  name: string;
}

export interface OfferCatalog {
  '@type': 'OfferCatalog';
  name: string;
  itemListElement: Offer[];
}

export interface Offer {
  '@type': 'Offer';
  itemOffered: Service;
}

export interface Service {
  '@type': 'Service';
  name: string;
  description: string;
}

export interface ArticleSchema extends BaseSchema {
  '@type': 'Article';
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: OrganizationSchema;
  publisher: OrganizationSchema;
  mainEntityOfPage: WebPage;
  articleSection?: string;
  keywords?: string[];
  wordCount?: number;
  inLanguage?: string;
}

export interface WebPage {
  '@type': 'WebPage';
  '@id': string;
}

export interface WebSiteSchema extends BaseSchema {
  '@type': 'WebSite';
  name: string;
  url: string;
  potentialAction: SearchAction;
  publisher: OrganizationSchema;
}

export interface SearchAction {
  '@type': 'SearchAction';
  target: string;
  'query-input': string;
}

export interface ProfessionalServiceSchema extends BaseSchema {
  '@type': 'ProfessionalService';
  name: string;
  url: string;
  image?: string;
  description: string;
  address: PostalAddress;
  telephone: string;
  provider: OrganizationSchema;
  serviceType: string[];
  areaServed: Country;
  hasOfferCatalog: OfferCatalog;
}

// Schema生成器类
export class SchemaGenerator {
  private config = SCHEMA_CONFIG;

  /**
   * 生成基础Organization Schema
   */
  generateOrganizationSchema(overrides: Partial<OrganizationSchema> = {}): OrganizationSchema {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: this.config.companyName,
      url: this.config.siteUrl,
      logo: this.config.logo,
      description: 'Professional consulting services for company registration, compliance, and growth in China.',
      foundingDate: this.config.foundingDate,
      numberOfEmployees: this.config.numberOfEmployees,
      address: {
        '@type': 'PostalAddress',
        ...this.config.address
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: this.config.phone,
        contactType: 'Customer Service',
        areaServed: this.config.serviceArea,
        availableLanguage: this.config.languages
      },
      serviceArea: {
        '@type': 'Country',
        name: this.config.serviceArea
      },
      ...overrides
    };
  }

  /**
   * 生成WebSite Schema
   */
  generateWebSiteSchema(overrides: Partial<WebSiteSchema> = {}): WebSiteSchema {
    return {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: this.config.companyName,
      url: this.config.siteUrl,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${this.config.siteUrl}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
      publisher: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: this.config.companyName,
        url: this.config.siteUrl
      },
      ...overrides
    };
  }

  /**
   * 生成Article Schema
   */
  generateArticleSchema(articleData: {
    title: string;
    excerpt: string;
    image?: string;
    date: string;
    slug: string;
    category?: string;
    tags?: string[];
    content?: string;
  }, overrides: Partial<ArticleSchema> = {}): ArticleSchema {
    const { title, excerpt, image, date, slug, category, tags, content } = articleData;
    
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description: excerpt,
      image: image ? `${this.config.siteUrl}${image}` : `${this.config.siteUrl}/images/default-og-image.png`,
      datePublished: date,
      dateModified: date,
      author: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: this.config.companyName,
        url: this.config.siteUrl
      },
      publisher: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: this.config.companyName,
        url: this.config.siteUrl,
        logo: this.config.logo as string
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${this.config.siteUrl}/insights/blog/${slug}`
      },
      articleSection: category || 'Business Insights',
      keywords: tags || ['China business', 'market entry', 'compliance'],
      wordCount: content ? content.split(' ').length : undefined,
      inLanguage: 'en-US',
      ...overrides
    };
  }

  /**
   * 生成ProfessionalService Schema
   */
  generateProfessionalServiceSchema(services: Service[], overrides: Partial<ProfessionalServiceSchema> = {}): ProfessionalServiceSchema {
    return {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: this.config.companyName,
      url: this.config.siteUrl,
      image: this.config.logo,
      description: 'Comprehensive consulting services for foreign businesses entering the Chinese market.',
      address: {
        '@type': 'PostalAddress',
        ...this.config.address
      },
      telephone: this.config.phone,
      provider: {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: this.config.companyName,
        url: this.config.siteUrl
      },
      serviceType: services.map(service => service.name),
      areaServed: {
        '@type': 'Country',
        name: this.config.serviceArea
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'China Business Services',
        itemListElement: services.map(service => ({
          '@type': 'Offer',
          itemOffered: service
        }))
      },
      ...overrides
    };
  }

  /**
   * 生成WebPage Schema
   */
  generateWebPageSchema(pageData: {
    name: string;
    description: string;
    url: string;
    mainEntity?: OrganizationSchema;
  }, overrides: Partial<BaseSchema> = {}): BaseSchema {
    const { name, description, url, mainEntity } = pageData;
    
    return {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name,
      description,
      url,
      mainEntity: mainEntity || this.generateOrganizationSchema(),
      ...overrides
    };
  }

  /**
   * 生成CollectionPage Schema (用于Insights页面)
   */
  generateCollectionPageSchema(articles: Array<{
    title: string;
    excerpt: string;
    image?: string;
    date: string;
    slug: string;
  }>, overrides: Partial<BaseSchema> = {}): BaseSchema {
    return {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'News & Insights',
      description: 'Expert insights and practical guidance for your China business journey.',
      url: `${this.config.siteUrl}/insights`,
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: articles.length,
        itemListElement: articles.slice(0, 10).map((article, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Article',
            headline: article.title,
            description: article.excerpt,
            image: article.image ? `${this.config.siteUrl}${article.image}` : undefined,
            datePublished: article.date,
            url: `${this.config.siteUrl}/insights/blog/${article.slug}`
          }
        }))
      },
      ...overrides
    };
  }

  /**
   * 生成ContactPage Schema
   */
  generateContactPageSchema(overrides: Partial<BaseSchema> = {}): BaseSchema {
    return {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Us',
      description: 'Get in touch with our China business experts for personalized consultation.',
      url: `${this.config.siteUrl}/contact`,
      mainEntity: {
        '@type': 'Organization',
        name: this.config.companyName,
        url: this.config.siteUrl,
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: this.config.phone,
            contactType: 'Customer Service',
            areaServed: this.config.serviceArea,
            availableLanguage: this.config.languages
          },
          {
            '@type': 'ContactPoint',
            contactType: 'Sales',
            areaServed: this.config.serviceArea,
            availableLanguage: this.config.languages
          }
        ],
        address: {
          '@type': 'PostalAddress',
          ...this.config.address
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00'
        }
      },
      ...overrides
    };
  }

  /**
   * 生成AboutPage Schema
   */
  generateAboutPageSchema(overrides: Partial<BaseSchema> = {}): BaseSchema {
    return {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About GoChinaAdvisors',
      description: 'Learn about our expertise in China business consulting and our commitment to helping foreign companies succeed.',
      url: `${this.config.siteUrl}/about`,
      mainEntity: {
        '@type': 'Organization',
        name: this.config.companyName,
        url: this.config.siteUrl,
        description: 'Professional consulting services for company registration, compliance, and growth in China.',
        foundingDate: this.config.foundingDate,
        numberOfEmployees: this.config.numberOfEmployees,
        address: {
          '@type': 'PostalAddress',
          ...this.config.address
        },
        serviceArea: {
          '@type': 'Country',
          name: this.config.serviceArea
        }
      },
      ...overrides
    };
  }

  /**
   * 验证Schema数据
   */
  validateSchema(schema: any): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    // 基本验证
    if (!schema['@context']) {
      errors.push('Missing @context');
    }
    if (!schema['@type']) {
      errors.push('Missing @type');
    }

    // 根据类型进行特定验证
    switch (schema['@type']) {
      case 'Organization':
        if (!schema.name) errors.push('Organization missing name');
        if (!schema.url) errors.push('Organization missing url');
        break;
      case 'Article':
        if (!schema.headline) errors.push('Article missing headline');
        if (!schema.author) errors.push('Article missing author');
        if (!schema.publisher) errors.push('Article missing publisher');
        break;
      case 'ProfessionalService':
        if (!schema.name) errors.push('ProfessionalService missing name');
        if (!schema.provider) errors.push('ProfessionalService missing provider');
        break;
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * 将Schema转换为JSON-LD字符串
   */
  toJsonLd(schema: any): string {
    return JSON.stringify(schema, null, 2);
  }

  /**
   * 批量生成多个Schema
   */
  generateMultipleSchemas(schemas: Array<{
    type: 'organization' | 'website' | 'article' | 'service' | 'webpage' | 'collection' | 'contact' | 'about';
    data: any;
    overrides?: any;
  }>): Record<string, any> {
    const result: Record<string, any> = {};

    schemas.forEach(({ type, data, overrides }) => {
      switch (type) {
        case 'organization':
          result.organization = this.generateOrganizationSchema(overrides);
          break;
        case 'website':
          result.website = this.generateWebSiteSchema(overrides);
          break;
        case 'article':
          result.article = this.generateArticleSchema(data, overrides);
          break;
        case 'service':
          result.service = this.generateProfessionalServiceSchema(data, overrides);
          break;
        case 'webpage':
          result.webpage = this.generateWebPageSchema(data, overrides);
          break;
        case 'collection':
          result.collection = this.generateCollectionPageSchema(data, overrides);
          break;
        case 'contact':
          result.contact = this.generateContactPageSchema(overrides);
          break;
        case 'about':
          result.about = this.generateAboutPageSchema(overrides);
          break;
      }
    });

    return result;
  }
}

// 导出单例实例
export const schemaGenerator = new SchemaGenerator();

// 便捷函数
export const generateSchema = (type: string, data: any, overrides?: any) => {
  return schemaGenerator.generateMultipleSchemas([{ type: type as any, data, overrides }]);
};

// Schema类型常量
export const SCHEMA_TYPES = {
  ORGANIZATION: 'Organization',
  WEBSITE: 'WebSite',
  ARTICLE: 'Article',
  PROFESSIONAL_SERVICE: 'ProfessionalService',
  WEBPAGE: 'WebPage',
  COLLECTION_PAGE: 'CollectionPage',
  CONTACT_PAGE: 'ContactPage',
  ABOUT_PAGE: 'AboutPage',
  ITEM_LIST: 'ItemList',
  CONTACT_POINT: 'ContactPoint',
  POSTAL_ADDRESS: 'PostalAddress',
  COUNTRY: 'Country',
  OFFER_CATALOG: 'OfferCatalog',
  OFFER: 'Offer',
  SERVICE: 'Service',
  SEARCH_ACTION: 'SearchAction'
} as const;
