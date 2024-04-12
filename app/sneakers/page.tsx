"use client";

import { usePathname } from "next/navigation";
import { Status } from "../../lib/mainTypes";

import {
  CardProduct,
  Hero,
  CardProductSkeleton,
  FilterSort,
} from "../components";
import { SeeAllLayout } from "../layouts";
import { pathPage } from "../constants";

import styles from "../page.module.scss";

export default function Sneakers() {
  const pathName = usePathname();

  return (
    <main className={styles.main}>
      <Hero crumbs={JSON.parse(pathPage)[pathName]} />
      <FilterSort />
    </main>
  );
}
