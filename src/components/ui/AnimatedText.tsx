"use client";

import { createElement, useEffect, useRef, type ElementType } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerScrollTrigger } from "@/hooks/useGSAP";
import { cn } from "@/lib/utils";

type SplitMode = "chars" | "words" | "lines";
type TriggerMode = "view" | "mount";

interface AnimatedTextProps {
  text: string;
  as?: ElementType;
  split?: SplitMode;
  trigger?: TriggerMode;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  /** Viewport trigger start (GSAP ScrollTrigger syntax). */
  start?: string;
}

export function AnimatedText({
  text,
  as: Tag = "span",
  split = "words",
  trigger = "view",
  className,
  delay = 0,
  stagger = 0.04,
  duration = 0.9,
  start = "top 85%",
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const el = ref.current;
    if (!el) return;
    registerScrollTrigger();

    const splitInstance = new SplitType(el, {
      types: split,
      tagName: "span",
    });

    const targets =
      split === "chars"
        ? splitInstance.chars
        : split === "lines"
          ? splitInstance.lines
          : splitInstance.words;
    if (!targets || targets.length === 0) return;

    gsap.set(targets, {
      yPercent: 110,
      opacity: 0,
      display: "inline-block",
    });

    const tween = gsap.to(targets, {
      yPercent: 0,
      opacity: 1,
      duration,
      delay,
      stagger,
      ease: "expo.out",
      paused: trigger === "view",
    });

    let st: ScrollTrigger | null = null;
    if (trigger === "view") {
      st = ScrollTrigger.create({
        trigger: el,
        start,
        once: true,
        onEnter: () => tween.play(),
      });
    }

    return () => {
      tween.kill();
      st?.kill();
      splitInstance.revert();
    };
  }, [text, split, trigger, delay, stagger, duration, start]);

  return createElement(
    Tag,
    {
      ref,
      className: cn("inline-block overflow-hidden", className),
    },
    text,
  );
}

export default AnimatedText;
