"use client";

import { GridLayout, CartLayout } from "../layouts";
import { CartSummary } from "../components";

export default function Bag() {
  return (
    <main>
      <GridLayout>
        <h2 className="fw-normal grid-3-col">
          Your Shopping Bag ({2}
          {2 > 1 ? " items" : " item"})
        </h2>
        <CartLayout>
          <div></div>
        </CartLayout>
        <CartSummary />
      </GridLayout>
    </main>
  );
}
