import { CartProductT, FormDataT, Status } from "@/lib/mainTypes";

export interface OrderState {
  order: OrderT;
  status: Status;
}

export type OrderT = {
  bag: CartProductT[];
  form: FormDataT;
};
