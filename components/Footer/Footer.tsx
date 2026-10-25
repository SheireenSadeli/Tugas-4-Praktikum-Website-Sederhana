import Link from "next/link";
import Brand from "../Brand";
import LotusMark from "../LotusMark";
import { contact } from "@/lib/site";
import styles from "./Footer.module.css";

const menu = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/product", label: "Product" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <LotusMark size={300} className={styles.watermark} />

      <div className={`container ${styles.inner}`}>
        <div className={styles.about}>
          <p className={styles.brand}>
            <Brand />
          </p>
          <p>Parfum beraroma teratai, dibuat untuk hari yang tenang.</p>
        </div>

        <nav aria-label="Menu footer">
          <h2 className={styles.title}>Menu</h2>
          <ul className={styles.links}>
            {menu.map(({ href, label }) => (
              <li key={href}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={styles.title}>Kontak</h2>
          <ul className={styles.links}>
            <li>{contact.email}</li>
            <li>{contact.whatsapp}</li>
            <li>{contact.studio}</li>
          </ul>
        </div>
      </div>

      <div className={`container ${styles.copy}`}>
        © 2026 TeraFum. Semua hak dilindungi.
      </div>
    </footer>
  );
}
