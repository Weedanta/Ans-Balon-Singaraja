import { ArrowRight, ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";
import { Reveal } from "../reveal";
import { PopReveal } from "../pop-reveal";
import { Magnetic } from "../magnetic";
import { buildWhatsappUrl, steps } from "./data";

const orderCtaUrl = buildWhatsappUrl("Halo ANS Balon Singaraja! Aku mau mulai pesan balon sekarang 🎈");
const finalCtaUrl = buildWhatsappUrl("Halo ANS Balon Singaraja! Aku mau cerita momen spesialku dan pesan balon 🎈");

const stepColors = ["bg-lime", "bg-pink text-white", "bg-cobalt text-white"];

export function OrderSection() {
  return (
    <>
      <section id="cara-pesan" className="bg-white px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Reveal>
              <p className="eyebrow-tag mx-auto w-fit bg-sun text-ink">Dari chat jadi kejutan</p>
            </Reveal>
            <PopReveal delay={0.05} className="mx-auto mt-4 max-w-3xl">
              <h2 className="text-balance font-display text-4xl font-bold tracking-[-0.02em] text-ink sm:text-5xl lg:text-6xl">
                Pesan dalam tiga langkah ringan.
              </h2>
            </PopReveal>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.number} delay={index * 0.08}>
                  <article className="edge relative rounded-[26px] bg-paper p-7 shadow-pop sm:p-8">
                    <div className="flex items-center justify-between">
                      <span className={`edge grid size-14 place-items-center rounded-2xl ${stepColors[index]}`}>
                        <Icon aria-hidden="true" size={23} />
                      </span>
                      <span className="font-display text-4xl font-bold text-ink/15">{step.number}</span>
                    </div>
                    <h3 className="mt-10 font-display text-2xl font-bold tracking-[-0.015em] text-ink">{step.title}</h3>
                    <p className="mt-3 leading-7 text-ink/70">{step.description}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-14 flex justify-center">
            <Magnetic>
              <a
                href={orderCtaUrl}
                target="_blank"
                rel="noreferrer"
                className="edge press group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-pink px-7 text-sm font-black text-white shadow-pop"
              >
                Mulai pesan sekarang
                <ArrowRight aria-hidden="true" size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>
          </Reveal>
        </div>
      </section>
      <section className="bg-paper px-5 pb-8 pt-10 sm:px-8 lg:px-10">
        <Reveal className="halftone edge relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-violet px-6 py-12 text-white shadow-pop-lg sm:px-12 sm:py-16 lg:px-16">
          <div className="absolute inset-0 bg-violet/93" aria-hidden="true" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="eyebrow-tag bg-sun text-ink">
                <Sparkles aria-hidden="true" size={13} />
                Siap bikin kejutan?
              </p>
              <h2 className="mt-4 max-w-3xl text-balance font-display text-4xl font-bold tracking-[-0.02em] sm:text-5xl lg:text-6xl">
                Ceritakan momennya, kami bantu meriahkan.
              </h2>
            </div>
            <Magnetic>
              <a
                href={finalCtaUrl}
                target="_blank"
                rel="noreferrer"
                className="edge press group inline-flex h-[60px] items-center justify-center gap-3 rounded-full bg-white px-7 text-sm font-black text-ink shadow-pop"
              >
                <MessageCircle aria-hidden="true" size={19} />
                Chat di WhatsApp
                <ArrowUpRight aria-hidden="true" size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </section>
    </>
  );
}
