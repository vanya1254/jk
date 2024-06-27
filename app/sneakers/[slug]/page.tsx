"use client";

import React, { useEffect } from "react";

import { fetchProduct } from "@/lib/features/product/slice";
import { useAppDispatch } from "@/lib/hooks";

import { ProductWrapper } from "@/app/components";

export default function SneakersSlug({ params }: { params: { slug: string } }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProduct(params.slug));
  }, [dispatch, params.slug]);

  return (
    <main>
      <ProductWrapper />
    </main>
  );
}
