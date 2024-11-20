import MealCard from "../../components/restaurant-card"



export default function Page() {
    return (
        <>
            <div className="flex flex-col justify-between items-start py-6 px-5 max-w-7xl mx-auto w-full">
                <MealCard />
            </div>
        </>
    );
}