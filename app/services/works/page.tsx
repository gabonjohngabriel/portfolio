"use client";

import Image from "next/image";
import { useState } from "react";
import {
    PageCard,
    PageNav,
    MediaSmallPanel,
    type MediaSmallPanelSection,
} from "../../_components";
import { works } from "../../_lib";
import Link from "next/link";

/* Works Page */
export default function Works() {
    const [activeWorkIdx, setActiveWorkIdx] = useState(0);

    const worksMediaSections: MediaSmallPanelSection[] = [
        {
            imageSrc: "/services_image.svg",
            alt: "Services section graphic illustration",
            bgColor: "#15616d",
            number: "02",
            label: "services",
            iconSrc: "/dashicons_portfolio.svg",
            priority: true,
        },
    ];

    const featuredWork = works[activeWorkIdx];

    return (
        <div className="portfolio-viewport select-none">
            <PageCard>
                <div className="portfolio-card-shell">
                    <div className="portfolio-card-grid__no-text">
                        {/* LEFT PANEL */}
                        <div className="portfolio-left-panel">
                            {/* NAV */}
                            <PageNav activePage="works" />

                            {/* Scrollable Main Content */}
                            <div className="portfolio-main-copy portfolio-scroll-area">
                                {/* TITLE */}
                                <h1 className="portfolio-services-title mb-6 text-[var(--brand-teal)]">
                                    <span className="block">Projects</span>
                                </h1>

                                <div className="portfolio-works-layout">
                                    {/* PROJECT LIST */}
                                    <div className="portfolio-work-list">
                                        {works.map((work, idx) => {
                                            const isActive =
                                                idx === activeWorkIdx;
                                            return (
                                                <div
                                                    key={work.id}
                                                    className={`portfolio-work-list-item ${
                                                        isActive
                                                            ? "is-active"
                                                            : ""
                                                    } ${work.description ? "cursor-pointer" : "cursor-not-allowed opacity-50"}`}
                                                    onClick={() => {
                                                        if (work.description) {
                                                            setActiveWorkIdx(
                                                                idx,
                                                            );
                                                        }
                                                    }}>
                                                    <p className="portfolio-work-list-num mr-1">
                                                        {work.id}
                                                    </p>
                                                    <p className="portfolio-work-list-dash mr-1">
                                                        ——
                                                    </p>
                                                    <p className="portfolio-work-list-title">
                                                        {work.title}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* WORK SHOWCASE */}
                                    <div className="portfolio-work-showcase">
                                        {/* TEAL CARD */}
                                        <div className="portfolio-work-showcase-card">
                                            <h2 className="portfolio-work-title font-display">
                                                {featuredWork.title}
                                            </h2>
                                            <p className="portfolio-work-desc">
                                                {featuredWork.description}
                                            </p>
                                            {featuredWork.href && (
                                                <Link
                                                    className="portfolio-btn flex items-center justify-center rounded-full bg-[white] font-bold uppercase tracking-[0.08em] text-[10px] text-[var(--brand-teal)]"
                                                    href={featuredWork.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer">
                                                    VISIT {featuredWork.title}
                                                </Link>
                                            )}
                                        </div>

                                        {/* PREVIEW IMAGE */}
                                        {featuredWork.imageSrc && (
                                            <div className="portfolio-work-preview">
                                                <div className="portfolio-work-image-container">
                                                    <Image
                                                        src={
                                                            featuredWork.imageSrc
                                                        }
                                                        alt={`${featuredWork.title} preview`}
                                                        fill
                                                        className="object-cover"
                                                        priority
                                                    />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT PANEL - Services Visual Graphic Column */}
                        <MediaSmallPanel
                            sections={worksMediaSections}
                            arrowSize={48}
                        />
                    </div>
                </div>
            </PageCard>
        </div>
    );
}
