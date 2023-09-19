import Image from "next/image";
import dayjs from "dayjs";

import { TimelineStyled } from "./styled";

export default function Timeline() {
  const timelineData = [
    {
      id: 1,
      title: "First Met",
      date: "2023/1/1",
      content:
        "We didn't fall in love at first sight, or even a lot of looks after.",
      img: "/assets/cat1.jpeg",
    },
    {
      id: 2,
      title: "In A Relationship",
      date: "2023/1/1",
      content:
        "It took a long time for us to confess our feelings to each other.",
      img: "/assets/cat2.jpeg",
    },
    {
      id: 3,
      title: "Tie The Knot",
      date: "2023/1/1",
      content:
        "And it took even longer to build, until we came to a big decision",
      img: "/assets/cat3.jpeg",
    },
    {
      id: 4,
      title: "Many Years Anniversary Celebration",
      date: "2023/1/1",
      content:
        "To celebrate the first decade and welcome the rest of our lives together.",
      img: "/assets/cat4.jpeg",
    },
    {
      id: 5,
      title: "Many Years Later",
      date: "2023/10/21",
      content: "And they live happily ever after",
      img: "/assets/cat5.jpeg",
    },
  ];
  return (
    <TimelineStyled className="container px-5 pt-32 pb-24 lg:px-10">
      <div className="animate-box mb-24 text-center">
        <p className="mb-4 text-sm font-semibold leading-loose text-gray">
          WE LOVE EACH OTHER
        </p>
        <h2 className="mb-4 font-sacra text-5xl font-bold text-pink md:text-6xl">
          Our Story
        </h2>
        <p className="mx-auto max-w-[750px] text-base leading-normal text-gray lg:text-lg">
          {
            "Once upon a time, Dien and Tho lived their own boring lives, they didn't know anything about each other"
          }
        </p>
      </div>

      <div className="timeline relative py-5">
        {timelineData.map((item, index) => (
          <div
            key={item.id}
            className={`animate-box timeline-wrap mb-7 flex items-start justify-around md:items-center md:justify-center ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="timeline-content relative w-2/3 max-w-[456px] rounded-[4px] border border-gray-d4 p-3 md:p-6 lg:w-full">
              <h3 className="mb-2 text-xl md:text-2xl  lg:mb-5">
                {item.title}
              </h3>
              <div className="mb-3 w-full max-w-[456px] text-left text-sm uppercase tracking-wider text-gray lg:mb-5 ">
                {dayjs(item.date).format("MMM D, YYYY")}
              </div>
              <div className="text-base text-gray">{item.content}</div>
            </div>

            <Image
              src={item.img}
              alt={item.title}
              className="z-10 mt-3 h-[80px] w-[80px] rounded-full md:mx-8 md:mt-0 md:h-[160px] md:w-[160px]"
              width={160}
              height={160}
            />

            <div className="absolute lg:static lg:w-full lg:max-w-[456px] " />
          </div>
        ))}
      </div>
    </TimelineStyled>
  );
}
