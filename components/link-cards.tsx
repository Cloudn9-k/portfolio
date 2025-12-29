"use client"

import LinkCard from './link-card';
import { useInView } from '@/hooks/use-in-view';
import { useRef } from 'react';
import { GithubIcon } from '@/components/icons/github';
import { MailIcon } from '@/components/icons/mail';
// import { LinkedinIcon } from './icons/linkedin';

const links = [
  { href: 'https://github.com/akshay-abraham/', title: 'GitHub', Icon: GithubIcon },
  { href: 'mailto:akshaykroobenabraham@gmail.com', title: 'Mail', Icon: MailIcon },
];

export default function LinkCards() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref);
  return (
    <div ref={ref} className="space-y-4">
      {links.map((link, index) => (
        <LinkCard 
          key={link.href} 
          {...link} 
          delay={300 + index * 100}
          isVisible={isVisible}
        />
      ))}
    </div>
  );
}