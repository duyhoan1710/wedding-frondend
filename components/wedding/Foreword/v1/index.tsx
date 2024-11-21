import Image from "next/image";

import { ForewordStyled } from "./styled";
import { getImage } from "@/lib/utils";
import { WidthContext } from "@/app/[locale]/(dashboard)/templates/[slug]/PreviewTemplateProvider";
import { useContext } from "react";
import { EWindowSize } from "@/lib/enum";
import classNames from "classnames";

export interface IForeWordV1 {
  husbandName: string;
  wifeName: string;
  husbandImage: string;
  wifeImage: string;
}

export const DEFAULT_DATA_FOREWORD_V1 = {
  husbandName: "",
  wifeName: "",
  husbandImage: "",
  wifeImage: "",
};

export default function ForewordV1(props: IForeWordV1) {
  const { width } = useContext(WidthContext);

  return (
    <ForewordStyled
      className={classNames(
        "container flex flex-col items-center justify-center py-16 px-5",
        width >= EWindowSize.MD && "md:px-10",
      )}
    >
      <div className="mb-20 w-full max-w-[750px]">
        <h2
          className={classNames(
            "animate-box mb-2 font-sacra text-[40px] font-bold leading-normal text-pink",
            width >= EWindowSize.MD && "md:text-6xl",
          )}
        >
          Dear all,
        </h2>
        <p className="animate-box mb-5 text-lg italic leading-loose text-gray">
          Trân trọng thân mời,
        </p>
        <p className="animate-box mb-5 text-lg leading-loose text-gray">
          {props.husbandName} và {props.wifeName} xin thân mời toàn thể anh chị
          em và các bạn tới dự bữa tiệc thân mật mừng lễ thành hôn của chúng
          mình
        </p>
        <p className="animate-box text-lg leading-loose text-gray">
          Đây cũng là dịp chúng mình gửi lời cảm ơn đến tất cả anh chị em và bạn
          bè đã đồng hành cùng chặng đường xây dựng hạnh phúc trong thời gian
          qua. ​Sự hiện diện của mọi người là niềm vui, niềm hạnh phúc đong đầy,
          niềm vinh hạnh của gia đình chúng mình!!
        </p>
      </div>

      <div
        className={classNames(
          "relative w-full max-w-[1040px]",
          width >= EWindowSize.LG && "lg:flex",
        )}
      >
        <div
          className={classNames(
            "animate-box",
            width >= EWindowSize.MD && "md:flex ",
            width >= EWindowSize.LG && "lg:w-1/2",
          )}
        >
          <div
            className={classNames(
              "mb-4 pt-4 text-center",
              width >= EWindowSize.MD && "md:mt-0 md:pr-6 md:text-right",
            )}
          >
            <div className="mt-2 mb-4 font-sacra text-3xl text-pink">
              {props.husbandName}
            </div>
            <div className="leading-loose text-gray">
              It’s not that I can’t live without you, it’s just that I don’t
              even want to try.
            </div>
          </div>

          <Image
            src={getImage(props.husbandImage)}
            alt=""
            height={120}
            width={120}
            className={classNames(
              "mx-auto h-[120px] w-[120px] rounded-full border border-color-border object-cover",
              width >= EWindowSize.MD &&
                "md:mx-0 md:h-[150px] md:w-[150px] md:min-w-[150px]",
            )}
          />
        </div>

        <i
          className={classNames(
            "animate-box heart absolute top-[50%] left-[calc(50%-24px)] z-10 h-12 w-12 animate-s-pulse rounded-full border border-color-border bg-white p-3",
            width >= EWindowSize.MD && "md:top-[calc(50%-10px)] md:hidden",
            width >= EWindowSize.LG &&
              "lg:left-[calc(50%-30px)] lg:top-[calc(50%-30px)] lg:block lg:h-16 lg:w-16 lg:p-5",
          )}
        />

        <div
          className={classNames(
            "animate-box",
            width >= EWindowSize.MD && "md:flex",
            width >= EWindowSize.LG && "lg:w-1/2",
          )}
        >
          <Image
            src={getImage(props.wifeImage)}
            alt=""
            height={120}
            width={120}
            className={classNames(
              "mx-auto h-[120px] w-[120px] rounded-full border border-color-border object-cover",
              width >= EWindowSize.MD &&
                "md:mx-0 md:h-[150px] md:w-[150px] md:min-w-[150px]",
            )}
          />

          <div
            className={classNames(
              "mb-4 pt-4 text-center",
              width >= EWindowSize.MD && "md:mt-0 md:pl-6 md:text-left",
            )}
          >
            <div className="mt-2 mb-4 font-sacra text-3xl text-pink">
              {props.wifeName}
            </div>
            <div className="leading-loose text-gray">
              True love isn't found. It's built.
            </div>
          </div>
        </div>
      </div>
    </ForewordStyled>
  );
}
