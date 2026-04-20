import { useState, type MouseEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";

type Ripple = { x: number; y: number; id: number };

type Variant = "primary" | "ghost" | "light";

const base =
  "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out will-change-transform hover:-translate-y-0.5 active:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "bg-electric text-accent-foreground shadow-[0_10px_30px_-8px_var(--electric)] hover:shadow-[0_18px_45px_-8px_var(--electric)]",
  ghost:
    "border border-border bg-card/60 text-foreground backdrop-blur-md hover:border-electric hover:text-electric",
  light:
    "bg-white text-[#0B0F0C] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_45px_-10px_rgba(0,0,0,0.45)]",
};

function useRipples() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const onClick = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const id = Date.now() + Math.random();
    setRipples((prev) => [...prev, { x: e.clientX - r.left, y: e.clientY - r.top, id }]);
    setTimeout(() => setRipples((prev) => prev.filter((p) => p.id !== id)), 700);
  };
  const layer = (
    <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 animate-[ripple_700ms_ease-out_forwards] rounded-full bg-white/40"
          style={{ left: r.x, top: r.y }}
        />
      ))}
    </span>
  );
  return { onClick, layer };
}

export function RippleLink({
  to,
  hash,
  children,
  variant = "primary",
  className = "",
}: {
  to: string;
  hash?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const { onClick, layer } = useRipples();
  return (
    <Link
      to={to}
      hash={hash}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      {layer}
    </Link>
  );
}

export function RippleButton({
  children,
  variant = "primary",
  className = "",
  onClick: userClick,
  type = "button",
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit";
}) {
  const { onClick, layer } = useRipples();
  return (
    <button
      type={type}
      onClick={(e) => {
        onClick(e);
        userClick?.(e);
      }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
      {layer}
    </button>
  );
}
