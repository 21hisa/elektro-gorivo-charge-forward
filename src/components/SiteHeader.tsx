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
      if (window.scrollY > 60) setPromoHidden(true);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-3 transition-all duration-500 ease-out sm:px-6 ${
        scrolled ? "pt-2" : "pt-4"
      }`}
    >
      {/* Ultra-slim announcement strip — fades into navbar on scroll */}
      <div
        className={`mx-auto overflow-hidden transition-all duration-500 ease-out ${
          promoHidden ? "max-h-0 opacity-0" : "max-h-8 opacity-100 mb-2"
        }`}
      >
        <div className="mx-auto flex max-w-3xl items-center justify-center gap-3 text-[10.5px] font-light tracking-[0.14em] text-white/55 sm:text-[11px]">
          <a
            href="tel:+919000000000"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white/90"
          >
            <span aria-hidden className="h-1 w-1 rounded-full bg-electric/80 shadow-[0_0_6px_var(--electric)]" />
            +91 90000 00000
          </a>
          <span aria-hidden className="h-3 w-px bg-white/15" />
          <span className="hidden sm:inline uppercase">EV Charging Business Setup Available</span>
          <button
            type="button"
            onClick={() => setPromoHidden(true)}
            aria-label="Dismiss"
            className="ml-1 text-white/35 transition-colors hover:text-white/70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-electric/50 rounded"
          >
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Slim premium pill */}
      <div
        className={`relative mx-auto flex max-w-5xl items-center justify-between rounded-full border transition-all duration-[450ms] ease-out ${
          scrolled
            ? "border-white/[0.07] bg-[rgba(7,15,28,0.7)] px-4 py-1.5 shadow-[0_8px_28px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "border-white/[0.06] bg-[rgba(7,15,28,0.45)] px-5 py-2 shadow-[0_6px_24px_-12px_rgba(0,0,0,0.4)] backdrop-blur-md"
        }`}
      >
        {/* Hairline top highlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        />

        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-electric/50 rounded-full"
        >
          <img
            src={logo}
            alt=""
            className="h-6 w-auto transition-transform duration-500 group-hover:scale-105 sm:h-[26px]"
          />
          <span className="text-[10.5px] font-light uppercase tracking-[0.32em] text-white/95">
            Elektro <span className="text-electric/90">Gorivo</span>
          </span>
        </Link>

        {/* Nav links */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="group relative py-1 text-[12px] font-light tracking-[0.12em] text-white/55 transition-colors duration-300 hover:text-white focus-visible:outline-none focus-visible:text-white"
              activeProps={{ className: "text-white" }}
            >
              {({ isActive }) => (
                <span className="relative">
                  {item.label}
                  <span
                    aria-hidden
                    className={`pointer-events-none absolute -bottom-1 left-0 h-px bg-gradient-to-r from-transparent via-electric to-transparent transition-all duration-400 ease-out ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-80"
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
            hash="brochure"
            className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-white/[0.09] bg-gradient-to-b from-white/[0.04] to-white/[0.01] px-4 py-1.5 text-[11.5px] font-light tracking-[0.14em] text-white/90 transition-all duration-400 hover:-translate-y-[1px] hover:border-electric/40 hover:text-white hover:shadow-[0_8px_24px_-10px_var(--electric)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-electric/60"
          >
            <span
              aria-hidden
              className="absolute inset-0 -z-10 bg-gradient-to-r from-electric/0 via-electric/15 to-electric/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
            <span className="relative uppercase">Brochure</span>
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden
              className="transition-transform duration-400 group-hover:translate-y-px"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-1.5 text-white/80 md:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="mx-auto mt-2 max-w-5xl rounded-3xl border border-white/[0.07] bg-[rgba(7,15,28,0.82)] p-3 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl md:hidden">
          <nav className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-[13px] font-light tracking-[0.12em] text-white/65 transition-colors hover:bg-white/[0.04] hover:text-white"
                activeProps={{ className: "text-white bg-white/[0.04]" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              hash="brochure"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full border border-white/[0.09] bg-white/[0.03] px-4 py-2 text-center text-[12px] font-light uppercase tracking-[0.18em] text-white/90 transition-colors hover:border-electric/40 hover:bg-electric/10"
            >
              Brochure
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
