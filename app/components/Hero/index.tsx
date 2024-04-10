import React from "react";
import Link from "next/link";

import styles from "./Hero.module.scss";

export const Hero: React.FC = () => {
  const crumbs = ["Home", "Sneakers"];

  return (
    <section className={styles.root}>
      <h1 className={styles.root_title}>{crumbs[crumbs.length - 1]}</h1>
      <ul className={styles.root__breadcrumbs}>
        {crumbs.map((crumb, i) => (
          <React.Fragment key={i}>
            {i ? (
              <span className={styles.root_breadcrumbDivider}>{">"}</span>
            ) : (
              ""
            )}
            <li
              className={`${styles.root_breadcrumb} ${
                i === crumbs.length - 1 ? "" : styles.root_breadcrumbDeactive
              }`}
            >
              <Link href={`/${crumb === "Home" ? "" : crumb.toLowerCase()}`}>
                {crumb}
              </Link>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </section>
  );
};
