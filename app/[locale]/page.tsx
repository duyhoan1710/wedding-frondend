// import AttendForm from "@/components/weddingTemplate/v1/AttendForm";

import { DEFAULT_DATA_BANK_ACCOUNT_V1 } from "../../components/wedding/BankAccount/v1";
import { DEFAULT_DATA_BANNER_V1 } from "../../components/wedding/Banner/v1";
import { DEFAULT_DATA_FOREWORD_V1 } from "../../components/wedding/Foreword/v1";
import { DEFAULT_DATA_IMAGES_V1 } from "../../components/wedding/Images/v1";
import { DEFAULT_DATA_TIMELINE_V1 } from "../../components/wedding/Timeline/v1";
import { DEFAULT_DATA_ADDRESS_V1 } from "../../components/wedding/Address/v1";
import BannerV1 from "../../components/wedding/Banner/v1";
import ForewordV1 from "../../components/wedding/Foreword/v1";
import AddressV1 from "../../components/wedding/Address/v1";
import TimelineV1 from "../../components/wedding/Timeline/v1";
import ImagesV1 from "../../components/wedding/Images/v1";
import BankAccountV1 from "../../components/wedding/BankAccount/v1";
import FooterV1 from "../../components/wedding/Footer/v1";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* <Nav /> */}
      <BannerV1 {...DEFAULT_DATA_BANNER_V1} />
      <ForewordV1 {...DEFAULT_DATA_FOREWORD_V1} />
      <AddressV1 {...DEFAULT_DATA_ADDRESS_V1} />
      <TimelineV1 {...DEFAULT_DATA_TIMELINE_V1} />
      <ImagesV1 {...DEFAULT_DATA_IMAGES_V1} />
      <BankAccountV1 {...DEFAULT_DATA_BANK_ACCOUNT_V1} />
      {/* <AttendForm /> */}
      <FooterV1 />
    </div>
  );
}
