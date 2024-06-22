"use client";

import React, { useEffect } from "react";

import { productSelector } from "@/lib/features/product/selectors";
import { fetchProduct } from "@/lib/features/product/slice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

import { ProductWrapper } from "@/app/components";

import styles from "../../page.module.scss";

export default function SneakersSlug({ params }: { params: { slug: string } }) {
  const dispatch = useAppDispatch();
  const { product, status } = useAppSelector(productSelector);

  useEffect(() => {
    dispatch(fetchProduct(params.slug));
  }, []);

  return (
    <main className={styles.main}>
      <ProductWrapper />
    </main>
  );
}
