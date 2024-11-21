import Link from "next/link";
export default function RestaurantCard() {
    return (
        <div className="flex flex-col w-[460px] h-[272px] bg-[#F6F5FA] justify-center items-start p-10 rounded-[5px] text-xl">
            <div className="flex w-[380px] h-[112px] mb-[20px]">
                <div className="w-[112px] h-[112px] bg-[#BCBDC1] mr-[17px] rounded-[5px]"></div>
                <div className="">
                    <h1 className="font-semibold mb-3">Bossman Restaurant</h1>
                    <h2 className="mb-3 text-sm text-gray-500">Chikanda • Near Bridge</h2>
                    <div className="flex items-center text-sm">
                        <div className="w-3 h-3 rounded-full bg-green-500  mr-1"></div>
                        <h2 className="text-[#27AE61] font-medium">Open</h2>
                    </div>
                </div>
            </div>
            <Link href={"/restaurants/menu"} className="w-full border-white p-4 text-white bg-[#FF6C44] hover:bg-orange-500 rounded-lg text-center">
                View Menu
            </Link>
        </div>
    );
}