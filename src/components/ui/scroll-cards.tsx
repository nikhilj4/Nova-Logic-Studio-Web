"use client";
import { FC } from "react";

import Image from "next/image";

// Types
interface iCardItem {
    title: string;
    description: string;
    tag: string;
    src: string;
    link: string;
    color: string;
    textColor: string;
}

interface iCardProps extends Omit<iCardItem, "src" | "link" | "tag"> {
    i: number;
    src: string;
}

// Components
const Card: FC<iCardProps> = ({
    title,
    description,
    color,
    textColor,
    src,
}) => {
    return (
        <div className="h-screen flex items-center justify-center sticky top-0 md:p-0 px-4">
            <div
                className="relative flex h-[50vh] md:h-[80vh] w-[90vw] md:w-[90vw] max-w-7xl
				mx-auto overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-zinc-950
				shadow-[0_20px_50px_rgba(0,0,0,0.7),0_10px_20px_rgba(0,0,0,0.5),0_0_100px_rgba(255,255,255,0.1)]
				hover:shadow-[0_30px_60px_rgba(0,0,0,0.8),0_15px_30px_rgba(0,0,0,0.6),0_0_120px_rgba(255,255,255,0.15)]
				transition-shadow duration-500"
            >
                {/* Background Image - Full Visible */}
                <div className="absolute inset-0 z-0">
                    <Image
                        className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                        src={src}
                        alt={title}
                        fill
                    />
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                {/* Text Overlay - Bottom Positioned, Responsive */}
                <div className="relative z-10 w-full h-full flex flex-col justify-end px-4 py-4 md:px-8 md:py-8 lg:px-12 lg:py-10 pointer-events-none">
                    <div className="pointer-events-auto max-w-2xl">
                        <span className="block font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl mb-2 md:mb-4 leading-tight drop-shadow-lg text-left">
                            <span
                                style={{ color: textColor }}
                            >
                                {title}
                            </span>
                        </span>
                        <div
                            className="text-xs sm:text-sm md:text-base lg:text-xl font-medium text-left mb-3 md:mb-6 block drop-shadow-lg line-clamp-2 md:line-clamp-3"
                            style={{ lineHeight: 1.4, color: textColor }}
                        >
                            {description}
                        </div>

                        <button className="px-4 py-1.5 sm:px-5 sm:py-2 md:px-6 md:py-2.5 bg-white text-black font-semibold rounded-full text-xs sm:text-sm md:text-base hover:bg-gray-200 transition-colors shadow-lg">
                            View Case Study
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

/**
 * CardSlide component displays a series of cards in a vertical scroll layout
 * Each card contains a title, description, and decorative elements
 */
interface iCardSlideProps {
    items: iCardItem[];
}

const CardsParallax: FC<iCardSlideProps> = ({ items }) => {
    return (
        <div className="min-h-screen pb-20">
            {items.map((project, i) => {
                return <Card key={`p_${i}`} {...project} i={i} />;
            })}
        </div>
    );
};

export { CardsParallax, type iCardItem };
