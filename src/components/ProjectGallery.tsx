"use client"

import {
    ContainerAnimated,
    ContainerScroll,
    ContainerStagger,
    ContainerSticky,
    GalleryCol,
    GalleryContainer
} from "@/components/ui/animated-gallery"
import Image from "next/image"

// Images from the service images folder - ALL 14 images
const IMAGES_1 = [
    "/projects/project-1.jpeg",
    "/projects/project-2.jpeg",
    "/projects/project-5.png",
    "/projects/project-6.png",
    "/projects/project-7.png",
]

const IMAGES_2 = [
    "/projects/project-3.jpeg",
    "/projects/project-8.png",
    "/projects/project-9.png",
    "/projects/project-10.png",
    "/projects/project-11.png",
]

const IMAGES_3 = [
    "/projects/project-4.jpeg",
    "/projects/project-12.png",
    "/projects/project-13.png",
    "/projects/project-14.png",
]


export default function ProjectGallery() {
    return (
        <section id="projects" className="relative bg-transparent overflow-hidden scroll-mt-20 pb-0">
            <ContainerStagger className="relative z-[9999] -mb-8 sm:-mb-12 place-self-center px-4 sm:px-6 pt-8 sm:pt-12 lg:pt-16 text-center">
                <ContainerAnimated>
                    <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight">
                        Our{" "}
                        <span className="font-serif font-extralight bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">
                            Project Showcase
                        </span>
                    </h1>
                </ContainerAnimated>
                <ContainerAnimated>
                    <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extralight mt-2">
                        Crafted with Excellence
                    </h2>
                </ContainerAnimated>

                <ContainerAnimated className="my-4 sm:my-6">
                    <p className="text-sm sm:text-base leading-normal tracking-tight text-gray-400 max-w-2xl mx-auto px-4">
                        Explore our portfolio of stunning digital experiences.
                        <br className="hidden sm:block" />
                        From web applications to mobile solutions, we deliver quality.
                    </p>
                </ContainerAnimated>
            </ContainerStagger>

            {/* Gradient blur effect */}
            <div
                className="pointer-events-none absolute z-10 h-[40vh] sm:h-[60vh] lg:h-[70vh] w-full top-0"
                style={{
                    background: "linear-gradient(to right, rgba(59, 130, 246, 0.3), rgba(6, 182, 212, 0.3), rgba(14, 165, 233, 0.3))",
                    filter: "blur(60px) sm:blur(84px)",
                    mixBlendMode: "screen",
                }}
            />

            <ContainerScroll className="relative h-auto min-h-[80vh]">
                <ContainerSticky className="h-[70vh]">
                    <GalleryContainer>
                        <GalleryCol yRange={["-10%", "2%"]} className="-mt-2 sm:-mt-4">
                            {IMAGES_1.map((imageUrl, index) => (
                                <div key={index} className="relative group overflow-hidden rounded-md sm:rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                                    <Image
                                        src={imageUrl}
                                        alt={`Project screenshot ${index + 1}`}
                                        width={800}
                                        height={600}
                                        className="aspect-video block h-auto max-h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </GalleryCol>

                        <GalleryCol className="mt-0 sm:-mt-[30%] lg:-mt-[50%]" yRange={["15%", "5%"]}>
                            {IMAGES_2.map((imageUrl, index) => (
                                <div key={index} className="relative group overflow-hidden rounded-md sm:rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                                    <Image
                                        src={imageUrl}
                                        alt={`Project screenshot ${index + 5}`}
                                        width={800}
                                        height={600}
                                        className="aspect-video block h-auto max-h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </GalleryCol>

                        {/* Third column - visible on all screens */}
                        <GalleryCol yRange={["-10%", "2%"]} className="-mt-2 sm:-mt-4">
                            {IMAGES_3.map((imageUrl, index) => (
                                <div key={index} className="relative group overflow-hidden rounded-md sm:rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
                                    <Image
                                        src={imageUrl}
                                        alt={`Project screenshot ${index + 9}`}
                                        width={800}
                                        height={600}
                                        className="aspect-video block h-auto max-h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </GalleryCol>
                    </GalleryContainer>
                </ContainerSticky>
            </ContainerScroll>
        </section>
    )
}
