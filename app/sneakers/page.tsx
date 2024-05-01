"use client";

import React, { useCallback, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Status } from "../../lib/mainTypes";

import { Hero, CardProductSkeleton, FilterSort, Cards } from "../components";
import { pathPage, selectionsFetch } from "../constants";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { productsSelector } from "@/lib/features/products/selectors";
import { fetchProducts } from "@/lib/features/products/slice";

import styles from "../page.module.scss";
import { fetchFilters } from "@/lib/features/filters/slice";

export default function Sneakers() {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const { products, status } = useAppSelector(productsSelector);

  useEffect(() => {
    dispatch(
      fetchFilters({
        path: "/filters-all",
      })
    );

    if (searchParams.toString()) {
      dispatch(
        fetchProducts(
          `?page=1&${selectionsFetch.sneakers.cards}&${searchParams.toString()}`
        )
      );
    } else {
      dispatch(fetchProducts(`?page=1&${selectionsFetch.sneakers.cards}`));
    }
  }, [searchParams]);

  const changeParams = (name: string, value: string): void => {
    // router.push(`${pathName}?${searchParams.toString()}&${params}`);
    router.push(`${pathName}?${createQueryString(name, value)}`);
  };

  const CardSkeletons = [...new Array(4)].map((_, i) => (
    <CardProductSkeleton key={i} />
  ));

  const clearParams = () => {
    router.push(pathName);
  };

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }

      return params.toString();
    },
    [searchParams]
  );

  return (
    <main className={styles.main}>
      <Hero crumbs={JSON.parse(pathPage)[pathName]} />
      <FilterSort
        clearParams={clearParams}
        changeParams={changeParams}
        count={status === Status.FULFILLED ? products.length : 0}
      />
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
