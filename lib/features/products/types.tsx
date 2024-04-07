import { ProductT, Status } from "@/lib/mainTypes";

export interface ProductsState {
  products: ProductT[];
  status: Status;
}
