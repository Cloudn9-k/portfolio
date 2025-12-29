/**
 * @file src/components/desktop-nav.tsx
 * @description The navigation bar component for desktop screens.
 * Updated with Glassmorphism style and better interaction effects.
 */
'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Home, User, Code, Star } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: User },
  { href: '/skills', label: 'Skills & Tech', icon: Code },
  { href: '/projects', label: 'Projects', icon: Star },
];

/**
 * DesktopNav component renders a horizontal navigation menu for larger screens.
 * It highlights the active link based on the current URL pathname.
 * @returns {JSX.Element} A nav element containing the navigation links.
 */
export default function DesktopNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full border border-white/10 bg-black/20 backdrop-blur-xl shadow-lg ring-1 ring-white/5 transition-all duration-300 hover:bg-black/30 hover:border-white/20">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out group',
    
              'hover:bg-white/10',
        
              isActive 
                ? 'bg-primary/20 text-primary border border-primary/20 shadow-[0_0_10px_rgba(var(--primary),0.2)]' 
                : 'text-muted-foreground hover:text-foreground border border-transparent'
            )}
          >
        
            <span className={cn(
                "transition-transform duration-300 group-hover:scale-110", 
                isActive && "scale-110"
            )}>
                <link.icon className="h-4 w-4" />
            </span>
            
            <span>{link.label}</span>
            {isActive && (
                <span className="absolute inset-0 rounded-full bg-primary/10 blur-md -z-10" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}