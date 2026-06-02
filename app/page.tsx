import Image from "next/image";
import {
  PageCard,
  PageNav,
  MediaPanel,
  type MediaSection,
} from "./_components";
import { featuredTechStacks } from "./_lib";

export default function Home() {
  const homeMediaSections: MediaSection[] = [
    {
      imageSrc: "/about_image.svg",
      alt: "About section graphic",
      bgColor: "#ff7d00",
      number: "01",
      label: "about",
      iconSrc: "/mdi_about.svg",
      linkHref: "/about",
      priority: true,
    },
    {
      imageSrc: "/services_image.svg",
      alt: "Services section graphic",
      bgColor: "#15616d",
      number: "02",
      label: "services",
      iconSrc: "/dashicons_portfolio.svg",
      linkHref: "/services",
      priority: true,
    },
  ];

  return (
    <div className="portfolio-viewport">
      <PageCard>
        <div className="portfolio-card-shell">
          <div className="portfolio-card-grid">
            {/* LEFT PANEL */}
            <div className="portfolio-left-panel">
              {/* NAV */}
              <PageNav activePage="home" />

              {/* MAIN */}
              <div className="portfolio-main-copy portfolio-main-copy-home">
                {/* TITLE */}
                <h1 className="portfolio-hero-title text-[#001524]">
                  <span className="block">Building Digital</span>
                  <span className="block relative z-0">Solutions</span>
                  <span className="relative z-10 flex items-center">
                    <span className="inline-flex items-center">
                      <Image
                        src="/through.svg"
                        alt="Through graphic element"
                        width={110}
                        height={65}
                        className="portfolio-through object-contain select-none"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="ml-2 text-[#ff7d00]">Innovation,</span>
                  </span>
                  <span className="relative z-20 block text-[#15616d]">
                    Creativity.
                  </span>
                </h1>

                {/* SUBTITLE */}
                <p className="portfolio-copy max-w-xl text-[#001524]/90 mt-4 leading-relaxed">
                  Providing full-stack web and mobile solutions and design
                  experience through innovation or SaaS.
                </p>

                {/* TECH STACKS */}
                <div className="portfolio-section-block">
                  <h2 className="portfolio-section-title text-[#ff7d00]">
                    Technical Skills
                  </h2>

                  {/* GRID LAYOUT */}
                  <div className="portfolio-stack-grid flex flex-wrap mt-4">
                    {featuredTechStacks.map((stack) => (
                      <div
                        key={stack.label}
                        className="portfolio-stack-item flex flex-col items-center group cursor-default"
                      >
                        <div className="relative transition-transform duration-750 cubic-bezier(0.68, -0.55, 0.265, 1.55) group-hover:scale-120">
                          <Image
                            src={stack.src}
                            alt={`${stack.label} logo`}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <p className="text-center text-[12px] md:text-[14px] tracking-[-0.5px] text-[#001524] select-none">
                          {stack.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="portfolio-actions flex flex-wrap gap-4 mt-4">
                <a
                  className="flex items-center justify-center rounded-full bg-[#ff7d00] px-8 py-3 text-[14px] font-bold uppercase tracking-[0.6px] text-white transition-all hover:scale-105 hover:-translate-y-0.5 shadow-sm active:scale-95"
                  href="#"
                >
                  Get Started
                </a>
                <a
                  className="flex items-center justify-center rounded-full bg-[#001524] px-8 py-3 text-[14px] font-bold uppercase tracking-[0.6px] text-white transition-all hover:scale-105 hover:-translate-y-0.5 shadow-sm active:scale-95"
                  href="#"
                >
                  View Works
                </a>
              </div>
            </div>

            {/* RIGHT PANEL - Double image media column */}
            <MediaPanel sections={homeMediaSections} />
          </div>
        </div>
      </PageCard>
    </div>
  );
}
