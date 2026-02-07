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
    title?: React.ReactNode;
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
    title = <>We can turn your <span className="text-primary font-script">dream</span> project into <span className="text-primary font-script">reality</span></>,
    mainMessage = "Let's talk! 👋",
    contactEmail = "novalogic.studio@gmail.com",
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

    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        // Check if Formspree is configured
        const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

        // If no Formspree ID, use mailto as fallback
        if (!formspreeId || formspreeId === 'YOUR_FORM_ID_HERE') {
            // Create mailto link with pre-filled content
            const subject = encodeURIComponent(`Contact Form: ${formData.name}`);
            const body = encodeURIComponent(
                `Name: ${formData.name}\n` +
                `Email: ${formData.email}\n` +
                `Project Type: ${formData.projectType.join(', ')}\n\n` +
                `Message:\n${formData.message}`
            );
            const mailtoLink = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

            // Open email client
            window.location.href = mailtoLink;

            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                message: '',
                projectType: [],
            });
            setIsSubmitting(false);
            return;
        }

        try {
            // Using Formspree for email delivery
            const formspreeEndpoint = `https://formspree.io/f/${formspreeId}`;

            const response = await fetch(formspreeEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    projectType: formData.projectType.join(', '),
                    _replyto: formData.email,
                    _subject: `New Contact Form Submission from ${formData.name}`,
                }),
            });

            if (response.ok) {
                setSubmitStatus('success');
                // Clear form
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                    projectType: [],
                });
                onSubmit?.(formData);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const projectTypeOptions = [
        'Website', 'Web App', 'E-Commerce', 'Brand Identity',
        'Slot Booking Web', 'Event Booking Web', 'Personal Portfolio',
        'Work Showcase Web', 'Other'
    ];

    return (
        <section id="contact" className="relative min-h-screen w-full overflow-hidden bg-background text-foreground scroll-mt-20">
            {/* Background Image and Animated Bubbles */}
            {/* Animated Bubbles Container */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Animated Bubbles */}
                <div className="absolute inset-0 z-0">
                    {Array.from({ length: 15 }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute bg-primary/10 rounded-full animate-bubble opacity-0"
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
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-heading text-foreground leading-tight drop-shadow-lg lg:max-w-2xl lg:-mt-[100px]">
                            {title}
                        </h1>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="bg-card/80 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6),0_8px_20px_rgba(0,0,0,0.4),0_0_60px_rgba(255,255,255,0.08)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),0_10px_25px_rgba(0,0,0,0.5),0_0_80px_rgba(255,255,255,0.12)] transition-shadow duration-300">

                        <h2 className="text-2xl font-bold font-heading text-foreground mb-6">{mainMessage}</h2>

                        {/* Email & Socials */}
                        <div className="mb-6">
                            <p className="text-muted-foreground mb-2 font-body">Mail us at</p>
                            <a href={`mailto:${contactEmail}`} className="text-foreground hover:text-muted-foreground hover:underline font-medium text-lg flex items-center gap-2">
                                <Mail size={18} /> {contactEmail}
                            </a>
                        </div>

                        <hr className="my-6 border-white/10" />

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <p className="text-muted-foreground font-body">Leave us a brief message</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-foreground font-body">Your name</Label>
                                    <Input id="name" name="name" placeholder="Shiva" value={formData.name} onChange={handleChange} required className="bg-background/50 border-white/10 text-foreground placeholder:text-muted-foreground/50" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-foreground font-body">Email</Label>
                                    <Input id="email" name="email" type="email" placeholder="your.email@gmail.com" value={formData.email} onChange={handleChange} required className="bg-background/50 border-white/10 text-foreground placeholder:text-muted-foreground/50" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-foreground font-body">Briefly describe your project...</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="I have an idea for..."
                                    className="min-h-[100px] bg-background/50 border-white/10 text-foreground placeholder:text-muted-foreground/50"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="space-y-4">
                                <p className="text-muted-foreground text-sm font-body">I'm looking for...</p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {projectTypeOptions.map((option) => {
                                        const optionId = option.replace(/\s/g, '-').toLowerCase();
                                        return (
                                            <div key={option} className="flex items-center space-x-2">
                                                <Checkbox
                                                    id={optionId}
                                                    checked={formData.projectType.includes(option)}
                                                    onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                                                    className="border-white/20 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                                                />
                                                <Label
                                                    htmlFor={optionId}
                                                    className="text-sm font-normal text-muted-foreground cursor-pointer select-none"
                                                    onClick={() => handleCheckboxChange(option, !formData.projectType.includes(option))}
                                                >
                                                    {option}
                                                </Label>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {submitStatus === 'success' && (
                                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-sm">
                                    ✅ Message sent successfully! We'll get back to you soon.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
                                    ❌ Failed to send message. Please try emailing us directly at {contactEmail}
                                </div>
                            )}
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full h-12 text-lg font-semibold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-[0_0_15px_rgba(245,143,124,0.3)] hover:shadow-[0_0_25px_rgba(245,143,124,0.5)] disabled:opacity-50 disabled:cursor-not-allowed font-body"
                            >
                                {isSubmitting ? 'Sending...' : 'Send a message'}
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
