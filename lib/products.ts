export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  size: string;
  price: number;
  image: string;
  notes: { top: string; heart: string; base: string };
  tone: { stage: string };
};

export const products: Product[] = [
  {
    slug: "teratai-pagi",
    image: "/images/products/teratai-pagi.jpg",
    name: "Teratai Pagi",
    tagline: "Segar seperti embun di atas kelopak.",
    description:
      "Pembuka yang cerah untuk hari yang panjang. Teratai putih berpadu dengan jeruk bali dan embun, lalu mengering menjadi musk yang bersih.",
    size: "50 ml",
    price: 285000,
    notes: {
      top: "Embun, jeruk bali",
      heart: "Teratai Putih",
      base: "Musk putih",
    },
    tone: { stage: "#DDE3B0" },
  },
  {
    slug: "teratai-senja",
    image: "/images/products/teratai-senja.jpg",
    name: "Teratai Senja",
    tagline: "Hangat dan lembut, seperti langit di atas kolam.",
    description:
      "Teratai merah muda bertemu mawar dan sedikit amber. Manis tapi tidak berat, cocok untuk pertemuan sore dan makan malam.",
    size: "50 ml",
    price: 315000,
    notes: {
      top: "Pir, kelopak mawar",
      heart: "Teratai Merah Muda",
      base: "Amber, kayu cendana",
    },
    tone: { stage: "#F1D2C6" },
  },
  {
    slug: "teratai-malam",
    image: "/images/products/teratai-malam.jpg",
    name: "Teratai Malam",
    tagline: "Tenang dan dalam, seperti air di malam hari.",
    description:
      "Teratai biru yang gelap dan berair, diikat vetiver dan vanila. Aroma yang menemani sampai larut malam.",
    size: "50 ml",
    price: 335000,
    notes: {
      top: "Daun hijau, air",
      heart: "Teratai Hijau",
      base: "Vetiver, vanila",
    },
    tone: { stage: "#0A3323" },
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function formatRupiah(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}
