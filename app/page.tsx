import { Benefits } from "./components/landing/benefits";
import { Footer, Header } from "./components/landing/brand";
import { Collections } from "./components/landing/collections";
import { instagramUrl } from "./components/landing/data";
import { Hero } from "./components/landing/hero";
import { siteUrl } from "./lib/site";
import { OrderSection } from "./components/landing/order";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "ANS Balon Singaraja",
  description: "Bucket balon, balon karakter, dan rangkaian bunga balon custom di Singaraja, Bali.",
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  telephone: "+6285645084993",
  priceRange: "Rp5.000+",
  areaServed: "Singaraja, Bali",
  sameAs: [instagramUrl],
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="konten-utama">
        <Hero />
        <Collections />
        <Benefits />
        <OrderSection />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
