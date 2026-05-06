export function TopContactBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[60] bg-foreground text-background">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-1.5 text-[11px] font-medium tracking-wide sm:text-xs">
        <span className="inline-flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_10px_var(--electric)]" />
          <a href="tel:+919000000000" className="hover:underline">
            Call Now: +91 90000 00000
          </a>
        </span>
        <span className="hidden text-background/40 sm:inline">·</span>
        <span className="hidden sm:inline">⚡ EV Charging Business Setup Available</span>
      </div>
    </div>
  );
}
