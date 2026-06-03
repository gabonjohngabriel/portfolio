import Image from "next/image";
import Link from "next/link";
import {
    PageCard,
    PageNav,
    RightPanel,
    type RightSection,
} from "../_components";
import { socials } from "../_lib";

/* Contact Page */
export default function Contact() {
    const contactMediaSections: RightSection[] = [
        {
            alt: "Contact section graphic",
            bgColor: "#ff7d00", // Brand Orange
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
                            <PageNav backHref="/" activePage="contact" />

                            {/* Scrollable Main Content */}
                            <div className="portfolio-main-copy portfolio-scroll-area">
                                {/* TITLE */}
                                <h1 className="portfolio-services-title text-[var(--brand-orange)]">
                                    <span className="block">Get In</span>
                                    <span className="block">Touch</span>
                                </h1>

                                {/* SUBTITLE */}
                                <p className="portfolio-services-copy text-[#001524] max-w-[420px] w-full leading-[1.45]">
                                    Have an interesting project, job
                                    opportunity, or just want to chat? Feel free
                                    to reach out to me directly or connect via
                                    my socials.
                                </p>

                                {/* EMAIL CONTACT */}
                                <div className="portfolio-section-block">
                                    <h2 className="portfolio-section-title text-[var(--brand-orange)]">
                                        Email
                                    </h2>
                                    <div className="portfolio-actions flex flex-wrap gap-4 mt-2">
                                        <a
                                            className="portfolio-btn flex items-center px-8 py-3 justify-center rounded-full bg-[var(--brand-orange)] font-semibold uppercase tracking-[0.08em] text-[white] transition-all hover:scale-105 hover:-translate-y-0.5 active:scale-95 shadow-sm"
                                            href="mailto:gabonjohngabriel@gmail.com"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            gabonjohngabriel@gmail.com
                                        </a>
                                    </div>
                                </div>

                                {/* SOCIALS */}
                                <div className="portfolio-section-block">
                                    <h2 className="portfolio-section-title text-[var(--brand-orange)]">
                                        Social Networks
                                    </h2>
                                    <div className="portfolio-stack-grid flex flex-wrap mt-4">
                                        {socials.map((social) => (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="portfolio-stack-item flex flex-col items-center group cursor-pointer">
                                                <div className="relative transition-transform duration-300 ease-out group-hover:scale-110">
                                                    <Image
                                                        src={social.src}
                                                        alt={`${social.label} icon`}
                                                        width={48}
                                                        height={48}
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <p className="text-center text-[12px] md:text-[14px] tracking-[-0.5px] text-[#001524] font-regular mt-1">
                                                    {social.label}
                                                </p>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* RIGHT PANEL - Services Visual Graphic Column */}
                        <RightPanel
                            sections={contactMediaSections}
                            arrowSize={48}
                        />
                    </div>
                </div>
            </PageCard>
        </div>
    );
}
