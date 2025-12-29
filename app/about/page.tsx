import AnimatedBackground from "@/components/animated-background";
import PageFooter from "@/components/page-footer";
import { BookOpen, Telescope, Users, Code } from "lucide-react";
import type { Metadata } from 'next';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: 'About Tong An Khang | My Journey',
  alternates: {
    canonical: '/about',
  },
};

const aboutSections = [
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Education Journey",
    content: "My journey in technology began early. In 2023, I studied at FPT Polyschool, laying the groundwork for my coding skills. Currently, as of 2025, I am pursuing a degree in Software Development at FPT Polytechnic College to further specialize in this field.",
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Technical Expertise",
    content: "I specialize in both Back-end and Front-end development. My stack includes Java Spring Boot for robust APIs, Vue.js for dynamic interfaces, and WebSocket for real-time applications. I love building systems that solve real-world problems.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Collaboration & Growth",
    content: "I thrive in team environments, having experience working in teams of 5 on complex projects. I believe in continuous learning and applying modern solutions like Docker, OAuth2, and automated data processing.",
  }
];

export default function AboutPage() {
  return (
    <>
      <AnimatedBackground />
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-5xl">
          <header className="mb-12 text-center pt-20">
            <h1 className="text-4xl font-bold text-primary tracking-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              About Me
            </h1>
            <p className="text-foreground/70 mt-2 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '350ms' }}>
              A look into my education, projects, and passion for software development.
            </p>
          </header>
          <main>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
             {aboutSections.map((section, index) => (
                <Card 
                  key={section.title}
                  className={cn(
                    "group relative overflow-hidden bg-card/30 border-border/40 rounded-2xl p-4 text-center shadow-lg animate-fade-in-up",
                    "transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
                  )}
                  style={{ animationDelay: `${500 + index * 150}ms`}}
                >
                  <div className="animate-border-glow"></div>
                  <div className="relative z-10">
                    <CardHeader className="flex flex-col items-center gap-4">
                      <div className="text-primary bg-primary/10 p-3 rounded-full transition-transform duration-300 group-hover:scale-110">
                        {section.icon}
                      </div>
                      <CardTitle className="text-xl text-primary">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80 leading-relaxed text-sm">
                        {section.content}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </main>
        </div>
        <div className="w-full max-w-4xl flex-grow" />
        <PageFooter />
      </div>
    </>
  );
}