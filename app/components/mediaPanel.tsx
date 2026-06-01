import Image from "next/image";
import Link from "next/link";

export interface MediaSection {
  imageSrc: string;
  alt: string;
  bgColor: string;
  number: string;
  label: string;
  iconSrc: string;
  linkHref?: string;
  priority?: boolean;
}

interface MediaPanelProps {
  /**
   * The list of media sections to render in the panel.
   * If there are multiple items, they will automatically split into equal rows (e.g., Home Page).
   * If there is a single item, it will span the full height (e.g., About and Orgs Pages).
   */
  sections: MediaSection[];
  /**
   * Custom className to extend styling (e.g., portfolio-media-stack-home).
   */
  className?: string;
  /**
   * Size of the right-hand action arrow. Defaults to 48.
   */
  arrowSize?: number;
}

/**
 * MediaPanel - Renders the graphical visual panel of the portfolio.
 * Optimized with Next.js Image component and optional View Transitions for seamless page routing.
 */
export function MediaPanel({
  sections,
  className = "",
  arrowSize = 48,
}: MediaPanelProps) {
  const isHome = sections.length > 1;

  return (
    <div
      className={`portfolio-media-stack ${isHome ? "portfolio-media-stack-home" : ""} ${className}`}
    >
      {sections.map((sec, idx) => {
        // Inner content card rendering
        const content = (
          <div className="relative h-full w-full group overflow-hidden">
            {/* Background Image */}
            <Image
              src={sec.imageSrc}
              alt={sec.alt}
              fill
              className="object-cover object-[center_25%] transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(min-width: 1024px) 629px, 100vw"
              priority={sec.priority ?? true}
            />

            {/* Overlap Gradient Overlay for a polished look */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-60 pointer-events-none" />

            {/* Panel Footer Labels */}
            <div className="portfolio-media-labels absolute inset-x-0 bottom-0 flex items-end justify-between z-10">
              {/* Left Group: Icon + Number & Text Label */}
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

              {/* Right Group: Action Circle Arrow */}
              <Image
                src="/icon-park-solid_right-c.svg"
                alt="Navigate Arrow"
                priority={sec.priority ?? true}
                className="portfolio-media-arrow transition-transform duration-300 ease-out group-hover:translate-x-1"
                height={arrowSize}
                width={arrowSize}
              />
            </div>
          </div>
        );

        return (
          <div
            key={sec.label}
            className="relative w-full h-full"
            style={{ backgroundColor: sec.bgColor }}
          >
            {sec.linkHref ? (
              <Link
                href={sec.linkHref}
                transitionTypes={["nav-forward"]}
                className="block h-full w-full"
              >
                {content}
              </Link>
            ) : (
              content
            )}
          </div>
        );
      })}
    </div>
  );
}
