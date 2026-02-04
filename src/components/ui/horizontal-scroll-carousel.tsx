"use client"

import * as React from "react"
import { motion, useTransform, useScroll } from "framer-motion"
import { FlippingCard } from "@/components/ui/flipping-card"
import Image from "next/image"

export interface ProjectCardData {
    id: string;
    front: {
        imageSrc: string;
        imageAlt: string;
        title: string;
        description: string;
    };
    back: {
        description: string;
        buttonText: string;
        href?: string;
    };
}

interface HorizontalScrollCarouselProps {
    items: ProjectCardData[]
}

const HorizontalScrollCarousel: React.FC<HorizontalScrollCarouselProps> = ({ items }) => {
    const targetRef = React.useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"]
    })

    const x = useTransform(scrollYProgress, [0, 1], ["5%", "-75%"]) // Adjusted from -95% to -75% since we have fewer items or different width

    return (
        <section
            ref={targetRef}
            className="relative h-[300vh] w-full" // Reduced height slightly
        >
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div
                    style={{ x }}
                    className="flex gap-8 px-8" // Added padding and gap
                >
                    {items.map((item) => (
                        <FlippingCard
                            key={item.id}
                            width={400} // Increased width for better visibility
                            height={500} // Increased height
                            className="shrink-0" // Prevent shrinking
                            frontContent={<GenericCardFront data={item.front} />}
                            backContent={<GenericCardBack data={item.back} />}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

function GenericCardFront({ data }: { data: ProjectCardData["front"] }) {
    return (
        <div className="flex flex-col h-full w-full p-0">
            <div className="relative w-full h-3/5">
                <Image
                    src={data.imageSrc}
                    alt={data.imageAlt}
                    fill
                    className="object-cover rounded-t-xl"
                />
            </div>
            <div className="p-6 h-2/5 bg-black flex flex-col start justify-center rounded-b-xl border-t border-white/10">
                <h3 className="text-2xl font-bold text-white mb-2">{data.title}</h3>
                <p className="text-sm text-gray-400">
                    {data.description}
                </p>
            </div>
        </div>
    );
}

function GenericCardBack({ data }: { data: ProjectCardData["back"] }) {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full p-8 bg-zinc-950 rounded-xl border border-white/10">
            <p className="text-base text-gray-300 text-center leading-relaxed">
                {data.description}
            </p>
            <a
                href={data.href || "#"}
                className="mt-8 bg-white text-black px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors"
            >
                {data.buttonText}
            </a>
        </div>
    );
}

export { HorizontalScrollCarousel };
