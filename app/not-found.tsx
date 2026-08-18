import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Images, MessageCircle } from "lucide-react";
import { Footer, Header } from "./components/landing/brand";
import { buildWhatsappUrl } from "./components/landing/data";

export const metadata: Metadata = {
  title: "404: Halaman Tidak Ditemukan",
  description: "Halaman yang Anda tuju tidak ditemukan atau sudah berpindah alamat.",
};

export default function NotFound() {
  const whatsappHelpUrl = buildWhatsappUrl(
    "Halo ANS Balon Singaraja! Saya tersesat di halaman website dan butuh info pesanan balon 🎈",
  );

  return (
    <>
      <Header />
      <main id="konten-utama" className="flex min-h-[calc(100vh-78px)] flex-col justify-between bg-paper">
        <section className="halftone relative isolate overflow-hidden px-5 py-16 sm:px-8 sm:py-24 lg:px-10">
          <div className="pointer-events-none absolute inset-0 bg-paper/90" aria-hidden="true" />

          <div className="relative mx-auto max-w-3xl text-center">
            {/* 404 Badge */}
            <div className="inline-flex items-center justify-center">
              <div className="edge relative -rotate-3 rounded-[32px] bg-pink px-8 py-4 shadow-pop-lg sm:px-12 sm:py-6">
                <span className="font-display text-[clamp(4.5rem,14vw,8.5rem)] font-extrabold leading-none tracking-tight text-white">
                  404
                </span>
              </div>
            </div>

            {/* Error Message */}
            <div className="mt-8">
              <h1 className="text-balance font-display text-[clamp(1.8rem,5vw,3.2rem)] font-bold leading-tight tracking-tight text-ink">
                Waduh, Balonnya <span className="bg-lime px-2.5 py-0.5 text-ink -rotate-1 inline-block">Terbang Terlalu Jauh!</span>
              </h1>
              <p className="mt-4 text-pretty text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">
                Halaman yang kamu cari mungkin salah ketik, sudah berpindah alamat,
                atau sedang dirakit di workshop ANS Balon Singaraja.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <Link
                href="/"
                className="edge press inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-ink px-7 text-sm font-black text-paper shadow-pop sm:w-auto"
              >
                <ArrowLeft aria-hidden="true" size={18} />
                Kembali ke Beranda
              </Link>
              <Link
                href="/galeri"
                className="edge press inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-lime px-7 text-sm font-black text-ink shadow-pop sm:w-auto"
              >
                <Images aria-hidden="true" size={18} />
                Jelajahi Galeri Balon
              </Link>
              <a
                href={whatsappHelpUrl}
                target="_blank"
                rel="noreferrer"
                className="edge press inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-full bg-pink px-7 text-sm font-black text-white shadow-pop sm:w-auto"
              >
                <MessageCircle aria-hidden="true" size={18} />
                Tanya Admin WA
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
