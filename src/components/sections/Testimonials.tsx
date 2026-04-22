"use client";

import { useRef } from "react";
import { useGSAP, gsap, registerScrollTrigger } from "@/hooks/useGSAP";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  tag: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "ProSecure ist der stille Partner unserer Jahresgalas – präsent, wenn es nötig ist, unsichtbar, wenn es nicht nötig ist.",
    author: "Kulturstiftung Dresden",
    role: "Intendanz",
    tag: "VERANSTALTUNGSSCHUTZ",
  },
  {
    quote:
      "Seit sieben Jahren verantwortet ProSecure den Objektschutz unseres Logistikzentrums. Keine Zwischenfälle. Keine Diskussionen.",
    author: "Sächsische Logistik GmbH",
    role: "Werkschutzleitung",
    tag: "OBJEKTSCHUTZ",
  },
  {
    quote:
      "Ihr Personenschutzteam arbeitet auf einem Niveau, das ich sonst nur aus Berlin und München kenne.",
    author: "Private Mandantin",
    role: "Ärztin",
    tag: "PERSONENSCHUTZ",
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      registerScrollTrigger();
      const scope = sectionRef.current;
      if (!scope) return;

      const slides = scope.querySelectorAll<HTMLElement>("[data-slide]");
      const segments = scope.querySelectorAll<HTMLElement>(
        "[data-progress-segment]",
      );
      if (slides.length === 0) return;

      // Initial state: first visible, others scaled down + hidden
      gsap.set(slides[0], { opacity: 1, scale: 1 });
      for (let i = 1; i < slides.length; i++) {
        gsap.set(slides[i], { opacity: 0, scale: 0.85 });
      }
      if (segments.length > 0) {
        gsap.set(segments[0], { backgroundColor: "#c9a84c" });
        for (let i = 1; i < segments.length; i++) {
          gsap.set(segments[i], { backgroundColor: "rgba(201,168,76,0.2)" });
        }
      }

      const pinTarget = scope.querySelector<HTMLElement>("[data-pin-target]");
      if (!pinTarget) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinTarget,
          start: "top top",
          end: "+=2400",
          pin: true,
          scrub: true,
          anticipatePin: 1,
        },
      });

      // Transitions between slides
      for (let i = 0; i < slides.length - 1; i++) {
        const current = slides[i];
        const next = slides[i + 1];
        tl.to(
          current,
          { opacity: 0, scale: 1.2, duration: 1, ease: "power2.in" },
          i,
        );
        tl.fromTo(
          next,
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
          i,
        );
        if (segments[i] && segments[i + 1]) {
          tl.to(
            segments[i],
            {
              backgroundColor: "rgba(201,168,76,0.2)",
              duration: 0.5,
            },
            i,
          );
          tl.to(
            segments[i + 1],
            { backgroundColor: "#c9a84c", duration: 0.5 },
            i,
          );
        }
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="referenzen"
      className="relative w-full bg-ink"
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 py-32 lg:py-44">
        {/* Header */}
        <div className="max-w-3xl">

          <h2 className="mt-6 font-display font-extrabold text-5xl lg:text-7xl text-bone leading-[1.02] tracking-tight">
            Vertrauen, das sich bewährt.
          </h2>
        </div>
      </div>

      {/* Pinned slideshow stage */}
      <div
        data-pin-target
        className="relative h-screen w-full overflow-hidden flex items-center"
      >
        {/* Progress indicator */}
        <div className="absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-2">
          {TESTIMONIALS.map((_, i) => (
            <span
              key={i}
              data-progress-segment
              className="block h-12 w-[2px] bg-gold/20 transition-colors"
              style={{ willChange: "background-color" }}
            />
          ))}
        </div>

        {/* Slides */}
        <div className="relative mx-auto w-full max-w-5xl px-12 lg:px-24">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              data-slide
              className="absolute inset-0 flex flex-col justify-center px-12 lg:px-24"
              style={{ willChange: "transform, opacity" }}
            >
              <blockquote className="font-display font-bold italic text-3xl lg:text-5xl text-bone leading-[1.15] tracking-tight max-w-4xl">
                <span aria-hidden className="text-gold/60 mr-2">
                  „
                </span>
                {t.quote}
                <span aria-hidden className="text-gold/60 ml-1">
                  "
                </span>
              </blockquote>
              <div className="mt-10 flex flex-col gap-2">
                <span className="font-mono text-xs uppercase tracking-[0.28em] text-bone/60">
                  — {t.author} · {t.role}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-gold">
                  {t.tag}
                </span>
              </div>
            </div>
          ))}

          {/* Spacer so parent gets height (slides are absolute) */}
          <div className="invisible" aria-hidden>
            <blockquote className="font-display font-bold italic text-3xl lg:text-5xl leading-[1.15] max-w-4xl">
              {TESTIMONIALS[0].quote}
            </blockquote>
            <div className="mt-10 h-10" />
          </div>
        </div>

        {/* Counter bottom-right */}
        <div className="absolute bottom-10 right-6 lg:right-10 font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">
          {TESTIMONIALS.length} Stimmen · Dresden & DACH
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
