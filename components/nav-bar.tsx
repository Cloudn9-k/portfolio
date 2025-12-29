import Link from 'next/link';
import { Home, User, Code, Star, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="hidden md:block">
        <nav className="flex items-center gap-2 bg-card/50 border border-border/60 p-1 rounded-full backdrop-blur-md">
          <Link href="/" className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-white/10 bg-white/10 text-primary">
            <Home className="h-4 w-4" />
            Home
          </Link>
          <Link href="/about" className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-white/10 text-foreground/70">
            <User className="h-4 w-4" />
            About
          </Link>
          <Link href="/skills" className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-white/10 text-foreground/70">
            <Code className="h-4 w-4" />
            Skills
          </Link>
          <Link href="/projects" className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-white/10 text-foreground/70">
            <Star className="h-4 w-4" />
            Projects
          </Link>
        </nav>
      </div>
      <div className="md:hidden">
         <button className="h-12 w-12 flex items-center justify-center rounded-full bg-card/50 border border-border/60 backdrop-blur-md text-foreground/70">
            <Menu className="h-6 w-6" />
         </button>
      </div>
    </div>
  );
}