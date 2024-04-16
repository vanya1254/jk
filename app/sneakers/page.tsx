"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Status } from "../../lib/mainTypes";

import { Hero, CardProductSkeleton, FilterSort, Cards } from "../components";
import { pathPage } from "../constants";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { productsSelector } from "@/lib/features/products/selectors";
import { fetchProductsAll } from "@/lib/features/products/slice";

import styles from "../page.module.scss";

export default function Sneakers() {
  const pathName = usePathname();
  const dispatch = useAppDispatch();
  const { products, status } = useAppSelector(productsSelector);

  useEffect(() => {
    dispatch(fetchProductsAll());
  }, []);

  const CardSkeletons = [...new Array(4)].map((_, i) => (
    <CardProductSkeleton key={i} />
  ));

  return (
    <main className={styles.main}>
      <Hero crumbs={JSON.parse(pathPage)[pathName]} />
      <FilterSort count={status === Status.FULFILLED ? products.length : 0} />
      {status === Status.FULFILLED ? (
        <Cards products={products} />
      ) : status === Status.PENDING ? (
        CardSkeletons
      ) : (
        "ERROR"
      )}
    </main>
  );
}
