'use client';
import React from 'react';
import Lenis from '@studio-freight/lenis'
import { ServiceCards3D } from "@/components/ui/service-cards-3d";
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

const services = [
    {
        title: "E-Commerce Solutions",
        description: "Full-featured online stores with payment integration, inventory management, and analytics.",
        icon: <ShoppingCart className="w-full h-full" />,
        gradient: "bg-gradient-to-br from-yellow-400 to-amber-500",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
    },
    {
        title: "Business Portfolio",
        description: "Professional websites that showcase your brand, services, and achievements effectively.",
        icon: <Briefcase className="w-full h-full" />,
        gradient: "bg-gradient-to-br from-gray-700 to-gray-900",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
        title: "Customer Management",
        description: "CRM systems to track, manage, and nurture customer relationships efficiently.",
        icon: <Users className="w-full h-full" />,
        gradient: "bg-gradient-to-br from-gray-400 to-gray-600",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
    },
    {
        title: "Booking Systems",
        description: "Automated scheduling and reservation platforms for appointments and events.",
        icon: <Calendar className="w-full h-full" />,
        gradient: "bg-gradient-to-br from-blue-500 to-blue-700",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80"
    },
    {
        title: "Dealer Networks",
        description: "Multi-vendor platforms connecting dealers, distributors, and customers seamlessly.",
        icon: <Store className="w-full h-full" />,
        gradient: "bg-gradient-to-br from-purple-500 to-purple-700",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
    },
    {
        title: "Profile Websites",
        description: "Personal branding sites for professionals, artists, and influencers.",
        icon: <UserCircle className="w-full h-full" />,
        gradient: "bg-gradient-to-br from-green-500 to-emerald-600",
        image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&q=80"
    },
    {
        title: "Custom Web Apps",
        description: "Tailored web applications built to solve your unique business challenges.",
        icon: <Globe className="w-full h-full" />,
        gradient: "bg-gradient-to-br from-orange-500 to-red-600",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
    },
    {
        title: "Analytics Dashboards",
        description: "Data visualization and reporting tools for informed decision-making.",
        icon: <BarChart3 className="w-full h-full" />,
        gradient: "bg-gradient-to-br from-cyan-500 to-blue-600",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
        title: "Mobile-First Design",
        description: "Responsive websites optimized for mobile devices and all screen sizes.",
        icon: <Smartphone className="w-full h-full" />,
        gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80"
    }
];

export function ServiceZoomParallax() {

    React.useEffect(() => {
        const lenis = new Lenis()

        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    return (
        <div id="services" className="w-full relative scroll-mt-20">
            <ServiceCards3D services={services} />
        </div>
    );
}
