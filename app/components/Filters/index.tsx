import React from "react";

import styles from "./Filters.module.scss";
import { filterTypes } from "@/app/constants";

export const Filters: React.FC = () => {
  const onTouchMove = (e: React.MouseEvent<HTMLElement>) => {
    const section = e.currentTarget;
    // line.style.opacity = 0;
    section.style.transform = "translate(0px, 30px)";
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLElement>) => {
    const section = e.currentTarget;
    // line.style.opacity = 0;
    // section.style.transform = "none";
  };

  return (
    <section style={{ height: "50vh" }} className={styles.root}>
      <div
        className={styles.root_moveMe}
        // onMouseDown={onTouchMove}
        // onTouchEnd={onTouchEnd}
      >
        <hr />
      </div>
      <h4 className={styles.root_title}>Filters</h4>
      {filterTypes.map((filter, i) => (
        <div key={i} className={styles.root__container}>
          <details className={styles.root__details}>
            <summary>
              <span>{filter.name}</span>
              {true ? (
                <svg viewBox="0 0 6 6" width="1em" height="1em">
                  <path
                    d="M3.4 0v2.599L6 2.6v.8l-2.6-.001V6h-.8V3.399L0 3.4v-.8l2.6-.001V0h.8z"
                    fill="currentColor"
                    fillRule="nonzero"
                  ></path>
                </svg>
              ) : (
                <svg viewBox="0 0 6 1" width="1em" height="1em">
                  <path
                    d="M0 0h6v1H0z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              )}
            </summary>
            <ul className={styles.root__details__content}>
              {filter.value.map((value, i) => (
                <li key={i}>{value}</li>
              ))}
            </ul>
          </details>
        </div>
      ))}
    </section>
  );
};
