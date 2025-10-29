import React, { useCallback } from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};
function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages: (number | string)[] = [];
  pages.push(1);
  if (currentPage > 2) pages.push("...");
  if (currentPage !== 1 && currentPage !== totalPages) {
    pages.push(currentPage);
  }
  if (currentPage < totalPages - 1) pages.push("...");
  if (totalPages > 1) pages.push(totalPages);

  const handleOnPageChange = useCallback((page: number) => {
    onPageChange(page);
  }, []);

  return (
    <div className="tw-flex tw-gap-2 tw-justify-center tw-mt-4">
      <button
        className={`tw-px-3 tw-py-1 tw-rounded tw-bg-gray-200 hover:tw-bg-gray-300 ${
          currentPage === 1 ? "tw-hidden" : ""
        }`}
        onClick={() => handleOnPageChange(Math.max(currentPage - 1, 1))}
      >
        Prev
      </button>

      {pages.map((page, idx) =>
        typeof page === "number" ? (
          <button
            key={idx}
            className={`tw-px-3 tw-py-1 tw-rounded ${
              page === currentPage
                ? "tw-bg-blue-500 tw-text-white"
                : "tw-bg-gray-200 hover:tw-bg-gray-300"
            }`}
            onClick={() => handleOnPageChange(page)}
          >
            {page}
          </button>
        ) : (
          <span key={idx} className="tw-px-2 tw-py-1">
            {page}
          </span>
        )
      )}

      <button
        className={`tw-px-3 tw-py-1 tw-rounded tw-bg-gray-200 hover:tw-bg-gray-300 ${
          currentPage === totalPages ? "tw-hidden" : ""
        }`}
        onClick={() =>
          handleOnPageChange(Math.min(currentPage + 1, totalPages))
        }
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
export default React.memo(Pagination);
