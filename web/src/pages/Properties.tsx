import { useMemo, useState } from "react";
import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";

export default function Properties() {
  const [typeFilter, setTypeFilter] = useState<string>("الكل");
  const types = ["الكل", ...new Set(properties.map((p) => p.type))];

  const filtered = useMemo(
    () => (typeFilter === "الكل" ? properties : properties.filter((p) => p.type === typeFilter)),
    [typeFilter]
  );

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-3xl font-semibold text-ink">كل العقارات</h1>

      <div className="mt-6 flex flex-wrap gap-2">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setTypeFilter(t)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              typeFilter === t
                ? "border-ink bg-ink text-stone"
                : "border-ink/20 text-ink/70 hover:border-ink/40"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {filtered.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </div>
    </div>
  );
}
