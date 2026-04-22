"use client";

import { useRef } from "react";
import { useGSAP, gsap, registerScrollTrigger } from "@/hooks/useGSAP";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const AREAS = [
  {
    id: "01",
    title: "Corporate Security",
    image: "/images/corporateSecurity.jpeg",
    description: "Ganzheitliche Sicherheitskonzepte für Unternehmen, Vorstandskreise und kritische Infrastrukturen.",
  },
  {
    id: "02",
    title: "Private Protection",
    image: "/images/privateProtection.jpeg",
    description: "Diskreter Schutz für Familien, Residenzen und private Werttransporte im High-End Bereich.",
  },
  {
    id: "03",
    title: "Event Security",
    image: "/images/eventSecurity.jpeg",
    description: "Sicherheitskoordination für exklusive Events, Hauptversammlungen und VIP-Veranstaltungen.",
  },
  {
    id: "04",
    title: "Revierdienst",
    image: "/images/revierdienst.jpeg",
    description: "Präventive Bestreifung von Objekten und sofortige Alarmverfolgung durch unsere mobilen Einsatzkräfte.",
  }
];

export function Expertise() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      registerScrollTrigger();
      
      // Header fade up
      gsap.fromTo(
        ".expertise-header-anim",
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".expertise-header-anim",
            start: "top 85%",
          }
        }
      );

      gsap.fromTo(
        ".expertise-card",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out", scrollTrigger: {
            trigger: ".expertise-card",
            start: "top 85%",
        } }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative w-full bg-[#0B0B0C] py-32 text-white overflow-hidden">
      <div className="w-full">
         {/* Header - Styled like Services section */}
         <div className="expertise-header-anim px-[5vw] mb-20 flex flex-col items-start gap-6">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tighter text-white leading-[0.9]">
               Einsatzgebiete <span className="text-brand">.</span>
            </h2>
            <div className="max-w-xl">
               <p className="text-white/50 text-xl md:text-2xl font-light leading-relaxed">
                  Maßgeschneiderte Sicherheitsarchitektur für höchste Ansprüche in verschiedenen Disziplinen.
               </p>
            </div>
         </div>

         {/* Cards Slider/Grid */}
         <div className="px-[5vw] gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {AREAS.map((area) => (
               <div key={area.id} className="expertise-card group relative h-[450px] rounded-3xl overflow-hidden bg-black border border-white/10 cursor-pointer">
                  {/* Background gradient/overlay */}
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/20 to-black/90 z-10" />
                  
                  {/* Image */}
                  <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                     <Image 
                        src={area.image} 
                        alt={area.title} 
                        fill 
                        className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                     />
                  </div>

                  <div className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-md">
                     <ArrowRight className="w-4 h-4 text-brand -rotate-45" />
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end h-full">
                     <span className="font-mono text-brand text-xl mb-4 opacity-50 group-hover:opacity-100 transition-opacity">{area.id}</span>
                     <h3 className="text-2xl font-light mb-3">{area.title}</h3>
                     <p className="text-white/50 text-sm leading-relaxed opacity-100 md:opacity-0 md:group-hover:opacity-100 transform translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-300">
                        {area.description}
                     </p>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </section>
  );
}

export default Expertise;
