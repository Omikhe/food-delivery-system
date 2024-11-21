import Image from "next/image";

export default function RestaurantSign() {
    return (
        <div className="flex gap-10 items-center">
            <div className="w-40 h-40 bg-[#BCBDC1] rounded-3xl overflow-hidden">
                <Image
                    src={"/bossman-restaurant-logo.png"}
                    alt="logo"
                    width={1132}
                    height={1132}
                />
            </div>

            <div>
                <h1 className="text-5xl font-bold mb-1">Bossman Restaurant</h1>
                <h2 className="font-normal text-[#BCBDC1] mb-1">Chikanda • Near Bridge</h2>
                <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#27AE61] mr-1"></div>
                    <h2 className="text-[#27AE61] font-medium">Open</h2>
                </div>
            </div>
        </div>
    );
}