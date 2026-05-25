import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [promoHidden, setPromoHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      if (window.scrollY > 80) setPromoHidden(true);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-3 transition-all duration-500 sm:px-6 ${
        scrolled ? "py-2" : "py-5"
      }`}
    >
      {/* Promo strip — floats above the pill */}
      {!promoHidden && (
        <div className="mx-auto mb-2 flex max-w-3xl items-center justify-center gap-3 rounded-full border border-white/10 bg-[rgba(8,18,32,0.55)] px-4 py-1.5 text-[11px] font-medium tracking-wide text-white/80 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:text-xs">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_10px_var(--electric)]" />
            <a href="tel:+919000000000" className="hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric rounded">
              Call Now: +91 90000 00000
            </a>
          </span>
          <span className="hidden text-white/30 sm:inline">·</span>
          <span className="hidden sm:inline text-white/70">⚡ EV Charging Business Setup Available</span>
          <button
            type="button"
            onClick={() => setPromoHidden(true)}
            aria-label="Dismiss promotional banner"
            className="ml-1 inline-flex h-5 w-5 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Floating glass pill */}
      <div
        className={`relative mx-auto flex max-w-6xl items-center justify-between rounded-full border transition-all duration-[400ms] ease-out ${
          scrolled
            ? "border-white/10 bg-[rgba(8,18,32,0.72)] px-5 py-2 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.65)] backdrop-blur-2xl backdrop-saturate-150"
            : "border-white/[0.08] bg-[rgba(8,18,32,0.55)] px-6 py-3 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.55)] backdrop-blur-xl backdrop-saturate-150"
        }`}
      >
        {/* Subtle top reflection */}
        <div aria-hidden className="pointer-events-none absolute inset-x-6 top-0 h-px rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2.5">
          <img src={logo} alt="" className="h-7 w-auto sm:h-8" />
          <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white sm:text-xs">
            Elektro <span className="text-electric">Gorivo</span>
          </span>
        </Link>

        {/* Nav links */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="group relative rounded-full px-4 py-1.5 text-[13px] font-medium tracking-wide text-white/70 transition-all duration-300 hover:text-white hover:[text-shadow:0_0_12px_color-mix(in_oklab,var(--electric)_60%,transparent)]"
              activeProps={{
                className:
                  "text-white [text-shadow:0_0_14px_color-mix(in_oklab,var(--electric)_55%,transparent)]",
              }}
            >
              {({ isActive }) => (
                <span className="relative inline-flex items-center gap-1.5">
                  {item.label}
                  {isActive && (
                    <span
                      aria-hidden
                      className="h-1 w-1 rounded-full bg-electric shadow-[0_0_8px_var(--electric),0_0_16px_var(--electric-glow)]"
                    />
                  )}
                  <span className="pointer-events-none absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-electric to-transparent transition-all duration-300 group-hover:w-5/6" />
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden items-center md:flex">
          <Link
            to="/contact"
            hash="brochure"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-electric/40 bg-white/[0.04] px-5 py-1.5 text-[13px] font-medium tracking-wide text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 hover:-translate-y-px hover:border-electric/70 hover:shadow-[0_10px_30px_-10px_var(--electric)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
          >
            <span
              aria-hidden
              className="absolute inset-0 -z-10 bg-gradient-to-r from-electric/0 via-electric/20 to-electric/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <span className="relative">Download Brochure</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden className="transition-transform duration-300 group-hover:translate-y-px">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-white md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-white/10 bg-[rgba(8,18,32,0.78)] p-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur-2xl md:hidden">
          <nav className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                activeProps={{ className: "text-white bg-white/5" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              hash="brochure"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full border border-electric/40 bg-white/[0.04] px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:border-electric/70 hover:bg-electric/10"
            >
              Download Brochure
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
