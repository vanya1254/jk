import React from "react";
import { HiOutlineHeart, HiHeart } from "react-icons/hi2";
import { PiTrash } from "react-icons/pi";

import styles from "./CartItem.module.scss";

type CartItemPropsT = {
  img: string;
  id: number;
  name: string;
  color: string;
  size: number;
  quantity: number;
  priceCents: number;
  wished: boolean;
};

export const CartItem: React.FC<CartItemPropsT> = ({
  img,
  id,
  name,
  color,
  size,
  quantity,
  priceCents,
  wished,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.root__img}>
        <img src={img} alt={`img ${name}`} />
        <span className={styles.root__img_heart}>
          {wished ? <HiOutlineHeart /> : <HiHeart />}
        </span>
      </div>
      <div className={styles.root__desc}>
        <h3>{name}</h3>
        <div className={styles.root__desc__info}></div>
        <span className={styles.root_price}></span>
      </div>
      <button className={styles.root_remove}>
        <PiTrash />
      </button>
    </div>
  );
};
