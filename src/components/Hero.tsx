"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { WavePath } from "@/components/ui/wave-path";
import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex flex-col overflow-hidden bg-black pb-10">
            <ContainerScroll
                titleComponent={
                    <>
                        <h1 className="text-3xl md:text-4xl font-light text-white/90 tracking-wide relative z-50">
                            Crafting Digital Experiences with <br />
                            <span className="text-5xl md:text-[6rem] lg:text-[7rem] font-black mt-2 leading-none bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent tracking-tight">
                                Nova Logic Studio
                            </span>
                        </h1>
                    </>
                }
            >
                <Image
                    src="/assets/welcome-little.png"
                    alt="Nova Logic Dashboard"
                    height={720}
                    width={1400}
                    className="mx-auto rounded-2xl object-cover w-full h-full object-top"
                    draggable={false}
                    priority
                />
            </ContainerScroll>

            <div className="w-full flex flex-col items-center justify-center mt-[-100px] mb-10 relative z-10 px-4">
                <div className="flex w-full md:w-[70vw] flex-col items-center md:items-end">
                    <WavePath className="mb-10 text-white/20" />
                    <div className="flex w-full flex-col items-center md:items-end text-center md:text-right">
                        <div className="max-w-3xl">
                            <p className="text-white/80 text-lg md:text-2xl leading-relaxed font-light">
                                Engineering high-performance digital solutions that bridge the gap between creativity and logic.
                                We specialize in building <span className="text-white font-medium">scalable, AI-driven websites</span> and custom applications
                                designed to turn complex business challenges into seamless user experiences.
                                From startups to established professionals, we deliver the future of the web—<span className="italic">one line of code at a time</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
