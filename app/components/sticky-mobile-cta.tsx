"use client";

import { ArrowUpRight, Images, MessageCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { whatsappUrl } from "./landing/data";

export function StickyMobileCta() {
  const pathname = usePathname();
  const isGalleryPage = pathname === "/galeri";
  const isLinkPage = pathname === "/link";

  // Hide sticky CTA on linktree page because it already has full screen CTA links
  if (isLinkPage) {
    return null;
  }

  return (
    <aside
      aria-label="Aksi cepat pemesanan"
      className="fixed inset-x-3 bottom-3 z-50 flex items-center gap-2 sm:hidden pb-[max(0.25rem,env(safe-area-inset-bottom))]"
    >
      {!isGalleryPage && (
        <Link
          href="/galeri"
          className="edge press-sm grid size-14 shrink-0 place-items-center rounded-full bg-sun text-ink shadow-pop"
          aria-label="Buka Galeri Foto"
        >
          <Images size={22} strokeWidth={2.4} />
        </Link>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="edge press flex h-14 flex-1 items-center justify-center gap-2.5 rounded-full bg-pink px-5 text-sm font-black text-white shadow-pop active:scale-[0.98]"
      >
        <MessageCircle aria-hidden="true" size={20} />
        <span>Pesan via WhatsApp</span>
        <ArrowUpRight aria-hidden="true" size={18} />
      </a>
    </aside>
  );
}
