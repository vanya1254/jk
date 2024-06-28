import { CartProductT, Status } from "@/lib/mainTypes";

export interface BagState {
  bag: CartProductT[];
  summary: SummaryT;
  status: Status;
}

export type SummaryT = {
  total: number;
  subtotal: number;
  shipping: number;
};
