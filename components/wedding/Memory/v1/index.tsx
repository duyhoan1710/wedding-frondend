import Image from "next/image";

export default function Memory() {
  return (
    <div className="w-full bg-gray-4 pt-32 pb-24">
      <div className="container mx-auto">
        <div className="animate-box mb-24 text-center">
          <p className="mb-4 text-sm font-semibold leading-loose text-gray">
            OUR MEMORIES
          </p>
          <h2 className="mb-4 font-sacra text-5xl font-bold text-pink md:text-6xl">
            Wedding Gallery
          </h2>
        </div>

        <div className="mx-auto flex w-full max-w-[1140px] flex-wrap px-5 xl:w-3/4">
          <div className="animate-box h-[416px] w-full p-1 md:w-1/3 lg:p-[5px]">
            <div className="relative h-full w-full">
              <Image
                src="/assets/wedding_img/36.jpg"
                alt=""
                fill
                className="rounded-lg"
                style={{ objectFit: "cover" }}
              />
              <div className="memory-item absolute top-0 bottom-0 left-0 right-0 rounded-lg bg-black opacity-20 duration-300 transition hover:opacity-50" />
            </div>
          </div>

          <div className="animate-box h-[416px] w-full p-1 md:w-1/3 lg:p-[5px]">
            <div className="relative h-full w-full">
              <Image
                src="/assets/wedding_img/25.jpg"
                alt=""
                fill
                className="rounded-lg"
                style={{ objectFit: "cover" }}
              />
              <div className="memory-item absolute top-0 bottom-0 left-0 right-0 rounded-lg bg-black opacity-20 duration-300 transition hover:opacity-50" />
            </div>
          </div>

          <div className="animate-box h-[416px] w-full p-1 md:w-1/3 lg:p-[5px]">
            <div className="relative h-full w-full">
              <Image
                src="/assets/wedding_img/29.jpg"
                alt=""
                fill
                className="rounded-lg"
                style={{ objectFit: "cover" }}
              />
              <div className="memory-item absolute top-0 bottom-0 left-0 right-0 rounded-lg bg-black opacity-20 duration-300 transition hover:opacity-50" />
            </div>
          </div>

          <div className="animate-box h-[416px] w-full p-1 md:w-1/3 lg:p-[5px]">
            <div className="relative h-full w-full">
              <Image
                src="/assets/wedding_img/31.jpg"
                alt=""
                fill
                className="rounded-lg"
                style={{ objectFit: "cover" }}
              />
              <div className="memory-item absolute top-0 bottom-0 left-0 right-0 rounded-lg bg-black opacity-20 duration-300 transition hover:opacity-50" />
            </div>
          </div>

          <div className="animate-box h-[416px] w-full p-1 md:w-1/3 lg:p-[5px]">
            <div className="relative h-full w-full">
              <Image
                src="/assets/wedding_img/34.jpg"
                alt=""
                fill
                className="rounded-lg"
                style={{ objectFit: "cover" }}
              />
              <div className="memory-item absolute top-0 bottom-0 left-0 right-0 rounded-lg bg-black opacity-20 duration-300 transition hover:opacity-50" />
            </div>
          </div>

          <div className="animate-box h-[416px] w-full p-1 md:w-1/3 lg:p-[5px]">
            <div className="relative h-full w-full">
              <Image
                src="/assets/wedding_img/35.jpg"
                alt=""
                fill
                className="rounded-lg"
                style={{ objectFit: "cover" }}
              />
              <div className="memory-item absolute top-0 bottom-0 left-0 right-0 rounded-lg bg-black opacity-20 duration-300 transition hover:opacity-50" />
            </div>
          </div>

          <div className="animate-box h-[416px] w-full p-1 md:w-1/3 lg:p-[5px]">
            <div className="relative h-full w-full">
              <Image
                src="/assets/wedding_img/40.jpg"
                alt=""
                fill
                className="rounded-lg"
                style={{ objectFit: "cover" }}
              />
              <div className="memory-item absolute top-0 bottom-0 left-0 right-0 rounded-lg bg-black opacity-20 duration-300 transition hover:opacity-50" />
            </div>
          </div>

          <div className="animate-box h-[416px] w-full p-1 md:w-1/3 lg:p-[5px]">
            <div className="relative h-full w-full">
              <Image
                src="/assets/wedding_img/45.jpg"
                alt=""
                fill
                className="rounded-lg"
                style={{ objectFit: "cover" }}
              />
              <div className="memory-item absolute top-0 bottom-0 left-0 right-0 rounded-lg bg-black opacity-20 duration-300 transition hover:opacity-50" />
            </div>
          </div>

          <div className="animate-box h-[416px] w-full p-1 md:w-1/3 lg:p-[5px]">
            <div className="relative h-full w-full">
              <Image
                src="/assets/wedding_img/HAI_0514.jpg"
                alt=""
                fill
                className="rounded-lg"
                style={{ objectFit: "cover" }}
              />
              <div className="memory-item absolute top-0 bottom-0 left-0 right-0 rounded-lg bg-black opacity-20 duration-300 transition hover:opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
