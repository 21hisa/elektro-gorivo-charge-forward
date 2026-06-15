import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { OrganicBlob } from "@/components/OrganicBlob";
import { RippleLink } from "@/components/RippleButton";
import aboutHeroAsset from "@/assets/about-ev-hero.png.asset.json";
import greenerAsset from "@/assets/young-tree.jpg.asset.json";

const aboutHero = aboutHeroAsset.url;
const greenerImg = greenerAsset.url;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Elektro Gorivo" },
      { name: "description", content: "Elektro Gorivo: a new venture engineering European-standard ultra-fast DC EV chargers from 60 kW to 480 kW." },
      { property: "og:title", content: "About — Elektro Gorivo" },
      { property: "og:description", content: "Powering the Future of EV Charging." },
      { property: "og:image", content: aboutHero },
      { name: "twitter:image", content: aboutHero },
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

const pillars = [
  { k: "60 – 480 kW", l: "Ultra-fast DC range" },
  { k: "European", l: "Engineering standard" },
  { k: "In-house", l: "Proprietary tech stack" },
  { k: "24×7", l: "Network monitoring" },
];

function AboutPage() {
  return (
    <div>
      {/* HERO — EV charger image with legible headline overlay */}
      <section className="relative min-h-[640px] overflow-hidden bg-[#0c2238] pt-28 pb-16 sm:h-[84vh] sm:min-h-[640px] sm:pt-32 sm:pb-0">
        <img
          src={aboutHero}
          alt="Elektro Gorivo ultra-fast DC charger powering a premium electric SUV"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover object-right"
        />

        {/* Left-side legibility plate — keeps the EV unobscured on the right */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(8,22,40,0.88) 0%, rgba(8,22,40,0.6) 34%, rgba(8,22,40,0.2) 60%, rgba(8,22,40,0) 80%)",
          }}
        />

        {/* Mobile: extra top-down darken so the headline reads over the car */}
        <div
          aria-hidden
          className="absolute inset-0 sm:hidden"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,22,40,0.75) 0%, rgba(8,22,40,0.35) 50%, rgba(8,22,40,0) 100%)",
          }}
        />

        <div className="relative mx-auto flex h-full max-w-7xl items-start px-5 sm:items-center sm:px-6">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-[10.5px] font-medium uppercase tracking-[0.4em] text-electric">
              <span className="h-1 w-1 rounded-full bg-electric shadow-[0_0_8px_var(--electric)]" />
              About Elektro Gorivo
            </p>
            <h1 className="mt-5 max-w-3xl text-balance text-4xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
              Powering the future of{" "}
              <span className="bg-gradient-to-r from-[#00E676] to-[#7CFFB2] bg-clip-text text-transparent italic">
                EV charging.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/85 sm:text-lg">
              A new venture engineering proprietary, European-standard ultra-fast
              DC chargers — built in-house, end to end.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PILLARS strip */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-5 sm:grid-cols-4 sm:px-6">
          {pillars.map((p) => (
            <div key={p.l} className="px-2 py-8 text-center sm:px-4">
              <p className="text-2xl font-light tracking-tight text-foreground sm:text-3xl">
                <span className="text-electric-gradient italic">{p.k}</span>
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {p.l}
              </p>
            </div>
          ))}
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
              Founded this year, Elektro Gorivo is committed to developing proprietary,
              in-house technology — driving innovation and premium quality in product
              design right from the start. Every charger we ship is engineered to a
              European standard, tuned for the realities of Indian operating conditions,
              and built to scale with the networks of tomorrow.
            </p>
          </Reveal>
        </div>
      </section>

      {/* GREENER TOMORROW */}
      <section className="relative border-y border-border bg-surface/40 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-[#0c2238]">
              <img
                src={aboutHero}
                alt="Elektro Gorivo DC fast charger detail"
                width={1280}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="text-xs uppercase tracking-[0.3em] text-electric">Engineering a greener tomorrow</p>
            <h2 className="mt-4 text-balance text-3xl font-extralight leading-tight sm:text-4xl">
              European-standard ultra-fast DC chargers — from{" "}
              <span className="text-electric-gradient italic">60 kW to 480 kW.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Elektro Gorivo is dedicated to making immediate and substantial advancements
              in EV charging technology. Our core initiative contributes directly to global
              sustainability and the rapid expansion of clean energy networks.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Proprietary power-electronics platform",
                "CCS-2 compliant, grid-tolerant architecture",
                "Modular cabinets — 60, 120, 240, 360, 480 kW",
                "OCPP-ready for any network operator",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_10px_var(--electric)]" />
                  <span className="text-muted-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="py-20 sm:py-28">
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
      <section className="border-t border-border bg-surface/30 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-electric">Our vision</p>
            <h2 className="mt-5 text-balance text-3xl font-extralight tracking-tight sm:text-5xl">
              A key player in the{" "}
              <span className="text-electric-gradient italic">global EV charging</span>{" "}
              infrastructure sector.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              From our inception, Elektro Gorivo is committed to empowering customers with
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
            Partner, install, or simply say hello — +91 93197 08372 · elektrogorivo@gmail.com
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
