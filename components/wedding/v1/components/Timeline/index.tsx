"use client";

import Image from "next/image";

import { TimelineStyled } from "./styled";
import { useContext } from "react";
import { WidthContext } from "@/app/[locale]/(dashboard)/templates/[slug]/PreviewTemplateProvider";
import { EWindowSize } from "@/lib/enum";
import classNames from "classnames";
import { formatDateString, getImage } from "@/lib/utils";

export interface ITImelineItem {
  title: string;
  date: string;
  content: string;
  image: string;
}

export type ITimeline = { timelines: ITImelineItem[] };

export const DEFAULT_DATA_TIMELINE = {
  timelines: [
    {
      title: "",
      date: "",
      content: "",
      image: "",
    },
  ],
};

export default function Timeline({ props }: { props: ITimeline }) {
  const { width } = useContext(WidthContext);

  console.log(props);

  return (
    <TimelineStyled
      width={width}
      className={classNames(
        "container px-5 pt-32 pb-24",
        width >= EWindowSize.LG && "lg:px-10",
      )}
    >
      <div className="animate-box mb-24 text-center">
        <p className="mb-4 text-sm font-semibold leading-loose text-gray">
          WE LOVE EACH OTHER
        </p>
        <h2
          className={classNames(
            "mb-4 font-sacra text-5xl font-bold text-pink",
            width >= EWindowSize.MD && "md:text-6xl",
          )}
        >
          Our Story
        </h2>
        <p
          className={classNames(
            "mx-auto max-w-[750px] text-base leading-normal text-gray",
            width >= EWindowSize.LG && "lg:text-lg",
          )}
        >
          "Once upon a time, Mai and Manh lived their own boring lives, they
          didn't know anything about each other"
        </p>
      </div>

      <div className="timeline relative py-5">
        {props.timelines.map((item, index) => (
          <div
            key={index}
            className={classNames(
              "animate-box timeline-wrap mb-7 flex items-start justify-between",
              width >= EWindowSize.MD &&
                "md:mb-7 md:items-start md:justify-center ",
              width >= EWindowSize.MD &&
                index % 2 === 1 &&
                "md:flex-row-reverse ",
              width >= EWindowSize.LG && "lg:mb-0  ",
            )}
          >
            <div
              className={classNames(
                "timeline-content relative min-h-[120px] w-[60%] max-w-[456px] rounded-[4px] border border-gray-d4 p-3",
                width >= EWindowSize.MD && "md:w-[70%] md:p-6",
                width >= EWindowSize.LG && "lg:w-[90%]",
              )}
            >
              <h3 className="mb-2 text-xl md:text-2xl  lg:mb-5">
                {item.title}
              </h3>
              <div
                className={classNames(
                  "mb-3 w-full max-w-[456px] text-left text-sm uppercase tracking-wider text-gray  ",
                  width >= EWindowSize.LG && "lg:mb-5",
                )}
              >
                {formatDateString(item.date, "D MMMM, YYYY")}
              </div>
              <div className="text-base text-gray">{item.content}</div>
            </div>

            <div>
              <Image
                src={getImage(item.image)}
                alt={item.title}
                className={classNames(
                  "z-10 h-[80px] w-[80px] rounded-full border border-color-border object-cover",
                  width >= EWindowSize.SM &&
                    "sm:mx-8 sm:mt-0 sm:h-[120px] sm:w-[120px] sm:min-w-[120px]",
                )}
                width={80}
                height={80}
              />
              {index !== props.timelines.length - 1 && (
                <div
                  className={classNames(
                    " mx-auto hidden h-[80px] w-[1px] bg-color-border",
                    width >= EWindowSize.MD && "md:hidden",
                    width >= EWindowSize.LG && "lg:block",
                  )}
                />
              )}
            </div>

            <div
              className={classNames(
                "absolute  ",
                width >= EWindowSize.LG &&
                  "lg:static lg:w-full lg:max-w-[456px]",
              )}
            />
          </div>
        ))}
      </div>
    </TimelineStyled>
  );
}
