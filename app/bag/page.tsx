"use client";

import { GridLayout, CartLayout } from "../layouts";
import { CartSummary } from "../components";
import { CartItem } from "../components/CartItem/index";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { bagSelector } from "@/lib/features/bag/selectors";
import { Status } from "@/lib/mainTypes";
import { useEffect } from "react";
import { fetchBag, getSummary } from "@/lib/features/bag/slice";

export default function Bag() {
  const dispatch = useAppDispatch();
  const { bag, status } = useAppSelector(bagSelector);

  useEffect(() => {
    dispatch(fetchBag());
  }, []);

  useEffect(() => {
    dispatch(getSummary());
  }, [bag]);

  return (
    <main>
      <GridLayout>
        <h2 className="fw-normal grid-3-col">
          Your Shopping Bag ({2}
          {2 > 1 ? " items" : " item"})
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
