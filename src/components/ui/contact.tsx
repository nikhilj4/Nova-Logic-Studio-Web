"use client";

import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Mail, ArrowRight, ArrowLeft, Upload, Link as LinkIcon,
    CheckCircle, Calendar, Smartphone, Monitor, Layout, MapPin
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface ContactSectionProps {
    title?: React.ReactNode;
    mainMessage?: string;
    contactEmail?: string;
    onSubmit?: (data: any) => void;
}

// Configuration for Categories and Sub-categories
const categories = [
    { id: 'event-slot', label: 'Event & Slot Booking', desc: 'Appointments, tickets, or scheduling' },
    { id: 'personal-brand', label: 'Personal Brand / Portfolio', desc: 'For public figures and creators' },
    { id: 'artist-creative', label: 'Artist & Creative Profile', desc: 'Immersive galleries for visual work' },
    { id: 'product-ecommerce', label: 'Product Showcase & E-commerce', desc: 'Selling physical or digital goods' },
    { id: 'service-hub', label: 'Service Provider Hub', desc: 'For consultants, agencies, or freelancers' },
    { id: 'real-estate', label: 'Real Estate & Brokerage', desc: 'Property listings and management' },
    { id: 'other', label: 'Other', desc: 'Tell us your unique vision' },
];

const subCategories: Record<string, string[]> = {
    'event-slot': ['Gym', 'Yoga', 'Educational Classes', 'Parties', 'Concerts', 'Other'],
    'personal-brand': ['Photography', 'Videography', 'Fine Arts', 'Speaking', 'Other'],
    'artist-creative': ['Painter', 'Musician', 'Digital Artist', 'Sculptor', 'Other'],
    'product-ecommerce': ['Physical Goods', 'Digital Downloads', 'Dropshipping', 'Subscription', 'Other'],
    'service-hub': ['Legal', 'Consulting', 'Design', 'Maintenance', 'Health', 'Other'],
    'real-estate': ['Residential', 'Commercial', 'Land', 'Rental Management', 'Other'],
    'other': [],
};

const timelines = [
    { id: 'express', label: 'Express Build', desc: '3 Days' },
    { id: 'priority', label: 'Priority Launch', desc: '5 Days' },
    { id: 'standard', label: 'Standard Development', desc: '15+ Days' },
];

