import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import LotusMark from "@/components/LotusMark";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "Cerita di balik TeraFum, parfum beraroma bunga teratai.",
};

const values = [
  {
    title: "Satu Bunga",
    tone: "sage",
    icon: <LotusMark size={30} />,
    text: "Kami hanya membuat aroma yang berasal dari teratai. Bahan lain hadir untuk mendukungnya, bukan menutupinya.",
  },
  {
    title: "Dipilih Satu per Satu",
    tone: "blush",
    icon: <Icon name="leaf" size={28} />,
    text: "Setiap bahan dicoba berulang kali sebelum masuk ke botol. Kalau belum terasa pas, kami akan ulang hingga sempurna.",
  },
  {
    title: "Nyaman di Setiap Momen",
    tone: "lake",
    icon: <Icon name="bottle" size={28} />,
    text: "Kemasan sederhana, wangi yang tidak menyengat. Kami ingin parfum yang nyaman dipakai ke kantor, kampus, atau sekadar jalan sore.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        decor="lotus"
        title="Our Story"
        facts={[
          { icon: "leaf", text: "Carefully Curated" },
          { icon: "bottle", text: "Three Scents, 50 ml" },
        ]}
      >
        TeraFum lahir dari satu pertanyaan sederhana:
        <br />
        <em>Seperti apa wangi teratai yang baru mekar?</em>
      </PageHeader>

      <section className="section">
        <div className={`container ${styles.story}`}>
          <Reveal className={styles.collage}>
            <div className={styles.photo}>
              <Image
                src="/images/teratai.jpg"
                alt="Bunga teratai merah muda di permukaan kolam yang jernih"
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
                className={styles.photoImage}
              />
            </div>
            <div className={styles.photoSmall}>
              <Image
                src="/images/teratai.jpg"
                alt=""
                fill
                sizes="240px"
                className={styles.photoSmallImage}
              />
            </div>
          </Reveal>

          <Reveal delay={150} className={styles.text}>
            <p className={styles.eyebrow}>Cerita kami</p>

            <p className={styles.leadLine}>
              Teratai tumbuh dari lumpur, tetapi mekar bersih dan tenang di
              atas air
            </p>

            <div className={styles.body}>
              <p>
                Wanginya halus, sedikit segar, dan keunikannya sulit dituangkan ke dalam botol. 
                Itulah yang membuat kami ingin mencobanya.
              </p>
              <p>
                Nama TeraFum diambil dari dua kata: <em>teratai</em> dan <em>parfum</em>. Kami
                meracik tiga aroma, yaitu Pagi, Senja, dan Malam.
              </p>
            </div>

            <blockquote className={styles.quote}>
              <LotusMark size={28} />
              <p>
                <strong>Kami memilih untuk tetap sederhana.</strong>
                Dengan jumlah produk yang sedikit, kami bisa menjaga setiap
                botol tetap sama baiknya.
              </p>
            </blockquote>

            <ul className={styles.stats}>
              <li>
                <strong>1</strong>
                <span>Bunga: Teratai</span>
              </li>
              <li>
                <strong>3</strong>
                <span>Aroma: Pagi, Senja, Malam</span>
              </li>
              <li>
                <strong>50 ml</strong>
                <span>Eau De Parfum</span>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <div className={styles.valuesHead}>
            <p className={styles.eyebrow}>OUR VALUES</p>
            <h2>Komitmen yang Kami Pegang</h2>
            <p className={styles.valuesIntro}>
              Tiga hal sederhana yang dijaga pada setiap botol
            </p>
          </div>
          <div className={styles.values}>
            {values.map(({ title, text, icon, tone }, i) => (
              <Reveal key={title} delay={i * 120}>
                <div className={`${styles.value} ${styles[tone]}`}>
                  <div className={styles.valueTop}>
                    <span className={styles.valueIcon}>{icon}</span>
                    <span className={styles.valueNumber} aria-hidden="true">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
