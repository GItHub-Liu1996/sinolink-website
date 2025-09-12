/**
 * Schema Markup 自动化Hook
 * 提供动态Schema生成和更新功能
 */

import { useEffect, useState, useCallback } from 'react';
import { schemaGenerator, SchemaGenerator, BaseSchema } from '@/lib/schema';

export interface UseSchemaOptions {
  autoUpdate?: boolean;
  validateOnMount?: boolean;
  cacheKey?: string;
  debounceMs?: number;
}

export interface UseSchemaReturn {
  schema: BaseSchema | null;
  isLoading: boolean;
  error: string | null;
  isValid: boolean;
  validationErrors: string[];
  updateSchema: (newSchema: BaseSchema) => void;
  refreshSchema: () => void;
  validateSchema: () => boolean;
}

/**
 * 使用Schema的Hook
 */
export function useSchema(
  schemaType: string,
  data: any,
  options: UseSchemaOptions = {}
): UseSchemaReturn {
  const {
    autoUpdate = true,
    validateOnMount = true,
    cacheKey,
    debounceMs = 300
  } = options;

  const [schema, setSchema] = useState<BaseSchema | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  // 生成Schema的函数
  const generateSchema = useCallback(() => {
    try {
      setIsLoading(true);
      setError(null);

      let newSchema: BaseSchema;

      switch (schemaType) {
        case 'organization':
          newSchema = schemaGenerator.generateOrganizationSchema(data);
          break;
        case 'website':
          newSchema = schemaGenerator.generateWebSiteSchema(data);
          break;
        case 'article':
          newSchema = schemaGenerator.generateArticleSchema(data);
          break;
        case 'service':
          newSchema = schemaGenerator.generateProfessionalServiceSchema(data);
          break;
        case 'webpage':
          newSchema = schemaGenerator.generateWebPageSchema(data);
          break;
        case 'collection':
          newSchema = schemaGenerator.generateCollectionPageSchema(data);
          break;
        case 'contact':
          newSchema = schemaGenerator.generateContactPageSchema(data);
          break;
        case 'about':
          newSchema = schemaGenerator.generateAboutPageSchema(data);
          break;
        default:
          throw new Error(`Unknown schema type: ${schemaType}`);
      }

      setSchema(newSchema);

      // 验证Schema
      if (validateOnMount) {
        const validation = schemaGenerator.validateSchema(newSchema);
        setIsValid(validation.isValid);
        setValidationErrors(validation.errors);
      }

      // 缓存Schema
      if (cacheKey) {
        localStorage.setItem(`schema_${cacheKey}`, JSON.stringify(newSchema));
      }

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setIsValid(false);
      setValidationErrors(['Schema generation failed']);
    } finally {
      setIsLoading(false);
    }
  }, [schemaType, data, validateOnMount, cacheKey]);

  // 更新Schema的函数
  const updateSchema = useCallback((newSchema: BaseSchema) => {
    setSchema(newSchema);
    
    if (validateOnMount) {
      const validation = schemaGenerator.validateSchema(newSchema);
      setIsValid(validation.isValid);
      setValidationErrors(validation.errors);
    }

    if (cacheKey) {
      localStorage.setItem(`schema_${cacheKey}`, JSON.stringify(newSchema));
    }
  }, [validateOnMount, cacheKey]);

  // 刷新Schema的函数
  const refreshSchema = useCallback(() => {
    generateSchema();
  }, [generateSchema]);

  // 验证Schema的函数
  const validateSchema = useCallback(() => {
    if (!schema) return false;
    
    const validation = schemaGenerator.validateSchema(schema);
    setIsValid(validation.isValid);
    setValidationErrors(validation.errors);
    
    return validation.isValid;
  }, [schema]);

  // 从缓存加载Schema
  const loadFromCache = useCallback(() => {
    if (!cacheKey) return false;

    try {
      const cached = localStorage.getItem(`schema_${cacheKey}`);
      if (cached) {
        const parsedSchema = JSON.parse(cached);
        setSchema(parsedSchema);
        
        if (validateOnMount) {
          const validation = schemaGenerator.validateSchema(parsedSchema);
          setIsValid(validation.isValid);
          setValidationErrors(validation.errors);
        }
        
        return true;
      }
    } catch (err) {
      console.warn('Failed to load schema from cache:', err);
    }
    
    return false;
  }, [cacheKey, validateOnMount]);

  // 防抖更新
  useEffect(() => {
    if (!autoUpdate) return;

    const timeoutId = setTimeout(() => {
      generateSchema();
    }, debounceMs);

    return () => clearTimeout(timeoutId);
  }, [autoUpdate, debounceMs, generateSchema]);

  // 初始化
  useEffect(() => {
    // 尝试从缓存加载
    if (cacheKey && loadFromCache()) {
      return;
    }

    // 生成新Schema
    generateSchema();
  }, [cacheKey, loadFromCache, generateSchema]);

  return {
    schema,
    isLoading,
    error,
    isValid,
    validationErrors,
    updateSchema,
    refreshSchema,
    validateSchema
  };
}

