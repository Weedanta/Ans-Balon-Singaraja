import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Camera as Instagram,
  Clock3,
  Images,
  MapPin,
  MessageCircle,
  PartyPopper,
  Sparkles,
} from "lucide-react";

import { galleryItems } from "../components/gallery/gallery-data";
import { instagramUrl, tiktokUrl, whatsappUrl } from "../components/landing/data";
import { Reveal } from "../components/reveal";
import { PopReveal } from "../components/pop-reveal";
import { TiktokIcon } from "../components/tiktok-icon";
import { hasLogoFile } from "../lib/logo";
import { siteName } from "../lib/site";

const title = "Semua Tautan ANS Balon Singaraja";
const description =
  "Pesan via WhatsApp, lihat galeri karya, atau ikuti Instagram & TikTok ANS Balon Singaraja — semua di satu halaman.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/link" },
  openGraph: {
    title,
    description,
    url: "/link",
    siteName,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const links = [
  {
    label: "Pesan via WhatsApp",
    sublabel: "Chat langsung, biasanya balas cepat",
    href: whatsappUrl,
    icon: MessageCircle,
    bg: "bg-ink",
    text: "text-paper",
    rotate: "-rotate-1",
    external: true,
  },
  {
    label: "Galeri Karya",
    sublabel: `${galleryItems.length} rangkaian tersimpan`,
    href: "/galeri",
    icon: Images,
    bg: "bg-sun",
    text: "text-ink",
    rotate: "rotate-1",
    external: false,
  },
  {
    label: "Instagram",
    sublabel: "@ansbalon_singaraja",
    href: instagramUrl,
    icon: Instagram,
    bg: "bg-violet",
    text: "text-white",
    rotate: "-rotate-1",
    external: true,
  },
  {
    label: "TikTok",
    sublabel: "@ansbalon_singaraja",
    href: tiktokUrl,
    icon: TiktokIcon,
    bg: "bg-cobalt",
    text: "text-white",
    rotate: "rotate-1",
    external: true,
  },
  {
    label: "Kunjungi Website",
    sublabel: "Koleksi lengkap & cara pesan",
    href: "/",
    icon: Sparkles,
    bg: "bg-paper",
    text: "text-ink",
    rotate: "-rotate-1",
    external: false,
  },
] as const;

export default function LinkPage() {
  return (
    <main className="halftone relative flex h-svh flex-col bg-pink">
      <div className="pointer-events-none absolute inset-0 bg-pink/94" aria-hidden="true" />
      <div className="relative flex flex-1 flex-col overflow-y-auto px-5 sm:px-8">
        <div className="mx-auto my-auto w-full max-w-md py-16">
        <Reveal className="flex flex-col items-center text-center">
          {hasLogoFile() ? (
            <span className="edge relative size-20 overflow-hidden rounded-[24px] bg-white shadow-pop-lg">
              <Image src="/logo.png" alt={`Logo ${siteName}`} fill sizes="80px" className="object-cover" />
            </span>
          ) : (
            <span className="edge grid size-20 place-items-center rounded-[24px] bg-pink-deep text-white shadow-pop-lg">
              <PartyPopper aria-hidden="true" size={34} strokeWidth={2.4} />
            </span>
          )}
          <h1 className="mt-5 font-display text-2xl font-bold tracking-[-0.02em] text-white">
            ansbalon<span className="text-lime">.</span>
          </h1>
          <p className="mt-2 max-w-xs text-pretty leading-6 text-white/85">
            Bucket balon & balon karakter custom untuk momen meriahmu.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-bold">
            <span className="sticker px-3 py-1.5 text-ink">
              <MapPin aria-hidden="true" size={13} />
              Singaraja, Bali
            </span>
            <span className="sticker px-3 py-1.5 text-ink">
              <Clock3 aria-hidden="true" size={13} />
              Open everyday
            </span>
          </div>
        </Reveal>

        <div className="mt-9 flex flex-col gap-4">
          {links.map((item, index) => {
            const Icon = item.icon;
            const className = `edge press group flex items-center gap-4 rounded-[22px] ${item.bg} px-5 py-4 shadow-pop ${item.rotate}`;
            const content = (
              <>
                <span className="edge grid size-11 shrink-0 place-items-center rounded-2xl bg-white text-ink transition-transform duration-500 group-hover:-rotate-6">
                  <Icon aria-hidden="true" size={20} />
                </span>
                <span className="min-w-0 flex-1 text-left">
                  <span className={`block font-display text-base font-bold tracking-[-0.01em] ${item.text}`}>
                    {item.label}
                  </span>
                  <span className={`block truncate text-sm ${item.text} opacity-80`}>{item.sublabel}</span>
                </span>
                <ArrowUpRight aria-hidden="true" size={18} className={`shrink-0 ${item.text} opacity-80`} />
              </>
            );

            return (
              <PopReveal key={item.label} delay={index * 0.06}>
                {item.external ? (
                  <a href={item.href} target="_blank" rel="noreferrer" className={className}>
                    {content}
                  </a>
                ) : (
                  <Link href={item.href} className={className}>
                    {content}
                  </Link>
                )}
              </PopReveal>
            );
          })}
        </div>

        <Reveal delay={0.3} className="mt-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
            ANS Balon Singaraja &middot; Mulai Rp5.000
          </p>
        </Reveal>
        </div>
      </div>
    </main>
  );
}
