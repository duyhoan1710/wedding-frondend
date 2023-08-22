"use client";

import useCountdownTime from "@/lib/hooks/useCountdownTime";
import React from "react";

const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

export default function Countdown({ targetDate }: { targetDate: string }) {
  const timeLeft = useCountdownTime(targetDate);

  return (
    <div className="flex justify-center text-center">
      <div className="m-[2px] flex h-[65px] w-[68px] animate-s-pulse flex-col justify-evenly rounded-full bg-pink-8 p-3 md:h-[100px] md:w-[100px]">
        <div suppressHydrationWarning className="text-xl md:text-3xl">
          {timeLeft.days}
        </div>
        <div className="text-xs opacity-70">DAY</div>
      </div>
      <div className="m-[2px] flex h-[68px] w-[68px] animate-s-pulse flex-col justify-evenly rounded-full bg-pink-8 p-3 md:h-[100px] md:w-[100px]">
        <div suppressHydrationWarning className="text-xl md:text-3xl">
          {formatTime(timeLeft.hours)}
        </div>
        <div className="text-xs opacity-70">HOUR</div>
      </div>
      <div className="m-[2px] flex h-[68px] w-[68px] animate-s-pulse flex-col justify-evenly rounded-full bg-pink-8 p-3 md:h-[100px] md:w-[100px]">
        <div suppressHydrationWarning className="text-xl md:text-3xl">
          {formatTime(timeLeft.minutes)}
        </div>
        <div className="text-xs opacity-70">MINUTE</div>
      </div>
      <div className="m-[2px] flex h-[68px] w-[68px] animate-s-pulse flex-col justify-evenly rounded-full bg-pink-8 p-3 md:h-[100px] md:w-[100px]">
        <div suppressHydrationWarning className="text-xl md:text-3xl">
          {formatTime(timeLeft.seconds)}
        </div>
        <div className="text-xs opacity-70">SECOND</div>
      </div>
    </div>
  );
}
