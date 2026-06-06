import Image from "next/image";
import Link from "next/link";
import {
    PageCard,
    PageNav,
    MediaSmallPanel,
    type MediaSmallPanelSection,
} from "../_components";
import { services } from "../_lib";

/* Services Page */
export default function Services() {
    const servicesMediaSections: MediaSmallPanelSection[] = [
        {
            imageSrc: "",
            alt: "Services section graphic illustration",
            bgColor: "#15616d",
            number: "02",
            label: "services",
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
                        <div className="portfolio-left-panel">
                            {/* NAV */}
                            <PageNav activePage="services" />

                            {/* Scrollable Main Content */}
                            <div className="portfolio-main-copy portfolio-scroll-area">
                                {/* TITLE */}
                                <h1 className="portfolio-services-title text-[var(--brand-teal)]">
                                    <span className="block">
                                        Crafting Quality Standards
                                    </span>
                                </h1>

                                {/* SUBTITLE */}
                                <p className="portfolio-services-copy text-[#001524] max-w-[620px] w-full mt-2">
                                    Driven by curiosity, I create tailored
                                    digital solutions through innovation and
                                    creativity while focusing on user-centric
                                    experiences.
                                </p>

                                {/* BUTTONS */}
                                <div className="portfolio-actions flex flex-wrap gap-4">
                                    <Link
                                        className="portfolio-btn flex items-center px-8 py-3 justify-center rounded-full bg-[var(--brand-teal)] font-semibold uppercase tracking-[0.08em] text-[white] transition-all hover:scale-105 hover:-translate-y-0.5 active:scale-95"
                                        href="/contact"
                                        transitionTypes={["nav-forward"]}>
                                        Get In Touch
                                    </Link>
                                    <Link
                                        className="portfolio-btn flex items-center px-8 py-3 justify-center rounded-full bg-[#001524] font-semibold uppercase tracking-[0.08em] text-white transition-all hover:scale-105 hover:-translate-y-0.5 active:scale-95"
                                        href="/services/works"
                                        transitionTypes={["nav-forward"]}>
                                        View Works
                                    </Link>
                                </div>

                                {/* SERVICES & SOLUTIONS SECTION */}
                                <div className="portfolio-services-section">
                                    <h2 className="portfolio-services-section-title text-[var(--brand-teal)] mt-2">
                                        Services &amp; Solutions
                                    </h2>

                                    {/* SERVICE CARDS GRID */}
                                    <div className="portfolio-service-grid flex flex-wrap">
                                        {services.map((service) => (
                                            <div
                                                key={service.title}
                                                className="portfolio-service-card bg-[var(--brand-teal)] flex flex-col items-start justify-start mt-2 hover:-translate-y-1 transition-transform duration-300 ease-out">
                                                {/* ICON */}
                                                <div className="portfolio-service-icon-wrap bg-white flex items-center justify-center">
                                                    <Image
                                                        src={service.iconSrc}
                                                        alt={`${service.title} icon`}
                                                        width={36}
                                                        height={36}
                                                        className="object-contain"
                                                    />
                                                </div>

                                                {/* TITLE */}
                                                <h3 className="portfolio-service-card-title text-white font-semibold uppercase leading-[0.95]">
                                                    {service.title}
                                                </h3>

                                                {/* DESCRIPTION */}
                                                <p className="portfolio-service-card-desc text-white leading-[1.25]">
                                                    {service.description}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT PANEL - Services Visual Graphic Column */}
                        <MediaSmallPanel
                            sections={servicesMediaSections}
                            arrowSize={48}
                        />
                    </div>
                </div>
            </PageCard>
        </div>
    );
}
