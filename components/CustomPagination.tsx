"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const CustomPagination = () => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();

  const pageParam = params.get("page") || "1";
  const pageNumber = parseInt(pageParam, 10);
  const [page, setPage] = useState(pageNumber || 1);

  return (
    <>
      <Pagination className="my-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className="cursor-pointer"
              onClick={() => {
                if (page === 1) return;
                setPage(page - 1);
                router.push(`${pathname}?page=${page - 1}`);
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink>{page}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              className="cursor-pointer"
              onClick={() => {
                setPage(page + 1);
                router.push(`${pathname}?page=${page + 1}`);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};

export default CustomPagination;
