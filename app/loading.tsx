import LotusMark from "@/components/LotusMark";
import styles from "./state.module.css";

export default function Loading() {
  return (
    <div className={styles.state} role="status">
      <LotusMark size={56} className={styles.pulse} />
      <p>Memuat halaman...</p>
    </div>
  );
}
