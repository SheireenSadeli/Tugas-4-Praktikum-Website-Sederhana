import Icon, { type IconName } from "../Icon";
import styles from "./FeatureStrip.module.css";

type Item = { icon: IconName; title: string; text: string };

/** Kartu ringkas berisi tiga fakta singkat. Menumpang di tepi bawah hero. */
export default function FeatureStrip({ items }: { items: Item[] }) {
  return (
    <div className={`container ${styles.wrap}`}>
      <ul className={styles.strip}>
        {items.map(({ icon, title, text }) => (
          <li key={title} className={styles.item}>
            <span className={styles.icon}>
              <Icon name={icon} size={24} />
            </span>
            <div>
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
