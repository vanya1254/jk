"use client";

import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../../lib/store";
import { selectionsFetch } from "../constants";
import { fetchFilters } from "@/lib/features/filters/slice";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    storeRef.current = makeStore();
    storeRef.current.dispatch(
      fetchFilters({
        path: "/sneakers",
        params: selectionsFetch.sneakers.filters,
      })
    );
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
