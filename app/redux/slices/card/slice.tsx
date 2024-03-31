import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CardState } from "./types";

const initialState: CardState = {
  value: 0,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { incrementByAmount } = cardSlice.actions;

export default cardSlice.reducer;
