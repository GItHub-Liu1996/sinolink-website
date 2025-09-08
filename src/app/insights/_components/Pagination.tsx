'use client';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const handlePageChange = (page: number) => {
    // 简单的分页逻辑，后续可以添加URL更新等
    console.log('Page changed to:', page);
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-12">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-background-secondary border border-gray-700 rounded-lg text-text-main hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
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
                ? 'bg-accent-cyan text-background'
                : 'bg-background-secondary border border-gray-700 text-text-main hover:bg-gray-700'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
      
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-background-secondary border border-gray-700 rounded-lg text-text-main hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
      >
        Next
      </button>
    </div>
  );
}
