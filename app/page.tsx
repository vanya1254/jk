"use client";

import React, { useEffect, useState } from "react";
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
import { getRandomMinMax } from "./utils/getRandomMinMax";

export default function Home() {
  const pathName = usePathname();
  const dispatch = useAppDispatch();
  const { products, status } = useAppSelector(productsSelector);
  const [bestProduct, setBestProduct] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts(`?limit=10&${selectionsFetch.home.cards}`));
    setBestProduct(getRandomMinMax(0, products.length - 1));
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
          pathName={`/sneakers?brandName=${products[bestProduct].brandName}`}
        >
          <BestChoiceCard
            marginTop="30px"
            title={products[bestProduct].name}
            slug={products[bestProduct].slug}
            price={products[bestProduct].priceCents}
            img={products[bestProduct].mainPictureUrl}
          />
        </SeeAllLayout>
      )}
    </main>
  );
}
