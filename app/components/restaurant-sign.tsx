import Image from "next/image";

export default function RestaurantSign() {
    return (
        <div className="flex gap-[13px] lg:gap-10 items-center">
            <div className="w-[80px] h-[80px] rounded-[8px] lg:w-40 lg:h-40 bg-[#BCBDC1] lg:rounded-3xl overflow-hidden">
                <Image
                    src={"/logos/bossman-restaurant-logo.png"}
                    alt="logo"
                    width={1132}
                    height={1132}
                />
            </div>

            <div>
                <h1 className="lg:text-5xl font-bold mb-1">Bossman Restaurant</h1>
                <h2 className="font-normal text-[#BCBDC1] mb-1">Chikanda • Near Bridge</h2>
                <div className="flex items-center text-sm">
                    <div className="w-3 h-3 rounded-full bg-green-500  mr-1"></div>
                    <h2 className="text-[#27AE61] font-medium">Open</h2>
                </div>
            </div>
        </div>
    );
}