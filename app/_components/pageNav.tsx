import Link from "next/link";

export interface PageNavProps {
    activePage: string;
}

export function PageNav({ activePage }: PageNavProps) {
    return (
        <nav className="portfolio-page-nav flex justify-between text-[#001524] font-sans">
            <Link
                href={"/"}
                transitionTypes={["nav-back"]}
                className={`hover:opacity-75 transition-opacity ${activePage === "home" ? "opacity-50" : ""}`}>
                home
            </Link>
            <Link
                href={"/about"}
                transitionTypes={["nav-forward"]}
                className={`hover:opacity-75 transition-opacity ${activePage === "about" ? "opacity-50" : ""}`}>
                about
            </Link>
            <Link
                href={"/services"}
                transitionTypes={["nav-forward"]}
                className={`hover:opacity-75 transition-opacity ${activePage === "services" ? "opacity-50" : ""}`}>
                services
            </Link>
            <Link
                href={"/services/works"}
                transitionTypes={["nav-forward"]}
                className={`hover:opacity-75 transition-opacity ${activePage === "works" ? "opacity-50" : ""}`}>
                works
            </Link>
            <Link
                href={"/contact"}
                transitionTypes={["nav-forward"]}
                className={`hover:opacity-75 transition-opacity ${activePage === "contact" ? "opacity-50" : ""}`}>
                contact
            </Link>
        </nav>
    );
}
