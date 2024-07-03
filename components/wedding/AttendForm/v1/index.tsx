"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import Image from "next/image";
import { useState } from "react";
import * as attendFormFetcher from "@/lib/fetchers/formExcel";
import { twMerge } from "tailwind-merge";
import { LoadingSpinner } from "@/components/icons";

const quoteLove = [
  "Tình yêu là một bức tranh được thêu bởi thiên nhiên và được trang trí bằng những sợi tưởng tượng.",
  "Sự hạnh phúc tối cao trong cuộc sống là niềm tin rằng chúng ta được yêu thương; yêu thương vì chính bản chất chúng ta, hoặc chính xác hơn, yêu thương bất chấp những khuyết điểm của chúng ta.",
  "Yêu và được yêu là như tắm nắng từ cả hai phía.",
  "Tình yêu không phải là điều bạn tìm thấy. Tình yêu là điều tìm thấy bạn.",
  "Cuối cùng, tình cảm bạn nhận được tương đương với tình cảm bạn trao đi.",
  "Tình yêu là khi hạnh phúc của người khác quan trọng hơn hạnh phúc của bạn.",
  "Tình yêu không phải là điều bạn tìm thấy. Tình yêu là điều tìm thấy bạn, và khi nó thấy bạn, dù bạn đã sẵn sàng hay chưa, nó sẽ là điều tốt nhất từng xảy đến bạn.",
  "Tình yêu là cái cầu nối nối hai trái tim, tạo nên một liên kết không thể xâm phạm.",
  "Hạnh phúc cao nhất của cuộc đời là niềm tin rằng chúng ta được yêu; yêu vì chính bản chất chúng ta, hoặc đúng hơn, yêu bất chấp khuyết điểm của chúng ta.",
];

export default function AttendForm() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("1");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = async () => {
    setIsLoading(true);
    await attendFormFetcher.submitAttendForm({
      name,
      phone,
      status: status === "1" ? "Tham Dự" : "Không Tham Dự",
    });
    setIsLoading(false);
    setName("");
    setPhone("");
    setStatus("1");
  };

  return (
    <div className="w-full bg-gray-4 pt-32 pb-24 lg:pb-48">
      <div className="ld:flex-row container mx-auto flex flex-col px-5 lg:flex-row lg:justify-around">
        <div className="relative mb-28 hidden h-full items-center md:block lg:mb-0">
          <Swiper
            effect="cards"
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            onSlideChange={({ activeIndex }) => {
              setSlideIndex(activeIndex);
            }}
          >
            <SwiperSlide>
              <Image
                src="/assets/gallery-9.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />

              <div>
                Tình yêu là một bức tranh được thêu bởi thiên nhiên và được
                trang trí bằng những sợi tưởng tượng.
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/gallery-9.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/gallery-9.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/gallery-9.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/gallery-9.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/gallery-9.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/gallery-9.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/gallery-9.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/assets/gallery-9.jpg"
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </SwiperSlide>
          </Swiper>

          <div className="absolute right-[calc(50%-300px)] -bottom-[130px] h-[100px] w-[600px] text-center italic">
            &quot;{quoteLove[slideIndex]}&quot;
          </div>
        </div>

        <div className="mx-auto w-full max-w-[500px] md:pt-20 lg:mx-0">
          <h2 className="animate-box mb-14 text-center font-sacra text-3xl font-bold leading-snug text-pink md:text-5xl">
            Chung Vui Cùng Gia Đình <br /> Chúng Mình Nhé
          </h2>

          <div className="animate-box mb-6 text-left ">
            <label className="mb-2 block font-medium text-gray">
              Tên bạn là (*)
            </label>
            <input
              type="text"
              value={name}
              id="first_name"
              className="block w-full rounded-md border-black-border pl-2.5 text-gray-900 "
              placeholder="Nguyễn văn A"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="animate-box mb-6 text-left ">
            <label className="mb-2 block font-medium text-gray">
              Số điện thoại liên lạc
            </label>
            <input
              type="text"
              id="first_name"
              value={phone}
              className="block w-full rounded-md border-black-border pl-2.5 text-gray-900 "
              placeholder="09xxxxxxxx"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="animate-box mb-6 text-left ">
            <div className="mb-2 flex items-center">
              <input
                onChange={() => setStatus("1")}
                checked={status === "1"}
                id="join"
                type="radio"
                name="default-radio"
                className="bg-gray-100 border-gray-300 dark:bg-gray-700 h-4 w-4 text-pink focus:ring-2 focus:ring-pink "
              />
              <label
                htmlFor="join"
                className="dark:text-gray-300 ml-4 cursor-pointer text-sm font-medium text-gray-900"
              >
                Sẽ Tham Dự
              </label>
            </div>
            <div className="flex items-center">
              <input
                onChange={() => setStatus("2")}
                checked={status === "2"}
                id="cancel"
                type="radio"
                name="default-radio"
                className="bg-gray-100 border-gray-300 dark:bg-gray-700 h-4 w-4 text-pink focus:ring-2 focus:ring-pink "
              />
              <label
                htmlFor="cancel"
                className="dark:text-gray-300 ml-4 cursor-pointer text-sm font-medium text-gray-900"
              >
                Không Tham Dự Được
              </label>
            </div>
          </div>

          <button
            onClick={onSubmitForm}
            className={twMerge(
              "animate-box flex h-10 w-28 items-center justify-center rounded bg-pink py-2 px-8 text-white duration-200 transition-all hover:opacity-70",
            )}
          >
            {isLoading ? <LoadingSpinner /> : "Gửi"}
          </button>
        </div>
      </div>
    </div>
  );
}
