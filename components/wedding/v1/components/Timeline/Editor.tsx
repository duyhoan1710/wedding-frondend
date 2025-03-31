"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { InputCustom } from "@/components/common/Input";
import { InputImageCustom } from "@/components/common/InputImage";
import { DatePickerCustom } from "@/components/common/Datepicker";
import { ITimeline } from "./index";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { TextAreaCustom } from "@/components/common/Textarea";
import { ButtonCustom } from "@/components/common/Button";
import { cleanObj, formatDate, formatDateString, getImage } from "@/lib/utils";
import { ITemplateV1 } from "..";
import { EComponentCodeV1 } from "../../enums";

const DEFAULT_TIMELINE = {
  title: "",
  date: "",
  content: "",
  image: "",
};

export function TimelineEditor(props: {
  data: ITimeline;
  setData: Dispatch<SetStateAction<ITemplateV1[]>>;
}) {
  const schema = yup.object().shape({
    timelines: yup
      .array()
      .of(
        yup.object().shape({
          title: yup.string().required("Title is required"),
          date: yup.string().required("Date is required"),
          content: yup.string().required("Content is required"),
          image: yup.string().required("Image is required"),
        }),
      )
      .min(1, "At least one item is required")
      .required("Timelines is required"),
  });

  const {
    setValue,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: { timelines: props.data.timelines },
  });

  useEffect(() => {
    const tempData = getValues();

    props.setData((pre: ITemplateV1[]) => {
      return [...pre].map((template) => {
        if (template.code === EComponentCodeV1.TIMELINE) {
          return { ...template, data: cleanObj(tempData) } as ITemplateV1;
        }

        return template;
      });
    });
  }, [getValues, props]);

  const addItem = () => {
    const timelines = getValues().timelines;

    setValue("timelines", [...timelines, DEFAULT_TIMELINE], {
      shouldValidate: true,
    });
  };

  const removeItem = (index: number) => {
    const cloneTimelines = getValues().timelines;

    cloneTimelines.splice(index, 1);

    setValue("timelines", cloneTimelines, {
      shouldValidate: true,
    });
  };

  const setValueToItem = (index: number, key: string, value: any) => {
    const cloneTimelines = getValues().timelines;

    const timelineEdited = [...cloneTimelines].map((timeline, idx) => {
      if (index === idx) {
        return {
          ...timeline,
          [key]: value,
        };
      }

      return timeline;
    });

    setValue("timelines", timelineEdited, { shouldValidate: true });
  };

  return (
    <div>
      <h3 className="-mx-4 mb-2 border-b border-color-border px-2 pb-4 text-xl font-medium">
        Timeline <span className="text-sm text-gray-secondary">v1</span>
      </h3>

      <div className="mb-4 -ml-2 text-sm">Property</div>

      {getValues("timelines").map((timeline, index) => (
        <div key={index}>
          <div className="flex justify-end">
            <ButtonCustom
              className="h-fit"
              variant="bordered"
              color={getValues().timelines.length === 1 ? "default" : "danger"}
              disabled={getValues().timelines.length === 1}
              onClick={() => removeItem(index)}
            >
              Remove
            </ButtonCustom>
          </div>

          <div className="mb-4">
            <label htmlFor="title">Title</label>
            <InputCustom
              id="title"
              type="text"
              className=" bg-white"
              defaultValue={timeline.title}
              onChange={(e) => setValueToItem(index, "title", e.target.value)}
            ></InputCustom>
          </div>

          <div className="mb-4">
            <label htmlFor="date">Anniversary day</label>
            <DatePickerCustom
              id="date"
              onChange={(value) =>
                setValueToItem(index, "date", formatDate(value))
              }
              value={formatDateString(timeline.date)}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="content">Content</label>
            <TextAreaCustom
              id="content"
              className=" bg-white"
              rows={2}
              defaultValue={timeline.content}
              onChange={(e) => setValueToItem(index, "content", e.target.value)}
            ></TextAreaCustom>
          </div>

          <div className="mb-4">
            <label htmlFor="image">Image</label>
            <InputImageCustom
              value={getImage(timeline.image)}
              onUploadSuccess={(value) => setValueToItem(index, "image", value)}
            />
          </div>

          {index !== getValues().timelines.length - 1 && (
            <div className="-mx-2 mb-4 border-b border-gray-500" />
          )}
        </div>
      ))}

      <div className="mt-4 flex justify-center">
        <AiOutlinePlusCircle
          size={20}
          className=" cursor-pointer"
          onClick={addItem}
        />
      </div>
    </div>
  );
}
