"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

// speed > 1 → поднимается быстрее (ближний план)
// speed < 1 → поднимается медленнее (дальний план)
const TEAM_IMAGES = [
  { src: "/images/team/team-action-1.png",    speed: 0.7,  grid: "1/2/8/9",     mobileGrid: "1/2/10/10" },
  { src: "/images/team/team-action-2.png",    speed: 0.85, grid: "5/12/11/19",   mobileGrid: "8/10/16/19" },
  { src: "/images/team/team-portrait-1.jpeg", speed: 1.15, grid: "14/6/20/15",  mobileGrid: "18/3/27/12" },
  { src: "/images/team/team-portrait-2.jpeg", speed: 0.9,  grid: "22/1/28/8",    mobileGrid: "28/9/37/18" },
  { src: "/images/team/team-portrait-3.jpeg", speed: 1.05, grid: "26/13/32/20", mobileGrid: "38/2/47/11" },
  { src: "/images/team/team-portrait-4.jpeg", speed: 0.8,  grid: "35/3/42/10",   mobileGrid: "48/10/57/19" }, 
  { src: "/images/team/team-portrait-5.png",  speed: 1.1,  grid: "40/12/47/20",  mobileGrid: "58/3/67/12" }, 
  { src: "/images/team/team-profile-1.jpeg",  speed: 0.95, grid: "50/7/57/16",   mobileGrid: "68/8/77/17" }, 
];

const TITLE_TEXT = "PROSECURE TEAM";
const TITLE = (
  <>
    {TITLE_TEXT}{" "}
    <span className="text-brand" style={{ WebkitTextStroke: "none" }}>
      .
    </span>
  </>
);

export function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mobileMode, setMobileMode] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const check = () => setMobileMode(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const section = sectionRef.current;
    if (!section) return;

    const images = Array.from(
      section.querySelectorAll<HTMLElement>("[data-speed]")
    );
    const clamp = gsap.utils.clamp(-20, 20);
    let lastScrollY = window.scrollY;
    let skewTimer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const scrollY = window.scrollY;
      const sectionTop  = section.offsetTop;
      const sectionH    = section.offsetHeight;
      const vH          = window.innerHeight;

      const raw = (scrollY - sectionTop + vH) / (sectionH + vH);
      const p   = Math.max(0, Math.min(1, raw));

      images.forEach((img) => {
        const speed = Number(img.dataset.speed) || 1;
        const y = 200 + (-(300 * speed) - 200) * p;
        gsap.set(img, { y });
      });

      const velocity = (scrollY - lastScrollY) * 60;
      lastScrollY = scrollY;
      const skew = clamp(velocity / -50);
      if (Math.abs(skew) > 0.05) {
        clearTimeout(skewTimer);
        gsap.to(images, { skewY: skew, duration: 0.35, ease: "power3", overwrite: "auto" });
        skewTimer = setTimeout(
          () => gsap.to(images, { skewY: 0, duration: 0.6, ease: "power3" }),
          200
        );
      }
    };

    gsap.ticker.add(tick);

    return () => {
      clearTimeout(skewTimer);
      gsap.ticker.remove(tick);
      gsap.set(images, { clearProps: "y,skewY" });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="team"
      style={{ position: "relative", background: "black" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: 0,
          overflow: "visible",
          pointerEvents: "none",
          zIndex: 3,
        }}
      >
        <h2
          className="font-display font-black uppercase select-none"
          style={{
            position: "absolute",
            top: "50vh",
            transform: "translateY(-50%)",
            width: "100%",
            textAlign: "center",
            fontSize: mobileMode ? "10vw" : "8vw",
            lineHeight: 1,
            color: "white",
            WebkitTextStroke: "1.5px white",
            zIndex: -1,
            whiteSpace: "nowrap",
          }}
        >
          {TITLE}
        </h2>

        <h2
          aria-hidden="true"
          className="font-display font-black uppercase select-none"
          style={{
            position: "absolute",
            top: "50vh",
            transform: "translateY(-50%)",
            width: "100%",
            textAlign: "center",
            fontSize: mobileMode ? "10vw" : "8vw",
            lineHeight: 1,
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(255,255,255,0.1)",
            zIndex: 1,
            whiteSpace: "nowrap",
          }}
        >
          {TITLE}
        </h2>

        <h2
          aria-hidden="true"
          className="font-display font-black uppercase select-none"
          style={{
            position: "absolute",
            top: "50vh",
            transform: "translateY(-50%)",
            width: "100%",
            textAlign: "center",
            fontSize: mobileMode ? "10vw" : "8vw",
            lineHeight: 1,
            color: "#C9A84C",
            mixBlendMode: "screen",
            opacity: 0.2,
            zIndex: 1,
            whiteSpace: "nowrap",
          }}
        >
          {TITLE}
        </h2>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
          paddingTop: "60vh",
          minHeight: "400vh",
          display: "grid",
          gridTemplateColumns: mobileMode ? "repeat(20, 5%)" : "repeat(20, 2%)",
          gridTemplateRows: mobileMode ? "repeat(100, 3vh)" : "repeat(60, 5vh)",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        {TEAM_IMAGES.map((item, i) => (
          <div
            key={i}
            data-speed={item.speed}
            style={{
              gridArea: mobileMode ? item.mobileGrid : item.grid,
              width: "100%",
              height: "100%",
              willChange: "transform",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
