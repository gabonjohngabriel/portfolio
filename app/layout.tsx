import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

// Fonts
import { Cal_Sans, Montserrat } from "next/font/google";

const amoria = localFont({
    src: "../public/fonts/AMORIA.otf",
    variable: "--font-amoria",
    display: "swap",
});

const calSans = Cal_Sans({
    variable: "--font-cal-sans",
    subsets: ["latin"],
    weight: "400",
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

import { ScrollAndSwipeNav } from "./_components";

// Metadata
export const metadata: Metadata = {
    title: "@lxaplace | Digital Solutions Through Innovation, Creativity, and AI",
    description: "Portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${calSans.variable} ${montserrat.variable} ${amoria.variable} h-full overflow-hidden antialiased`}>
            <body className="flex h-dvh min-h-dvh flex-col overflow-hidden">
                <ScrollAndSwipeNav />
                {children}
            </body>
        </html>
    );
}
