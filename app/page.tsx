"use client";

import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchProductsAll } from "@/lib/features/products/slice";
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

import styles from "./page.module.scss";

export default function Home() {
  const dispatch = useAppDispatch();
  const { products, status } = useAppSelector(productsSelector);

  useEffect(() => {
    dispatch(fetchProductsAll());
  }, []);

  const CardSkeletons = [...new Array(4)].map((_, i) => (
    <CardProductSkeleton key={i} />
  ));

  const CardProducts = products.map((product) => (
    <CardProduct key={product.id} product={product} />
  ));

  return (
    <main className={styles.main}>
      <Hero />
      <SeeAllLayout title="Popular Shoes" pathName="/sneakers">
        <SwiperSlider gap={20} slidesPerView={"auto"}>
          {status === Status.PENDING
            ? CardSkeletons
            : status === Status.REJECTED
            ? ["ERROR"]
            : CardProducts}
        </SwiperSlider>
      </SeeAllLayout>
      <SeeAllLayout
        title="New Arrivals"
        pathName={`/sneakers?brand={products[7].brandName}`}
      >
        {status === Status.PENDING ? (
          "CardSkeletons"
        ) : status === Status.REJECTED ? (
          "ERROR"
        ) : (
          <BestChoiceCard
            marginTop="30px"
            title={products[7].name}
            slug={products[7].slug}
            price={products[7].specialDisplayPriceCents}
            img={products[7].mainPictureUrl}
          />
        )}
      </SeeAllLayout>
    </main>
  );
}
