"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ProgressBar() {
  const { scrollYProgress } = useScroll();
  
  // Create a spring animation for the scroll progress to make it smooth
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-linear-to-r from-brand via-[#ff6a4d] to-brand origin-left z-100 pointer-events-none shadow-[0_0_10px_rgba(255,75,43,0.4)]"
      style={{ scaleX }}
    />
  );
}
