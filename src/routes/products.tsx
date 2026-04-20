import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { OrganicBlob } from "@/components/OrganicBlob";
import { TiltCard } from "@/components/TiltCard";
import { RippleLink } from "@/components/RippleButton";
import { ProductImageSlider } from "@/components/ProductImageSlider";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

import naya30 from "@/assets/products/naya-30kw.jpg";
import naya60 from "@/assets/products/naya-60kw.jpg";
import naya120 from "@/assets/products/naya-120kw.jpg";
import naya240 from "@/assets/products/naya-240kw.jpg";
import naya360 from "@/assets/products/naya-360kw.jpg";
import real30 from "@/assets/products/eg-30-real.jpg";
import real60 from "@/assets/products/eg-60-real.jpg";
import real80 from "@/assets/products/eg-80-real.jpg";
import real120 from "@/assets/products/eg-120-real.jpg";
import angle1 from "@/assets/products/eg-angle-1.jpg";

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

type Product = {
  tag: string;
  name: string;
  power: string;
  mpn?: string;
  tagline: string;
  description: string;
  images: { src: string; alt: string }[];
  specs: { l: string; v: string }[];
  features: string[];
  technical: { group: string; rows: { k: string; v: string }[] }[];
};

const sharedFeatures = [
  "<30 W ideal power consumption",
  "Built-in 10+ languages",
  "Easy maintenance",
  "Low noise design ≤ 60 dB (A)",
  "Support APP, Touch, Plug & Charge",
  "Unique module pre-installation design",
  "Remote diagnostics and OTA upgrade",
  "Display Debug log mode",
];

const commonTechnical = (extra: { group: string; rows: { k: string; v: string }[] }[]) => [
  ...extra,
  {
    group: "Screen & Communication",
    rows: [
      { k: "HDMI", v: '7" high brightness' },
      { k: "Network", v: "Standard: Ethernet & GPRS, Optional: Wi-Fi" },
      { k: "Protocol", v: "OCPP 1.6J, compatible to OCPP 2.0J" },
    ],
  },
  {
    group: "Protection & Certification",
    rows: [
      { k: "Electrical", v: "Short circuit, over/under-voltage, over-temperature, surge, lightning; ground/insulation/phase-sequence/leakage detection" },
      { k: "Standards", v: "IEC 61851-23/-24, IEC 62196-3, DIN 70121, ISO 15118" },
    ],
  },
  {
    group: "Authentication",
    rows: [
      { k: "Online", v: "APP · RFID (ISO 14443 mifare1) · ISO 15118 Plug & Charge" },
      { k: "Offline", v: "Whitelisted RFID card · Password" },
    ],
  },
];

