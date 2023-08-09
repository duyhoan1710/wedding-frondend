"use client";

import React, { useState, useEffect } from "react";

export default function Countdown({ targetDate }: { targetDate: string }) {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

  return (
    <div className="flex justify-center">
      <div className="m-[2px] flex h-[75px] w-[75px] animate-s-pulse flex-col justify-evenly rounded-full bg-pink-8 p-3 md:h-[100px] md:w-[100px]">
        <div className="text-2xl md:text-3xl">{timeLeft.days}</div>
        <div className="text-xs opacity-70">DAY</div>
      </div>
      <div className="m-[2px] flex h-[75px] w-[75px] animate-s-pulse flex-col justify-evenly rounded-full bg-pink-8 p-3 md:h-[100px] md:w-[100px]">
        <div className="text-2xl md:text-3xl">{formatTime(timeLeft.hours)}</div>
        <div className="text-xs opacity-70">HOUR</div>
      </div>
      <div className="m-[2px] flex h-[75px] w-[75px] animate-s-pulse flex-col justify-evenly rounded-full bg-pink-8 p-3 md:h-[100px] md:w-[100px]">
        <div className="text-2xl md:text-3xl">
          {formatTime(timeLeft.minutes)}
        </div>
        <div className="text-xs opacity-70">MINUTE</div>
      </div>
      <div className="m-[2px] flex h-[75px] w-[75px] animate-s-pulse flex-col justify-evenly rounded-full bg-pink-8 p-3 md:h-[100px] md:w-[100px]">
        <div className="text-2xl md:text-3xl">
          {formatTime(timeLeft.seconds)}
        </div>
        <div className="text-xs opacity-70">SECOND</div>
      </div>
    </div>
  );
}
