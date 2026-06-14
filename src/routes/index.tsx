import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { OrganicBlob } from "@/components/OrganicBlob";
import { GrowingTree } from "@/components/GrowingTree";
import { Counter } from "@/components/Counter";
import { ParallaxHero } from "@/components/ParallaxHero";
import { RoiCalculator } from "@/components/RoiCalculator";
import { RippleLink } from "@/components/RippleButton";
import { TiltCard } from "@/components/TiltCard";
import heroAsset from "@/assets/hero-charging.png.asset.json";
const forestHero = heroAsset.url;
import eg30Front from "@/assets/products/eg-30-front.png";
import eg60Front from "@/assets/products/eg-60-front.png";
import eg80Front from "@/assets/products/eg-80-front.png";
import plugInGraphic from "@/assets/plug_in.svg";
import startChargeAsset from "@/assets/start_your_charge.png.asset.json";
const startChargeGraphic = startChargeAsset.url;
import chargeGraphic from "@/assets/charge.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elektro Gorivo — Every charge breathes life back into the planet" },
      { name: "description", content: "Premium EV chargers engineered for cleaner air, quieter cities, and a sustainable future. Smart, fast, and rooted in nature." },
      { property: "og:title", content: "Elektro Gorivo — Powering the Future of Mobility" },
      { property: "og:description", content: "Premium EV charging that grows the planet, not the carbon count." },
      { property: "og:image", content: forestHero },
      { name: "twitter:image", content: forestHero },
    ],
  }),
  component: HomePage,
});

const products = [
  { name: "EG-DC 30", spec: "30 kW · Wall / Stand", img: eg30Front, tag: "Workplace", co2: "0.7t/yr", trees: "32" },
  { name: "EG-DC 120", spec: "80 – 160 kW · Standalone", img: eg120Front, tag: "Commercial", co2: "3.4t/yr", trees: "156" },
  { name: "EG-DC 360", spec: "360 kW · Hyper Charger", img: eg360Front, tag: "Highway", co2: "9.8t/yr", trees: "445" },
];

const chargeSteps = [
  {
    n: "1",
    title: "Plug In",
    body: "Connect your EV to an Elektro Gorivo charger.",
    image: plugInGraphic,
  },
  {
    n: "2",
    title: "Start Your Charge",
    body: "Activate with app, RFID card, or fleet account.",
    image: startChargeGraphic,
  },
  {
    n: "3",
    title: "Charge Up & Go",
    body: "Fast, clean energy gets you back on the road.",
    image: chargeGraphic,
  },
];

