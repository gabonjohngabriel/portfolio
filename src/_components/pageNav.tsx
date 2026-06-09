"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export interface PageNavProps {
    activePage: string;
}

const PAGE_ORDER = [
    "/",
    "/about",
    "/about/orgs",
    "/services",
    "/services/works",
    "/contact",
];

export function PageNav({ activePage }: PageNavProps) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const currentIndex = PAGE_ORDER.indexOf(pathname);

    const getTransitionType = (targetHref: string) => {
        const targetIndex = PAGE_ORDER.indexOf(targetHref);
        if (currentIndex === -1 || targetIndex === -1) return "none";
        if (currentIndex === targetIndex) return "none";
        return targetIndex > currentIndex ? "nav-forward" : "nav-back";
    };

    const navLinks = [
        { href: "/", label: "home", page: "home" },
        { href: "/about", label: "about", page: "about" },
        { href: "/services", label: "services", page: "services" },
        { href: "/services/works", label: "works", page: "works" },
        { href: "/contact", label: "contact", page: "contact" },
    ];

    return (
        <nav
            className={`portfolio-page-nav col-span-full flex flex-col text-[#001524] w-full z-[100] ${isOpen ? "nav-open" : ""}`}>
            {/* HEADER ROW */}
            <div className="flex justify-between items-center w-full relative z-[101]">
                {/* DESKTOP */}
                <div className="hidden md:flex justify-between w-full">
                    {navLinks.map((link) => (
                        <Link
                            key={link.page}
                            href={link.href}
                            transitionTypes={[getTransitionType(link.href)]}
                            className={`hover:opacity-75 transition-opacity ${activePage === link.page ? "opacity-50" : ""}`}>
                            {link.label}
                        </Link>
                    ))}
                </div>

                {isOpen ? (
                    <p className="md:hidden font-regular cursor-pointer">
                        menu
                    </p>
                ) : (
                    <p className="md:hidden font-regular cursor-pointer">
                        <Link
                            key={"home"}
                            href={"/"}
                            transitionTypes={[getTransitionType("/")]}
                            className="hover:opacity-75">
                            home
                        </Link>
                    </p>
                )}

                {/* MOBILE - HAMBURGER */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden ml-auto p-2 focus:outline-none cursor-pointer"
                    aria-label="Toggle menu"
                    aria-expanded={isOpen}>
                    {isOpen ? (
                        <Image
                            src="/material-symbols_close-rounded.svg"
                            alt="Close Menu"
                            width={20}
                            height={20}></Image>
                    ) : (
                        <Image
                            src="/material-symbols_menu-rounded.svg"
                            alt="Menu"
                            width={20}
                            height={20}></Image>
                    )}
                </button>
            </div>

            {/* MOBILE */}
            {isOpen && (
                <div className="absolute inset-0 bg-white z-[99] flex flex-col justify-center items-center transition-all duration-300 ease-in-out">
                    <div className="flex flex-col gap-6 text-center text-[24px]">
                        {navLinks.map((link) => (
                            <Link
                                key={link.page}
                                href={link.href}
                                transitionTypes={[getTransitionType(link.href)]}
                                onClick={() => setIsOpen(false)}
                                className={`hover:opacity-75 transition-opacity ${activePage === link.page ? "opacity-50" : ""}`}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
