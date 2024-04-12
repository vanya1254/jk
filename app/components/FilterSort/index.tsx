import React from "react";

import styles from "./FilterSort.module.scss";

export const FilterSort: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.root__btns}>
        <button className={styles.root__btns_filters}>Filters</button>
        <div className={styles.root__container}>
          <details className={styles.root__details}>
            <summary>
              Sort By: {`Price Low`}
              <svg viewBox="0 0 6 4" width="15px" height="10px">
                <path
                  d="M5.27 0L2.999 2.509.729 0 0 .684 2.999 4l3-3.316z"
                  fill="currentColor"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </summary>
            <ul className={styles.root__details__content}>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </ul>
          </details>
        </div>
      </div>
      <p className={styles.root_count}>[{3}]</p>
    </div>
  );
};
