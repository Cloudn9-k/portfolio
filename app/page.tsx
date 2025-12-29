import ProfileSection from '@/components/profile-section';
import LinkCards from '@/components/link-cards';
import PageFooter from '@/components/page-footer';
import Skills from '@/components/skills';
import { Separator } from '@/components/ui/seperator';
import EasterEgg from '@/components/easter-egg';
import Projects from '@/components/projects';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-between p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-3xl flex-grow flex flex-col justify-center">
        <div className="w-full space-y-6 md:space-y-8">
          <ProfileSection />
          <LinkCards />
          <Separator className="bg-border/50" />
           <div className="text-center">
             <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Read more about my journey &rarr;
            </Link>
          </div>
          <Separator className="bg-border/50" />
          <Projects featuredOnly />
          <Separator className="bg-border/50" />
          <Skills />
          <Separator className="bg-border/50" />
          <EasterEgg />
        </div>
      </div>
      <PageFooter />
    </div>
  );
}