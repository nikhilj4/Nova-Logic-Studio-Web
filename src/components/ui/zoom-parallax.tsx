'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface Image {
    src: string;
    alt?: string;
}

interface ZoomParallaxProps {
    /** Array of images to be displayed in the parallax effect max 7 images */
    images: Image[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9, scale8, scale9];

    return (
        <div ref={container} className="relative h-[250vh] w-full">
            <div className="sticky top-0 h-screen overflow-hidden bg-black">
                {images.map(({ src, alt }, index) => {
                    const scale = scales[index % scales.length];

                    // Grid positions relative to center (Item 0)
                    // We want a 3x3 grid. 
                    // 1: Top-Left, 2: Top-Center, 3: Top-Right
                    // 4: Mid-Left, (0 is Center), 5: Mid-Right
                    // 6: Bottom-Left, 7: Bottom-Center, 8: Bottom-Right

                    return (
                        <motion.div
                            key={index}
                            style={{ scale }}
                            className={`absolute top-0 flex h-full w-full items-center justify-center 
                                ${index === 1 ? '[&>div]:!-top-[30vh] [&>div]:!-left-[30vw]' : ''}
                                ${index === 2 ? '[&>div]:!-top-[30vh]' : ''}
                                ${index === 3 ? '[&>div]:!-top-[30vh] [&>div]:!left-[30vw]' : ''}
                                ${index === 4 ? '[&>div]:!-left-[30vw]' : ''}
                                ${index === 5 ? '[&>div]:!left-[30vw]' : ''}
                                ${index === 6 ? '[&>div]:!top-[30vh] [&>div]:!-left-[30vw]' : ''}
                                ${index === 7 ? '[&>div]:!top-[30vh]' : ''}
                                ${index === 8 ? '[&>div]:!top-[30vh] [&>div]:!left-[30vw]' : ''}
                            `}
                        >
                            <div className="relative h-[25vh] w-[25vw]">
                                <img
                                    src={src || '/placeholder.svg'}
                                    alt={alt || `Parallax image ${index + 1}`}
                                    className="h-full w-full object-cover rounded-xl 
                                    shadow-[0_10px_30px_rgba(0,0,0,0.6),0_5px_15px_rgba(0,0,0,0.4),0_0_50px_rgba(255,255,255,0.08)]
                                    hover:shadow-[0_15px_40px_rgba(0,0,0,0.7),0_8px_20px_rgba(0,0,0,0.5),0_0_70px_rgba(255,255,255,0.12)]
                                    transition-shadow duration-300"
                                />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
