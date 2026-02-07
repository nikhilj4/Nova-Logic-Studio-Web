"use client";

import * as React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
    id: number;
    question: string;
    answer: string;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
}

interface FaqAccordionProps {
    data: FAQItem[];
    className?: string;
    timestamp?: string;
    questionClassName?: string;
    answerClassName?: string;
}

export function FaqAccordion({
    data,
    className,
    timestamp, // Optional timestamp
    questionClassName,
    answerClassName,
}: FaqAccordionProps) {
    const [openItem, setOpenItem] = React.useState<string | null>(null);

    return (
        <div className={cn("p-4", className)}>
            {timestamp && (
                <div className="mb-4 text-sm text-muted-foreground">{timestamp}</div>
            )}

            <Accordion.Root
                type="single"
                collapsible
                value={openItem || ""}
                onValueChange={(value) => setOpenItem(value)}
            >
                {data.map((item) => (
                    <Accordion.Item
                        value={item.id.toString()}
                        key={item.id}
                        className="mb-4"
                    >
                        <Accordion.Header>
                            <Accordion.Trigger className="flex w-full items-center justify-start gap-x-4 group">
                                <div
                                    className={cn(
                                        "relative flex items-center space-x-2 rounded-xl p-3 transition-all duration-200 w-full justify-between items-center group-hover:bg-primary/5",
                                        openItem === item.id.toString()
                                            ? "bg-primary/10 text-primary border border-primary/20"
                                            : "bg-muted/50 border border-transparent hover:border-primary/10",
                                        questionClassName
                                    )}
                                >
                                    <div className="flex items-center gap-3">
                                        {item.icon && (
                                            <span
                                                className={cn(
                                                    "text-xl",
                                                    item.iconPosition === "right" ? "order-last" : "order-first"
                                                )}
                                            >
                                                {item.icon}
                                            </span>
                                        )}
                                        <span className="font-medium text-left">{item.question}</span>
                                    </div>

                                    <span
                                        className={cn(
                                            "text-muted-foreground transition-transform duration-200",
                                            openItem === item.id.toString() && "text-primary rotate-180"
                                        )}
                                    >
                                        {openItem === item.id.toString() ? (
                                            <Minus className="h-5 w-5" />
                                        ) : (
                                            <Plus className="h-5 w-5" />
                                        )}
                                    </span>
                                </div>
                            </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content asChild forceMount>
                            <motion.div
                                initial="collapsed"
                                animate={openItem === item.id.toString() ? "open" : "collapsed"}
                                variants={{
                                    open: { opacity: 1, height: "auto", marginTop: 8 },
                                    collapsed: { opacity: 0, height: 0, marginTop: 0 },
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="px-2">
                                    <div
                                        className={cn(
                                            "relative rounded-xl bg-muted/30 px-5 py-4 text-muted-foreground border border-white/5",
                                            answerClassName
                                        )}
                                    >
                                        {item.answer}
                                    </div>
                                </div>
                            </motion.div>
                        </Accordion.Content>
                    </Accordion.Item>
                ))}
            </Accordion.Root>
        </div>
    );
}
