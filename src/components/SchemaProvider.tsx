/**
 * Schema Markup 自动化提供者组件
 * 提供全局Schema管理和自动更新功能
 */

'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { schemaGenerator, SchemaGenerator, BaseSchema } from '@/lib/schema';
import { useSchemaCache } from '@/hooks/useSchema';

interface SchemaContextType {
  schemas: Record<string, BaseSchema>;
  isLoading: boolean;
  errors: Record<string, string>;
  validationResults: Record<string, { isValid: boolean; errors: string[] }>;
  addSchema: (key: string, type: string, data: any, overrides?: any) => void;
  updateSchema: (key: string, data: any) => void;
  removeSchema: (key: string) => void;
  refreshSchema: (key: string) => void;
  refreshAllSchemas: () => void;
  validateSchema: (key: string) => boolean;
  getSchema: (key: string) => BaseSchema | null;
  getSchemaAsJsonLd: (key: string) => string | null;
}

const SchemaContext = createContext<SchemaContextType | null>(null);

interface SchemaProviderProps {
  children: ReactNode;
  initialSchemas?: Array<{
    key: string;
    type: string;
    data: any;
    overrides?: any;
  }>;
  autoUpdate?: boolean;
  cacheEnabled?: boolean;
}

export function SchemaProvider({ 
  children, 
  initialSchemas = [], 
  autoUpdate = true,
  cacheEnabled = true 
}: SchemaProviderProps) {
  const [schemas, setSchemas] = useState<Record<string, BaseSchema>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [validationResults, setValidationResults] = useState<Record<string, { isValid: boolean; errors: string[] }>>({});
  
  const { getCachedSchema, setCachedSchema, clearCachedSchema } = useSchemaCache();

  // 生成Schema的函数
  const generateSchema = (type: string, data: any, overrides?: any): BaseSchema | null => {
    try {
      switch (type) {
        case 'organization':
          return schemaGenerator.generateOrganizationSchema(overrides);
        case 'website':
          return schemaGenerator.generateWebSiteSchema(overrides);
        case 'article':
          return schemaGenerator.generateArticleSchema(data, overrides);
        case 'service':
          return schemaGenerator.generateProfessionalServiceSchema(data, overrides);
        case 'webpage':
          return schemaGenerator.generateWebPageSchema(data, overrides);
        case 'collection':
          return schemaGenerator.generateCollectionPageSchema(data, overrides);
        case 'contact':
          return schemaGenerator.generateContactPageSchema(overrides);
        case 'about':
          return schemaGenerator.generateAboutPageSchema(overrides);
        default:
          throw new Error(`Unknown schema type: ${type}`);
      }
    } catch (error) {
      console.error(`Failed to generate ${type} schema:`, error);
      return null;
    }
  };

  // 添加Schema
  const addSchema = (key: string, type: string, data: any, overrides?: any) => {
    setIsLoading(true);
    
    try {
      // 尝试从缓存加载
      if (cacheEnabled) {
        const cached = getCachedSchema(key);
        if (cached) {
          setSchemas(prev => ({ ...prev, [key]: cached }));
          const validation = schemaGenerator.validateSchema(cached);
          setValidationResults(prev => ({ ...prev, [key]: validation }));
          setIsLoading(false);
          return;
        }
      }

      // 生成新Schema
      const newSchema = generateSchema(type, data, overrides);
      if (newSchema) {
        setSchemas(prev => ({ ...prev, [key]: newSchema }));
        
        // 验证Schema
        const validation = schemaGenerator.validateSchema(newSchema);
        setValidationResults(prev => ({ ...prev, [key]: validation }));
        
        // 缓存Schema
        if (cacheEnabled) {
          setCachedSchema(key, newSchema);
        }
        
        // 清除错误
        setErrors(prev => {
          const newErrors = { ...prev };
          delete newErrors[key];
          return newErrors;
        });
      } else {
        setErrors(prev => ({ ...prev, [key]: `Failed to generate ${type} schema` }));
      }
    } catch (error) {
      setErrors(prev => ({ 
        ...prev, 
        [key]: error instanceof Error ? error.message : 'Unknown error' 
      }));
    } finally {
      setIsLoading(false);
    }
  };

  // 更新Schema
  const updateSchema = (key: string, data: any) => {
    const existingSchema = schemas[key];
    if (!existingSchema) {
      console.warn(`Schema ${key} not found`);
      return;
    }

    // 确定Schema类型
    const schemaType = existingSchema['@type'].toLowerCase().replace('schema', '');
    addSchema(key, schemaType, data);
  };

  // 移除Schema
  const removeSchema = (key: string) => {
    setSchemas(prev => {
      const newSchemas = { ...prev };
      delete newSchemas[key];
      return newSchemas;
    });
    
    setValidationResults(prev => {
      const newResults = { ...prev };
      delete newResults[key];
      return newResults;
    });
    
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[key];
      return newErrors;
    });

    if (cacheEnabled) {
      clearCachedSchema(key);
    }
  };

  // 刷新Schema
  const refreshSchema = (key: string) => {
    const existingSchema = schemas[key];
    if (!existingSchema) {
      console.warn(`Schema ${key} not found`);
      return;
    }

    // 重新生成Schema
    const schemaType = existingSchema['@type'].toLowerCase().replace('schema', '');
    addSchema(key, schemaType, {}, {});
  };

  // 刷新所有Schema
  const refreshAllSchemas = () => {
    Object.keys(schemas).forEach(key => {
      refreshSchema(key);
    });
  };

  // 验证Schema
  const validateSchema = (key: string): boolean => {
    const schema = schemas[key];
    if (!schema) return false;

    const validation = schemaGenerator.validateSchema(schema);
    setValidationResults(prev => ({ ...prev, [key]: validation }));
    
    return validation.isValid;
  };

  // 获取Schema
  const getSchema = (key: string): BaseSchema | null => {
    return schemas[key] || null;
  };

  // 获取Schema作为JSON-LD字符串
  const getSchemaAsJsonLd = (key: string): string | null => {
    const schema = schemas[key];
    return schema ? schemaGenerator.toJsonLd(schema) : null;
  };

  // 初始化Schema
  useEffect(() => {
    if (initialSchemas.length > 0) {
      setIsLoading(true);
      
      initialSchemas.forEach(({ key, type, data, overrides }) => {
        addSchema(key, type, data, overrides);
      });
      
      setIsLoading(false);
    }
  }, []);

  // 自动更新功能
  useEffect(() => {
    if (!autoUpdate) return;

    const interval = setInterval(() => {
      // 检查是否有Schema需要更新
      Object.keys(schemas).forEach(key => {
        const validation = validationResults[key];
        if (validation && !validation.isValid) {
          refreshSchema(key);
        }
      });
    }, 30000); // 每30秒检查一次

    return () => clearInterval(interval);
  }, [autoUpdate, schemas, validationResults]);

  const contextValue: SchemaContextType = {
    schemas,
    isLoading,
    errors,
    validationResults,
    addSchema,
    updateSchema,
    removeSchema,
    refreshSchema,
    refreshAllSchemas,
    validateSchema,
    getSchema,
    getSchemaAsJsonLd
  };

  return (
    <SchemaContext.Provider value={contextValue}>
      {children}
    </SchemaContext.Provider>
  );
}

