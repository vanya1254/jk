import React from "react";

export default function SneakersSlug({ params }: { params: { slug: string } }) {
  return <div>{params.slug}</div>;
}
