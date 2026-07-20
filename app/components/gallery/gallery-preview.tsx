import { ArrowUpRight, Camera, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { previewGalleryItems } from "./gallery-data";

const frameStyles = [
  "-rotate-2 lg:-translate-y-1",
  "rotate-2 lg:translate-y-9",
  "-rotate-1 lg:translate-y-2",
  "rotate-1 lg:translate-y-10",
  "-rotate-2 lg:translate-y-4",
  "rotate-2 lg:-translate-y-2",
] as const;

const labelStyles = [
  "bg-lime",
  "bg-sun",
  "bg-pink text-white",
  "bg-white",
  "bg-lime",
  "bg-sun",
] as const;

export function GalleryPreview() {
  return (
    <section id="galeri" className="halftone relative overflow-hidden bg-cobalt px-5 py-20 text-white edge-b sm:px-8 sm:py-24 lg:px-10">
      <div className="pointer-events-none absolute inset-0 bg-cobalt/94" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div>
            <div>
              <p className="eyebrow-tag bg-lime text-ink">
                <Camera aria-hidden="true" size={13} />
                Dari studio kecil kami
              </p>
            </div>
            <div className="mt-4">
              <h2 className="max-w-4xl text-balance font-display text-4xl font-bold leading-[1.02] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
                Dibuat satu-satu,
                <br />
                <span className="inline-block -rotate-1 bg-pink px-3 pb-2 pt-1 text-white edge">
                  untuk cerita yang beda.
                </span>
              </h2>
            </div>
          </div>
          <div className="max-w-md">
            <p className="text-pretty leading-7 text-white/80">
              Intip beberapa rangkaian yang pernah kami siapkan untuk ulang
              tahun, wisuda, dan kejutan kecil di Singaraja.
            </p>
            <Link
              href="/galeri"
              className="edge press mt-5 inline-flex h-12 items-center gap-2 rounded-full bg-white px-5 text-sm font-black text-ink shadow-pop"
            >
              Lihat semua karya
              <ArrowUpRight aria-hidden="true" size={17} />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 pb-8 sm:grid-cols-3 lg:grid-cols-12 lg:gap-4 lg:pb-12">
          {previewGalleryItems.map((item, index) => (
            <div
              key={item.id}
              className={"relative lg:col-span-2 " + frameStyles[index]}
            >
              <div className="edge relative aspect-[3/4] overflow-hidden rounded-[22px] bg-white p-2 shadow-pop sm:p-3">
                <div className="relative h-full overflow-hidden rounded-[13px] bg-paper">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    placeholder="blur"
                    sizes="(max-width: 639px) 44vw, (max-width: 1023px) 29vw, 15vw"
                    className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
              </div>
              <span
                className={"edge absolute -bottom-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-ink shadow-pop-sm " + labelStyles[index]}
              >
                <Sparkles aria-hidden="true" size={11} />
                Karya {item.number}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
