import { ProductT, Status } from "@/lib/mainTypes";

export interface ProductsState {
  products: ProductT[];
  status: Status;
}

export type ParamsT = {
  page?: string;
  limit?: string;
  category?: string;
};
