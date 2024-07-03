// import AttendForm from "@/components/weddingTemplate/v1/AttendForm";

import BankAccount from "../../components/wedding/BankAccount/v1";
import Banner from "../../components/wedding/Banner/v1";
import Footer from "../../components/wedding/Footer/v1";
import Foreword from "../../components/wedding/Foreword/v1";
import Memory from "../../components/wedding/Memory/v1";
import Nav from "../../components/wedding/Nav/v1";
import Timeline from "../../components/wedding/Timeline/v1";
import WeddingEvent from "../../components/wedding/WeddingEvent/v1";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Nav />
      <Banner />
      <Foreword />
      <WeddingEvent />
      <Timeline />
      <Memory />
      <BankAccount />
      {/* <AttendForm /> */}
      <Footer />
    </div>
  );
}
