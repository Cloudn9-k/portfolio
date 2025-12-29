import PageFooter from '@/components/page-footer';
import SkillsClientPage from '@/components/skill-client-page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Technical Skills & Technologies | Akshay K Rooben Abraham',
  alternates: {
    canonical: '/skills',
  },
};

export default function SkillsPage() {
  return (
    <div className="relative z-10 flex min-h-screen w-full flex-col items-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-7xl flex-grow">
        <header className="mb-12 pt-20 text-center">
          <h1 className="text-4xl font-bold text-primary tracking-tight">
            Skills & Technologies
          </h1>
        </header>
        <main className="space-y-16">
          <SkillsClientPage />
        </main>
      </div>
      <PageFooter />
    </div>
  );
}