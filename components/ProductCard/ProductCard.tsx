import Link from "next/link";
import Icon from "../Icon";
import LotusMark from "../LotusMark";
import ProductPhoto from "../ProductPhoto";
import { formatRupiah, type Product } from "@/lib/products";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }: { product: Product }) {
  const { slug, name, tagline, price, size, image, tone, notes } = product;

  return (
    <Link href={`/product/${slug}`} className={styles.card}>
      <ProductPhoto
        src={image}
        alt={`Foto parfum ${name}`}
        background={tone.stage}
        className={styles.photo}
      >
        <span className={styles.badge}>
          <LotusMark size={16} />
          {notes.heart}
        </span>
      </ProductPhoto>
      <div className={styles.head}>
        <h3 className={styles.name}>{name}</h3>
        <span className={styles.go}>
          <Icon name="arrow" size={18} />
        </span>
      </div>
      <p className={styles.tagline}>{tagline}</p>
      <p className={styles.price}>
        {formatRupiah(price)} <span>untuk {size}</span>
      </p>
    </Link>
  );
}
