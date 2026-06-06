import Image from "next/image";
import {
    PageCard,
    PageNav,
    MediaPanel,
    type MediaSection,
} from "../../_components";
import { organizations, experiences, socials } from "../../_lib";

/* Organizations & Involvement Page */
export default function Orgs() {
    const orgsMediaSections: MediaSection[] = [
        {
            imageSrc: "/about_image.svg",
            alt: "John Gabriel Gabon profile graphic illustration",
            bgColor: "#ff7d00", // Orange
            number: "01",
            label: "About",
            iconSrc: "/mdi_about.svg",
            priority: true,
        },
    ];

    return (
        <div className="portfolio-viewport select-none">
            <PageCard>
                <div className="portfolio-card-shell relative">
                    <div className="portfolio-card-grid">
                        {/* LEFT PANEL */}
                        <div className="portfolio-left-panel">
                            {/* HEADER */}
                            <PageNav activePage="about" />

                            {/* MAIN CONTENT */}
                            <div className="portfolio-main-copy portfolio-scroll-area">
                                {/* EXPERIENCE SECTION */}
                                <div className="portfolio-section-block">
                                    <h2 className="portfolio-section-title text-[#ff7d00]">
                                        Experiences
                                    </h2>

                                    {/* GRID */}
                                    <div className="portfolio-org-grid flex flex-wrap">
                                        {experiences.map((experience) => (
                                            <div
                                                key={experience.position}
                                                className="portfrolio-org-cad items-start justify-center bg-[#ff7d00] shadow-sm hover:-translate-y-1 transition-all duration-300 ease-out p-6 rounded-2xl">
                                                {/* POSITION  */}
                                                <h2 className="text-left leading-[1.25] text-[14px]  text-[#ffffff]">
                                                    {experience.position}
                                                </h2>

                                                {/* ORGANIZATION */}
                                                <p className="text-left leading-[1.25] text-[12px] text-[#ffffff]/90 whitespace-pre-line font-regular">
                                                    {Array.isArray(
                                                        experience.organization,
                                                    )
                                                        ? experience.organization.join(
                                                              "\n\n",
                                                          )
                                                        : experience.organization}
                                                </p>
                                                {/* ORGANIZATION */}
                                                <p className="text-left leading-[1.25] text-[12px] text-[#ffffff]/90 whitespace-pre-line font-regular">
                                                    {experience.date}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* ORGANIZATIONS & INVOLVEMENT SECTION */}
                                <div className="portfolio-section-block">
                                    <h2 className="portfolio-section-title text-[#ff7d00]">
                                        Organizations & Involvement
                                    </h2>

                                    {/* GRID */}
                                    <div className="portfolio-org-grid flex flex-wrap">
                                        {organizations.map((org) => (
                                            <div
                                                key={org.label}
                                                className="portfolio-org-card items-start justify-center bg-[#ff7d00] shadow-sm hover:-translate-y-1 transition-all duration-300 ease-out p-6 rounded-2xl">
                                                {/* ORG NAME */}
                                                <h2 className="text-left leading-[1.1] text-[16px] sm:text-[18px] text-[#ffffff] mt-2">
                                                    {org.label}
                                                </h2>

                                                {/* POSITION */}
                                                <p className="text-left leading-[1] text-[12px] sm:text-[14px] text-[#ffffff]/90 whitespace-pre-line font-regular">
                                                    {Array.isArray(org.position)
                                                        ? org.position.join(
                                                              "\n\n",
                                                          )
                                                        : org.position}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* SOCIALS SECTION */}
                                <div className="portfolio-section-block">
                                    <h2 className="portfolio-section-title text-[#ff7d00]">
                                        Socials
                                    </h2>

                                    {/* GRID */}
                                    <div className="portfolio-stack-grid flex flex-wrap">
                                        {socials.map((social) => (
                                            <a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="portfolio-stack-item mt-2 flex flex-col items-center group cursor-pointer">
                                                {/* ICON */}
                                                <div className="relative transition-transform duration-300 ease-out group-hover:scale-110">
                                                    <Image
                                                        src={social.src}
                                                        alt={`${social.label} icon`}
                                                        width={48}
                                                        height={48}
                                                        className="object-contain"
                                                    />
                                                </div>

                                                {/* LABEL */}
                                                <p className="text-center text-[12px] md:text-[14px] tracking-[-0.5px] text-[#001524] font-regular">
                                                    {social.label}
                                                </p>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT PANEL */}
                        <MediaPanel
                            sections={orgsMediaSections}
                            arrowSize={48}
                        />
                    </div>
                </div>
            </PageCard>
        </div>
    );
}