export const ContactSection: React.FC<ContactSectionProps> = ({
    title = <>We can turn your <span className="text-primary font-script">dream</span> project into <span className="text-primary font-script">reality</span></>,
    mainMessage = "Let's talk! 👋",
    contactEmail = "novalogic.studio@gmail.com",
    onSubmit,
}) => {
    // State
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1
        name: 'Shiva',
        email: 'example@gmail.com',
        location: 'Mysuru',
        // Step 2
        category: '',
        // Step 3
        subCategory: '',
        // Step 4
        device: '',
        // Step 5
        challenge: '',
        features: '',
        // Step 6
        inspirationUrl: '',
        inspirationFile: null as File | null,
        // Step 7
        timeline: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const fileInputRef = useRef<HTMLInputElement>(null);

    const totalSteps = 7;
    const progress = ((step - 1) / totalSteps) * 100;

    // Handlers
    const handleChange = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({ ...prev, inspirationFile: e.target.files![0] }));
        }
    };

    const nextStep = () => {
        if (step < totalSteps) setStep(prev => prev + 1);
        else handleSubmit();
    };

    const prevStep = () => {
        if (step > 1) setStep(prev => prev - 1);
    };

    const handleSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        setIsSubmitting(true);

        const formDataObj = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            if (key === 'inspirationFile' && value) {
                // Rename for better compatibility with email services
                formDataObj.append('attachment', value);
            } else if (value) {
                formDataObj.append(key, value);
            }
        });
        formDataObj.append('_subject', `Nova Logic Estimate: ${formData.category}`);

        const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

        if (!formspreeId || formspreeId === 'YOUR_FORM_ID_HERE') {
            // Fallback to mailto
            const subject = encodeURIComponent(`Estimate Request: ${formData.name}`);
            const body = encodeURIComponent(
                `Name: ${formData.name}\nEmail: ${formData.email}\nLocation: ${formData.location}\n\n` +
                `Category: ${formData.category} / ${formData.subCategory}\n` +
                `Device: ${formData.device}\nTimeline: ${formData.timeline}\n\n` +
                `Challenge:\n${formData.challenge}\n\nFeatures:\n${formData.features}\n` +
                `Ref URL: ${formData.inspirationUrl}\n\n` +
                `[IMPORTANT: Please manually attach your inspiration file '${formData.inspirationFile?.name || 'N/A'}' to this email if expected]`
            );
            window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
            setStep(8); // Success screen
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
                method: 'POST',
                body: formDataObj, // FormData handles multipart/form-data for files
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStep(8);
                onSubmit?.(formData);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Render Steps
    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                        <h3 className="text-xl font-bold font-heading text-primary">Step 1: The Basics</h3>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label>Full Name *</Label>
                                <Input value={formData.name} onChange={(e) => handleChange('name', e.target.value)} placeholder="Shiva" className="bg-background/50 border-white/10" />
                            </div>
                            <div className="space-y-2">
                                <Label>Email Address *</Label>
                                <Input type="email" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} placeholder="example@gmail.com" className="bg-background/50 border-white/10" />
                            </div>
                            <div className="space-y-2">
                                <Label>Business Location/Address</Label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-3 text-muted-foreground w-4 h-4" />
                                    <Input value={formData.location} onChange={(e) => handleChange('location', e.target.value)} placeholder="Mysuru" className="pl-10 bg-background/50 border-white/10" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                        <h3 className="text-xl font-bold font-heading text-primary">Step 2: Core Project Category</h3>
                        <p className="text-sm text-muted-foreground">What type of platform are we building?</p>
                        <div className="grid grid-cols-1 gap-3">
                            {categories.map((cat) => (
                                <div
                                    key={cat.id}
                                    onClick={() => handleChange('category', cat.label)}
                                    className={`p-4 rounded-xl border cursor-pointer transition-all hover:bg-white/5 ${formData.category === cat.label ? 'border-primary bg-primary/10' : 'border-white/10 bg-background/50'}`}
                                >
                                    <div className="font-semibold">{cat.label}</div>
                                    <div className="text-xs text-muted-foreground">{cat.desc}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            case 3:
                const currentSubOptions = formData.category && categories.find(c => c.label === formData.category)
                    ? subCategories[categories.find(c => c.label === formData.category)!.id] || []
                    : [];

                return (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                        <h3 className="text-xl font-bold font-heading text-primary">Step 3: Specialized Sub-Category</h3>
                        <p className="text-sm text-muted-foreground">Specific niche for better estimation.</p>

                        {currentSubOptions.length > 0 ? (
                            <div className="flex flex-wrap gap-3">
                                {currentSubOptions.map((sub) => (
                                    <div
                                        key={sub}
                                        onClick={() => handleChange('subCategory', sub)}
                                        className={`px-4 py-2 rounded-full border cursor-pointer transition-all hover:scale-105 ${formData.subCategory === sub ? 'border-primary bg-primary text-primary-foreground' : 'border-white/10 bg-background/50'}`}
                                    >
                                        {sub}
                                    </div>
                                ))}
                                <div className="w-full mt-4">
                                    <Label>Or specify custom:</Label>
                                    <Input
                                        value={formData.subCategory}
                                        onChange={(e) => handleChange('subCategory', e.target.value)}
                                        placeholder="Type here..."
                                        className="mt-2 bg-background/50 border-white/10"
                                    />
                                </div>
                            </div>
                        ) : (
                            <Input
                                value={formData.subCategory}
                                onChange={(e) => handleChange('subCategory', e.target.value)}
                                placeholder="Describe your category..."
                                className="bg-background/50 border-white/10"
                            />
                        )}
                    </motion.div>
                );
            case 4:
                return (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                        <h3 className="text-xl font-bold font-heading text-primary">Step 4: Device Optimization</h3>
                        <p className="text-sm text-muted-foreground">Where does your audience primarily live?</p>
                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { id: 'mobile', label: 'Mobile-First', icon: Smartphone, desc: 'Optimized for users on the go' },
                                { id: 'desktop', label: 'Desktop-First', icon: Monitor, desc: 'Focus on complex, high-res layouts' },
                                { id: 'responsive', label: 'Full Responsive Sync', icon: Layout, desc: 'Seamless experience across all devices' },
                            ].map((opt) => (
                                <div
                                    key={opt.id}
                                    onClick={() => handleChange('device', opt.label)}
                                    className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all hover:bg-white/5 ${formData.device === opt.label ? 'border-primary bg-primary/10' : 'border-white/10 bg-background/50'}`}
                                >
                                    <div className={`p-2 rounded-lg ${formData.device === opt.label ? 'bg-primary text-primary-foreground' : 'bg-white/10'}`}>
                                        <opt.icon size={24} />
                                    </div>
                                    <div>
                                        <div className="font-semibold">{opt.label}</div>
                                        <div className="text-xs text-muted-foreground">{opt.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            case 5:
                return (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                        <h3 className="text-xl font-bold font-heading text-primary">Step 5: Project Objectives</h3>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label>Describe the Challenge</Label>
                                <Textarea
                                    value={formData.challenge}
                                    onChange={(e) => handleChange('challenge', e.target.value)}
                                    placeholder="What is your current website failing to do, or what is the main goal?"
                                    className="min-h-[100px] bg-background/50 border-white/10"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Features Needed</Label>
                                <Textarea
                                    value={formData.features}
                                    onChange={(e) => handleChange('features', e.target.value)}
                                    placeholder="List specific functionalities (e.g., payment gateways, member login)..."
                                    className="min-h-[100px] bg-background/50 border-white/10"
                                />
                            </div>
                        </div>
                    </motion.div>
                );
            case 6:
                return (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                        <h3 className="text-xl font-bold font-heading text-primary">Step 6: Visual Inspiration</h3>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label>Show us the Vision (Upload)</Label>
                                <div
                                    onClick={() => fileInputRef.current?.click()}
                                    className="border-2 border-dashed border-white/20 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 hover:bg-white/5 transition-all text-center"
                                >
                                    <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                                    <span className="text-sm text-muted-foreground">{formData.inspirationFile ? formData.inspirationFile.name : "Click to upload screenshots / wireframes"}</span>
                                    <input ref={fileInputRef} type="file" className="hidden" onChange={handleFileChange} accept="image/*,video/*" />
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-white/10" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-card px-2 text-muted-foreground">Or</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>External Reference URL</Label>
                                <div className="relative">
                                    <LinkIcon className="absolute left-3 top-3 text-muted-foreground w-4 h-4" />
                                    <Input
                                        value={formData.inspirationUrl}
                                        onChange={(e) => handleChange('inspirationUrl', e.target.value)}
                                        placeholder="https://dribbble.com/..."
                                        className="pl-10 bg-background/50 border-white/10"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            case 7:
                return (
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
                        <h3 className="text-xl font-bold font-heading text-primary">Step 7: Delivery Timeline</h3>
                        <p className="text-sm text-muted-foreground">When do you need to go live?</p>
                        <div className="grid grid-cols-1 gap-3">
                            {timelines.map((t) => (
                                <div
                                    key={t.id}
                                    onClick={() => handleChange('timeline', t.label)}
                                    className={`p-4 rounded-xl border cursor-pointer transition-all hover:bg-white/5 flex items-center justify-between ${formData.timeline === t.label ? 'border-primary bg-primary/10' : 'border-white/10 bg-background/50'}`}
                                >
                                    <div>
                                        <div className="font-semibold">{t.label}</div>
                                        <div className="text-xs text-muted-foreground">{t.desc}</div>
                                    </div>
                                    <Calendar className={`w-5 h-5 ${formData.timeline === t.label ? 'text-primary' : 'text-muted-foreground'}`} />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <section id="contact" className="relative min-h-screen w-full overflow-hidden bg-background text-foreground scroll-mt-20">
            {/* Background Image and Animated Bubbles */}
            <div className="absolute inset-0 overflow-hidden">
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
                                top: `${Math.random() * 100}%`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Main Content Overlay */}
            <div className="relative z-10 flex flex-col items-center justify-start w-full min-h-screen p-4 md:p-8 lg:p-12 pt-24 md:pt-32">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl p-4 md:p-8 rounded-xl items-center">
                    {/* Left Side: Title */}
                    <div className="flex flex-col justify-center lg:justify-end p-4 lg:p-8 space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-heading text-foreground leading-tight drop-shadow-lg lg:max-w-2xl lg:-mt-[100px]">
                            {title}
                        </h1>
                        <p className="text-xl text-muted-foreground font-body max-w-lg">
                            Take the first step towards your digital transformation. Use our price estimator to get a tailored quote.
                        </p>
                    </div>

                    {/* Right Side: Multi-Step Form */}
                    <div className="bg-card/80 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.6),0_8px_20px_rgba(0,0,0,0.4),0_0_60px_rgba(255,255,255,0.08)] min-h-[600px] flex flex-col">

                        {step <= totalSteps ? (
                            <>
                                {/* Header & Progress */}
                                <div className="mb-8">
                                    <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-2xl font-bold font-heading text-foreground">{mainMessage}</h2>
                                        <span className="text-sm text-muted-foreground font-body">Step {step}/{totalSteps}</span>
                                    </div>
                                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                                        <div
                                            className="bg-primary h-full transition-all duration-500 ease-out"
                                            style={{ width: `${progress}%` }}
                                        />
                                    </div>
                                </div>

                                {/* Form Content */}
                                <div className="flex-grow">
                                    <AnimatePresence mode="wait">
                                        {renderStep()}
                                    </AnimatePresence>
                                </div>

                                {/* Navigation */}
                                <div className="flex justify-between items-center mt-8 pt-4 border-t border-white/10">
                                    <Button
                                        variant="ghost"
                                        onClick={prevStep}
                                        disabled={step === 1}
                                        className={`hover:bg-white/5 ${step === 1 ? 'opacity-0 pointer-events-none' : ''}`}
                                    >
                                        <ArrowLeft className="mr-2 h-4 w-4" /> Back
                                    </Button>

                                    <Button
                                        onClick={nextStep}
                                        disabled={isSubmitting ||
                                            (step === 1 && (!formData.name || !formData.email)) ||
                                            (step === 2 && !formData.category) ||
                                            (step === 4 && !formData.device) ||
                                            (step === 7 && !formData.timeline)
                                        }
                                        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
                                    >
                                        {step === totalSteps ? (isSubmitting ? 'Sending...' : 'Get Estimate') : 'Next'}
                                        {!isSubmitting && step < totalSteps && <ArrowRight className="ml-2 h-4 w-4" />}
                                    </Button>
                                </div>
                            </>
                        ) : (
                            /* Success Screen */
                            <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/50">
                                    <CheckCircle className="w-10 h-10 text-green-500" />
                                </div>
                                <h3 className="text-3xl font-bold font-heading">Thank You!</h3>
                                <p className="text-muted-foreground text-lg max-w-md">
                                    Thank you for your insights. We will get back to you with a detailed cost estimation via email soon.
                                </p>
                                <Button
                                    variant="outline"
                                    className="mt-8 border-white/20 hover:bg-white/5"
                                    onClick={() => {
                                        setStep(1);
                                        setFormData({
                                            name: '', email: '', location: '', category: '', subCategory: '',
                                            device: '', challenge: '', features: '', inspirationUrl: '',
                                            inspirationFile: null, timeline: ''
                                        });
                                    }}
                                >
                                    Start New Estimate
                                </Button>
                            </div>
                        )}
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
