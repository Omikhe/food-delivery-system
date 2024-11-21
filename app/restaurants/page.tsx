import Navbar from "../components/layout/navbar"
import RestaurantCard from "../components/restaurant-card";

export default function Page() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-between items-start py-6 px-5 max-w-7xl mx-auto w-full">
                <div className="w-[240px] h-[88px] text-[32px] mb-[16px] text-left font-bold lg:w-[600px] lg:text-[40px] lg:font-bold lg:mb-[48px]">Pick your fave restaurant! 😉</div>
                <div className="columns-1 lg:gap-[18px] lg:columns-3">

                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <RestaurantCard />
                    </div>

                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <RestaurantCard />
                    </div>

                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <RestaurantCard />
                    </div>

                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <RestaurantCard />
                    </div>

                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <RestaurantCard />
                    </div>

                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <RestaurantCard />
                    </div>

                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <RestaurantCard />
                    </div>

                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <RestaurantCard />
                    </div>

                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <RestaurantCard />
                    </div>

                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <RestaurantCard />
                    </div>

                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <RestaurantCard />
                    </div>

                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <RestaurantCard />
                    </div>

                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <RestaurantCard />
                    </div>

                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <RestaurantCard />
                    </div>

                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <RestaurantCard />
                    </div>

                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <RestaurantCard />
                    </div>

                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <RestaurantCard />
                    </div>

                    <div className="mb-[16px] lg:mb-[18px] lg:break-inside-avoid">
                        <RestaurantCard />
                    </div>


                </div>

            </div>
        </>
    );
}