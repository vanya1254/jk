import React from "react";

import styles from "./Filters.module.scss";
import { filterTypes } from "@/app/constants";

type FiltersPropsT = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Filters: React.FC<FiltersPropsT> = ({ isOpen, setIsOpen }) => {
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
      {filterTypes.map((filter, i) => (
        <div key={i} className={styles.root__container}>
          <details className={styles.root__details}>
            <summary>
              <span>{filter.name}</span>
              <picture className={styles.root__details_svg}></picture>
            </summary>
            <ul className={styles.root__details__content}>
              {filter.value.map((value, i) => (
                <li key={i}>
                  <button className={"d"}>{value}</button>
                </li>
              ))}
            </ul>
          </details>
        </div>
      ))}
    </section>
  );
};
