"use client";

import React from "react";

import { sleep } from "@/lib/utils";

export default function FadeInSection(props: any) {
  React.useEffect(() => {
    const animateBox = document.querySelectorAll(".animate-box");

    const observer = new IntersectionObserver(
      async (entries) => {
        for (const entry of entries) {
          if (entry.intersectionRatio >= 0.9) {
            entry.target.classList.add("animate-fade-up", "visible");
            await sleep(300);
          }
        }
      },
      {
        threshold: 1,
      },
    );

    animateBox.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return <>{props.children}</>;
}
