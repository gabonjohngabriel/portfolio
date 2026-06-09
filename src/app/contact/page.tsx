import Image from "next/image";
import {
    PageCard,
    PageNav,
    MediaSmallPanel,
    type MediaSmallPanelSection,
} from "@/_components";
import { socials } from "@/_lib";

/* Contact Page */
export default function Contact() {
    const contactMediaSections: MediaSmallPanelSection[] = [
        {
            imageSrc: "",
            alt: "Contact section graphic",
            bgColor: "#ff7d00", // Brand Orange
            number: "04",
            label: "contact",
            iconSrc: "/dashicons_portfolio.svg",
            priority: true,
        },
    ];

    const orderedSocials = [
        socials.find((s) => s.label === "GitHub"),
        socials.find((s) => s.label === "Facebook"),
        socials.find((s) => s.label === "LinkedIn"),
    ].filter(Boolean) as typeof socials;

    return (
        <div className="portfolio-viewport select-none">
            <PageCard>
                <div className="portfolio-card-shell">
                    <div className="portfolio-card-grid__no-text">
                        {/* LEFT PANEL */}
                        <div className="portfolio-left-panel order-2 lg:order-1">
                            {/* NAV */}
                            <PageNav activePage="contact" />

                            {/* Scrollable Main Content */}
                            <div className="portfolio-main-copy portfolio-main-copy-contact portfolio-scroll-area">
                                {/* TITLE */}
                                <div className="flex items-center gap-4 sm:gap-6 lg:mt-8 mt-2">
                                    <Image
                                        src="/mynaui_send.svg"
                                        alt="Send icon"
                                        width={80}
                                        height={80}
                                        className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain shrink-0"
                                        priority
                                    />
                                    <h1 className="portfolio-services-title leading-[0.9] tracking-[-0.03em]">
                                        <span className="block text-[var(--brand-orange)]">
                                            Let's Start
                                        </span>
                                        <span className="block text-[#001524]">
                                            Your Project
                                        </span>
                                    </h1>
                                </div>

                                {/* SUBTITLE */}
                                <span className="portfolio-services-copy text-[#001524]/90 max-w-[480px] w-full leading-[1.45] mt-4">
                                    <p>
                                        Bring your ideas and concepts into
                                        reality! Feel free to reach out to me
                                        directly or connect through my socials.
                                    </p>
                                    <br />
                                    <p>
                                        Currently, I am not available due to
                                        academic reasons. If you&apos;re decided
                                        to contact me, please leave a message
                                        and I&apos;ll get back to you as soon as
                                        possible.
                                    </p>
                                </span>

                                {/* CONTACT DETAILS (EMAIL & SOCIALS) */}
                                <div className="grid grid-cols-2 gap-8 mt-4">
                                    {/* EMAIL CONTACT */}
                                    <div className="flex flex-col">
                                        <h2 className="portfolio-section-title text-[var(--brand-orange)]">
                                            Email
                                        </h2>
                                        <div className="mt-2 text-[#001524] leading-[1.25] text-[12px] sm:text-[14px] break-words">
                                            <a
                                                href="mailto:gabonjohngabriel@gmail.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-[var(--brand-orange)] transition-colors">
                                                gabonjohngabriel
                                                <span className="block">
                                                    @gmail.com
                                                </span>
                                            </a>
                                        </div>
                                    </div>

                                    {/* SOCIALS */}
                                    <div className="flex flex-col">
                                        <h2 className="portfolio-section-title text-[var(--brand-orange)] ">
                                            Socials
                                        </h2>
                                        <div className="flex items-center gap-2 mt-2">
                                            {orderedSocials.map((social) => (
                                                <a
                                                    key={social.label}
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hover:scale-110 active:scale-95 transition-transform duration-200"
                                                    aria-label={social.label}>
                                                    <Image
                                                        src={social.src}
                                                        alt={`${social.label} icon`}
                                                        width={36}
                                                        height={36}
                                                        className="object-contain"
                                                    />
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* RIGHT PANEL - Services Visual Graphic Column */}
                        <MediaSmallPanel
                            className="portfolio-media-stack-hide order-1 lg:order-2 min-h-[300px] lg:min-h-0 mb-8 lg:mb-0 rounded-t-[24px] lg:rounded-none overflow-hidden shrink-0"
                            sections={contactMediaSections}
                            arrowSize={48}
                        />
                    </div>
                </div>
            </PageCard>
        </div>
    );
}
