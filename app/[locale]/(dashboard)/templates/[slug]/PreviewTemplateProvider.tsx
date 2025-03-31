"use client";

import { ReactNode, createContext, useEffect, useRef, useState } from "react";

export const WidthContext = createContext<{
  width: number;
}>({
  width: typeof window !== undefined ? window?.screen?.width : 0,
});

export function PreviewTemplateProvider({ children }: { children: ReactNode }) {
  const childRef = useRef<any>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries[0]) {
        const { width } = entries[0].contentRect;
        setWidth(width);
      }
    });

    if (childRef.current) {
      resizeObserver.observe(childRef.current);
    }

    return () => {
      if (childRef.current) {
        resizeObserver.unobserve(childRef.current);
      }
    };
  }, []);

  return (
    <WidthContext.Provider value={{ width }}>
      <div className="w-full" ref={childRef}>
        {children}
      </div>
    </WidthContext.Provider>
  );
}
