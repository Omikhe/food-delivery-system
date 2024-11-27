import Link from "next/link";
import Image from "next/image";


export default function MealCard() {
    return (
        <div className="flex flex-col p-[17px] w-[166px] h-[182px] lg:w-64 lg:h-80 lg:p-6 justify-between items-center bg-[#F6F5FA] text-black rounded-2xl">
            <div className="flex items-center justify-center w-full h-full rounded-3xl mb-1 overflow-hidden p-0">
                <Image
                    src={"/meals/burger.png"}
                    alt="meal"
                    width={1132}
                    height={1132}
                    className="w-full h-full object-cover"
                />
            </div>

            <div>
                <h2 className="text-nowrap text-sm font-bold lg:text-base">Signature Burger</h2>
                <p className="text-sm lg:text-base text-center">MWK2,500</p>
            </div>

            <Link className="flex mt-[4px] text-sm items-center justify-center lg:text-base w-[133px] h-[29px] lg:w-full lg:h-[60px] p-2 bg-[#FF6C44] hover:bg-orange-500 text-white rounded-md" href="/checkout">
                <button className="">Order</button>
            </Link>
        </div>
    );
}