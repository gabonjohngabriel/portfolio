import Link from "next/link";

export interface PageNavProps {
  backHref?: string;
  activePage: string;
}

export function PageNav({ backHref, activePage }: PageNavProps) {
  return (
    <nav className="portfolio-page-nav col-span-full grid grid-cols-3 items-center text-[#001524]">
      {/* LEFT */}
      <span className="font-amoria justify-self-start">
        {backHref ? (
          <Link
            href={backHref}
            transitionTypes={["nav-back"]}
            className="hover:opacity-75 transition-opacity"
          >
            back
          </Link>
        ) : (
          "menu"
        )}
      </span>

      {/* CENTER */}
      <span className="font-amoria justify-self-center select-none">
        {"</aplace>"}
      </span>

      {/* RIGHT */}
      <span className="font-amoria justify-self-end">{activePage}</span>
    </nav>
  );
}
