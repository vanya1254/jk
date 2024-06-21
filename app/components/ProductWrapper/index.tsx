"use client";

import React, { useState } from "react";

import { useAppSelector } from "@/lib/hooks";
import { productSelector } from "@/lib/features/product/selectors";

import styles from "./ProductWrapper.module.scss";
import { ButtonCustom } from "../ButtonCustom";

export const ProductWrapper: React.FC = () => {
  const [isRead, setIsRead] = useState(false);
  const { product } = useAppSelector(productSelector);

  const onClickMore = () => {
    setIsRead((prev) => !prev);
  };

  return (
    <section className={styles.root}>
      <div className={styles.root__imgs}>
        {product.productTemplateExternalPictures.map((img, i) => (
          <div className={styles.root__img}>
            <img key={i} src={img} alt={`img ${product.name}`} />
            <span
              className={styles.root_counter}
            >{`[${i}/${product.productTemplateExternalPictures.length}]`}</span>
          </div>
        ))}
      </div>
      <div className={styles.root__description}>
        <h2 className={styles.root__description_name}>{product.name}</h2>
        <p className={styles.root__description_price}>{`$${(
          product.priceCents / 100
        ).toFixed(2)}`}</p>
        <div className={styles.root__description_info}>
          <p>{product.story}</p>
          <div className={styles.root}>
            <span>...</span>
            <button
              className={styles.root__description_btn}
              onClick={onClickMore}
            >
              {isRead ? "Read less" : "Read more"}
            </button>
          </div>
        </div>
        <div className={styles.root__color}>
          <span className={styles.root_subtitle}>Color:</span>
          <div className={styles.root__color_view}></div>
        </div>
        <div className={styles.root__sizesInfo}>
          <span className={styles.root_subtitle}>Sizes (us):</span>
          <div className={styles.root__sizesInfo__sizes}>
            {product.sizeRange.map((size, i) => (
              <ButtonCustom
                onClick={undefined}
                text={size.toString()}
              ></ButtonCustom>
            ))}
          </div>
        </div>
        <button className={styles.root_btn}>Add to bag</button>
      </div>
    </section>
  );
};