const products: Product[] = [
  {
    tag: "Wall / Stand-mounted",
    name: "EG-DC 30",
    power: "30 kW",
    mpn: "1010-0017",
    tagline: "Compact DC. Workplace ready.",
    description:
      "A reliable, efficient, and convenient charging solution designed for workplaces, retail, and light commercial use. Compact wall or pedestal mount with full smart connectivity.",
    images: [
      { src: real30, alt: "EG-DC 30 kW front view" },
      { src: naya30, alt: "EG-DC 30 kW angle render" },
      { src: angle1, alt: "EG-DC 30 kW detail view" },
    ],
    specs: [
      { l: "Output Power", v: "30 kW DC" },
      { l: "Voltage", v: "200 – 1000 V DC" },
      { l: "Connectors", v: "Dual CCS 2" },
      { l: "Install", v: "Wall / Stand-mounted" },
    ],
    features: sharedFeatures,
    technical: commonTechnical([
      {
        group: "AC Input",
        rows: [
          { k: "Voltage", v: "415 / 480 V AC ±10%" },
          { k: "Frequency", v: "50 / 60 Hz ±10%" },
          { k: "Wiring", v: "3P + N + PE" },
        ],
      },
      {
        group: "DC Output",
        rows: [
          { k: "Power", v: "30 kW" },
          { k: "Voltage", v: "200 – 1000 V DC" },
          { k: "Max current", v: "100 A" },
          { k: "Outlets", v: "CCS 2" },
        ],
      },
      {
        group: "Mechanical",
        rows: [
          { k: "Dimensions (HxWxD)", v: "600 × 680 × 280 mm" },
          { k: "Weight", v: "< 90 kg" },
          { k: "Cable", v: "Standard 5 m · Optional 7 m" },
        ],
      },
      {
        group: "Environment",
        rows: [
          { k: "Operation Temp.", v: "−30°C to +55°C" },
          { k: "Storage Temp.", v: "−40°C to +80°C" },
          { k: "Humidity", v: "5% to 95%" },
          { k: "Altitude", v: "< 2000 m" },
          { k: "Noise", v: "< 60 dB (A)" },
          { k: "Warranty", v: "3 years" },
        ],
      },
    ]),
  },
  {
    tag: "Standalone Compact",
    name: "EG-DC 60",
    power: "60 kW",
    mpn: "1010-0011",
    tagline: "Highway-grade power. City-friendly footprint.",
    description:
      "A standalone DC fast charger built for fleets, hubs, and urban networks — dual CCS 2 outputs, intelligent power sharing, and a refined operator experience.",
    images: [
      { src: real60, alt: "EG-DC 60 kW front view" },
      { src: naya60, alt: "EG-DC 60 kW angle render" },
    ],
    specs: [
      { l: "Output Power", v: "60 kW DC" },
      { l: "Voltage", v: "200 – 1000 V DC" },
      { l: "Connectors", v: "Dual CCS 2" },
      { l: "Install", v: "Stand / Wall-mounted" },
    ],
    features: sharedFeatures,
    technical: commonTechnical([
      {
        group: "AC Input",
        rows: [
          { k: "Voltage", v: "415 / 480 V AC ±10%" },
          { k: "Frequency", v: "50 / 60 Hz ±10%" },
          { k: "Wiring", v: "3P + N + PE" },
        ],
      },
      {
        group: "DC Output",
        rows: [
          { k: "Power", v: "60 kW" },
          { k: "Voltage", v: "200 – 1000 V DC" },
          { k: "Max current", v: "200 A" },
          { k: "Outlets", v: "CCS 2 + CCS 2" },
        ],
      },
      {
        group: "Mechanical",
        rows: [
          { k: "Dimensions (HxWxD)", v: "1450 × 850 × 245 mm" },
          { k: "Weight", v: "< 165 kg" },
          { k: "Cable", v: "Standard 5 m · Optional 7 m" },
        ],
      },
      {
        group: "Environment",
        rows: [
          { k: "Operation Temp.", v: "−30°C to +55°C" },
          { k: "Storage Temp.", v: "−40°C to +80°C" },
          { k: "Humidity", v: "5% to 95%" },
          { k: "Altitude", v: "< 2000 m" },
          { k: "Noise", v: "< 60 dB (A)" },
          { k: "Warranty", v: "3 years" },
        ],
      },
    ]),
  },
  {
    tag: "Standalone DC Fast",
    name: "EG-DC 80",
    power: "80 kW",
    mpn: "1010-0012",
    tagline: "Balanced power for every site.",
    description:
      "Ground-mounted DC fast charger with dual CCS 2 outputs, modular architecture, and optional cable management — a versatile workhorse for commercial deployments.",
    images: [
      { src: real80, alt: "EG-DC 80 kW front view" },
      { src: naya120, alt: "EG-DC 80 kW alternate render" },
    ],
    specs: [
      { l: "Output Power", v: "80 kW DC" },
      { l: "Voltage", v: "200 – 1000 V DC" },
      { l: "Connectors", v: "Dual CCS 2" },
      { l: "Install", v: "Ground Mounted" },
    ],
    features: sharedFeatures,
    technical: commonTechnical([
      {
        group: "AC Input",
        rows: [
          { k: "Voltage", v: "415 / 480 V AC ±10%" },
          { k: "Frequency", v: "50 / 60 Hz ±10%" },
          { k: "Wiring", v: "3P + N + PE" },
        ],
      },
      {
        group: "DC Output",
        rows: [
          { k: "Power", v: "80 kW" },
          { k: "Voltage", v: "200 – 1000 V DC" },
          { k: "Max current", v: "200 A" },
          { k: "Outlets", v: "CCS 2 + CCS 2" },
        ],
      },
      {
        group: "Mechanical",
        rows: [
          { k: "Dimensions (HxWxD)", v: "1767 × 941 × 530 mm" },
          { k: "Weight", v: "< 250 kg" },
          { k: "Cable", v: "Standard 5 m · Optional 7 m · Cable management optional" },
        ],
      },
      {
        group: "Environment",
        rows: [
          { k: "Operation Temp.", v: "−30°C to +55°C" },
          { k: "Storage Temp.", v: "−40°C to +80°C" },
          { k: "Humidity", v: "5% to 95%" },
          { k: "Altitude", v: "< 2000 m" },
          { k: "Noise", v: "< 60 dB (A)" },
          { k: "Warranty", v: "3 years" },
        ],
      },
    ]),
  },
  {
    tag: "Standalone Ultra-Fast",
    name: "EG-DC 120",
    power: "120 kW",
    mpn: "1010-0005 / 1010-0019",
    tagline: "Built for fleets, hubs, and highways.",
    description:
      "High-power DC charger engineered for high-throughput sites. Dual CCS 2, robust ground-mount enclosure, and full ISO 15118 Plug & Charge support.",
    images: [
      { src: real120, alt: "EG-DC 120 kW front view" },
      { src: naya120, alt: "EG-DC 120 kW angle render" },
      { src: naya240, alt: "EG-DC 120 kW alternate render" },
    ],
    specs: [
      { l: "Output Power", v: "120 kW DC" },
      { l: "Voltage", v: "200 – 1000 V DC" },
      { l: "Connectors", v: "Dual CCS 2" },
      { l: "Install", v: "Ground Mounted" },
    ],
    features: sharedFeatures,
    technical: commonTechnical([
      {
        group: "AC Input",
        rows: [
          { k: "Voltage", v: "415 / 480 V AC ±10%" },
          { k: "Frequency", v: "50 / 60 Hz ±10%" },
          { k: "Wiring", v: "3P + N + PE" },
        ],
      },
      {
        group: "DC Output",
        rows: [
          { k: "Power", v: "120 kW" },
          { k: "Voltage", v: "200 – 1000 V DC" },
          { k: "Max current", v: "200 A" },
          { k: "Outlets", v: "CCS 2 + CCS 2" },
        ],
      },
      {
        group: "Mechanical",
        rows: [
          { k: "Dimensions (HxWxD)", v: "1767 × 941 × 530 mm" },
          { k: "Weight", v: "< 300 kg" },
          { k: "Cable", v: "Standard 5 m · Optional 7 m · Cable management optional" },
        ],
      },
      {
        group: "Environment",
        rows: [
          { k: "Operation Temp.", v: "−30°C to +55°C" },
          { k: "Storage Temp.", v: "−40°C to +80°C" },
          { k: "Humidity", v: "5% to 95%" },
          { k: "Altitude", v: "< 2000 m" },
          { k: "Noise", v: "< 60 dB (A)" },
          { k: "Warranty", v: "3 years" },
        ],
      },
    ]),
  },
  {
    tag: "Hyper Charger",
    name: "EG-DC 360",
    power: "360 kW",
    tagline: "The flagship. A full charge in a coffee break.",
    description:
      "Our flagship ultra-fast charger built for highways and high-volume hubs. Liquid-cooled 500 A cables, ISO 15118 Plug & Charge, and 24/7 cloud monitoring.",
    images: [
      { src: naya360, alt: "EG-DC 360 kW angle render" },
      { src: naya240, alt: "EG-DC 360 kW alternate render" },
    ],
    specs: [
      { l: "Output Power", v: "360 kW DC" },
      { l: "Voltage", v: "200 – 1000 V DC" },
      { l: "Connectors", v: "Dual CCS 2 · 500 A liquid-cooled" },
      { l: "Standards", v: "CE · IEC 61851 · IEC 61000" },
    ],
    features: [
      "ISO 15118 Plug & Charge",
      "Up to 480 kW configurable stack",
      "Integrated MID metering",
      "24/7 cloud monitoring",
      "5-year extendable warranty",
      ...sharedFeatures.slice(0, 4),
    ],
    technical: commonTechnical([
      {
        group: "DC Output",
        rows: [
          { k: "Power", v: "360 kW (configurable to 480 kW)" },
          { k: "Voltage", v: "200 – 1000 V DC" },
          { k: "Connectors", v: "Dual CCS 2, 500 A liquid-cooled" },
          { k: "Charge time", v: "10 – 80% in ~18 min" },
        ],
      },
      {
        group: "Mechanical",
        rows: [
          { k: "Install", v: "Ground Mounted" },
          { k: "Cooling", v: "Liquid-cooled power modules & cables" },
        ],
      },
    ]),
  },
];

