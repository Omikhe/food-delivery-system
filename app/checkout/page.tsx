import Navbar from "@/app/components/layout/navbar"
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function Page() {
    return (
        <main>
            <Navbar></Navbar>
            <Link href={"/restaurants/menu"} className="hidden md:flex justify-start items-center py-6  max-w-7xl mx-auto w-full font-bold text-[18px] mt-[64px]">
                <ChevronLeftIcon
                    className="h-10 w-10 text-gray-900"
                    strokeWidth={2}
                />
                Back
            </Link>
            <div className="flex flex-col justify-between items-center py-6 px-5 max-w-7xl mx-auto w-full overflow-hidden md:h-full md:flex md:flex-row md:items-center md:justify-start md:gap-32 md:py-10 md:bg-[#F6F5FA] rounded-xl">
                {/* <div className="bg-transparent lg:bg-[#F6F5FA] lg:w-60 lg:h-60"></div> */}
                <div className="flex items-center justify-self-center w-[430px] h-[350px] bg-transparent mb-2 md:h-[500px] md:w-[500px]">
                    <Image
                        src={"/meals/burger.png"}
                        alt="meal"
                        width={1132}
                        height={1132}
                        className="flex items-center justify-center w-[600px] h-[300px] object-cover overflow-visible pr-[20px]"
                    />
                </div>
                <div className="flex flex-col items-start md:h-[307px] md:w-[407px]">
                    <h1 className="font-bold text-[32px] mb-[4px]">Burger</h1>
                    <h2 className="font-semibold text-[16px] mb-[16px]">MWK3500.00</h2>
                    <p className="mb-[22px]">Our signature burger features a juicy beef patty, crisp lettuce, tomatoes, pickles, cheddar cheese, and our special sauce on a toasted brioche bun.</p>
                    <Link href={"/restaurants/menu"} className="flex items-center justify-center w-full h-[40px] rounded-[5px] text-[16px] lg:text-xl lg:w-full lg:h-[60px] p-4 text-white bg-[#FF6C44] hover:bg-orange-500 lg:rounded-lg text-center font-semibold">
                        <div>Proceed</div>
                    </Link>
                </div>
            </div>
        </main>
    );
}