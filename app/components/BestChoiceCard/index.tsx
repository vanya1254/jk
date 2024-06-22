import React from "react";

import Link from "next/link";

import styles from "./BestChoiceCard.module.scss";

type BestChoiceCardPropsT = {
  marginTop: string;
  title: string;
  slug: string;
  price: number;
  img: string;
};

export const BestChoiceCard: React.FC<BestChoiceCardPropsT> = ({
  marginTop,
  title,
  slug,
  price,
  img,
}) => {
  return (
    <Link
      href={`/sneakers/${slug}`}
      style={{ marginTop: marginTop, lineHeight: "normal" }}
    >
      <article className={styles.root}>
        <div className={styles.root__content}>
          <h4 className={styles.root_subtitle}>Best Choice</h4>
          <h2 className={styles.root_title}>{title}</h2>
          <span className={styles.root_price}>{`$${(price / 100).toFixed(
            2
          )}`}</span>
        </div>
        <img className={styles.root_img} src={img} alt="best choice item" />
      </article>
    </Link>
  );
};
