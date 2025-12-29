"use client"

import { useRef } from 'react';
import { useInView } from '@/hooks/use-in-view';
import LinkCard from './link-card';
import { InstagramIcon } from '@/components/icons/instagram';
import { GithubIcon } from '@/components/icons/github';
import { MailIcon } from '@/components/icons/mail';
import { FacebookIcon } from '@/components/icons/facebook';

// Dữ liệu các liên kết
const links = [
  { href: 'https://github.com/Cloudn9-k', title: 'GitHub', Icon: GithubIcon },
  { href: 'mailto:Tongankhang0407@gmail.com', title: 'Mail', Icon: MailIcon },
  { href: 'https://www.facebook.com/khang.an.81871/?locale=vi_VN', title: 'Facebook', Icon: FacebookIcon },
  { href: 'https://www.instagram.com/cloudsn9/', title: 'Instagram', Icon: InstagramIcon },
 
];

export default function LinkCards() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref); // Logic hiển thị khi cuộn tới

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