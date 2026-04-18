import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import aboutHero from "@/assets/about-hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Elektro Gorivo" },
      { name: "description", content: "Elektro Gorivo is building the silent infrastructure of clean mobility — premium EV charging engineered for the next century." },
      { property: "og:title", content: "About — Elektro Gorivo" },
      { property: "og:description", content: "Building the silent infrastructure of clean mobility." },
      { property: "og:image", content: aboutHero },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { y: "2021", t: "Founded in Bengaluru", d: "A small team of EV and energy engineers with one belief — charging deserves better design." },
  { y: "2022", t: "Volta Home launched", d: "Our flagship 22 kW residential charger ships to its first 1,000 homes." },
  { y: "2023", t: "Network expansion", d: "200+ commercial sites and the launch of our connected ecosystem." },
  { y: "2024", t: "Volta Hyper", d: "Liquid-cooled 360 kW DC fast charging arrives on the highway." },
  { y: "2025", t: "10,000+ chargers", d: "Across 80 cities, with 99.9% uptime and zero compromise." },
];

const stats = [
  { v: "10K+", l: "Chargers deployed" },
  { v: "80+", l: "Cities served" },
  { v: "99.9%", l: "Network uptime" },
  { v: "180 GWh", l: "Clean energy delivered" },
];

function AboutPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[80vh] min-h-[500px] overflow-hidden sm:h-[90vh] sm:min-h-[600px]">
        <img
          src={aboutHero}
          alt="EV charging at sunset"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        <div className="relative mx-auto flex h-full max-w-5xl items-end px-5 pb-14 sm:px-6 sm:pb-20">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-electric">About Elektro Gorivo</p>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-extralight tracking-tight sm:text-6xl md:text-7xl">
              <span className="text-gradient">We don't sell chargers.</span>{" "}
              <span className="text-electric-gradient italic">We build the grid of tomorrow.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:gap-16 sm:px-6 md:grid-cols-2">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-electric">Mission</p>
            <h2 className="mt-4 text-3xl font-extralight leading-tight">
              Accelerate the world's transition to clean mobility through quietly excellent
              engineering.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs uppercase tracking-[0.3em] text-electric">Vision</p>
            <h2 className="mt-4 text-3xl font-extralight leading-tight">
              A future where charging an electric vehicle is as effortless and beautiful as
              the journey itself.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-surface/40 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.08}>
              <div>
                <p className="text-4xl font-extralight tracking-tight text-electric sm:text-5xl">{s.v}</p>
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
              Five years. One direction.
            </h2>
          </Reveal>

          <div className="mt-16 space-y-px overflow-hidden rounded-2xl border border-border">
            {milestones.map((m, i) => (
              <Reveal key={m.y} delay={i * 0.05}>
                <div className="grid grid-cols-[80px_1fr] gap-6 bg-surface p-8 transition-colors hover:bg-surface-elevated sm:grid-cols-[120px_1fr] sm:p-10">
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
                <div key={c} className="bg-surface p-8 text-center text-sm font-light tracking-wide text-muted-foreground">
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
            Build with us.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Partner, install, or simply say hello.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-electric px-6 py-3 text-sm font-medium text-accent-foreground shadow-glow"
          >
            Start a conversation
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
