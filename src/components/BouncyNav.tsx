'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '@/styles/BouncyNav.module.css';

const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export default function BouncyNav() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [morphFactor, setMorphFactor] = useState(0);

    // ScrollSpy Logic
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200; // Offset for trigger

            // Calculate sections
            const sections = navItems.map(item => {
                const element = document.querySelector(item.href);
                if (element) {
                    return {
                        id: item.href,
                        top: element.getBoundingClientRect().top + window.scrollY,
                        height: element.getBoundingClientRect().height
                    };
                }
                return null;
            }).filter(Boolean);

            // Find active
            // Default to 0 if at top
            let current = 0;
            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];
                if (section && scrollPosition >= section.top && scrollPosition < section.top + section.height) {
                    current = i;
                }
            }

            // Special check for bottom of page to highlight last item
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                current = sections.length - 1;
            }

            setActiveIndex(current);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Init
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseEnter = (index: number) => {
        // Calculate morph direction based on distance
        const diff = index - activeIndex;
        if (diff === 0) {
            setMorphFactor(0);
        } else if (diff > 0) {
            setMorphFactor(diff > 1 ? 2 : 1);
        } else {
            setMorphFactor(diff < -1 ? -2 : -1);
        }
    };

    const handleMouseLeave = () => {
        setMorphFactor(0);
    };

    return (
        <div className={styles.navContainer} onMouseLeave={handleMouseLeave}>
            {navItems.map((item, index) => (
                <div
                    key={item.name}
                    className={`${styles.navItem} ${index === activeIndex ? styles.active : ''}`}
                    onMouseEnter={() => handleMouseEnter(index)}
                >
                    <Link href={item.href} className={styles.navLink} onClick={(e) => {
                        // Smooth scroll handler if needed, usually CSS scroll-behavior: smooth handles it
                        // But we can force it here if strictly needed.
                    }}>
                        {item.name}
                    </Link>
                </div>
            ))}

            {/* The Bouncy Blob */}
            <div
                className={`${styles.selectionIndicatorWrapper} ${styles['pos' + activeIndex]}`}
                style={{ '--morph-factor': morphFactor } as React.CSSProperties}
            >
                <span></span>
            </div>
        </div>
    );
}
