"use client";

import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

const PAGE_ORDER = [
    "/",
    "/about",
    "/about/orgs",
    "/services",
    "/services/works",
    "/contact",
];

export function ScrollAndSwipeNav() {
    const router = useRouter();
    const pathname = usePathname();
    const isNavigatingRef = useRef(false);
    const lastNavTimeRef = useRef(0);
    const touchStartRef = useRef({ x: 0, y: 0, time: 0 });

    useEffect(() => {
        isNavigatingRef.current = false;
    }, [pathname]);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            const now = Date.now();
            if (
                isNavigatingRef.current ||
                now - lastNavTimeRef.current < 1200
            ) {
                return;
            }

            const deltaY = e.deltaY;
            if (Math.abs(deltaY) < 15) return;

            let target = e.target as HTMLElement | null;
            let scrollableContainerFound = false;

            while (
                target &&
                target !== document.body &&
                target !== document.documentElement
            ) {
                const style = window.getComputedStyle(target);
                const overflowY = style.overflowY;
                const isScrollable =
                    (overflowY === "auto" || overflowY === "scroll") &&
                    target.scrollHeight > target.clientHeight;

                if (isScrollable) {
                    if (deltaY > 0) {
                        if (
                            target.scrollTop <
                            target.scrollHeight - target.clientHeight - 4
                        ) {
                            scrollableContainerFound = true;
                            break;
                        }
                    } else {
                        if (target.scrollTop > 4) {
                            scrollableContainerFound = true;
                            break;
                        }
                    }
                }
                target = target.parentElement;
            }

            if (scrollableContainerFound) {
                return;
            }

            const currentIndex = PAGE_ORDER.indexOf(pathname);
            if (currentIndex === -1) return;

            // SCROLL DOWN
            if (deltaY > 0) {
                if (currentIndex < PAGE_ORDER.length - 1) {
                    e.preventDefault();
                    isNavigatingRef.current = true;
                    lastNavTimeRef.current = now;
                    router.push(PAGE_ORDER[currentIndex + 1], {
                        transitionTypes: ["nav-forward"],
                    });
                }
            } else if (deltaY < 0) {
                // SCROLL UP
                if (currentIndex > 0) {
                    e.preventDefault();
                    isNavigatingRef.current = true;
                    lastNavTimeRef.current = now;
                    router.push(PAGE_ORDER[currentIndex - 1], {
                        transitionTypes: ["nav-back"],
                    });
                }
            }
        };

        // SWIPE
        const handleTouchStart = (e: TouchEvent) => {
            if (e.touches.length !== 1) return;
            const touch = e.touches[0];
            touchStartRef.current = {
                x: touch.clientX,
                y: touch.clientY,
                time: Date.now(),
            };
        };

        const handleTouchEnd = (e: TouchEvent) => {
            const now = Date.now();
            if (
                isNavigatingRef.current ||
                now - lastNavTimeRef.current < 1000
            ) {
                return;
            }

            if (e.changedTouches.length !== 1) return;
            const touch = e.changedTouches[0];
            const start = touchStartRef.current;

            const diffX = touch.clientX - start.x;
            const diffY = touch.clientY - start.y;
            const duration = now - start.time;

            if (duration > 350) return;
            if (Math.abs(diffX) < 60) return;
            // Swipe must be primarily horizontal
            if (Math.abs(diffX) < Math.abs(diffY) * 1.5) return;

            const currentIndex = PAGE_ORDER.indexOf(pathname);
            if (currentIndex === -1) return;

            // SWIPE LEFT
            if (diffX < 0) {
                if (currentIndex < PAGE_ORDER.length - 1) {
                    isNavigatingRef.current = true;
                    lastNavTimeRef.current = now;
                    router.push(PAGE_ORDER[currentIndex + 1], {
                        transitionTypes: ["nav-forward"],
                    });
                }
            } else {
                // SWIPE RIGHT
                if (currentIndex > 0) {
                    isNavigatingRef.current = true;
                    lastNavTimeRef.current = now;
                    router.push(PAGE_ORDER[currentIndex - 1], {
                        transitionTypes: ["nav-back"],
                    });
                }
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchstart", handleTouchStart, {
            passive: true,
        });
        window.addEventListener("touchend", handleTouchEnd, { passive: true });

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchend", handleTouchEnd);
        };
    }, [pathname, router]);

    return null;
}
