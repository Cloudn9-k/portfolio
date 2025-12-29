import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import AnimatedBackground from "@/components/animated-background"
import MainNav from '@/components/main-nav';
import GlobalPetRenderer from '@/components/global-pet-renderer';
import { Analytics } from '@vercel/analytics/react';
import GuidedTour from '@/components/guided-tour';

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Lobster&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
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