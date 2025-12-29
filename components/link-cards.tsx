"use client"

import LinkCard from './link-card';
import { useInView } from '@/hooks/use-in-view';
import { useRef } from 'react';
import { GithubIcon } from '@/components/icons/github';
import { MailIcon } from '@/components/icons/mail';
import { InstagramIcon } from './icons/instagram';
import { FacebookIcon } from './icons/facebook';
// import { LinkedinIcon } from './icons/linkedin';

const links = [
  { href: 'https://github.com/Cloudn9-k', title: 'GitHub', Icon: GithubIcon },
  { href: 'Tongankhang0407@gmail.com', title: 'Mail', Icon: MailIcon },
  { href: 'https://www.instagram.com/cloudsn9/', title: 'Instagram', Icon: InstagramIcon },
  { href: 'https://www.facebook.com/khang.an.81871/?locale=vi_VN/', title: 'Facebook', Icon: FacebookIcon },
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