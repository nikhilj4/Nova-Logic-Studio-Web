"use client";
import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

function StackedCircularFooter() {
    return (
        <footer className="bg-black py-12 text-white border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center">
                    <div className="mb-8 rounded-full bg-white/10 p-8">
                        <div className="relative w-12 h-12">
                            <Image src="/assets/logo.png" alt="Nova Logic" fill className="object-contain" />
                        </div>
                    </div>
                    <nav className="mb-8 flex flex-wrap justify-center gap-6">
                        <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
                        <a href="#services" className="hover:text-gray-300 transition-colors">Services</a>
                        <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
                        <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
                    </nav>
                    <div className="mb-8 flex space-x-4">
                        <Button variant="outline" size="icon" className="rounded-full bg-black border-white/20 hover:bg-white/10 text-white">
                            <Facebook className="h-4 w-4" />
                            <span className="sr-only">Facebook</span>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full bg-black border-white/20 hover:bg-white/10 text-white">
                            <Twitter className="h-4 w-4" />
                            <span className="sr-only">Twitter</span>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full bg-black border-white/20 hover:bg-white/10 text-white">
                            <Instagram className="h-4 w-4" />
                            <span className="sr-only">Instagram</span>
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full bg-black border-white/20 hover:bg-white/10 text-white">
                            <Linkedin className="h-4 w-4" />
                            <span className="sr-only">LinkedIn</span>
                        </Button>
                    </div>
                    <div className="mb-8 w-full max-w-md">
                        <form className="flex space-x-2" onSubmit={(e) => e.preventDefault()}>
                            <div className="flex-grow">
                                <Label htmlFor="email" className="sr-only">Email</Label>
                                <Input id="email" placeholder="Enter your email" type="email" className="rounded-full bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-white/20" />
                            </div>
                            <Button type="submit" className="rounded-full bg-white text-black hover:bg-gray-200">Subscribe</Button>
                        </form>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} Nova Logic Studio. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export { StackedCircularFooter }
