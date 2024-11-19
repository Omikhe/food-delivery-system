'use client'
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react";


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
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
          <XMarkIcon
            className={`absolute transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
              } h-[40px] w-[40px] text-[#111A2C]`}
            strokeWidth={3}
          />
        </div>
      </div>

    </div>
  );
}