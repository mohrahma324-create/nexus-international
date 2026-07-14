import { useParams, Link } from "react-router-dom";
import { properties } from "../data/properties";

function formatPrice(price: number, currency: string) {
  return new Intl.NumberFormat("ar", { style: "currency", currency }).format(price);
}

export default function PropertyDetail() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <p className="text-ink/70">لم يتم العثور على هذا العقار.</p>
        <Link to="/properties" className="mt-4 inline-block text-brass hover:underline">
          العودة إلى كل العقارات
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <img src={property.image} alt={property.title} className="aspect-video w-full rounded-lg object-cover" />
      <p className="mt-6 text-sm font-medium uppercase tracking-wide text-brass">
        {property.type} · {property.city}, {property.country}
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-ink">{property.title}</h1>
      <div className="mt-4 flex gap-6 text-ink/70">
        <span>{property.area} م²</span>
        {property.bedrooms && <span>{property.bedrooms} غرف نوم</span>}
      </div>
      <p className="mt-6 font-display text-2xl font-semibold text-ink">
        {formatPrice(property.price, property.currency)}
      </p>

      <Link
        to="/contact"
        className="mt-8 inline-block rounded-full bg-ink px-8 py-3 text-sm font-semibold text-stone transition-transform hover:scale-105"
      >
        اطلب معاينة
      </Link>
    </div>
  );
}
