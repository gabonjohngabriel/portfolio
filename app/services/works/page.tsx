"use client";

import Image from "next/image";
import { useState } from "react";
import {
    PageCard,
    PageNav,
    RightPanel,
    type RightSection,
} from "../../_components";
import { works } from "../../_lib";

/* Works Page */
export default function Works() {
    const [activeWorkIdx, setActiveWorkIdx] = useState(0);

    const worksMediaSections: RightSection[] = [
        {
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
                            <PageNav
                                backHref={"/services"}
                                activePage="works"
                            />

                            {/* Scrollable Main Content */}
                            <div className="portfolio-main-copy portfolio-scroll-area">
                                <div className="portfolio-works-layout">
                                    {/* WORK SHOWCASE */}
                                    <div className="portfolio-work-showcase">
                                        {/* TEAL CARD */}
                                        <div className="portfolio-work-showcase-card">
                                            <span className="portfolio-work-number font-display">
                                                {featuredWork.number}
                                            </span>
                                            <h2 className="portfolio-work-title font-display">
                                                {featuredWork.title}
                                            </h2>
                                            <p className="portfolio-work-desc">
                                                {featuredWork.description}
                                            </p>
                                            {featuredWork.href && (
                                                <a
                                                    className="portfolio-work-btn"
                                                    href={featuredWork.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer">
                                                    VISIT
                                                </a>
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

                                    {/* PROJECT LIST */}
                                    <div className="portfolio-work-list">
                                        {works.map((work, idx) => {
                                            const isActive =
                                                idx === activeWorkIdx;
                                            return (
                                                <div
                                                    key={work.number}
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
                                                    <span className="portfolio-work-list-num">
                                                        {idx + 1}
                                                    </span>
                                                    <span className="portfolio-work-list-dash">
                                                        —
                                                    </span>
                                                    <span className="portfolio-work-list-title">
                                                        {work.title}
                                                    </span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT PANEL - Services Visual Graphic Column */}
                        <RightPanel
                            sections={worksMediaSections}
                            arrowSize={48}
                        />
                    </div>
                </div>
            </PageCard>
        </div>
    );
}
