import React from "react";

import { ProductWrapper } from "@/app/components";
import { API, selectionsFetch } from "@/app/constants";

export async function generateStaticParams() {
  const sneakersSlugs: { slug: string }[] = await fetch(
    `${API}?${selectionsFetch.sneakersSlug.slugs}`
  ).then((res) => res.json());

  return sneakersSlugs.map((slug) => slug);
}

export default function SneakersSlug({ params }: { params: { slug: string } }) {
  return (
    <main>
      <ProductWrapper slug={params.slug} />
    </main>
  );
}
