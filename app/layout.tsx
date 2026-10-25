import type { Metadata } from "next";
import { Marcellus, Hanken_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const marcellus = Marcellus({
  variable: "--font-marcellus",
  weight: "400",
  subsets: ["latin"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "TeraFum | Parfum beraroma teratai",
    template: "%s | TeraFum",
  },
  description:
    "TeraFum membuat parfum beraroma bunga teratai: segar, lembut, dan nyaman dipakai seharian.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${marcellus.variable} ${hanken.variable}`}>
      <body>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a className="skip-link" href="#konten">
          Lewati ke konten
        </a>
        <Navbar />
        <main id="konten">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
