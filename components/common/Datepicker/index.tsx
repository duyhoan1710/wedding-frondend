"use client";

import DatePicker, { DatePickerProps } from "react-datepicker";
import { AiTwotoneCalendar } from "react-icons/ai";

import "react-datepicker/dist/react-datepicker.css";

export function DatePickerCustom(props: DatePickerProps) {
  return (
    <DatePicker
      {...props}
      icon={<AiTwotoneCalendar className="mt-1" />}
      showIcon
      wrapperClassName="w-full"
      placeholderText={props.placeholderText || "DD-MM-YYYY"}
      className="h-[40px] w-full rounded border border-color-border !pl-8"
    />
  );
}
