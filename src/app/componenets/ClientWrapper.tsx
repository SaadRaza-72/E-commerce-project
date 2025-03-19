// src/components/ClientWrapper.tsx
"use client"; // ✅ Client Component directive

import { useEffect, useState } from "react";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // 🎯 Ensure content loads only after hydration
  return isClient ? children : <p className="text-center">Loading content...</p>;
}