/**
 * 使用多个Schema的Hook
 */
export function useMultipleSchemas(
  schemas: Array<{
    type: string;
    data: any;
    cacheKey?: string;
  }>,
  options: UseSchemaOptions = {}
) {
  const [allSchemas, setAllSchemas] = useState<Record<string, BaseSchema>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [validationResults, setValidationResults] = useState<Record<string, { isValid: boolean; errors: string[] }>>({});

  const generateAllSchemas = useCallback(() => {
    setIsLoading(true);
    setErrors({});
    setValidationResults({});

    try {
      const results = schemaGenerator.generateMultipleSchemas(
        schemas.map(s => ({
          type: s.type as any,
          data: s.data,
          overrides: {}
        }))
      );

      setAllSchemas(results);

      // 验证所有Schema
      const validationResults: Record<string, { isValid: boolean; errors: string[] }> = {};
      Object.entries(results).forEach(([key, schema]) => {
        validationResults[key] = schemaGenerator.validateSchema(schema);
        
        // 缓存Schema
        if (schemas.find(s => s.type === key)?.cacheKey) {
          localStorage.setItem(`schema_${key}`, JSON.stringify(schema));
        }
      });

      setValidationResults(validationResults);

    } catch (err) {
      setErrors({ general: err instanceof Error ? err.message : 'Unknown error' });
    } finally {
      setIsLoading(false);
    }
  }, [schemas]);

  useEffect(() => {
    generateAllSchemas();
  }, [generateAllSchemas]);

  return {
    schemas: allSchemas,
    isLoading,
    errors,
    validationResults,
    refreshAll: generateAllSchemas
  };
}

/**
 * Schema监听Hook - 监听数据变化并自动更新Schema
 */
export function useSchemaWatcher(
  schemaType: string,
  data: any,
  watchFields: string[] = [],
  options: UseSchemaOptions = {}
) {
  const [previousData, setPreviousData] = useState(data);
  const [hasChanged, setHasChanged] = useState(false);

  const schemaHook = useSchema(schemaType, data, options);

  // 监听指定字段的变化
  useEffect(() => {
    const hasFieldChanged = watchFields.some(field => {
      const currentValue = data?.[field];
      const previousValue = previousData?.[field];
      return JSON.stringify(currentValue) !== JSON.stringify(previousValue);
    });

    if (hasFieldChanged) {
      setHasChanged(true);
      setPreviousData(data);
      
      // 延迟更新Schema以避免频繁更新
      const timeoutId = setTimeout(() => {
        schemaHook.refreshSchema();
        setHasChanged(false);
      }, options.debounceMs || 500);

      return () => clearTimeout(timeoutId);
    }
  }, [data, previousData, watchFields, schemaHook, options.debounceMs]);

  return {
    ...schemaHook,
    hasChanged,
    watchedFields: watchFields
  };
}

/**
 * Schema缓存管理Hook
 */
export function useSchemaCache() {
  const [cache, setCache] = useState<Record<string, any>>({});

  const getCachedSchema = useCallback((key: string) => {
    try {
      const cached = localStorage.getItem(`schema_${key}`);
      return cached ? JSON.parse(cached) : null;
    } catch {
      return null;
    }
  }, []);

  const setCachedSchema = useCallback((key: string, schema: any) => {
    try {
      localStorage.setItem(`schema_${key}`, JSON.stringify(schema));
      setCache(prev => ({ ...prev, [key]: schema }));
    } catch (err) {
      console.warn('Failed to cache schema:', err);
    }
  }, []);

  const clearCachedSchema = useCallback((key: string) => {
    try {
      localStorage.removeItem(`schema_${key}`);
      setCache(prev => {
        const newCache = { ...prev };
        delete newCache[key];
        return newCache;
      });
    } catch (err) {
      console.warn('Failed to clear cached schema:', err);
    }
  }, []);

  const clearAllCachedSchemas = useCallback(() => {
    try {
      Object.keys(localStorage)
        .filter(key => key.startsWith('schema_'))
        .forEach(key => localStorage.removeItem(key));
      setCache({});
    } catch (err) {
      console.warn('Failed to clear all cached schemas:', err);
    }
  }, []);

  const getCacheSize = useCallback(() => {
    try {
      return Object.keys(localStorage)
        .filter(key => key.startsWith('schema_'))
        .length;
    } catch {
      return 0;
    }
  }, []);

  return {
    cache,
    getCachedSchema,
    setCachedSchema,
    clearCachedSchema,
    clearAllCachedSchemas,
    getCacheSize
  };
}
