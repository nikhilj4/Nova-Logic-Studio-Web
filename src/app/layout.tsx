import type { Metadata } from "next";
import { Playfair_Display, Questrial, Caveat } from "next/font/google"; // Playfair Display is closer to Migra's sharp elegance
import "./globals.css";
import LiquidEther from "@/components/ui/LiquidEther";

const headingFont = Playfair_Display({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-heading",
});

const bodyFont = Questrial({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-body",
});

const scriptFont = Caveat({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-script",
});

export const metadata: Metadata = {
  title: "Nova Logic Studio",
  description: "Crafting Digital Experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} ${scriptFont.variable} font-body antialiased bg-[#2C2B30] text-[#D6D6D6]`}>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
          <LiquidEther
            colors={['#2C2B30', '#4F4F51', '#E65151']}
            mouseForce={15}
            cursorSize={80}
            isViscous={true}
            viscous={25}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.4}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.3}
            autoIntensity={1.8}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
          />
        </div>
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