function ProductsPage() {
  const [open, setOpen] = useState<Product | null>(null);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 pb-14 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0 bg-radial-electric opacity-60" />
        <OrganicBlob className="-left-32 top-10 h-[500px] w-[500px]" opacity={0.15} />
        <OrganicBlob className="-right-32 top-40 h-[500px] w-[500px]" opacity={0.1} />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-electric">The Range</p>
            <h1 className="mt-5 text-balance text-4xl font-extralight tracking-tight sm:text-6xl md:text-7xl">
              <span className="text-gradient">A charger for</span>{" "}
              <span className="text-electric-gradient italic">every moment.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground sm:text-base">
              From a 30 kW workplace unit to a 360 kW highway flagship — one design language,
              five power tiers, and a single intelligent ecosystem rooted in cleaner mobility.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="pb-20 sm:pb-32">
        <div className="mx-auto max-w-7xl space-y-20 px-5 sm:space-y-32 sm:px-6">
          {products.map((c, i) => (
            <Reveal key={c.name}>
              <div
                className={`grid items-center gap-12 md:grid-cols-2 md:gap-20 ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative" style={{ perspective: 1400 }}>
                  <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-electric/10 blur-3xl" />
                  <TiltCard className="group" intensity={4}>
                    <ProductImageSlider
                      images={c.images}
                      className="shadow-elevated"
                    />
                  </TiltCard>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-electric">{c.tag}</p>
                  <h2 className="mt-3 text-balance text-3xl font-extralight tracking-tight sm:text-5xl">
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
                    {c.features.slice(0, 5).map((f) => (
                      <li key={f} className="flex items-center gap-3 text-muted-foreground">
                        <span className="h-1 w-1 rounded-full bg-electric shadow-[0_0_10px_var(--electric)]" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setOpen(c)}
                      className="inline-flex items-center justify-center rounded-full bg-electric px-7 py-3 text-sm font-semibold text-accent-foreground shadow-[0_10px_30px_-10px_var(--electric)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-10px_var(--electric)]"
                    >
                      View details →
                    </button>
                    <RippleLink to="/contact" hash="brochure" variant="ghost">
                      Download brochure
                    </RippleLink>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DETAIL MODAL */}
      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-h-[92vh] max-w-5xl overflow-y-auto p-0 sm:rounded-3xl">
          {open && (
            <div className="grid gap-0 md:grid-cols-2">
              <div className="bg-card p-4 sm:p-6 md:sticky md:top-0 md:self-start">
                <ProductImageSlider
                  images={open.images}
                  imgClassName="aspect-square w-full object-contain p-6 sm:p-10"
                />
              </div>

              <div className="space-y-6 p-6 sm:p-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-electric">{open.tag}</p>
                  <DialogTitle className="mt-2 text-3xl font-extralight tracking-tight sm:text-4xl">
                    {open.name} <span className="text-muted-foreground">· {open.power}</span>
                  </DialogTitle>
                  {open.mpn && (
                    <p className="mt-1 text-xs text-muted-foreground">MPN: {open.mpn}</p>
                  )}
                  <DialogDescription className="mt-4 text-base text-muted-foreground">
                    {open.description}
                  </DialogDescription>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-[0.25em] text-electric">Features</h3>
                  <ul className="mt-3 grid grid-cols-1 gap-2 text-sm">
                    {open.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-muted-foreground">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-electric shadow-[0_0_10px_var(--electric)]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xs uppercase tracking-[0.25em] text-electric">
                    Technical specifications
                  </h3>
                  <div className="mt-3 overflow-hidden rounded-2xl border border-border">
                    <table className="w-full text-sm">
                      <tbody>
                        {open.technical.map((g) =>
                          g.rows.map((r, ri) => (
                            <tr key={g.group + r.k} className="border-t border-border first:border-t-0">
                              {ri === 0 && (
                                <td
                                  rowSpan={g.rows.length}
                                  className="w-1/3 bg-muted/40 px-4 py-3 align-top text-xs font-medium uppercase tracking-wider text-foreground"
                                >
                                  {g.group}
                                </td>
                              )}
                              <td className="px-4 py-3 text-muted-foreground">{r.k}</td>
                              <td className="px-4 py-3 text-foreground">{r.v}</td>
                            </tr>
                          )),
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <RippleLink to="/contact" hash="brochure" variant="primary">
                    Download brochure
                  </RippleLink>
                  <RippleLink to="/contact" variant="ghost">
                    Request a quote
                  </RippleLink>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
