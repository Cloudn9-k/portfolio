"use client"

import { useState, useEffect } from 'react';

export default function PageFooter() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="w-full text-center p-4 mt-8 animate-fade-in" style={{ animationDelay: '1000ms' }}>
      <p className="text-xs text-foreground/50">
        Tong An Khang &copy; {year || ''}
      </p>
    </footer>
  );
}