"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { InputCustom } from "@/components/common/Input";
import { InputImageCustom } from "@/components/common/InputImage";
import { IForeWordV1 } from ".";
import { ITemplate } from "@/app/[locale]/(dashboard)/templates/[slug]/page";
import { Dispatch, SetStateAction, useEffect } from "react";
import { EComponentCode } from "@/lib/enum";
import { cleanObj } from "@/lib/utils";

export function ForewordEditerV1(props: {
  code: EComponentCode;
  data: IForeWordV1;
  setData: Dispatch<SetStateAction<ITemplate[]>>;
}) {
  const schema = yup.object().shape({
    wifeName: yup.string().required("Required field"),
    husbandName: yup.string().required("Required field"),
    wifeImage: yup.string().required("Required field"),
    husbandImage: yup.string().required("Required field"),
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

  useEffect(() => {
    const tempData = getValues();

    props.setData((pre: ITemplate[]) => {
      return [...pre].map((template) => {
        if (template.code === props.code) {
          return { ...template, data: cleanObj(tempData) } as ITemplate;
        }

        return template;
      });
    });
  }, [JSON.stringify(getValues())]);

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
          onChange={(e) =>
            setValue("wifeName", e.target.value, { shouldValidate: true })
          }
          defaultValue={getValues("wifeName")}
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
          onChange={(e) =>
            setValue("husbandName", e.target.value, { shouldValidate: true })
          }
          defaultValue={getValues("husbandName")}
        ></InputCustom>
      </div>

      <div className="mb-4">
        <label htmlFor="husbandImage">Husband image</label>
        <InputImageCustom />
      </div>
    </div>
  );
}
