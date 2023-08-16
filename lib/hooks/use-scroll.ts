"use client";

import { useCallback, useEffect, useState } from "react";

export default function useScroll(threshold: number) {
  const [scrolled, setScrolled] = useState(true);

  const onScroll = useCallback(() => {
    setScrolled(window.pageYOffset > threshold);
  }, [threshold]);

  useEffect(() => {
    setScrolled(window?.pageYOffset > threshold);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return scrolled;
}
