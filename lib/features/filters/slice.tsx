import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { FetchFiltersParams, FiltersState, FiltersT } from "./types";
import { Status } from "@/lib/mainTypes";

export const fetchFilters = createAsyncThunk<FiltersT[], FetchFiltersParams>(
  "filters/fetchFilters",
  async ({ path, params }) => {
    const response = await fetch(
      `https://94bd9fe6fad33179.mokky.dev${path}?${params}`
    );
    const data = await response.json();

    const { items } = await data;

    return items as FiltersT[];
  }
);

const initialState: FiltersState = {
  filters: [],
  status: Status.PENDING,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilters.pending, (state) => {
        state.status = Status.PENDING;
      })
      .addCase(
        fetchFilters.fulfilled,
        (state, action: PayloadAction<FiltersT[]>) => {
          state.filters = action.payload;
          state.status = Status.FULFILLED;
        }
      )
      .addCase(fetchFilters.rejected, (state) => {
        state.filters = [];
        state.status = Status.REJECTED;
      });
  },
});

export const {} = filtersSlice.actions;

export default filtersSlice.reducer;