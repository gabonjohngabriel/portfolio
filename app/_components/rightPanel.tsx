import Image from "next/image";
import Link from "next/link";

export interface RightSection {
  alt: string;
  bgColor: string;
  number: string;
  label: string;
  iconSrc: string;
  linkHref?: string;
  priority?: boolean;
}

export interface RightPanelProps {
  sections: RightSection[];
  className?: string;
  arrowSize?: number;
}

export function RightPanel({
  sections,
  className = "",
  arrowSize = 48,
}: RightPanelProps) {
  const isHome = sections.length > 1;

  return (
    <div
      className={`portfolio-media-stack ${isHome ? "portfolio-media-stack-home" : ""} ${className}`}
    >
      {sections.map((sec, idx) => {
        // CARD
        const content = (
          <div className="relative h-full w-full group overflow-hidden">
            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-60 pointer-events-none" />

            {/* FOOTER LABELS */}
            <div className="portfolio-media-labels absolute inset-x-3 bottom-50 top-50 flex items-center justify-between z-10">
              {/* ICON, NUMBER, LABEL */}
              <div className="flex items-center gap-4 text-white">
                <Image
                  src={sec.iconSrc}
                  alt={sec.label}
                  priority={sec.priority ?? true}
                  height={72}
                  width={72}
                  className="portfolio-media-icon transition-transform duration-500 ease-out group-hover:-translate-y-1"
                />

                <div className="flex flex-col justify-center leading-none">
                  <h1 className="portfolio-media-number font-display">
                    {sec.number}
                  </h1>
                  <p className="portfolio-media-name font-bold uppercase tracking-[0.05em] text-[11px] sm:text-[14px]">
                    {sec.label}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
        // If linkHref is provided, wrap the content in a Link component for navigation
        return (
          <div
            key={sec.label}
            className="relative w-full h-full"
            style={{ backgroundColor: sec.bgColor }}
          >
            {/* LINK WRAPPER */}
            {sec.linkHref ? (
              <Link
                href={sec.linkHref}
                transitionTypes={["nav-forward"]}
                className="block h-full w-full"
              >
                {/* LINK CONTENT */}
                {content}
              </Link>
            ) : (
              // If no linkHref, just render the
              content
            )}
          </div>
        );
      })}
    </div>
  );
}
