import MealCard from "@/app/components/meal-card"
import Navbar from "@/app/components/layout/navbar";
import RestaurantSign from "@/app/components/restaurant-sign";

function CallToAction() {
    return (
        <div className="my-[25px]  lg:mt-20 lg:mb-7 w-full">
            <div className="text-nowrap text-[16px] text-left font-bold lg:w-[600px] lg:text-[40px] lg:font-bold mb-[4px]">Checkout our menu! 😋</div>
            <hr className="border border-[#D9D9D9]"></hr>
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