// Hook to use Schema context
export function useSchemaContext(): SchemaContextType {
  const context = useContext(SchemaContext);
  if (!context) {
    throw new Error('useSchemaContext must be used within a SchemaProvider');
  }
  return context;
}

// Schema Script Component
interface SchemaScriptProps {
  schemaKey: string;
  className?: string;
}

export function SchemaScript({ schemaKey, className }: SchemaScriptProps) {
  const { getSchemaAsJsonLd } = useSchemaContext();
  
  const jsonLd = getSchemaAsJsonLd(schemaKey);
  
  if (!jsonLd) {
    return null;
  }

  return (
    <script
      type="application/ld+json"
      className={className}
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}

// Multiple Schema Scripts Component
interface MultipleSchemaScriptsProps {
  schemaKeys: string[];
  className?: string;
}

export function MultipleSchemaScripts({ schemaKeys, className }: MultipleSchemaScriptsProps) {
  const { getSchemaAsJsonLd } = useSchemaContext();
  
  const scripts = schemaKeys
    .map(key => getSchemaAsJsonLd(key))
    .filter(Boolean)
    .map((jsonLd, index) => (
      <script
        key={index}
        type="application/ld+json"
        className={className}
        dangerouslySetInnerHTML={{ __html: jsonLd! }}
      />
    ));

  return <>{scripts}</>;
}

// Schema Debug Component
interface SchemaDebugProps {
  schemaKey?: string;
  showAll?: boolean;
}

export function SchemaDebug({ schemaKey, showAll = false }: SchemaDebugProps) {
  const { schemas, validationResults, errors } = useSchemaContext();
  
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  const targetSchemas = schemaKey 
    ? { [schemaKey]: schemas[schemaKey] }
    : showAll 
      ? schemas 
      : {};

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-90 text-white p-4 rounded-lg max-w-md max-h-96 overflow-auto text-xs">
      <h3 className="font-bold mb-2">Schema Debug</h3>
      {Object.entries(targetSchemas).map(([key, schema]) => (
        <div key={key} className="mb-3 p-2 bg-gray-800 rounded">
          <div className="font-semibold text-green-400">{key}</div>
          <div className="text-gray-300">
            Type: {schema?.['@type'] || 'Unknown'}
          </div>
          <div className="text-gray-300">
            Valid: {validationResults[key]?.isValid ? '✅' : '❌'}
          </div>
          {validationResults[key]?.errors.length > 0 && (
            <div className="text-red-400">
              Errors: {validationResults[key].errors.join(', ')}
            </div>
          )}
          {errors[key] && (
            <div className="text-red-400">
              Error: {errors[key]}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
