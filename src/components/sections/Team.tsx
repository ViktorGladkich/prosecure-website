"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP, gsap, registerScrollTrigger, ScrollTrigger } from "@/hooks/useGSAP";

const TEAM_IMAGES = [
  { src: "/images/team/team-action-1.png",    speed: 0.8, grid: "1/1/6/8"    },
  { src: "/images/team/team-action-2.png",    speed: 0.9, grid: "3/12/8/20"  },
  { src: "/images/team/team-portrait-1.jpeg", speed: 1.0, grid: "9/5/13/15"  },
  { src: "/images/team/team-portrait-2.jpeg", speed: 1.1, grid: "14/1/18/8"  },
  { src: "/images/team/team-portrait-3.jpeg", speed: 0.9, grid: "16/12/20/19"},
  { src: "/images/team/team-portrait-4.jpeg", speed: 1.2, grid: "20/2/25/9"  },
  { src: "/images/team/team-portrait-5.png",  speed: 0.8, grid: "22/11/24/20"},
  { src: "/images/team/team-profile-1.jpeg",  speed: 1.0, grid: "26/5/30/15" },
];

const TITLE = "PROSECURE TEAM";

export function Team() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;
      registerScrollTrigger();

      const images = gsap.utils.toArray<HTMLElement>(".team-img");

      // Velocity-based skew — mirrors ScrollSmoother's onUpdate pattern
      type QuickToFn = (value: number) => gsap.core.Tween;
      const skewTo = gsap.quickTo(images, "skewY", {
        duration: 0.4,
        ease: "power3",
      }) as QuickToFn;
      const clamp = gsap.utils.clamp(-20, 20);

      let scrollTimer: ReturnType<typeof setTimeout>;

      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          clearTimeout(scrollTimer);
          skewTo(clamp(self.getVelocity() / -50));
          scrollTimer = setTimeout(() => skewTo(0), 200);
        },
        onLeave: () => skewTo(0),
        onLeaveBack: () => skewTo(0),
      });

      // Parallax per image
      images.forEach((img) => {
        const speed = parseFloat((img as HTMLElement).dataset.speed ?? "1");
        gsap.to(img, {
          y: (1 - speed) * window.innerHeight * 0.8,
          ease: "none",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      return () => {
        clearTimeout(scrollTimer);
        st.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="team"
      style={{ background: "#1a1721", overflowX: "hidden" }}
    >
      {/* ── Sticky title container — sticks to viewport top, height 0 ── */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: 0,
          overflow: "visible",
          pointerEvents: "none",
          zIndex: 2,
        }}
      >
        {/* Layer 1 — solid fill (behind images) */}
        <h2
          className="absolute w-full text-center font-display font-black uppercase select-none"
          style={{
            top: "50vh",
            transform: "translateY(-100%)",
            fontSize: "8vw",
            lineHeight: 1,
            color: "white",
            WebkitTextStroke: "1.5px white",
            zIndex: -2,
          }}
        >
          {TITLE}
        </h2>

        {/* Layer 2 — outline (above images) */}
        <h2
          aria-hidden="true"
          className="absolute w-full text-center font-display font-black uppercase select-none"
          style={{
            top: "50vh",
            transform: "translateY(-100%)",
            fontSize: "8vw",
            lineHeight: 1,
            color: "transparent",
            WebkitTextStroke: "1.5px white",
            zIndex: 2,
          }}
        >
          {TITLE}
        </h2>

        {/* Layer 3 — screen blend in brand gold */}
        <h2
          aria-hidden="true"
          className="absolute w-full text-center font-display font-black uppercase select-none"
          style={{
            top: "50vh",
            transform: "translateY(-100%)",
            fontSize: "8vw",
            lineHeight: 1,
            color: "#C9A84C",
            mixBlendMode: "screen",
            zIndex: 2,
          }}
        >
          {TITLE}
        </h2>
      </div>

      {/* ── Scrolling image grid ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingTop: "60vh",
          height: "150vh",
          display: "grid",
          gridTemplateColumns: "repeat(20, 2%)",
          gridTemplateRows: "repeat(30, 3%)",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {TEAM_IMAGES.map((item, i) => (
          <div
            key={i}
            data-speed={item.speed}
            className="team-img"
            style={{
              gridArea: item.grid,
              width: "100%",
              height: "100%",
              overflow: "hidden",
              willChange: "transform",
            }}
          >
            <Image
              src={item.src}
              alt="ProSecure Team"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
