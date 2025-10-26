import React from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};
export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  return (
    <div className="tw-flex tw-gap-2 tw-justify-center tw-mt-4">
      <button
        className="tw-px-3 tw-py-1 tw-rounded tw-bg-gray-200 hover:tw-bg-gray-300"
        onClick={() => onPageChange(currentPage)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`tw-px-3 tw-py-1 tw-rounded ${
            page === currentPage
              ? "tw-bg-blue-500 tw-text-white"
              : "tw-bg-gray-200 hover:tw-bg-gray-300"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        className="tw-px-3 tw-py-1 tw-rounded tw-bg-gray-200 hover:tw-bg-gray-300"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
