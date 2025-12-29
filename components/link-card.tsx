"use client"

import React, { useRef } from 'react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LinkCardProps {
  href: string;
  title: string;
  Icon: LucideIcon;
  delay: number; 
  isVisible: boolean; 
}

export default function LinkCard({ href, title, Icon, delay, isVisible }: LinkCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    const rotateX = (y / height - 0.5) * -20; 
    const rotateY = (x / width - 0.5) * 20;   

    cardRef.current.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.08, 1.08, 1.08)`;
    cardRef.current.style.setProperty('--glow-x', `${x}px`);
    cardRef.current.style.setProperty('--glow-y', `${y}px`);
    cardRef.current.classList.add('is-hovering');
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(2000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    cardRef.current.classList.remove('is-hovering');
  };

  return (
    <a
      ref={cardRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex items-center justify-center w-full p-4 h-16 rounded-xl bg-card/30 border border-border/40 shadow-lg transition-all duration-700 ease-out",
        "hover:border-primary/70 hover:shadow-[0_0_60px_-15px_hsl(var(--primary)/0.5)]",
        "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
        "overflow-hidden",
        "before:absolute before:w-56 before:h-56 before:left-[var(--glow-x)] before:top-[var(--glow-y)] before:-translate-x-1/2 before:-translate-y-1/2 before:bg-primary/20 before:blur-3xl before:opacity-0 before:transition-opacity before:duration-500",
        "is-hovering:before:opacity-100", 
        isVisible ? "animate-fade-in-up" : "opacity-0"
      )}
      style={{ animationDelay: `${delay}ms`, transitionProperty: 'transform, box-shadow, border-color' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Icon className="absolute left-4 h-6 w-6 text-foreground/60 transition-colors group-hover:text-primary" />
      <span className="font-medium text-foreground transition-colors group-hover:text-primary">
        {title}
      </span>
    </a>
  );
}