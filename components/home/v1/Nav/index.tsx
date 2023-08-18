"use client";

import useScroll from "@/lib/hooks/use-scroll";

export default function Nav() {
  const scrolled = useScroll(20);

  return (
    <div
      className={`fixed top-6 left-8 z-20 w-[150px] font-sacra text-2xl leading-[1.2] text-white md:top-8 md:left-20 md:text-[40px] ${
        scrolled ? "invisible" : "visible"
      }`}
    >
      Wedding Invitation
    </div>
  );
}
