import { Status } from "@/lib/mainTypes";

export type FiltersT = Record<string, string>;

export interface FiltersState {
  filters: FiltersT[];
  status: Status;
}

export type FetchFiltersParams = {
  path: string;
  params: string;
};
