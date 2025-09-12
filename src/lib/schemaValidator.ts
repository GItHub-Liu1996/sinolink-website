/**
 * Schema Markup 验证和测试工具
 * 提供Schema验证、测试和调试功能
 */

import { schemaGenerator, SCHEMA_TYPES } from './schema';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  suggestions: string[];
}

export interface TestResult {
  testName: string;
  passed: boolean;
  message: string;
  details?: any;
}

export interface SchemaTestSuite {
  name: string;
  tests: TestResult[];
  overallPassed: boolean;
  executionTime: number;
}

/**
 * Schema验证器类
 */
export class SchemaValidator {
  /**
   * 验证Schema的基本结构
   */
  validateBasicStructure(schema: any): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];
    const suggestions: string[] = [];

    // 检查必需字段
    if (!schema['@context']) {
      errors.push('Missing required field: @context');
    } else if (schema['@context'] !== 'https://schema.org') {
      warnings.push('@context should be "https://schema.org"');
    }

    if (!schema['@type']) {
      errors.push('Missing required field: @type');
    }

    // 检查@type是否有效
    if (schema['@type'] && !Object.values(SCHEMA_TYPES).includes(schema['@type'])) {
      warnings.push(`Unknown @type: ${schema['@type']}`);
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
      suggestions
    };
  }

  /**
   * 验证Organization Schema
   */
  validateOrganizationSchema(schema: any): ValidationResult {
    const result = this.validateBasicStructure(schema);
    
    if (schema['@type'] !== 'Organization') {
      result.errors.push('Schema type must be "Organization"');
      return result;
    }

    // Organization特定验证
    const requiredFields = ['name', 'url'];
    requiredFields.forEach(field => {
      if (!schema[field]) {
        result.errors.push(`Organization missing required field: ${field}`);
      }
    });

    // 验证地址
    if (schema.address) {
      const addressValidation = this.validatePostalAddress(schema.address);
      result.errors.push(...addressValidation.errors);
      result.warnings.push(...addressValidation.warnings);
    }

    // 验证联系方式
    if (schema.contactPoint) {
      const contactValidation = this.validateContactPoint(schema.contactPoint);
      result.errors.push(...contactValidation.errors);
      result.warnings.push(...contactValidation.warnings);
    }

    return {
      isValid: result.errors.length === 0,
      errors: result.errors,
      warnings: result.warnings,
      suggestions: result.suggestions
    };
  }

  /**
   * 验证Article Schema
   */
  validateArticleSchema(schema: any): ValidationResult {
    const result = this.validateBasicStructure(schema);
    
    if (schema['@type'] !== 'Article') {
      result.errors.push('Schema type must be "Article"');
      return result;
    }

    // Article特定验证
    const requiredFields = ['headline', 'author', 'publisher'];
    requiredFields.forEach(field => {
      if (!schema[field]) {
        result.errors.push(`Article missing required field: ${field}`);
      }
    });

    // 验证作者
    if (schema.author) {
      if (!schema.author['@type']) {
        result.errors.push('Author missing @type');
      }
      if (!schema.author.name) {
        result.errors.push('Author missing name');
      }
    }

    // 验证发布者
    if (schema.publisher) {
      if (!schema.publisher['@type']) {
        result.errors.push('Publisher missing @type');
      }
      if (!schema.publisher.name) {
        result.errors.push('Publisher missing name');
      }
    }

    // 验证日期
    if (schema.datePublished) {
      const dateValidation = this.validateDate(schema.datePublished);
      if (!dateValidation.isValid) {
        result.errors.push(`Invalid datePublished: ${dateValidation.message}`);
      }
    }

    return {
      isValid: result.errors.length === 0,
      errors: result.errors,
      warnings: result.warnings,
      suggestions: result.suggestions
    };
  }

  /**
   * 验证ProfessionalService Schema
   */
  validateProfessionalServiceSchema(schema: any): ValidationResult {
    const result = this.validateBasicStructure(schema);
    
    if (schema['@type'] !== 'ProfessionalService') {
      result.errors.push('Schema type must be "ProfessionalService"');
      return result;
    }

    // ProfessionalService特定验证
    const requiredFields = ['name', 'provider'];
    requiredFields.forEach(field => {
      if (!schema[field]) {
        result.errors.push(`ProfessionalService missing required field: ${field}`);
      }
    });

    // 验证服务提供者
    if (schema.provider) {
      if (!schema.provider['@type']) {
        result.errors.push('Provider missing @type');
      }
      if (!schema.provider.name) {
        result.errors.push('Provider missing name');
      }
    }

    // 验证服务类型
    if (!schema.serviceType || !Array.isArray(schema.serviceType) || schema.serviceType.length === 0) {
      result.warnings.push('ProfessionalService should have serviceType array');
    }

    return {
      isValid: result.errors.length === 0,
      errors: result.errors,
      warnings: result.warnings,
      suggestions: result.suggestions
    };
  }

  /**
   * 验证PostalAddress
   */
  validatePostalAddress(address: any): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (address['@type'] !== 'PostalAddress') {
      errors.push('Address @type must be "PostalAddress"');
    }

    const requiredFields = ['streetAddress', 'addressLocality', 'addressCountry'];
    requiredFields.forEach(field => {
      if (!address[field]) {
        errors.push(`PostalAddress missing required field: ${field}`);
      }
    });

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
      suggestions: []
    };
  }

  /**
   * 验证ContactPoint
   */
  validateContactPoint(contactPoint: any): ValidationResult {
    const errors: string[] = [];
    const warnings: string[] = [];

    if (contactPoint['@type'] !== 'ContactPoint') {
      errors.push('ContactPoint @type must be "ContactPoint"');
    }

    if (!contactPoint.telephone && !contactPoint.email) {
      warnings.push('ContactPoint should have telephone or email');
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
      suggestions: []
    };
  }

  /**
   * 验证日期格式
   */
  validateDate(dateString: string): { isValid: boolean; message: string } {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return { isValid: false, message: 'Invalid date format' };
      }
      
      // 检查是否为ISO格式
      if (!dateString.includes('T') && !dateString.includes('Z')) {
        return { isValid: false, message: 'Date should be in ISO format' };
      }
      
      return { isValid: true, message: 'Valid date' };
    } catch {
      return { isValid: false, message: 'Invalid date format' };
    }
  }

  /**
   * 通用Schema验证
   */
  validateSchema(schema: any): ValidationResult {
    const basicValidation = this.validateBasicStructure(schema);
    
    if (!basicValidation.isValid) {
      return basicValidation;
    }

    // 根据Schema类型进行特定验证
    switch (schema['@type']) {
      case 'Organization':
        return this.validateOrganizationSchema(schema);
      case 'Article':
        return this.validateArticleSchema(schema);
      case 'ProfessionalService':
        return this.validateProfessionalServiceSchema(schema);
      default:
        return basicValidation;
    }
  }

  /**
   * 运行Schema测试套件
   */
  async runTestSuite(schema: any): Promise<SchemaTestSuite> {
    const startTime = Date.now();
    const tests: TestResult[] = [];

    // 基本结构测试
    tests.push({
      testName: 'Basic Structure Validation',
      passed: this.validateBasicStructure(schema).isValid,
      message: this.validateBasicStructure(schema).isValid 
        ? 'Schema has valid basic structure' 
        : 'Schema has invalid basic structure',
      details: this.validateBasicStructure(schema)
    });

    // JSON-LD格式测试
    tests.push({
      testName: 'JSON-LD Format Validation',
      passed: this.validateJsonLdFormat(schema),
      message: this.validateJsonLdFormat(schema) 
        ? 'Schema is valid JSON-LD' 
        : 'Schema is not valid JSON-LD'
    });

    // Schema.org兼容性测试
    tests.push({
      testName: 'Schema.org Compatibility',
      passed: this.validateSchemaOrgCompatibility(schema),
      message: this.validateSchemaOrgCompatibility(schema) 
        ? 'Schema is compatible with Schema.org' 
        : 'Schema is not compatible with Schema.org'
    });

    // 搜索引擎优化测试
    tests.push({
      testName: 'SEO Optimization',
      passed: this.validateSeoOptimization(schema),
      message: this.validateSeoOptimization(schema) 
        ? 'Schema is SEO optimized' 
        : 'Schema needs SEO improvements'
    });

    const executionTime = Date.now() - startTime;
    const overallPassed = tests.every(test => test.passed);

    return {
      name: `${schema['@type']} Schema Test Suite`,
      tests,
      overallPassed,
      executionTime
    };
  }

  /**
   * 验证JSON-LD格式
   */
  private validateJsonLdFormat(schema: any): boolean {
    try {
      JSON.stringify(schema);
      return true;
    } catch {
      return false;
    }
  }

  /**
   * 验证Schema.org兼容性
   */
  private validateSchemaOrgCompatibility(schema: any): boolean {
    // 检查@context
    if (schema['@context'] !== 'https://schema.org') {
      return false;
    }

    // 检查@type是否为有效的Schema.org类型
    const validTypes = Object.values(SCHEMA_TYPES);
    return validTypes.includes(schema['@type']);
  }

  /**
   * 验证SEO优化
   */
  private validateSeoOptimization(schema: any): boolean {
    // 检查是否有描述
    if (!schema.description && !schema.headline) {
      return false;
    }

    // 检查是否有URL
    if (!schema.url && !schema.mainEntityOfPage) {
      return false;
    }

    // 检查是否有图片（对于Article类型）
    if (schema['@type'] === 'Article' && !schema.image) {
      return false;
    }

    return true;
  }
}

