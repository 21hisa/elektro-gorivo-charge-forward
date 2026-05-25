import { useEffect, useState } from "react";

/**
 * Sticky mobile CTA that surfaces after the user scrolls past the hero
 * to reduce conversion friction. Hidden on desktop (md+).
 */
export function MobileQuoteFab() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="/contact"
      aria-label="Get a quote"
      className={`fixed bottom-5 left-1/2 z-40 -translate-x-1/2 rounded-full bg-electric px-6 py-3 text-sm font-semibold text-accent-foreground shadow-[0_18px_45px_-10px_var(--electric)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 md:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
      style={{ minHeight: 44 }}
    >
      Get a Quote →
    </a>
  );
}
