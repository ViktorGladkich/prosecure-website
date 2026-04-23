"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

/**
 * Premium Willem-inspired Preloader for ProSecure.
 * Using a perfectly balanced German word 'SICHERHEIT' (5 + 5 split) 
 * to ensure the expansion window is mathematically and visually centered.
 */
export function Preloader() {
  const [mounted, setMounted] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  // Refs
  const loaderLettersRef = useRef<HTMLSpanElement[]>([]);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const growingImageRef = useRef<HTMLDivElement | null>(null);
  const headingStartRef = useRef<HTMLDivElement | null>(null);
  const headingEndRef = useRef<HTMLDivElement | null>(null);
  const extraImagesRef = useRef<HTMLDivElement[]>([]);
  const h1Ref = useRef<HTMLDivElement | null>(null);
  const statusRef = useRef<HTMLDivElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  
  const addToLetters = (el: HTMLSpanElement) => {
    if (el && !loaderLettersRef.current.includes(el)) {
      loaderLettersRef.current.push(el);
    }
  };



  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      const container = containerRef.current;
      if (!container) return;

      const tl = gsap.timeline({
        defaults: {
          ease: "expo.inOut",
        },
        onComplete: () => {
          setMounted(false);
          document.body.style.overflow = "auto";
        }
      });

      // Lock scroll
      document.body.style.overflow = "hidden";

      // 1. Initial State
      gsap.set(h1Ref.current, { opacity: 1 });
      gsap.set(loaderLettersRef.current, { yPercent: 110 });
      gsap.set(boxRef.current, { width: "0em" });
      gsap.set(extraImagesRef.current, { opacity: 1 });

      // 2. Animate 'SICHERHEIT' Letters Up
      tl.to(loaderLettersRef.current, {
        yPercent: 0,
        stagger: 0.03,
        duration: 1,
        ease: "expo.out"
      });

      // 3. Split the word 'SICHE' | 'RHEIT'
      tl.to(boxRef.current, {
        width: "2.2em",
        duration: 1.4,
      }, "+=0.2");

      // 4. Cycle Images
      if (extraImagesRef.current.length > 0) {
        tl.to(extraImagesRef.current, {
          opacity: 0,
          duration: 0.001,
          stagger: 0.45,
          ease: "none"
        }, "-=0.2");
      }

      // 5. Expand to Full Viewport
      tl.to(boxRef.current, {
        width: "115vw", 
        height: "115vh",
        duration: 2.2,
        ease: "expo.inOut",
      }, "+=0.2");

      // Start fading out the footer exactly when expansion begins
      tl.to(footerRef.current, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut"
      }, "<");

      // reveal the real hero behind
      tl.to(growingImageRef.current, {
        opacity: 0,
        duration: 1.2,
        ease: "power2.inOut"
      }, "-=1.0");

      // Fade out letters and the secondary status text
      tl.to([headingStartRef.current, headingEndRef.current, statusRef.current], {
        opacity: 0,
        x: (i) => i === 0 ? "-20vw" : (i === 1 ? "20vw" : "0"),
        duration: 1.5,
        ease: "power3.inOut"
      }, "<");

      // Final Fade of the preloader background
      tl.to(container, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut"
      }, "-=0.8");
    },
    { scope: containerRef }
  );

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-100 bg-[#f4f4f4] flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        
        {/* Main Brand/Status Word: SICHERHEIT (Security) - Split 5/5 for perfect symmetry */}
        <div 
          ref={h1Ref} 
          className="flex items-center justify-center font-display text-[11.5vw] sm:text-[11vw] md:text-[10vw] font-bold leading-[0.7] text-[#201d1d] whitespace-nowrap opacity-0 relative"
        >
          
          <div ref={headingStartRef} className="flex overflow-hidden shrink-0">
            <span ref={addToLetters} className="inline-block relative">S</span>
            <span ref={addToLetters} className="inline-block relative">I</span>
            <span ref={addToLetters} className="inline-block relative">C</span>
            <span ref={addToLetters} className="inline-block relative">H</span>
            <span ref={addToLetters} className="inline-block relative">E</span>
          </div>

          <div 
            ref={boxRef} 
            className="flex items-center justify-center shrink-0 z-50 overflow-hidden relative rounded-xl"
            style={{ width: "0em", height: "1.8em" }}
          >
              <div 
                ref={growingImageRef} 
                className="relative w-full h-full"
              >
                  {/* 4 Images to Flash (Top to Bottom) */}
                  <div className="absolute inset-0 z-40" ref={(el) => { if (el) extraImagesRef.current[0] = el; }}>
                    <img 
                      className="absolute inset-0 w-full h-full object-cover" 
                      src="/images/preloader/guard.jpeg" 
                      alt="" 
                      loading="lazy" 
                      decoding="async"
                    />
                  </div>
                  <div className="absolute inset-0 z-30" ref={(el) => { if (el) extraImagesRef.current[1] = el; }}>
                    <img 
                      className="absolute inset-0 w-full h-full object-cover" 
                      src="/images/preloader/scanner.jpeg" 
                      alt="" 
                      loading="lazy" 
                      decoding="async"
                    />
                  </div>
                  <div className="absolute inset-0 z-20" ref={(el) => { if (el) extraImagesRef.current[2] = el; }}>
                    <img 
                      className="absolute inset-0 w-full h-full object-cover" 
                      src="/images/preloader/patrol.png" 
                      alt="" 
                      loading="lazy" 
                      decoding="async"
                    />
                  </div>
                  <div className="absolute inset-0 z-10" ref={(el) => { if (el) extraImagesRef.current[3] = el; }}>
                    <img 
                      className="absolute inset-0 w-full h-full object-cover" 
                      src="/images/preloader/control.jpeg" 
                      alt="" 
                      loading="lazy" 
                      decoding="async"
                    />
                  </div>

                  {/* Final Frame (Revealed when all above are hidden) */}
                  <img 
                    className="absolute inset-0 w-full h-full object-cover z-0" 
                    src="/images/preloader/hero.jpeg" 
                    alt="Final Frame" 
                    loading="lazy" 
                    decoding="async"
                  />
              </div>
          </div>

          <div ref={headingEndRef} className="flex overflow-hidden shrink-0">
            <span ref={addToLetters} className="inline-block relative">R</span>
            <span ref={addToLetters} className="inline-block relative">H</span>
            <span ref={addToLetters} className="inline-block relative">E</span>
            <span ref={addToLetters} className="inline-block relative">I</span>
            <span ref={addToLetters} className="inline-block relative">T</span>
          </div>

        </div>

        {/* Status indicator in German */}
        <div ref={statusRef} className="mt-8 overflow-hidden">
          <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-[#201d1d]/40 animate-pulse">
            System wird geladen...
          </div>
        </div>
      </div>

      {/* Osmo-style Footer Credits */}
      <div 
        ref={footerRef}
        className="absolute bottom-10 left-0 w-full flex flex-col items-center justify-center gap-2 z-0 select-none"
      >
        <div className="font-display text-[14px] md:text-[18px] font-bold text-[#201d1d] uppercase tracking-wider">
          <span className="text-brand">©</span> {new Date().getFullYear()} ProSecure<span className="text-brand">.</span>
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#201d1d]">
          Premium Security Solutions / Dresden
        </div>
      </div>
    </div>
  );
}

export default Preloader;
