import Image from "next/image";

export default function BankAccount() {
  return (
    <div className="relative flex h-[698px] w-full justify-center">
      <Image
        src="/assets/img_bg.jpeg"
        alt=""
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-40" />

      <div className="absolute flex h-full w-full max-w-[1140px] flex-col items-center justify-center">
        <h2 className="font-sacra text-6xl leading-normal text-white">
          Thông Tin Ngân Hàng
        </h2>
        <p className="mb-10 text-xl text-gray">
          Dành cho các tín đồ hệ không dùng tiền mặt.
        </p>

        <div className="flex w-full justify-around">
          <div className="flex flex-col items-end">
            <div className="mb-5 font-sacra text-3xl text-pink">
              Nguyen Van Manh
            </div>
            <div className="mb-5 text-xl font-semibold text-gray-c">
              19030658278018
            </div>
            <Image
              src="/assets/QR.png"
              alt=""
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
              className="rounded"
            />
          </div>

          <div className="text-left">
            <div className="mb-5 font-sacra text-3xl text-pink">
              Tran Ngoc Chi Mai
            </div>
            <div className="mb-5 text-xl font-semibold text-gray-c">
              19030658278018
            </div>
            <Image
              src="/assets/QR.png"
              alt=""
              width={200}
              height={200}
              style={{ objectFit: "cover" }}
              className="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
