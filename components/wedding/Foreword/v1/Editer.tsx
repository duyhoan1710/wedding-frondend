"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { InputCustom } from "@/components/common/Input";
import { InputImageCustom } from "@/components/common/InputImage";
import { IForeWordV1 } from ".";

export function ForewordEditerV1(props: { data: IForeWordV1 }) {
  const schema = yup.object().shape({
    wifeName: yup.string().required("Required field"),
    husbandName: yup.string().required("Required field"),
    wifeImage: yup.string().required("Required field"),
    husbandImage: yup.string().required("Required field"),
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
        Foreword <span className="text-sm text-gray-secondary">v1</span>
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
        <label htmlFor="wifeImage">Wife image</label>
        <InputImageCustom />
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
        <label htmlFor="husbandImage">Husband image</label>
        <InputImageCustom />
      </div>
    </div>
  );
}
