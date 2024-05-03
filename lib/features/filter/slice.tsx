import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { FilterSliceState, SortType } from "./types";
import { FiltersT } from "@/lib/mainTypes";

const initialState: FilterSliceState = {
  activeCategory: [
    {
      name: "Brands",
      path: "brandName",
      value: [],
    },
    {
      name: "Colors",
      path: "color",
      value: [],
    },
    {
      name: "Categories",
      path: "category",
      value: [],
    },
    {
      name: "Sizes",
      path: "sizeRange[]",
      value: [],
    },
    {
      name: "Gender",
      path: "gender",
      value: [],
    },
  ],
  activeSortType: {
    name: "release date ↑",
    sortProperty: "releaseDate",
  },
  activePage: 1,
  searchValue: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    reset() {
      return initialState;
    },
    setActiveCategory(state, action: PayloadAction<FiltersT[]>) {
      state.activeCategory = action.payload;
    },
    setActiveSortType(state, action: PayloadAction<SortType>) {
      state.activeSortType = action.payload;
    },
    setActivePage(state, action: PayloadAction<number>) {
      state.activePage = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      state.activeCategory = action.payload.activeCategory;
      state.activeSortType = action.payload.activeSortType;
      state.activePage = action.payload.activePage;
      state.searchValue = action.payload.searchValue;
    },
  },
});

export const {
  reset,
  setActiveCategory,
  setActiveSortType,
  setActivePage,
  setSearchValue,
  setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
