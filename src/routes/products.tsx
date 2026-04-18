import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import naya30 from "@/assets/products/naya-30kw.jpg";
import naya60 from "@/assets/products/naya-60kw.jpg";
import naya120 from "@/assets/products/naya-120kw.jpg";
import naya240 from "@/assets/products/naya-240kw.jpg";
import naya360 from "@/assets/products/naya-360kw.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Elektro Gorivo" },
      { name: "description", content: "Explore the Elektro Gorivo DC fast-charger range — 30 kW wall/stand-mounted to 360 kW ultra-fast standalone units. CE, IEC 61851 & IEC 61000 compliant." },
      { property: "og:title", content: "Products — Elektro Gorivo" },
      { property: "og:description", content: "European-standard ultra-fast DC chargers from 30 kW to 360 kW. Engineered for every journey." },
    ],
  }),
  component: ProductsPage,
});

const categories = [
  {
    tag: "Wall / Stand-mounted",
    name: "EG-DC 30",
    power: "30 kW",
    tagline: "Compact DC. Workplace ready.",
    img: naya30,
    specs: [
      { l: "Output Power", v: "30 kW DC" },
      { l: "Input", v: "3-phase 380–415 V AC" },
      { l: "Connectors", v: "CCS2 · CHAdeMO · GB/T" },
      { l: "Protection", v: "IP55 · IK10" },
    ],
    features: [
      "Wall or pedestal mount",
      "OCPP 1.6J / 2.0.1",
      "4G · Wi-Fi · Ethernet · Bluetooth",
      "Local storage > 10,000 logs",
      "RFID · App · QR start",
    ],
  },
  {
    tag: "Standalone Compact",
    name: "EG-DC 60",
    power: "60 kW",
    tagline: "Highway-grade power. City-friendly footprint.",
    img: naya60,
    specs: [
      { l: "Output Power", v: "60 kW DC" },
      { l: "Voltage Range", v: "150 – 1000 V DC" },
      { l: "Connectors", v: "Dual gun · CCS2 / CHAdeMO" },
      { l: "Efficiency", v: "≥ 95%" },
    ],
    features: [
      "Liquid-cooled power modules",
      "Dynamic load distribution",
      "OCPP 1.6J / 2.0.1",
      '7" capacitive HMI display',
      "MID-grade DC metering",
    ],
  },
  {
    tag: "Standalone DC Fast",
    name: "EG-DC 120",
    power: "80 / 120 / 160 kW",
    tagline: "One platform. Three power tiers.",
    img: naya120,
    specs: [
      { l: "Output Power", v: "80 – 160 kW DC" },
      { l: "Voltage Range", v: "200 – 1000 V DC" },
      { l: "Connectors", v: "Dual CCS2 + optional CHAdeMO" },
      { l: "Cooling", v: "Forced-air, sealed airflow" },
    ],
    features: [
      "Modular 40 kW power stack",
      "Cable management arm",
      "Plug & Charge ISO 15118 ready",
      "Tap-to-pay terminal (optional)",
      "3-year warranty, extendable to 5",
    ],
  },
  {
    tag: "Standalone Ultra-Fast",
    name: "EG-DC 240",
    power: "180 / 240 / 320 kW",
    tagline: "Built for fleets, hubs, and highways.",
    img: naya240,
    specs: [
      { l: "Output Power", v: "180 – 320 kW DC" },
      { l: "Voltage Range", v: "200 – 1000 V DC" },
      { l: "Connectors", v: "Dual CCS2 · liquid-cooled" },
      { l: "Charge time", v: "10 – 80% in ~18 min" },
    ],
    features: [
      "Liquid-cooled 500 A cables",
      "Dynamic power sharing",
      "Vandal-resistant enclosure",
      "Remote diagnostics & OTA",
      "Multi-tenant billing",
    ],
  },
  {
    tag: "Hyper Charger",
    name: "EG-DC 360",
    power: "360 kW",
    tagline: "The flagship. A full charge in a coffee break.",
    img: naya360,
    specs: [
      { l: "Output Power", v: "360 kW DC" },
      { l: "Voltage Range", v: "200 – 1000 V DC" },
      { l: "Connectors", v: "Dual CCS2 · 500 A liquid-cooled" },
      { l: "Standards", v: "CE · IEC 61851 · IEC 61000" },
    ],
    features: [
      "ISO 15118 Plug & Charge",
      "Up to 480 kW configurable stack",
      "Integrated MID metering",
      "24/7 cloud monitoring",
      "5-year extendable warranty",
    ],
  },
];

function ProductsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative pt-40 pb-20">
        <div className="absolute inset-0 bg-radial-electric opacity-60" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-electric">The Range</p>
            <h1 className="mt-5 text-balance text-5xl font-extralight tracking-tight sm:text-7xl">
              <span className="text-gradient">A charger for</span>{" "}
              <span className="text-electric-gradient italic">every moment.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              From a 30 kW workplace unit to a 360 kW highway flagship — one design language,
              five power tiers, and a single intelligent ecosystem.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl space-y-32 px-6">
          {categories.map((c, i) => (
            <Reveal key={c.name}>
              <div
                className={`grid items-center gap-12 md:grid-cols-2 md:gap-20 ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative">
                  <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-electric/10 blur-3xl" />
                  <div className="overflow-hidden rounded-3xl bg-surface shadow-elevated">
                    <img
                      src={c.img}
                      alt={`${c.name} ${c.power} EV charger`}
                      width={1280}
                      height={1280}
                      loading="lazy"
                      className="aspect-square w-full object-contain p-8 transition-transform duration-[1500ms] ease-out hover:scale-[1.04]"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-electric">{c.tag}</p>
                  <h2 className="mt-3 text-balance text-4xl font-extralight tracking-tight sm:text-5xl">
                    {c.name} <span className="text-muted-foreground">· {c.power}</span>
                  </h2>
                  <p className="mt-3 text-lg italic text-muted-foreground">{c.tagline}</p>

                  <dl className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-border pt-8">
                    {c.specs.map((s) => (
                      <div key={s.l}>
                        <dt className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</dt>
                        <dd className="mt-1 text-base font-light">{s.v}</dd>
                      </div>
                    ))}
                  </dl>

                  <ul className="mt-8 space-y-2.5 text-sm">
                    {c.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-muted-foreground">
                        <span className="h-1 w-1 rounded-full bg-electric shadow-[0_0_10px_var(--electric)]" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:border-electric hover:text-electric"
                    >
                      Request specifications →
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
