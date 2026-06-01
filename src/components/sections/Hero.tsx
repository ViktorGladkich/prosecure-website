"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useGSAP, gsap, registerScrollTrigger } from "@/hooks/useGSAP";


export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      registerScrollTrigger();

      // Start animations immediately (no preloader delay)
      const ENTRY_DELAY = 0.5;

      // Big Title Entry (PROSECURE.) - Targeting the Mask
      gsap.fromTo(
        ".hero-title-mask",
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 2,
          delay: Math.max(0, ENTRY_DELAY - 0.5),
          ease: "expo.out"
        }
      );

      // Entry animations for content
      gsap.fromTo(
        ".animate-up",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.15,
          delay: ENTRY_DELAY,
          ease: "power4.out"
        }
      );



      // Logo animation moved to Navigation.tsx
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      aria-label="Hero"
      className="relative w-full h-svh overflow-hidden bg-black text-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <picture>
          <source media="(max-width: 768px)" srcSet="/hero/hero-mobile.jpg" />
          <img
            src="/hero/hero-dekstop.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>
      <div className="absolute inset-0 bg-black/10 z-0 pointer-events-none" />

      {/* Main Container */}
      <div className="relative z-10 w-full px-4 md:px-12 flex flex-col pt-24 pb-8 mx-auto max-w-[1600px] h-full">
        {/* Navigation is now globally handled by Layout/Navigation.tsx */}

        {/* Logo is now handled by Navigation.tsx */}

        {/* Spacer to push content to bottom */}
        <div className="flex-1 min-h-[35vh] md:min-h-[10vh]" />

        {/* Bottom Content Row */}
        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-end gap-16 md:gap-8 w-full z-20 mt-auto pb-4 md:pb-16">
          
          {/* Left Stats Block */}
          <div className="flex flex-col gap-7 w-full md:max-w-2xl mix-blend-plus-lighter animate-up">
            {/* Social proof pill — liquid glass */}
            <div
              className="relative flex items-center gap-2.5 px-3 py-1.5 rounded-full w-max overflow-hidden"
              style={{
                background: "linear-gradient(180deg, rgba(200,200,220,0.12) 0%, rgba(80,80,100,0.08) 100%)",
                backdropFilter: "blur(20px) saturate(1.5)",
                WebkitBackdropFilter: "blur(20px) saturate(1.5)",
                boxShadow: "0 1px 0 0 rgba(255,255,255,0.18) inset, 0 -1px 0 0 rgba(0,0,0,0.2) inset, 0 4px 12px rgba(0,0,0,0.2)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {/* Top shine */}
              <span className="absolute inset-0 rounded-full pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, transparent 50%)" }} />
              <div className="relative z-10 flex -space-x-2">
                {/* eslint-disable @next/next/no-img-element */}
                <div className="w-6 h-6 rounded-full overflow-hidden ring-1 ring-white/20"><img src="https://i.pravatar.cc/100?img=1" alt="avatar" loading="lazy" decoding="async" /></div>
                <div className="w-6 h-6 rounded-full overflow-hidden ring-1 ring-white/20"><img src="https://i.pravatar.cc/100?img=2" alt="avatar" loading="lazy" decoding="async" /></div>
                <div className="w-6 h-6 rounded-full overflow-hidden ring-1 ring-white/20"><img src="https://i.pravatar.cc/100?img=3" alt="avatar" loading="lazy" decoding="async" /></div>
                {/* eslint-enable @next/next/no-img-element */}
              </div>
              <div className="relative z-10 text-[10px] leading-tight flex flex-col ml-0.5">
                <span className="font-bold text-white">Zufriedene Partnerschaften</span>
                <span className="text-white/50">100% Vertrauensgarantie</span>
              </div>
            </div>

            {/* Headline */}
            <div className="font-display font-light leading-none tracking-tight text-white" style={{ fontSize: "clamp(2.8rem, 4.5vw, 4.5rem)" }}>
              <span className="block">Ihr Schutz.</span>
              <span className="block">Unsere <span className="font-mono font-bold text-white">Mission.</span></span>
            </div>

            {/* Liquid Glass CTAs */}
            <div className="flex items-center gap-4 mt-3">
              {/* Primary — orange liquid glass pill */}
              <a
                href="#contact"
                className="group relative flex items-center gap-3 px-7 py-3.5 rounded-full overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(135deg, rgba(15,39,64,0.9) 0%, rgba(27,53,80,0.85) 50%, rgba(15,39,64,0.95) 100%)",
                  boxShadow: "0 1px 0 0 rgba(255,255,255,0.25) inset, 0 -1px 0 0 rgba(0,0,0,0.15) inset, 0 8px 24px -4px rgba(27,53,80,0.4), 0 2px 8px rgba(0,0,0,0.2)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                {/* Glass shine highlight */}
                <span
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)",
                    maskImage: "linear-gradient(180deg, black 0%, transparent 60%)",
                    WebkitMaskImage: "linear-gradient(180deg, black 0%, transparent 60%)",
                  }}
                />
                <span className="relative z-10 text-white text-sm font-display uppercase tracking-wide">Jetzt Starten</span>
                <span
                  className="relative z-10 flex items-center justify-center w-7 h-7 rounded-full group-hover:-rotate-45 transition-transform duration-500"
                  style={{
                    background: "black",
                    boxShadow: "0 1px 0 0 rgba(255,255,255,0.3) inset",
                  }}
                >
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </span>
              </a>

              {/* Secondary — glass metal pill */}
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  const lenis = (window as Window & { lenis?: { scrollTo?: (target: Element | string, options?: { immediate?: boolean }) => void } }).lenis;
                  const target = document.querySelector("#services");
                  if (!target) return;
                  if (lenis?.scrollTo) {
                    lenis.scrollTo(target, { immediate: false });
                  } else {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group hidden md:flex relative items-center gap-3 px-7 py-3.5 rounded-full overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  background: "linear-gradient(180deg, rgba(200,200,210,0.18) 0%, rgba(120,120,135,0.12) 40%, rgba(80,80,95,0.15) 100%)",
                  backdropFilter: "blur(24px) saturate(1.6)",
                  WebkitBackdropFilter: "blur(24px) saturate(1.6)",
                  boxShadow: "0 1px 0 0 rgba(255,255,255,0.25) inset, 0 -1px 0 0 rgba(0,0,0,0.3) inset, 0 0 0 0.5px rgba(255,255,255,0.08), 0 6px 20px rgba(0,0,0,0.25)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                {/* Top shine — metallic gloss */}
                <span
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.08) 35%, transparent 50%, rgba(0,0,0,0.05) 100%)",
                  }}
                />
                <span className="relative z-10 text-white/90 text-sm font-display uppercase tracking-wide group-hover:text-white transition-colors drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">Leistungen</span>
                <span
                  className="relative z-10 flex items-center justify-center w-7 h-7 rounded-full group-hover:-rotate-45 transition-transform duration-500"
                  style={{
                    background: "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.04) 100%)",
                    boxShadow: "0 1px 0 0 rgba(255,255,255,0.2) inset, 0 -1px 0 0 rgba(0,0,0,0.15) inset",
                    border: "0.5px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <ArrowRight className="w-3.5 h-3.5 text-white/60 group-hover:text-white transition-colors drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]" />
                </span>
              </a>
            </div>
          </div>

          {/* Right — Email Form Card — Liquid Glass */}
          <div className="hidden md:flex flex-col gap-6 w-full md:max-w-sm text-left md:items-start animate-up">
            <div
              className="relative w-full sm:w-[380px] rounded-3xl p-8 mt-2 overflow-hidden"
              style={{
                background: "linear-gradient(160deg, rgba(18,18,20,0.88) 0%, rgba(12,12,14,0.92) 60%, rgba(16,16,18,0.88) 100%)",
                backdropFilter: "blur(32px) saturate(1.3)",
                WebkitBackdropFilter: "blur(32px) saturate(1.3)",
                boxShadow: "0 1px 0 0 rgba(255,255,255,0.08) inset, 0 -1px 0 0 rgba(0,0,0,0.5) inset, 0 24px 64px rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* Top shine */}
              <span
                className="absolute inset-0 pointer-events-none rounded-3xl"
                style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 30%, transparent 60%)" }}
              />

              {/* Orange glow accent top-left */}
              <div className="absolute -left-8 -top-8 w-40 h-40 bg-brand/30 rounded-full blur-[50px] pointer-events-none" />

              <h3 className="relative z-10 text-[22px] font-display font-bold tracking-tight text-white mb-1">
                Kontakt per E-Mail
              </h3>
              <p className="relative z-10 text-white/50 text-[13px] leading-relaxed mb-8">
                Hinterlassen Sie Ihre E-Mail – wir melden uns umgehend
              </p>

              {/* Email input — glass metal pill */}
              <div
                className="relative z-10 w-full h-[52px] flex items-center px-2 pr-[6px] rounded-full"
                style={{
                  background: "linear-gradient(180deg, rgba(200,200,220,0.08) 0%, rgba(60,60,80,0.06) 100%)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "0 1px 0 0 rgba(255,255,255,0.12) inset, 0 -1px 0 0 rgba(0,0,0,0.2) inset",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <input
                  type="email"
                  placeholder="Ihre E-Mail"
                  className="w-full bg-transparent border-none text-[13.5px] text-white placeholder:text-white/35 focus:outline-none focus:ring-0 ml-4 py-3"
                />
                <button
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 hover:-rotate-45 transition-all duration-300 ml-2"
                  style={{
                    background: "linear-gradient(135deg, rgba(15,39,64,0.9) 0%, rgba(27,53,80,0.85) 100%)",
                    boxShadow: "0 1px 0 0 rgba(255,255,255,0.25) inset, 0 4px 12px rgba(27,53,80,0.35)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
