import Link from "next/link";


export default function MealCard() {
    return (
        <div className="flex flex-col w-64 h-80 mr-8 p-6 justify-between items-center bg-gray-200 text-black text-xl rounded-2xl">
            <div className="w-full h-full rounded-3xl p-0 mb-1 overflow-hidden bg-transparent">

            </div>

            <div className="flex flex-col items-center mb-2 mt-0">
                <h2 className="font-bold text-base">Signature Burger</h2>
                <p className="text-center">MWK2,500</p>
            </div>

            <Link className="w-full" href="/Checkout">
                <button className="w-full p-2 bg-[#FF6C44] hover:bg-orange-500 text-white rounded-md">Order</button>
            </Link>
        </div>
    );
}