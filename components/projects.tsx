'use client';

import { projects } from '@/lib/projects-data';
import { useInView } from '@/hooks/use-in-view';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';

interface ProjectsProps {
  featuredOnly?: boolean;
}

export default function Projects({ featuredOnly = false }: ProjectsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref);
  const projectsToShow = featuredOnly
    ? projects.filter((p) => p.isFeatured)
    : projects;

  return (
    <section
      ref={ref}
      className={cn(
        'space-y-6 transition-opacity duration-1000 ease-out w-full',
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
      style={{
        transitionDelay: isVisible ? '150ms' : '0ms',
      }}
    >
      {featuredOnly && (
        <h2
          className={cn(
            'text-2xl font-bold text-primary tracking-tight text-center transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          Featured Projects
        </h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsToShow.map((project, index) => (
          <Card
            key={project.title}
            className={cn(
              'group relative overflow-hidden bg-card/30 border-border/40 shadow-lg transition-all duration-700 ease-out text-left',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            )}
            style={{
              transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms',
            }}
          >
            <div className="animate-border-glow"></div>
            <div className="relative z-10 p-2">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                <CardDescription className="text-foreground/80 pt-1">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between items-center">
                <Badge variant="secondary" className="bg-background/50">{project.license}</Badge>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </a>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>

      {featuredOnly && (
        <div 
          className={cn(
            "text-center transition-all duration-700",
             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          )}
          style={{ transitionDelay: '500ms'}}
        >
          <Link href="/projects">
            <Button variant="outline" className="bg-card/30 border-border/40">
              See More Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
}