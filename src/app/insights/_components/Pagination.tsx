'use client';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  // Generate page numbers with smart display
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 7; // Maximum number of page buttons to show
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Smart pagination with ellipsis
      if (currentPage <= 4) {
        // Show first 5 pages + ellipsis + last page
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 3) {
        // Show first page + ellipsis + last 5 pages
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Show first page + ellipsis + current page range + ellipsis + last page
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="flex flex-col items-center space-y-4 mt-12">
      {/* Page info */}
      <div className="text-sm text-text-muted">
        Page {currentPage} of {totalPages} 
        <span className="ml-2">
          ({(currentPage - 1) * 8 + 1}-{Math.min(currentPage * 8, totalPages * 8)} of {totalPages * 8} articles)
        </span>
      </div>
      
      {/* Pagination controls */}
      <div className="flex justify-center items-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-background-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-lg font-medium"
        >
          ← Previous
        </button>
        
        <div className="flex space-x-1">
          {pageNumbers.map((page, index) => (
            page === '...' ? (
              <span key={`ellipsis-${index}`} className="px-3 py-2 text-text-muted">
                ...
              </span>
            ) : (
              <button
                key={page}
                onClick={() => handlePageChange(page as number)}
                className={`px-3 py-2 rounded-lg transition-all duration-300 font-medium ${
                  page === currentPage
                    ? 'bg-gradient-to-r from-accent-cyan to-accent-magenta text-white shadow-lg scale-105'
                    : 'border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-background-primary hover:scale-105'
                }`}
              >
                {page}
              </button>
            )
          ))}
        </div>
        
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-background-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-lg font-medium"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
