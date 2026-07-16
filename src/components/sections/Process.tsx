"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP, gsap, registerScrollTrigger } from "@/hooks/useGSAP";

const PROCESS_STEPS = [
  {
    index: "01",
    title: "Erstberatung",
    description:
      "Tiefgehende Analyse Ihrer individuellen Sicherheitsbedürfnisse. Wir hören zu und entwickeln diskret erste Lösungsansätze.",
    img: "/images/process/erstberatung.png",
  },
  {
    index: "02",
    title: "Risikoanalyse",
    description:
      "Identifikation von Schwachstellen in Ihrer Sicherheitsstruktur. Wir antizipieren Szenarien, um präventiv Lücken zu schließen.",
    img: "/images/process/risikoanalyse.jpeg",
  },
  {
    index: "03",
    title: "Schutzstrategie",
    description:
      "Entwicklung präziser Einsatzpläne mit hochqualifiziertem Fachpersonal — maßgeschneidert auf Ihre Anforderungen.",
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

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      registerScrollTrigger();

      gsap.utils.toArray<HTMLElement>(".process-row").forEach((row) => {
        const card = row.querySelector(".process-card-anim");
        const image = row.querySelector(".process-image-anim");
        if (!card || !image) return;

        const isEven = row.getAttribute("data-even") === "true";

        // Slide card from left (-120px) or right (120px)
        gsap.fromTo(
          card,
          { x: isEven ? -120 : 120, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.4,
            ease: "power4.out",
            scrollTrigger: {
              trigger: row,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );

        // Slide image from opposite side
        gsap.fromTo(
          image,
          { x: isEven ? 120 : -120, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1.4,
            ease: "power4.out",
            scrollTrigger: {
              trigger: row,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="prozess"
      className="spotlight-section relative w-full overflow-hidden bg-black text-white py-32"
    >
      <div className="relative z-10 mx-auto max-w-[1600px] px-4 md:px-12 flex flex-col gap-40">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="block font-mono text-xs uppercase tracking-[0.3em] text-[#7CB3D1] mb-6">
            [ Strategischer Ablauf ]
          </span>
          <h2 className="font-display font-light text-white text-[clamp(2.5rem,5vw,5rem)] leading-none tracking-tight">
            Designed to keep information clear and connected
          </h2>
        </div>

        {/* Rows */}
        {PROCESS_STEPS.map((step, i) => {
          const isEven = i % 2 === 0;
          return (
            <div
              key={step.index}
              data-even={isEven ? "true" : "false"}
              className={`process-row flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-16 md:gap-32 justify-center`}
            >
              {/* Card */}
              <div className="process-card-anim flex-1 flex flex-col justify-center w-full max-w-lg">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col gap-4 backdrop-blur-sm">
                  <span className="font-mono text-sm text-[#7CB3D1] font-bold">
                    [ {step.index} ]
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-medium text-white">
                    {step.title}
                  </h3>
                  <p className="font-sans text-white/60 text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Image */}
              <div className="process-image-anim flex-1 w-full max-w-lg aspect-square relative rounded-2xl overflow-hidden border border-white/10">
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Process;
