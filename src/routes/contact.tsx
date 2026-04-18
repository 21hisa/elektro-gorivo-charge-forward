import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

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

  return (
    <div>
      <section className="relative pt-40 pb-16">
        <div className="absolute inset-0 bg-radial-electric opacity-50" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.4em] text-electric">Contact</p>
            <h1 className="mt-5 text-balance text-5xl font-extralight tracking-tight sm:text-7xl">
              <span className="text-gradient">Let's </span>
              <span className="text-electric-gradient italic">talk power.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Whether you're charging one car or commissioning one thousand — our team
              responds within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="glass rounded-3xl p-8 sm:p-10"
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
