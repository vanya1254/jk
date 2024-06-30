"use client";

import React, { useCallback } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { useAppSelector } from "@/lib/hooks";
import { productsSelector } from "@/lib/features/products/selectors";

import styles from "./Pagintaion.module.scss";

export const Pagination: React.FC = () => {
  const { meta } = useAppSelector(productsSelector);
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }

      return params.toString();
    },
    [searchParams]
  );

  const changeParams = (name: string, value: string): void => {
    router.push(`${pathName}?${createQueryString(name, value)}`);
  };

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
