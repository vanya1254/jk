import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductState } from "./types";
import { ProductT, Status } from "@/lib/mainTypes";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (params: string) => {
    const response = await fetch(
      `https://94bd9fe6fad33179.mokky.dev/sneakers?slug=${params}`
    );

    const data = await response.json();
    const [item] = await data;

    return item;
  }
);

const initialState: ProductState = {
  product: {
    id: 0,
    sku: "",
    slug: "",
    brandName: "",
    designer: "",
    gender: "",
    name: "",
    nickname: "",
    color: "",
    productCategory: "",
    productType: "",
    releaseDate: "",
    sizeRange: [3.5],
    sizeUnit: "",
    priceCents: 10000,
    upperMaterial: "",
    sizeOptions: [
      {
        presentation: "3.5",
        value: 3.5,
      },
    ],
    category: "",
    story: "",
    mainPictureUrl: "",
    productTemplateExternalPictures: [""],
  },
  status: Status.PENDING,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = Status.PENDING;
      })
      .addCase(
        fetchProduct.fulfilled,
        (state, action: PayloadAction<ProductT>) => {
          state.product = action.payload;
          state.status = Status.FULFILLED;
        }
      )
      .addCase(fetchProduct.rejected, (state) => {
        state.product = initialState.product;
        state.status = Status.REJECTED;
      });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
