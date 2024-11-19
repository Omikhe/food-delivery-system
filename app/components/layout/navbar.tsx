'use client'
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react";

export default function Pagez() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <main className="flex flex-col relative">
            {/* Top header */}
            <div className="flex justify-between items-center py-[26px] px-[20px]">
                <Image
                    src="/logo.png"
                    width={111}
                    height={37}
                    alt="chirunga munchies orange logo"
                />

                <div
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="cursor-pointer"
                >
                    <div className="relative w-[40px] h-[40px]">
                        <Bars3Icon
                            className={`absolute transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                                } h-[40px] w-[40px] text-[#111A2C]`}
                            strokeWidth={3}
                        />

                        {/* <XMarkIcon
              className={`absolute transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
                } h-[40px] w-[40px] text-[#111A2C]`}
              strokeWidth={3}
            /> */}
                    </div>
                </div>
            </div>

            {/* Sliding Navigation */}
            <div
                className={`fixed top-0 right-0 h-screen w-1/2 bg-[#F6F5FA]/50  transform transition-transform duration-300 ease-in-out 
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
         shadow-lg z-50 backdrop-blur-lg`}
            >
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="pl-[137px] pr-[38px] pt-[16px]">
                    <XMarkIcon
                        className={`absolute transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
                            }  h-[40px] w-[40px] text-[#111A2C]`}
                        strokeWidth={3}
                    />
                </button>

                <div className="pl-[32px] pt-[84px]">
                    <nav className="flex flex-col space-y-12">
                        <h1 className="font-semibold text-[16px]">Home</h1>
                        <h1 className="font-semibold text-[16px]">Profile</h1>
                        <h1 className="font-semibold text-[16px]">Restaurants</h1>
                        <h1 className="font-semibold text-[16px]">Order History</h1>
                    </nav>
                </div>

            </div>
        </main>
    );
}