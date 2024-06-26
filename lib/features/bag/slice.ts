import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BagState, CartProductT } from "./types";
import { Status } from "@/lib/mainTypes";
import { RootState } from "@/lib/store";

export const fetchBag = createAsyncThunk("bag/fetchBag", async () => {
  const response = await fetch(`https://94bd9fe6fad33179.mokky.dev/bag`);

  const data = await response.json();

  return data;
});

export const postItem = createAsyncThunk(
  "bag/postItem",
  async (params: { item: CartProductT }) => {
    const { item } = params;

    await fetch("https://94bd9fe6fad33179.mokky.dev/bag", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...item,
      }),
    });
  }
);

export const patchBag = createAsyncThunk(
  "bag/patchBag",
  async (params, thunkAPI) => {
    const { getState } = thunkAPI;
    const { bag } = getState() as RootState;

    await fetch(`https://94bd9fe6fad33179.mokky.dev/bag`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bag.bag),
    });
  }
);

const initialState: BagState = {
  bag: [],
  summary: { total: 0, subtotal: 0, shipping: 0 },
  status: Status.PENDING,
};

export const bagSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    removeItem(state, action: PayloadAction<CartProductT>) {
      const removeIndex = state.bag.findIndex(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      state.bag.splice(removeIndex, 1);
    },

    getSummary(state) {
      state.summary.subtotal = state.bag.reduce(
        (sum, item) => sum + item.priceCents,
        0
      );

      state.summary.shipping = state.summary.subtotal > 10000 ? 0 : 3500;

      state.summary.total = state.summary.subtotal + state.summary.shipping;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBag.pending, (state) => {
        state.status = Status.PENDING;
      })
      .addCase(
        fetchBag.fulfilled,
        (state, action: PayloadAction<CartProductT[]>) => {
          state.bag = action.payload;
          state.status = Status.FULFILLED;

          if (state.status === Status.FULFILLED) {
            state.summary.subtotal = state.bag.reduce(
              (sum, item) => sum + item.priceCents,
              0
            );

            state.summary.shipping = state.summary.subtotal > 10000 ? 0 : 3500;

            state.summary.total =
              state.summary.subtotal + state.summary.shipping;
          }
        }
      )
      .addCase(fetchBag.rejected, (state) => {
        state.bag = initialState.bag;
        state.status = Status.REJECTED;
      });
  },
});

export const { removeItem, getSummary } = bagSlice.actions;

export default bagSlice.reducer;
