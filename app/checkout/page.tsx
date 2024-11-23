import Navbar from "../components/layout/navbar"
import Image from "next/image";
import Link from "next/link";


export default function Page() {
    return (
        <main>
            <Navbar></Navbar>
            <div className="flex flex-col justify-between items-start py-6 px-5 max-w-7xl mx-auto w-full">
                <div className="flex items-center justify-center w-[430px] h-[482px] bg-transparent mb-16 overflow-visible">
                    <Image
                        src={"/meals/burger.png"}
                        alt="meal"
                        width={1132}
                        height={1132}
                        className="w-[700px] h-[350px] object-cover overflow-visible"
                    />
                </div>
                <h1 className="font-bold text-[32px] mb-[4px]">Burger</h1>
                <h2 className="font-semibold text-[16px] mb-[16px]">MWK3500.00</h2>
                <p className="mb-[22px]">Our signature burger features a juicy beef patty, crisp lettuce, tomatoes, pickles, cheddar cheese, and our special sauce on a toasted brioche bun.</p>
                <Link href={"/restaurants/menu"} className="flex items-center justify-center w-full h-[40px] rounded-[5px] text-[13px] lg:text-xl lg:w-full lg:h-[60px] p-4 text-white bg-[#FF6C44] hover:bg-orange-500 lg:rounded-lg text-center font-semibold">
                    <div>Proceed</div>
                </Link>
            </div>
        </main>
    );
}