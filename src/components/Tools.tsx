import * as React from "react"
import { Logos3 } from "@/components/ui/logos3"

const toolsData = {
    heading: "Powering Your Digital Success with Modern Tools",
    logos: [
        {
            id: "logo-1",
            description: "React",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            className: "h-8 w-auto",
        },
        {
            id: "logo-2",
            description: "Next.js",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            className: "h-8 w-auto invert",
        },
        {
            id: "logo-3",
            description: "TypeScript",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
            className: "h-8 w-auto",
        },
        {
            id: "logo-4",
            description: "Tailwind CSS",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
            className: "h-8 w-auto",
        },
        {
            id: "logo-5",
            description: "Figma",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
            className: "h-8 w-auto",
        },
        {
            id: "logo-6",
            description: "Node.js",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            className: "h-8 w-auto",
        },
        {
            id: "logo-7",
            description: "MongoDB",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            className: "h-8 w-auto",
        },
        {
            id: "logo-8",
            description: "Git",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            className: "h-8 w-auto",
        },
        {
            id: "logo-9",
            description: "Vercel",
            image: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
            className: "h-8 w-auto",
        },
        {
            id: "logo-10",
            description: "Framer Motion",
            image: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
            className: "h-8 w-auto",
        }
    ],
};

export default function Tools() {
    return <Logos3 {...toolsData} />;
}
