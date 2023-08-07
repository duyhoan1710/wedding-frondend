import BankAccount from "@/components/home/bank-account";
import Banner from "@/components/home/banner";
import Footer from "@/components/home/footer";
import Foreword from "@/components/home/foreword";
import Memories from "@/components/home/memory";
import Timeline from "@/components/home/timeline";
import WeddingEvent from "@/components/home/wedding-event";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Banner />
      <Foreword />
      <WeddingEvent />
      <Timeline />
      <Memories />
      <BankAccount />
      <Footer />
    </div>
  );
}
