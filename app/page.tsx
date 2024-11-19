import Navbar from "./components/layout/navbar"
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex flex-col items-center w-[350px] text-center">
          <div className="text-[32px] mb-4">
            <h1 className="font-bold">Hungry?</h1>
            <h1>Let Us Bring the Food to You!</h1>
          </div>
          <h2 className="text-[16px] mb-6">
            Simplify Your Meals With Chirunga Munchies Food Delivery System
          </h2>
          <button className="w-[109.53px] h-[45px] bg-[#FF6C44] text-[#ffffff] font-semibold rounded-[5px]">
            Order Now
          </button>
        </div>
        <Image
          src="/hero-image.png"
          width={246}
          height={246}
          alt="a top shot of food in a plate"
        />
      </div>
    </>
  );
}