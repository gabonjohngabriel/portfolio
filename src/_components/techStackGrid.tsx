import Image from "next/image";
import { SkillItem } from "@/_lib/portfolioData";

export interface TechStackGridProps {
    subtitle?: string;
    items: SkillItem[];
}

export function TechStackGrid({ subtitle, items }: TechStackGridProps) {
    return (
        <div className="mt-2">
            {/* CATEGORY */}
            {subtitle && (
                <p className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#001524]/60">
                    {subtitle}
                </p>
            )}

            {/* GRID */}
            <div className="portfolio-stack-grid flex flex-wrap mt-2">
                {items.map((item) => (
                    <div
                        key={item.label}
                        className="portfolio-stack-item flex flex-col items-center group cursor-default">
                        {/* IMAGE */}
                        <div className="relative transition-transform duration-300 ease-out group-hover:scale-110">
                            <Image
                                src={item.src}
                                alt={`${item.label} logo`}
                                width={48}
                                height={48}
                                className="object-contain"
                            />
                        </div>

                        {/* LABEL */}
                        <p className="text-center text-[12px] md:text-[14px] tracking-[-0.5px] text-[#001524]">
                            {item.label}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
