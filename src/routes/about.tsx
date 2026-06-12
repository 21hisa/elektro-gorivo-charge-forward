import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { OrganicBlob } from "@/components/OrganicBlob";
import { LightRays } from "@/components/LightRays";
import { RippleLink } from "@/components/RippleButton";
import forestHero from "@/assets/forest-hero-cinematic.jpg";
import youngTree from "@/assets/young-tree.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Elektro Gorivo" },
      { name: "description", content: "Elektro Gorivo: a new venture engineering European-standard ultra-fast DC EV chargers from 60 kW to 480 kW." },
      { property: "og:title", content: "About — Elektro Gorivo" },
      { property: "og:description", content: "Powering the Future of EV Charging." },
      { property: "og:image", content: forestHero },
    ],
  }),
  component: AboutPage,
});

const audiences = [
  { t: "Business Owners", d: "Charging that turns footfall into revenue." },
  { t: "Fleet Operators", d: "Reliable infrastructure for round-the-clock operations." },
  { t: "Integration Companies", d: "Hardware engineered to fit any deployment stack." },
  { t: "Private EV Users", d: "Premium ultra-fast charging for everyday journeys." },
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
              <span className="text-gradient">Powering the future of</span>{" "}
              <span className="text-electric-gradient italic">EV charging.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="relative py-20 sm:py-32">
        <OrganicBlob className="-left-32 top-10 h-[500px] w-[500px]" opacity={0.1} />
        <div className="relative mx-auto max-w-4xl px-5 sm:px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-electric">Who we are</p>
            <h2 className="mt-4 text-balance text-3xl font-extralight leading-tight sm:text-5xl">
              A dynamic new venture, built on cutting-edge engineering.
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Founded this year, Electro Gorivo is committed to developing proprietary,
              in-house technology — driving innovation and premium quality in product design
              right from the start.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GREENER TOMORROW */}
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
            <p className="text-xs uppercase tracking-[0.3em] text-electric">Engineering a greener tomorrow</p>
            <h2 className="mt-4 text-balance text-3xl font-extralight leading-tight sm:text-4xl">
              European-standard ultra-fast DC chargers — from{" "}
              <span className="text-electric-gradient italic">60 kW to 480 kW.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Electro Gorivo is dedicated to making immediate and substantial advancements
              in EV charging technology. Our core initiative contributes directly to global
              sustainability and the rapid expansion of clean energy networks.
            </p>
          </Reveal>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="border-y border-border bg-surface/40 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-electric">Comprehensive charging solutions</p>
            <h2 className="mt-4 max-w-3xl text-balance text-3xl font-extralight tracking-tight sm:text-5xl">
              A versatile portfolio, tailored to a diverse market.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Our products are designed to effectively serve — and scale with — every kind
              of EV adopter.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a, i) => (
              <Reveal key={a.t} delay={i * 0.06}>
                <div className="h-full bg-card p-8 transition-colors hover:bg-surface-elevated">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-electric/40 bg-electric/10 text-xs text-electric">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-5 text-lg font-light text-foreground">{a.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-electric">Our vision</p>
            <h2 className="mt-5 text-balance text-3xl font-extralight tracking-tight sm:text-5xl">
              A key player in the{" "}
              <span className="text-electric-gradient italic">global EV charging</span>{" "}
              infrastructure sector.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              From our inception, Electro Gorivo is committed to empowering customers with
              reliable, ultra-fast charging technology — actively driving the world toward
              a greener and more sustainable future.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-24 text-center">
        <Reveal>
          <h2 className="text-balance text-4xl font-extralight tracking-tight sm:text-5xl">
            Build with us. <span className="text-electric-gradient italic">Power with us.</span>
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
