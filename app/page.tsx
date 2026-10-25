import Image from "next/image";
import Button from "@/components/Button";
import CtaBand from "@/components/CtaBand";
import FeatureStrip from "@/components/FeatureStrip";
import Icon from "@/components/Icon";
import LotusMark from "@/components/LotusMark";
import ProductGrid from "@/components/ProductGrid";
import ProductPhoto from "@/components/ProductPhoto";
import Reveal from "@/components/Reveal";
import { products } from "@/lib/products";
import styles from "./home.module.css";

const notes = [
  {
    term: "The First Bloom",
    tag: "FIRST IMPRESSION",
    tone: "sage",
    icon: <Icon name="drop" size={28} />,
    text: "Aroma segar dan ringan seperti embun yang menyentuh kelopak di pagi hari.",
    chips: ["Embun", "Jeruk bali", "Daun hijau"],
  },
  {
    term: "Heart of Lotus",
    tag: "THE ESSENCE",
    tone: "blush",
    icon: <LotusMark size={30} />,
    text: "Bunga teratai itu sendiri: lembut, bersih, dan sedikit berair.",
    chips: ["Putih", "Merah muda", "Biru"],
  },
  {
    term: "The Lasting Essence",
    tag: "LASTING IMPRESSION",
    tone: "lake",
    icon: <Icon name="layers" size={28} />,
    text: "Aroma dasar yang hangat dan mendalam, meninggalkan kesan lembut.",
    chips: ["Musk", "Amber", "Vetiver", "Vanila"],
  },
];

const facts = [
  { icon: "bottle", title: "50 ml", text: "Eau de parfum dalam botol 50 ml" },
  { icon: "drop", title: "Tiga aroma", text: "Pagi, Senja, dan Malam" },
  { icon: "leaf", title: "Satu bunga", text: "Semua berangkat dari teratai" },
] as const;

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.media}>
          <Image
            src="/images/teratai.jpg"
            alt="Bunga teratai merah muda mekar di kolam, dengan ikan koi berenang di sebelahnya"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.shade} />
        </div>

        <div className={`container ${styles.heroInner}`}>
          <div className={`${styles.heroText} rise-stagger`}>
            <h1>Discover Your Natural Elegance</h1>
            <p>
              Temukan aroma yang mencerminkan karakter unikmu bersama TeraFum
            </p>
            <div className={styles.actions}>
              <Button href="/product" variant="accent">
                Lihat produk
              </Button>
              <Button href="/about" variant="outline">
                Kenali TeraFum
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FeatureStrip items={[...facts]} />

      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <h2>Our Signature Scents</h2>
            <p>
              A scent for every side of you
            </p>
          </div>

          <ProductGrid products={products} />
        </div>
      </section>

      <section className="section section--deep">
        <div className={`container ${styles.journey}`}>
          <Reveal>
            <div className={styles.photoWrap}>
              <ProductPhoto
                src="/images/aroma.jpg"
                alt="Bahan-bahan aroma TeraFum"
                background="var(--sage)"
                label="Foto aroma"
                className={styles.journeyPhoto}
              />
            </div>
          </Reveal>

          <div>
            <h2>From Petal to Soul</h2>
            <p className={styles.journeyLead}>
              Discover the layers of fragrance, inspired by the beauty of the lotus
            </p>

            <ol className={styles.steps}>
              {notes.map(({ term, tag, text, icon, tone, chips }, i) => (
                <li key={term}>
                  <Reveal delay={i * 120} className={styles.step}>
                    <span className={`${styles.stepIcon} ${styles[tone]}`}>
                      {icon}
                    </span>
                    <div>
                      <p className={styles.stepTag}>{tag}</p>
                      <h3>{term}</h3>
                      <p>{text}</p>
                      <ul className={styles.chips}>
                        {chips.map((chip) => (
                          <li key={chip}>{chip}</li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CtaBand
        title="Not Sure Which Scent to Choose?"
        text="Ceritakan apa yang kamu inginkan dan temukan aroma yang cocok untukmu."
        href="/contact"
        label="Hubungi kami"
        image="/images/cta.jpg"
      />
    </>
  );
}