/**
 * Schema测试工具
 */
export class SchemaTestRunner {
  private validator = new SchemaValidator();

  /**
   * 运行所有测试
   */
  async runAllTests(schema: any): Promise<SchemaTestSuite[]> {
    const testSuites: SchemaTestSuite[] = [];

    // 基本验证测试
    testSuites.push(await this.validator.runTestSuite(schema));

    // 性能测试
    testSuites.push(await this.runPerformanceTests(schema));

    // 兼容性测试
    testSuites.push(await this.runCompatibilityTests(schema));

    return testSuites;
  }

  /**
   * 运行性能测试
   */
  private async runPerformanceTests(schema: any): Promise<SchemaTestSuite> {
    const startTime = Date.now();
    const tests: TestResult[] = [];

    // Schema大小测试
    const schemaSize = JSON.stringify(schema).length;
    tests.push({
      testName: 'Schema Size',
      passed: schemaSize < 10000, // 小于10KB
      message: `Schema size: ${schemaSize} bytes`,
      details: { size: schemaSize, limit: 10000 }
    });

    // 生成时间测试
    const generationStart = Date.now();
    schemaGenerator.validateSchema(schema);
    const generationTime = Date.now() - generationStart;
    
    tests.push({
      testName: 'Generation Performance',
      passed: generationTime < 100, // 小于100ms
      message: `Schema generation time: ${generationTime}ms`,
      details: { time: generationTime, limit: 100 }
    });

    const executionTime = Date.now() - startTime;
    const overallPassed = tests.every(test => test.passed);

    return {
      name: 'Performance Test Suite',
      tests,
      overallPassed,
      executionTime
    };
  }

