import Image from "next/image";

export default function Foreword() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="mb-20 w-full max-w-[750px]">
        <h2 className="mb-2 font-sacra text-6xl font-bold leading-normal text-pink">
          Dear all,
        </h2>
        <p className="mb-5 text-lg italic leading-loose text-gray">
          Trân trọng thân mời,
        </p>
        <p className="mb-5 text-lg leading-loose text-gray">
          Mạnh Nguyễn và Mai Trần xin thân mời toàn thể anh chị em và các bạn
          tới dự bữa tiệc thân mật mừng lễ thành hôn của chúng mình
        </p>
        <p className="mb-5 text-lg leading-loose text-gray">
          Đây cũng là dịp chúng mình gửi lời cảm ơn đến tất cả anh chị em và bạn
          bè đã đồng hành cùng chặng đường xây dựng hạnh phúc trong thời gian
          qua. ​Sự hiện diện của mọi người là niềm vui, niềm hạnh phúc đong đầy,
          niềm vinh hạnh của gia đình chúng mình!!
        </p>
      </div>

      <div className="relative flex w-full max-w-[1040px]">
        <div className="flex w-1/2 px-2">
          <div className="pt-4 pr-6 text-right">
            <div className="pb-4 font-sacra text-3xl text-pink">
              Manh Nguyen
            </div>
            <div className="leading-loose text-gray">
              It’s not that I can’t live without you, it’s just that I don’t
              even want to try.
            </div>
          </div>

          <Image
            src="/assets/husband.jpeg"
            alt=""
            height={150}
            width={150}
            className="rounded-full"
          />
        </div>

        <i className="heart absolute top-[calc(50%-30px)] left-[calc(50%-30px)] h-16 w-16 animate-s-pulse rounded-full bg-white p-5" />

        <div className="flex w-1/2 px-2">
          <Image
            src="/assets/wife.jpeg"
            alt=""
            height={150}
            width={150}
            className="rounded-full"
          />

          <div className="pt-4 pl-6 text-left">
            <div className="pb-4 font-sacra text-3xl text-pink">Mai Tran</div>
            <div className="leading-loose text-gray">
              True love isn't found. It's built.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
