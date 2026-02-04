'use client';
import { MarqueeAnimation } from "@/components/ui/marquee-effect";

export default function MarqueeSection() {
    return (
        <section className="py-20 bg-black overflow-hidden select-none pointer-events-none">
            <div className="flex flex-col gap-8 opacity-40 hover:opacity-100 transition-opacity duration-300">
                <MarqueeAnimation
                    direction="left"
                    baseVelocity={-2}
                    className="text-white/40 font-black text-6xl md:text-8xl py-2 tracking-tighter"
                >
                    DESIGN • DEVELOP • DEPLOY • SCALE •
                </MarqueeAnimation>

                <MarqueeAnimation
                    direction="right"
                    baseVelocity={-2}
                    className="text-white/40 font-black text-6xl md:text-8xl py-2 tracking-tighter"
                >
                    NOVA LOGIC STUDIO • DIGITAL EXCELLENCE • FUTURE READY •
                </MarqueeAnimation>
            </div>
        </section>
    );
}
