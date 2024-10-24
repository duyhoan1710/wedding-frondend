import { getImage } from "@/lib/utils";
import Image from "next/image";

export interface IBankAccountV1 {
  background: string;
  husbandBankAccountName: string;
  husbandBankAccountNumber: string;
  husbandBankAccountImage: string;
  wifeBankAccountName: string;
  wifeBankAccountNumber: string;
  wifeBankAccountImage: string;
}

export const DEFAULT_DATA_BANK_ACCOUNT_V1 = {
  background: "",
  husbandBankAccountName: "",
  husbandBankAccountNumber: "",
  husbandBankAccountImage: "",
  wifeBankAccountName: "",
  wifeBankAccountNumber: "",
  wifeBankAccountImage: "",
};

export default function BankAccountV1(props: IBankAccountV1) {
  return (
    <div className="relative flex h-[954px] w-full justify-center md:h-[698px]">
      <Image
        src={getImage(props.background)}
        alt=""
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-40" />

      <div className="absolute flex h-full w-full max-w-[1140px] flex-col items-center justify-center px-5 text-center">
        <div className="animate-box px-2 md:mb-10">
          <h2 className="font-sacra text-[40px] font-bold leading-normal text-white lg:mb-5 lg:text-6xl">
            Thông Tin Ngân Hàng
          </h2>
          <p className="text-lg text-gray md:text-xl">
            Dành cho các tín đồ hệ không dùng tiền mặt.
          </p>
        </div>

        <div className="flex w-full flex-col items-center md:flex-row md:justify-around">
          <div className="animate-box mt-8 flex flex-col items-center md:mt-0 md:text-right">
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

          <div className="animate-box mt-8 flex flex-col items-center md:mt-0 md:text-left">
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
