import Button from "@/components/Button";
import styles from "./state.module.css";

export default function NotFound() {
  return (
    <div className={styles.state}>
      <h1>Halaman tidak ditemukan</h1>
      <p>Alamat yang kamu buka tidak ada atau sudah dipindahkan.</p>
      <Button href="/" variant="primary">
        Kembali ke Home
      </Button>
    </div>
  );
}
