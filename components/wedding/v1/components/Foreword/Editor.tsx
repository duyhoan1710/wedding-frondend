"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { InputCustom } from "@/components/common/Input";
import { InputImageCustom } from "@/components/common/InputImage";
import { IForeWord } from ".";
import { Dispatch, SetStateAction, useEffect } from "react";
import { cleanObj, getImage } from "@/lib/utils";
import { ITemplateV1 } from "..";
import { EComponentCodeV1 } from "../../enums";

export function ForewordEditor(props: {
  data: IForeWord;
  setData: Dispatch<SetStateAction<ITemplateV1[]>>;
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

    props.setData((pre: ITemplateV1[]) => {
      return [...pre].map((template) => {
        if (template.code === EComponentCodeV1.FOREWORD) {
          return { ...template, data: cleanObj(tempData) } as ITemplateV1;
        }

        return template;
      });
    });
  }, [getValues, props]);

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
        <InputImageCustom
          value={getImage(getValues("wifeImage"))}
          onUploadSuccess={(value) =>
            setValue("wifeImage", value as string, { shouldValidate: true })
          }
        />
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
        <InputImageCustom
          value={getImage(getValues("husbandImage"))}
          onUploadSuccess={(value) =>
            setValue("husbandImage", value as string, { shouldValidate: true })
          }
        />
      </div>
    </div>
  );
}
