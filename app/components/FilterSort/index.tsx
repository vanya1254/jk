"use client";

import React, { useId, useState } from "react";

import { sortTypes } from "@/app/constants";
import { Filters } from "../";

import styles from "./FilterSort.module.scss";

type FilterSortPropsT = {
  count: number;
};

export const FilterSort: React.FC<FilterSortPropsT> = ({ count }) => {
  const idDetails = useId();
  const [isOpenFilters, setIsOpenFilters] = useState<boolean>(false);

  const onMouseOver = (e: React.MouseEvent<HTMLElement>) => {
    const details = e.currentTarget;
    details?.setAttribute("open", "");
  };

  const onMouseOut = (e: React.MouseEvent<HTMLElement>) => {
    const details = e.currentTarget;
    details?.removeAttribute("open");
  };

  return (
    <>
      <div className={styles.root}>
        <div className={styles.root__btns}>
          <button
            onClick={() => setIsOpenFilters((prev) => !prev)}
            className={styles.root__btns_filters}
          >
            Filters
          </button>
          <div className={styles.root__container}>
            <details
              id={idDetails}
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
              className={styles.root__details}
            >
              <summary id={idDetails} onClick={(e) => e.preventDefault()}>
                Sort By:
                <span>{`Price ↓`}</span>
                <svg viewBox="0 0 6 4" width="15px" height="10px">
                  <path
                    d="M5.27 0L2.999 2.509.729 0 0 .684 2.999 4l3-3.316z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </summary>
              <ul className={styles.root__details__content}>
                {sortTypes.map((type, i) => (
                  <li key={i}>
                    <button>{type}</button>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>
        <p className={styles.root_count}>[{count}]</p>
      </div>
      <Filters isOpen={isOpenFilters} setIsOpen={setIsOpenFilters} />
    </>
  );
};
