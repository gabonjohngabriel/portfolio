import Image from "next/image";
import Link from "next/link";
import {
    PageCard,
    PageNav,
    RightPanel,
    type RightSection,
} from "../_components";
import { services } from "../_lib";

/* Contact Page */
export default function Contact() {
    const servicesMediaSections: RightSection[] = [
        {
            alt: "Contact Page",
            bgColor: "#ff7d00",
            number: "03",
            label: "contact",
            iconSrc: "/mdi_about.svg",
            priority: true,
        },
    ];

    return (
        <div className="portfolio-viewport select-none">
            <PageCard>
                <div className="portfolio-card-shell">
                    <div className="portfolio-card-grid__no-text">
                        {/* LEFT PANEL */}
                        <div className="portfolio-left-panel">
                            {/* NAV */}
                            <PageNav backHref="/" activePage="services" />

                            {/* Scrollable Main Content */}
                            <div className="portfolio-main-copy portfolio-scroll-area">
                                {/* TITLE */}
                                <h1 className="portfolio-services-title text-[var(--brand-teal)]">
                                    <span className="block">Crafting</span>
                                </h1>

                                {/* SUBTITLE */}
                                <p className="portfolio-services-copy text-[#001524] max-w-[420px] w-full leading-[1]">
                                    Driven by curiosity, I create tailored
                                </p>

                                {/* BUTTONS */}
                                <div className="portfolio-actions flex flex-wrap gap-4">
                                    <Link
                                        className="portfolio-btn flex items-center px-8 py-3 justify-center rounded-full bg-[var(--brand-teal)] font-semibold uppercase tracking-[0.08em] text-[white] transition-all hover:scale-105 hover:-translate-y-0.5 active:scale-95"
                                        href="/contact"
                                        transitionTypes={["nav-forward"]}>
                                        Get In Touch
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* RIGHT PANEL - Services Visual Graphic Column */}
                        <RightPanel
                            sections={servicesMediaSections}
                            arrowSize={48}
                        />
                    </div>
                </div>
            </PageCard>
        </div>
    );
}
