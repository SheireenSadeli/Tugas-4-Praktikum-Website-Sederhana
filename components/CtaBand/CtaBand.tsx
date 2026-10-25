import type { CSSProperties } from "react";
import Button from "../Button";
import LotusMark from "../LotusMark";
import styles from "./CtaBand.module.css";

type Props = {
  title: string;
  text: string;
  href: string;
  label: string;
  /** Warna latar: "water" (biru) atau "deep" (hijau tua). */
  tone?: "water" | "deep";
  /** Foto latar, misalnya "/images/cta.jpg". Kalau filenya belum ada, latar berwarna tetap tampil. */
  image?: string;
  /** Tampilkan teratai besar yang melayang pelan di latar. */
  decor?: boolean;
};

/** Blok ajakan di bagian bawah halaman. Dipakai di Home dan About. */
export default function CtaBand({
  title,
  text,
  href,
  label,
  tone = "deep",
  image,
  decor = false,
}: Props) {
  const style = image
    ? ({ "--cta-image": `url(${image})` } as CSSProperties)
    : undefined;

  return (
    <section className={`${styles.band} ${styles[tone]}`} style={style}>
      {image && <div className={styles.photo} aria-hidden="true" />}
      <div className={styles.shade} aria-hidden="true" />
      {decor && <LotusMark size={360} className={styles.lotus} />}
      <div className={`container ${styles.inner}`}>
        <h2>{title}</h2>
        <p>{text}</p>
        <Button href={href} variant="accent">
          {label}
        </Button>
      </div>
    </section>
  );
}