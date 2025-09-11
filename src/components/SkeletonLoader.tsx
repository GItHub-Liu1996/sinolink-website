'use client';

interface SkeletonLoaderProps {
  type?: 'text' | 'image' | 'card' | 'button' | 'circle';
  width?: string | number;
  height?: string | number;
  className?: string;
  lines?: number;
}

export default function SkeletonLoader({
  type = 'text',
  width = '100%',
  height = '1rem',
  className = '',
  lines = 1
}: SkeletonLoaderProps) {
  const baseClasses = 'animate-pulse bg-gray-200 rounded';
  
  const getSkeletonElement = () => {
    switch (type) {
      case 'text':
        return (
          <div className={`${baseClasses} ${className}`} style={{ width, height }} />
        );
      
      case 'image':
        return (
          <div 
            className={`${baseClasses} ${className}`} 
            style={{ width, height }}
          />
        );
      
      case 'card':
        return (
          <div className={`${baseClasses} p-4 ${className}`} style={{ width, height }}>
            <div className="space-y-3">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            </div>
          </div>
        );
      
      case 'button':
        return (
          <div 
            className={`${baseClasses} ${className}`} 
            style={{ width, height }}
          />
        );
      
      case 'circle':
        return (
          <div 
            className={`${baseClasses} rounded-full ${className}`} 
            style={{ width, height }}
          />
        );
      
      default:
        return (
          <div className={`${baseClasses} ${className}`} style={{ width, height }} />
        );
    }
  };

  if (type === 'text' && lines > 1) {
    return (
      <div className={className}>
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={`${baseClasses} mb-2`}
            style={{ 
              width: index === lines - 1 ? '60%' : '100%', 
              height 
            }}
          />
        ))}
      </div>
    );
  }

  return getSkeletonElement();
}

// Predefined skeleton components for common use cases
export const HeroSkeleton = () => (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center space-y-6">
        <SkeletonLoader type="text" height="3rem" width="80%" className="mx-auto" />
        <SkeletonLoader type="text" height="1.5rem" width="60%" className="mx-auto" />
        <SkeletonLoader type="button" height="3rem" width="200px" className="mx-auto" />
      </div>
    </div>
  </div>
);

export const CardSkeleton = () => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="space-y-4">
      <SkeletonLoader type="image" height="200px" />
      <SkeletonLoader type="text" height="1.5rem" width="80%" />
      <SkeletonLoader type="text" lines={3} />
      <SkeletonLoader type="button" height="2.5rem" width="120px" />
    </div>
  </div>
);

export const ServiceCardSkeleton = () => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <div className="space-y-4">
      <SkeletonLoader type="circle" width="60px" height="60px" />
      <SkeletonLoader type="text" height="1.5rem" width="90%" />
      <SkeletonLoader type="text" lines={2} />
      <SkeletonLoader type="button" height="2.5rem" width="100%" />
    </div>
  </div>
);

export const BlogCardSkeleton = () => (
  <article className="bg-white rounded-lg shadow-md overflow-hidden">
    <SkeletonLoader type="image" height="200px" />
    <div className="p-6 space-y-4">
      <SkeletonLoader type="text" height="1.5rem" width="80%" />
      <SkeletonLoader type="text" lines={3} />
      <div className="flex items-center space-x-4">
        <SkeletonLoader type="circle" width="40px" height="40px" />
        <SkeletonLoader type="text" height="1rem" width="100px" />
      </div>
    </div>
  </article>
);
