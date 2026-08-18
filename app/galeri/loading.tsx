const skeletonStyles = [
  "-rotate-1",
  "rotate-1 sm:translate-y-5",
  "-rotate-2",
  "rotate-2 sm:translate-y-3",
] as const;

export default function GalleryLoading() {
  return (
    <div className="min-h-screen bg-paper">
      {/* Header Skeleton Banner */}
      <div className="halftone edge-b relative overflow-hidden bg-pink px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10">
        <div className="pointer-events-none absolute inset-0 bg-pink/94" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl animate-pulse">
          <div className="h-8 w-40 rounded-full bg-white/30" />
          <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="h-6 w-32 rounded-full bg-lime/80" />
              <div className="mt-4 h-16 w-3/4 max-w-xl rounded-2xl bg-white/40" />
            </div>
            <div className="edge hidden h-24 w-44 rotate-2 rounded-[24px] bg-sun p-4 shadow-pop-lg lg:block">
              <div className="h-8 w-16 rounded bg-ink/20" />
              <div className="mt-2 h-4 w-24 rounded bg-ink/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Grid Skeleton */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="mb-10 animate-pulse">
          <div className="h-6 w-36 rounded-full bg-ink/10" />
          <div className="mt-3 h-10 w-2/3 max-w-lg rounded-xl bg-ink/15" />
        </div>

        <div className="grid grid-cols-2 gap-4 pb-8 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => {
            const rotClass = skeletonStyles[index % skeletonStyles.length];
            return (
              <div
                key={index}
                className={"relative " + rotClass}
              >
                <div className="edge relative block aspect-[3/4] overflow-hidden rounded-[22px] bg-white p-2 shadow-pop sm:p-3 animate-pulse">
                  <div className="h-full w-full rounded-[13px] bg-ink/10" />
                </div>
                <div className="edge absolute -bottom-3 left-4 h-6 w-20 rounded-full bg-sun/80 shadow-pop-sm" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
