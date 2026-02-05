'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import {
    ShoppingCart,
    Briefcase,
    Users,
    Calendar,
    Store,
    UserCircle,
    Globe,
    BarChart3,
    Smartphone
} from 'lucide-react';

interface ServiceCard {
    title: string;
    description: string;
    icon: React.ReactNode;
    gradient: string;
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
                            <div className="relative h-[50vh] w-[80vw] md:h-[25vh] md:w-[25vw] min-w-[280px] min-h-[320px] md:min-h-[200px]">
                                <div
                                    className={`h-full w-full rounded-2xl p-6 flex flex-col justify-between
                                    border border-white/10 backdrop-blur-sm
                                    shadow-[0_10px_30px_rgba(0,0,0,0.6),0_5px_15px_rgba(0,0,0,0.4),0_0_50px_rgba(255,255,255,0.08)]
                                    hover:shadow-[0_15px_40px_rgba(0,0,0,0.7),0_8px_20px_rgba(0,0,0,0.5),0_0_70px_rgba(255,255,255,0.12)]
                                    transition-all duration-300 hover:scale-105 group
                                    ${service.gradient}`}
                                >
                                    {/* Icon */}
                                    <div className="flex items-start justify-between">
                                        <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md group-hover:bg-white/20 transition-colors duration-300">
                                            <div className="w-8 h-8 text-white">
                                                {service.icon}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-2">
                                        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                                            {service.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-white/80 leading-relaxed">
                                            {service.description}
                                        </p>
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
