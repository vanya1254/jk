"use client";

import React from "react";

import { useAppSelector } from "@/lib/hooks";
import { productsSelector } from "@/lib/features/products/selectors";

import styles from "./Pagintaion.module.scss";

type PaginationPropsT = {
  changeParams: (name: string, value: string) => void;
};

export const Pagination: React.FC<PaginationPropsT> = ({ changeParams }) => {
  const { meta } = useAppSelector(productsSelector);

  return (
    <ul className={styles.root}>
      {[...new Array(meta.total_pages)].map((_, pageNum) => (
        <li key={pageNum} className={styles.root_page}>
          <button
            className={`${styles.root_link} ${
              meta.current_page === pageNum + 1 ? styles.root_active : ""
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