"use client";

import { WidthContext } from "@/app/[locale]/(dashboard)/templates/[slug]/PreviewTemplateProvider";
import { EWindowSize } from "@/lib/enum";
import { getImage } from "@/lib/utils";
import classNames from "classnames";
import Image from "next/image";
import { useContext } from "react";

export interface IBankAccount {
  background: string;
  husbandBankAccountName: string;
  husbandBankAccountNumber: string;
  husbandBankAccountImage: string;
  wifeBankAccountName: string;
  wifeBankAccountNumber: string;
  wifeBankAccountImage: string;
}

export const DEFAULT_DATA_BANK_ACCOUNT = {
  background: "img_bg.jpeg",
  husbandBankAccountName: "",
  husbandBankAccountNumber: "",
  husbandBankAccountImage: "",
  wifeBankAccountName: "",
  wifeBankAccountNumber: "",
  wifeBankAccountImage: "",
};

export default function BankAccount({ props }: { props: IBankAccount }) {
  const { width } = useContext(WidthContext);

  return (
    <div
      className={classNames(
        "relative flex h-[954px] w-full justify-center ",
        width >= EWindowSize.MD && "md:h-[698px]",
      )}
    >
      <Image
        src={getImage(props.background)}
        alt=""
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-40" />

      <div className="absolute flex h-full w-full max-w-[1140px] flex-col items-center justify-center px-5 text-center">
        <div className="animate-box px-2 md:mb-10">
          <h2
            className={classNames(
              "font-sacra text-[40px] font-bold leading-normal text-white",
              width >= EWindowSize.LG && "lg:mb-5 lg:text-6xl",
            )}
          >
            Thông Tin Ngân Hàng
          </h2>
          <p
            className={classNames(
              "text-lg text-gray",
              width >= EWindowSize.MD && "md:text-xl",
            )}
          >
            Dành cho các tín đồ hệ không dùng tiền mặt.
          </p>
        </div>

        <div
          className={classNames(
            "flex w-full flex-col items-center",
            width >= EWindowSize.MD && "md:flex-row md:justify-around",
          )}
        >
          <div
            className={classNames(
              "animate-box mt-8 flex flex-col items-center",
              width >= EWindowSize.MD && "md:mt-0 md:text-right",
            )}
          >
            <div className="mb-5 font-sacra text-3xl text-pink">
              {props.husbandBankAccountName}
            </div>
            <div className="mb-5 text-xl font-semibold text-gray-c">
              {props.husbandBankAccountNumber}
            </div>
            <Image
              src={getImage(props.husbandBankAccountImage)}
              alt=""
              width={200}
              height={200}
              className="h-[200px] rounded"
            />
          </div>

          <div
            className={classNames(
              "animate-box mt-8 flex flex-col items-center",
              width >= EWindowSize.MD && "md:mt-0 md:text-left",
            )}
          >
            <div className="mb-5 font-sacra text-3xl text-pink">
              {props.wifeBankAccountName}
            </div>
            <div className="mb-5 text-xl font-semibold text-gray-c">
              {props.wifeBankAccountNumber}
            </div>
            <Image
              src={getImage(props.wifeBankAccountImage)}
              alt=""
              width={200}
              height={200}
              className="h-[200px] rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
