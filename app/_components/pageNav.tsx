"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export interface PageNavProps {
    activePage: string;
}

export function PageNav({ activePage }: PageNavProps) {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "home", page: "home", transition: "nav-back" },
        {
            href: "/about",
            label: "about",
            page: "about",
            transition: "nav-forward",
        },
        {
            href: "/services",
            label: "services",
            page: "services",
            transition: "nav-forward",
        },
        {
            href: "/services/works",
            label: "works",
            page: "works",
            transition: "nav-forward",
        },
        {
            href: "/contact",
            label: "contact",
            page: "contact",
            transition: "nav-forward",
        },
    ];

    return (
        <nav className="portfolio-page-nav col-span-full flex justify-between items-center text-[#001524] font-sans w-full z-[100]">
            {/* DESKTOP */}
            <div className="hidden md:flex justify-between w-full">
                {navLinks.map((link) => (
                    <Link
                        key={link.page}
                        href={link.href}
                        transitionTypes={[link.transition]}
                        className={`hover:opacity-75 transition-opacity ${activePage === link.page ? "opacity-50" : ""}`}>
                        {link.label}
                    </Link>
                ))}
            </div>

            {isOpen ? (
                <p className="md:hidden font-regular cursor-pointer relative z-[101]">
                    menu
                </p>
            ) : (
                <p className="md:hidden font-regular cursor-pointer relative z-[101]">
                    <Link
                        key={"home"}
                        href={"/"}
                        transitionTypes={["nav-back"]}
                        className="hover:opacity-75">
                        home
                    </Link>
                </p>
            )}

            {/* MOBILE - HAMBURGER */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden ml-auto p-2 focus:outline-none cursor-pointer relative z-[101]"
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

            {/* MOBILE */}
            {isOpen && (
                <div className="fixed inset-0 bg-white z-[99] flex flex-col justify-center items-center p-6 transition-all duration-300 ease-in-out">
                    <div className="flex flex-col gap-6 text-center text-[24px]">
                        {navLinks.map((link) => (
                            <Link
                                key={link.page}
                                href={link.href}
                                transitionTypes={[link.transition]}
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
