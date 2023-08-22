import BankAccount from "@/components/home/v1/BankAccount";
import Banner from "@/components/home/v1/Banner";
import Foreword from "@/components/home/v1/Foreword";
import Memory from "@/components/home/v1/Memory";
import Nav from "@/components/home/v1/Nav";
import Timeline from "@/components/home/v1/Timeline";
import WeddingEvent from "@/components/home/v1/WeddingEvent";
import Footer from "@/components/home/v1/Footer";

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
