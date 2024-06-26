import { Status } from "@/lib/mainTypes";
import { ProductT } from "../../mainTypes";

export interface BagState {
  bag: CartProductT[];
  summary: SummaryT;
  status: Status;
}

export interface CartProductT extends ProductT {
  size: number;
  quantity: number;
  isWished: boolean;
}

export type SummaryT = {
  total: number;
  subtotal: number;
  shipping: number;
};
