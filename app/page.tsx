import { Benefits } from "./components/landing/benefits";
import { Footer, Header } from "./components/landing/brand";
import { Collections } from "./components/landing/collections";
import { Hero } from "./components/landing/hero";
import { OrderSection } from "./components/landing/order";
import { GalleryPreview } from "./components/gallery/gallery-preview";
import { StructuredData } from "./components/structured-data";
import { getStoreJsonLd } from "./lib/structured-data";

export default function Home() {
  return (
    <>
      <Header />
      <main id="konten-utama">
        <Hero />
        <Collections />
        <GalleryPreview />
        <Benefits />
        <OrderSection />
      </main>
      <Footer />
      <StructuredData data={getStoreJsonLd()} />
    </>
  );
}
