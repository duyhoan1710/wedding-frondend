"use client";

import classNames from "classnames";
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: number;
  error?: string;
}

export const InputCustom = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, size, ...props }, ref) => {
    return (
      <div>
        <input
          {...props}
          ref={ref}
          className={classNames(
            className,
            "h-[40px] w-full rounded border border-color-border px-2",
          )}
        />
        <div
          className={classNames(
            "h-0 text-sm text-red-500 opacity-0 transition-all",
            {
              "ml-1 mt-1 h-auto opacity-100": !!error,
            },
          )}
        >
          {error}
        </div>
      </div>
    );
  },
);
