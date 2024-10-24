"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { AiOutlinePlusCircle } from "react-icons/ai";

import { InputCustom } from "@/components/common/Input";
import { InputImageCustom } from "@/components/common/InputImage";
import { DatePickerCustom } from "@/components/common/Datepicker";
import { ITImelineItemV1, ITimelineV1 } from ".";
import { useState } from "react";
import { TextAreaCustom } from "@/components/common/Textarea";
import { ButtonCustom } from "@/components/common/Button";

const DEFAULT_TIMELINE = {
  title: "",
  date: "",
  content: "",
  image: "",
};

export function TimelineEditerV1(props: { data: ITimelineV1 }) {
  const [timelines, setTimelines] = useState<ITImelineItemV1[]>([
    DEFAULT_TIMELINE,
  ]);

  const schema = yup.object().shape({
    items: yup
      .array()
      .of(
        yup.object().shape({
          title: yup.string().required("Title is required"),
          date: yup.string().required("Date is required"),
          content: yup.string().required("Content is required"),
          image: yup.string().required("Image is required"),
        }),
      )
      .min(1, "At least one item is required"),
  });

  const {
    register,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const addItem = () => {
    setTimelines((pre) => [...pre, DEFAULT_TIMELINE]);
  };

  const removeItem = (index: number) => {
    const cloneTimelines = [...timelines];

    cloneTimelines.splice(index, 1);

    setTimelines(cloneTimelines);
  };

  return (
    <div>
      <h3 className="-mx-4 mb-2 border-b border-color-border px-2 pb-4 text-xl font-medium">
        Timeline <span className="text-sm text-gray-secondary">v1</span>
      </h3>

      <div className="mb-4 -ml-2 text-sm">Property</div>

      {timelines.map((timeline, index) => (
        <div>
          <div className="flex justify-end">
            <ButtonCustom
              className="h-fit"
              variant="bordered"
              color={timelines.length === 1 ? "default" : "danger"}
              disabled={timelines.length === 1}
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
            ></InputCustom>
          </div>

          <div className="mb-4">
            <label htmlFor="content">Content</label>
            <TextAreaCustom
              id="content"
              className=" bg-white"
              rows={2}
            ></TextAreaCustom>
          </div>

          <div className="mb-4">
            <label htmlFor="date">Anniversary day</label>
            <DatePickerCustom id="date" />
          </div>

          <div className="mb-4">
            <label htmlFor="wifeName">Image</label>
            <InputImageCustom />
          </div>

          {index !== timelines.length - 1 && (
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
