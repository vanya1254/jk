import { configureStore } from "@reduxjs/toolkit";
import card from "./slices/card/slice";

export const store = configureStore({
  reducer: {
    card,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
