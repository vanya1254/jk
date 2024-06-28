"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@/lib/hooks";
import { setForm } from "@/lib/features/order/slice";

import ButtonCustom from "../ButtonCustom";

import { FormDataT } from "@/lib/mainTypes";

import styles from "./FormCustom.module.scss";

type FormCustomPropsT = {
  onSubmitForm: () => void;
};

const FormCustom: React.FC<FormCustomPropsT> = ({ onSubmitForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataT>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormDataT> = (data) => {
    dispatch(setForm(data));
    onSubmitForm();
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", { required: true })}
        aria-invalid={errors.firstName ? "true" : "false"}
        type="firstname"
        placeholder="First Name"
      />
      <input
        {...register("lastName", { required: true })}
        aria-invalid={errors.lastName ? "true" : "false"}
        type="lastname"
        placeholder="Last Name"
      />
      <input
        {...register("phone", { required: true })}
        type="tel"
        placeholder="Phone Number"
      />
      <input
        {...register("country", { required: true })}
        type="text"
        placeholder="Country"
      />
      <input
        {...register("address", { required: true })}
        type="text"
        placeholder="Address Line"
      />
      <input
        {...register("city", { required: true })}
        type="text"
        placeholder="City"
      />
      <input
        {...register("mail", { required: "Email Address is required" })}
        aria-invalid={errors.mail ? "true" : "false"}
        type="email"
        placeholder="Email"
      />
      <input
        {...register("postcode", { required: true })}
        type="text"
        placeholder="Postcode"
      />
      <div className={styles.root__submit}>
        <ButtonCustom
          className={styles.root_submit}
          text="Submit"
          onClick={undefined}
        />
      </div>
    </form>
  );
};

export default FormCustom;
