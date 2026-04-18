import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import chargerHero from "@/assets/charger-hero.jpg";
import ecosystemApp from "@/assets/ecosystem-app.jpg";
import naya30 from "@/assets/products/naya-30kw.jpg";
import naya120 from "@/assets/products/naya-120kw.jpg";
import naya360 from "@/assets/products/naya-360kw.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elektro Gorivo — Powering the Future of Mobility" },
      { name: "description", content: "Premium smart EV chargers and end-to-end charging infrastructure. Fast, intelligent, and built for the clean energy era." },
      { property: "og:title", content: "Elektro Gorivo — Powering the Future of Mobility" },
      { property: "og:description", content: "Premium smart EV chargers and end-to-end charging infrastructure." },
    ],
  }),
  component: HomePage,
});

const benefits = [
  { k: "01", title: "Fast", body: "Up to 360 kW of pure, intelligent power. Minutes instead of hours." },
  { k: "02", title: "Smart", body: "Connected by design. Schedule, monitor, and pay from anywhere." },
  { k: "03", title: "Reliable", body: "99.9% uptime, weatherproofed engineering, and on-call support." },
];

const products = [
  { name: "EG-DC 30", spec: "30 kW · Wall / Stand", img: naya30, tag: "Workplace" },
  { name: "EG-DC 120", spec: "80 – 160 kW · Standalone", img: naya120, tag: "Commercial" },
  { name: "EG-DC 360", spec: "360 kW · Hyper Charger", img: naya360, tag: "Highway" },
];

function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center pt-32">
        <div className="absolute inset-0 bg-radial-electric" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-background to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs uppercase tracking-[0.4em] text-electric"
          >
            Elektro Gorivo · New Generation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance mt-6 text-5xl font-extralight leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
          >
            <span className="text-gradient">Powering the future</span>
            <br />
            <span className="text-electric-gradient italic font-light">of mobility.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Premium EV chargers, intelligently connected. Engineered for homes,
            businesses, and the highways that connect them.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to="/products"
              className="group rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
            >
              Explore Products →
            </Link>
            <Link
              to="/contact"
              hash="brochure"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-electric hover:text-electric"
            >
              Download Brochure
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mt-20 w-full max-w-4xl"
          >
            <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-electric/10 blur-3xl" />
            <img
              src={chargerHero}
              alt="Elektro Gorivo flagship EV charger"
              width={1920}
              height={1080}
              className="rounded-3xl shadow-elevated"
            />
          </motion.div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Why Elektro Gorivo</p>
            <h2 className="mt-3 max-w-3xl text-balance text-4xl font-extralight tracking-tight sm:text-5xl">
              Three principles. One uncompromised standard.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.k} delay={i * 0.1}>
                <div className="group h-full bg-surface p-10 transition-colors duration-500 hover:bg-surface-elevated">
                  <p className="text-xs font-mono text-electric">{b.k}</p>
                  <h3 className="mt-6 text-3xl font-light">{b.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT PREVIEW */}
      <section className="relative py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">The Range</p>
                <h2 className="mt-3 text-balance text-4xl font-extralight tracking-tight sm:text-5xl">
                  Engineered for every journey.
                </h2>
              </div>
              <Link to="/products" className="hidden text-sm text-electric hover:underline sm:block">
                View all →
              </Link>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <Link to="/products" className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-surface">
                    <img
                      src={p.img}
                      alt={p.name}
                      width={1280}
                      height={1280}
                      loading="lazy"
                      className="h-full w-full object-contain p-10 transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-7">
                      <p className="text-xs uppercase tracking-[0.25em] text-electric">{p.tag}</p>
                      <h3 className="mt-2 text-2xl font-light">{p.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{p.spec}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="relative overflow-hidden py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-electric">Smart Charging Ecosystem</p>
            <h2 className="mt-4 text-balance text-4xl font-extralight tracking-tight sm:text-5xl">
              Hardware, software, and intelligence — in concert.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Every Elektro Gorivo charger is part of a larger system. Real-time analytics,
              dynamic load management, OTA updates, and frictionless payments — all from one
              app, in your pocket.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {["Mobile app & remote control", "Live energy analytics", "Smart scheduling & solar sync", "Tap-to-pay & fleet billing"].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_12px_var(--electric)]" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-electric/15 blur-3xl" />
              <img
                src={ecosystemApp}
                alt="Elektro Gorivo mobile app"
                width={1280}
                height={1280}
                loading="lazy"
                className="rounded-3xl shadow-elevated"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOLUTIONS STRIP */}
      <section className="border-y border-border bg-surface/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              { t: "End-to-End Solutions", d: "Site survey, installation, commissioning, and 24/7 maintenance." },
              { t: "OCPP & Open Standards", d: "Future-proof protocols. Interoperable across networks." },
              { t: "Made for Scale", d: "From a single garage to a national fleet — one platform." },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 0.08}>
                <div>
                  <h3 className="text-xl font-light">{s.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-radial-electric opacity-70" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="text-balance text-5xl font-extralight tracking-tight sm:text-6xl">
              Charge into <span className="text-electric-gradient italic">tomorrow.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Talk to our infrastructure team about deploying Elektro Gorivo at your home,
              workplace, or across your network.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" hash="brochure" className="rounded-full bg-electric px-6 py-3 text-sm font-medium text-accent-foreground shadow-glow transition-transform hover:scale-[1.03]">
                Download Brochure
              </Link>
              <Link to="/products" className="rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-electric">
                Explore Products
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
