import { Link } from "react-router-dom";
import type { Property } from "../data/properties";

function formatPrice(price: number, currency: string) {
  return new Intl.NumberFormat("ar", { style: "currency", currency }).format(price);
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link
      to={`/properties/${property.id}`}
      className="group block overflow-hidden rounded-lg border border-ink/10 bg-white transition-shadow hover:shadow-lg"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-brass">
          {property.type} · {property.city}, {property.country}
        </p>
        <h3 className="mt-1 font-display text-lg font-semibold text-ink">{property.title}</h3>
        <div className="mt-3 flex items-center justify-between text-sm text-ink/70">
          <span>{property.area} م²{property.bedrooms ? ` · ${property.bedrooms} غرف` : ""}</span>
          <span className="font-semibold text-ink">{formatPrice(property.price, property.currency)}</span>
        </div>
      </div>
    </Link>
  );
}
