"use client";

import { useContext, useEffect, useRef } from "react";

import Countdown from "./Countdown";
import FloatingElements from "@/components/common/FloatingAnimation";
import { WidthContext } from "@/app/[locale]/(dashboard)/templates/[slug]/PreviewTemplateProvider";
import classNames from "classnames";
import { EWindowSize } from "@/lib/enum";

export interface IBannerV1 {
  husbandName: string;
  wifeName: string;
  weddingDate: string;
  background: string;
}

export const DEFAULT_DATA_BANNER_V1 = {
  husbandName: "",
  wifeName: "",
  weddingDate: "",
  background: "",
};

export default function BannerV1(props: IBannerV1) {
  const { width } = useContext(WidthContext);

  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScrollBanner = () => {
      bannerRef.current?.style.setProperty(
        "background-position",
        `0 ${window.scrollY / 2.5}px`,
      );
    };
    window.addEventListener("scroll", onScrollBanner);

    return () => window.removeEventListener("scroll", onScrollBanner);
  }, []);

  return (
    <div
      className={classNames(
        "relative h-[330px] w-full overflow-y-hidden",
        width >= EWindowSize.MD && "md:h-[560px]",
        width >= EWindowSize.XL && "xl:h-screen",
      )}
      style={{
        backgroundImage: `url('${props.background}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      ref={bannerRef}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-50"></div>

      <div
        className={classNames(
          `absolute top-6 left-8 z-20 hidden w-[200px] font-sacra text-2xl leading-[1.2] text-white `,
          width >= EWindowSize.MD &&
            "md:top-8 md:left-20 md:block md:text-[40px]",
        )}
      >
        Wedding Invitation
      </div>

      <div
        className={classNames(
          "absolute top-[20%] bottom-0 left-0 right-0 z-20 text-center text-white ",
          width >= EWindowSize.MD && "md:top-[18%]",
        )}
      >
        <div className="animate-box">
          <h1
            className={classNames(
              "font-sacra text-4xl leading-tight",
              width >= EWindowSize.MD && "md:text-6xl md:leading-normal",
              width >= EWindowSize.LG && "lg:text-8xl",
            )}
          >
            {props.wifeName}
          </h1>
          <h1
            className={classNames(
              "font-sacra text-2xl leading-tight",
              width >= EWindowSize.MD && "md:text-6xl md:leading-normal",
              width >= EWindowSize.LG && "lg:text-8xl",
            )}
          >
            &
          </h1>
          <h1
            className={classNames(
              "font-sacra text-4xl leading-tight ",
              width >= EWindowSize.MD && "md:text-6xl md:leading-normal",
              width >= EWindowSize.LG && "lg:text-8xl",
            )}
          >
            {props.husbandName}
          </h1>
          <p
            className={classNames(
              "mb-4 mt-3 text-sm",
              width >= EWindowSize.MD && "md:mb-6 md:text-xl",
            )}
          >
            We Are Getting Married In
          </p>
          <Countdown targetDate={props.weddingDate} />
        </div>
      </div>

      <FloatingElements />
    </div>
  );
}
