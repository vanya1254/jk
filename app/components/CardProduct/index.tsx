"use client";

import React, { useState } from "react";
import Link from "next/link";

import styles from "./CardProduct.module.scss";

export const CardProduct: React.FC = () => {
  const [onCardOver, setOnCardOver] = useState(false);
  const product = {
    id: 1394149,
    sku: "CU1726 500 24",
    slug: "dunk-low-retro-vol-1-sp-plum-2024-cu1726-500-24",
    brandName: "Nike",
    designer: "Peter Moore",
    gender: ["men"],
    name: "Dunk Low Retro Vol. 1 SP 'Plum' 2024",
    nickname: "Plum",
    color: "Purple",
    productCategory: "shoes",
    productType: "sneakers",
    releaseDate: "2024-03-21T23:59:59.999Z",
    sizeRange: [],
    sizeUnit: "us",
    specialDisplayPriceCents: 11500,
    upperMaterial: "Suede",
    sizeOptions: [],
    category: [],
    story:
      "The 2024 edition of the Nike Dunk Low Retro Vol. 1 SP 'Plum' brings back one of the distinctive colorways of the CO.JP 'Ugly Duckling' pack from 2001. Like the original, the low-top carries an all-suede upper in two shades of violet. Dark crimson accents land on the laces, signature Swoosh and back tab, marked with embroidered Nike branding. Additional Nike branding hits appear on the woven tongue tag and sockliner. Anchoring the sneaker is a durable rubber cupsole.",
    mainPictureUrl:
      "https://image.goat.com/750/attachments/product_template_pictures/images/099/348/666/original/1394149_00.png.png",
    productTemplateExternalPictures: [
      "https://image.goat.com/attachments/product_template_additional_pictures/images/099/348/674/medium/1394149_01.jpg.jpeg?1712090045",
      "https://image.goat.com/attachments/product_template_additional_pictures/images/099/348/675/medium/1394149_02.jpg.jpeg?1712090046",
      "https://image.goat.com/attachments/product_template_additional_pictures/images/099/348/705/medium/1394149_03.jpg.jpeg?1712090051",
      "https://image.goat.com/attachments/product_template_additional_pictures/images/099/348/699/medium/1394149_04.jpg.jpeg?1712090051",
      "https://image.goat.com/attachments/product_template_additional_pictures/images/099/348/703/medium/1394149_05.jpg.jpeg?1712090051",
      "https://image.goat.com/attachments/product_template_additional_pictures/images/099/348/704/medium/1394149_06.jpg.jpeg?1712090051",
      "https://image.goat.com/attachments/product_template_additional_pictures/images/099/348/707/medium/1394149_07.jpg.jpeg?1712090051",
      "https://image.goat.com/attachments/product_template_additional_pictures/images/099/348/706/medium/1394149_08.jpg.jpeg?1712090051",
    ],
  };

  return (
    <>
      <div className={styles.root__header}>
        <Link
          className={styles.root__header_link}
          href={`/sneakers/${product.slug}`}
        >
          {product.productTemplateExternalPictures.length ? (
            product.productTemplateExternalPictures.map(
              (img, i) =>
                i < 2 && (
                  <img
                    key={i}
                    className={`${styles.root__header_img} ${
                      i ? styles.root__header_imgHover : ""
                    }`}
                    src={img}
                    alt={product.name}
                  />
                )
            )
          ) : (
            <img
              className={styles.root__header_img}
              src={product.mainPictureUrl}
              alt={product.name}
            />
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
    </>
  );
};
