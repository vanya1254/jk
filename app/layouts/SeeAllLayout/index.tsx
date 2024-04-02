import React from "react";

import styles from "./SeeAllLayout.module.scss";
import Link from "next/link";

type SeaAllLayoutPropsT = {
  children: React.ReactNode;
  title: string;
  pathName: string;
};

export const SeeAllLayout: React.FC<SeaAllLayoutPropsT> = ({
  children,
  title,
  pathName,
}) => {
  return (
    <div className={styles.root}>
      <section className={styles.root__section}>
        <h3 className={styles.root_title}>{title}</h3>
        <Link className={styles.root_link} href={pathName}>
          See all
        </Link>
      </section>
      {children}
    </div>
  );
};
