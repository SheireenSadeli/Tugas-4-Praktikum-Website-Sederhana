import LotusMark from "../LotusMark";
import styles from "./Brand.module.css";

/** Logo teratai + nama TeraFum. Dipakai di Navbar dan Footer. */
export default function Brand() {
  return (
    <span className={styles.brand}>
      <LotusMark size={30} />
      <span>TeraFum</span>
    </span>
  );
}
