import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import AnimatedBackground from "@/components/animated-background"
import MainNav from '@/components/main-nav';
import GlobalPetRenderer from '@/components/global-pet-renderer';
import { Analytics } from '@vercel/analytics/react';
import GuidedTour from '@/components/guided-tour';
import { JetBrains_Mono, Orbitron } from "next/font/google";
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-jetbrains"
});

const orbitron = Orbitron({ 
  subsets: ["latin"], 
  variable: "--font-orbitron" 
});
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
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Tống An Khang',
  alternateName: ['Cloudn9', 'Khang'],
  url: '',
  jobTitle: 'Developer',
  alumniOf: {
    '@type': 'Organization',
    name: 'FPT Polytechnic',
  },
  sameAs: [
    'https://www.facebook.com/khang.an.81871/?locale=vi_VN',
    'https://github.com/Cloudn9-k',
    'https://www.instagram.com/cloudsn9/',
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
        <meta name="google-site-verification" content="-ggF-eMSfmD9YH-4yLzcQDEjUmv9WBmZuwxjsFAHifA" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jetbrainsMono.variable} ${orbitron.variable} font-body antialiased`}>
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