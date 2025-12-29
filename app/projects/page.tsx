import AnimatedBackground from "@/components/animated-background";
import PageFooter from "@/components/page-footer";
import Projects from "@/components/projects";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Projects & Contributions | Akshay K Rooben Abraham',
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsPage() {
  return (
    <>
      <AnimatedBackground />
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl flex-grow">
          <header className="mb-8 pt-20 text-center">
            <h1 className="text-4xl font-bold text-primary tracking-tight">
              Projects & Contributions
            </h1>
          </header>
          <div className="bg-card/30 border border-border/40 rounded-lg p-4 text-center text-sm text-foreground/70 mb-8 italic">
             I started doing public projects only from August 2025. All previous work isn’t recorded here.
          </div>
          <Projects />
        </div>
        <PageFooter />
      </div>
    </>
  );
}