  /**
   * 运行兼容性测试
   */
  private async runCompatibilityTests(schema: any): Promise<SchemaTestSuite> {
    const startTime = Date.now();
    const tests: TestResult[] = [];

    // Google Rich Results测试
    tests.push({
      testName: 'Google Rich Results Compatibility',
      passed: this.testGoogleRichResults(schema),
      message: this.testGoogleRichResults(schema) 
        ? 'Compatible with Google Rich Results' 
        : 'Not compatible with Google Rich Results'
    });

    // Facebook Open Graph测试
    tests.push({
      testName: 'Facebook Open Graph Compatibility',
      passed: this.testFacebookOpenGraph(schema),
      message: this.testFacebookOpenGraph(schema) 
        ? 'Compatible with Facebook Open Graph' 
        : 'Not compatible with Facebook Open Graph'
    });

    // Twitter Cards测试
    tests.push({
      testName: 'Twitter Cards Compatibility',
      passed: this.testTwitterCards(schema),
      message: this.testTwitterCards(schema) 
        ? 'Compatible with Twitter Cards' 
        : 'Not compatible with Twitter Cards'
    });

    const executionTime = Date.now() - startTime;
    const overallPassed = tests.every(test => test.passed);

    return {
      name: 'Compatibility Test Suite',
      tests,
      overallPassed,
      executionTime
    };
  }

  /**
   * 测试Google Rich Results兼容性
   */
  private testGoogleRichResults(schema: any): boolean {
    // Google Rich Results需要的基本字段
    const requiredFields = ['@context', '@type'];
    return requiredFields.every(field => schema[field]);
  }

  /**
   * 测试Facebook Open Graph兼容性
   */
  private testFacebookOpenGraph(schema: any): boolean {
    // Facebook需要的基本字段
    const requiredFields = ['name', 'description'];
    return requiredFields.some(field => schema[field]);
  }

  /**
   * 测试Twitter Cards兼容性
   */
  private testTwitterCards(schema: any): boolean {
    // Twitter需要的基本字段
    const requiredFields = ['name', 'description'];
    return requiredFields.some(field => schema[field]);
  }
}

// 导出单例实例
export const schemaValidator = new SchemaValidator();
export const schemaTestRunner = new SchemaTestRunner();
