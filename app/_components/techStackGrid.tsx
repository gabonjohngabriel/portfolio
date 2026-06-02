import Image from "next/image";
import { SkillItem } from "../_lib/portfolioData";

export interface TechStackGridProps {
  subtitle?: string;
  items: SkillItem[];
}

export function TechStackGrid({ subtitle, items }: TechStackGridProps) {
  return (
    <div className="portfolio-section-block">
      {/* CATEGORY */}
      {subtitle && (
        <p className="portfolio-copy max-w-xl text-[#001524] mb-4 select-none">
          {subtitle}
        </p>
      )}

      {/* Grid container with wrap support */}
      <div className="portfolio-stack-grid flex flex-wrap">
        {items.map((item) => (
          <div
            key={item.label}
            className="portfolio-stack-item flex flex-col items-center group cursor-default"
          >
            {/* Logo Container with hover micro-animation scaling */}
            <div className="relative transition-transform duration-300 ease-out group-hover:scale-110">
              <Image
                src={item.src}
                alt={`${item.label} logo`}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            {/* Label below the icon */}
            <p className="text-center text-[12px] md:text-[14px] tracking-[-0.5px] text-[#001524] select-none mt-1">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
