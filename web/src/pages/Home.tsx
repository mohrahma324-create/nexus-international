import { Link } from "react-router-dom";
import { properties } from "../data/properties";
import PropertyCard from "../components/PropertyCard";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-ink/10 bg-ink">
        <div className="mx-auto max-w-6xl px-6 py-28 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-brass">
            استثمار عقاري بلا حدود
          </p>
          <h1 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight text-stone md:text-6xl">
            عقارك القادم قد يكون في مدينة لم تزرها بعد
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-stone/70">
            نربط المستثمرين العرب بأفضل الفرص العقارية عبر الخليج، مصر، وأوروبا — بشفافية كاملة وأدوات مالية تفاعلية.
          </p>
          <Link
            to="/properties"
            className="mt-10 inline-block rounded-full bg-brass px-8 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105"
          >
            استعرض العقارات
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="font-display text-2xl font-semibold text-ink">عقارات مختارة</h2>
          <Link to="/properties" className="text-sm font-medium text-brass hover:underline">
            عرض الكل ←
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
