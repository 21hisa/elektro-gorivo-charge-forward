import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

import { OrganicBlob } from "@/components/OrganicBlob";
import { Counter } from "@/components/Counter";
import { LightRays } from "@/components/LightRays";
import { RippleLink } from "@/components/RippleButton";
import forestHero from "@/assets/forest-hero-cinematic.jpg";
import youngTree from "@/assets/young-tree.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Elektro Gorivo" },
      { name: "description", content: "Elektro Gorivo is building the silent infrastructure of clean mobility — premium EV charging that grows the planet, not the carbon count." },
      { property: "og:title", content: "About — Elektro Gorivo" },
      { property: "og:description", content: "Building the silent infrastructure of clean mobility." },
      { property: "og:image", content: forestHero },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { y: "2021", t: "A seed planted in Bengaluru", d: "A small team of EV and energy engineers with one belief — charging deserves better design, and the planet deserves better engineers." },
  { y: "2022", t: "Volta Home launched", d: "Our flagship 22 kW residential charger ships to its first 1,000 homes — quietly displacing tonnes of carbon." },
  { y: "2023", t: "Network roots deepen", d: "200+ commercial sites and the launch of our connected ecosystem — every charger now part of a living grid." },
  { y: "2024", t: "Volta Hyper rises", d: "Liquid-cooled 360 kW DC fast charging arrives on the highway. Refuel a journey in a coffee break." },
  { y: "2025", t: "10,000+ chargers, one forest", d: "Across 80 cities, 99.9% uptime, and the equivalent of 1.6 million trees in carbon avoided." },
];

const stats = [
  { v: 10, suf: "K+", l: "Chargers deployed" },
  { v: 80, suf: "+", l: "Cities served" },
  { v: 99.9, suf: "%", l: "Network uptime", dec: 1 },
  { v: 180, suf: " GWh", l: "Clean energy delivered" },
];

function AboutPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[500px] overflow-hidden sm:h-[90vh] sm:min-h-[600px]">
        <img
          src={forestHero}
          alt="Sunlit ancient forest"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <LightRays intensity={0.7} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        
        <div className="relative mx-auto flex h-full max-w-5xl items-end px-5 pb-14 sm:px-6 sm:pb-20">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-electric">About Elektro Gorivo</p>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-extralight tracking-tight sm:text-6xl md:text-7xl">
              <span className="text-gradient">We don't sell chargers.</span>{" "}
              <span className="text-electric-gradient italic">We plant the grid of tomorrow.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="relative py-20 sm:py-32">
        <OrganicBlob className="-left-32 top-10 h-[500px] w-[500px]" opacity={0.1} />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:gap-16 sm:px-6 md:grid-cols-2">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-electric">Mission</p>
            <h2 className="mt-4 text-3xl font-extralight leading-tight">
              Accelerate the world's transition to clean mobility through quietly excellent
              engineering — one kilowatt, one tree, one breath at a time.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs uppercase tracking-[0.3em] text-electric">Vision</p>
            <h2 className="mt-4 text-3xl font-extralight leading-tight">
              A future where charging an electric vehicle is as effortless and beautiful as
              the forest it preserves.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* TREE PORTRAIT */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src={youngTree}
                alt="A young tree in a meadow"
                width={1280}
                height={1600}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">A note from our founders</p>
            <p className="mt-6 text-2xl font-extralight italic leading-relaxed text-foreground sm:text-3xl">
              "We started with a simple question — what if every charge meant one more tree
              standing? What if infrastructure could be a quiet act of restoration?"
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.2em] text-electric">— The Elektro Gorivo Team</p>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-surface/50 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div>
                <p className="text-4xl font-extralight tracking-tight text-electric sm:text-5xl">
                  <Counter to={s.v} suffix={s.suf} decimals={s.dec ?? 0} />
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section className="py-32">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Our Journey</p>
            <h2 className="mt-3 text-balance text-4xl font-extralight tracking-tight sm:text-5xl">
              Five rings. <span className="text-electric-gradient italic">One direction.</span>
            </h2>
          </Reveal>

          <div className="mt-16 space-y-px overflow-hidden rounded-2xl border border-border">
            {milestones.map((m, i) => (
              <Reveal key={m.y} delay={i * 0.05}>
                <div className="grid grid-cols-[80px_1fr] gap-6 bg-card p-8 transition-colors hover:bg-surface-elevated sm:grid-cols-[120px_1fr] sm:p-10">
                  <p className="font-mono text-sm text-electric">{m.y}</p>
                  <div>
                    <h3 className="text-xl font-light">{m.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Certified · Tested · Trusted
            </p>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
              {["IEC 61851", "OCPP 2.0.1", "ISO 15118", "CE · BIS · UL"].map((c) => (
                <div key={c} className="bg-card p-8 text-center text-sm font-light tracking-wide text-muted-foreground">
                  {c}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center">
        <Reveal>
          <h2 className="text-balance text-4xl font-extralight tracking-tight sm:text-5xl">
            Build with us. <span className="text-electric-gradient italic">Plant with us.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Partner, install, or simply say hello.
          </p>
          <div className="mt-8 inline-flex">
            <RippleLink to="/contact" variant="primary">
              Start a conversation
            </RippleLink>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
