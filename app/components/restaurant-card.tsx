import Link from "next/link";
import Image from "next/image";

export default function RestaurantCard() {
    return (
        <div className="flex flex-col w-[344px] h-[163px] bg-[#F6F5FA] justify-center items-start p-[17px] rounded-[5px] lg:flex lg:flex-col lg:w-[460px] lg:h-[272px] lg:bg-[#F6F5FA] lg:justify-center lg:items-start lg:p-10 lg:rounded-[5px] lg:text-xl">

            <div className="flex w-[257.63px] h-[73.13px] mb-[20px] lg:flex lg:w-[380px] lg:h-[112px] lg:mb-[20px]">

                <div className="w-[81.02px] h-[73.13px] bg-[#BCBDC1] mr-[17px] rounded-[5px] lg:w-[112px] lg:h-[112px] lg:bg-[#BCBDC1] lg:mr-[17px] lg:rounded-[5px] overflow-hidden">
                    <Image
                        src={"/logos/bossman-restaurant-logo.png"}
                        alt="logo"
                        width={1132}
                        height={1132}
                    />
                </div>

                <div className="">
                    <h1 className="text-[15px] text-nowrap mb-1 font-semibold lg:mb-3 lg:text-xl">Bossman Restaurant</h1>
                    <h2 className="font-normal text-[10px] mb-1 lg:mb-3 lg:text-sm text-gray-500">Chikanda • Near Bridge</h2>
                    <div className="flex items-center lg:text-sm">
                        <div className="lg:w-3 lg:h-3 lg:rounded-full w-[5px] h-[5px] rounded-full bg-[#27AE61] mr-1"></div>
                        <h2 className="text-[10px] text-[#27AE61] font-medium lg:text-sm">Open</h2>
                    </div>
                </div>

            </div>

            <Link href={"/restaurants/menu"} className="flex items-center justify-center w-[304px] h-[40px] rounded-[5px] text-[13px] lg:text-xl lg:w-full lg:h-[60px] p-4 text-white bg-[#FF6C44] hover:bg-orange-500 lg:rounded-lg text-center">
                <div>View Menu</div>
            </Link>
        </div>
    );
}