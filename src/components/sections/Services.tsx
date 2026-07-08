"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Shield } from "lucide-react";
import Magnetic from "@/components/dom/Magnetic";
import Image from "next/image";
import { useGSAP, gsap, registerScrollTrigger } from "@/hooks/useGSAP";

const SERVICES = [
  {
    title: "Baustellenbewachung",
    category: "Areal- & Sachschutz",
    description:
      "Lückenloser Schutz Ihrer Bauprojekte. Schutz vor Vandalismus, Sabotage und Diebstahl von Maschinen oder Materialien durch modernste Überwachung und regelmäßige Streifen.",
    img: "/images/baustellenbewachung.png",
  },
  {
    title: "Objektschutz",
    category: "Werkschutz & Revierdienst",
    description:
      "Zuverlässige Bewachung von Industrieanlagen, Bürokomplexen und Wohnobjekten. Schutz vor unbefugtem Zutritt, Gefahren und Diebstahl durch geschultes Pförtner- und Wachpersonal.",
    img: "/images/objektschutz.jpeg",
  },

  {
    title: "Anlassbezogene Sicherheit",
    category: "Event Security & Logistik",
    description:
      "Professioneller Veranstaltungsschutz, Brandwachen und Absicherung temporärer Gefahrenbereiche. Flexibler Schutz für Corporate-Events, Messen und private Anlässe.",
    img: "/images/veranstaltungsschutz.png",
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      registerScrollTrigger();

      gsap.fromTo(
        ".services-header-anim",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".services-header-anim",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".services-badge-anim",
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".services-badge-anim",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".service-item-anim",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-list-container",
            start: "top 75%",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      id="leistungen"
      ref={sectionRef}
      className="w-full flex flex-col bg-black py-20"
    >
      <div className="px-[5vw] mb-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
        <h2 className="services-header-anim text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tighter text-white break-words hyphens-auto">
          Unsere
          <br />
          Dienstleistungen
        </h2>
        <div className="services-badge-anim hidden md:block">
          <RotatingBadge />
        </div>
      </div>
      <div className="services-list-container w-full flex flex-col border-t border-white/10">
        {SERVICES.map((item, i) => (
          <div key={i} className="service-item-anim">
            <ListItem item={item} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
}

interface ServiceItemType {
  title: string;
  category: string;
  description: string;
  img: string;
}

function ListItem({ item, index }: { item: ServiceItemType; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full border-b border-white/10 py-12 md:py-16 px-[5vw] group overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-[#7CB3D1] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] z-0"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between pointer-events-none gap-8 lg:gap-12">
        <div className="flex flex-col z-20 min-w-[30%] max-w-xl">
          <span className="font-mono text-xs md:text-sm text-white/50 group-hover:text-black/50 transition-colors uppercase tracking-widest mb-4">
            0{index + 1} / {item.category}
          </span>
          <motion.h3
            initial={{ x: 0 }}
            animate={{ x: isHovered ? 20 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-display text-[7.5vw] md:text-[5vw] font-light uppercase text-white group-hover:text-black transition-colors leading-[0.85] tracking-tighter break-words hyphens-auto w-full"
          >
            {item.title}
          </motion.h3>
          <motion.p
            initial={{ x: 0 }}
            animate={{ x: isHovered ? 20 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="font-sans text-sm md:text-base text-white/50 group-hover:text-black/60 transition-colors mt-6 leading-relaxed max-w-lg font-light"
          >
            {item.description}
          </motion.p>
        </div>

        {/* Reveal Image - Mobile: Always Visible | Desktop: Hover Reveal */}
        <div className="relative z-20 w-full lg:w-[35vh] h-[20vh] lg:h-[22vh] rounded-xl overflow-hidden">
          {/* Mobile version (static) */}
          <div className="lg:hidden w-full h-full relative border border-white/10 rounded-xl overflow-hidden">
            <Image
              src={item.img}
              alt={item.title}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          {/* Desktop version (controlled by hover) */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
            animate={{
              scale: isHovered ? 1 : 0.8,
              opacity: isHovered ? 1 : 0,
              rotate: isHovered ? 0 : -5,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="hidden lg:block w-full h-full absolute inset-0 z-20 border border-white/10 rounded-2xl overflow-hidden"
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function RotatingBadge() {
  return (
    <div className="relative w-32 h-32 md:w-44 md:h-44 flex items-center justify-center mb-6 md:mb-0 mr-[5vw] lg:mr-[10vw]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
          <path
            id="textPath"
            d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
            fill="none"
          />
          <text className="text-[7.5px] uppercase font-display font-bold tracking-[0.25em] fill-white/30">
            <textPath xlinkHref="#textPath">
              PROSECURE SECURITY SOLUTIONS • EXPERT PROTECTION • TRUSTED
              SECURITY •
            </textPath>
          </text>
        </svg>
      </motion.div>
      <div
        className="relative w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center backdrop-blur-3xl shadow-2xl overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow:
            "0 1px 0 0 rgba(255,255,255,0.15) inset, 0 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        {/* Top shine */}
        <span
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 50%)",
          }}
        />
        <Shield
          className="w-8 h-8 md:w-11 md:h-11 text-[#7CB3D1]"
          strokeWidth={1.2}
        />
      </div>
    </div>
  );
}

export default Services;
