"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  gsap,
  registerScrollTrigger,
  useGSAP,
} from "@/hooks/useGSAP";
import { siteConfig } from "@/lib/seo";

export function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const logoRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      registerScrollTrigger();
      const scope = footerRef.current;
      const logo = logoRef.current;
      if (!scope || !logo) return;

      gsap.fromTo(
        logo,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: scope,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        },
      );
    },
    { scope: footerRef },
  );

  const currentYear = new Date().getFullYear();

  return (
    <footer
      ref={footerRef}
      className="relative bg-black text-white pt-20 overflow-hidden"
      aria-label="Seitenfuß"
    >
      {/* Top Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-brand/30">
        {/* Contact Column */}
        <div className="p-8 md:p-12 lg:p-16 border border-brand/30 md:border-y-0 md:border-l-0 md:border-r border-brand/30 flex flex-col justify-between">
          <div>
            <h3 className="font-display text-xs uppercase tracking-[0.3em] text-white/40 mb-12">Kontakt</h3>
            <div className="space-y-6">
              <a href={`mailto:${siteConfig.email}`} className="block font-display text-lg lg:text-xl hover:text-brand transition-colors">
                {siteConfig.email}
              </a>
              <button className="font-display text-sm hover:text-brand transition-colors">Kontaktieren Sie uns</button>
            </div>
          </div>
          <div className="mt-20 space-y-2">
            <p className="font-display text-xs text-white/30 uppercase tracking-widest">ProSecure Services</p>
            <p className="font-display text-xs text-white/30 uppercase tracking-widest">Dresden Security</p>
            <Link href="#about" className="group flex items-center gap-2 font-display text-xs uppercase tracking-widest mt-4">
              Mehr erfahren <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Connect Column */}
        <div className="p-8 md:p-12 lg:p-16 border-x border-b md:border-x-0 md:border-y-0 md:border-r border-brand/30">
          <h3 className="font-display text-xs uppercase tracking-[0.3em] text-white/40 mb-12">Social Media</h3>
          <ul className="space-y-4 font-display text-lg lg:text-xl">
            <li><a href="#" className="hover:text-brand transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">Facebook</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">LinkedIn</a></li>
          </ul>
        </div>

        {/* Subscribe Column */}
        <div className="p-8 md:p-12 lg:p-16 border-x border-b md:border-none border-brand/30 mb-12 md:mb-0">
          <h3 className="font-display text-xs uppercase tracking-[0.3em] text-white/40 mb-12">Newsletter</h3>
          <div className="relative group">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full bg-transparent border-b border-brand/30 py-4 font-display text-lg focus:outline-none focus:border-brand transition-colors"
            />
            <button className="absolute right-0 bottom-4 hover:translate-x-1 transition-transform group-hover:text-brand">
              <ArrowRight size={20} className="text-white/40 group-focus-within:text-brand hover:text-brand" />
            </button>
          </div>
        </div>
      </div>

      {/* Giant Wordmark */}
      <div className="px-4 lg:px-10 overflow-hidden select-none">
        <div
          ref={logoRef}
          className="font-display font-black text-center tracking-[-0.06em] leading-none text-white sm:text-white"
          style={{
            fontSize: "clamp(4rem, 16.5vw, 20rem)",
            letterSpacing: "-0.05em"
          }}
        >
          PROSECURE<span className="text-brand">.</span>
        </div>
      </div>

      {/* Legal Bar */}
      <div className="px-8 md:px-12 py-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 opacity-40">
        <p className="font-display text-[10px] uppercase tracking-widest">
          ©{currentYear} {siteConfig.name}
        </p>
        <div className="flex gap-8">
          <Link href="/datenschutz" className="font-display text-[10px] uppercase tracking-widest hover:text-brand transition-colors">Datenschutz</Link>
          <Link href="/impressum" className="font-display text-[10px] uppercase tracking-widest hover:text-brand transition-colors">Impressum</Link>
        </div>
        <p className="font-display text-[10px] uppercase tracking-widest flex items-center gap-1">
          Realisiert von <a href="https://invertadigital.de/" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors cursor-pointer font-bold">INVERTA DIGITAL</a> <ArrowRight size={10} className="-rotate-45" />
        </p>
      </div>
    </footer>
  );
}

export default Footer;
