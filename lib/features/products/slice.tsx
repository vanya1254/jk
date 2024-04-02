import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductsState } from "./types";

const initialState: ProductsState = {
  value: 0,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { incrementByAmount } = productsSlice.actions;

export default productsSlice.reducer;
