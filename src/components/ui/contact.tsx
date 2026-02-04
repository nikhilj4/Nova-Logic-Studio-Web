"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';

interface ContactSectionProps {
    /**
     * The title for the contact section.
     */
    title?: string;
    /**
     * The subtitle or main message for the introductory part.
     */
    mainMessage?: string;
    /**
     * The contact email to display.
     */
    contactEmail?: string;
    /**
     * Array of social media links. Each object should have an 'id', 'name', 'icon', and 'href'.
     */
    socialLinks?: Array<{ id: string; name: string; icon: React.ReactNode; href: string }>;
    /**
     * Placeholder image for the background.
     */
    backgroundImageSrc?: string;
    /**
     * Callback function when the form is submitted.
     * @param data The form data.
     */
    onSubmit?: (data: any) => void;
}

const defaultSocialLinks = [
    { id: '1', name: 'Twitter', icon: <Twitter size={16} />, href: '#' },
    { id: '2', name: 'LinkedIn', icon: <Linkedin size={16} />, href: '#' },
    { id: '3', name: 'GitHub', icon: <Github size={16} />, href: '#' },
];

export const ContactSection: React.FC<ContactSectionProps> = ({
    title = "We can turn your dream project into reality",
    mainMessage = "Let's talk! 👋",
    contactEmail = "nikhil@novalogicstudio.com",
    socialLinks = defaultSocialLinks,
    backgroundImageSrc = "https://images.unsplash.com/photo-1742273330004-ef9c9d228530?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY0fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=900",
    onSubmit,
}) => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: '',
        projectType: [] as string[],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (type: string, checked: boolean) => {
        setFormData((prev) => {
            const currentTypes = prev.projectType;
            if (checked) {
                return { ...prev, projectType: [...currentTypes, type] };
            } else {
                return { ...prev, projectType: currentTypes.filter((t) => t !== type) };
            }
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit?.(formData);
        console.log("Form submitted:", formData);
        // You might want to add a success message or clear the form here
    };

    const projectTypeOptions = [
        'Website', 'Mobile App', 'Web App', 'E-Commerce',
        'Brand Identity', '3D & Animation', 'Social Media Marketing',
        'Brand Strategy & Consulting', 'Other'
    ];

    return (
        <section id="contact" className="relative min-h-screen w-full overflow-hidden bg-black text-white scroll-mt-20">
            {/* Background Image and Animated Bubbles */}
            {/* Animated Bubbles Container */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Animated Bubbles */}
                <div className="absolute inset-0 z-0">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-white/10 rounded-full animate-bubble opacity-0"
                            style={{
                                width: `${Math.random() * 20 + 10}px`,
                                height: `${Math.random() * 20 + 10}px`,
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 10}s`,
                                animationDuration: `${Math.random() * 20 + 10}s`,
                                top: `${Math.random() * 100}%`, // Initial random top position
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Main Content Overlay */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen p-4 md:p-8 lg:p-12">

                {/* Main Section - Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl p-4 md:p-8 rounded-xl">
                    {/* Left Side: Title */}
                    <div className="flex flex-col justify-center lg:justify-end p-4 lg:p-8 space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-lg lg:max-w-2xl -mt-[100px]">
                            {title}
                        </h1>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="bg-zinc-900/80 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6),0_8px_20px_rgba(0,0,0,0.4),0_0_60px_rgba(255,255,255,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),0_10px_25px_rgba(0,0,0,0.5),0_0_80px_rgba(255,255,255,0.12)] transition-shadow duration-300">

                        <h2 className="text-2xl font-bold text-white mb-6">{mainMessage}</h2>

                        {/* Email & Socials */}
                        <div className="mb-6">
                            <p className="text-gray-400 mb-2">Mail us at</p>
                            <a href={`mailto:${contactEmail}`} className="text-white hover:text-gray-300 hover:underline font-medium text-lg flex items-center gap-2">
                                <Mail size={18} /> {contactEmail}
                            </a>
                            <div className="flex items-center space-x-3 mt-4">
                                <span className="text-gray-500 text-sm">OR FIND US ON</span>
                                {socialLinks.map((link) => (
                                    <Button key={link.id} variant="outline" size="icon" asChild className="rounded-full">
                                        <a href={link.href} aria-label={link.name}>
                                            {link.icon}
                                        </a>
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <hr className="my-6 border-white/10" />

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <p className="text-gray-400">Leave us a brief message</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Your name</Label>
                                    <Input id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" name="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Briefly describe your project...</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="I have an idea for..."
                                    className="min-h-[100px]"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="space-y-4">
                                <p className="text-gray-400 text-sm">I'm looking for...</p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {projectTypeOptions.map((option) => (
                                        <div key={option} className="flex items-center space-x-2">
                                            <Checkbox
                                                id={option.replace(/\s/g, '-').toLowerCase()}
                                                checked={formData.projectType.includes(option)}
                                                onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                                            />
                                            <Label htmlFor={option.replace(/\s/g, '-').toLowerCase()} className="text-sm font-normal text-gray-300 cursor-pointer">
                                                {option}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <Button type="submit" className="w-full h-12 text-lg font-semibold rounded-full bg-white text-black hover:bg-gray-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]">
                                Send a message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            {/* CSS for bubble animation */}
            <style jsx global>{`
        @keyframes bubble {
          0% {
            transform: translateY(0) translateX(0) scale(0.5);
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) translateX(calc(var(--rand-x-offset) * 10vw)) scale(1.2);
            opacity: 0;
          }
        }
        .animate-bubble {
          animation: bubble var(--animation-duration, 15s) ease-in-out infinite;
          animation-fill-mode: forwards;
          --rand-x-offset: ${Math.random() > 0.5 ? 1 : -1};
        }
      `}</style>
        </section>
    );
};