function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <ParallaxHero>
        <div className="mx-auto grid max-w-7xl px-5 sm:px-6 md:grid-cols-2">
          <div className="max-w-xl text-left">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.3em] text-white backdrop-blur-md sm:text-xs"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#00E676] shadow-[0_0_10px_#00E676]" />
              Elektro Gorivo · Evergreen EV
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-balance mt-6 font-bold leading-[1.02] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.5)]"
              style={{ fontSize: "clamp(2.25rem, 6vw + 0.5rem, 5rem)" }}
            >
              Every charge powers a{" "}
              <span className="bg-gradient-to-r from-[#00E676] to-[#7CFFB2] bg-clip-text text-transparent">
                cleaner future.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.85 }}
              className="mt-5 max-w-md text-base font-medium leading-relaxed text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:mt-7 sm:text-lg"
            >
              Premium EV chargers engineered for cleaner air, quieter cities,
              and a sustainable future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.05 }}
              className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10"
            >
              <RippleLink to="/products" variant="primary">
                Explore Chargers →
              </RippleLink>
              <RippleLink to="/contact" variant="light">
                Get in Touch
              </RippleLink>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-white/80 sm:mt-12"
            >
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00E676]" />
                99.9% Network uptime
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00E676]" />
                100% Renewable-ready
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#00E676]" />
                Solar-sync intelligence
              </span>
            </motion.div>
          </div>
        </div>

      </ParallaxHero>

      {/* IMPACT */}
      <section className="relative border-y border-border bg-surface/60 py-14 sm:py-20">
        <OrganicBlob className="-top-40 -left-32 h-[500px] w-[500px]" opacity={0.12} />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
          <Reveal>
            <p className="text-center text-[10px] uppercase tracking-[0.35em] text-muted-foreground sm:text-xs">
              Live environmental impact
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-4 md:mt-12">
            {[
              { v: 180, suf: " GWh", l: "Clean energy delivered", emoji: "⚡" },
              { v: 96, suf: "K", l: "Tonnes of CO₂ avoided", emoji: "🌍" },
              { v: 1.6, suf: "M", l: "Trees planted equivalent", dec: 1, emoji: "🌱" },
              { v: 99.9, suf: "%", l: "Network uptime", dec: 1, emoji: "🛡" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 0.08}>
                <div className="text-center md:text-left">
                  <p className="text-2xl tracking-tight text-electric drop-shadow-[0_0_25px_var(--electric-glow)] sm:text-5xl font-extralight">
                    <Counter to={s.v} suffix={s.suf} decimals={s.dec ?? 0} />
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
                    {s.l}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="relative py-20 sm:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 md:grid-cols-[1fr_1.2fr] md:gap-20">
          <Reveal>
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-8 -z-10 rounded-full bg-electric/10 blur-3xl" />
              <GrowingTree className="h-auto w-full" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xs uppercase tracking-[0.3em] text-electric">Our Philosophy</p>
            <h2 className="mt-4 text-balance text-3xl font-extralight tracking-tight sm:text-5xl">
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

      {/* HOW TO CHARGE */}
      <section className="relative overflow-hidden border-y border-border bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <Reveal>
            <h2 className="text-center text-balance text-4xl font-light tracking-tight text-foreground sm:text-6xl">
              How to Charge
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-20">
            {chargeSteps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1}>
                <div className="group relative flex h-full flex-col items-center text-center">
                  <div className="relative flex h-52 w-full max-w-xs items-center justify-center overflow-hidden rounded-3xl bg-surface/40 transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.02] sm:h-60">
                    <span className="absolute left-3 top-0 select-none text-[9rem] font-bold leading-none text-muted/25 sm:text-[11rem]">
                      {step.n}
                    </span>
                    <div className="absolute h-32 w-36 rounded-[45%_55%_50%_50%] bg-electric/75 shadow-[0_24px_80px_color-mix(in_oklab,var(--electric)_25%,transparent)]" />
                    <img
                      src={step.image}
                      alt=""
                      aria-hidden="true"
                      width={296}
                      height={258}
                      loading="lazy"
                      className="relative h-44 w-auto max-w-[88%] object-contain sm:h-52"
                    />
                  </div>
                  <h3 className="mt-8 text-2xl font-medium tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-base leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR */}
      <section className="relative border-y border-border bg-surface/40 py-20 sm:py-28">
        <OrganicBlob className="-right-40 top-10 h-[450px] w-[450px]" opacity={0.12} />
        <div className="relative mx-auto max-w-5xl px-5 sm:px-6">
          <Reveal>
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-electric">Plan your station</p>
              <h2 className="mt-3 text-balance text-3xl font-extralight tracking-tight sm:text-5xl">
                ROI <span className="text-electric-gradient italic">calculator</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
                Estimate monthly revenue from a single charger based on usage and pricing.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <RoiCalculator />
          </Reveal>
        </div>
      </section>


      {/* SETUP PROCESS — cinematic luxury journey */}
      <section className="relative overflow-hidden border-y border-border bg-surface/40 py-24 sm:py-32">
        {/* Ambient radial glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(ellipse at center, color-mix(in oklab, var(--electric) 18%, transparent) 0%, transparent 70%)" }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35] grid-pattern"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--electric-glow) 22%, transparent) 0%, transparent 70%)" }}
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
          {/* Header */}
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex items-center gap-3">
                <span aria-hidden className="h-px w-8 bg-gradient-to-r from-transparent to-electric/70" />
                <p className="text-[10px] uppercase tracking-[0.4em] text-electric/90 sm:text-xs">
                  From inquiry to ignition
                </p>
                <span aria-hidden className="h-px w-8 bg-gradient-to-l from-transparent to-electric/70" />
              </div>
              <h2 className="mt-5 text-balance text-4xl font-extralight tracking-tight sm:text-6xl">
                Setup{" "}
                <span className="relative italic text-electric-gradient">
                  Process
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-transparent via-electric to-transparent opacity-70"
                  />
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                A guided five-step journey — engineered end-to-end so your charging
                station goes from concept to current with cinematic precision.
              </p>
            </div>
          </Reveal>

          {/* Animated connector line — desktop only */}
          <div className="relative mt-20">
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-[68px] hidden lg:block"
            >
              <div className="relative mx-auto h-px w-[92%]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
                <div
                  className="absolute inset-y-0 left-0 w-full origin-left animate-[led-sweep_6s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-electric to-transparent opacity-80"
                />
              </div>
            </div>

            <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-5 lg:gap-5">
              {[
                {
                  n: "01",
                  title: "Site Survey",
                  body: "We assess your location, load capacity, and footfall.",
                  icon: (
                    <>
                      <path d="M12 21s-7-6.5-7-12a7 7 0 1 1 14 0c0 5.5-7 12-7 12z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </>
                  ),
                },
                {
                  n: "02",
                  title: "Custom Proposal",
                  body: "Tailored charger mix, layout, and ROI projection.",
                  icon: (
                    <>
                      <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
                      <path d="M14 3v5h5" />
                      <path d="M9 13h6M9 17h4" />
                    </>
                  ),
                },
                {
                  n: "03",
                  title: "Permits & Grid",
                  body: "End-to-end paperwork and utility coordination.",
                  icon: (
                    <>
                      <path d="M13 2L5 14h6l-1 8 8-12h-6l1-8z" />
                    </>
                  ),
                },
                {
                  n: "04",
                  title: "Installation",
                  body: "Certified engineers install, test, and commission.",
                  icon: (
                    <>
                      <path d="M14.7 6.3a4 4 0 1 0-5.4 5.4l-6 6a2 2 0 0 0 2.8 2.8l6-6a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2 2.8-2.8z" />
                    </>
                  ),
                },
                {
                  n: "05",
                  title: "Go Live & Support",
                  body: "Onboarding, monitoring, and 24×7 assistance.",
                  icon: (
                    <>
                      <circle cx="12" cy="12" r="3" />
                      <circle cx="12" cy="12" r="9" />
                      <path d="M3 12h6M15 12h6M12 3v6M12 15v6" />
                    </>
                  ),
                },
              ].map((step, i) => (
                <Reveal key={step.n} delay={i * 0.1}>
                  <li className="group relative h-full">
                    {/* Glass card */}
                    <div className="relative h-full overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-b from-background/80 to-surface/60 p-6 backdrop-blur-xl transition-all duration-500 ease-out group-hover:-translate-y-1.5 group-hover:border-electric/40 group-hover:shadow-[0_30px_60px_-20px_color-mix(in_oklab,var(--electric)_30%,transparent)] sm:p-7">
                      {/* Inner glow on hover */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        style={{
                          background:
                            "radial-gradient(120% 80% at 50% 0%, color-mix(in oklab, var(--electric) 12%, transparent) 0%, transparent 60%)",
                        }}
                      />
                      {/* Top hairline */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-electric/40 to-transparent opacity-60"
                      />

                      {/* Numeral badge */}
                      <div className="relative flex items-center justify-between">
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-electric/30 bg-background/60 shadow-[inset_0_0_20px_color-mix(in_oklab,var(--electric)_10%,transparent)] transition-all duration-500 group-hover:border-electric/60 group-hover:shadow-[0_0_24px_color-mix(in_oklab,var(--electric)_35%,transparent)]">
                          <span className="text-[13px] font-light tracking-[0.18em] text-electric">
                            {step.n}
                          </span>
                        </div>
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden
                          className="text-electric/70 transition-all duration-500 group-hover:scale-110 group-hover:text-electric group-hover:drop-shadow-[0_0_8px_var(--electric)]"
                        >
                          {step.icon}
                        </svg>
                      </div>

                      {/* Content */}
                      <h3 className="relative mt-6 text-lg font-medium tracking-tight text-foreground">
                        {step.title}
                      </h3>
                      <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.body}
                      </p>

                      {/* Progress bar */}
                      <span
                        aria-hidden
                        className="absolute inset-x-7 bottom-5 h-px origin-left scale-x-0 bg-gradient-to-r from-electric/0 via-electric to-electric/0 transition-transform duration-700 ease-out group-hover:scale-x-100"
                      />
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>


      {/* PRODUCT PREVIEW — tilt + LED + stats */}
      <section className="relative py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  The Range
                </p>
                <h2 className="mt-3 text-balance text-3xl font-extralight tracking-tight sm:text-5xl">
                  Engineered for every journey.
                </h2>
              </div>
              <Link to="/products" className="hidden text-sm text-electric hover:underline sm:block">
                View all →
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:mt-14 md:grid-cols-3" style={{ perspective: 1400 }}>
            {products.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <Link to="/products" className="group block focus-visible:outline-none">
                  <TiltCard className="group transition-transform duration-500 ease-out will-change-transform group-hover:-translate-y-2 group-focus-visible:-translate-y-2">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card transition-shadow duration-500 group-hover:shadow-[0_40px_80px_-20px_color-mix(in_oklab,var(--electric)_28%,transparent)] group-focus-visible:ring-2 group-focus-visible:ring-electric">
                      <img
                        src={p.img}
                        alt={p.name}
                        width={1280}
                        height={1280}
                        loading="lazy"
                        className="h-full w-full object-contain p-10 transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

                      {/* LED strip on hover */}
                      <div className="led-strip absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100" />

                      {/* Default text */}
                      <div className="absolute inset-0 flex flex-col justify-end p-7 transition-opacity duration-500 group-hover:opacity-0">
                        <p className="text-xs uppercase tracking-[0.25em] text-electric">{p.tag}</p>
                        <h3 className="mt-2 text-2xl font-light">{p.name}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{p.spec}</p>
                      </div>

                      {/* Hover stats */}
                      <div className="absolute inset-0 flex flex-col justify-end gap-3 bg-gradient-to-t from-card via-card/85 to-transparent p-7 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <p className="text-xs uppercase tracking-[0.25em] text-electric">{p.tag}</p>
                        <h3 className="text-2xl font-light">{p.name}</h3>
                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <Stat label="CO₂ saved" value={p.co2} />
                          <Stat label="Trees / yr" value={p.trees} />
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <OrganicBlob className="-left-40 top-20 h-[500px] w-[500px]" opacity={0.18} />
        <OrganicBlob className="-right-40 bottom-0 h-[500px] w-[500px]" opacity={0.14} />

        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-electric">A new dawn</p>
            <h2 className="mt-5 text-balance text-4xl font-extralight tracking-tight sm:text-7xl">
              Charge into <span className="text-electric-gradient italic">tomorrow.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Talk to our infrastructure team about deploying Elektro Gorivo at your home,
              workplace, or across your network.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <RippleLink to="/contact" variant="primary">
                Contact Us
              </RippleLink>
              <RippleLink to="/products" variant="ghost">
                Explore Products
              </RippleLink>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface/60 px-3 py-2.5">
      <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      <p className="mt-0.5 text-base font-light text-foreground">{value}</p>
    </div>
  );
}
