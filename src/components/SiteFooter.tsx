import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logo} alt="Elektro Gorivo" className="h-8 w-auto" />
              <span className="text-sm font-medium tracking-[0.2em] uppercase">
                Elektro <span className="text-electric">Gorivo</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Engineering the silent infrastructure of clean mobility — premium EV charging
              for homes, businesses, and the open road.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Explore</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/products" className="hover:text-electric">Products</Link></li>
              <li><Link to="/about" className="hover:text-electric">About</Link></li>
              <li><Link to="/contact" className="hover:text-electric">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Contact</p>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>hello@elektrogorivo.com</li>
              <li>+91 90000 00000</li>
              <li>Bengaluru · Berlin</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Elektro Gorivo. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Powering the Future of Mobility</p>
        </div>
      </div>
    </footer>
  );
}
