"use client";

import classNames from "classnames";
import React from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  size?: number;
}

export const TextAreaCustom = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ className, size, ...props }, ref) => {
  return (
    <textarea
      {...props}
      ref={ref}
      className={classNames(
        className,
        "w-full rounded border border-color-border",
      )}
    />
  );
});
