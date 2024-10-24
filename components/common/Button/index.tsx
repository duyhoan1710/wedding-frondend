"use client";

import { Button, ButtonProps } from "@nextui-org/react";
import classNames from "classnames";
import React from "react";
import LoadingSpinner from "../loading/LoadingSpinner";

export const ButtonCustom = ({
  children,
  className,
  isLoading,
  ...props
}: ButtonProps) => {
  return (
    <Button {...props} className={classNames(className, "rounded")}>
      {isLoading ? <LoadingSpinner /> : children}
    </Button>
  );
};
