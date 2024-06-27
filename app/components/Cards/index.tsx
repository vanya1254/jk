import React, { useId } from "react";

import { ProductT } from "@/lib/mainTypes";
import { CardProduct } from "../";

import styles from "./Cards.module.scss";

type CardsPropsT = {
  products: ProductT[];
};

export const Cards: React.FC<CardsPropsT> = ({ products }) => {
  return (
    <ul className={styles.root}>
      {products.map((product) => (
        <li key={useId()} className={styles.root__li}>
          <CardProduct product={product} />
        </li>
      ))}
    </ul>
  );
};
