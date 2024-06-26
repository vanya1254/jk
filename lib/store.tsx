import { configureStore } from "@reduxjs/toolkit";
import products from "./features/products/slice";
import filters from "./features/filters/slice";
import filter from "./features/filter/slice";
import product from "./features/product/slice";
import bag from "./features/bag/slice";

export const makeStore = () => {
  return configureStore({
    reducer: { products, filters, filter, product, bag },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
