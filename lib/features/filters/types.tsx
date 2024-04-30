import { Status } from "@/lib/mainTypes";

export type FiltersT = {
  name: string;
  value: string[];
};

export interface FiltersState {
  filters: FiltersT[];
  status: Status;
}

export type FetchFiltersParams = {
  path: string;
};
