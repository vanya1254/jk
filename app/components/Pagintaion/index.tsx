"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import styles from "./Pagintaion.module.scss";

type PaginationPropsT = {
  changeParams: (name: string, value: string) => void;
  countPages: number;
  currentPage: number;
};

export const Pagination: React.FC<PaginationPropsT> = ({
  changeParams,
  countPages,
  currentPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  return (
    <ul className={styles.root}>
      {[...new Array(countPages)].map((_, pageNum) => (
        <li key={pageNum} className={styles.root_page}>
          <button
            className={`${styles.root_link} ${
              currentPage === pageNum + 1 ? styles.root_active : ""
            }`}
            onClick={() => changeParams("page", `${pageNum + 1}`)}
          >
            {pageNum + 1}
          </button>
        </li>
      ))}
    </ul>
  );
};
