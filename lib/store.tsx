import { configureStore } from "@reduxjs/toolkit";
import products from "./features/products/slice";

export const makeStore = () => {
  return configureStore({
    reducer: { products },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
