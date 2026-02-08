import type { Metadata } from "next";
import { Playfair_Display, Questrial, Caveat } from "next/font/google"; // Playfair Display is closer to Migra's sharp elegance
import "./globals.css";

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
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable} ${scriptFont.variable} font-body antialiased bg-[#2C2B30] text-[#D6D6D6]`}>
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
