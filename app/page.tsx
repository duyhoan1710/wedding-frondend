import Banner from "@/components/home/banner";
import Foreword from "@/components/home/foreword";
import WeddingEvent from "@/components/home/wedding-event";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <Banner />
      <Foreword />
      <WeddingEvent />
    </>
  );
}
