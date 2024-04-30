"use client";

import React from "react";

import { ButtonCustom, SwiperSlider } from "../";

import { useAppSelector } from "@/lib/hooks";
import { filtersSelector } from "@/lib/features/filters/selectors";
import { Status } from "@/lib/mainTypes";

import styles from "./Filters.module.scss";

type FiltersPropsT = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Filters: React.FC<FiltersPropsT> = ({ isOpen, setIsOpen }) => {
  const { filters, status } = useAppSelector(filtersSelector);

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
      {status === Status.FULFILLED
        ? filters.map((filter, i) => (
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
          ))
        : "LOADING"}
    </section>
  );
};
