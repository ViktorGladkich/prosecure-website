"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { X, ChevronRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGSAP, gsap } from "@/hooks/useGSAP";
import { CustomEase } from "gsap/CustomEase";

type LenisInstance = {
  stop?: () => void;
  start?: () => void;
  scrollTo?: (target: string | HTMLElement, options?: { immediate?: boolean }) => void;
};

const NAV_LINKS: Array<{ href: string; label: string }> = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Leistungen" },
  { href: "#about", label: "Über uns" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Kontakt" },
];

export function Navigation() {
  const navRef       = useRef<HTMLElement | null>(null);
  const menuPanelRef = useRef<HTMLDivElement | null>(null);
  const overlayRef   = useRef<HTMLDivElement | null>(null);
  const tlRef        = useRef<gsap.core.Timeline | null>(null);
  const isOpenRef    = useRef(false);
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Register CustomEase once
  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(CustomEase);
    CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useGSAP(() => {
    if (typeof window === "undefined") return;
    const ENTRY_DELAY = 6.8;
    gsap.set(".nav-animate-down", { y: -80, opacity: 0 });
    gsap.to(".nav-animate-down", {
      y: 0, opacity: 1, duration: 1.2, delay: ENTRY_DELAY, ease: "power3.out",
    });
  }, { scope: navRef });

  // ── Open: три панели слева, ссылки снизу вверх ──
  const openNav = useCallback(() => {
    if (!menuPanelRef.current || !overlayRef.current) return;
    isOpenRef.current = true;
    setOpen(true);

    const panel    = menuPanelRef.current;
    const overlay  = overlayRef.current;
    const bgPanels = panel.querySelectorAll<HTMLElement>(".bg-panel");
    const links    = panel.querySelectorAll<HTMLElement>(".menu-link-item");

    (window as Window & { lenis?: LenisInstance }).lenis?.stop?.();

    tlRef.current?.kill();
    tlRef.current = gsap.timeline({ defaults: { ease: "main", duration: 0.7 } });

    tlRef.current
      .set(panel,   { display: "block", xPercent: 0 })
      .set(overlay, { display: "block" })
      .fromTo(overlay,  { autoAlpha: 0 },               { autoAlpha: 1 })
      .fromTo(bgPanels, { xPercent: -101 },              { xPercent: 0, stagger: 0.12, duration: 0.575 }, "<")
      .fromTo(links,    { yPercent: 140, rotation: 10 }, { yPercent: 0, rotation: 0, stagger: 0.05 }, "<+=0.35");
  }, []);

  // ── Close: панель уходит влево, оверлей гаснет ──
  const closeNav = useCallback(() => {
    if (!menuPanelRef.current || !overlayRef.current) return;
    isOpenRef.current = false;
    setOpen(false);

    const panel   = menuPanelRef.current;
    const overlay = overlayRef.current;

    (window as Window & { lenis?: LenisInstance }).lenis?.start?.();

    tlRef.current?.kill();
    tlRef.current = gsap.timeline({
      defaults: { ease: "main", duration: 0.7 },
      onComplete: () => {
        gsap.set(panel,   { display: "none" });
        gsap.set(overlay, { display: "none" });
      },
    });

    tlRef.current
      .to(overlay, { autoAlpha: 0 })
      .to(panel,   { xPercent: -120 }, "<");
  }, []);

  // ── Scroll to section + close menu ──
  const handleNavLink = useCallback((href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    closeNav();
    const lenis = (window as Window & { lenis?: LenisInstance }).lenis;
    const target = document.querySelector(href);
    if (!target) return;
    if (lenis?.scrollTo) {
      lenis.scrollTo(target as HTMLElement, { immediate: false });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, [closeNav]);

  // Escape key
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpenRef.current) closeNav();
    };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [closeNav]);

  return (
    <>
      <nav
        ref={navRef}
        data-scrolled={scrolled ? "true" : "false"}
        className={cn(
          "fixed top-0 left-0 right-0 z-50",
          "transition-[padding] duration-500 ease-in-out",
          scrolled ? "py-4" : "py-6"
        )}
      >
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
           <div className="flex items-center gap-4 text-sm flex-1">
             <button
               aria-label="Open menu"
               onClick={openNav}
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
               <div className="relative z-10 w-4 h-3 flex flex-col justify-between">
                 <span className="w-full h-[1.5px] bg-white/80 rounded-full group-hover:w-3/4 transition-all duration-300"></span>
                 <span className="w-full h-[1.5px] bg-white/80 rounded-full"></span>
                 <span className="w-3/4 h-[1.5px] bg-white/80 rounded-full group-hover:w-full transition-all duration-300"></span>
               </div>
               <span className="relative z-10 font-display text-sm uppercase tracking-wide text-white/90">Menu</span>
             </button>
           </div>

           <Link
             href="#hero"
             className={cn(
               "flex justify-center items-baseline flex-1 shrink-0 font-display text-xl md:text-2xl tracking-tight text-white select-none",
               "transition-all duration-500 ease-out",
               scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"
             )}
           >
             prosecure<span className="text-brand ml-0.5">.</span>
           </Link>

           <div className="flex items-center justify-end gap-3 flex-1">
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
               <span className="relative z-10 hidden sm:inline text-white text-sm uppercase font-display tracking-wide">Anrufen</span>
             </a>
           </div>
        </div>
      </nav>

      {/* ── Menu Panel — structure as before, animation via GSAP ── */}
      <div
        ref={menuPanelRef}
        aria-hidden={!open}
        className="fixed inset-y-0 left-0 z-[100] w-full max-w-md text-white shadow-[0_0_80px_rgba(0,0,0,0.8)]"
        style={{ display: "none" }}
      >
        {/* Three bg-panels that stagger-slide in from the left (Osmo pattern) */}
        <div className="bg-panel absolute inset-0" style={{ backgroundColor: "#FF4B2B" }} />
        <div className="bg-panel absolute inset-0" style={{ backgroundColor: "#FFFFFF" }} />
        <div className="bg-panel absolute inset-0" style={{ backgroundColor: "#000000" }} />

        {/* Existing content sits above the bg-panels */}
        <div className="relative z-[1] flex flex-col h-full">
          <div className="flex h-24 items-center justify-between px-8 md:px-12 border-b border-white/5">
             <div className="flex items-baseline font-display text-2xl tracking-tight text-white select-none">
               prosecure<span className="text-brand ml-0.5">.</span>
             </div>
            <button
              type="button"
              onClick={closeNav}
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

          <div className="flex-1 overflow-y-auto px-8 md:px-12 pt-12 pb-32 focus-visible:outline-none">
            <ul className="flex flex-col gap-6 md:gap-8">
              {NAV_LINKS.map((l, i) => (
                <li key={l.href} className="overflow-hidden">
                  <a
                    href={l.href}
                    onClick={handleNavLink(l.href)}
                    className="menu-link-item group flex items-baseline gap-3 font-display text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-white cursor-pointer"
                  >
                    <span className="font-mono text-xl md:text-2xl lg:text-4xl text-brand group-hover:text-white transition-colors duration-500 opacity-60 group-hover:opacity-100">
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
              onClick={handleNavLink("#contact")}
              className="group relative flex items-center justify-center w-full py-4 rounded-full overflow-hidden transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              style={{
                background: "linear-gradient(135deg, rgba(255,75,43,0.9) 0%, rgba(255,120,50,0.85) 50%, rgba(255,75,43,0.95) 100%)",
                boxShadow: "0 1px 0 0 rgba(255,255,255,0.25) inset, 0 -1px 0 0 rgba(0,0,0,0.15) inset, 0 6px 20px -4px rgba(255,75,43,0.4)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <span className="absolute inset-0 rounded-full pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 50%)" }} />
              <span className="relative z-10 text-white text-sm font-display uppercase tracking-wider">Angebot anfordern</span>
              <ChevronRight className="relative z-10 ml-2 w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Backdrop overlay ── */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99]"
        onClick={closeNav}
        style={{ display: "none" }}
      />

    </>
  );
}

export default Navigation;
