'use client';

import { useEffect, useState } from 'react';
import { skillsData, SkillCategory } from '@/lib/skills-data';
import { Card, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { InfiniteScroller } from '@/components/infinite-scroller';

const CategoryIcon = ({ icon }: { icon: React.ReactNode }) => (
  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
    {icon}
  </div>
);

export default function SkillsClientPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const renderCategory = (category: SkillCategory, index: number) => (
    <div 
      key={category.title}
      className={cn(
        "space-y-6 transition-all duration-700 ease-out",
        isMounted ? "animate-fade-in-up" : "opacity-0"
      )}
      style={{ animationDelay: `${200 + index * 150}ms` }}
    >
      <div className="flex flex-col items-center text-center">
        <CategoryIcon icon={category.icon} />
        <h2 className="text-2xl font-bold text-primary mb-2">{category.title}</h2>
        {category.subtitle && (
          <p className="text-foreground/70 max-w-2xl text-sm leading-relaxed">{category.subtitle}</p>
        )}
      </div>
       <InfiniteScroller speed={index % 2 === 0 ? "slow" : "normal"}>
        {category.skills.map((skill) => (
          <Card
            key={skill.name}
            className={cn(
              "bg-card/40 border-border/40 shadow-lg text-center flex flex-col items-center justify-center w-[160px] h-[120px] shrink-0 p-4 transition-shadow,background-color duration-300 hover:shadow-xl hover:bg-card/60 relative overflow-hidden group"
            )}
          >
             <div className="relative z-10 flex flex-col items-center justify-center gap-2 h-full">
                <div className={cn("h-12 w-12 flex items-center justify-center text-foreground", skill.iconClassName)}>
                  <div className="h-10 w-10 flex items-center justify-center">
                     {skill.icon}
                  </div>
                </div>
                <p className="text-sm font-medium text-foreground/90">{skill.name}</p>
              </div>
          </Card>
        ))}
      </InfiniteScroller>
    </div>
  );

  return (
    <>
      {skillsData.map(renderCategory)}
    </>
  );
}