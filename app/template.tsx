"use client";

import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setOpacity(1), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        opacity: opacity,
        transition: "opacity 0.5s ease-in-out",
      }}
    >
      {children}
    </div>
  );
}