import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface CustomPaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  // Move to previous page
  const moveToPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Move to next page
  const moveToNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <Pagination>
      <PaginationContent className="flex items-center gap-4">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              moveToPrevious();
            }}
            aria-disabled={currentPage === 1}
            className={`${
              currentPage === 1 ? "opacity-50 pointer-events-none" : ""
            }`}
          />
        </PaginationItem>

        {/* Page Indicator */}
        <span className="text-sm font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              moveToNext();
            }}
            aria-disabled={currentPage === totalPages}
            className={`${
              currentPage === totalPages ? "opacity-50 pointer-events-none" : ""
            }`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
