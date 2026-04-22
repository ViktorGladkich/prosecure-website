"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { X, ChevronRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGSAP, gsap } from "@/hooks/useGSAP";

const NAV_LINKS: Array<{ href: string; label: string }> = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Leistungen" },
  { href: "#about", label: "Über uns" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Kontakt" },
];

export function Navigation() {
  const navRef = useRef<HTMLElement | null>(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(() => {
    if (typeof window === "undefined") return;

    const ENTRY_DELAY = 6.8;

    // Set initial state via GSAP to avoid conflict with React classes
    gsap.set(".nav-animate-down", { y: -80, opacity: 0 });

    gsap.to(
      ".nav-animate-down",
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
        delay: ENTRY_DELAY, 
        ease: "power3.out"
      }
    );
  }, { scope: navRef });

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <>
      <nav
        ref={navRef}
        data-scrolled={scrolled ? "true" : "false"}
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "transition-[padding] duration-500 ease-in-out", // SPECIFIC TRANSITION
          scrolled ? "py-4" : "py-6"
        )}
      >
        {/* Halftone-blur backdrop (only once scrolled) */}
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 -z-10",
            "transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            scrolled ? "opacity-100" : "opacity-0",
          )}
          style={{
            backdropFilter: "blur(24px) saturate(1.5)",
            WebkitBackdropFilter: "blur(24px) saturate(1.5)",
            background: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.4))",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        />

        <div className="nav-animate-down relative mx-auto flex w-full max-w-[1600px] items-center justify-between px-4 md:px-12">
           {/* Left Section: Menu & Status */}
           <div className="flex items-center gap-4 text-sm flex-1">
             <button
               aria-label="Open menu"
               onClick={() => setOpen(true)}
               className="group relative flex items-center gap-2.5 px-5 py-2.5 rounded-full overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
               style={{
                 background: "linear-gradient(180deg, rgba(200,200,210,0.12) 0%, rgba(80,80,95,0.1) 100%)",
                 backdropFilter: "blur(24px) saturate(1.5)",
                 WebkitBackdropFilter: "blur(24px) saturate(1.5)",
                 boxShadow: "0 1px 0 0 rgba(255,255,255,0.15) inset, 0 -1px 0 0 rgba(0,0,0,0.2) inset, 0 4px 16px rgba(0,0,0,0.2)",
                 border: "1px solid rgba(255,255,255,0.1)",
               }}
             >
               <span className="absolute inset-0 rounded-full pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 50%)" }} />
               {/* Burger lines */}
               <div className="relative z-10 w-4 h-3 flex flex-col justify-between">
                 <span className="w-full h-[1.5px] bg-white/80 rounded-full group-hover:w-3/4 transition-all duration-300"></span>
                 <span className="w-full h-[1.5px] bg-white/80 rounded-full"></span>
                 <span className="w-3/4 h-[1.5px] bg-white/80 rounded-full group-hover:w-full transition-all duration-300"></span>
               </div>
               <span className="relative z-10 font-display text-sm uppercase tracking-wide text-white/90">Menu</span>
             </button>
           </div>

           {/* Center Logo — appears after scrolling past hero */}
           <Link
             href="#hero"
             className={cn(
               "flex justify-center items-baseline flex-1 shrink-0 font-display text-xl md:text-2xl font-bold tracking-tight text-white select-none",
               "transition-all duration-500 ease-out",
               scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"
             )}
           >
             prosecure<span className="text-brand ml-0.5">.</span>
           </Link>

           {/* Right Section: CTAs */}
           <div className="flex items-center justify-end gap-3 flex-1">
             {/* Kontakt — glass metal pill */}
             <button
               className="group hidden md:flex items-center gap-2.5 px-5 py-2.5 rounded-full overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
               style={{
                 background: "linear-gradient(180deg, rgba(200,200,210,0.12) 0%, rgba(80,80,95,0.1) 100%)",
                 backdropFilter: "blur(24px) saturate(1.5)",
                 WebkitBackdropFilter: "blur(24px) saturate(1.5)",
                 boxShadow: "0 1px 0 0 rgba(255,255,255,0.15) inset, 0 -1px 0 0 rgba(0,0,0,0.2) inset, 0 4px 16px rgba(0,0,0,0.2)",
                 border: "1px solid rgba(255,255,255,0.1)",
               }}
             >
               <span className="absolute inset-0 rounded-full pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 50%)" }} />
               <span className="relative z-10 font-display text-sm uppercase tracking-wide text-white/90">Kontakt</span>
               <ChevronRight className="relative z-10 w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
             </button>
             {/* Phone — orange liquid glass pill */}
             <a
               href="tel:+491234567890"
               className="group relative flex items-center gap-2 px-5 py-2.5 rounded-full overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
               style={{
                 background: "linear-gradient(135deg, rgba(255,75,43,0.9) 0%, rgba(255,120,50,0.85) 50%, rgba(255,75,43,0.95) 100%)",
                 boxShadow: "0 1px 0 0 rgba(255,255,255,0.25) inset, 0 -1px 0 0 rgba(0,0,0,0.15) inset, 0 6px 20px -4px rgba(255,75,43,0.4)",
                 border: "1px solid rgba(255,255,255,0.2)",
               }}
             >
               <span className="absolute inset-0 rounded-full pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 50%)" }} />
               <Phone className="relative z-10 w-4 h-4 text-white" />
               <span className="relative z-10 hidden sm:inline text-white text-sm uppercase font-display tracking-wide">Anrufen</span>
             </a>
           </div>
        </div>
      </nav>

      {/* Mobile / Sidebar menu — slide-in from left */}
      <div
        aria-hidden={!open}
        className={cn(
          "fixed inset-y-0 left-0 z-100 w-full max-w-md bg-ink text-white",
          "border-r border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)]",
          "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-24 items-center justify-between px-8 md:px-12 border-b border-white/5">
           <div className="flex items-baseline font-display text-2xl font-bold tracking-tight text-white select-none">
             prosecure<span className="text-brand ml-0.5">.</span>
           </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Menü schließen"
            className="group relative flex h-12 w-12 items-center justify-center rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            style={{
              background: "linear-gradient(180deg, rgba(200,200,210,0.12) 0%, rgba(80,80,95,0.1) 100%)",
              backdropFilter: "blur(24px) saturate(1.5)",
              WebkitBackdropFilter: "blur(24px) saturate(1.5)",
              boxShadow: "0 1px 0 0 rgba(255,255,255,0.15) inset, 0 -1px 0 0 rgba(0,0,0,0.2) inset, 0 4px 16px rgba(0,0,0,0.2)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <span className="absolute inset-0 rounded-full pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 50%)" }} />
            <X size={20} className="relative z-10 text-brand group-hover:rotate-90 transition-all duration-500" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-8 md:px-12 pt-12 pb-32">
          <ul className="flex flex-col gap-8">
            {NAV_LINKS.map((l, i) => (
              <li key={l.href} className="overflow-hidden">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline gap-3 font-display text-2xl md:text-3xl lg:text-5xl font-light tracking-tight text-white cursor-pointer"
                >
                  <span className="font-mono text-xl md:text-3xl lg:text-5xl text-brand group-hover:text-white transition-colors duration-500 opacity-60 group-hover:opacity-100">
                    0{i + 1}
                  </span>
                  <div className="relative overflow-hidden h-[1.12em] flex flex-col items-start justify-start">
                    <span 
                      className="block transition-transform duration-500 ease-[cubic-bezier(0.65,0.01,0.05,0.99)] group-hover:-translate-y-[1.12em]"
                      style={{ textShadow: "0 1.12em 0 #FF4B2B" }}
                    >
                      {l.label}
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-black/40 backdrop-blur-md">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="group relative flex items-center justify-center w-full py-4 rounded-full overflow-hidden transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            style={{
              background: "linear-gradient(135deg, rgba(255,75,43,0.9) 0%, rgba(255,120,50,0.85) 50%, rgba(255,75,43,0.95) 100%)",
              boxShadow: "0 1px 0 0 rgba(255,255,255,0.25) inset, 0 -1px 0 0 rgba(0,0,0,0.15) inset, 0 6px 20px -4px rgba(255,75,43,0.4)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <span className="absolute inset-0 rounded-full pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 50%)" }} />
            <span className="relative z-10 text-white text-sm font-bold uppercase tracking-wider">Angebot anfordern</span>
            <ChevronRight className="relative z-10 ml-2 w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
      
      {/* Overlay when menu is open */}
      <div 
         className={cn(
            "fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-700",
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
         )}
         onClick={() => setOpen(false)}
      />
    </>
  );
}

export default Navigation;
