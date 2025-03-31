"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { InputCustom } from "@/components/common/Input";
import { IBanner } from ".";
import { InputImageCustom } from "@/components/common/InputImage";
import { DatePickerCustom } from "@/components/common/Datepicker";
import { Dispatch, SetStateAction, useEffect } from "react";
import { cleanObj, formatDate, formatDateString, getImage } from "@/lib/utils";
import { ITemplateV1 } from "..";
import { EComponentCodeV1 } from "../../enums";

export function BannerEditor(props: {
  data: IBanner;
  setData: Dispatch<SetStateAction<ITemplateV1[]>>;
}) {
  const schema = yup.object().shape({
    wifeName: yup.string().required("Required field"),
    husbandName: yup.string().required("Required field"),
    weddingDate: yup.string().required("Required field"),
    background: yup.string().required("Required field"),
  });

  const {
    register,
    setValue,
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
        if (template.code === EComponentCodeV1.BANNER) {
          return { ...template, data: cleanObj(tempData) } as ITemplateV1;
        }

        return template;
      });
    });
  }, [getValues, props]);

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
          onChange={(e) =>
            setValue("wifeName", e.target.value, { shouldValidate: true })
          }
          defaultValue={getValues("wifeName")}
        ></InputCustom>
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
        <label htmlFor="wifeDate">Wedding date</label>
        <DatePickerCustom
          onChange={(value) =>
            setValue("weddingDate", formatDate(value), {
              shouldValidate: true,
            })
          }
          value={formatDateString(props.data.weddingDate)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wifeName">Background</label>
        <InputImageCustom
          value={getImage(getValues("background"))}
          onUploadSuccess={(value) => {
            setValue("background", value as string, { shouldValidate: true });
          }}
        />
      </div>
    </div>
  );
}
