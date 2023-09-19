import Image from "next/image";

import { ForewordStyled } from "./styled";

export default function Foreword() {
  return (
    <ForewordStyled className="container flex flex-col items-center justify-center py-16 px-5 md:px-10">
      <div className="mb-20 w-full max-w-[750px]">
        <h2 className="animate-box mb-2 font-sacra text-[40px] font-bold leading-normal text-pink md:text-6xl">
          Dear all,
        </h2>
        <p className="animate-box mb-5 text-lg italic leading-loose text-gray">
          Trân trọng thân mời,
        </p>
        <p className="animate-box mb-5 text-lg leading-loose text-gray">
          Điền Nguyễn và Anh Thơ xin thân mời toàn thể anh chị em và các bạn tới
          dự bữa tiệc thân mật mừng lễ thành hôn của chúng mình
        </p>
        <p className="animate-box text-lg leading-loose text-gray">
          Đây cũng là dịp chúng mình gửi lời cảm ơn đến tất cả anh chị em và bạn
          bè đã đồng hành cùng chặng đường xây dựng hạnh phúc trong thời gian
          qua. ​Sự hiện diện của mọi người là niềm vui, niềm hạnh phúc đong đầy,
          niềm vinh hạnh của gia đình chúng mình!!
        </p>
      </div>

      <div className="relative w-full max-w-[1040px] lg:flex">
        <div className="animate-box md:flex lg:w-1/2">
          <div className="mb-4 pt-4 text-center md:mt-0 md:pr-6 md:text-right">
            <div className="mt-2 mb-4 font-sacra text-3xl text-pink">
              Dien Nguyen
            </div>
            <div className="leading-loose text-gray">
              It’s not that I can’t live without you, it’s just that I don’t
              even want to try.
            </div>
          </div>

          <Image
            src="/assets/wedding_img/husband.png"
            alt=""
            height={120}
            width={120}
            className="mx-auto rounded-full md:mx-0 md:h-[150px] md:w-[150px]"
          />
        </div>

        <i className="animate-box heart absolute top-[calc(50%-10px)] left-[calc(50%-24px)] z-10 h-12 w-12 animate-s-pulse rounded-full bg-white p-3 md:hidden lg:left-[calc(50%-30px)] lg:top-[calc(50%-30px)] lg:block lg:h-16 lg:w-16 lg:p-5" />

        <div className="animate-box md:flex lg:w-1/2">
          <Image
            src="/assets/wedding_img/wife.png"
            alt=""
            height={120}
            width={120}
            className="mx-auto rounded-full md:mx-0 md:h-[150px] md:w-[150px]"
          />

          <div className="mb-4 pt-4 text-center md:mt-0 md:pl-6 md:text-left">
            <div className="mt-2 mb-4 font-sacra text-3xl text-pink">
              Anh Tho
            </div>
            <div className="leading-loose text-gray">
              {"True love isn't found. It's built."}
            </div>
          </div>
        </div>
      </div>
    </ForewordStyled>
  );
}
