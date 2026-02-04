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
                className="relative flex h-[60vh] md:h-[80vh] w-[95vw] md:w-[90vw] max-w-7xl
				mx-auto overflow-hidden rounded-3xl border border-white/10 bg-zinc-950
				shadow-[0_20px_50px_rgba(0,0,0,0.7),0_10px_20px_rgba(0,0,0,0.5),0_0_100px_rgba(255,255,255,0.1)]
				hover:shadow-[0_30px_60px_rgba(0,0,0,0.8),0_15px_30px_rgba(0,0,0,0.6),0_0_120px_rgba(255,255,255,0.15)]
				transition-shadow duration-500"
            >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        src={src}
                        alt={title}
                        fill
                    />
                    {/* The Mask - Right 30% */}
                    <div className="absolute top-0 right-0 h-full w-full md:w-[30%] bg-black/80 md:bg-black/80" />
                </div>

                {/* Content Container - Right Aligned */}
                <div className="relative z-10 w-full md:w-[30%] h-full ml-auto flex flex-col justify-center px-8 md:px-12 pointer-events-none">
                    <div className="pointer-events-auto">
                        <span className="block font-bold text-3xl md:text-5xl mb-5 leading-tight drop-shadow-md text-left">
                            <span
                                style={{ color: textColor }}
                            >
                                {title}
                            </span>
                        </span>
                        <div
                            className="text-base md:text-xl font-medium text-left mb-8 block drop-shadow-md"
                            style={{ lineHeight: 1.4, color: textColor }}
                        >
                            {description}
                        </div>

                        <button className="px-6 py-2 bg-white text-black font-semibold rounded-full text-sm hover:bg-gray-200 transition-colors">
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
