"use client";

import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  index: string;
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  ctaHref: string;
  className?: string;
}

export function ServiceCard({
  index,
  title,
  description,
  features,
  icon: Icon,
  ctaHref,
  className,
}: ServiceCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden border border-white/5 bg-graphite",
        "p-8 lg:p-10 rounded-none",
        "transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:-translate-y-1 hover:border-gold/60",
        "hover:shadow-[0_30px_80px_-40px_rgba(201,168,76,0.45)]",
        className,
      )}
    >
      {/* Decorative giant index number behind content */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 -bottom-10 font-display font-extrabold leading-none text-gold/[0.05] select-none"
        style={{ fontSize: "180px", letterSpacing: "-0.05em" }}
      >
        {index}
      </span>

      {/* Diagonal gold line sweep (before + after pseudo equivalent via spans) */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-0 top-0 h-px w-full origin-left bg-gradient-to-r from-gold/70 via-gold/20 to-transparent",
          "scale-x-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          "group-hover:scale-x-100",
        )}
      />
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute bottom-0 right-0 h-px w-full origin-right bg-gradient-to-l from-gold/70 via-gold/20 to-transparent",
          "scale-x-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] delay-100",
          "group-hover:scale-x-100",
        )}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Top row: index + icon */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-gold/50 tracking-[0.25em]">
            {index}
          </span>
          <Icon
            size={18}
            strokeWidth={1.5}
            className="text-gold transition-transform duration-500 group-hover:rotate-[8deg]"
            aria-hidden
          />
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-2xl lg:text-3xl text-bone mt-8 leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 text-bone/60 leading-relaxed">{description}</p>

        {/* Features */}
        <ul className="mt-8 space-y-2.5">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-bone/70"
            >
              <span aria-hidden className="text-gold leading-none mt-[2px]">
                ▸
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-10 pt-6 border-t border-white/5">
          <a
            href={ctaHref}
            className="link-underline font-mono text-xs uppercase tracking-[0.22em] text-gold"
          >
            Mehr erfahren <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;
