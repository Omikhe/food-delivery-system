import MealCard from "@/app/components/meal-card"
import Navbar from "@/app/components/layout/navbar";



export default function Page() {
    return (
        <>
            <Navbar></Navbar>
            <div className="flex flex-col justify-between items-start py-6 px-5 max-w-7xl mx-auto w-full">
                <MealCard />
            </div>
        </>
    );
}