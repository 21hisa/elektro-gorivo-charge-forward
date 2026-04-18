import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import productHome from "@/assets/product-home.jpg";
import productCommercial from "@/assets/product-commercial.jpg";
import productDc from "@/assets/product-dc.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Elektro Gorivo" },
      { name: "description", content: "Explore the Elektro Gorivo range — Volta Home, Volta Pro, and Volta Hyper. Premium EV chargers from 7.4 kW to 360 kW." },
      { property: "og:title", content: "Products — Elektro Gorivo" },
      { property: "og:description", content: "Premium EV chargers from 7.4 kW to 360 kW. Engineered for every journey." },
    ],
  }),
  component: ProductsPage,
});

const categories = [
  {
    tag: "Home Chargers",
    name: "Volta Home",
    tagline: "Effortless charging, every night.",
    img: productHome,
    specs: [
      { l: "Power", v: "7.4 – 22 kW" },
      { l: "Connector", v: "Type 2 · Tethered" },
      { l: "Connectivity", v: "Wi-Fi · Bluetooth · 4G" },
      { l: "Protection", v: "IP54 · IK10" },
    ],
    features: ["Solar PV integration", "Dynamic load balancing", "OTA updates", "RFID & app unlock"],
  },
  {
    tag: "Commercial",
    name: "Volta Pro",
    tagline: "Always on, for everyone.",
    img: productCommercial,
    specs: [
      { l: "Power", v: "22 – 60 kW" },
      { l: "Output", v: "AC + DC hybrid" },
      { l: "Standards", v: "OCPP 2.0.1" },
      { l: "Protection", v: "IP55 · vandal-resistant" },
    ],
    features: ["Fleet management", "Dynamic pricing", "Multi-tenant billing", "Remote diagnostics"],
  },
  {
    tag: "DC Fast",
    name: "Volta Hyper",
    tagline: "Highway speed. Hotel comfort.",
    img: productDc,
    specs: [
      { l: "Power", v: "120 – 360 kW" },
      { l: "Connectors", v: "CCS2 · CHAdeMO" },
      { l: "Charge time", v: "10–80% in 18 min" },
      { l: "Cooling", v: "Liquid-cooled cables" },
    ],
    features: ["Plug & Charge ISO 15118", "Modular power stack", "MID-certified metering", "Tap-to-pay terminal"],
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
              From the quiet of your garage to a thousand-vehicle hub — one design language,
              three power tiers, and a single intelligent ecosystem.
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
                      alt={c.name}
                      width={1280}
                      height={1280}
                      loading="lazy"
                      className="aspect-square w-full object-cover transition-transform duration-[1500ms] ease-out hover:scale-[1.04]"
                    />
                  </div>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-electric">{c.tag}</p>
                  <h2 className="mt-3 text-balance text-4xl font-extralight tracking-tight sm:text-5xl">
                    {c.name}
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
