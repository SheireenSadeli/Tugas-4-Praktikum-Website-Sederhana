import ProductCard from "../ProductCard";
import Reveal from "../Reveal";
import type { Product } from "@/lib/products";
import styles from "./ProductGrid.module.css";

/** Deretan kartu produk. Dipakai di Home, halaman Product, dan detail produk. */
export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className={styles.grid}>
      {products.map((product, i) => (
        <Reveal key={product.slug} delay={i * 120}>
          <ProductCard product={product} />
        </Reveal>
      ))}
    </div>
  );
}
