import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Image from "next/image";
import { ContactSection } from "@/components/ui/contact";
import MarqueeSection from "@/components/MarqueeSection";
import { TextRevealByWord } from "@/components/ui/text-reveal";
import WhyChooseUs from "@/components/WhyChooseUs";
import ToolsSection from "@/components/ToolsSection";
import FAQSection from "@/components/FAQSection";


export default function Home() {
  return (
    <main className="min-h-screen text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <MarqueeSection />

      <WhyChooseUs />
      <TextRevealByWord
        text="Nova Logic Studio. We build digital experiences that matter. Turning complex problems into elegant solutions."
        highlightWords={["Nova", "Logic", "Studio", "elegant"]}
      />
      <ToolsSection />

      <FAQSection />

      <ContactSection />


    </main>
  );
}
