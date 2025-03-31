"use client";

import { WidthContext } from "@/app/[locale]/(dashboard)/templates/[slug]/PreviewTemplateProvider";
import { EWindowSize } from "@/lib/enum";
import classNames from "classnames";
import { useContext } from "react";

export interface IFooter {}

export const DEFAULT_DATA_FOOTER = {};

export default function Footer(props: { props: IFooter }) {
  const { width } = useContext(WidthContext);

  return (
    <div className="px-5 pt-32 pb-48 text-center">
      <div>
        <h2
          className={classNames(
            "animate-box mb-3 font-sacra text-5xl font-bold leading-normal text-pink ",
            width >= EWindowSize.MD && "md:text-6xl",
          )}
        >
          Thank You!
        </h2>
        <div
          className={classNames(
            "animate-box text-sm leading-normal tracking-wider text-gray ",
            width >= EWindowSize.MD && "md:text-lg",
          )}
        >
          Sự hiện diện của các bạn là niềm vinh dự của gia đình chúng tôi,{" "}
          <br /> Rất hân hạnh được đón tiếp
        </div>
      </div>
    </div>
  );
}
