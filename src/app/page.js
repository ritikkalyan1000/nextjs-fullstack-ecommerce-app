import Footer from "@/component/Footer";
import Home_par2 from "@/component/Home_par2";
import Home_part1 from "@/component/Home_part1";
import SliderComponent from "@/component/SliderComponent";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Home_part1 />
      <Home_par2 />
      <SliderComponent />

    </>
  );
}
