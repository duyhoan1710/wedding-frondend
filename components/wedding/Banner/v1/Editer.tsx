"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { InputCustom } from "@/components/common/Input";
import { IBannerV1 } from ".";
import { InputImageCustom } from "@/components/common/InputImage";
import { DatePickerCustom } from "@/components/common/Datepicker";

export function BannerEditerV1(props: { data: IBannerV1 }) {
  const schema = yup.object().shape({
    wifeName: yup.string().required("Required field"),
    husbandName: yup.string().required("Required field"),
    weddingDate: yup.string().required("Required field"),
    background: yup.string().required("Required field"),
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
        Banner <span className="text-sm text-gray-secondary">v1</span>
      </h3>

      <div className="mb-4 -ml-2 text-sm">Property</div>
      <div className="mb-4">
        <label htmlFor="wifeName">Wife name</label>
        <InputCustom
          id="wifeName"
          type="text"
          className=" bg-white"
          {...register("wifeName")}
        ></InputCustom>
      </div>

      <div className="mb-4">
        <label htmlFor="husbandName">Husband name</label>
        <InputCustom
          id="husbandName"
          type="text"
          className=" bg-white"
          {...register("husbandName")}
        ></InputCustom>
      </div>

      <div className="mb-4">
        <label htmlFor="wifeName">Wedding date</label>
        <DatePickerCustom />
      </div>

      <div className="mb-4">
        <label htmlFor="wifeName">Background</label>
        <InputImageCustom />
      </div>
    </div>
  );
}
