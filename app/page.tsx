import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline"

export default function Home() {
  return (
    <div className="flex justify-between items-center py-[26px] px-[20px]">
      <Image
        src="/logo.png"
        width={111}
        height={37}
        alt="chirunga munchies orange logo"
      />
      <Bars3Icon className="h-[40px] w-[40px] text-[#111A2C]" strokeWidth={3} />

    </div>
  );
}