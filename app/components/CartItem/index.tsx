"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineHeart, HiHeart } from "react-icons/hi2";
import { PiTrash } from "react-icons/pi";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { patchBag, removeItem } from "@/lib/features/bag/slice";

import { CartProductT } from "@/lib/features/bag/types";

import styles from "./CartItem.module.scss";

export const CartItem: React.FC<CartProductT> = ({ ...item }) => {
  const dispatch = useAppDispatch();

  const onClickRemove = () => {
    dispatch(removeItem(item));
    dispatch(patchBag());
  };

  return (
    <div className={styles.root}>
      <Link href={`/sneakers/${item.slug}`}>
        <div className={styles.root__img}>
          <Image
            width={750}
            height={750}
            src={item.mainPictureUrl}
            alt={`img ${item.name}`}
            quality={100}
          />
          <span className={styles.root__img_heart}>
            {/* {item.isWished ? <HiHeart /> : <HiOutlineHeart />} */}
          </span>
        </div>
      </Link>
      <div className={styles.root__desc}>
        <h3 className={styles.root_title}>{item.name}</h3>
        <div className={styles.root__desc__info}>
          <p>Color: {item.color}</p>
          <p>Size: {item.size}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
        <span className={styles.root_price}>
          {`$${(item.priceCents / 100).toFixed(2)}`}
        </span>
      </div>
      <button onClick={onClickRemove} className={styles.root_remove}>
        <PiTrash />
      </button>
    </div>
  );
};
