"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP, gsap, registerScrollTrigger } from "@/hooks/useGSAP";

const STEPS = [
  {
    index: "01",
    title: "Erstberatung",
    description:
      "Tiefgehende Analyse Ihrer individuellen Sicherheitsbedürfnisse. Wir hören zu und entwickeln diskret erste Lösungsansätze – auf Wunsch unter strenger NDA.",
    img: "/images/process/erstberatung.png",
  },
  {
    index: "02",
    title: "Risikoanalyse",
    description:
      "Identifikation von Schwachstellen durch Experten-Scans. Wir antizipieren Szenarien, um präventiv Lücken in Ihrer Sicherheitsstruktur zu schließen.",
    img: "/images/process/risikoanalyse.jpeg",
  },
  {
    index: "03",
    title: "Schutzstrategie",
    description:
      "Entwicklung präziser Einsatzpläne. Die perfekte Symbiose aus modernster Überwachungstechnik und hochqualifiziertem Fachpersonal.",
    img: "/images/process/schutzstrategie.png",
  },
  {
    index: "04",
    title: "Operation",
    description:
      "Lückenlose Durchführung Ihrer Sicherheitsmission. Unsere Einsatzleiter garantieren maximale Diskretion und Schutz rund um die Uhr.",
    img: "/images/process/operation.png",
  },
];

/*
  Snake path in viewBox 1000×2800:
  - Starts with a swoop around the heading area
  - Then snakes down: right→left→right→left for each card
*/
const SNAKE_PATH = [
  // Swoop around heading
  "M 750 80",
  "C 900 50 920 300 700 320",
  "C 450 360 80 300 80 200",
  "C 80 80 350 40 500 100",
  // Drop down to snake start
  "C 540 130 500 350 500 480",
  // Snake to RIGHT — Card 1
  "C 500 620 880 620 880 760",
  "L 880 980",
  // Snake to LEFT — Card 2
  "C 880 1120 120 1120 120 1260",
  "L 120 1480",
  // Snake to RIGHT — Card 3
  "C 120 1620 880 1620 880 1760",
  "L 880 1980",
  // Snake to LEFT — Card 4
  "C 880 2120 120 2120 120 2260",
  "L 120 2580",
].join(" ");

export function Process() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pathRef    = useRef<SVGPathElement | null>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      registerScrollTrigger();
      const scope  = sectionRef.current;
      const path   = pathRef.current;
      if (!scope || !path) return;

      const mobile = window.innerWidth < 768;

      // На мобильном убираем дорогой SVG-фильтр (feGaussianBlur пересчитывается каждый кадр)
      if (mobile) path.removeAttribute("filter");

      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

      // Snake-линия: на мобильном увеличиваем scrub — меньше обновлений в секунду
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: scope,
          start: "top 70%",
          end: "bottom 90%",
          scrub: mobile ? 2 : 0.4,
        },
      });

      // Заголовок
      gsap.fromTo(
        ".process-header-anim",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: { trigger: ".process-header-anim", start: "top 85%" },
        }
      );

      // Карточки: на мобильном только opacity (без x-смещения и scrub)
      const cards = scope.querySelectorAll<HTMLElement>("[data-step-card]");
      if (mobile) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: { trigger: scope, start: "top 60%" },
          }
        );
      } else {
        cards.forEach((card, i) => {
          const isRight = i % 2 === 0;
          gsap.fromTo(
            card,
            { x: isRight ? 100 : -100, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              ease: "power3.out",
              scrollTrigger: { trigger: card, start: "top 90%", end: "top 60%", scrub: 1 },
            }
          );
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="prozess"
      className="relative w-full bg-black text-white overflow-hidden"
    >
      {/* ── SVG Glow Snake — covers entire section ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 1000 2800"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          {/* Filter: keeps the sharp line AND adds a soft glow halo around it */}
          <filter id="snake-glow" x="-30%" y="-30%" width="160%" height="160%">
            {/* Create the glow from the source */}
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="glow" />
            {/* Merge: glow behind + original sharp line on top */}
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Single path: sharp line + glow in one element, always in sync */}
        <path
          ref={pathRef}
          d={SNAKE_PATH}
          stroke="#FF4B2B"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="1"
          filter="url(#snake-glow)"
        />
      </svg>

      {/* ── Heading — centered ── */}
      <div className="relative z-10 px-[5vw] pt-32 lg:pt-44 pb-20 lg:pb-32 text-center">
        <span className="process-header-anim block font-mono text-xs uppercase tracking-[0.3em] text-brand mb-6">
          [ Strategischer Ablauf ]
        </span>
        <h2
          className="process-header-anim font-display font-light leading-[0.9] tracking-tighter text-white mx-auto"
          style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
        >
          <span className="block">In vier Schritten</span>
          <span className="block">
            zur <span className="text-brand">Souveränität</span>
            <span className="text-white/20">.</span>
          </span>
        </h2>
      </div>

      {/* ── Timeline Cards ── */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8 pb-32 lg:pb-44">
        <div className="flex flex-col">
          {STEPS.map((step, i) => {
            const isRight = i % 2 === 0;
            return (
              <div
                key={step.index}
                className="py-16 lg:py-24"
              >
                <div
                  data-step-card
                  className={`w-full lg:w-[45%] ${
                    isRight ? "lg:ml-auto" : "lg:mr-auto"
                  }`}
                >
                  <div
                    className="group relative rounded-[32px] overflow-hidden transition-transform duration-700 md:hover:scale-[1.01] md:backdrop-blur-xl md:backdrop-saturate-150"
                    style={{
                      background: "rgba(18,18,26,0.94)",
                      boxShadow: "0 1px 0 0 rgba(255,255,255,0.1) inset, 0 24px 64px rgba(0,0,0,0.4)",
                      border: "1px solid rgba(255,255,255,0.09)",
                    }}
                  >
                    {/* Top glass shine — exact same as buttons */}
                    <span 
                      className="absolute inset-0 pointer-events-none rounded-[32px]"
                      style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 50%)" }}
                    />

                    {/* Image Area */}
                    <div className="relative w-full h-[220px] lg:h-[280px] overflow-hidden">
                      <Image
                        src={step.img}
                        alt={step.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover brightness-90 group-hover:brightness-110 group-hover:scale-105 transition-all duration-1000 ease-out"
                      />
                      {/* Gradient overlay for text readability */}
                      <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
                      
                    </div>

                    {/* Content Area */}
                    <div className="relative p-8 lg:p-10">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="w-2.5 h-2.5 rounded-full bg-brand shadow-[0_0_12px_#FF4B2B]" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-brand font-bold">
                          Meilenstein {step.index}
                        </span>
                      </div>
                      
                      <h3 className="font-display text-3xl lg:text-4xl font-light text-white mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                        {step.title}
                      </h3>
                      
                      <p className="text-white/40 text-base leading-relaxed max-w-[90%] group-hover:text-white/70 transition-colors duration-500">
                        {step.description}
                      </p>
                    </div>

                    {/* Hover Glow Accent — desktop only via CSS hover media query */}
                    <div className="hidden md:block absolute -bottom-10 -right-10 w-40 h-40 bg-brand/0 group-hover:bg-brand/10 rounded-full blur-[60px] transition-colors duration-1000" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Process;
