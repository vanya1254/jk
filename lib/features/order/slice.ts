import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderState, OrderT } from "./types";
import { CartProductT, FormDataT, Status } from "@/lib/mainTypes";

export const postOrder = createAsyncThunk(
  "order/postOrder",
  async (params: { order: OrderT }) => {
    const { order } = params;

    await fetch("https://94bd9fe6fad33179.mokky.dev/orders", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
  }
);

const initialState: OrderState = {
  order: {
    bag: [],
    form: {
      address: "",
      city: "",
      country: "",
      firstName: "",
      lastName: "",
      mail: "",
      phone: "",
      postcode: "",
    },
  },
  status: Status.PENDING,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setBag(state, action: PayloadAction<CartProductT[]>) {
      state.order.bag = action.payload;
    },
    setForm(state, action: PayloadAction<FormDataT>) {
      state.order.form = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postOrder.pending, (state) => {
        state.status = Status.PENDING;
      })
      .addCase(postOrder.fulfilled, (state) => {
        state.status = Status.FULFILLED;
      })
      .addCase(postOrder.rejected, (state) => {
        state.order = initialState.order;
        state.status = Status.REJECTED;
      });
  },
});

export const { setBag, setForm } = orderSlice.actions;

export default orderSlice.reducer;
