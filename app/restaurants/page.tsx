import Navbar from "../components/layout/navbar"

export default function Page() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-between items-start py-6 px-5 max-w-7xl mx-auto w-full">
                <div className="lg:text-[40px] lg:font-bold lg:mb-[48px]">Choose your fave restaurant!😉</div>

            </div>
        </>
    );
}