import Image from "next/image";

export default function BankAccount() {
  return (
    <div className="relative flex h-[954px] w-full justify-center md:h-[698px]">
      <Image
        src="/assets/img_bg.jpeg"
        alt=""
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-40" />

      <div className="absolute flex h-full w-full max-w-[1140px] flex-col items-center justify-center px-5 text-center">
        <div className="animate-box px-2 md:mb-10">
          <h2 className="font-sacra text-[40px] font-bold leading-normal text-white lg:mb-5 lg:text-6xl">
            Thông Tin Ngân Hàng
          </h2>
          <p className="text-lg text-gray md:text-xl">
            Dành cho các tín đồ hệ không dùng tiền mặt.
          </p>
        </div>

        <div className="flex w-full flex-col items-center md:flex-row md:justify-around">
          <div className="animate-box mt-8 flex flex-col items-center md:mt-0 md:text-right">
            <div className="mb-5 font-sacra text-3xl text-pink">Le Anh Tho</div>
            <div className="mb-5 text-xl font-semibold text-gray-c">
              19038809919011
            </div>
            <Image
              src="/assets/wedding_img/wife_qr.png"
              alt=""
              width={200}
              height={200}
              className="h-[200px] rounded"
            />
          </div>

          <div className="animate-box mt-8 flex flex-col items-center md:mt-0 md:text-left">
            <div className="mb-5 font-sacra text-3xl text-pink">
              Nguyen Kim An Dien
            </div>
            <div className="mb-5 text-xl font-semibold text-gray-c">
              9035643703333
            </div>
            <Image
              src="/assets/wedding_img/husband_qr.png"
              alt=""
              width={200}
              height={200}
              className="h-[200px] rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
