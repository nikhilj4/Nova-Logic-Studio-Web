"use client";

import React from "react";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";

export default function WhyChooseUs() {
    return (
        <section id="why-choose-us" className="w-full bg-black py-20 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 mb-12">
                <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-4">
                    Why Choose Nova Logic Studio?
                </h2>
                <p className="text-gray-400 text-lg md:text-xl text-center max-w-3xl mx-auto">
                    We combine technical excellence with creative innovation to deliver digital solutions that exceed expectations.
                </p>
            </div>
            <FeaturesSectionWithHoverEffects />
        </section>
    );
}
