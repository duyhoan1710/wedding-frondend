"use client";

import React from "react";

export default function FadeInSection(props: any) {
  const [isVisible, setVisible] = React.useState(true);

  const domRef = React.useRef<any>();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div className={`${isVisible ? "animate-fade-up" : ""}`} ref={domRef}>
      {props.children}
    </div>
  );
}
