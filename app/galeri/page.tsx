import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Camera, Images, Sparkles } from "lucide-react";
import Link from "next/link";

import { galleryItems } from "../components/gallery/gallery-data";
import { GalleryGrid } from "../components/gallery/gallery-grid";
import { Footer, Header } from "../components/landing/brand";
import { instagramUrl } from "../components/landing/data";
import { StructuredData } from "../components/structured-data";
import { siteName } from "../lib/site";
import { getGalleryJsonLd } from "../lib/structured-data";

export const metadata: Metadata = {
  title: "Galeri Karya Balon Custom di Singaraja",
  description:
    "Jelajahi koleksi bucket balon, balon karakter, dan hadiah custom karya ANS Balon Singaraja di Bali.",
  keywords: [
    "galeri balon custom Singaraja",
    "bucket balon Singaraja",
    "balon karakter Singaraja",
    "hadiah custom Bali",
    "ANS Balon Singaraja",
  ],
  alternates: { canonical: "/galeri" },
  openGraph: {
    title: "Galeri Karya Balon Custom di Singaraja",
    description:
      "Jelajahi koleksi bucket balon, balon karakter, dan hadiah custom karya ANS Balon Singaraja di Bali.",
    url: "/galeri",
    siteName,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Galeri Karya Balon Custom di Singaraja",
    description:
      "Jelajahi koleksi bucket balon, balon karakter, dan hadiah custom karya ANS Balon Singaraja di Bali.",
  },
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main id="konten-utama">
        <section className="halftone relative overflow-hidden bg-pink px-5 py-16 text-white edge-b sm:px-8 sm:py-20 lg:px-10">
          <div className="pointer-events-none absolute inset-0 bg-pink/94" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl">
            <Link
              href="/#galeri"
              className="edge press-sm inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black text-ink shadow-pop-sm"
            >
              <ArrowLeft aria-hidden="true" size={16} />
              Kembali ke beranda
            </Link>
            <div className="mt-9 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="eyebrow-tag bg-lime text-ink">
                  <Camera aria-hidden="true" size={13} />
                  Album ANS Balon
                </p>
                <h1 className="mt-4 max-w-5xl text-balance font-display text-[clamp(2.8rem,8vw,6.8rem)] font-bold leading-[0.9] tracking-[-0.035em]">
                  Kecil bentuknya,
                  <br />
                  <span className="text-lime">besar ceritanya.</span>
                </h1>
              </div>
              <div className="edge rotate-2 rounded-[24px] bg-sun px-6 py-5 text-ink shadow-pop-lg">
                <div className="flex items-center gap-3">
                  <Images aria-hidden="true" size={26} />
                  <div>
                    <p className="font-display text-3xl font-bold leading-none">
                      {galleryItems.length}
                    </p>
                    <p className="mt-1 text-xs font-black uppercase tracking-[0.14em]">
                      karya tersimpan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-paper px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="eyebrow-tag bg-sun text-ink">
                  <Sparkles aria-hidden="true" size={13} />
                  Semua pernah dirayakan
                </p>
                <h2 className="mt-4 max-w-3xl text-balance font-display text-4xl font-bold tracking-[-0.02em] text-ink sm:text-5xl">
                  Pilih foto untuk melihat lebih dekat.
                </h2>
              </div>
              <p className="max-w-sm leading-7 text-ink/70">
                Setiap rangkaian dibuat dengan warna dan detail yang disesuaikan
                untuk penerimanya.
              </p>
            </div>

            <GalleryGrid items={galleryItems} />

            <div className="halftone edge relative mt-20 overflow-hidden rounded-[30px] bg-violet p-7 text-white shadow-pop-lg sm:p-10">
              <div className="pointer-events-none absolute inset-0 bg-violet/92" aria-hidden="true" />
              <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-lime">
                    Masih mau lihat-lihat?
                  </p>
                  <h2 className="mt-2 max-w-2xl font-display text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
                    Karya terbaru selalu mampir dulu di Instagram.
                  </h2>
                </div>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="edge press inline-flex h-13 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-black text-ink shadow-pop"
                >
                  Buka Instagram
                  <ArrowUpRight aria-hidden="true" size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StructuredData
        data={getGalleryJsonLd(
          galleryItems.map((item) => ({ src: item.src.src, alt: item.alt })),
        )}
      />
    </>
  );
}
