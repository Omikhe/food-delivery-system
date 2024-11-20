import Navbar from "../components/layout/navbar"

export default function Page() {
    return (
        <>
            <Navbar />
            <div className="lg:text-[40px] lg:font-bold">Choose your fave restaurant!😉</div>
            <div className="lg:flex lg:flex-col lg:w-[344px] lg:h-[163px] lg:bg-[#F6F5FA] lg:justify-center lg:items-start lg:p-[17px] lg:rounded-[5px]">
                <div className="lg:flex lg:w-[257.63px] lg:h-[73.13px] lg:mb-[20px]">
                    <div className="lg:w-[81.02px] lg:h-[73.13px] lg:bg-[#BCBDC1] lg:mr-[17px]"></div>
                    <div>
                        <h1 className="lg:font-semibold lg:text-[15px]">Bossman Restaurant</h1>
                        <h2 className="lg:font-normal lg:text-[10px] lg:text-[#BCBDC1]">Chikanda • Near Bridge</h2>
                        <div className="lg:flex lg:items-center">
                            <div className="lg:w-[5px] lg:h-[5px] lg:rounded-full lg:bg-[#27AE61]  mr-1"></div>
                            <h2 className="lg:text-[#27AE61] lg:font-medium lg:text-[10px]">Open</h2>
                        </div>
                    </div>
                </div>
                <button className="w-[109.53px] h-[45px] bg-[#FF6C44] text-[#ffffff] lg:font-semibold rounded-[5px] lg:w-[304px] lg:h-[40px] lg:text-[13px] lg:hover:bg-[#ED5A32]">
                    View Menu
                </button>
            </div>
        </>
    );
}