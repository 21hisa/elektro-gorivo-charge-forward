import { motion, useReducedMotion } from "framer-motion";
import leaf from "@/assets/leaf.png";

const leaves = [
  { left: "8%", size: 64, dur: 22, delay: 0, rot: -25, drift: 30 },
  { left: "22%", size: 38, dur: 28, delay: 4, rot: 18, drift: -20 },
  { left: "44%", size: 80, dur: 26, delay: 2, rot: -10, drift: 40 },
  { left: "66%", size: 46, dur: 30, delay: 6, rot: 30, drift: -35 },
  { left: "82%", size: 56, dur: 24, delay: 1, rot: -18, drift: 25 },
  { left: "92%", size: 34, dur: 32, delay: 8, rot: 12, drift: -15 },
];

export function FloatingLeaves({ density = "normal" }: { density?: "light" | "normal" }) {
  const reduce = useReducedMotion();
  if (reduce) return null;
  const items = density === "light" ? leaves.slice(0, 3) : leaves;

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {items.map((l, i) => (
        <motion.img
          key={i}
          src={leaf}
          alt=""
          width={l.size}
          height={l.size}
          loading="lazy"
          style={{
            position: "absolute",
            left: l.left,
            top: "-10%",
            width: l.size,
            height: l.size,
            opacity: 0.55,
            filter: "drop-shadow(0 8px 12px rgba(20,80,40,0.15))",
          }}
          initial={{ y: "-10vh", x: 0, rotate: 0 }}
          animate={{
            y: "115vh",
            x: [0, l.drift, -l.drift / 2, l.drift / 3, 0],
            rotate: [0, l.rot, -l.rot, l.rot / 2, 0],
          }}
          transition={{
            duration: l.dur,
            delay: l.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
