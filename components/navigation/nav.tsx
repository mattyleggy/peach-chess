"use client";
import { useState } from "react";
import { Logo } from "../common/logo";
import { FaPhoneAlt } from "react-icons/fa";
import StartFreeButton from "../common/start-free-button";
import Link from "next/link";

export default function Nav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigationLinks = [
        {
            label: "Home",
            href: "/",
            sectionId: "home",
        },
        {
            label: "Services",
            href: "/services",
            sectionId: "services",
        },
        {
            label: "Pricing",
            href: "/pricing",
            sectionId: "pricing",
        },
        {
            label: "About Us",
            href: "/about",
            sectionId: "about",
        },
        {
            label: "Contact",
            href: "/contact",
            sectionId: "contact",
        },
    ];

    return (
        <nav className="w-full bg-[#18191C] flex justify-center">
            <div className="flex justify-between items-center max-w-7xl w-full py-4 px-4 md:px-0">
                <div className="flex items-center gap-4 md:gap-12">
                    <button
                        className="lg:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                    <Link href="/">
                        <div className="hidden md:block">
                            <Logo size={150} />
                        </div>
                        <div className="block md:hidden">
                            <Logo size={120} />
                        </div>
                    </Link>
                    <div className="hidden lg:block">
                        <ul className="flex gap-8 items-center w-full text-sm">
                            {navigationLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="relative text-primary-foreground after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-primary hover:after:w-full after:transition-all after:duration-300 hover:text-primary transition-all duration-100"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
                    <div className="flex items-center gap-2 text-sm md:text-base">
                        <FaPhoneAlt className="text-sm" />
                        <span>
                            <a href="tel:+61721156299">(07) 2115 6299</a>
                        </span>
                    </div>
                    <StartFreeButton />
                </div>
                <div
                    className={`lg:hidden fixed inset-0 bg-gradient-to-b from-primary to-primary z-50 flex flex-col transform transition-transform duration-300 ease-in-out ${
                        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <div className="flex fixed right-0 justify-end p-4">
                        <button
                            className="p-2 text-white hover:text-white/80 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center flex-1 p-4 gap-8">
                        <ul className="flex flex-col gap-8 text-center text-xl text-white">
                            {navigationLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-white hover:text-white/80 transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
