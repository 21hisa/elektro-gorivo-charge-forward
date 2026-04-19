import { motion, useReducedMotion } from "framer-motion";

export function OrganicBlob({
  className = "",
  color = "var(--electric)",
  opacity = 0.18,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 600 600"
      className={`pointer-events-none absolute ${className}`}
      animate={
        reduce
          ? undefined
          : {
              rotate: [0, 8, -6, 0],
              scale: [1, 1.05, 0.97, 1],
            }
      }
      transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
    >
      <defs>
        <radialGradient id="blob-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={color} stopOpacity={opacity} />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <path
        fill="url(#blob-grad)"
        d="M421,318Q396,386,330,418Q264,450,194,418Q124,386,116,308Q108,230,166,178Q224,126,302,118Q380,110,418,180Q456,250,421,318Z"
      />
    </motion.svg>
  );
}
