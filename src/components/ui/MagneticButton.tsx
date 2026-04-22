"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  /** Radius (px) in which pointer influences the element. */
  radius?: number;
  /** How strongly the inner content tracks the pointer, 0..1. */
  strength?: number;
}

/**
 * Wraps children so that when the pointer enters a ~radius px zone
 * around the element, the inner content translates toward the pointer.
 */
export function MagneticButton({
  children,
  className,
  radius = 60,
  strength = 0.35,
}: MagneticButtonProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    const xTo = gsap.quickTo(inner, "x", {
      duration: 0.45,
      ease: "expo.out",
    });
    const yTo = gsap.quickTo(inner, "y", {
      duration: 0.45,
      ease: "expo.out",
    });

    const onMove = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const dist = Math.hypot(dx, dy);
      const reach = Math.max(rect.width, rect.height) / 2 + radius;

      if (dist < reach) {
        xTo(dx * strength);
        yTo(dy * strength);
      } else {
        xTo(0);
        yTo(0);
      }
    };

    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    wrap.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, [radius, strength]);

  return (
    <div
      ref={wrapRef}
      className={cn("inline-flex will-change-transform", className)}
    >
      <span ref={innerRef} className="inline-flex will-change-transform">
        {children}
      </span>
    </div>
  );
}

export default MagneticButton;
