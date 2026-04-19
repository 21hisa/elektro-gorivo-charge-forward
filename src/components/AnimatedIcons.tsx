import { motion, useReducedMotion } from "framer-motion";

/** Airflow particles — for "Clean" */
export function CleanIcon() {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden>
      {[14, 26, 38, 50].map((y, i) => (
        <motion.line
          key={y}
          x1="6"
          x2="58"
          y1={y}
          y2={y}
          stroke="var(--electric)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray="6 8"
          initial={{ pathLength: 0, opacity: 0.3 }}
          animate={
            reduce
              ? { pathLength: 1, opacity: 0.7 }
              : { pathLength: [0.3, 1, 0.3], opacity: [0.3, 0.9, 0.3], x: [-4, 6, -4] }
          }
          transition={{ duration: 3.4, delay: i * 0.25, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </svg>
  );
}

/** Glowing network — for "Smart" */
export function SmartIcon() {
  const reduce = useReducedMotion();
  const nodes = [
    { cx: 12, cy: 16 },
    { cx: 52, cy: 14 },
    { cx: 32, cy: 32 },
    { cx: 14, cy: 50 },
    { cx: 50, cy: 50 },
  ];
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden>
      {nodes.slice(1).map((n, i) => (
        <motion.line
          key={i}
          x1={nodes[0].cx}
          y1={nodes[0].cy}
          x2={n.cx}
          y2={n.cy}
          stroke="var(--electric)"
          strokeOpacity="0.5"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={reduce ? { pathLength: 1 } : { pathLength: [0, 1, 0] }}
          transition={{ duration: 4, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={`n-${i}`}
          cx={n.cx}
          cy={n.cy}
          r="3"
          fill="var(--electric)"
          animate={
            reduce ? { opacity: 1 } : { opacity: [0.4, 1, 0.4], scale: [0.8, 1.15, 0.8] }
          }
          transition={{ duration: 2.4, delay: i * 0.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
        />
      ))}
    </svg>
  );
}

/** Growing tree — for "Enduring" */
export function EnduringIcon() {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden>
      <motion.path
        d="M32,58 L32,30"
        stroke="oklch(0.35 0.06 60)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={reduce ? { pathLength: 1 } : { pathLength: [0, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      <motion.path
        d="M32,38 L22,32 M32,34 L42,28"
        stroke="oklch(0.38 0.06 60)"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={reduce ? { pathLength: 1 } : { pathLength: [0, 1] }}
        transition={{ duration: 1.6, delay: 0.6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      />
      {[
        { cx: 32, cy: 22, r: 8 },
        { cx: 22, cy: 28, r: 5 },
        { cx: 42, cy: 24, r: 6 },
      ].map((c, i) => (
        <motion.circle
          key={i}
          cx={c.cx}
          cy={c.cy}
          r={c.r}
          fill="var(--electric)"
          fillOpacity="0.65"
          initial={{ scale: 0 }}
          animate={reduce ? { scale: 1 } : { scale: [0, 1, 1, 0] }}
          transition={{ duration: 4, delay: 1.4 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: `${c.cx}px ${c.cy}px` }}
        />
      ))}
    </svg>
  );
}

/** Tiny leaf for navbar */
export function LeafMark({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
      animate={reduce ? undefined : { rotate: [-8, 8, -8] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      style={{ transformOrigin: "12px 20px" }}
    >
      <path
        d="M12 21 C5 18 4 11 9 5 C13 8 18 9 19 16 C18 19 15 21 12 21 Z"
        fill="var(--electric)"
        fillOpacity="0.85"
      />
      <path d="M12 21 C12 16 13 11 16 8" stroke="white" strokeOpacity="0.6" strokeWidth="0.8" fill="none" strokeLinecap="round" />
    </motion.svg>
  );
}
