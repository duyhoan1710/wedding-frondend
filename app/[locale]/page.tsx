import Address, {
  DEFAULT_DATA_ADDRESS,
} from "@/components/wedding/v1/components/Address";
import BankAccount, {
  DEFAULT_DATA_BANK_ACCOUNT,
} from "@/components/wedding/v1/components/BankAccount";
import Banner, {
  DEFAULT_DATA_BANNER,
} from "@/components/wedding/v1/components/Banner";
import Footer, {
  DEFAULT_DATA_FOOTER,
} from "@/components/wedding/v1/components/Footer";
import Foreword, {
  DEFAULT_DATA_FOREWORD,
} from "@/components/wedding/v1/components/Foreword";
import Images, {
  DEFAULT_DATA_IMAGES,
} from "@/components/wedding/v1/components/Images";
import Timeline, {
  DEFAULT_DATA_TIMELINE,
} from "@/components/wedding/v1/components/Timeline";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* <Nav /> */}
      <Banner props={DEFAULT_DATA_BANNER} />
      <Foreword props={DEFAULT_DATA_FOREWORD} />
      <Address props={DEFAULT_DATA_ADDRESS} />
      <Timeline props={DEFAULT_DATA_TIMELINE} />
      <Images props={DEFAULT_DATA_IMAGES} />
      <BankAccount props={DEFAULT_DATA_BANK_ACCOUNT} />
      {/* <AttendForm /> */}
      <Footer props={DEFAULT_DATA_FOOTER} />
    </div>
  );
}
