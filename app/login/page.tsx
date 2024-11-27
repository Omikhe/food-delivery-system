import Link from "next/link";
import Navbar from "../components/layout/navbar";
export default function Page() {
    return (
        <div>
            <Navbar></Navbar>
            <main className="flex flex-col justify-between items-start py-6 px-5 max-w-7xl mx-auto w-full">

                <div className="my-20">Logo</div>
                <h1 className="font-semibold text-4xl mb-4">Log In</h1>
                <form action="" className="w-full">

                    <div className="flex flex-col text-base mb-4">
                        <label htmlFor="email">Email</label>
                        <input className="bg-[#DDDDDD] w-full h-16 p-4 rounded-lg" type="email" name="email" />
                    </div>
                    <div className="flex flex-col text-base mb-1">
                        <label htmlFor="password">Password</label>
                        <input className="bg-[#DDDDDD] w-full h-16 p-4 rounded-lg" type="password" name="password" />
                    </div>
                    <Link href={"#"} className="flex mb-8">Forgot Password?</Link>

                    <button className="w-full h-14 bg-[#FF6C44] active:bg-orange-500 text-base font-semibold rounded-lg text-white">
                        Log In
                    </button>
                </form>
            </main>
            <div className="flex items-center justify-center gap-1">
                Don&apos;t have an account? <Link href={"/signup"}>Sign up</Link>
            </div>
        </div>
    );
}