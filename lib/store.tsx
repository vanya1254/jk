import { configureStore } from "@reduxjs/toolkit";
import products from "./features/products/slice";
import filters from "./features/filters/slice";
import filter from "./features/filter/slice";

export const makeStore = () => {
  return configureStore({
    reducer: { products, filters, filter },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
