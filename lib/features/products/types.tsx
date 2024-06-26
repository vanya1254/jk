import { ProductT, Status } from "@/lib/mainTypes";

export interface ProductsState {
  meta: MetaT;
  products: ProductT[];
  status: Status;
}

export type MetaT = {
  total_items: number;
  total_pages: number;
  current_page: number;
  per_page: number;
  remaining_count: number;
};

export type ParamsT = {
  page?: string;
  limit?: string;
  category?: string;
};
