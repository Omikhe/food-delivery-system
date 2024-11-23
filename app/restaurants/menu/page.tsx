import MealCard from "@/app/components/meal-card"
import Navbar from "@/app/components/layout/navbar";
import RestaurantSign from "@/app/components/restaurant-sign";

function CallToAction() {
    return (
        <div className="mt-20 mb-7 w-full">
            <div className="w-[240px] h-[88px] text-[32px] mb-[16px] text-left font-bold lg:w-[600px] lg:text-[40px] lg:font-bold lg:mb-[4px]">Checkout our menu! 😋</div>
            <hr className="border border-[#DDDDDD]"></hr>
        </div>
    );
}


export default function Page() {
    return (
        <>
            <Navbar></Navbar>
            <div className="flex flex-col justify-between items-start py-6 px-5 max-w-7xl mx-auto w-full">
                <RestaurantSign />
                <CallToAction />
                <div className="columns-2 lg:gap-[18px] lg:columns-4">

                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <MealCard />
                    </div>

                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <MealCard />
                    </div>

                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <MealCard />
                    </div>

                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <MealCard />
                    </div>

                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <MealCard />
                    </div>

                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <MealCard />
                    </div>
                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <MealCard />
                    </div>
                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <MealCard />
                    </div>
                </div>
            </div>
        </>
    );
}