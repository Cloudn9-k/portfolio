import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import AnimatedBackground from "@/components/animated-background"
import MainNav from '@/components/main-nav';
import GlobalPetRenderer from '@/components/global-pet-renderer';
import { Analytics } from '@vercel/analytics/react';
import GuidedTour from '@/components/guided-tour';
import { Space_Grotesk, Lobster, Orbitron } from "next/font/google";
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const lobster = Lobster({ weight: "400", subsets: ["latin"], variable: "--font-lobster" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
export const metadata: Metadata = {
  title: 'Tong An Khang | Portfolio',
  description: 'The personal portfolio of Tong An Khang, a Software Development student at FPT Polytechnic.',
  keywords: [
    'Tong An Khang',
    'Portfolio',
    'Next.js',
    'Java Spring Boot',
    'Vue.js',
    'FPT Polytechnic',
    'Software Developer'
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${lobster.variable} ${orbitron.variable} font-body antialiased`}>
          <AnimatedBackground />
          <GlobalPetRenderer />
          <div id="pet-container"></div>
          <MainNav />
          <main>{children}</main>
          <Toaster />
          <Analytics />
          <GuidedTour />
      </body>
    </html>
  );
}