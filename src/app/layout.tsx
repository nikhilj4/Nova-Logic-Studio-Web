import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LiquidEther from "@/components/ui/LiquidEther";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nova Logic Studio | Best Price & Stunning UI",
  description: "Nova Logic Studio provides premium web development services for photographers, architects, and more with stunning UI and best prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
          <LiquidEther
            colors={['#1a1a2e', '#16213e', '#0f3460']}
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
