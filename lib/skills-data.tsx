import { Code, Wrench, Languages, Server, Layout } from 'lucide-react';
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
import { JavaIcon } from '@/components/icons/java';
import { JavascriptIcon } from '@/components/icons/javascript';
import { SpringBootIcon } from '@/components/icons/spring-boot';
import { MysqlIcon } from '@/components/icons/mysql';
import { SqlServerIcon } from '@/components/icons/sql-server';
import { VueJsIcon } from '@/components/icons/vue-js';
import { AzureDataStudioIcon } from '@/components/icons/azure-data-studio';
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
      { name: 'Java', icon: <JavaIcon /> },
      { name: 'JavaScript', icon: <JavascriptIcon /> },
    ],
  },
  {
    title: 'Backend & Database',
    icon: <Server size={32} />,
    subtitle: 'Technologies for server-side logic and data management.',
    skills: [
      { name: 'Spring Boot', icon: <SpringBootIcon /> },
      { name: 'MySQL', icon: <MysqlIcon /> },
      { name: 'SQL Server', icon: <SqlServerIcon /> },
      { name: 'Firebase', icon: <FirebaseIcon /> },
    ],
  },
 {
    title: 'Frontend & UI',
    icon: <Layout size={32} />,
    subtitle: 'Building interactive and responsive user interfaces.',
    skills: [
      { name: 'Vue.js', icon: <VueJsIcon /> },
      { name: 'React', icon: <ReactIcon /> },
      { name: 'Next.js', icon: <NextjsIcon /> },
      { name: 'Tailwind CSS', icon: <TailwindIcon /> },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: <Wrench size={32} />,
    subtitle: 'The ecosystem of tools and platforms that support my development workflow.',
    skills: [
        { name: 'Azure Data Studio', icon: <AzureDataStudioIcon /> },
       { name: 'Git', icon: <GitIcon /> },
       { name: 'GitHub', icon: <GithubIcon /> },
       { name: 'VS Code', icon: <VscodeIcon /> },
       { name: 'Bash / Zsh', icon: <BashIcon /> },
       { name: 'Vercel', icon: <VercelIcon /> },
    ],
  },
];