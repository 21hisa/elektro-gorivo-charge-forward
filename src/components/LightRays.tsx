import { motion, useReducedMotion } from "framer-motion";

/**
 * Animated god-rays overlay. Renders multiple soft conical light beams
 * that pulse gently. Pure SVG, GPU-cheap, scales fluidly.
 */
export function LightRays({
  className = "",
  intensity = 1,
}: {
  className?: string;
  intensity?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMin slice"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <defs>
        <radialGradient id="ray-grad" cx="50%" cy="0%" r="60%">
          <stop offset="0%" stopColor="#FFF6D8" stopOpacity={0.55 * intensity} />
          <stop offset="60%" stopColor="#FFE9B0" stopOpacity={0.18 * intensity} />
          <stop offset="100%" stopColor="#FFE9B0" stopOpacity="0" />
        </radialGradient>
      </defs>
      {[
        { d: "M600,0 L380,800 L520,800 Z", delay: 0 },
        { d: "M600,0 L520,800 L640,800 Z", delay: 0.6 },
        { d: "M600,0 L640,800 L780,800 Z", delay: 1.2 },
        { d: "M600,0 L300,800 L440,800 Z", delay: 0.3 },
        { d: "M600,0 L780,800 L920,800 Z", delay: 0.9 },
      ].map((r, i) => (
        <motion.path
          key={i}
          d={r.d}
          fill="url(#ray-grad)"
          initial={{ opacity: 0 }}
          animate={
            reduce
              ? { opacity: 0.5 * intensity }
              : { opacity: [0.25 * intensity, 0.7 * intensity, 0.25 * intensity] }
          }
          transition={{
            duration: 6,
            delay: r.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
