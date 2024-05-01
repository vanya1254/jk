import { FiltersT, Status } from "@/lib/mainTypes";

export interface FiltersState {
  filters: FiltersT[];
  status: Status;
}

export type FetchFiltersParams = {
  path: string;
};
