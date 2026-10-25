"use client";

import Button from "@/components/Button";
import styles from "./state.module.css";

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className={styles.state}>
      <h1>Ada yang tidak berjalan</h1>
      <p>Halaman ini gagal dimuat. Coba muat ulang.</p>
      <Button variant="primary" onClick={reset}>
        Muat ulang
      </Button>
    </div>
  );
}
