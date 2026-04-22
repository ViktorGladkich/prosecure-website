"use client";

import { useRef } from "react";
import Link from "next/link";
import { Globe, ExternalLink, Phone, Mail, MapPin } from "lucide-react";
import {
  gsap,
  registerScrollTrigger,
  useGSAP,
} from "@/hooks/useGSAP";
import { siteConfig } from "@/lib/seo";

interface LinkItem {
  href: string;
  label: string;
}

const LEISTUNGEN: LinkItem[] = [
  { href: "#services", label: "Objektschutz" },
  { href: "#services", label: "Veranstaltungsschutz" },
  { href: "#services", label: "Personenschutz" },
  { href: "#services", label: "Alarmaufschaltung" },
];

const UNTERNEHMEN: LinkItem[] = [
  { href: "#about", label: "Über uns" },
  { href: "#prozess", label: "Prozess" },
  { href: "#referenzen", label: "Referenzen" },
  { href: "/karriere", label: "Karriere" },
];

const LEGAL: LinkItem[] = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/agb", label: "AGB" },
];

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
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          ease: "none",
          scrollTrigger: {
            trigger: scope,
            start: "top 90%",
            end: "bottom bottom",
            scrub: true,
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
      className="relative isolate overflow-hidden bg-[#000000] text-white"
      aria-label="Seitenfuß"
    >
      {/* Background — CSS-only golden gradient (no video asset dependency) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 110%, rgba(255,75,43,0.15) 0%, rgba(11,11,12,0.35) 35%, #000000 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(180deg, transparent 0%, rgba(10,10,15,0.6) 60%, #0A0A0F 100%), repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 120px)",
        }}
      />

      {/* Top tier — giant outlined wordmark */}
      <div className="relative w-full overflow-hidden px-4 pt-24 pb-12 lg:px-10 lg:pt-32">
        <div
          ref={logoRef}
          className="select-none font-display font-extrabold leading-none tracking-tighter text-transparent"
          style={{
            fontSize: "clamp(6rem, 18vw, 16rem)",
            WebkitTextStroke: "1px rgba(255,75,43,0.35)",
          }}
          aria-hidden
        >
          PROSECURE
        </div>
      </div>

      {/* Mid tier — columns */}
      <div className="relative mx-auto w-full max-w-[1440px] px-6 lg:px-10 border-t border-white/5 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="font-display text-2xl font-extrabold tracking-tight">
              {siteConfig.name}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
              Sicherheitsdienst · Dresden · seit {siteConfig.founded}
            </span>
          </div>
          <p className="text-sm text-bone/60 leading-relaxed max-w-xs">
            Premium Sicherheitsdienst für Privatpersonen, Unternehmen und
            Kulturinstitutionen in Dresden und Sachsen.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="ProSecure auf LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition-colors hover:border-[#FF4B2B] hover:text-[#FF4B2B] rounded-full"
            >
              <Globe className="h-4 w-4" strokeWidth={1.5} />
            </a>
            <a
              href={siteConfig.social.xing}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="ProSecure auf Xing"
              className="inline-flex h-10 w-10 items-center justify-center border border-white/10 text-white/50 transition-colors hover:border-[#FF4B2B] hover:text-[#FF4B2B] rounded-full"
            >
              <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Leistungen */}
        <nav aria-label="Leistungen" className="flex flex-col gap-5">
          <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF4B2B]">
            Leistungen
          </h3>
          <ul className="flex flex-col gap-3">
            {LEISTUNGEN.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-white/50 transition-colors hover:text-[#FF4B2B]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Unternehmen */}
        <nav aria-label="Unternehmen" className="flex flex-col gap-5">
          <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF4B2B]">
            Unternehmen
          </h3>
          <ul className="flex flex-col gap-3">
            {UNTERNEHMEN.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-white/50 transition-colors hover:text-[#FF4B2B]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Kontakt */}
        <div className="flex flex-col gap-5">
          <h3 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#FF4B2B]">
            Kontakt
          </h3>
          <ul className="flex flex-col gap-4 text-sm text-bone/70">
            <li className="flex items-start gap-3">
              <Phone
                className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                strokeWidth={1.5}
              />
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="hover:text-[#FF4B2B] transition-colors"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail
                className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                strokeWidth={1.5}
              />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-[#FF4B2B] transition-colors break-all"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                strokeWidth={1.5}
              />
              <span>
                {siteConfig.address.streetAddress}
                <br />
                {siteConfig.address.postalCode}{" "}
                {siteConfig.address.addressLocality}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom tier */}
      <div className="relative border-t border-white/5">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/40">
            © {siteConfig.founded}–{currentYear} {siteConfig.name} · Dresden
          </p>
          <ul className="flex flex-wrap items-center gap-6">
            {LEGAL.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/30 transition-colors hover:text-[#FF4B2B]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
