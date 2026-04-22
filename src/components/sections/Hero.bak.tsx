"use client";

import { useRef } from "react";
import SplitType from "split-type";
import { ArrowRight } from "lucide-react";
import { useGSAP, gsap, ScrollTrigger, registerScrollTrigger } from "@/hooks/useGSAP";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ParticleField } from "@/components/three/ParticleField";

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const kickerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const particleWrapRef = useRef<HTMLDivElement | null>(null);
  const scrollIndicatorRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      registerScrollTrigger();

      const heading = headingRef.current;
      const paragraph = paragraphRef.current;
      const kicker = kickerRef.current;
      const cta = ctaRef.current;
      const content = contentRef.current;
      const particleWrap = particleWrapRef.current;
      const scrollIndicator = scrollIndicatorRef.current;

      const cleanups: Array<() => void> = [];

      // Kicker reveal
      if (kicker) {
        gsap.fromTo(
          kicker,
          { y: -10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, delay: 0.2, ease: "expo.out" },
        );
      }

      // Heading split + reveal
      let headingSplit: SplitType | null = null;
      if (heading) {
        headingSplit = new SplitType(heading, { types: "words", tagName: "span" });
        const words = headingSplit.words ?? [];
        if (words.length > 0) {
          gsap.set(words, {
            yPercent: 120,
            opacity: 0,
            display: "inline-block",
          });
          gsap.to(words, {
            yPercent: 0,
            opacity: 1,
            duration: 1.1,
            delay: 0.3,
            ease: "expo.out",
            stagger: 0.08,
          });
        }
        cleanups.push(() => {
          headingSplit?.revert();
        });
      }

      // Paragraph split + reveal
      let paragraphSplit: SplitType | null = null;
      if (paragraph) {
        paragraphSplit = new SplitType(paragraph, { types: "words", tagName: "span" });
        const pWords = paragraphSplit.words ?? [];
        if (pWords.length > 0) {
          gsap.set(pWords, {
            yPercent: 60,
            opacity: 0,
            display: "inline-block",
          });
          gsap.to(pWords, {
            yPercent: 0,
            opacity: 1,
            duration: 0.8,
            delay: 0.9,
            ease: "expo.out",
            stagger: 0.02,
          });
        }
        cleanups.push(() => {
          paragraphSplit?.revert();
        });
      }

      // CTAs reveal
      if (cta) {
        const items = cta.querySelectorAll<HTMLElement>("[data-hero-cta]");
        gsap.fromTo(
          items,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            delay: 1.1,
            ease: "expo.out",
            stagger: 0.08,
          },
        );
      }

      // ScrollTrigger parallax on content block (heading fades + translates up)
      let contentTrigger: ScrollTrigger | null = null;
      if (content && sectionRef.current) {
        contentTrigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          animation: gsap.to(content, {
            yPercent: -20,
            opacity: 0.1,
            ease: "none",
          }),
        });
      }

      // ScrollTrigger parallax on particle wrapper
      let particleTrigger: ScrollTrigger | null = null;
      if (particleWrap && sectionRef.current) {
        particleTrigger = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          animation: gsap.to(particleWrap, {
            yPercent: 15,
            ease: "none",
          }),
        });
      }

      // Scroll indicator infinite animation
      let scrollTween: gsap.core.Tween | null = null;
      if (scrollIndicator) {
        gsap.set(scrollIndicator, { transformOrigin: "top center", scaleY: 0 });
        scrollTween = gsap.to(scrollIndicator, {
          scaleY: 1,
          duration: 1.6,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          delay: 1.4,
        });
      }

      cleanups.push(() => {
        contentTrigger?.kill();
        particleTrigger?.kill();
        scrollTween?.kill();
      });

      return () => {
        cleanups.forEach((fn) => fn());
      };
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Hero"
      className="relative w-full min-h-svh overflow-hidden bg-ink text-bone"
    >
      {/* Layer 1 — deep radial gradient with bottom-center golden glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 110%, rgba(201,168,76,0.22) 0%, rgba(201,168,76,0.05) 25%, transparent 55%), radial-gradient(ellipse at 50% 40%, #0F0F17 0%, #0A0A0F 55%, #050507 100%)",
        }}
      />

      {/* Layer 2 — Three.js particles (wrapped for scroll parallax) */}
      <div ref={particleWrapRef} className="absolute inset-0 will-change-transform">
        <ParticleField />
      </div>

      {/* Layer 3 — vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 45%, rgba(5,5,7,0.55) 80%, rgba(5,5,7,0.9) 100%)",
        }}
      />

      {/* Layer 4 — content */}
      <div className="relative z-10 mx-auto flex min-h-svh max-w-7xl flex-col justify-center px-6 lg:px-10">
        <div ref={contentRef} className="will-change-transform">
          {/* Kicker */}
          <div
            ref={kickerRef}
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold flex items-center gap-3 mb-10 opacity-0"
          >
            <span>[ PROSECURE</span>
            <span className="text-gold/40">/</span>
            <span>DRESDEN</span>
            <span className="text-gold/40">/</span>
            <span>SEIT 2008 ]</span>
          </div>

          {/* Heading */}
          <h1
            ref={headingRef}
            className="font-display text-bone leading-[0.95] tracking-tight"
            style={{
              fontSize: "clamp(3rem, 10vw, 9rem)",
              fontWeight: 800,
            }}
          >
            <span className="block">
              Sicherheit<span className="text-gold">,</span>
            </span>
            <span className="block" style={{ fontWeight: 700 }}>
              die Sie nicht sehen.
            </span>
          </h1>

          {/* Paragraph */}
          <p
            ref={paragraphRef}
            className="font-body text-base lg:text-lg text-bone/70 max-w-lg mt-8 leading-relaxed"
          >
            Diskreter Personenschutz, kompromissloser Objektschutz und
            professionelle Sicherheitslösungen für anspruchsvolle Kunden in Dresden
            und ganz Sachsen – seit über 15 Jahren.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="mt-10 flex flex-wrap items-center gap-4">
            <div data-hero-cta className="opacity-0">
              <MagneticButton strength={0.25} radius={80}>
                <Button
                  size="lg"
                  variant="default"
                  onClick={() => {
                    if (typeof window === "undefined") return;
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Angebot anfordern
                </Button>
              </MagneticButton>
            </div>
            <div data-hero-cta className="opacity-0">
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  if (typeof window === "undefined") return;
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Leistungen entdecken
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom-left meta strip */}
        <div
          aria-hidden="true"
          className="absolute bottom-10 left-6 lg:left-10 font-mono text-[10px] uppercase tracking-[0.22em] text-bone/50 hidden sm:block"
        >
          EST. 2008 &nbsp;—&nbsp; DRESDEN &nbsp;↔&nbsp; SACHSEN &nbsp;—&nbsp; § 34a GEWO ZERTIFIZIERT
        </div>

        {/* Bottom-right scroll indicator */}
        <div
          aria-hidden="true"
          className="absolute bottom-10 right-6 lg:right-10 flex flex-col items-center gap-3"
        >
          <div className="h-10 w-px overflow-hidden">
            <span
              ref={scrollIndicatorRef}
              className="block h-full w-full bg-gold"
            />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone/50">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
