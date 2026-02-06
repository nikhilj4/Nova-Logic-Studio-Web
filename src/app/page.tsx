import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Image from "next/image";
import { ContactSection } from "@/components/ui/contact";
import MarqueeSection from "@/components/MarqueeSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import { TextRevealByWord } from "@/components/ui/text-reveal";
import WhyChooseUs from "@/components/WhyChooseUs";
import ToolsSection from "@/components/ToolsSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <MarqueeSection />

      <WhyChooseUs />
      <TextRevealByWord text="Nova Logic Studio. We build digital experiences that matter. Turning complex problems into elegant solutions." />
      <FeaturedProjects />
      <ToolsSection />

      <ContactSection />


    </main>
  );
}
