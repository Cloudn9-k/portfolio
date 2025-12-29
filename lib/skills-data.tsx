import { Code, Wrench, Languages } from 'lucide-react';
import { VercelIcon } from '@/components/icons/vercel';
import { NextjsIcon } from '@/components/icons/nextdotjs';
import { TypescriptIcon } from '@/components/icons/typescript';
import { ReactIcon } from '@/components/icons/react';
import { TailwindIcon } from '@/components/icons/tailwind';
import { FirebaseIcon } from '@/components/icons/firebase';
import { GitIcon } from '@/components/icons/git';
import { GithubIcon } from '@/components/icons/github';
import { VscodeIcon } from '@/components/icons/vscode';
import { BashIcon } from '@/components/icons/bash';
export interface Skill {
  name: string;
  icon: React.ReactNode;
  iconClassName?: string;
}

export interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  subtitle?: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Core Languages',
    icon: <Languages size={32} />,
    subtitle: "The foundational languages I use for problem-solving and building projects.",
    skills: [
      { name: 'JS / TS', icon: <TypescriptIcon />, iconClassName: 'p-1' },
    ],
  },
  {
    title: 'Web & AI Technologies',
    icon: <Code size={32} />,
    subtitle: 'Technologies I use for web projects, data analysis, and AI.',
    skills: [
      { name: 'Next.js', icon: <NextjsIcon /> },
      { name: 'React', icon: <ReactIcon /> },
      { name: 'Tailwind CSS', icon: <TailwindIcon /> },
      { name: 'Firebase', icon: <FirebaseIcon /> },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: <Wrench size={32} />,
    subtitle: 'The ecosystem of tools and platforms that support my development workflow.',
    skills: [
       { name: 'Git', icon: <GitIcon /> },
       { name: 'GitHub', icon: <GithubIcon /> },
       { name: 'VS Code', icon: <VscodeIcon /> },
       { name: 'Bash / Zsh', icon: <BashIcon /> },
       { name: 'Vercel', icon: <VercelIcon /> },
    ],
  },
];