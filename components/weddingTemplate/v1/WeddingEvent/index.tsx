import Image from "next/image";

export default function WeddingEvent() {
  return (
    <div className="relative h-[821px] w-full md:h-[724px] xl:h-[628px] 2xl:h-[821px]">
      <div className="flex h-full">
        <div className="relative h-full w-full lg:w-[55%]">
          <Image
            src="/assets/bg-time-event-left.png"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="relative hidden h-full lg:block lg:w-[45%]">
          <Image
            src="/assets/wedding_img/37.jpg"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      <div className="absolute top-0 z-10 flex h-full w-full flex-col items-center justify-center px-3 py-8 text-center lg:w-[55%]">
        <h2 className="animate-box mb-3 font-sacra text-5xl font-bold leading-normal text-white lg:text-6xl">
          Wedding Event
        </h2>

        <div className="w-full rounded-md">
          <div className="animate-box rounded-t-md bg-black-1 px-6 pt-6 pb-3">
            <div className="mb-5 border-b border-white border-opacity-50 pb-5 text-3xl text-white drop-shadow-[1px_1px_honeydew]">
              NHÀ GÁI
            </div>

            <div className="flex justify-between">
              <div className="w-1/2">
                <div className="pb-3 text-lg text-white drop-shadow-[1px_1px_honeydew]">
                  THỜI GIAN
                </div>
                <div className="text-sm font-semibold leading-relaxed text-dark-red">
                  <p>17:00</p>
                  <p>Thứ 5 ngày 21 tháng 9 năm 2023</p>
                </div>
              </div>

              <div className="w-1/2">
                <div className="pb-3 text-lg text-white drop-shadow-[1px_1px_honeydew]">
                  ĐỊA ĐIỂM
                </div>
                <div>
                  <div className="text-sm font-semibold leading-relaxed text-dark-red">
                    {/* <p>NHÀ HÀNG ASEAN</p> */}
                    <p className="uppercase">
                      số nhà 179, tổ 15, phường yên nghĩa, hà đông, hà nội
                    </p>
                  </div>
                  {/* <p>Nhấn vào đây để tìm kiếm</p> */}
                </div>
              </div>
            </div>
          </div>

          <div className="animate-box rounded-b-md bg-black-1 px-6 pb-6 pt-3">
            <div className="mb-5 border-b border-white border-opacity-50 pb-5 text-3xl text-white drop-shadow-[1px_1px_honeydew]">
              NHÀ TRAI
            </div>

            <div className="flex justify-between leading-normal">
              <div className="w-1/2">
                <div className="pb-3 text-lg text-white drop-shadow-[1px_1px_honeydew]">
                  THỜI GIAN
                </div>
                <div className="text-sm font-semibold leading-relaxed text-dark-red">
                  <p>10:00</p>
                  <p>Thứ 5 ngày 21 tháng 9 năm 2023</p>
                </div>
              </div>

              <div className="w-1/2">
                <div className="pb-3 text-lg text-white drop-shadow-[1px_1px_honeydew]">
                  ĐỊA ĐIỂM
                </div>
                <div>
                  <div className="text-sm font-semibold leading-relaxed text-dark-red">
                    {/* <p>ĐẠI HOÀNG SƠN OPERA WEDDING PLACE</p> */}
                    <p className="uppercase">
                      Số nhà 38, tổ 22, phường phú lương, hà đông, hà nội
                    </p>
                  </div>
                  {/* <p>Nhấn vào đây để tìm kiếm</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-40" />
    </div>
  );
}
