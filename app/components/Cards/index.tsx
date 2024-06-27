import React, { useId } from "react";

import { ProductT } from "@/lib/mainTypes";
import { CardProduct } from "../";

import styles from "./Cards.module.scss";

type CardsPropsT = {
  products: ProductT[];
};

export const Cards: React.FC<CardsPropsT> = ({ products }) => {
  const id = useId();

  return (
    <ul className={styles.root}>
      {products.map((product, i) => (
        <li key={`${id}-${i}`} className={styles.root__li}>
          <CardProduct product={product} />
        </li>
      ))}
    </ul>
  );
};
