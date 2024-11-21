"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { InputImageCustom } from "@/components/common/InputImage";
import { IImagesV1 } from ".";
import { ITemplate } from "@/app/[locale]/(dashboard)/templates/[slug]/page";
import { Dispatch, SetStateAction, useEffect } from "react";
import { EComponentCode } from "@/lib/enum";
import { cleanObj, getImage } from "@/lib/utils";

export function ImagesEditerV1(props: {
  code: EComponentCode;
  data: IImagesV1;
  setData: Dispatch<SetStateAction<ITemplate[]>>;
}) {
  const schema = yup.object().shape({
    images: yup
      .array()
      .of(yup.string().required("Required field"))
      .length(9, "The number of images must be equal 9")
      .required("Required field"),
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
        Images <span className="text-sm text-gray-secondary">v1</span>
      </h3>

      <div className="mb-4 -ml-2 text-sm">Property</div>

      <div className="mb-4">
        <label htmlFor="wifeName">List images</label>
        <InputImageCustom
          mutiple={true}
          value={getValues("images").map((image) => getImage(image))}
          onUploadSuccess={(value) =>
            setValue("images", value as string[], { shouldValidate: true })
          }
        />
      </div>
    </div>
  );
}
