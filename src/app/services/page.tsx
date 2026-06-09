import Image from "next/image";
import Link from "next/link";
import {
    PageCard,
    PageNav,
    MediaSmallPanel,
    type MediaSmallPanelSection,
} from "@/_components";
import { services } from "@/_lib";

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
                <div className="portfolio-card-shell relative">
                    <div className="portfolio-card-grid__no-text">
                        {/* LEFT PANEL */}
                        <div className="portfolio-left-panel order-2 lg:order-1">
                            {/* NAV */}
                            <PageNav activePage="services" />

                            {/* Scrollable Main Content */}
                            <div className="portfolio-main-copy portfolio-scroll-area">
                                {/* TITLE */}
                                <h1 className="portfolio-services-title lg:mt-8 mt-2 text-[var(--brand-teal)]">
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
                            {/* BUTTONS */}
                            <div className="mt-4 pt-4 flex justify-between">
                                <Link
                                    href="/about/orgs"
                                    transitionTypes={["nav-back"]}
                                    className="link-btn inline-flex items-center gap-2 text-[var(--brand-teal)] font-semibold uppercase tracking-[0.05em] hover:translate-x-1 transition-transform">
                                    &larr; About
                                </Link>
                                <Link
                                    href="/services/works"
                                    transitionTypes={["nav-forward"]}
                                    className="link-btn inline-flex items-center gap-2 text-[var(--brand-teal)] font-semibold uppercase tracking-[0.05em] hover:translate-x-1 transition-transform">
                                    Works &rarr;
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT PANEL */}
                        <MediaSmallPanel
                            className="portfolio-media-stack-hide order-1 lg:order-2 min-h-[300px] lg:min-h-0 mb-8 lg:mb-0 rounded-t-[24px] lg:rounded-none overflow-hidden shrink-0"
                            sections={servicesMediaSections}
                            arrowSize={48}
                        />
                    </div>
                </div>
            </PageCard>
        </div>
    );
}
