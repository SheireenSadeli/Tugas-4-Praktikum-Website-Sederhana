import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import Icon from "@/components/Icon";
import LotusMark from "@/components/LotusMark";
import ProductGrid from "@/components/ProductGrid";
import ProductPhoto from "@/components/ProductPhoto";
import { formatRupiah, getProduct, products } from "@/lib/products";
import styles from "../product.module.css";
import stateStyles from "../../state.module.css";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/product/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return product
    ? { title: product.name, description: product.tagline }
    : { title: "Produk tidak ditemukan" };
}

/**
 * Halaman hanya merangkai kerangka. `params` (data dari URL) baru dibaca di
 * dalam komponen yang dibungkus Suspense, supaya navigasi bisa langsung
 * menampilkan fallback tanpa menunggu data URL.
 */
export default function ProductDetailPage({
  params,
}: PageProps<"/product/[slug]">) {
  return (
    <Suspense fallback={<DetailFallback />}>
      <ProductDetail params={params} />
    </Suspense>
  );
}

function DetailFallback() {
  return (
    <section className="section">
      <div className={stateStyles.state} role="status">
        <LotusMark size={56} className={stateStyles.pulse} />
        <p>Memuat produk...</p>
      </div>
    </section>
  );
}

async function ProductDetail({
  params,
}: {
  params: PageProps<"/product/[slug]">["params"];
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();

  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      <section
        className={styles.detailSection}
        style={{
          background: `color-mix(in srgb, ${product.tone.stage} 22%, var(--paper))`,
        }}
      >
        <div className="container">
          <Link
            href="/product"
            className={styles.back}
            aria-label="Kembali ke semua produk"
          >
            <Icon name="arrow" size={22} className={styles.backIcon} />
            <span className={styles.backLabel}>Kembali ke semua produk</span>
          </Link>

          <div className={styles.detail}>
            <div className={styles.stageWrap}>
              <ProductPhoto
                src={product.image}
                alt={`Foto parfum ${product.name}`}
                background={product.tone.stage}
                className={styles.stage}
              />
            </div>

            <div className={styles.info}>
              <h1>{product.name}</h1>
              <p className={styles.tagline}>{product.tagline}</p>
              <p className={styles.price}>
                {formatRupiah(product.price)} <span>untuk {product.size}</span>
              </p>
              <p className={styles.desc}>{product.description}</p>

              <dl className={styles.notes}>
                <div>
                  <Icon name="drop" size={22} />
                  <dt>Atas</dt>
                  <dd>{product.notes.top}</dd>
                </div>
                <div>
                  <LotusMark size={24} />
                  <dt>Hati</dt>
                  <dd>{product.notes.heart}</dd>
                </div>
                <div>
                  <Icon name="layers" size={22} />
                  <dt>Dasar</dt>
                  <dd>{product.notes.base}</dd>
                </div>
              </dl>

              <div className={styles.actions}>
                <Button href="/contact" variant="primary">
                  Tanya atau pesan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <h2 className={styles.others}>Aroma lainnya</h2>
          <ProductGrid products={others} />
        </div>
      </section>
    </>
  );
}
