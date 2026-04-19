import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { FloatingLeaves } from "@/components/FloatingLeaves";
import { OrganicBlob } from "@/components/OrganicBlob";
import { GrowingTree } from "@/components/GrowingTree";
import { Counter } from "@/components/Counter";
import natureHero from "@/assets/nature-hero.jpg";
import forestCanopy from "@/assets/forest-canopy.jpg";
import chargerHero from "@/assets/charger-hero.jpg";
import ecosystemApp from "@/assets/ecosystem-app.jpg";
import naya30 from "@/assets/products/naya-30kw.jpg";
import naya120 from "@/assets/products/naya-120kw.jpg";
import naya360 from "@/assets/products/naya-360kw.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elektro Gorivo — Charging Tomorrow's Forest" },
      { name: "description", content: "Premium smart EV chargers, intelligently connected. Engineered for cleaner air, quieter cities, and a greener tomorrow." },
      { property: "og:title", content: "Elektro Gorivo — Powering the Future of Mobility" },
      { property: "og:description", content: "Premium EV charging that grows the planet, not the carbon count." },
      { property: "og:image", content: natureHero },
    ],
  }),
  component: HomePage,
});

const benefits = [
  { k: "01", title: "Clean", body: "Every kilowatt delivered displaces a litre of fossil fuel — quieter streets, cleaner skies." },
  { k: "02", title: "Smart", body: "Solar-aware scheduling, dynamic load balancing, and intelligence that learns the grid." },
  { k: "03", title: "Enduring", body: "Weather-sealed engineering and 99.9% uptime — built to outlast a forest's first decade." },
];

const products = [
  { name: "EG-DC 30", spec: "30 kW · Wall / Stand", img: naya30, tag: "Workplace" },
  { name: "EG-DC 120", spec: "80 – 160 kW · Standalone", img: naya120, tag: "Commercial" },
  { name: "EG-DC 360", spec: "360 kW · Hyper Charger", img: naya360, tag: "Highway" },
];

function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* HERO — forest immersion */}
      <section className="relative flex min-h-[100svh] items-center justify-center pt-28 sm:pt-32">
        {/* Forest background with parallax */}
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={natureHero}
            alt="Sunlit forest road"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>

        <FloatingLeaves />

        <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-electric"
          >
            Elektro Gorivo · Charging the Forest
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance mt-6 text-4xl font-extralight leading-[1.05] tracking-tight sm:text-7xl md:text-[5.5rem]"
          >
            <span className="text-gradient">Every charge,</span>
            <br />
            <span className="text-electric-gradient italic font-light">a tree replanted.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Premium electric vehicle chargers, intelligently connected — engineered for cleaner
            air, quieter cities, and a planet that breathes a little easier.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              to="/products"
              className="group rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
            >
              Explore the Range →
            </Link>
            <Link
              to="/contact"
              hash="brochure"
              className="rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-electric hover:text-electric"
            >
              Download Brochure
            </Link>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-10 w-6 items-start justify-center rounded-full border border-border p-1.5"
            >
              <span className="h-2 w-1 rounded-full bg-electric" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* IMPACT — counter strip */}
      <section className="relative border-y border-border bg-surface/60 py-16 sm:py-20">
        <OrganicBlob className="-top-40 -left-32 h-[500px] w-[500px]" opacity={0.12} />
        <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-10 px-5 sm:px-6 md:grid-cols-4">
          {[
            { v: 180, suf: " GWh", l: "Clean energy delivered" },
            { v: 96, suf: "K", l: "Tonnes of CO₂ avoided" },
            { v: 1.6, suf: "M", l: "Equivalent trees planted", dec: 1 },
            { v: 99.9, suf: "%", l: "Network uptime", dec: 1 },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div>
                <p className="text-3xl font-extralight tracking-tight text-electric sm:text-5xl">
                  <Counter to={s.v} suffix={s.suf} decimals={s.dec ?? 0} />
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY — tree growth */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-8 -z-10 rounded-full bg-electric/10 blur-3xl" />
              <GrowingTree className="h-auto w-full" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xs uppercase tracking-[0.3em] text-electric">Our Philosophy</p>
            <h2 className="mt-4 text-balance text-4xl font-extralight tracking-tight sm:text-5xl">
              Infrastructure that <span className="text-electric-gradient italic">grows</span> the
              world it powers.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              We don't build chargers. We plant the silent forest beneath the highways of
              tomorrow — sealed, weatherproof, and quietly heroic. Every kilowatt is a small
              act of replanting.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "100% renewable-ready architecture",
                "Solar-sync & dynamic load balancing",
                "Modular, repairable, made to last",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_12px_var(--electric)]" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="relative py-20 sm:py-32">
        <OrganicBlob className="-right-40 top-20 h-[600px] w-[600px]" opacity={0.1} />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Why Elektro Gorivo</p>
            <h2 className="mt-3 max-w-3xl text-balance text-4xl font-extralight tracking-tight sm:text-5xl">
              Three principles. <span className="text-electric-gradient italic">One promise to the planet.</span>
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.k} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4 }}
                  className="group h-full bg-card p-10 transition-colors duration-500 hover:bg-surface-elevated"
                >
                  <p className="text-xs font-mono text-electric">{b.k}</p>
                  <h3 className="mt-6 text-3xl font-light">{b.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HARDWARE SHOWCASE */}
      <section className="relative py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">The Hardware</p>
              <h2 className="mt-3 text-balance text-4xl font-extralight tracking-tight sm:text-6xl">
                Designed quietly. <span className="text-electric-gradient italic">Built loudly.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <motion.div
              whileInView={{ scale: [0.96, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto mt-14 w-full max-w-4xl"
            >
              <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-electric/15 blur-3xl" />
              <img
                src={chargerHero}
                alt="Elektro Gorivo flagship EV charger"
                width={1920}
                height={1080}
                loading="lazy"
                className="rounded-3xl shadow-elevated"
              />
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT PREVIEW */}
      <section className="relative py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
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
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card"
                  >
                    <img
                      src={p.img}
                      alt={p.name}
                      width={1280}
                      height={1280}
                      loading="lazy"
                      className="h-full w-full object-contain p-10 transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-7">
                      <p className="text-xs uppercase tracking-[0.25em] text-electric">{p.tag}</p>
                      <h3 className="mt-2 text-2xl font-light">{p.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{p.spec}</p>
                    </div>
                  </motion.div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 md:grid-cols-2 md:gap-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-electric">Smart Charging Ecosystem</p>
            <h2 className="mt-4 text-balance text-4xl font-extralight tracking-tight sm:text-5xl">
              Hardware, software, and intelligence — in concert.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Every Elektro Gorivo charger is part of a living system. Real-time analytics,
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
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-electric/15 blur-3xl" />
              <img
                src={ecosystemApp}
                alt="Elektro Gorivo mobile app"
                width={1280}
                height={1280}
                loading="lazy"
                className="rounded-3xl shadow-elevated"
              />
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* CANOPY BANNER */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          src={forestCanopy}
          alt="Forest canopy from above"
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
        <div className="relative mx-auto flex h-full max-w-5xl items-center px-5 sm:px-6">
          <Reveal>
            <p className="max-w-2xl text-balance text-3xl font-extralight italic leading-tight text-card sm:text-5xl md:text-6xl">
              "The best time to plant a tree was twenty years ago.
              <br />
              <span className="text-electric-gradient not-italic">The second best time is now.</span>"
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 sm:py-32">
        <div className="absolute inset-0 bg-radial-electric opacity-70" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
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
