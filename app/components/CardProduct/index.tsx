"use client";

import React, { useState } from "react";
import Link from "next/link";

import { ProductT } from "@/lib/mainTypes";

import styles from "./CardProduct.module.scss";

type CardProductPropsT = {
  product: ProductT;
};

export const CardProduct: React.FC<CardProductPropsT> = ({ product }) => {
  const [onCardOver, setOnCardOver] = useState(false);

  return (
    <article
      className={styles.root}
      onMouseOver={() => setOnCardOver(true)}
      onMouseOut={() => setOnCardOver(false)}
    >
      <div className={styles.root__header}>
        <Link
          className={styles.root__header_link}
          href={`/sneakers/${product.slug}`}
        >
          <img
            className={`${styles.root__header_img} ${
              onCardOver ? styles.root__header_imgHover : ""
            }`}
            src={product.mainPictureUrl}
            alt={product.name}
          />
          {product.productTemplateExternalPictures.length >= 2 ? (
            <img
              className={`${styles.root__header_img} ${
                !onCardOver ? styles.root__header_imgHover : ""
              }`}
              style={{ padding: "16.68% 0" }}
              src={product.productTemplateExternalPictures[1]}
              alt={product.name}
            />
          ) : (
            ""
          )}
        </Link>
      </div>
      <div className={styles.root__footer}>
        <h4 className={styles.root__footer_title}>
          <Link href={`/sneakers/${product.slug}`}>{product.name}</Link>
        </h4>
        <span className={styles.root__footer_price}>{`$${(
          product.specialDisplayPriceCents / 100
        ).toFixed(2)}`}</span>
      </div>
    </article>
  );
};
