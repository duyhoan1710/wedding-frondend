import BankAccount from "@/components/weddingTemplate/v1/BankAccount";
import Banner from "@/components/weddingTemplate/v1/Banner";
import Foreword from "@/components/weddingTemplate/v1/Foreword";
import Memory from "@/components/weddingTemplate/v1/Memory";
import Nav from "@/components/weddingTemplate/v1/Nav";
import Timeline from "@/components/weddingTemplate/v1/Timeline";
import WeddingEvent from "@/components/weddingTemplate/v1/WeddingEvent";
import Footer from "@/components/weddingTemplate/v1/Footer";
import Head from "next/head";
// import AttendForm from "@/components/weddingTemplate/v1/AttendForm";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <head>
        <meta
          property="og:image"
          content="https://anhtho-diennguyen.com/assets/wedding_img/37.jpg"
        />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:width" content="800" />
      </head>

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
