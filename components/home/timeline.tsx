import Image from "next/image";
import dayjs from "dayjs";

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
      id: 1,
      title: "In A Relationship",
      date: "2023/1/1",
      content:
        "It took a long time for us to confess our feelings to each other.",
      img: "/assets/cat1.jpeg",
    },
    {
      id: 2,
      title: "Tie The Knot",
      date: "2023/1/1",
      content:
        "And it took even longer to build, until we came to a big decision",
      img: "/assets/cat1.jpeg",
    },
    {
      id: 3,
      title: "10 Years Anniversary Celebration",
      date: "2023/1/1",
      content:
        "To celebrate the first decade and welcome the rest of our lives together.",
      img: "/assets/cat1.jpeg",
    },
    {
      id: 4,
      title: "Many Years Later",
      date: "2023/1/1",
      content: "And they live happily ever after",
      img: "/assets/cat1.jpeg",
    },
  ];
  return (
    <div className="container pt-32 pb-24">
      <div className="mb-24 text-center">
        <p className="mb-4 text-sm font-semibold leading-loose text-gray">
          WE LOVE EACH OTHER
        </p>
        <h2 className="mb-4 font-sacra text-6xl font-bold text-pink">
          Our Story
        </h2>
        <p className="mx-auto max-w-[750px] text-lg leading-normal text-gray">
          Once upon a time, Mai and Manh lived their own boring lives, they
          didn't know anything about each other
        </p>
      </div>

      <div className="timeline relative py-10">
        {timelineData.map((item, index) =>
          index % 2 === 0 ? (
            <div
              key={item.id}
              className="mb-7 flex items-center justify-center"
            >
              <div className="timeline-content-left relative w-full max-w-[456px] rounded-[4px] border border-gray-d4 p-6">
                <h3 className="mb-5  text-2xl">{item.title}</h3>
                <div className="mb-5 w-full max-w-[456px] text-left text-sm uppercase tracking-wider text-gray ">
                  {dayjs(item.date).format("MMM D, YYYY")}
                </div>
                <div className="text-base text-gray">{item.content}</div>
              </div>
              <Image
                src={item.img}
                alt={item.title}
                className="z-10 mx-8 rounded-full"
                width={160}
                height={160}
              />
              <div className="w-full max-w-[456px] " />
            </div>
          ) : (
            <div
              key={item.id}
              className="mb-7 flex items-center justify-center"
            >
              <div className="w-full max-w-[456px] " />
              <Image
                src={item.img}
                alt={item.title}
                className="z-10 mx-8 rounded-full"
                width={160}
                height={160}
              />
              <div className="timeline-content-right relative w-full max-w-[456px] rounded-[4px] border border-gray-d4 p-6">
                <h3 className="mb-5  text-2xl">{item.title}</h3>
                <div className="mb-5 w-full max-w-[456px] text-sm uppercase tracking-wider text-gray">
                  {dayjs(item.date).format("MMM D, YYYY")}
                </div>
                <div className="text-base text-gray">{item.content}</div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
