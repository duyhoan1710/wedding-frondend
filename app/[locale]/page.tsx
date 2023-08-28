import BankAccount from "@/components/weddingTemplate/v1/BankAccount";
import Banner from "@/components/weddingTemplate/v1/Banner";
import Foreword from "@/components/weddingTemplate/v1/Foreword";
import Memory from "@/components/weddingTemplate/v1/Memory";
import Nav from "@/components/weddingTemplate/v1/Nav";
import Timeline from "@/components/weddingTemplate/v1/Timeline";
import WeddingEvent from "@/components/weddingTemplate/v1/WeddingEvent";
import Footer from "@/components/weddingTemplate/v1/Footer";

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
      <Footer />
    </div>
  );
}
