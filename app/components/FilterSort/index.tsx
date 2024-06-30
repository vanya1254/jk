"use client";

import React, { useCallback, useId, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { sortTypes } from "@/app/constants";
import ButtonCustom from "@/app/components/ButtonCustom";
import { Filters } from "../";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { filterSelector } from "@/lib/features/filter/selectors";
import { setActiveSortType } from "@/lib/features/filter/slice";
import { productsSelector } from "@/lib/features/products/selectors";
import { Status } from "@/lib/mainTypes";

import styles from "./FilterSort.module.scss";

export const FilterSort: React.FC = () => {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const idDetails = useId();
  const { activeSortType } = useAppSelector(filterSelector);
  const { products, status } = useAppSelector(productsSelector);
  const [isOpenFilters, setIsOpenFilters] = useState<boolean>(false);

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
          {/* <button
            onClick={() => setIsOpenFilters((prev) => !prev)}
            className={styles.root__btns_filters}
          >
            Filters
          </button> */}
          <ButtonCustom
            onClick={() => setIsOpenFilters((prev) => !prev)}
            text={`Filters`}
          />
          <div className={styles.root__container}>
            <details
              id={idDetails}
              onMouseOver={onMouseOver}
              onMouseOut={onMouseOut}
              className={styles.root__details}
            >
              <summary id={idDetails} onClick={(e) => e.preventDefault()}>
                Sort By:
                <span>{activeSortType.name}</span>
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
                    <button
                      onClick={() => {
                        dispatch(setActiveSortType(type));
                        changeParams(`sortBy`, type.sortProperty);
                      }}
                    >
                      {type.name}
                    </button>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>
        <p className={styles.root_count}>
          [{status === Status.FULFILLED ? products.length : 0}]
        </p>
      </div>
      <Filters
        changeParams={changeParams}
        isOpen={isOpenFilters}
        setIsOpen={setIsOpenFilters}
      />
    </>
  );
};
