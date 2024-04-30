"use client";

import React, { useEffect, useState } from "react";

import { filterNames, filterTypes } from "@/app/constants";
import { ButtonCustom, SwiperSlider } from "../";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { filtersSelector } from "@/lib/features/filters/selectors";

import styles from "./Filters.module.scss";
import getMatrixFilters from "@/app/utils/getMatrixFilters";

type FiltersPropsT = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Filters: React.FC<FiltersPropsT> = ({ isOpen, setIsOpen }) => {
  const dispatch = useAppDispatch();
  const { filters, status } = useAppSelector(filtersSelector);
  const [filtersTypes, setFiltersTypes] = useState(filterTypes);

  const getFiltersTypes = () => {
    if (filters && filters.length) {
      const filtersNew = getMatrixFilters(filters);

      setFiltersTypes(() => {
        const updated = filterTypes.map((filter, i) => {
          filter.value = filtersNew[i];

          return filter;
        });

        return updated;
      });
    }
    console.log(filtersTypes);
  };

  useEffect(() => {
    getFiltersTypes();
  }, []);

  return (
    <section
      className={`${styles.root}`}
      style={{
        transform: `${
          isOpen
            ? "translate(0vh, 0vh)"
            : "translate(0vh, var(--max-height-filters))"
        }`,
      }}
    >
      <div
        className={styles.root_moveMe}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <hr />
      </div>
      <h4 className={styles.root_title}>Filters</h4>
      {filtersTypes.map((filter, i) => (
        <div key={i} className={styles.root__container}>
          <details className={styles.root__details}>
            <summary>
              <span>{filter.name}</span>
              <picture className={styles.root__details_svg}></picture>
            </summary>
            <SwiperSlider
              classNameChild={styles.root__details__content_child}
              className={styles.root__details__content}
              gap={10}
              slidesPerView={"auto"}
            >
              {filter.value.map((value, i) => (
                <ButtonCustom key={i} onClick={() => null} text={value} />
              ))}
            </SwiperSlider>
          </details>
        </div>
      ))}
    </section>
  );
};
