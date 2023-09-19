"use client";

import FloatingElements from "@/components/shared/FloatingAnimation";
import { useEffect, useRef } from "react";

import Countdown from "../Countdown";

export default function Banner() {
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
      className="relative h-[330px] w-full overflow-y-hidden md:h-[560px] lg:h-screen"
      style={{
        backgroundImage: "url('/assets/wedding_img/main.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      ref={bannerRef}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 z-10 bg-black opacity-50"></div>

      <div className="absolute top-[20%] bottom-0 left-0 right-0 z-20 text-center text-white md:top-[18%]">
        <div className="animate-box">
          <h1 className="font-sacra text-4xl leading-tight md:text-6xl md:leading-normal lg:text-8xl">
            Anh Tho
          </h1>
          <h1 className="font-sacra text-2xl leading-tight md:text-6xl md:leading-normal lg:text-8xl">
            &
          </h1>
          <h1 className="font-sacra text-4xl leading-tight md:text-6xl md:leading-normal lg:text-8xl">
            Dien Nguyen
          </h1>
          <p className="mb-4 mt-3 text-sm md:mb-6 md:text-xl">
            We Are Getting Married In
          </p>
          <Countdown targetDate="2023-09-21T00:00:00" />
        </div>
      </div>

      <FloatingElements />
    </div>
  );
}
