"use client";

import type { ReactNode } from "react";
import { useLenis } from "@/hooks/useLenis";

interface LenisProviderProps {
  children: ReactNode;
}

/**
 * Client-only provider that boots Lenis smooth scroll and bridges it
 * into GSAP's ticker + ScrollTrigger. Renders children with no DOM wrapper.
 */
export function LenisProvider({ children }: LenisProviderProps) {
  useLenis();
  return <>{children}</>;
}

export default LenisProvider;
