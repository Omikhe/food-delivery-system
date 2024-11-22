import Link from "next/link";
import Image from "next/image";


export default function MealCard() {
    return (
        <div className="flex flex-col w-[166px] h-[182px] lg:w-64 lg:h-80 p-6 justify-between items-center bg-[#F6F5FA] text-black text-xl rounded-2xl">
            <div className="flex items-center justify-center w-full h-full rounded-3xl p-0 mb-1 overflow-hidden bg-transparent">
                <Image
                    src={"/meals/burger.png"}
                    alt="logo"
                    width={1132}
                    height={1132}
                />
            </div>

            <div className="flex flex-col items-center mb-2 mt-0">
                <h2 className="text-nowrap text-sm font-bold lg:text-base">Signature Burger</h2>
                <p className="text-sm lg:text-base text-center">MWK2,500</p>
            </div>

            <Link className=" lg:text-base w-[133px] h-[29px] lg:w-full lg:h-60 p-2 bg-[#FF6C44] hover:bg-orange-500 text-white rounded-md" href="/">
                <button className="">Order</button>
            </Link>
        </div>
    );
}