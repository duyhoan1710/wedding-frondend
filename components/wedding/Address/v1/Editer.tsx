"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { InputCustom } from "@/components/common/Input";
import { IAddressV1 } from ".";
import { InputImageCustom } from "@/components/common/InputImage";
import { DatePickerCustom } from "@/components/common/Datepicker";
import { TextAreaCustom } from "@/components/common/Textarea";
import { ITemplate } from "@/app/[locale]/(dashboard)/templates/[slug]/page";
import { Dispatch, SetStateAction, useEffect } from "react";
import { EComponentCode } from "@/lib/enum";
import { cleanObj, formatDate, formatDateString } from "@/lib/utils";

export function AddressEditerV1(props: {
  code: EComponentCode;
  data?: IAddressV1;
  setData: Dispatch<SetStateAction<ITemplate[]>>;
}) {
  const schema = yup.object().shape({
    backgroundLeft: yup.string().required("Required field"),
    backgroundRight: yup.string().required("Required field"),
    husbandDatetime: yup.string().required("Required field"),
    husbandAddress: yup.string().required("Required field"),
    husbandGoogleMapAddress: yup.string(),
    wifeDatetime: yup.string().required("Required field"),
    wifeAddress: yup.string().required("Required field"),
    wifeGoogleMapAddress: yup.string(),
  });

  const {
    setValue,
    register,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
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
        Address <span className="text-sm text-gray-secondary">v1</span>
      </h3>

      <div className="mb-4 -ml-2 text-sm">Property</div>

      <div className="mb-4">
        <label>Background left</label>
        <InputImageCustom />
      </div>

      <div className="mb-4">
        <label>Background right</label>
        <InputImageCustom />
      </div>

      <div className="flex items-center text-center font-medium">
        <span className="mx-4 flex-grow border-t-1 border-dashed border-gray-500"></span>
        Wife information
        <span className="mx-4 flex-grow border-t-1 border-dashed border-gray-500"></span>
      </div>

      <div className="mb-4">
        <label htmlFor="wifeDatetime">Datetime</label>
        <DatePickerCustom
          showTimeSelect
          placeholderText="DD-MM-YYYY HH:mm"
          value={formatDateString(
            getValues("husbandDatetime"),
            "DD-MM-YYYY HH:mma",
          )}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="wifeAddress">Address</label>
        <TextAreaCustom
          id="wifeAddress"
          className=" bg-white"
          rows={3}
          {...register("wifeAddress")}
          onChange={(e) =>
            setValue("wifeAddress", e.target.value, { shouldValidate: true })
          }
        ></TextAreaCustom>
      </div>

      <div className="mb-4">
        <label htmlFor="wifeGoogleMapAddress">Link GoogleMap</label>
        <InputCustom
          id="wifeGoogleMapAddress"
          type="text"
          className=" bg-white"
          {...register("wifeGoogleMapAddress")}
          onChange={(e) =>
            setValue("wifeGoogleMapAddress", e.target.value, {
              shouldValidate: true,
            })
          }
        ></InputCustom>
      </div>

      <div className="flex items-center text-center font-medium">
        <span className="mx-4 flex-grow border-t-1 border-dashed border-gray-500"></span>
        Husband information
        <span className="mx-4 flex-grow border-t-1 border-dashed border-gray-500"></span>
      </div>

      <div className="mb-4">
        <label htmlFor="husbandDatetime"> Datetime</label>
        <DatePickerCustom
          showTimeSelect
          onChange={(value) =>
            setValue("husbandDatetime", formatDate(value), {
              shouldValidate: true,
            })
          }
          placeholderText="DD-MM-YYYY HH:mm"
          value={formatDateString(
            getValues("husbandDatetime"),
            "DD-MM-YYYY HH:mma",
          )}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="husbandAddress"> Address</label>
        <TextAreaCustom
          id="husbandAddress"
          className=" bg-white"
          rows={3}
          {...register("husbandAddress")}
          onChange={(e) =>
            setValue("husbandAddress", e.target.value, { shouldValidate: true })
          }
        ></TextAreaCustom>
      </div>

      <div className="mb-4">
        <label htmlFor="husbandGoogleMapAddress">Link GoogleMap</label>
        <InputCustom
          id="husbandGoogleMapAddress"
          type="text"
          className=" bg-white"
          {...register("husbandGoogleMapAddress")}
          onChange={(e) =>
            setValue("husbandGoogleMapAddress", e.target.value, {
              shouldValidate: true,
            })
          }
        ></InputCustom>
      </div>
    </div>
  );
}
