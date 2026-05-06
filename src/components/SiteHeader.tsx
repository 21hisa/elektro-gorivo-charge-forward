import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { LeafMark } from "@/components/AnimatedIcons";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-3 transition-all duration-500 sm:px-6 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-[400ms] ease-in-out sm:px-6 sm:py-3 ${
          scrolled
            ? "border border-border/50 bg-background/60 shadow-elevated backdrop-blur-xl"
            : "border border-transparent bg-transparent"
        }`}
      >
        <Link to="/" className="group flex items-center gap-2.5">
          <img src={logo} alt="" className="h-7 w-auto sm:h-8" />
          <LeafMark className="h-4 w-4 transition-transform duration-500 group-hover:rotate-12" />
          <span className={`text-[11px] font-medium uppercase tracking-[0.22em] sm:text-xs ${scrolled ? "" : "text-white"}`}>
            Elektro <span className="text-electric">Gorivo</span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className={`group relative rounded-full px-4 py-1.5 text-sm transition-colors ${
                scrolled
                  ? "text-black hover:text-black"
                  : "text-white/80 hover:text-white"
              }`}
              activeProps={{ className: scrolled ? "text-black" : "text-white" }}
            >
              <span className="relative">
                {item.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-electric transition-transform duration-500 ease-out group-hover:origin-left group-hover:scale-x-100" />
              </span>
            </Link>
          ))}
          <Link
            to="/contact"
            hash="brochure"
            className={`ml-3 rounded-full px-5 py-1.5 text-sm font-medium transition-transform hover:scale-[1.04] ${
              scrolled
                ? "bg-foreground text-background"
                : "bg-black text-white"
            }`}
          >
            Brochure
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`rounded-full p-2 md:hidden ${scrolled ? "text-foreground" : "text-white"}`}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-4 md:hidden">
          <nav className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              hash="brochure"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-foreground px-4 py-2.5 text-center text-sm font-medium text-background"
            >
              Download brochure
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
