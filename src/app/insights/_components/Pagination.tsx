'use client';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const handlePageChange = (page: number) => {
    // Simple pagination logic, can add URL updates later
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-12">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-background-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-lg"
      >
        Previous
      </button>
      
      <div className="flex space-x-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-3 py-2 rounded-lg transition-all duration-300 ${
              page === currentPage
                ? 'bg-gradient-to-r from-accent-cyan to-accent-magenta text-white shadow-lg'
                : 'border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-background-primary'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border-2 border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-background-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 rounded-lg"
      >
        Next
      </button>
    </div>
  );
}
