"use client";

import { useEffect } from "react";
import { toast } from "react-toastify";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { bagSelector } from "@/lib/features/bag/selectors";
import { clearBag, patchBag } from "@/lib/features/bag/slice";
import { postOrder, setBag } from "@/lib/features/order/slice";
import { orderSelector } from "@/lib/features/order/selectors";

import CheckoutLayout from "../layouts/CheckoutLayout";
import FormCustom from "../components/FormCustom";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { bag, summary } = useAppSelector(bagSelector);
  const { order } = useAppSelector(orderSelector);

  const onSubmitForm = () => {
    dispatch(postOrder({ order }));
    dispatch(clearBag());
    dispatch(patchBag());
    router.push("/bag");
    toast.success(`Order created! ($${(summary.total / 100).toFixed(2)})`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  useEffect(() => {
    dispatch(setBag(bag));
  }, [dispatch]);

  if (bag.length) {
    return (
      <main>
        <CheckoutLayout>
          <FormCustom onSubmitForm={onSubmitForm} />
        </CheckoutLayout>
      </main>
    );
  }

  return <main>ERORR</main>;
}
