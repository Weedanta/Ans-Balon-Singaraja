import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../reveal";
import { PopReveal } from "../pop-reveal";
import { TiltCard } from "../tilt-card";
import { collections, moments } from "./data";

export function Collections() {
  return (
    <>
      <section id="koleksi" className="bg-paper px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Reveal>
                <p className="eyebrow-tag bg-sun text-ink">Pilih yang bikin senyum</p>
              </Reveal>
              <PopReveal delay={0.05} className="mt-4">
                <h2 className="max-w-3xl text-balance font-display text-4xl font-bold tracking-[-0.02em] text-ink sm:text-5xl lg:text-6xl">
                  Satu balon, banyak cara
                  <br />
                  untuk bilang{" "}
                  <span className="inline-block -rotate-2 bg-pink px-3 pb-2 pt-0.5 leading-[1.15] text-white">
                    kamu spesial.
                  </span>
                </h2>
              </PopReveal>
            </div>
            <Reveal delay={0.1}>
              <p className="max-w-sm text-pretty leading-7 text-ink/70">
                Pilih gaya yang kamu suka, lalu sesuaikan warna dan suasananya
                untuk momen yang sedang dirayakan.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {collections.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <TiltCard className={`edge group relative min-h-[460px] overflow-hidden rounded-[28px] ${item.bg} shadow-pop-lg`}>
                    <div className="halftone-light absolute inset-0 opacity-[0.16]" aria-hidden="true" />
                    <div className="relative flex h-full flex-col p-7 sm:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <span className={`${item.rotate} edge rounded-full bg-white px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-ink`}>
                          {item.label}
                        </span>
                        <span className={`${item.accent} edge grid size-12 place-items-center rounded-2xl transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110`}>
                          <Icon aria-hidden="true" size={22} />
                        </span>
                      </div>
                      <div className="mt-auto">
                        <h3 className={`font-display text-2xl font-bold tracking-[-0.01em] ${item.text} sm:text-3xl`}>
                          {item.title}
                        </h3>
                        <p className={`mt-3 max-w-sm leading-7 ${item.text} opacity-85`}>{item.description}</p>
                        <a
                          href={item.whatsappUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Tanyakan ${item.title} melalui WhatsApp`}
                          className={`edge press-sm mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-ink`}
                        >
                          Tanya koleksi
                          <ArrowUpRight aria-hidden="true" size={16} />
                        </a>
                      </div>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="edge rounded-[32px] bg-paper p-6 shadow-pop-lg sm:p-10 lg:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="eyebrow-tag bg-lime text-ink">Untuk setiap cerita</p>
                <h2 className="mt-4 text-balance font-display text-4xl font-bold tracking-[-0.02em] text-ink sm:text-5xl">
                  Ada alasan untuk merayakan.
                </h2>
                <p className="mt-5 max-w-md leading-7 text-ink/70">
                  Dari hari besar sampai kejutan sederhana, rangkaian balon
                  membuat pesanmu terasa lebih hidup.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {moments.map((moment, index) => {
                  const Icon = moment.icon;
                  return (
                    <div
                      key={moment.label}
                      className={`edge press-sm group rounded-[24px] p-5 shadow-pop-sm ${moment.color} ${index % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
                    >
                      <span className="edge grid size-12 place-items-center rounded-2xl bg-white text-ink transition-transform group-hover:rotate-6">
                        <Icon aria-hidden="true" size={22} />
                      </span>
                      <p className="mt-8 font-display text-lg font-bold tracking-tight">{moment.label}</p>
                      <p className="mt-1 text-sm opacity-80">Bikin lebih berkesan</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
