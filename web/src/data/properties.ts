export interface Property {
  id: string;
  title: string;
  city: string;
  country: string;
  price: number;
  currency: string;
  type: "شقة" | "فيلا" | "أرض" | "مكتب تجاري";
  area: number;
  bedrooms?: number;
  image: string;
}

// Placeholder data — replace with a live Supabase query once
// SUPABASE_URL / keys are configured (see backend/functions/properties.js).
export const properties: Property[] = [
  {
    id: "1",
    title: "بنتهاوس إطلالة بحرية",
    city: "دبي",
    country: "الإمارات",
    price: 4200000,
    currency: "AED",
    type: "شقة",
    area: 210,
    bedrooms: 3,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
  },
  {
    id: "2",
    title: "فيلا خاصة بحديقة",
    city: "الرياض",
    country: "السعودية",
    price: 6800000,
    currency: "SAR",
    type: "فيلا",
    area: 480,
    bedrooms: 5,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=1200",
  },
  {
    id: "3",
    title: "أرض استثمارية على الطريق الرئيسي",
    city: "القاهرة الجديدة",
    country: "مصر",
    price: 2100000,
    currency: "EGP",
    type: "أرض",
    area: 600,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200",
  },
];
