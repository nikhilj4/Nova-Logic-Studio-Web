"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    FaReact, FaDocker, FaNodeJs, FaGithub,
    FaFigma, FaAws
} from "react-icons/fa";
import {
    SiNextdotjs, SiVercel, SiTypescript, SiTailwindcss,
    SiMongodb, SiPostgresql, SiPrisma, SiFramer
} from "react-icons/si";

const iconConfigs = [
    { Icon: FaReact, color: "#61DAFB" },
    { Icon: SiNextdotjs, color: "#FFFFFF" },
    { Icon: SiTypescript, color: "#3178C6" },
    { Icon: SiTailwindcss, color: "#06B6D4" },
    { Icon: FaNodeJs, color: "#339933" },
    { Icon: SiMongodb, color: "#47A248" },
    { Icon: SiPostgresql, color: "#4169E1" },
    { Icon: SiPrisma, color: "#2D3748" },
    { Icon: SiVercel, color: "#FFFFFF" },
    { Icon: FaGithub, color: "#FFFFFF" },
    { Icon: FaFigma, color: "#F24E1E" },
    { Icon: SiFramer, color: "#0055FF" },
    { Icon: FaDocker, color: "#2496ED" },
    { Icon: FaAws, color: "#FF9900" },
];

export default function StackFeatureSection() {
    const orbitCount = 3;
    const orbitGap = 8; // rem between orbits
    const iconsPerOrbit = Math.ceil(iconConfigs.length / orbitCount);

    return (
        <section className="relative max-w-6xl mx-auto my-12 lg:my-32 p-6 lg:p-0 lg:pl-10 flex flex-col lg:flex-row items-center justify-between min-h-[40rem] lg:h-[30rem] border border-white/10 bg-background overflow-hidden rounded-3xl">
            {/* Left side: Heading and Text */}
            <div className="w-full lg:w-1/2 z-10 text-center lg:text-left mb-10 lg:mb-0">
                <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-foreground font-heading">
                    Our <span className="text-primary font-script">Tech Stack</span>
                </h1>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto lg:mx-0 font-body">
                    We use cutting-edge technologies to build scalable, high-performance web applications that drive results.
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-3">
                    <Button variant="default" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-body">
                        <Link href="#contact">Get Started</Link>
                    </Button>
                    <Button variant="outline" asChild className="border-primary/20 hover:bg-primary/10 text-foreground font-body">
                        <Link href="#services">Our Services</Link>
                    </Button>
                </div>
            </div>

            {/* Right side: Orbit animation cropped to 1/4 */}
            <div className="relative w-full lg:w-1/2 h-[20rem] lg:h-full flex items-center justify-center lg:justify-start overflow-hidden">
                <div className="relative w-[40rem] h-[40rem] lg:w-[50rem] lg:h-[50rem] scale-[0.55] sm:scale-75 md:scale-90 lg:scale-100 origin-center translate-x-0 lg:translate-x-[50%] flex items-center justify-center">
                    {/* Center Circle */}
                    <div className="w-24 h-24 rounded-full bg-card shadow-lg flex items-center justify-center border border-white/10">
                        <FaReact className="w-12 h-12 text-blue-400" />
                    </div>

                    {/* Generate Orbits */}
                    {[...Array(orbitCount)].map((_, orbitIdx) => {
                        const size = `${12 + orbitGap * (orbitIdx + 1)}rem`; // equal spacing
                        const angleStep = (2 * Math.PI) / iconsPerOrbit;

                        return (
                            <div
                                key={orbitIdx}
                                className="absolute rounded-full border-2 border-dotted border-gray-600"
                                style={{
                                    width: size,
                                    height: size,
                                    animation: `spin ${12 + orbitIdx * 6}s linear infinite`,
                                }}
                            >
                                {iconConfigs
                                    .slice(orbitIdx * iconsPerOrbit, orbitIdx * iconsPerOrbit + iconsPerOrbit)
                                    .map((cfg, iconIdx) => {
                                        const angle = iconIdx * angleStep;
                                        const x = 50 + 50 * Math.cos(angle);
                                        const y = 50 + 50 * Math.sin(angle);

                                        return (
                                            <div
                                                key={iconIdx}
                                                className="absolute bg-gray-800 rounded-full p-2 shadow-md border border-white/10 hover:scale-110 transition-transform duration-200"
                                                style={{
                                                    left: `${x}%`,
                                                    top: `${y}%`,
                                                    transform: "translate(-50%, -50%)",
                                                }}
                                            >
                                                {cfg.Icon && (
                                                    <cfg.Icon className="w-8 h-8" style={{ color: cfg.color }} />
                                                )}
                                            </div>
                                        );
                                    })}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Animation keyframes */}
            <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
        </section>
    );
}
