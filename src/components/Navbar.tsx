'use client';



'use client';

import { Home, Briefcase, Phone, Layers } from 'lucide-react';
import { NavBar as TubelightNavBar } from "@/components/ui/tubelight-navbar";
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    const navItems = [
        { name: 'Home', url: '#', icon: Home },
        { name: 'Services', url: '#why-choose-us', icon: Layers },
        { name: 'Projects', url: '#projects', icon: Briefcase },
        { name: 'Contact', url: '#contact', icon: Phone }
    ];

    return (
        <>
            {/* Logo - Absolute positioned or distinct from the centered nav */}
            <div className="fixed top-6 left-6 z-50 hidden sm:block">
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-10 w-32 opacity-80 hover:opacity-100 transition-opacity">
                        <Image
                            src="/assets/logo.png"
                            alt="Nova Logic Studio"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>
            </div>

            {/* Brand Name - Optional, maybe remove to keep clean or keep centered if nav is there? 
                 Tubelight nav is centered. Brand name might conflict visually. 
                 I'll remove the text brand name to let the UI breathe, keeping just the logo. 
             */}

            <TubelightNavBar items={navItems} />
        </>
    );
}
