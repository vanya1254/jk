import { FiltersT } from "@/lib/mainTypes";

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
  activeCategory: FiltersT[];
  activeSortType: SortType;
  searchValue: string;
}
