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
          alt="Elektro Gorivo EV charging network across India with white electric SUV plugged into a DC fast charger"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        {/* Left-side dark gradient for text legibility */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 25%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0) 70%)",
          }}
        />
      </motion.div>

      <motion.div style={{ y: contentY }} className="relative w-full">
        {children}
      </motion.div>
    </section>
  );
}
