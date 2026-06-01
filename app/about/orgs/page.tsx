import Image from "next/image";
import { PageCard } from "../../components/pageCard";
import { PageNav } from "../../components/pageNav";
import { MediaPanel, MediaSection } from "../../components/mediaPanel";
import { organizations, socials } from "../../data/portfolioData";

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
    <div className="portfolio-viewport">
      <PageCard>
        <div className="portfolio-card-shell relative">
          <div className="portfolio-card-grid">
            {/* LEFT PANEL */}
            <div className="portfolio-left-panel">
              {/* HEADER */}
              <PageNav backHref="/about" activePage="about" />

              {/* Scrollable Main Content Container */}
              <div className="portfolio-main-copy portfolio-scroll-area">
                {/* ORGANIZATIONS & INVOLVEMENT SECTION */}
                <div className="portfolio-section-block">
                  <h2 className="portfolio-section-title text-[#ff7d00] select-none">
                    Organizations & Involvement
                  </h2>

                  {/* GRID */}
                  <div className="portfolio-org-grid flex flex-wrap">
                    {organizations.map((org) => (
                      <div
                        key={org.label}
                        className="portfolio-org-card items-start justify-center bg-[#ff7d00] shadow-sm hover:-translate-y-1 transition-all duration-300 ease-out p-6 rounded-2xl select-none"
                      >
                        {/* Organization Name */}
                        <h2 className="text-left leading-[1.1] text-[16px] sm:text-[18px] text-[#ffffff] mt-2">
                          {org.label}
                        </h2>

                        {/* Position Description */}
                        <p className="text-left leading-normal text-[12px] sm:text-[14px] text-[#ffffff]/90 whitespace-pre-line font-regular">
                          {Array.isArray(org.position)
                            ? org.position.join("\n")
                            : org.position}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SOCIALS SECTION */}
                <div className="portfolio-section-block">
                  <h2 className="portfolio-section-title text-[#ff7d00] select-none">
                    Socials
                  </h2>

                  {/* Clickable interactive social networks grid */}
                  <div className="portfolio-stack-grid flex flex-wrap">
                    {socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-stack-item mt-2 flex flex-col items-center group cursor-pointer"
                      >
                        {/* Brand Icon with micro hover scaling animation */}
                        <div className="relative transition-transform duration-300 ease-out group-hover:scale-110">
                          <Image
                            src={social.src}
                            alt={`${social.label} icon`}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>

                        {/* Label */}
                        <p className="text-center text-[12px] md:text-[14px] tracking-[-0.5px] text-[#001524] select-none font-regular mt-1">
                          {social.label}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL - Unified Visual Graphic Column */}
            <MediaPanel sections={orgsMediaSections} arrowSize={48} />
          </div>
        </div>
      </PageCard>
    </div>
  );
}
