import { Reveal } from "../reveal";
import { PopReveal } from "../pop-reveal";
import { benefits } from "./data";

export function Benefits() {
  return (
    <section id="keunggulan" className="halftone relative overflow-hidden bg-ink px-5 py-24 text-paper sm:px-8 sm:py-28 lg:px-10">
      <div className="absolute inset-0 bg-ink/93" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <Reveal>
              <p className="eyebrow-tag bg-lime text-ink">Kenapa Ansbalon</p>
            </Reveal>
            <PopReveal delay={0.05} className="mt-4">
              <h2 className="max-w-4xl text-balance font-display text-4xl font-bold tracking-[-0.02em] sm:text-5xl lg:text-6xl">
                Praktis dipesan, personal rasanya,
                <br />
                <span className="inline-block rotate-1 bg-lime px-3 pb-2 pt-0.5 leading-[1.15] text-ink">besar senyumnya.</span>
              </h2>
            </PopReveal>
          </div>
          <Reveal delay={0.12}>
            <p className="max-w-lg leading-7 text-paper/65 lg:justify-self-end">
              Cocok untuk kejutan dadakan maupun momen yang sudah direncanakan.
              Kamu tinggal bawa ceritanya, Ansbalon bantu buat suasananya.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Reveal key={benefit.title} delay={index * 0.06}>
                <article className="edge-invert press-invert group flex min-h-[270px] flex-col rounded-[24px] bg-[#221a29] p-7 shadow-pop-invert sm:p-8">
                  <span className="edge-invert grid size-14 place-items-center rounded-2xl bg-transparent text-lime transition group-hover:-rotate-6 group-hover:bg-lime group-hover:text-ink">
                    <Icon aria-hidden="true" size={23} />
                  </span>
                  <div className="mt-auto pt-16">
                    <h3 className="font-display text-xl font-bold tracking-tight">{benefit.title}</h3>
                    <p className="mt-3 leading-7 text-paper/60">{benefit.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
