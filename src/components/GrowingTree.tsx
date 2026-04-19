import { motion, useReducedMotion } from "framer-motion";

/**
 * Animated SVG tree that grows trunk → branches → leaves on scroll-into-view.
 * Pure SVG, no images. Inherits color from --electric.
 */
export function GrowingTree({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    show: { pathLength: 1, opacity: 1 },
  };
  const leafIn = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1 },
  };

  return (
    <motion.svg
      viewBox="0 0 400 500"
      className={className}
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      aria-hidden
    >
      {/* Trunk */}
      <motion.path
        d="M200,490 C200,420 200,360 200,300 C200,260 195,220 198,180"
        stroke="oklch(0.35 0.06 60)"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        variants={draw}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Branches */}
      <motion.path
        d="M198,250 C170,230 140,225 110,235"
        stroke="oklch(0.38 0.06 60)"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        variants={draw}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
      />
      <motion.path
        d="M200,220 C228,200 260,196 295,206"
        stroke="oklch(0.38 0.06 60)"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
        variants={draw}
        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
      />
      <motion.path
        d="M199,190 C190,170 180,150 175,130"
        stroke="oklch(0.4 0.06 60)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        variants={draw}
        transition={{ duration: 0.9, delay: 1, ease: "easeOut" }}
      />
      <motion.path
        d="M199,190 C212,170 222,150 230,128"
        stroke="oklch(0.4 0.06 60)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        variants={draw}
        transition={{ duration: 0.9, delay: 1.1, ease: "easeOut" }}
      />

      {/* Leaf clusters */}
      {[
        { cx: 110, cy: 230, r: 28 },
        { cx: 295, cy: 200, r: 32 },
        { cx: 175, cy: 122, r: 26 },
        { cx: 232, cy: 120, r: 28 },
        { cx: 200, cy: 90, r: 36 },
        { cx: 155, cy: 165, r: 22 },
        { cx: 250, cy: 165, r: 24 },
      ].map((c, i) => (
        <motion.circle
          key={i}
          cx={c.cx}
          cy={c.cy}
          r={c.r}
          fill="var(--electric)"
          fillOpacity="0.55"
          variants={leafIn}
          transition={{ duration: 0.7, delay: 1.4 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: `${c.cx}px ${c.cy}px` }}
        />
      ))}
      {/* Inner highlights */}
      {[
        { cx: 200, cy: 90, r: 20 },
        { cx: 295, cy: 200, r: 16 },
        { cx: 110, cy: 230, r: 14 },
      ].map((c, i) => (
        <motion.circle
          key={`h-${i}`}
          cx={c.cx}
          cy={c.cy}
          r={c.r}
          fill="var(--electric-glow)"
          fillOpacity="0.7"
          variants={leafIn}
          transition={{ duration: 0.6, delay: 2 + i * 0.1, ease: "easeOut" }}
          style={{ transformOrigin: `${c.cx}px ${c.cy}px` }}
        />
      ))}
    </motion.svg>
  );
}
