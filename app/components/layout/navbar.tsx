'use client'
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { title: "Home", href: "#" },
        { title: "Profile", href: "#" },
        { title: "Restaurants", href: "#" },
        { title: "Order History", href: "#" }
    ];

    return (
        <main className="flex flex-col relative">
            {/* Top header */}
            <div className="flex justify-between items-center py-6 px-5 max-w-7xl mx-auto w-full">
                <Image
                    src="/logo.png"
                    width={111}
                    height={37}
                    alt="chirunga munchies orange logo"
                    className="w-28 h-auto"
                />

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.title}
                            href={item.href}
                            className="font-semibold text-base text-gray-900 hover:text-orange-500 transition-colors"
                        >
                            {item.title}
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden"
                    aria-label="Toggle menu"
                >
                    <div className="relative w-10 h-10">
                        <Bars3Icon
                            className={`absolute transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'
                                } h-10 w-10 text-gray-900`}
                            strokeWidth={2}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            <div
                className={`fixed inset-0 bg-black/20 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    } lg:hidden`}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Navigation Sliding Menu */}
            <div
                className={`fixed top-0 right-0 h-screen w-64 bg-[#F6F5FA]/50 transform transition-transform duration-300 ease-in-out 
                ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
                shadow-lg z-50 lg:hidden backdrop-blur-lg`}
            >
                <div className="flex justify-end p-4">
                    <button
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <XMarkIcon
                            className="h-10 w-10 text-gray-900"
                            strokeWidth={2}
                        />
                    </button>
                </div>

                <nav className="px-8 pt-8">
                    <div className="flex flex-col space-y-8">
                        {navItems.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className="font-semibold text-base text-gray-900 hover:text-orange-500 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                </nav>
            </div>
        </main>
    );
}