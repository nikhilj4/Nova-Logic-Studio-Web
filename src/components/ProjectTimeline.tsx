"use client";

import TimeLine_01, { TimeLine_01Entry } from "@/components/ui/release-time-line";
import { Zap, Calendar, Award } from "lucide-react";

const projectEntries: TimeLine_01Entry[] = [
    {
        icon: Zap,
        title: "FerniQ | E-Commerce Innovation Lab",
        subtitle: "Live Prototype • Mobile Optimized",
        description:
            "The Vision: A furniture buying experience that prioritizes speed and minimalist design. We focused on the 'Zero-Friction Checkout'. By deploying on Firebase, we ensured the site scales instantly to handle high traffic without slow-down.",
        items: [
            "Real-time database syncing for stock updates",
            "Lightning-fast image delivery",
            "Zero-Friction Checkout experience",
            "Serverless architecture for instant scaling"
        ],
        image:
            "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2670&auto=format&fit=crop", // Modern Furniture/Interior
        button: {
            url: "#",
            text: "View Live Beta",
        },
    },
    {
        icon: Calendar,
        title: "Convention Halls | Slot-Booking Engine",
        subtitle: "Feature-Ready Demo • Reliability Focused",
        description:
            "The Vision: Solving the chaos of event scheduling with a sleek, interactive calendar. We built a visual availability grid so clients can see open slots in one glance, reducing the need for back-and-forth phone calls.",
        items: [
            "Visual availability grid for instant booking",
            "Firebase Authentication for secure users",
            "Automated 'Double-Booking' prevention logic",
            "Real-time update of slot status"
        ],
        image:
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2612&auto=format&fit=crop", // Convention Hall / Event Space
        button: {
            url: "#",
            text: "View Demo",
        },
    },
    {
        icon: Award,
        title: "K.M. Uday Gowda | Digital Brand Authority",
        subtitle: "Creative Showcase • Professional Profile",
        description:
            "The Vision: A professional digital hub for political leadership and citizen engagement. We designed this to make critical news and constituency projects easy to find, establishing trust through a clean, authoritative UI.",
        items: [
            "Optimized for SEO and Accessibility",
            "Information Hierarchy design for trust",
            "Responsive across all citizen devices",
            "Clean, authoritative UI design"
        ],
        image:
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop", // Professional/Leadership abstract or person in suit
        button: {
            url: "#",
            text: "View Profile",
        },
    },
];

export default function ProjectTimeline() {
    return (
        <div id="projects" className="scroll-mt-10">
            <TimeLine_01
                title=""
                description=""
                entries={projectEntries}
            />
        </div>
    );
}
