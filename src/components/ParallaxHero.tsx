import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import forestHero from "@/assets/forest-hero-cinematic.jpg";

/**
 * Cinematic EV hero. Crisp, high-contrast — no fog, no wash.
 * Subtle parallax on the background; soft directional gradient on the
 * left third creates a clean text plate without dimming the imagery.
 */
export function ParallaxHero({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "15%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.02, reduce ? 1.02 : 1.1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -50]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 sm:pt-32"
    >
      {/* Sharp parallax background */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 -z-10">
        <img
          src={forestHero}
          alt="Premium Elektro Gorivo EV charging station with silver electric car, wind turbines and solar panels at golden hour"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        {/* Directional left-side text plate — preserves image vibrance */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F0C]/55 via-[#0B0F0C]/15 to-transparent md:from-[#0B0F0C]/60 md:via-[#0B0F0C]/10" />
        {/* Bottom anchor for legibility on mobile where image fills frame */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
      </motion.div>

      <motion.div style={{ y: contentY }} className="relative w-full">
        {children}
      </motion.div>
    </section>
  );
}
