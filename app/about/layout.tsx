import CtaBand from "@/components/CtaBand";

export default function AboutLayout({ children }: LayoutProps<"/about">) {
  return (
    <>
      {children}
      <CtaBand
        title="Ready to Experience the Scent of Lotus?"
        text="Lihat tiga aroma TeraFum dan pilih yang paling cocok untukmu."
        href="/product"
        label="Lihat produk"
        image="/images/cta.jpg"
      />
    </>
  );
}