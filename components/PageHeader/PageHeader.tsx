import type { ReactNode } from "react";
import Image from "next/image";
import Icon, { type IconName } from "../Icon";
import LotusMark from "../LotusMark";
import styles from "./PageHeader.module.css";

type Fact = { icon: IconName; text: string };

type Props = {
  title: string;
  children?: ReactNode;
  /** Beberapa fakta singkat berbentuk lencana di bawah kalimat pembuka. */
  facts?: Fact[];
  /** Foto berbingkai lengkung di kanan header. Kalau `decor` kosong, bawaannya teratai.jpg. */
  image?: string;
  /**
   * Hiasan tanpa foto:
   * - "lotus": teratai merah muda di atas riak air
   * - "orbs": tiga bola kaca berwarna (Pagi, Senja, Malam)
   */
  decor?: "lotus" | "orbs";
};

/** Header halaman berlatar hijau tua: judul besar, kalimat pembuka, lencana fakta, dan hiasan di kanan. */
export default function PageHeader({ title, children, facts, image, decor }: Props) {
  const photo = decor ? undefined : (image ?? "/images/teratai.jpg");

  return (
    <header className={styles.header}>
      <div className={styles.art} aria-hidden="true">
        {decor && <span className={styles.rings} />}
        <span className={`${styles.ripples} ${decor === "lotus" ? styles.ripplesLotus : ""}`}>
          <span />
          <span />
          <span />
        </span>

        {photo && (
          <div className={styles.frame}>
            <Image
              src={photo}
              alt=""
              fill
              priority
              sizes="400px"
              className={styles.photo}
            />
          </div>
        )}

        {decor === "lotus" && <LotusMark size={380} className={styles.lotus} />}

        {decor === "orbs" && (
          <div className={styles.orbs}>
            <span />
            <span />
            <span />
          </div>
        )}
      </div>

      <div className={`container ${styles.inner} rise-stagger`}>
        <h1>{title}</h1>
        {children && <p className={styles.lead}>{children}</p>}
        {facts && (
          <ul className={styles.facts}>
            {facts.map(({ icon, text }) => (
              <li key={text}>
                <Icon name={icon} size={18} />
                {text}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}