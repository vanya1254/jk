"use client";

import React, { Suspense, useEffect } from "react";
import { usePathname } from "next/navigation";

import { FilterSort, Cards, Pagination } from "../components";
import Hero from "@/app/components/Hero";

import { pathPage } from "../constants";

import { useAppDispatch } from "@/lib/hooks";

import { fetchFilters } from "@/lib/features/filters/slice";

export default function Sneakers(props: { params: any; searchParams: any }) {
  const pathName = usePathname();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchFilters({
        path: "/filters-all",
      })
    );
  }, [dispatch]);

  return (
    <main>
      <Hero crumbs={JSON.parse(pathPage)[pathName]} />
      <Suspense>
        <FilterSort />
      </Suspense>
      <Suspense>
        <Cards />
      </Suspense>
      <Suspense>
        <Pagination />
      </Suspense>
    </main>
  );
}
