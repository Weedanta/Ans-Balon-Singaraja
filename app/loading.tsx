import { Sparkles } from "lucide-react";

export default function Loading() {
  return (
    <div className="halftone fixed inset-0 z-[150] grid place-items-center bg-paper p-4">
      <div className="pointer-events-none absolute inset-0 bg-paper/92" aria-hidden="true" />
      <div className="edge relative z-10 mx-auto max-w-sm rounded-[28px] bg-white p-8 text-center shadow-pop-lg sm:p-10">
        {/* Animated Bouncing Balloon Illustration */}
        <div className="relative mx-auto mb-6 size-24">
          <div className="balloon-bob edge absolute inset-2 rounded-full bg-pink shadow-pop flex items-center justify-center text-white">
            <span className="font-display text-2xl font-black">🎈</span>
          </div>
          <span className="balloon-bob-delayed edge absolute -right-1 -top-1 grid size-8 place-items-center rounded-full bg-lime text-ink shadow-pop-sm">
            <Sparkles size={16} strokeWidth={2.4} />
          </span>
          <span className="edge absolute -bottom-1 -left-1 size-5 rounded-full bg-sun shadow-pop-sm" />
        </div>

        <div className="eyebrow-tag mb-3 bg-lime text-ink">
          Memuat Halaman
        </div>
        <h2 className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl">
          Menyiapkan balon...
        </h2>
        <p className="mt-2 text-xs font-semibold leading-relaxed text-ink/70 sm:text-sm">
          Menghadirkan rangkaian warna terbaik untuk momen bahagiamu.
        </p>

        {/* Progress Bar Neobrutalist */}
        <div className="edge mt-6 h-3.5 w-full overflow-hidden rounded-full bg-paper p-0.5 shadow-pop-sm">
          <div className="h-full w-2/3 animate-[pulse_1.2s_ease-in-out_infinite] rounded-full bg-pink" />
        </div>
      </div>
    </div>
  );
}
