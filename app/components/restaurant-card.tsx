export default function RestaurantCard() {
    return (
        <div className="flex flex-col w-[344px] h-[163px] bg-[#F6F5FA] justify-center items-start p-[17px] rounded-[5px]">
            <div className="flex w-[257.63px] h-[73.13px] mb-[20px]">
                <div className="w-[81.02px] h-[73.13px] bg-[#BCBDC1] mr-[17px] rounded-[5px]"></div>
                <div>
                    <h1 className="font-semibold text-[15px] mb-1">Bossman Restaurant</h1>
                    <h2 className="font-normal text-[10px] text-[#BCBDC1] mb-1">Chikanda • Near Bridge</h2>
                    <div className="flex items-center">
                        <div className="w-[5px] h-[5px] rounded-full bg-[#27AE61] mr-1"></div>
                        <h2 className="text-[#27AE61] font-medium text-[10px]">Open</h2>
                    </div>
                </div>
            </div>
            <button className="w-[304px] h-[40px] bg-[#FF6C44] text-[#ffffff] font-semibold rounded-[5px] text-[13px] hover:bg-[#ED5A32]">
                View Menu
            </button>
        </div>
    );
}