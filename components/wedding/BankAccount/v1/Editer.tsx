"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { InputCustom } from "@/components/common/Input";
import { InputImageCustom } from "@/components/common/InputImage";
import { IBankAccountV1 } from ".";
import { ITemplate } from "@/app/[locale]/(dashboard)/templates/[slug]/page";
import { Dispatch, SetStateAction } from "react";
import { EComponentCode } from "@/lib/enum";

export function BankAccountEditerV1(props: {
  code: EComponentCode;
  data?: IBankAccountV1;
  setData: Dispatch<SetStateAction<ITemplate[]>>;
}) {
  const schema = yup.object().shape({
    background: yup.string().required("Required field"),
    husbandBankAccountName: yup.string().required("Required field"),
    husbandBankAccountNumber: yup.string().required("Required field"),
    husbandBankAccountImage: yup.string().required("Required field"),
    wifeBankAccountName: yup.string().required("Required field"),
    wifeBankAccountNumber: yup.string().required("Required field"),
    wifeBankAccountImage: yup.string().required("Required field"),
  });

  const {
    setValue,
    register,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: props.data,
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
          onChange={(e) =>
            setValue("wifeBankAccountName", e.target.value, {
              shouldValidate: true,
            })
          }
          defaultValue={getValues("wifeBankAccountName")}
        ></InputCustom>
      </div>

      <div className="mb-4">
        <label htmlFor="wifeBankAccountNumber">Account number</label>
        <InputCustom
          id="wifeBankAccountNumber"
          type="text"
          className=" bg-white"
          {...register("wifeBankAccountNumber")}
          onChange={(e) =>
            setValue("wifeBankAccountNumber", e.target.value, {
              shouldValidate: true,
            })
          }
          defaultValue={getValues("wifeBankAccountNumber")}
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
          onChange={(e) =>
            setValue("husbandBankAccountName", e.target.value, {
              shouldValidate: true,
            })
          }
          defaultValue={getValues("husbandBankAccountName")}
        ></InputCustom>
      </div>

      <div className="mb-4">
        <label htmlFor="husbandBankAccountNumber">Account number</label>
        <InputCustom
          id="husbandBankAccountNumber"
          type="text"
          className=" bg-white"
          {...register("husbandBankAccountNumber")}
          onChange={(e) =>
            setValue("husbandBankAccountNumber", e.target.value, {
              shouldValidate: true,
            })
          }
          defaultValue={getValues("husbandBankAccountNumber")}
        ></InputCustom>
      </div>

      <div className="mb-4">
        <label htmlFor="husbandBankAccountImage">QR image</label>
        <InputImageCustom />
      </div>
    </div>
  );
}
