import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { LightRays } from "./LightRays";
import { FloatingLeaves } from "./FloatingLeaves";
import forestHero from "@/assets/forest-hero-cinematic.jpg";

/**
 * Cinematic forest hero. As the user scrolls:
 *  - background gently parallaxes upward + scales down
 *  - fog overlay clears (opacity → 0)
 *  - light rays intensify (opacity → 1)
 *  - foreground content drifts slightly with depth
 */
export function ParallaxHero({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.08]);
  const fogOpacity = useTransform(scrollYProgress, [0, 0.6], [0.35, 0]);
  const rayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-28 sm:pt-32"
    >
      {/* Forest background — parallax */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 -z-10">
        <img
          src={forestHero}
          alt="Electric car charging at a premium EV station in a green landscape with wind turbines and solar panels"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        {/* Base wash for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background" />
      </motion.div>

      {/* Light rays — intensify on scroll */}
      <motion.div style={{ opacity: rayOpacity }} className="absolute inset-0 -z-10">
        <LightRays />
      </motion.div>

      {/* Fog overlay — clears on scroll */}
      <motion.div
        style={{ opacity: fogOpacity }}
        aria-hidden
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-transparent" />
      </motion.div>

      <FloatingLeaves />

      <motion.div style={{ y: contentY }} className="relative w-full">
        {children}
      </motion.div>
    </section>
  );
}
