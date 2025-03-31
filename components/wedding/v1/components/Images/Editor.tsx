"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { InputImageCustom } from "@/components/common/InputImage";
import { IImages } from ".";
import { Dispatch, SetStateAction, useEffect } from "react";
import { cleanObj, getImage } from "@/lib/utils";
import { ITemplateV1 } from "..";
import { EComponentCodeV1 } from "../../enums";

export function ImagesEditor(props: {
  data: IImages;
  setData: Dispatch<SetStateAction<ITemplateV1[]>>;
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

    props.setData((pre: ITemplateV1[]) => {
      return [...pre].map((template) => {
        if (template.code === EComponentCodeV1.IMAGES) {
          return { ...template, data: cleanObj(tempData) } as ITemplateV1;
        }

        return template;
      });
    });
  }, [getValues, props]);

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
