"use client";

import React from "react";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";

export default function WhyChooseUs() {
    return (
        <section id="why-choose-us" className="w-full bg-background py-12 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-4 mb-8">
                <h2 className="text-4xl md:text-6xl font-bold text-foreground text-center mb-4 font-heading">
                    <span className="text-primary font-script">Why</span> Choose Nova Logic Studio?
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl text-center max-w-3xl mx-auto font-body">
                    We combine technical excellence with creative innovation to deliver digital solutions that exceed expectations.
                </p>
            </div>
            <FeaturesSectionWithHoverEffects />
        </section>
    );
}
