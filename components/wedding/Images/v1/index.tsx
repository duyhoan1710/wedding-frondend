import { WidthContext } from "@/app/[locale]/(dashboard)/templates/[slug]/PreviewTemplateProvider";
import { EWindowSize } from "@/lib/enum";
import { getImage } from "@/lib/utils";
import classNames from "classnames";
import Image from "next/image";
import { useContext } from "react";

export interface IImagesV1 {
  images: string[];
}

export const DEFAULT_DATA_IMAGES_V1 = {
  images: [""],
};

export default function ImagesV1(props: IImagesV1) {
  const { width } = useContext(WidthContext);
  return (
    <div className="w-full bg-gray-4 pt-32 pb-24">
      <div className="container mx-auto">
        <div className="animate-box mb-24 text-center">
          <p className="mb-4 text-sm font-semibold leading-loose text-gray">
            OUR MEMORIES
          </p>
          <h2 className={classNames(
              "mb-4 font-sacra text-5xl font-bold text-pink",
              width >= EWindowSize.MD && "md:text-6xl",
            )}
          >
            Wedding Gallery
          </h2>
        </div>

        <div className={classNames(
            "mx-auto flex w-full max-w-[1140px] flex-wrap px-5",
            width >= EWindowSize.XL && "xl:w-3/4",
          )}
        >
          {props.images.map((image, index) => (
            <div
              className={classNames(
                "animate-box h-[416px] w-full p-1",
                width >= EWindowSize.MD && "md:w-1/3",
                width >= EWindowSize.LG && "lg:p-[5px]",
              )}
              key={index + image}
            >
              <div className="relative h-full w-full">
                <Image
                  src={getImage(image)}
                  alt=""
                  fill
                  className="rounded-lg"
                  style={{ objectFit: "cover" }}
                />
                <div className="memory-item absolute top-0 bottom-0 left-0 right-0 rounded-lg bg-black opacity-20 duration-300 transition hover:opacity-50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
