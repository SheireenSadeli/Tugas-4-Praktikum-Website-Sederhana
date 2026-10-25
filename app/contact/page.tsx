import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Icon, { type IconName } from "@/components/Icon";
import PageHeader from "@/components/PageHeader";
import { contact } from "@/lib/site";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Hubungi TeraFum untuk bertanya soal aroma atau memesan parfum.",
};

const items: { icon: IconName; label: string; value: string }[] = [
  { icon: "mail", label: "Email", value: contact.email },
  { icon: "chat", label: "WhatsApp", value: contact.whatsapp },
  { icon: "pin", label: "Studio", value: contact.studio },
  { icon: "clock", label: "Jam layanan", value: contact.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in Touch"
        facts={[
          { icon: "clock", text: 'We’re here to help' },
          { icon: "mail", text: 'Find Us Online' },
        ]}
      >
        Ingin tahu lebih banyak tentang TeraFum?
        <br />
        <em>Tulis saja, kami balas secepatnya</em>
      </PageHeader>

      <section className="section">
        <div className={`container ${styles.layout}`}>
          <dl className={styles.info}>
            {items.map(({ icon, label, value }) => (
              <div key={label} className={styles.item}>
                <span className={styles.icon}>
                  <Icon name={icon} size={22} />
                </span>
                <div>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              </div>
            ))}
          </dl>

          <div className={styles.formCard}>
            <h2>Tulis pesanmu</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}