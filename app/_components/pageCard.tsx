import type { ReactNode } from "react";
import { ViewTransition } from "react";

export function PageCard({ children }: { children: ReactNode }) {
    return (
        <ViewTransition
            name="portfolio-page-card"
            share={{
                "nav-forward": "page-card-forward",
                "nav-back": "page-card-back",
                default: "none",
            }}>
            {children}
        </ViewTransition>
    );
}
