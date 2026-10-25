"use client";

import { useState, type FormEvent } from "react";
import Button from "../Button";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [sentName, setSentName] = useState<string | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // Belum ada server: data hanya ditampilkan ulang sebagai konfirmasi.
    setSentName(String(data.get("nama") ?? ""));
    e.currentTarget.reset();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="nama">Nama</label>
        <input id="nama" name="nama" type="text" autoComplete="name" required />
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required />
      </div>

      <div className={styles.field}>
        <label htmlFor="pesan">Pesan</label>
        <textarea id="pesan" name="pesan" rows={5} required />
      </div>

      <Button type="submit" variant="accent">
        Kirim pesan
      </Button>

      {sentName !== null && (
        <p className={styles.status} role="status">
          Terima kasih, {sentName}. Pesanmu sudah kami catat dan akan kami balas lewat email.
        </p>
      )}
    </form>
  );
}
