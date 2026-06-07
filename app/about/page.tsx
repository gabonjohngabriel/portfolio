import Link from "next/link";
import {
    PageCard,
    PageNav,
    MediaPanel,
    type MediaSection,
    TechStackGrid,
} from "../_components";
import { languages, frameworksAndLibraries, tools } from "../_lib";

/* About Page */
export default function About() {
    const aboutMediaSections: MediaSection[] = [
        {
            imageSrc: "/about_image.svg",
            alt: "John Gabriel Gabon profile graphic illustration",
            bgColor: "#ff7d00",
            number: "01",
            label: "about",
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
                        <div className="portfolio-left-panel order-2 lg:order-1">
                            {/* NAV */}
                            <PageNav activePage="about" />

                            {/* MAIN */}
                            <div className="portfolio-main-copy portfolio-scroll-area">
                                {/* HEADINGS */}
                                <h1 className="portfolio-about-title lg:mt-8 mt-10 text-[#001524]">
                                    <span className="block text-[var(--brand-orange)]">
                                        John Gabriel
                                    </span>
                                    <span className="block text-[var(--brand-orange)]">
                                        Gabon
                                    </span>
                                </h1>

                                {/* DETAILS */}
                                <p className="portfolio-copy max-w-xl text-[#001524]">
                                    2nd Year BSIT Student
                                    <br />
                                    <span className="text-[12px] text-[#001524] italic">
                                        Aspiring Software Engineer / Full Stack
                                        Developer / UI/UX Designer
                                    </span>
                                </p>

                                {/* BUTTONS */}
                                <div className="portfolio-actions flex flex-wrap">
                                    <a
                                        className="portfolio-btn flex items-center justify-center rounded-full bg-[#ff7d00] px-8 py-3 text-[14px] font-semibold uppercase tracking-[0.6px] text-white transition-all hover:scale-105 hover:-translate-y-0.5 active:scale-95 "
                                        href="/misc/Resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        Download CV
                                    </a>
                                    <a
                                        className="portfolio-btn flex items-center justify-center rounded-full bg-[#001524] px-8 py-3 text-[14px] font-semibold uppercase tracking-[0.6px] text-white transition-all hover:scale-105 hover:-translate-y-0.5 active:scale-95 "
                                        href="https://www.linkedin.com/in/gabrielgabon/"
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        View Linkedin
                                    </a>
                                </div>

                                {/* TECHNICAL SKILLS SECTION */}
                                <div className="portfolio-section-block">
                                    <h2 className="portfolio-section-title text-[#ff7d00]">
                                        Technical Skills
                                    </h2>

                                    {/* LANGUAGES */}
                                    <TechStackGrid
                                        subtitle="Languages"
                                        items={languages}
                                    />

                                    {/* FRAMEWORKS, LIBRARIES, & DATABASES */}
                                    <TechStackGrid
                                        subtitle="Frameworks, Libraries, & Databases"
                                        items={frameworksAndLibraries}
                                    />

                                    {/* TOOLS & PLATFORMS */}
                                    <TechStackGrid
                                        subtitle="Tools & Platforms"
                                        items={tools}
                                    />
                                </div>
                            </div>

                            {/* NEXT BUTTON */}
                            <div className="mt-4 text-right">
                                <Link
                                    href="/about/orgs"
                                    transitionTypes={["nav-forward"]}
                                    className="inline-flex items-center gap-2 text-[var(--brand-orange)] font-semibold uppercase tracking-[0.05em] text-[12px] hover:translate-x-1 transition-transform">
                                    Experiences, Orgs, & Socials &rarr;
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT PANEL */}
                        <MediaPanel
                            className="portfolio-media-stack-hide order-1 lg:order-2 min-h-[300px] lg:min-h-0 mb-8 lg:mb-0 rounded-t-[24px] lg:rounded-none overflow-hidden shrink-0"
                            sections={aboutMediaSections}
                            arrowSize={48}
                        />
                    </div>
                </div>
            </PageCard>
        </div>
    );
}
