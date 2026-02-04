'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
    const benefits = [
        "Innovative Design Approaches",
        "Cutting-edge Technology Stack",
        "User-Centric Development",
        "24/7 Support & Maintenance"
    ];

    return (
        <section id="about" className="py-24 bg-zinc-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Crafting Digital Experiences That Matter
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            At Nova Logic Studio, we don't just build websites; we create digital ecosystems.
                            Our passion lies in merging aesthetics with functionality, ensuring that every pixel serves a purpose.
                            Whether you are a startup looking to make a mark or an established brand aiming to redefine your presence,
                            we are your partners in innovation.
                        </p>
                        <div className="space-y-4">
                            {benefits.map((item, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <CheckCircle2 className="text-purple-500 w-6 h-6" />
                                    <span className="text-gray-300 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            {/* Abstract decorative elements */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl opacity-20 transform rotate-6 scale-95 blur-2xl"></div>
                            <div className="absolute inset-0 bg-zinc-900 border border-white/10 rounded-2xl flex items-center justify-center p-8 backdrop-blur-xl">
                                <div className="text-center">
                                    <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                                        100+
                                    </div>
                                    <div className="text-xl text-gray-400">Projects Delivered</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
