"use client";

import { CardsParallax, iCardItem } from "@/components/ui/scroll-cards";

const projects: iCardItem[] = [
    {
        title: "Venue Booking System",
        description: "A comprehensive booking platform for event spaces and venues with real-time availability.",
        tag: "app-dev",
        src: "/assets/projects/event.jpeg",
        link: "#",
        color: "black",
        textColor: "white",
    },
    {
        title: "Luxury Furniture E-comm",
        description: "A premium e-commerce experience including AR furniture placement for high-end retailers.",
        tag: "e-commerce",
        src: "/assets/projects/furniture.jpeg",
        link: "#",
        color: "black",
        textColor: "white",
    },
    {
        title: "Digital Portfolio",
        description: "A minimalist, high-impact personal brand website designed for creative professionals.",
        tag: "web-dev",
        src: "/assets/projects/profile.jpeg",
        link: "#",
        color: "black",
        textColor: "white",
    },
];

export default function FeaturedProjects() {
    return (
        <div id="projects" className="bg-black relative z-10 scroll-mt-20">
            <div className="px-4 md:px-8 py-20 max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">Featured Work</h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                    Explore a selection of our recent projects, engineered for impact and designed to perform.
                </p>
            </div>
            <CardsParallax items={projects} />
        </div>
    );
}
