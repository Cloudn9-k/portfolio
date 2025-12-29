"use client"

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useInView } from '@/hooks/use-in-view';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

export default function ProfileSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);

  return (
    <section 
      ref={ref}
      className="flex flex-col items-center space-y-4 text-center pt-12 md:pt-20"
    >
      <div 
        className={cn(
            "relative group transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        )}
      >
        <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-accent-foreground rounded-full opacity-0 group-hover:opacity-75 transition duration-500 group-hover:blur-xl group-hover:animate-none"></div>
        <Avatar className="relative h-28 w-28 md:h-32 md:w-32 border-4 border-card/80 shadow-lg group-hover:border-primary/50 transition-all duration-500 ease-out transform group-hover:scale-110">
          <AvatarImage src="photo/PhoCaoLeadershipDien.jpg" alt="Tong An Khang" className="object-cover" />
          <AvatarFallback>AK</AvatarFallback>
        </Avatar>
      </div>
      
      <div 
        className={cn(
            "transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        style={{transitionDelay: '200ms'}}
      >
        <div className="flex items-center justify-center gap-2">
            <h1 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-shadow cursor-default">
              Tong An Khang
            </h1>
        </div>
        <p className="text-sm md:text-base text-foreground/70 mt-1 text-shadow max-w-md mx-auto">
          Software Development Student · Full Stack Developer · Tech Enthusiast
        </p>
        <p className="text-xs text-foreground/50 mt-2">
           Born in 2007 · FPT Polytechnic College
        </p>
      </div>
    </section>
  );
}