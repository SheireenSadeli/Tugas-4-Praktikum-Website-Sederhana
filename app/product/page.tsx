import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ProductGrid from "@/components/ProductGrid";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Product",
  description: "Tiga parfum TeraFum: Teratai Pagi, Teratai Senja, dan Teratai Malam.",
};

export default function ProductPage() {
  return (
    <>
      <PageHeader
        decor="orbs"
        title="Three Lotus Scents"
        facts={[
          { icon: "bottle", text: "Eau de parfum 50 ml" },
          { icon: "drop", text: "Pagi, Senja, Malam" },
        ]}
      >
        Semua parfum TeraFum berupa eau de parfum 50 ml.
        <br />
        <em>Pilih satu untuk melihat informasi aromanya</em>
      </PageHeader>

      <section className="section">
        <div className="container">
          <ProductGrid products={products} />
        </div>
      </section>
    </>
  );
}