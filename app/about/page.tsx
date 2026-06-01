import Link from "next/link";
import { PageCard } from "../components/pageCard";
import { PageNav } from "../components/pageNav";
import { MediaPanel, MediaSection } from "../components/mediaPanel";
import { TechStackGrid } from "../components/techStackGrid";
import {
  languages,
  frameworksAndLibraries,
  tools,
} from "../data/portfolioData";

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
    <div className="portfolio-viewport">
      <PageCard>
        <div className="portfolio-card-shell relative">
          {/* FLOATING NEXT PAGE ARROW */}
          <div className="hidden lg:flex absolute right-[47.5%] top-1/2 -translate-y-1/2 z-40 items-center justify-end pointer-events-none">
            <Link href="/about/orgs" transitionTypes={["nav-forward"]}>
              <div
                className="pointer-events-auto mr-6 cursor-pointer hover:scale-110 active:scale-95 transition-transform duration-300 flex items-center justify-center rounded-full shadow-lg"
                style={{
                  width: "36px",
                  height: "36px",
                  backgroundColor: "var(--brand-orange)",
                  maskImage: "url('/icon-park-solid_right-c.svg')",
                  WebkitMaskImage: "url('/icon-park-solid_right-c.svg')",
                  maskSize: "contain",
                  WebkitMaskSize: "contain",
                  maskRepeat: "no-repeat",
                  WebkitMaskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskPosition: "center",
                }}
                aria-label="View Organizations and Involvement"
              />
            </Link>
          </div>

          <div className="portfolio-card-grid">
            {/* LEFT PANEL */}
            <div className="portfolio-left-panel">
              {/* NAV */}
              <PageNav backHref="/" activePage="about" />

              {/* Scrollable Main Content Container
                  This container is styled to handle text overflow gracefully on smaller heights. */}
              <div className="portfolio-main-copy portfolio-scroll-area">
                {/* HEADINGS */}
                <h1 className="portfolio-about-title text-[#001524] select-none">
                  <span className="block text-[var(--brand-orange)]">
                    John Gabriel
                  </span>
                  <span className="block text-[var(--brand-orange)]">
                    Gabon
                  </span>
                </h1>

                {/* DETAILS */}
                <p className="portfolio-copy max-w-xl text-[#001524] mt-4 text-[14px] sm:text-[16px]">
                  Bachelor of Science in Information Technology
                  <br />
                  <span className="text-[12px] sm:text-[14px] text-[#001524] italic">
                    Bulacan State University - Malolos Campus
                  </span>
                </p>

                {/* BUTTONS */}
                <div className="portfolio-actions flex flex-wrap gap-4 mt-4">
                  <a
                    className="flex items-center justify-center rounded-full bg-[#ff7d00] px-8 py-3 text-[12px] font-bold uppercase tracking-[0.6px] text-white transition-all hover:scale-105 hover:-translate-y-0.5 active:scale-95 shadow-sm"
                    href="/misc/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </a>
                  <a
                    className="flex items-center justify-center rounded-full bg-[#001524] px-8 py-3 text-[12px] font-bold uppercase tracking-[0.6px] text-white transition-all hover:scale-105 hover:-translate-y-0.5 active:scale-95 shadow-sm"
                    href="https://www.linkedin.com/in/gabrielgabon/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Linkedin
                  </a>
                </div>

                {/* TECHNICAL SKILLS SECTION */}
                <div className="portfolio-section-block">
                  <h2 className="portfolio-section-title text-[#ff7d00] select-none">
                    Technical Skills
                  </h2>

                  {/* LANGUAGES */}
                  <TechStackGrid subtitle="Languages" items={languages} />

                  {/* FRAMEWORKS, LIBRARIES, & DATABASES */}
                  <TechStackGrid
                    subtitle="Frameworks, Libraries, & Databases"
                    items={frameworksAndLibraries}
                  />

                  {/* TOOLS & PLATFORMS */}
                  <TechStackGrid subtitle="Tools & Platforms" items={tools} />
                </div>

                {/* MOBILE ONLY */}
                <div className="lg:hidden mt-8 pt-4 border-t border-[#001524]/10 text-right">
                  <Link
                    href="/about/orgs"
                    transitionTypes={["nav-forward"]}
                    className="inline-flex items-center gap-2 text-[var(--brand-orange)] font-bold uppercase tracking-[0.05em] text-[14px] hover:translate-x-1 transition-transform"
                  >
                    Organizations & Involvement &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL - Unified Visual Graphic Column */}
            <MediaPanel sections={aboutMediaSections} arrowSize={48} />
          </div>
        </div>
      </PageCard>
    </div>
  );
}
