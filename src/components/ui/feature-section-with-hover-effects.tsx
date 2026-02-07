import { cn } from "@/lib/utils";
import {
    Code2,
    Sparkles,
    DollarSign,
    Zap,
    Users,
    Headphones,
    Shield,
    Rocket,
} from "lucide-react";

export function FeaturesSectionWithHoverEffects() {
    const features = [
        {
            title: "Custom Web Development",
            description:
                "Tailored web solutions built with modern frameworks and best practices for optimal performance.",
            icon: <Code2 />,
        },
        {
            title: "Stunning UI/UX Design",
            description:
                "Beautiful, intuitive interfaces that captivate users and drive engagement.",
            icon: <Sparkles />,
        },
        {
            title: "Competitive Pricing",
            description:
                "Premium quality at prices that make sense. No hidden fees, transparent pricing model.",
            icon: <DollarSign />,
        },
        {
            title: "Lightning Fast Delivery",
            description: "Rapid development cycles without compromising on quality or attention to detail.",
            icon: <Zap />,
        },
        {
            title: "Scalable Architecture",
            description: "Future-proof solutions that grow with your business needs and user base.",
            icon: <Rocket />,
        },
        {
            title: "Dedicated Support",
            description:
                "We're with you every step of the way, from concept to deployment and beyond.",
            icon: <Headphones />,
        },
        {
            title: "Security First",
            description:
                "Enterprise-grade security measures to protect your data and your users.",
            icon: <Shield />,
        },
        {
            title: "Client-Focused Approach",
            description: "Your vision, our expertise. We build what you need, not what we want to sell.",
            icon: <Users />,
        },
    ];
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
            {features.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
            ))}
        </div>
    );
}

const Feature = ({
    title,
    description,
    icon,
    index,
}: {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r py-10 relative group/feature border-white/10",
                (index === 0 || index === 4) && "lg:border-l border-white/10",
                index < 4 && "lg:border-b border-white/10"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-4 md:px-10 text-gray-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-4 md:px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-700 group-hover/feature:bg-white transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
                    {title}
                </span>
            </div>
            <p className="text-sm text-gray-400 max-w-xs relative z-10 px-4 md:px-10">
                {description}
            </p>
        </div>
    );
};
