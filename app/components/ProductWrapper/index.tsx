"use client";

import React, { useState } from "react";

import useWindowSize from "@/app/hooks/useWindowSize";
import { useAppSelector } from "@/lib/hooks";
import { productSelector } from "@/lib/features/product/selectors";

import { ButtonCustom } from "../ButtonCustom";

import styles from "./ProductWrapper.module.scss";
import { SwiperSlider } from "../";

export const ProductWrapper: React.FC = () => {
  const size = useWindowSize();
  const [isRead, setIsRead] = useState(false);
  const { product } = useAppSelector(productSelector);

  const onClickMore = () => {
    setIsRead((prev) => !prev);
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
    <section className={styles.root}>
      {size.width >= 1024 ? (
        <div className={styles.root__imgs}>{imgs}</div>
      ) : (
        <SwiperSlider
          className={styles.root__imgs}
          children={imgs}
          gap={0}
          slidesPerView={1}
        />
      )}
      <div className={styles.root__wrapper}>
        <div className={styles.root__description}>
          <h2 className={styles.root__description_name}>{product.name}</h2>
          <p className={styles.root__description_price}>{`$${(
            product.priceCents / 100
          ).toFixed(2)}`}</p>
          <div className={styles.root__description__info}>
            <p>{product.story}</p>
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
      </div>
    </section>
  );
};
