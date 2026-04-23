"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useGSAP, gsap } from "@/hooks/useGSAP";
import { CustomEase } from "gsap/CustomEase";
import { MenuPanel } from "./MenuPanel";

type LenisInstance = {
  stop?: () => void;
  start?: () => void;
  scrollTo?: (target: string | HTMLElement, options?: { immediate?: boolean }) => void;
};

const GLASS_BTN: React.CSSProperties = {
  background: "linear-gradient(180deg, rgba(200,200,210,0.12) 0%, rgba(80,80,95,0.1) 100%)",
  backdropFilter: "blur(24px) saturate(1.5)",
  WebkitBackdropFilter: "blur(24px) saturate(1.5)",
  boxShadow: "0 1px 0 0 rgba(255,255,255,0.15) inset, 0 -1px 0 0 rgba(0,0,0,0.2) inset, 0 4px 16px rgba(0,0,0,0.2)",
  border: "1px solid rgba(255,255,255,0.1)",
};

const BRAND_BTN: React.CSSProperties = {
  background: "linear-gradient(135deg, rgba(255,75,43,0.9) 0%, rgba(255,120,50,0.85) 50%, rgba(255,75,43,0.95) 100%)",
  boxShadow: "0 1px 0 0 rgba(255,255,255,0.25) inset, 0 -1px 0 0 rgba(0,0,0,0.15) inset, 0 6px 20px -4px rgba(255,75,43,0.4)",
  border: "1px solid rgba(255,255,255,0.2)",
};

export function Navigation() {
  const navRef       = useRef<HTMLElement | null>(null);
  const menuPanelRef = useRef<HTMLDivElement | null>(null);
  const overlayRef   = useRef<HTMLDivElement | null>(null);
  const tlRef        = useRef<gsap.core.Timeline | null>(null);
  const isOpenRef    = useRef(false);
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    gsap.set(".nav-animate-down", { y: -80, opacity: 0 });
    gsap.to(".nav-animate-down", { y: 0, opacity: 1, duration: 1.2, delay: 6.8, ease: "power3.out" });
  }, { scope: navRef });

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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpenRef.current) closeNav();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeNav]);

  return (
    <>
      <nav
        ref={navRef}
        data-scrolled={scrolled ? "true" : "false"}
        className={cn("fixed top-0 left-0 right-0 z-50 transition-[padding] duration-500", scrolled ? "py-4" : "py-6")}
      >
        <div
          aria-hidden="true"
          className={cn("pointer-events-none absolute inset-0 -z-10 transition-opacity duration-500", scrolled ? "opacity-100" : "opacity-0")}
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
              aria-label="Menü öffnen"
              onClick={openNav}
              className="group relative flex items-center gap-2.5 px-5 py-2.5 rounded-full overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={GLASS_BTN}
            >
              <span className="absolute inset-0 rounded-full pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 50%)" }} />
              <div className="relative z-10 w-4 h-3 flex flex-col justify-between">
                <span className="w-full h-[1.5px] bg-white/80 rounded-full group-hover:w-3/4 transition-all duration-300" />
                <span className="w-full h-[1.5px] bg-white/80 rounded-full" />
                <span className="w-3/4 h-[1.5px] bg-white/80 rounded-full group-hover:w-full transition-all duration-300" />
              </div>
              <span className="relative z-10 font-display text-sm uppercase tracking-wide text-white/90">Menu</span>
            </button>
          </div>

          <Link
            href="#hero"
            className={cn(
              "flex justify-center items-baseline flex-1 shrink-0 font-display text-xl md:text-2xl tracking-tight text-white select-none transition-all duration-500 ease-out",
              scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"
            )}
          >
            prosecure<span className="text-brand ml-0.5">.</span>
          </Link>

          <div className="flex items-center justify-end gap-3 flex-1">
            <button
              className="group hidden md:flex items-center gap-2.5 px-5 py-2.5 rounded-full overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={GLASS_BTN}
            >
              <span className="absolute inset-0 rounded-full pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 50%)" }} />
              <span className="relative z-10 font-display text-sm uppercase tracking-wide text-white/90">Kontakt</span>
              <ChevronRight className="relative z-10 w-4 h-4 text-white/50 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-300" />
            </button>
            <a
              href="tel:+491234567890"
              className="group relative flex items-center gap-2 px-5 py-2.5 rounded-full overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
              style={BRAND_BTN}
            >
              <span className="absolute inset-0 rounded-full pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 50%)" }} />
              <span className="relative z-10 hidden sm:inline text-white text-sm uppercase font-display tracking-wide">Anrufen</span>
            </a>
          </div>
        </div>
      </nav>

      <MenuPanel
        panelRef={menuPanelRef}
        overlayRef={overlayRef}
        isOpen={open}
        closeNav={closeNav}
        handleNavLink={handleNavLink}
      />
    </>
  );
}

export default Navigation;
