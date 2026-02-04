"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export type TimeLine_01Entry = {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    subtitle: string;
    description: string;
    items?: string[];
    image?: string;
    button?: {
        url: string;
        text: string;
    };
};

export interface TimeLine_01Props {
    title?: string;
    description?: string;
    entries?: TimeLine_01Entry[];
    className?: string;
}

/**
 * Behavior: Only the card that is currently centered in the viewport is "open".
 * As you scroll, the active card expands to reveal its full content. Others stay collapsed.
 */
export default function TimeLine_01({
    title = "Our Creative Portfolio",
    description = "Building high-performance solutions with modern serverless architecture.",
    entries = [],
}: TimeLine_01Props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Create stable setters for refs inside map
    const setItemRef = (el: HTMLDivElement | null, i: number) => {
        itemRefs.current[i] = el;
    };
    const setSentinelRef = (el: HTMLDivElement | null, i: number) => {
        sentinelRefs.current[i] = el;
    };

    useEffect(() => {
        if (!sentinelRefs.current.length) return;

        let frame = 0;
        const updateActiveByProximity = () => {
            frame = requestAnimationFrame(updateActiveByProximity);
            // Compute distance of each sentinel to viewport center
            const centerY = window.innerHeight / 2.5; // Slightly offset up for better trigger feel
            let bestIndex = 0;
            let bestDist = Infinity;
            sentinelRefs.current.forEach((node, i) => {
                if (!node) return;
                const rect = node.getBoundingClientRect();
                const mid = rect.top + rect.height / 2;
                const dist = Math.abs(mid - centerY);
                if (dist < bestDist) {
                    bestDist = dist;
                    bestIndex = i;
                }
            });
            if (bestIndex !== activeIndex) setActiveIndex(bestIndex);
        };

        frame = requestAnimationFrame(updateActiveByProximity);
        return () => cancelAnimationFrame(frame);
    }, [activeIndex]);

    // Optional: ensure the first card is active on mount
    useEffect(() => {
        setActiveIndex(0);
    }, []);

    return (
        <section className="py-20">
            <div className="container px-4">
                {(title || description) && (
                    <div className="mx-auto max-w-4xl text-center mb-16">
                        {title && (
                            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl text-white">
                                {title}
                            </h2>
                        )}
                        {description && (
                            <p className="text-base text-gray-400 md:text-lg max-w-2xl mx-auto">
                                {description}
                            </p>
                        )}
                    </div>
                )}

                <div className="mx-auto max-w-4xl space-y-16 md:space-y-24">
                    {entries.map((entry, index) => {
                        const isActive = index === activeIndex;

                        return (
                            <div
                                key={index}
                                className="relative flex flex-col gap-6 md:flex-row md:gap-10"
                                ref={(el) => setItemRef(el, index)}
                                aria-current={isActive ? "true" : "false"}
                            >
                                {/* Sticky meta column */}
                                <div className="flex-shrink-0 md:w-64 md:sticky md:top-32 h-min">
                                    <div className="flex items-center gap-4 md:gap-3">
                                        <div className={`p-3 rounded-xl transition-colors duration-300 ${isActive ? "bg-white text-black" : "bg-white/10 text-gray-400"
                                            }`}>
                                            <entry.icon className="h-5 w-5" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className={`text-sm font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-400'}`}>
                                                {entry.title.split('|')[0].trim()}
                                            </span>
                                            <span className="text-xs text-gray-500 mt-0.5">
                                                {entry.subtitle}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Invisible sentinel */}
                                <div
                                    ref={(el) => setSentinelRef(el, index)}
                                    aria-hidden
                                    className="absolute -top-32 left-0 h-20 w-full opacity-0 pointer-events-none"
                                />

                                {/* Content column */}
                                <article
                                    className={
                                        "flex-1 flex flex-col rounded-3xl border transition-all duration-500 " +
                                        (isActive
                                            ? "border-white/20 bg-white/5 shadow-2xl scale-100 opacity-100"
                                            : "border-transparent bg-transparent opacity-60 scale-95")
                                    }
                                >
                                    <div className={"overflow-hidden rounded-t-3xl transition-all duration-500 " + (isActive ? "h-64 md:h-80" : "h-32 md:h-40 grayscale opacity-50")}>
                                        {entry.image && (
                                            <img
                                                src={entry.image}
                                                alt={`${entry.title} visual`}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        )}
                                    </div>

                                    <div className="p-6 md:p-8 space-y-6">
                                        <div className="space-y-3">
                                            <h2
                                                className={
                                                    "text-xl md:text-2xl font-bold leading-tight transition-colors duration-200 " +
                                                    (isActive ? "text-white" : "text-gray-400")
                                                }
                                            >
                                                {entry.title.split('|')[1] ? entry.title.split('|')[1].trim() : entry.title}
                                            </h2>

                                            <p
                                                className={
                                                    "text-sm leading-relaxed md:text-base text-gray-400"
                                                }
                                            >
                                                {entry.description}
                                            </p>
                                        </div>

                                        <div
                                            aria-hidden={!isActive}
                                            className={
                                                "grid transition-all duration-500 ease-out " +
                                                (isActive
                                                    ? "grid-rows-[1fr] opacity-100 pt-2"
                                                    : "grid-rows-[0fr] opacity-0")
                                            }
                                        >
                                            <div className="overflow-hidden">
                                                {entry.items && entry.items.length > 0 && (
                                                    <div className="rounded-xl border border-white/10 bg-black/40 p-5">
                                                        <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Highlights</h4>
                                                        <ul className="space-y-3">
                                                            {entry.items.map((item, itemIndex) => (
                                                                <li
                                                                    key={itemIndex}
                                                                    className="flex items-start gap-3 text-sm text-gray-300"
                                                                >
                                                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-white flex-shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                                                                    <span className="leading-relaxed">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}

                                                {entry.button && (
                                                    <div className="flex justify-end mt-6">
                                                        <Button
                                                            variant="default"
                                                            size="sm"
                                                            className="group font-medium transition-all duration-200 rounded-full px-6"
                                                            asChild
                                                        >
                                                            <a href={entry.button.url} target="_blank" rel="noreferrer">
                                                                {entry.button.text}
                                                                <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                                            </a>
                                                        </Button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
