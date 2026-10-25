"use client";

import { useState, type ReactNode } from "react";
import LotusMark from "../LotusMark";
import styles from "./ProductPhoto.module.css";

type Props = {
  src: string;
  alt: string;
  background: string;
  className?: string;
  /** Teks di bingkai kosong saat foto belum ada. */
  label?: string;
  /** Isi tambahan di atas foto, misalnya lencana. */
  children?: ReactNode;
};

/**
 * Bingkai foto produk berbentuk lengkung.
 * Taruh foto di public/images/products/<slug>.jpg (lihat lib/products.ts).
 * Kalau file belum ada, bingkai menampilkan latar berwarna dengan ikon teratai.
 */
export default function ProductPhoto({ src, alt, background, className = "", label = "Foto produk", children }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`${styles.frame} ${className}`} style={{ background }}>
      {failed ? (
        <div className={styles.empty}>
          <LotusMark size={44} />
          <span>{label}</span>
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className={styles.photo}
          loading="lazy"
          onError={() => setFailed(true)}
          ref={(el) => {
            // Menangani gambar yang sudah gagal sebelum React sempat terpasang.
            if (el && el.complete && el.naturalWidth === 0) setFailed(true);
          }}
        />
      )}
      {children}
    </div>
  );
}