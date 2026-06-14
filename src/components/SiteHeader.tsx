import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

/**
 * Luxury sticky header.
 * - Single shared container holds the announcement strip + main pill so there
 *   are no spacing gaps when the strip slides away.
 * - Scroll-direction detection with a small threshold prevents jitter on
 *   micro-scrolls. State only flips after passing 6px of movement.
 * - All visual changes are pure transform / opacity / filter transitions so
 *   the layout never reflows.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [hideStrip, setHideStrip] = useState(false);
  const [open, setOpen] = useState(false);

  const lastY = useRef(0);
  const accum = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastY.current = window.scrollY;

    const update = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      // Compressed pill once you leave the very top
      setScrolled(y > 16);

      // Always show strip while near the top
      if (y < 80) {
        setHideStrip(false);
        accum.current = 0;
      } else {
        // Accumulate movement in the current direction; flip past 6px threshold
        if (Math.sign(delta) !== Math.sign(accum.current)) accum.current = 0;
        accum.current += delta;

        if (accum.current > 6) {
          setHideStrip(true);
          accum.current = 6;
        } else if (accum.current < -6) {
          setHideStrip(false);
          accum.current = -6;
        }
      }

      lastY.current = y;
      ticking.current = false;
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-3 transition-[padding] duration-500 ease-out sm:px-6 ${
        scrolled ? "pt-2" : "pt-3"
      }`}
    >
      {/* Announcement strip — slides + fades, container collapses height */}
      <div
        aria-hidden={hideStrip}
        className="mx-auto overflow-hidden transition-[max-height,opacity,margin,transform] duration-[500ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[max-height,opacity,transform]"
        style={{
          maxHeight: hideStrip ? 0 : 32,
          opacity: hideStrip ? 0 : 1,
          marginBottom: hideStrip ? 0 : 8,
          transform: hideStrip ? "translateY(-6px)" : "translateY(0)",
        }}
      >
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10.5px] font-light tracking-[0.14em] text-white/70 sm:text-[11px]">
          <a
            href="tel:+919319708372"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <span aria-hidden className="h-1 w-1 rounded-full bg-electric/80 shadow-[0_0_6px_var(--electric)]" />
            +91 93197 08372
          </a>
          <span aria-hidden className="hidden h-3 w-px bg-white/15 sm:inline-block" />
          <a href="mailto:elektrogorivo@gmail.com" className="transition-colors hover:text-white">elektrogorivo@gmail.com</a>
        </div>
      </div>

      {/* Slim premium pill */}
      <div
        className={`relative mx-auto flex max-w-5xl items-center justify-between rounded-full border transition-all duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
          scrolled
            ? "border-black/[0.08] bg-white/90 px-4 py-1.5 shadow-[0_10px_32px_-14px_rgba(0,0,0,0.25)] backdrop-blur-2xl backdrop-saturate-150"
            : "border-black/[0.06] bg-white/75 px-5 py-2 shadow-[0_6px_24px_-12px_rgba(0,0,0,0.18)] backdrop-blur-md"
        }`}
      >
        {/* Hairline top highlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"
        />

        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2 rounded-full focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-electric/50"
        >
          <img
            src={logo}
            alt=""
            className="h-6 w-auto transition-transform duration-500 group-hover:scale-105 sm:h-[26px]"
          />
          <span className="text-[10.5px] font-medium uppercase tracking-[0.32em] text-black">
            Elektro <span className="text-black">Gorivo</span>
          </span>
        </Link>

        {/* Nav links */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="group relative py-1 text-[12px] font-light tracking-[0.12em] text-black/65 transition-colors duration-300 hover:text-black focus-visible:text-black focus-visible:outline-none"
              activeProps={{ className: "text-black" }}
            >
              {({ isActive }) => (
                <span className="relative">
                  {item.label}
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute -bottom-1 left-0 h-px bg-gradient-to-r from-transparent via-electric to-transparent transition-all duration-[400ms] ease-out ${
                      isActive
                        ? "w-full opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-80"
                    }`}
                  />
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden items-center md:flex">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-black/[0.12] bg-black px-4 py-1.5 text-[11.5px] font-light tracking-[0.14em] text-white transition-all duration-[400ms] hover:-translate-y-[1px] hover:border-electric/60 hover:shadow-[0_8px_24px_-10px_var(--electric)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-electric/60"
          >
            <span
              aria-hidden
              className="absolute inset-0 -z-10 bg-gradient-to-r from-electric/0 via-electric/30 to-electric/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <span className="relative uppercase">Contact</span>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-1.5 text-black/80 md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="mx-auto mt-2 max-w-5xl rounded-3xl border border-black/[0.08] bg-white/95 p-3 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.3)] backdrop-blur-xl md:hidden">
          <nav className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-[13px] font-light tracking-[0.12em] text-black/70 transition-colors hover:bg-black/[0.04] hover:text-black"
                activeProps={{ className: "text-black bg-black/[0.04]" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-black/[0.12] bg-black px-4 py-2 text-center text-[12px] font-light uppercase tracking-[0.18em] text-white transition-colors hover:border-electric/60 hover:bg-black/90"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
