"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { InputCustom } from "@/components/common/Input";
import { InputImageCustom } from "@/components/common/InputImage";
import { IBankAccountV1 } from ".";

export function BankAccountEditerV1(props: { data?: IBankAccountV1 }) {
  const schema = yup.object().shape({
    background: yup.string().required("Required field"),
    husbandBankAccountName: yup.string().required("Required field"),
    husbandBankAccountNumber: yup.string().required("Required field"),
    husbandBankAccountImage: yup.string().required("Required field"),
    husbandGoogleMapAddress: yup.string().required("Required field"),
    wifeBankAccountName: yup.string().required("Required field"),
    wifeBankAccountNumber: yup.string().required("Required field"),
    wifeBankAccountImage: yup.string().required("Required field"),
  });

  const {
    register,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <h3 className=" -mx-4 mb-2 border-b border-color-border px-2 pb-4 text-xl font-medium">
        Bank account <span className="text-sm text-gray-secondary">v1</span>
      </h3>

      <div className="mb-4 -ml-2 text-sm">Property</div>

      <div className="mb-4">
        <label>Background</label>
        <InputImageCustom />
      </div>

      <div className="flex items-center text-center font-medium">
        <span className="mx-4 flex-grow border-t-1 border-dashed border-gray-500"></span>
        Wife information
        <span className="mx-4 flex-grow border-t-1 border-dashed border-gray-500"></span>
      </div>

      <div className="mb-4">
        <label htmlFor="wifeBankAccountName">Account name</label>
        <InputCustom
          id="wifeBankAccountName"
          type="text"
          className=" bg-white"
          {...register("wifeBankAccountName")}
        ></InputCustom>
      </div>

      <div className="mb-4">
        <label htmlFor="wifeBankAccountNumber">Account number</label>
        <InputCustom
          id="wifeBankAccountNumber"
          type="text"
          className=" bg-white"
          {...register("wifeBankAccountNumber")}
        ></InputCustom>
      </div>

      <div className="mb-4">
        <label htmlFor="wifeBankAccountImage">QR image</label>
        <InputImageCustom />
      </div>

      <div className="flex items-center text-center font-medium">
        <span className="mx-4 flex-grow border-t-1 border-dashed border-gray-500"></span>
        Husband information
        <span className="mx-4 flex-grow border-t-1 border-dashed border-gray-500"></span>
      </div>

      <div className="mb-4">
        <label htmlFor="husbandBankAccountName">Account name</label>
        <InputCustom
          id="husbandBankAccountName"
          type="text"
          className=" bg-white"
          {...register("husbandBankAccountName")}
        ></InputCustom>
      </div>

      <div className="mb-4">
        <label htmlFor="husbandBankAccountNumber">Account number</label>
        <InputCustom
          id="husbandBankAccountNumber"
          type="text"
          className=" bg-white"
          {...register("husbandBankAccountNumber")}
        ></InputCustom>
      </div>

      <div className="mb-4">
        <label htmlFor="husbandBankAccountImage">QR image</label>
        <InputImageCustom />
      </div>
    </div>
  );
}
