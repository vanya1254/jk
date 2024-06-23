"use client";

import { GridLayout } from "../layouts";

export default function Bag() {
  return (
    <main className="p-base items-start gap-base">
      <h2 className="fw-normal">
        Your Shopping Bag ({2}
        {2 > 1 ? " items" : " item"})
      </h2>
      <GridLayout></GridLayout>
    </main>
  );
}
