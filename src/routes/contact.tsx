import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { OrganicBlob } from "@/components/OrganicBlob";
import { FloatingLeaves } from "@/components/FloatingLeaves";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Elektro Gorivo" },
      { name: "description", content: "Talk to the Elektro Gorivo team about home installation, commercial rollouts, or partnership opportunities." },
      { property: "og:title", content: "Contact — Elektro Gorivo" },
      { property: "og:description", content: "Talk to our infrastructure team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [brochureSent, setBrochureSent] = useState(false);

  return (
    <div>
      <section className="relative overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="absolute inset-0 bg-radial-electric opacity-50" />
        <OrganicBlob className="-left-32 top-10 h-[450px] w-[450px]" opacity={0.12} />
        <FloatingLeaves density="light" />
        <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-electric">Contact</p>
            <h1 className="mt-5 text-balance text-4xl font-extralight tracking-tight sm:text-6xl md:text-7xl">
              <span className="text-gradient">Let's </span>
              <span className="text-electric-gradient italic">grow together.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-sm text-muted-foreground sm:text-base">
              Whether you're charging one car or commissioning one thousand — our team
              responds within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20 sm:pb-32">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="glass rounded-3xl p-6 sm:p-10"
            >
              {sent ? (
                <div className="py-16 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-electric/15 text-electric">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-2xl font-light">Message sent.</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    We'll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <Field label="Name">
                    <input required type="text" placeholder="Jane Doe" className="field" />
                  </Field>
                  <Field label="Email">
                    <input required type="email" placeholder="jane@company.com" className="field" />
                  </Field>
                  <Field label="Inquiry type">
                    <select className="field" defaultValue="home">
                      <option value="home">Home installation</option>
                      <option value="commercial">Commercial rollout</option>
                      <option value="dc">DC fast charging</option>
                      <option value="partner">Partnership</option>
                    </select>
                  </Field>
                  <Field label="Message">
                    <textarea required rows={5} placeholder="Tell us about your project…" className="field resize-none" />
                  </Field>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-electric py-3.5 text-sm font-medium text-accent-foreground shadow-glow transition-transform hover:scale-[1.01]"
                  >
                    Send message
                  </button>
                </div>
              )}
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-10">
              <Info label="General" lines={["hello@elektrogorivo.com", "+91 90000 00000"]} />
              <Info label="Sales" lines={["sales@elektrogorivo.com", "Mon–Fri · 9:00 – 19:00 IST"]} />
              <Info label="HQ" lines={["1st Cross, Indiranagar", "Bengaluru 560038, India"]} />
              <Info label="EU Office" lines={["Friedrichstraße 68", "10117 Berlin, Germany"]} />

              <div className="aspect-video overflow-hidden rounded-2xl border border-border bg-surface">
                <iframe
                  title="Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=77.63%2C12.96%2C77.65%2C12.98&layer=mapnik"
                  className="h-full w-full grayscale"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BROCHURE */}
      <section id="brochure" className="relative scroll-mt-28 border-t border-border bg-surface/40 py-20 sm:py-28">
        <div className="absolute inset-0 bg-radial-electric opacity-30" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-electric">Product Brochure</p>
            <h2 className="mt-4 text-balance text-3xl font-extralight tracking-tight sm:text-5xl">
              The full <span className="text-electric-gradient italic">NAYA</span> lineup.
              <br />
              <span className="text-gradient">In your inbox.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Detailed specifications, dimensions, certifications, and deployment guides for
              the entire EG-DC range — from 30 kW workplace units to 360 kW hyper chargers.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {[
                "Full technical datasheets (PDF)",
                "Dimensional drawings & site requirements",
                "Compliance: CE · IEC 61851 · IEC 61000 · OCPP",
                "Reference architecture & deployment guide",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-electric shadow-[0_0_12px_var(--electric)]" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setBrochureSent(true);
              }}
              className="glass rounded-3xl p-6 sm:p-10"
            >
              {brochureSent ? (
                <div className="py-12 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-electric/15 text-electric">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-2xl font-light">Brochure on its way.</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Check your inbox in the next few minutes.
                  </p>
                </div>
              ) : (
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-light text-foreground">Get the brochure</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Enter your details — we'll email you the latest PDF.
                    </p>
                  </div>
                  <Field label="Full name">
                    <input required type="text" placeholder="Jane Doe" className="field" />
                  </Field>
                  <Field label="Work email">
                    <input required type="email" placeholder="jane@company.com" className="field" />
                  </Field>
                  <Field label="Company">
                    <input type="text" placeholder="Optional" className="field" />
                  </Field>
                  <Field label="I'm interested in">
                    <select className="field" defaultValue="all">
                      <option value="all">Full range (all models)</option>
                      <option value="home">Home / Workplace (30 kW)</option>
                      <option value="commercial">Commercial (60 – 160 kW)</option>
                      <option value="ultra">Ultra-fast (240 – 360 kW)</option>
                    </select>
                  </Field>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-electric py-3.5 text-sm font-medium text-accent-foreground shadow-glow transition-transform hover:scale-[1.01]"
                  >
                    Send me the brochure
                  </button>
                  <p className="text-center text-[11px] text-muted-foreground">
                    By submitting, you agree to receive product information from Elektro Gorivo.
                  </p>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      <style>{`
        .field {
          width: 100%;
          background: transparent;
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 14px 16px;
          font-size: 14px;
          color: var(--foreground);
          transition: border-color .2s, box-shadow .2s;
        }
        .field:focus {
          outline: none;
          border-color: var(--electric);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--electric) 18%, transparent);
        }
        .field::placeholder { color: var(--muted-foreground); }
      `}</style>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

function Info({ label, lines }: { label: string; lines: string[] }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.25em] text-electric">{label}</p>
      <div className="mt-3 space-y-1 text-sm font-light">
        {lines.map((l) => <p key={l}>{l}</p>)}
      </div>
    </div>
  );
}
