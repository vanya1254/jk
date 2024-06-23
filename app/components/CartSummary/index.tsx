"use client";

import React from "react";

import { ButtonCustom } from "../";

import styles from "./CartSummary.module.scss";

export const CartSummary: React.FC = () => {
  return (
    <div className={styles.root}>
      <h4 className={styles.root_title}>Your Order Summary</h4>
      <div className={styles.root__info}>
        <p className={styles.root__info__p}>
          <span>Subtotal</span>
          <span>${},00</span>
        </p>
        <p className={styles.root__info__p}>
          <span>Shipping</span>
          <span>${}Free</span>
        </p>
      </div>
      <p className={styles.root__info__total}>
        <span>Total</span>
        <span>${},00</span>
      </p>
      <ButtonCustom onClick={undefined} text={"CHECKOUT"} />
    </div>
  );
};
