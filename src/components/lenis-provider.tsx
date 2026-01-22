"use client";

import { ReactNode } from "react";

interface LenisProviderProps {
  children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  // Lenis is now initialized in useLenisScroll hook for better scroll progress tracking
  return <>{children}</>;
}
