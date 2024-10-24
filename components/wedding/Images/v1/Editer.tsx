"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { InputImageCustom } from "@/components/common/InputImage";
import { IImages } from ".";

export function ImagesEditerV1(props: { data: IImages }) {
  const schema = yup.object().shape({
    images: yup
      .array()
      .of(yup.string())
      .length(9, "The number of images must be equal 9")
      .required("Required field"),
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
        <label htmlFor="wifeName">List images</label>
        <InputImageCustom mutiple={true} />
      </div>
    </div>
  );
}
