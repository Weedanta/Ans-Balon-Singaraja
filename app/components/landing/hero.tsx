import Image from "next/image";
import { ArrowRight, Check, MapPin, Sparkles } from "lucide-react";
import { Reveal } from "../reveal";
import { PopReveal } from "../pop-reveal";
import { Magnetic } from "../magnetic";
import { Counter } from "../counter";
import { VelocityMarquee } from "../velocity-marquee";
import { whatsappUrl } from "./data";

export function Hero() {
  return (
    <>
      <section id="beranda" className="halftone relative isolate flex md:h-min-h-screen lg:h-[85vh] items-center overflow-hidden bg-pink edge-b">
        <div className="absolute inset-0 bg-pink/94" aria-hidden="true" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-5 py-4 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10">
          <div className="relative z-10 max-w-2xl">
            <Reveal>
              <div className="eyebrow-tag bg-sun text-ink">
                <Sparkles aria-hidden="true" size={13} />
                Small gift, big smile
              </div>
            </Reveal>
            <PopReveal delay={0.05} className="mt-3">
              <h1 className="max-w-[720px] text-balance font-display text-[clamp(2.2rem,5vw,4.2rem)] font-bold leading-[0.98] tracking-[-0.02em] text-white">
                Bikin momen{" "}
                <span className="relative inline-block -rotate-2 bg-lime px-3 pb-2 pt-0.5 leading-[1.15] text-ink">
                  kecil
                </span>{" "}
                jadi paling meriah.
              </h1>
            </PopReveal>
            <Reveal delay={0.24}>
              <p className="mt-4 max-w-xl text-pretty text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                Bucket balon dan balon karakter penuh warna untuk ulang tahun,
                wisuda, anniversary, atau kejutan spontan yang ingin dikenang.
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Magnetic>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="edge press group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-ink px-7 text-sm font-black text-paper shadow-pop"
                  >
                    Pesan via WhatsApp
                    <ArrowRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </Magnetic>
                <a
                  href="#koleksi"
                  className="edge press inline-flex h-14 items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-black text-ink shadow-pop"
                >
                  Lihat koleksi
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-white">
                {["Bisa custom", "Pickup & delivery"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2">
                    <span className="edge grid size-5 place-items-center rounded-full bg-lime text-ink">
                      <Check aria-hidden="true" size={12} strokeWidth={3.5} />
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal className="relative mx-auto w-full max-w-[560px] lg:max-w-none" delay={0.16}>
            <div className="edge absolute -left-4 top-[10%] z-20 hidden rotate-[-6deg] rounded-2xl bg-white px-4 py-3 shadow-pop sm:block lg:-left-9">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-ink/60">Mulai dari</p>
              <p className="font-display text-lg font-bold tracking-tight text-ink">
                <Counter to={5000} prefix="Rp" />
              </p>
            </div>
            <div className="edge absolute -right-2 bottom-[10%] z-20 rotate-[5deg] rounded-2xl bg-sun px-4 py-3 text-ink shadow-pop sm:right-4 lg:-right-6">
              <div className="flex items-center gap-2 text-sm font-black">
                <MapPin aria-hidden="true" size={17} />
                Singaraja, Bali
              </div>
            </div>
            <div className="edge relative mx-auto aspect-[4/5] max-h-[min(640px,58svh)] rotate-1 overflow-hidden rounded-[30px] bg-white p-3 shadow-pop-lg sm:p-4">
              <div className="relative h-full w-full overflow-hidden rounded-[18px]">
                <Image
                  src="/hero-balon.webp"
                  alt="Rangkaian hadiah balon warna pastel dengan balon beruang, hati, dan bunga"
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="object-cover object-[50%_48%]"
                />
              </div>
            </div>
            <span className="balloon-bob edge absolute -right-4 -top-8 size-16 rounded-full bg-lime shadow-pop-sm sm:right-2 sm:size-20" aria-hidden="true" />
            <span className="balloon-bob-delayed edge absolute -bottom-3 -left-3 size-14 rounded-full bg-violet shadow-pop-sm sm:-left-8 sm:size-[4.5rem]" aria-hidden="true" />
          </Reveal>
        </div>
      </section>
      <div className="edge-b bg-paper py-4" aria-hidden="true">
        <VelocityMarquee baseDuration={30}>
          {[...Array(2)].flatMap((_, group) =>
            ["Birthday", "Graduation", "Anniversary", "Just because", "Custom surprise"].map((item) => (
              <span key={`${group}-${item}`} className="flex items-center gap-8 text-xs font-black uppercase tracking-[0.22em] text-ink sm:text-sm">
                {item}
                <Sparkles size={16} className="text-pink" />
              </span>
            )),
          )}
        </VelocityMarquee>
      </div>
    </>
  );
}
