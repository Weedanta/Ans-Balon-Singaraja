import Image from "next/image";
import { ArrowUpRight, Camera as Instagram, Clock3, MapPin, MessageCircle, PartyPopper } from "lucide-react";
import { Magnetic } from "../magnetic";
import { VelocityMarquee } from "../velocity-marquee";
import { hasLogoFile } from "../../lib/logo";
import { instagramUrl, whatsappUrl } from "./data";

export function BrandMark() {
  if (hasLogoFile()) {
    return (
      <span className="edge relative grid size-10 place-items-center overflow-hidden rounded-xl bg-white shadow-pop-sm">
        <Image src="/logo.png" alt="Logo ANS Balon Singaraja" fill sizes="40px" className="object-contain p-1" />
      </span>
    );
  }
  return (
    <span className="edge grid size-10 place-items-center rounded-xl bg-pink text-white shadow-pop-sm">
      <PartyPopper aria-hidden="true" size={20} strokeWidth={2.4} />
    </span>
  );
}

const tickerItems = ["Open everyday", "Singaraja, Bali", "Mulai Rp5.000", "By appointment"];

export function Header() {
  return (
    <>
      <a
        href="#konten-utama"
        className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition-transform focus:translate-y-0"
      >
        Lewati ke konten
      </a>
      <div className="marquee-band">
        <VelocityMarquee baseDuration={22} className="py-2">
          {[...Array(2)].flatMap((_, group) =>
            tickerItems.map((item) => (
              <span key={`${group}-${item}`} className="flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-paper sm:text-xs">
                {item}
                <span className="size-1.5 rounded-full bg-lime" aria-hidden="true" />
              </span>
            )),
          )}
        </VelocityMarquee>
      </div>
      <header className="sticky top-0 z-50 edge-b bg-paper">
        <nav aria-label="Navigasi utama" className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a
            href="#beranda"
            className="group flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink"
            aria-label="Ansbalon Singaraja, kembali ke beranda"
          >
            <BrandMark />
            <span className="font-display text-lg font-bold tracking-[-0.01em] text-ink">
              ansbalon<span className="text-pink">.</span>
            </span>
          </a>
          <div className="hidden items-center gap-2 text-sm font-bold text-ink md:flex">
            {[
              { href: "#koleksi", label: "Koleksi" },
              { href: "#keunggulan", label: "Keunggulan" },
              { href: "#cara-pesan", label: "Cara pesan" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 transition hover:-rotate-2 hover:bg-lime"
              >
                {link.label}
              </a>
            ))}
          </div>
          <Magnetic>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="press-sm edge inline-flex h-11 items-center gap-2 rounded-full bg-ink px-4 text-sm font-bold text-paper shadow-pop-sm sm:px-5"
            >
              <MessageCircle aria-hidden="true" size={17} />
              <span className="hidden sm:inline">WhatsApp</span>
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </Magnetic>
        </nav>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <>
      <footer className="halftone relative overflow-hidden bg-ink px-5 pb-28 pt-16 text-paper sm:px-8 sm:pb-14 lg:px-10">
        <div className="pointer-events-none absolute inset-0 bg-ink/92" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <p className="font-display text-[clamp(2.6rem,9vw,6.5rem)] font-bold leading-[0.92] tracking-[-0.03em]">
            Cerita meriahmu
            <br />
            <span className="text-lime">tinggal di-WA.</span>
          </p>
          <div className="mt-10 flex flex-col gap-8 border-t-[3px] border-paper/20 pt-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <BrandMark />
              <div>
                <p className="font-display font-bold tracking-[-0.01em]">ansbalon.</p>
                <p className="text-sm text-paper/60">Bucket balon penuh warna, Singaraja.</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-sm font-bold">
              <span className="sticker px-4 py-2 text-ink">
                <MapPin aria-hidden="true" size={15} />
                Singaraja, Bali
              </span>
              <span className="sticker px-4 py-2 text-ink">
                <Clock3 aria-hidden="true" size={15} />
                Open everyday
              </span>
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="sticker press-sm px-4 py-2 text-ink">
                <Instagram aria-hidden="true" size={15} />
                @ansbalon_singaraja
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="fixed inset-x-4 bottom-4 z-50 sm:hidden">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="edge press flex h-14 items-center justify-center gap-3 rounded-full bg-pink px-6 text-sm font-black text-white shadow-pop"
        >
          <MessageCircle aria-hidden="true" size={18} />
          Pesan via WhatsApp
          <ArrowUpRight aria-hidden="true" size={17} />
        </a>
      </div>
    </>
  );
}
