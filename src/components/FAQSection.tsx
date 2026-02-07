"use client";
import React from "react";
import { FaqAccordion } from "@/components/ui/faq-chat-accordion";


const faqData = [
    {
        id: 1,
        question: "What is the Nova Logic approach?",
        answer: "We combine minimalist design with aggressive performance. Your portfolio should be as fast as it is beautiful. We eliminate the clutter so your work can breathe.",
    },
    {
        id: 2,
        question: "How long does the transformation take?",
        answer: "Quality takes time, but efficiency is our priority. Most custom builds are live within 2-5 days, depending on the complexity of your digital assets.",
    },
    {
        id: 3,
        question: "Can I manage my own content after launch?",
        answer: "Yes. We build intuitive backends. If you can send an email, you can update your portfolio. No coding knowledge required, though the code we write for you is world-class.",
    },
    {
        id: 4,
        question: "What about AI and custom integrations?",
        answer: "As an AI-first studio, we integrate smart features—from automated client onboarding to AI-driven search—directly into your platform to give you a competitive edge.",
    },
    {
        id: 5,
        question: "Do I own my platform?",
        answer: "Completely. You own the domain, the hosting, and the source code. No subscriptions, no \"renting\" your own brand.",
    },
];

export default function FAQSection() {
    return (
        <section className="py-20 relative bg-background" id="faq">
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 text-foreground">
                        Common <span className="text-primary font-script">Questions</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-body">
                        Everything you need to know about our process and how we work.
                    </p>
                </div>

                <div className="bg-card/30 border border-border/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
                    <FaqAccordion
                        data={faqData}
                        className="w-full"
                        questionClassName="hover:bg-accent/10 transition-colors duration-300 font-body text-foreground"
                        answerClassName="bg-card/50 text-muted-foreground font-body"
                    />
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        </section>
    );
}
