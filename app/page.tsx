"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchProducts } from "@/lib/features/products/slice";
import { productsSelector } from "@/lib/features/products/selectors";

import { Status } from "../lib/mainTypes";

import {
  CardProduct,
  SwiperSlider,
  Hero,
  CardProductSkeleton,
  BestChoiceCard,
} from "./components";
import { SeeAllLayout } from "./layouts";

import { pathPage, selectionsFetch } from "./constants";

export default function Home() {
  const pathName = usePathname();
  const dispatch = useAppDispatch();
  const { products, status } = useAppSelector(productsSelector);

  useEffect(() => {
    dispatch(fetchProducts(`?limit=10&${selectionsFetch.home.cards}`));
  }, []);

  const CardSkeletons = [...new Array(4)].map((_, i) => (
    <CardProductSkeleton key={i} />
  ));

  const CardProducts = products.map((product) => (
    <CardProduct key={product.id} product={product} />
  ));

  return (
    <main>
      <Hero crumbs={JSON.parse(pathPage)[pathName]} />
      <SeeAllLayout title="Popular Shoes" pathName="/sneakers">
        <SwiperSlider gap={20} slidesPerView={"auto"}>
          {status === Status.PENDING
            ? CardSkeletons
            : status === Status.REJECTED
            ? ["ERROR"]
            : CardProducts}
        </SwiperSlider>
      </SeeAllLayout>
      {status === Status.PENDING ? (
        "CardSkeleton"
      ) : status === Status.REJECTED ? (
        "ERROR"
      ) : (
        <SeeAllLayout
          title="New Arrivals"
          pathName={`/sneakers?brandName=${products[7].brandName}`}
        >
          <BestChoiceCard
            marginTop="30px"
            title={products[7].name}
            slug={products[7].slug}
            price={products[7].priceCents}
            img={products[7].mainPictureUrl}
          />
        </SeeAllLayout>
      )}
    </main>
  );
}
