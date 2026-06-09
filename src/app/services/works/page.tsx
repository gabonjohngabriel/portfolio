"use client";

import Image from "next/image";
import {
    PageCard,
    PageNav,
    MediaSmallPanel,
    type MediaSmallPanelSection,
} from "@/_components";
import { works } from "@/_lib";
import Link from "next/link";

/* Works Page */
export default function Works() {
    const worksMediaSections: MediaSmallPanelSection[] = [
        {
            imageSrc: "",
            alt: "Works section graphic",
            bgColor: "#15616d",
            number: "03",
            label: "works",
            iconSrc: "/dashicons_portfolio.svg",
            priority: true,
        },
    ];

    return (
        <div className="portfolio-viewport select-none">
            <PageCard>
                <div className="portfolio-card-shell">
                    <div className="portfolio-card-grid__no-text">
                        {/* LEFT PANEL */}
                        <div className="portfolio-left-panel order-2 lg:order-1">
                            {/* NAV */}
                            <PageNav activePage="works" />

                            {/* MAIN */}
                            <div className="portfolio-main-copy portfolio-scroll-area overflow-y-auto py-6">
                                <h1 className="portfolio-services-title mb-2 text-[var(--brand-teal)]">
                                    Recent Works
                                </h1>

                                <div className="portfolio-works-layout flex flex-col">
                                    {works.map((work) => {
                                        const desc =
                                            work.description ||
                                            "Coming soon...";
                                        return (
                                            <a
                                                href={work.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                key={work.id}
                                                className="flex flex-row items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-[var(--brand-teal)] rounded-[22px] text-white">
                                                {/* IMAGE */}
                                                {work.imageSrc ? (
                                                    <div className="relative w-20 h-20 sm:w-32 sm:h-32 rounded-[14px] overflow-hidden shrink-0 bg-white border border-white/10">
                                                        <Image
                                                            src={work.imageSrc}
                                                            alt={`${work.title} preview`}
                                                            fill
                                                            className="object-cover"
                                                            priority
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="w-20 h-20 sm:w-32 sm:h-32 rounded-[14px] shrink-0 bg-[#001524]/20 border border-white/10 flex items-center justify-center">
                                                        <Image
                                                            src="/dashicons_portfolio.svg"
                                                            alt="Work placeholder"
                                                            width={48}
                                                            height={48}
                                                            className="opacity-40"
                                                        />
                                                    </div>
                                                )}
                                                {/* TEXT */}
                                                <div className="flex-1 flex flex-col justify-center text-left">
                                                    <h2 className="text-[24px] sm:text-[28px] font-display leading-none tracking-tight">
                                                        {work.title}
                                                    </h2>
                                                    <p className="mt-3 text-[12px] sm:text-[14px] text-white/80 leading-[1.25] max-w-xl">
                                                        {desc}
                                                    </p>
                                                </div>
                                                {/* SHARE */}
                                                {work.href && (
                                                    <div
                                                        aria-label={`Visit ${work.title}`}>
                                                        <Image
                                                            src="/grommet-icons_share.svg"
                                                            alt="Share Link"
                                                            width={16}
                                                            height={16}
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                )}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                            {/* BUTTONS */}
                            <div className="mt-4 pt-4 flex justify-between">
                                <Link
                                    href="/services"
                                    transitionTypes={["nav-back"]}
                                    className="link-btn inline-flex items-center gap-2 text-[var(--brand-teal)] font-semibold uppercase tracking-[0.05em] hover:translate-x-1 transition-transform">
                                    &larr; SERVICES
                                </Link>
                                <Link
                                    href="/contact"
                                    transitionTypes={["nav-forward"]}
                                    className="link-btn inline-flex items-center gap-2 text-[var(--brand-teal)] font-semibold uppercase tracking-[0.05em] hover:translate-x-1 transition-transform">
                                    CONTACT &rarr;
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT PANEL */}
                        <MediaSmallPanel
                            className="portfolio-media-stack-hide order-1 lg:order-2 min-h-[300px] lg:min-h-0 mb-8 lg:mb-0 rounded-t-[24px] lg:rounded-none overflow-hidden shrink-0"
                            sections={worksMediaSections}
                            arrowSize={48}
                        />
                    </div>
                </div>
            </PageCard>
        </div>
    );
}
