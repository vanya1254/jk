"use client";

import React, { useCallback, useEffect, Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  CardProductSkeleton,
  FilterSort,
  Cards,
  Pagination,
} from "../components";
import Hero from "@/app/components/Hero";

import { pathPage, selectionsFetch } from "../constants";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { productsSelector } from "@/lib/features/products/selectors";
import { fetchProducts } from "@/lib/features/products/slice";
import { fetchFilters } from "@/lib/features/filters/slice";
import { reset } from "@/lib/features/filter/slice";

import { Status } from "../../lib/mainTypes";

export default function Sneakers(props: { params: any; searchParams: any }) {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const { products, status } = useAppSelector(productsSelector);
  console.log(searchParams.toString(), props.searchParams);

  useEffect(() => {
    dispatch(
      fetchFilters({
        path: "/filters-all",
      })
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      fetchProducts(
        `?page=${searchParams.get("page") || 1}&${
          selectionsFetch.sneakers.cards
        }&${searchParams.toString().replace(new RegExp(/page=[0-9]{0,2}/), "")}`
      )
    );
  }, [dispatch, searchParams]);

  const changeParams = (name: string, value: string): void => {
    router.push(`${pathName}?${createQueryString(name, value)}`);
  };

  const CardSkeletons = [...new Array(4)].map((_, i) => (
    <CardProductSkeleton key={i} />
  ));

  const clearParams = () => {
    dispatch(reset());
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
    // <Suspense>
    <main>
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
      <Pagination changeParams={changeParams} />
    </main>
    // </Suspense>
  );
}
