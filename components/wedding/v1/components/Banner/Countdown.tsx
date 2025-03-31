"use client";

import { WidthContext } from "@/app/[locale]/(dashboard)/templates/[slug]/PreviewTemplateProvider";
import { EWindowSize } from "@/lib/enum";
import useCountdownTime from "@/lib/hooks/useCountdownTime";
import classNames from "classnames";
import React, { useContext } from "react";

const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

export default function Countdown({ targetDate }: { targetDate: string }) {
  const { width } = useContext(WidthContext);

  const timeLeft = useCountdownTime(targetDate);

  return (
    <div className="flex justify-center text-center">
      <div
        className={classNames(
          "m-[2px] flex h-[65px] w-[68px] animate-s-pulse flex-col justify-evenly rounded-full bg-pink-8 p-3 ",
          width >= EWindowSize.MD && "md:h-[80px] md:w-[80px]",
          width >= EWindowSize.XL && "xl:h-[100px] xl:w-[100px]",
        )}
      >
        <div
          suppressHydrationWarning
          className={classNames(
            "text-xl ",
            width >= EWindowSize.MD && "md:text-2xl",
            width >= EWindowSize.XL && "xl:text-3xl",
          )}
        >
          {timeLeft.days}
        </div>
        <div className="text-xs opacity-70">DAY</div>
      </div>
      <div
        className={classNames(
          "m-[2px] flex h-[65px] w-[68px] animate-s-pulse flex-col justify-evenly rounded-full bg-pink-8 p-3 ",
          width >= EWindowSize.MD && "md:h-[80px] md:w-[80px]",
          width >= EWindowSize.XL && "xl:h-[100px] xl:w-[100px]",
        )}
      >
        <div
          suppressHydrationWarning
          className={classNames(
            "text-xl ",
            width >= EWindowSize.MD && "md:text-2xl",
            width >= EWindowSize.XL && "xl:text-3xl",
          )}
        >
          {formatTime(timeLeft.hours)}
        </div>
        <div className="text-xs opacity-70">HOUR</div>
      </div>
      <div
        className={classNames(
          "m-[2px] flex h-[65px] w-[68px] animate-s-pulse flex-col justify-evenly rounded-full bg-pink-8 p-3 ",
          width >= EWindowSize.MD && "md:h-[80px] md:w-[80px]",
          width >= EWindowSize.XL && "xl:h-[100px] xl:w-[100px]",
        )}
      >
        <div
          suppressHydrationWarning
          className={classNames(
            "text-xl ",
            width >= EWindowSize.MD && "md:text-2xl",
            width >= EWindowSize.XL && "xl:text-3xl",
          )}
        >
          {formatTime(timeLeft.minutes)}
        </div>
        <div className="text-xs opacity-70">MINUTE</div>
      </div>
      <div
        className={classNames(
          "m-[2px] flex h-[65px] w-[68px] animate-s-pulse flex-col justify-evenly rounded-full bg-pink-8 p-3 ",
          width >= EWindowSize.MD && "md:h-[80px] md:w-[80px]",
          width >= EWindowSize.XL && "xl:h-[100px] xl:w-[100px]",
        )}
      >
        <div
          suppressHydrationWarning
          className={classNames(
            "text-xl ",
            width >= EWindowSize.MD && "md:text-2xl",
            width >= EWindowSize.XL && "xl:text-3xl",
          )}
        >
          {formatTime(timeLeft.seconds)}
        </div>
        <div className="text-xs opacity-70">SECOND</div>
      </div>
    </div>
  );
}
