import { useMemo, useState } from "react";

export function RoiCalculator() {
  const [sessions, setSessions] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [units, setUnits] = useState<string>("20");

  const monthly = useMemo(() => {
    const s = Number(sessions);
    const p = Number(price);
    const u = Number(units);
    if (!s || !p || !u || s < 0 || p < 0 || u < 0) return null;
    return Math.round(s * p * u * 30);
  }, [sessions, price, units]);

  return (
    <div className="glass mx-auto mt-10 grid max-w-3xl gap-5 rounded-3xl p-6 sm:p-10">
      <div className="grid gap-4 sm:grid-cols-3">
        <Field
          label="Daily sessions"
          value={sessions}
          onChange={setSessions}
          placeholder="e.g. 12"
        />
        <Field
          label="Price / unit (₹)"
          value={price}
          onChange={setPrice}
          placeholder="e.g. 18"
        />
        <Field
          label="Units / session"
          value={units}
          onChange={setUnits}
          placeholder="e.g. 20"
        />
      </div>

      <div className="rounded-2xl border border-border bg-surface/40 px-5 py-6 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Estimated monthly revenue
        </p>
        <p className="mt-2 text-3xl font-extralight tracking-tight text-electric drop-shadow-[0_0_25px_var(--electric-glow)] sm:text-5xl">
          {monthly !== null ? `₹${monthly.toLocaleString("en-IN")}` : "—"}
        </p>
        <p className="mt-2 text-[11px] text-muted-foreground">
          Indicative. Based on 30 days · sessions × units × price.
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
      <input
        type="number"
        inputMode="numeric"
        min={0}
        max={100000}
        value={value}
        onChange={(e) => onChange(e.target.value.slice(0, 8))}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-border bg-transparent px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-electric focus:outline-none focus:ring-2 focus:ring-[color-mix(in_oklab,var(--electric)_20%,transparent)]"
      />
    </label>
  );
}
