import React from "react";
import Link from "next/link";

import styles from "./SeeAllLayout.module.scss";

type SeaAllLayoutPropsT = {
  children: React.ReactNode;
  title: string;
  pathName: string;
};

const SeeAllLayout: React.FC<SeaAllLayoutPropsT> = ({
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

export default SeeAllLayout;
