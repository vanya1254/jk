export type SortType = {
  name: string;
  sortProperty:
    | "releaseDate"
    | "-releaseDate"
    | "priceCents"
    | "-priceCents"
    | "name"
    | "-name";
};

export interface FilterSliceState {
  activeCategory: number;
  activeSortType: SortType;
  activePage: number;
  searchValue: string;
}
