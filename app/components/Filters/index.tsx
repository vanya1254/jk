"use client";

import React from "react";

import { ButtonCustom, SwiperSlider } from "../";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { filtersSelector } from "@/lib/features/filters/selectors";
import { filterSelector } from "@/lib/features/filter/selectors";
import { setActiveCategory } from "@/lib/features/filter/slice";

import { Status } from "@/lib/mainTypes";

import styles from "./Filters.module.scss";

type FiltersPropsT = {
  clearParams: () => void;
  changeParams: (name: string, value: string) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Filters: React.FC<FiltersPropsT> = ({
  clearParams,
  changeParams,
  isOpen,
  setIsOpen,
}) => {
  const dispatch = useAppDispatch();
  const { filters, status } = useAppSelector(filtersSelector);
  const { activeCategory } = useAppSelector(filterSelector);

  const onClickCategory = (i: number, value: string) => {
    const newCategory = activeCategory.map((category) => ({ ...category }));
    newCategory[i].value = [value];

    dispatch(setActiveCategory(newCategory));
    // changeParams(
    //   activeCategory.map((cat) => `${cat.path}=${cat.value}`).join("&")
    // );
    changeParams(newCategory[i].path, newCategory[i].value[0]);
  };

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
                  {filter.value.map((value, j) => (
                    <ButtonCustom
                      key={j}
                      onClick={() => onClickCategory(i, value)}
                      text={value}
                    />
                  ))}
                </SwiperSlider>
              </details>
            </div>
          ))
        : "LOADING"}
      <ButtonCustom
        className={styles.root_clearAll}
        onClick={clearParams}
        text={`Clear All`}
      />
    </section>
  );
};
