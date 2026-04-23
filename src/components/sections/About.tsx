"use client";

import { useRef } from "react";
import { useGSAP, gsap, registerScrollTrigger } from "@/hooks/useGSAP";
import { Target, ShieldCheck, Award } from "lucide-react";

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      registerScrollTrigger();
      
      gsap.fromTo(
        ".about-header-anim",
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".about-header-anim",
            start: "top 85%",
          }
        }
      );

      const words = textRef.current?.querySelectorAll(".reveal-word");
      if (words) {
        gsap.fromTo(
          words,
          { opacity: 0.1, color: "rgba(255,255,255,0.1)" },
          {
            opacity: 1,
            color: "rgba(255,255,255,1)",
            stagger: 0.1,
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 70%",
              end: "bottom 30%",
              scrub: true,
            },
          }
        );
      }
      const cards = gsap.utils.toArray(".about-card");
      cards.forEach((card, i) => {
        const el = card as HTMLElement;
        gsap.fromTo(
          el,
          { y: 100 * (i + 1), opacity: 0 },
          {
            y: -50 * (i + 1),
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    },
    { scope: containerRef }
  );

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative w-full bg-[#080809] py-32 md:py-64 overflow-hidden"
    >
      <div className="px-[5vw] max-w-[1700px] mx-auto">
        
        {/* Header - Styled like Services section */}
        <div className="mb-20">
          <h2 className="about-header-anim text-5xl md:text-7xl lg:text-8xl font-display font-light tracking-tighter text-white leading-[0.9]">
             Über uns <span className="text-[#FF4B2B]">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Narrative Reveal */}
          <div className="lg:col-span-8">
             <div ref={textRef} className="flex flex-wrap gap-x-[0.6em] gap-y-6 md:gap-y-10">
                {[
                  "Wir", "glauben", "nicht", "an", "Sicherheit", "von", "der", "Stange.", 
                  "Wahrer", "Schutz", "entsteht", "durch", "Präzision,", "Vorausplanung", 
                  "und", "absolute", "Hingabe.", "ProSecure", "ist", "das", "unsichtbare", 
                  "Schutzschild", "für", "diejenigen,", "die", "keine", "Kompromisse", 
                  "eingehen."
                ].map((word, i) => (
                  <span key={i} className="reveal-word font-display text-4xl sm:text-5xl md:text-6xl lg:text-[5vw] leading-[1.1] font-light tracking-tighter transition-colors">
                    {word}
                  </span>
                ))}
             </div>
          </div>

          {/* Right Side: Glass Cards Column */}
          <div className="lg:col-span-4 flex flex-col gap-8 pt-12 lg:pt-32">
                        {/* Card 1: Präzision */}
             <div className="about-card p-8 md:p-10 rounded-[40px] relative overflow-hidden group cursor-default"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
                    backdropFilter: "blur(50px)",
                    WebkitBackdropFilter: "blur(50px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: `
                      0 1px 0 0 rgba(255,255,255,0.2) inset, 
                      0 0 0 1px rgba(255,255,255,0.05) inset,
                      0 20px 50px -15px rgba(0,0,0,0.5)
                    `
                  }}>
                {/* Diagonal Metal Sheen */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(110deg,transparent_40%,rgba(255,255,255,0.1)_45%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.1)_55%,transparent_60%)]" />
                <span className="absolute inset-0 rounded-[40px] pointer-events-none" 
                      style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 60%)" }} />
                
                <div className="relative z-10">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand shadow-[0_0_15px_rgba(255,75,43,0.2)]">
                         <Target size={20} />
                      </div>
                      <h4 className="font-display text-2xl text-white font-medium uppercase tracking-wider">Präzision</h4>
                   </div>
                   <p className="text-white/60 text-lg font-light leading-relaxed">
                      Jedes Detail zählt. Unsere Analysen lassen keinen Raum für Zufälle. Wir agieren hocheffizient in jeder Disziplin.
                   </p>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             </div>

             {/* Card 2: Diskretion */}
             <div className="about-card p-8 md:p-10 rounded-[40px] relative overflow-hidden group cursor-default"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
                    backdropFilter: "blur(50px)",
                    WebkitBackdropFilter: "blur(50px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: `
                      0 1px 0 0 rgba(255,255,255,0.2) inset, 
                      0 0 0 1px rgba(255,255,255,0.05) inset,
                      0 20px 50px -15px rgba(0,0,0,0.5)
                    `
                  }}>
                {/* Diagonal Metal Sheen */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(110deg,transparent_40%,rgba(255,255,255,0.1)_45%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.1)_55%,transparent_60%)]" />
                <span className="absolute inset-0 rounded-[40px] pointer-events-none" 
                      style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 60%)" }} />

                <div className="relative z-10">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand shadow-[0_0_15px_rgba(255,75,43,0.2)]">
                         <ShieldCheck size={20} />
                      </div>
                      <h4 className="font-display text-2xl text-white font-medium uppercase tracking-wider">Diskretion</h4>
                   </div>
                   <p className="text-white/60 text-lg font-light leading-relaxed">
                      Sicherheit, die man nicht sieht, aber deren Präsenz absolute Souveränität verleiht. Über 5 Jahre Erfahrung.
                   </p>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             </div>

             {/* Card 3: Expertise */}
             <div className="about-card p-8 md:p-10 rounded-[40px] relative overflow-hidden group cursor-default"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
                    backdropFilter: "blur(50px)",
                    WebkitBackdropFilter: "blur(50px)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    boxShadow: `
                      0 1px 0 0 rgba(255,255,255,0.2) inset, 
                      0 0 0 1px rgba(255,255,255,0.05) inset,
                      0 20px 50px -15px rgba(0,0,0,0.5)
                    `
                  }}>
                {/* Diagonal Metal Sheen */}
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(110deg,transparent_40%,rgba(255,255,255,0.1)_45%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.1)_55%,transparent_60%)]" />
                <span className="absolute inset-0 rounded-[40px] pointer-events-none" 
                      style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 60%)" }} />

                <div className="relative z-10">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-brand shadow-[0_0_15px_rgba(var(--brand-rgb),0.2)]">
                         <Award size={20} />
                      </div>
                      <h4 className="font-display text-2xl text-white font-medium uppercase tracking-wider">Expertise</h4>
                   </div>
                   <p className="text-white/60 text-lg font-light italic leading-relaxed">
                      &quot;Sicherheit ist kein Produkt, sondern ein Versprechen, das wir jeden Tag durch elite Standards halten.&quot;
                   </p>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
             </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;

