import Link from "next/link";
import Navbar from "./components/layout/navbar"
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col items-center w-[350px] text-center lg:w-[761px] lg:h-[343px]">
          <div className="text-[32px] mb-4 lg:text-[64px] lg:mb-[3px]">
            <h1><b>Hungry?</b> Let Us </h1>
            <h1>Bring the Food to You!</h1>
          </div>
          <h2 className="text-[16px] mb-6 lg:mb-[39px]">
            Simplify Your Meals With <b>Chirunga Munchies</b> Food Delivery System
          </h2>
          <Link href={"./restaurants/"}>
            <button className="w-[109.53px] h-[45px] bg-[#FF6C44] text-[#ffffff] font-semibold rounded-[5px] lg:w-[129px] lg:h-[53px] lg:text-[18.28px] lg:hover:bg-[#ED5A32]">
              Order Now
            </button>
          </Link>
        </div>
        <Image
          src="/hero-image.png"
          width={246}
          height={246}
          alt="a top shot of food in a plate"
          className="lg:w-[391px] lg:h-[391px]"
        />
      </div>
    </>
  );
}