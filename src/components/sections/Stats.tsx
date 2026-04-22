"use client";

import { useRef } from "react";
import { Globe } from "lucide-react";
import { useGSAP, gsap, registerScrollTrigger } from "@/hooks/useGSAP";

export function Stats() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const mainText = "Wir sind eine diskrete Sicherheitsagentur mit absoluter Leidenschaft für kompromisslosen Schutz, der unseren Kunden absolute Sicherheit garantiert";
  const words = mainText.split(" ");
  
  const importantWords = ["diskrete", "Sicherheitsagentur", "Leidenschaft", "Schutz,", "Sicherheit"];

  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      registerScrollTrigger();

      // Block reveal
      gsap.fromTo(
        ".animate-up-stats",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out", scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
        } }
      );

      // Text reveal animation
      const wordElements = gsap.utils.toArray(".reveal-word");
      
      wordElements.forEach((word) => {
        const el = word as HTMLElement;
        const isImportant = el.getAttribute("data-important") === "true";
        gsap.to(el, {
          color: isImportant ? "#ff4b2b" : "#ffffff",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 70%",
            scrub: true,
          }
        });
      });

      // Counter animations
      const counters = [
        { selector: ".counter-5", from: 0, to: 5, suffix: "+" },
        { selector: ".counter-100", from: 0, to: 100, suffix: "%" },
        { selector: ".counter-24", from: 0, to: 24, suffix: "/7" },
      ];

      counters.forEach(({ selector, from, to, suffix }) => {
        const el = sectionRef.current?.querySelector(selector);
        if (!el) return;
        const obj = { val: from };
        gsap.to(obj, {
          val: to,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${Math.round(obj.val)}${suffix}`;
          },
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            once: true,
          },
        });
      });
      // Footer: Über 5 Jahre animation
      gsap.fromTo(
        ".footer-stat-anim",
        { x: -50, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1.2, 
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".footer-stat-anim",
            start: "top 90%",
          }
        }
      );

      // Icons grid animation
      gsap.fromTo(
        ".icon-card-anim",
        { scale: 0.8, opacity: 0, y: 30 },
        { 
          scale: 1, 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.1, 
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".icon-card-anim",
            start: "top 90%",
          }
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative w-full bg-black text-white pt-10">
      <div className="relative z-20 w-full px-4 md:px-12 mx-auto max-w-[1400px] pb-32 animate-up-stats">
        {/* Main Glass Box */}
        <div
          className="relative rounded-[40px] p-8 md:p-14 lg:p-20 overflow-hidden"
          style={{
            background: "linear-gradient(160deg, rgba(18,18,20,0.88) 0%, rgba(12,12,14,0.92) 60%, rgba(16,16,18,0.88) 100%)",
            backdropFilter: "blur(40px) saturate(1.3)",
            WebkitBackdropFilter: "blur(40px) saturate(1.3)",
            boxShadow: "0 1px 0 0 rgba(255,255,255,0.08) inset, 0 -1px 0 0 rgba(0,0,0,0.5) inset, 0 32px 80px rgba(0,0,0,0.45)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Top glass shine */}
          <span
            className="absolute inset-0 pointer-events-none rounded-[40px]"
            style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 25%, transparent 50%)" }}
          />
          {/* Orange glow accent */}
          <div className="absolute -left-16 -top-16 w-64 h-64 bg-brand/15 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24">
             {/* Left Column: Icons and Text */}
             <div className="flex flex-col gap-8 lg:max-w-xs shrink-0">
               <div className="flex items-start gap-3">
                 <Globe className="w-8 h-8 text-white mt-1 shrink-0" strokeWidth={1} />
                 <p className="text-[#a0a0a0] text-sm leading-relaxed max-w-[200px]">
                   Einsatzbereit in Dresden und im gesamten DACH-Raum
                 </p>
               </div>
               
               <div className="flex gap-3">
                  {/* X — orange liquid glass */}
                  <button
                    className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,75,43,0.9) 0%, rgba(255,120,50,0.85) 100%)",
                      boxShadow: "0 1px 0 0 rgba(255,255,255,0.25) inset, 0 4px 12px rgba(255,75,43,0.3)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.244 2.25H21.552L14.325 10.51L22.827 21.75H16.17L10.956 14.933L4.99 21.75H1.68L9.41 12.915L1.254 2.25H8.08L12.793 8.481L18.244 2.25ZM17.083 19.77H18.916L7.083 4.126H5.117L17.083 19.77Z" fill="currentColor"/>
                    </svg>
                  </button>
                  {/* Instagram — glass metal */}
                  <button
                    className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
                    style={{
                      background: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)",
                      boxShadow: "0 1px 0 0 rgba(255,255,255,0.12) inset, 0 -1px 0 0 rgba(0,0,0,0.2) inset",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </button>
                  {/* Globe — glass metal */}
                  <button
                    className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
                    style={{
                      background: "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.03) 100%)",
                      boxShadow: "0 1px 0 0 rgba(255,255,255,0.12) inset, 0 -1px 0 0 rgba(0,0,0,0.2) inset",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg>
                  </button>
                </div>
             </div>

             {/* Right Column: Main Text */}
             <div className="flex-1 max-w-4xl lg:text-right">
               <h3 className="text-[28px] md:text-[36px] lg:text-[44px] leading-[1.2] font-display tracking-tight mb-24">
                 {words.map((word, i) => {
                   const isImportant = importantWords.includes(word);
                   return (
                     <span 
                       key={i} 
                       className="reveal-word inline-block mr-[0.25em] text-[#333333]" 
                       data-important={isImportant}
                     >
                       {word}
                     </span>
                   );
                 })}
               </h3>
             </div>
          </div>

          {/* Bottom Grid: Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-12 mt-12 md:mt-24">
             {/* Stat 1 */}
             <div className="flex flex-col border-b border-brand/60 pb-6">
                <h4 className="counter-5 font-mono text-[64px] md:text-[80px] leading-none mb-6 text-white tracking-tighter" style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}>0+</h4>
                <div className="flex items-center gap-3">
                   <span className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_8px_#FF4B2B]"></span>
                   <span className="text-[#a0a0a0] text-sm">Jahre Erfahrung</span>
                </div>
             </div>
             {/* Stat 2 */}
             <div className="flex flex-col border-b border-brand/60 pb-6">
                <h4 className="counter-100 font-mono text-[64px] md:text-[80px] leading-none mb-6 text-white tracking-tighter" style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}>0%</h4>
                <div className="flex items-center gap-3">
                   <span className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_8px_#FF4B2B]"></span>
                   <span className="text-[#a0a0a0] text-sm">Diskretion</span>
                </div>
             </div>
             {/* Stat 3 */}
             <div className="flex flex-col border-b border-brand/60 pb-6">
                <h4 className="counter-24 font-mono text-[64px] md:text-[80px] leading-none mb-6 text-white tracking-tighter" style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}>0/7</h4>
                <div className="flex items-center gap-3">
                   <span className="w-1.5 h-1.5 rounded-full bg-brand shadow-[0_0_8px_#FF4B2B]"></span>
                   <span className="text-[#a0a0a0] text-sm">Einsatzbereit</span>
                </div>
             </div>
          </div>
        </div>

        {/* Partners Footer - Redesigned to match screenshot */}
        <div className="mt-32 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 w-full">
            {/* Left: Über 5 Jahre */}
            <div className="footer-stat-anim flex flex-col items-center md:items-end relative">
               <div className="flex items-baseline gap-4">
                  <span className="text-5xl md:text-8xl font-display font-light text-white tracking-tight">Über</span>
                  <span className="text-6xl md:text-9xl font-mono font-bold text-brand tracking-tight leading-none">5</span>
               </div>
               <span className="text-5xl md:text-8xl font-display font-light text-white tracking-tight -translate-y-2 md:-translate-y-4">Jahre</span>
               <p className="text-white/40 text-[10px] md:text-xs tracking-[0.2em] uppercase mt-2">Diskreter Schutz seit 2019</p>
               
               {/* Vertical line hidden on mobile, visible on md: flex to the right */}
               <div className="hidden md:block absolute -right-16 top-1/2 -translate-y-1/2 h-[120%] w-[2px] bg-linear-to-b from-transparent via-white/30 to-transparent" />
            </div>
            
            {/* Right: Security Icon Grid */}
            <div className="relative grid grid-cols-3 gap-4">
               {/* Column 1 — Shield + Lock */}
               <div className="flex flex-col gap-4 mt-12 md:mt-16">
                  <div className="icon-card-anim w-20 h-20 md:w-32 md:h-32 rounded-full flex items-center justify-center hover:scale-105 transition-transform" style={{ background: "linear-gradient(180deg,rgba(255,255,255,0.07) 0%,rgba(255,255,255,0.02) 100%)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 1px 0 0 rgba(255,255,255,0.1) inset" }}>
                     <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div className="icon-card-anim w-20 h-20 md:w-32 md:h-32 rounded-full flex items-center justify-center hover:scale-105 transition-transform" style={{ background: "linear-gradient(135deg,rgba(255,75,43,0.15) 0%,rgba(255,75,43,0.05) 100%)", border: "1px solid rgba(255,75,43,0.2)", boxShadow: "0 1px 0 0 rgba(255,255,255,0.08) inset" }}>
                     <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#FF4B2B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </div>
               </div>
               {/* Column 2 — Eye + Signal */}
               <div className="flex flex-col gap-4">
                  <div className="icon-card-anim w-20 h-20 md:w-32 md:h-32 rounded-full flex items-center justify-center hover:scale-105 transition-transform" style={{ background: "linear-gradient(180deg,rgba(255,255,255,0.07) 0%,rgba(255,255,255,0.02) 100%)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 1px 0 0 rgba(255,255,255,0.1) inset" }}>
                     <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  </div>
                  <div className="icon-card-anim w-20 h-20 md:w-32 md:h-32 rounded-full flex items-center justify-center hover:scale-105 transition-transform" style={{ background: "linear-gradient(180deg,rgba(255,255,255,0.07) 0%,rgba(255,255,255,0.02) 100%)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 1px 0 0 rgba(255,255,255,0.1) inset" }}>
                     <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M10.28 16.1a6 6 0 0 1 3.44 0"/><circle cx="12" cy="20" r="1" fill="white"/></svg>
                  </div>
               </div>
               {/* Column 3 — Camera */}
               <div className="flex flex-col gap-4 mt-24 md:mt-32">
                  <div className="icon-card-anim w-20 h-20 md:w-32 md:h-32 rounded-full flex items-center justify-center hover:scale-105 transition-transform" style={{ background: "linear-gradient(135deg,rgba(255,75,43,0.15) 0%,rgba(255,75,43,0.05) 100%)", border: "1px solid rgba(255,75,43,0.2)", boxShadow: "0 1px 0 0 rgba(255,255,255,0.08) inset" }}>
                     <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#FF4B2B" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                  </div>
               </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
