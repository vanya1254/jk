"use client";

import React from "react";

import ButtonCustom from "@/app/components/ButtonCustom";

import { useAppSelector } from "@/lib/hooks";
import { bagSelector } from "@/lib/features/bag/selectors";

import styles from "./CartSummary.module.scss";

export const CartSummary: React.FC = () => {
  const { summary } = useAppSelector(bagSelector);

  return (
    <div className={styles.root}>
      <h4 className={styles.root_title}>Your Order Summary</h4>
      <div className={styles.root__info}>
        <p className={styles.root__info__p}>
          <span>Subtotal</span>
          <span>{`$${(summary.subtotal / 100).toFixed(2)}`}</span>
        </p>
        <p className={styles.root__info__p}>
          <span>Shipping</span>
          <span>
            {summary.shipping
              ? `$${(summary.shipping / 100).toFixed(2)}`
              : "Free"}
          </span>
        </p>
      </div>
      <p className={styles.root__info__total}>
        <span>Total</span>
        <span>{`$${(summary.total / 100).toFixed(2)}`}</span>
      </p>
      <ButtonCustom onClick={undefined} text={"CHECKOUT"} />
    </div>
  );
};
