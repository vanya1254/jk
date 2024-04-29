import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductsState } from "./types";
import { ProductT, Status } from "@/lib/mainTypes";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (params: string) => {
    const response = await fetch(
      `https://94bd9fe6fad33179.mokky.dev/sneakers${params}`
    );

    const data = await response.json();
    const { items } = await data;

    return items;
  }
);

const initialState: ProductsState = {
  products: [],
  status: Status.PENDING,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = Status.PENDING;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<ProductT[]>) => {
          state.products = action.payload;
          state.status = Status.FULFILLED;
        }
      )
      .addCase(fetchProducts.rejected, (state) => {
        state.products = [];
        state.status = Status.REJECTED;
      });
  },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
