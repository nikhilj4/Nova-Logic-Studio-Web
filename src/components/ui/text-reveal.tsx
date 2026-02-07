"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
    text: string;
    className?: string;
    highlightWords?: string[];
}

const TextRevealByWord: FC<TextRevealByWordProps> = ({
    text,
    className,
    highlightWords = [],
}) => {
    const targetRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });
    const words = text.split(" ");

    return (
        <div ref={targetRef} className={cn("relative z-0 h-[120vh]", className)}>
            <div
                className={
                    "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[3rem]"
                }
            >
                <p
                    ref={targetRef}
                    className={
                        "flex flex-wrap p-5 text-2xl font-bold text-muted-foreground/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl font-heading"
                    }
                >
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + 1 / words.length;
                        // Simple check to remove punctuation for matching
                        const cleanWord = word.replace(/[.,]/g, "");
                        const isHighlighted = highlightWords.some(
                            (hw) => cleanWord.toLowerCase() === hw.toLowerCase()
                        );

                        return (
                            <Word key={i} progress={scrollYProgress} range={[start, end]} isHighlighted={isHighlighted}>
                                {word}
                            </Word>
                        );
                    })}
                </p>
            </div>
        </div>
    );
};

interface WordProps {
    children: ReactNode;
    progress: MotionValue<number>;
    range: [number, number];
    isHighlighted?: boolean;
}

const Word: FC<WordProps> = ({ children, progress, range, isHighlighted }) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
            <span className={"absolute opacity-30"}>{children}</span>
            <motion.span
                style={{ opacity: opacity }}
                className={cn(
                    "text-foreground",
                    isHighlighted && "text-primary dark:text-primary font-script"
                )}
            >
                {children}
            </motion.span>
        </span>
    );
};

export { TextRevealByWord };
