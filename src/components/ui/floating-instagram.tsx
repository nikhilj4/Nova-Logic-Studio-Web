"use client";

import React, { useState } from "react";
import { Instagram, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FloatingInstagram = () => {
    const [isHovered, setIsHovered] = useState(false);

    // REPLACE WITH YOUR ACTUAL INSTAGRAM USERNAME
    const instagramUrl = "https://www.instagram.com/novalogicstudio";

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-2">
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.8 }}
                        className="bg-white text-black px-4 py-2 rounded-xl shadow-2xl mb-2 font-medium text-sm whitespace-nowrap"
                    >
                        Chat with us on Instagram!
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] rounded-full shadow-[0_4px_14px_0_rgba(253,29,29,0.39)] cursor-pointer overflow-hidden"
            >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />

                <Instagram className="w-7 h-7 text-white relative z-10" />

                {/* Pulse effect */}
                <span className="absolute w-full h-full rounded-full bg-white opacity-20 animate-ping" />
            </motion.a>
        </div>
    );
};
