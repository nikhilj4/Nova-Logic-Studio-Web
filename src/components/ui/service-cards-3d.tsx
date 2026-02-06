'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface ServiceCard {
    title: string;
    description: string;
    icon: React.ReactNode;
    gradient: string;
    image?: string;
}

interface ServiceCards3DProps {
    services: ServiceCard[];
}

export function ServiceCards3D({ services }: ServiceCards3DProps) {
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
                {services.map((service, index) => {
                    const scale = scales[index % scales.length];

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
                            <div className="relative h-[35vh] w-[70vw] md:h-[25vh] md:w-[25vw] min-w-[240px] min-h-[280px] md:min-h-[200px]">
                                <div
                                    className={`h-full w-full rounded-2xl overflow-hidden
                                    border border-white/10 backdrop-blur-sm
                                    shadow-[0_10px_30px_rgba(0,0,0,0.6),0_5px_15px_rgba(0,0,0,0.4),0_0_50px_rgba(255,255,255,0.08)]
                                    hover:shadow-[0_15px_40px_rgba(0,0,0,0.7),0_8px_20px_rgba(0,0,0,0.5),0_0_70px_rgba(255,255,255,0.12)]
                                    transition-all duration-300 hover:scale-105 group relative`}
                                >
                                    {/* Background Image or Gradient */}
                                    {service.image ? (
                                        <>
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
                                        </>
                                    ) : (
                                        <>
                                            <div className={`absolute inset-0 ${service.gradient}`} />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                                        </>
                                    )}

                                    {/* Icon - Top Center */}
                                    <div className="absolute top-4 md:top-6 left-1/2 -translate-x-1/2 z-10">
                                        <div className="p-2 md:p-3 bg-white/10 rounded-xl backdrop-blur-md border border-white/20 shadow-lg">
                                            <div className="w-6 h-6 md:w-8 md:h-8 text-white">
                                                {service.icon}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Text Content - Bottom */}
                                    <div className="absolute bottom-0 left-0 right-0 z-10 p-4 md:p-6">
                                        <div className="text-center">
                                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight mb-2 drop-shadow-lg">
                                                {service.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed drop-shadow-lg line-clamp-2">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
