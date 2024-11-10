"use client";

import { WidthContext } from "@/app/[locale]/(dashboard)/templates/[slug]/PreviewTemplateProvider";
import { EWindowSize } from "@/lib/enum";
import { getImage } from "@/lib/utils";
import classNames from "classnames";
import Image from "next/image";
import { useContext } from "react";

export interface IAddressV1 {
  backgroundLeft: string;
  backgroundRight: string;
  husbandDatetime: string;
  husbandAddress: string;
  husbandGoogleMapAddress?: string;
  wifeDatetime: string;
  wifeAddress: string;
  wifeGoogleMapAddress?: string;
}

export const DEFAULT_DATA_ADDRESS_V1 = {
  backgroundLeft: "",
  backgroundRight: "",
  husbandDatetime: "",
  husbandAddress: "",
  husbandGoogleMapAddress: "",
  wifeDatetime: "",
  wifeAddress: "",
  wifeGoogleMapAddress: "",
};

export default function AddressV1(props: IAddressV1) {
  const { width = window?.screen?.width } = useContext(WidthContext);

  return (
    <div
      className={classNames(
        "relative h-[821px] w-full",
        width >= EWindowSize.MD && "md:h-[724px]",
        width >= EWindowSize.XL && "xl:h-[628px]",
        width >= EWindowSize.XXL && "2xl:h-[821px]",
      )}
    >
      <div className="flex h-full">
        <div
          className={classNames(
            "relative h-full w-full ",
            width >= EWindowSize.LG && "lg:w-[55%]",
          )}
        >
          <Image
            src={getImage(props.backgroundLeft)}
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div
          className={classNames(
            "relative h-full w-full",
            width >= EWindowSize.LG && "lg:w-[45%]",
          )}
        >
          <Image
            src={getImage(props.backgroundRight)}
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div
        className={classNames(
          "absolute top-0 z-10 flex h-full w-full flex-col items-center justify-center px-3 py-8 text-center",
          width >= EWindowSize.LG && "lg:w-[55%]",
        )}
      >
        <h2
          className={classNames(
            "animate-box mb-3 font-sacra text-5xl font-bold leading-normal text-white",
            width >= EWindowSize.LG && "lg:text-6xl",
          )}
        >
          Wedding Event
        </h2>

        <div className="w-full rounded-md">
          <div className="animate-box rounded-t-md bg-black-1 px-6 pt-6 pb-3">
            <div className="mb-5 border-b border-white border-opacity-50 pb-5 text-3xl text-white drop-shadow-[1px_1px_honeydew]">
              NHÀ GÁI
            </div>

            <div className="flex justify-between">
              <div className="w-1/2">
                <div className="pb-3 text-lg text-white drop-shadow-[1px_1px_honeydew]">
                  THỜI GIAN
                </div>
                <div className="text-sm font-semibold leading-relaxed text-dark-red">
                  <p>10:30</p>
                  <p>THỨ BẢY 18 THÁNG 2 NĂM 2023</p>
                </div>
              </div>

              <div className="w-1/2">
                <div className="pb-3 text-lg text-white drop-shadow-[1px_1px_honeydew]">
                  ĐỊA ĐIỂM
                </div>
                <div>
                  <div className="text-sm font-semibold leading-relaxed text-dark-red">
                    <p>NHÀ HÀNG ASEAN</p>
                    <p>SỐ 9 TRUNG ĐÔ, KIM TÂN, THÀNH PHỐ LÀO CAI</p>
                  </div>
                  <p>Nhấn vào đây để tìm kiếm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-box rounded-b-md bg-black-1 px-6 pb-6 pt-3">
            <div className="mb-5 border-b border-white border-opacity-50 pb-5 text-3xl text-white drop-shadow-[1px_1px_honeydew]">
              NHÀ TRAI
            </div>

            <div className="flex justify-between leading-normal">
              <div className="w-1/2">
                <div className="pb-3 text-lg text-white drop-shadow-[1px_1px_honeydew]">
                  THỜI GIAN
                </div>
                <div className="text-sm font-semibold leading-relaxed text-dark-red">
                  <p>10:30</p>
                  <p>THỨ BẢY 18 THÁNG 2 NĂM 2023</p>
                </div>
              </div>

              <div className="w-1/2">
                <div className="pb-3 text-lg text-white drop-shadow-[1px_1px_honeydew]">
                  ĐỊA ĐIỂM
                </div>
                <div>
                  <div className="text-sm font-semibold leading-relaxed text-dark-red">
                    <p>ĐẠI HOÀNG SƠN OPERA WEDDING PLACE</p>
                    <p>45 HÙNG VƯƠNG, PHƯỜNG NGÔ QUYỀN, THÀNH PHỐ BẮC GIANG</p>
                  </div>
                  <p>Nhấn vào đây để tìm kiếm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-40" />
    </div>
  );
}
