"use client";

import { X, ChevronRight } from "lucide-react";

const NAV_LINKS: Array<{ href: string; label: string }> = [
  { href: "#hero",     label: "Home" },
  { href: "#services", label: "Leistungen" },
  { href: "#about",    label: "Über uns" },
  { href: "#team",     label: "Team" },
  { href: "#contact",  label: "Kontakt" },
];

type Props = {
  panelRef:    React.RefObject<HTMLDivElement | null>;
  overlayRef:  React.RefObject<HTMLDivElement | null>;
  isOpen:      boolean;
  closeNav:    () => void;
  handleNavLink: (href: string) => (e: React.MouseEvent) => void;
};

const closeButtonStyle: React.CSSProperties = {
  background: "linear-gradient(180deg, rgba(200,200,210,0.12) 0%, rgba(80,80,95,0.1) 100%)",
  backdropFilter: "blur(24px) saturate(1.5)",
  WebkitBackdropFilter: "blur(24px) saturate(1.5)",
  boxShadow: "0 1px 0 0 rgba(255,255,255,0.15) inset, 0 -1px 0 0 rgba(0,0,0,0.2) inset, 0 4px 16px rgba(0,0,0,0.2)",
  border: "1px solid rgba(255,255,255,0.1)",
};

const ctaStyle: React.CSSProperties = {
  background: "linear-gradient(135deg, rgba(255,75,43,0.9) 0%, rgba(255,120,50,0.85) 50%, rgba(255,75,43,0.95) 100%)",
  boxShadow: "0 1px 0 0 rgba(255,255,255,0.25) inset, 0 -1px 0 0 rgba(0,0,0,0.15) inset, 0 6px 20px -4px rgba(255,75,43,0.4)",
  border: "1px solid rgba(255,255,255,0.2)",
};

export function MenuPanel({ panelRef, overlayRef, isOpen, closeNav, handleNavLink }: Props) {
  return (
    <>
      <div
        ref={panelRef}
        aria-hidden={!isOpen}
        className="fixed inset-y-0 left-0 z-[100] w-full max-w-md text-white shadow-[0_0_80px_rgba(0,0,0,0.8)]"
        style={{ display: "none" }}
      >
        <div className="bg-panel absolute inset-0" style={{ backgroundColor: "#FF4B2B" }} />
        <div className="bg-panel absolute inset-0" style={{ backgroundColor: "#FFFFFF" }} />
        <div className="bg-panel absolute inset-0" style={{ backgroundColor: "#000000" }} />

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
              style={closeButtonStyle}
            >
              <span className="absolute inset-0 rounded-full pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 50%)" }} />
              <X size={20} className="relative z-10 text-brand group-hover:rotate-90 transition-all duration-500" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-8 md:px-12 pt-12 pb-32">
            <ul className="flex flex-col gap-6 md:gap-8">
              {NAV_LINKS.map((link, i) => (
                <li key={link.href} className="overflow-hidden">
                  <a
                    href={link.href}
                    onClick={handleNavLink(link.href)}
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
                        {link.label}
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
              style={ctaStyle}
            >
              <span className="absolute inset-0 rounded-full pointer-events-none" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, transparent 50%)" }} />
              <span className="relative z-10 text-white text-sm font-display uppercase tracking-wider">Angebot anfordern</span>
              <ChevronRight className="relative z-10 ml-2 w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99]"
        onClick={closeNav}
        style={{ display: "none" }}
      />
    </>
  );
}
