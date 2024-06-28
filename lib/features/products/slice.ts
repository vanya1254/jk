import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { MetaT, ProductsState } from "./types";
import { ProductT, Status } from "@/lib/mainTypes";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (params: string) => {
    const response = await fetch(
      `https://94bd9fe6fad33179.mokky.dev/sneakers${params}`
    );

    const data: { meta: MetaT; items: ProductT[] } = await response.json();

    return data;
  }
);

const initialState: ProductsState = {
  meta: {
    total_items: 0,
    total_pages: 0,
    current_page: 0,
    per_page: 0,
    remaining_count: 0,
  },
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
        (state, action: PayloadAction<{ meta: MetaT; items: ProductT[] }>) => {
          state.meta = action.payload.meta;
          state.products = action.payload.items;
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
