"use client";

import React, { useEffect, useId } from "react";
import { useSearchParams } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchProducts } from "@/lib/features/products/slice";
import { productsSelector } from "@/lib/features/products/selectors";

import { selectionsFetch } from "@/app/constants";

import { Status } from "@/lib/mainTypes";
import { CardProduct, CardProductSkeleton } from "../";

import styles from "./Cards.module.scss";

export const Cards: React.FC = () => {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const id = useId();
  const { products, status } = useAppSelector(productsSelector);

  useEffect(() => {
    dispatch(
      fetchProducts(
        `?page=${searchParams.get("page") || 1}&${
          selectionsFetch.sneakers.cards
        }&${searchParams.toString().replace(new RegExp(/page=[0-9]{0,2}/), "")}`
      )
    );
  }, [dispatch, searchParams]);

  const CardSkeletons = [...new Array(4)].map((_, i) => (
    <CardProductSkeleton key={i} />
  ));

  if (status === Status.FULFILLED) {
    return (
      <ul className={styles.root}>
        {products.map((product, i) => (
          <li key={`${id}-${i}`} className={styles.root__li}>
            <CardProduct product={product} />
          </li>
        ))}
      </ul>
    );
  } else if (status === Status.PENDING) {
    return CardSkeletons;
  } else {
    return "ERROR";
  }
};
