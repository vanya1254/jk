"use client";

import React, { useState } from "react";

import useWindowSize from "@/app/hooks/useWindowSize";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { productSelector } from "@/lib/features/product/selectors";
import { postItem } from "@/lib/features/bag/slice";

import { GridLayout } from "@/app/layouts";
import { SwiperSlider, ButtonCustom } from "../";

import styles from "./ProductWrapper.module.scss";
import { CartProductT } from "@/lib/features/bag/types";

export const ProductWrapper: React.FC = () => {
  const dispatch = useAppDispatch();
  const size = useWindowSize();
  const { product } = useAppSelector(productSelector);
  const [isRead, setIsRead] = useState(false);
  const [curSize, setCurSize] = useState(0);

  const onClickMore = () => {
    setIsRead((prev) => !prev);
  };

  const onClickBag = () => {
    if (curSize) {
      const item = { ...product, size: curSize, quantity: 1 } as CartProductT;

      dispatch(postItem({ item }));
    }
  };

  const imgs = product.productTemplateExternalPictures.map((img, i) => (
    <div key={i} className={styles.root__img}>
      <img src={img} alt={`img ${product.name}`} />
      <span className={styles.root_counter}>{`[${i + 1}/${
        product.productTemplateExternalPictures.length
      }]`}</span>
    </div>
  ));

  return (
    <GridLayout className={styles.root}>
      {size.width >= 1023 ? (
        <div className={styles.root__imgs}>{imgs}</div>
      ) : (
        <SwiperSlider
          className={styles.root__imgs}
          children={imgs}
          gap={0}
          slidesPerView={1}
        />
      )}
      <div className={styles.root__description}>
        <h2 className={styles.root__description_name}>{product.name}</h2>
        <p className={styles.root__description_price}>{`$${(
          product.priceCents / 100
        ).toFixed(2)}`}</p>
        <div className={styles.root__description__info}>
          <p style={{ maxHeight: `${isRead ? "100%" : ""}` }}>
            {product.story}
          </p>
          <div className={styles.root__description_more}>
            {isRead ? "" : <span>...</span>}
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
          <div
            style={{ backgroundColor: product.color }}
            className={styles.root__color_view}
          >
            <span>{product.color}</span>
          </div>
        </div>
        <div className={styles.root__sizesInfo}>
          <span className={styles.root_subtitle}>Sizes (us):</span>
          <div className={styles.root__sizesInfo__sizes}>
            {product.sizeRange.map((size, i) => (
              <ButtonCustom
                key={i}
                onClick={() => setCurSize(size)}
                text={size.toString()}
                className={`${styles.root__sizesInfo_size} ${
                  curSize === size ? " active" : ""
                }`}
              ></ButtonCustom>
            ))}
          </div>
        </div>
        <button onClick={onClickBag} className={styles.root_btn}>
          Add to bag
        </button>
      </div>
    </GridLayout>
  );
};
