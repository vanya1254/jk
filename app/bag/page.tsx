"use client";

import { useEffect, useState } from "react";

import GridLayout from "@/app/layouts/GridLayout";
import CartLayout from "@/app/layouts/CartLayout";

import { CartSummary, CartItem } from "../components";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { bagSelector } from "@/lib/features/bag/selectors";
import { fetchBag, getSummary } from "@/lib/features/bag/slice";

import { Status } from "@/lib/mainTypes";

export default function Bag() {
  const dispatch = useAppDispatch();
  const { bag, status } = useAppSelector(bagSelector);
  const [countItems, setCountItems] = useState(0);

  useEffect(() => {
    dispatch(fetchBag());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getSummary());
    setCountItems(bag.length);
  }, [dispatch, bag]);

  return (
    <main>
      <GridLayout>
        <h2 className="fw-normal grid-3-col">
          Your Shopping Bag ({countItems}
          {countItems > 1 ? " items" : " item"})
        </h2>
        <CartLayout>
          {status === Status.FULFILLED
            ? bag.map((item, i) => <CartItem key={item.id + i} {...item} />)
            : status === Status.PENDING
            ? "Loading"
            : "ERORR"}
        </CartLayout>
        <CartSummary />
      </GridLayout>
    </main>
  );
}
