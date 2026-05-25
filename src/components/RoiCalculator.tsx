import { useMemo, useState } from "react";
import { Slider } from "@/components/ui/slider";

export function RoiCalculator() {
  const [sessions, setSessions] = useState<number>(12);
  const [price, setPrice] = useState<number>(18);
  const [units, setUnits] = useState<number>(20);

  const monthly = useMemo(
    () => Math.round(sessions * price * units * 30),
    [sessions, price, units],
  );

  return (
    <div className="glass mx-auto mt-10 grid max-w-3xl gap-6 rounded-3xl p-6 sm:p-10">
      <div className="grid gap-6 sm:grid-cols-3">
        <SliderField
          label="Daily sessions"
          value={sessions}
          onChange={setSessions}
          min={1}
          max={60}
          step={1}
          format={(v) => `${v}`}
        />
        <SliderField
          label="Price / unit (₹)"
          value={price}
          onChange={setPrice}
          min={5}
          max={40}
          step={1}
          format={(v) => `₹${v}`}
        />
        <SliderField
          label="Units / session"
          value={units}
          onChange={setUnits}
          min={5}
          max={60}
          step={1}
          format={(v) => `${v}`}
        />
      </div>

      <div className="rounded-2xl border border-border bg-surface/40 px-5 py-6 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Estimated monthly revenue
        </p>
        <p className="mt-2 text-3xl font-extralight tracking-tight text-electric tabular-nums drop-shadow-[0_0_25px_var(--electric-glow)] sm:text-5xl">
          ₹{monthly.toLocaleString("en-IN")}
        </p>
        <p className="mt-2 text-[11px] text-muted-foreground">
          Indicative. Based on 30 days · sessions × units × price.
        </p>
      </div>
    </div>
  );
}

function SliderField({
  label,
  value,
  onChange,
  min,
  max,
  step,
  format,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
  format: (v: number) => string;
}) {
  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between gap-2">
        <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </span>
        <span className="text-sm font-medium text-electric tabular-nums">
          {format(value)}
        </span>
      </div>
      <Slider
        value={[value]}
        min={min}
        max={max}
        step={step}
        onValueChange={(v) => onChange(v[0])}
        aria-label={label}
        className="focus-visible:outline-none"
      />
      <div className="mt-2 flex justify-between text-[10px] uppercase tracking-[0.18em] text-muted-foreground tabular-nums">
        <span>{format(min)}</span>
        <span>{format(max)}</span>
      </div>
    </div>
  );
}
