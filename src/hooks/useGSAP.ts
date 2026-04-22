"use client";

import { useGSAP as useGSAPReact } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

/**
 * Register ScrollTrigger exactly once on the client. Safe to call repeatedly.
 */
export function registerScrollTrigger(): void {
  if (registered) return;
  if (typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export { useGSAPReact as useGSAP };
export { gsap, ScrollTrigger };
