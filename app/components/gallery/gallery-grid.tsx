"use client";

import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

import type { GalleryItem } from "./gallery-data";
import { getGalleryIndex } from "./gallery-navigation";

const cardStyles = [
  "-rotate-1",
  "rotate-1 sm:translate-y-5",
  "-rotate-2",
  "rotate-2 sm:translate-y-3",
] as const;

type GalleryGridProps = {
  items: readonly GalleryItem[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeTriggerIndexRef = useRef<number | null>(null);

  const closeGallery = useCallback(() => {
    const indexToRestore = activeTriggerIndexRef.current;
    setSelectedIndex(null);

    if (indexToRestore !== null) {
      window.setTimeout(() => triggerRefs.current[indexToRestore]?.focus(), 0);
      activeTriggerIndexRef.current = null;
    }
  }, []);

  const openGallery = useCallback((index: number) => {
    activeTriggerIndexRef.current = index;
    setSelectedIndex(index);
  }, []);

  const showRelativeImage = useCallback(
    (delta: number) => {
      setSelectedIndex((currentIndex) =>
        currentIndex === null
          ? null
          : getGalleryIndex(currentIndex, delta, items.length),
      );
    },
    [items.length],
  );

  const isOpen = selectedIndex !== null;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeGallery();
        return;
      }

      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        showRelativeImage(event.key === "ArrowLeft" ? -1 : 1);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLButtonElement>(
          'button:not([disabled]):not([tabindex="-1"])',
        ),
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (!firstElement || !lastElement) return;

      if (
        event.shiftKey &&
        (document.activeElement === firstElement ||
          !dialogRef.current.contains(document.activeElement))
      ) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        (document.activeElement === lastElement ||
          !dialogRef.current.contains(document.activeElement))
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeGallery, isOpen, showRelativeImage]);

  if (items.length === 0) {
    return (
      <p className="edge rounded-[22px] bg-white p-6 text-center font-bold text-ink shadow-pop">
        Belum ada karya yang ditampilkan.
      </p>
    );
  }

  const selectedItem =
    selectedIndex === null ? undefined : items[selectedIndex];

  return (
    <>
      <div className="grid grid-cols-2 gap-4 pb-8 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
        {items.map((item, index) => (
          <button
            key={item.id}
            ref={(node) => {
              triggerRefs.current[index] = node;
            }}
            type="button"
            onClick={() => openGallery(index)}
            aria-label={`Buka karya ${item.number}: ${item.alt}`}
            aria-haspopup="dialog"
            className={"group relative text-left focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-pink " + cardStyles[index % cardStyles.length]}
          >
            <span className="edge relative block aspect-[3/4] overflow-hidden rounded-[22px] bg-white p-2 shadow-pop transition duration-300 group-hover:-translate-y-2 group-hover:shadow-pop-lg sm:p-3">
              <span className="relative block h-full overflow-hidden rounded-[13px] bg-white">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 639px) 45vw, (max-width: 1023px) 30vw, 22vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 grid place-items-center bg-ink/0 transition-colors group-hover:bg-ink/20" aria-hidden="true">
                  <span className="edge grid size-11 scale-75 place-items-center rounded-full bg-lime text-ink opacity-0 shadow-pop-sm transition group-hover:scale-100 group-hover:opacity-100">
                    <Expand size={18} strokeWidth={2.5} />
                  </span>
                </span>
              </span>
            </span>
            <span className="edge absolute -bottom-3 left-4 rounded-full bg-sun px-3 py-1 text-[10px] font-black uppercase tracking-[0.13em] text-ink shadow-pop-sm">
              Karya {item.number}
            </span>
          </button>
        ))}
      </div>

      {selectedItem && selectedIndex !== null ? (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={"Karya " + selectedItem.number}
          className="fixed inset-0 z-[120] grid place-items-center bg-ink/92 p-4 sm:p-8"
        >
          <button
            type="button"
            onClick={closeGallery}
            aria-label="Tutup galeri"
            className="absolute inset-0 cursor-default"
            tabIndex={-1}
          />
          <div className="relative z-10 flex h-full w-full max-w-6xl flex-col items-center justify-center">
            <div className="edge relative h-[min(78svh,820px)] w-full overflow-hidden rounded-[24px] bg-white p-2 shadow-pop-invert sm:p-3">
              <div className="relative h-full overflow-hidden rounded-[14px] bg-ink">
                <Image
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  fill
                  loading="eager"
                  placeholder="blur"
                  sizes="(max-width: 1024px) 94vw, 1100px"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex w-full items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => showRelativeImage(-1)}
                aria-label="Lihat karya sebelumnya"
                className="edge press-sm inline-flex h-11 items-center gap-2 rounded-full bg-white px-4 text-xs font-black text-ink shadow-pop-sm sm:text-sm"
              >
                <ChevronLeft aria-hidden="true" size={18} />
                <span className="hidden sm:inline">Sebelumnya</span>
              </button>
              <p className="font-display text-sm font-bold text-paper" aria-live="polite">
                {String(selectedIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </p>
              <button
                type="button"
                onClick={() => showRelativeImage(1)}
                aria-label="Lihat karya berikutnya"
                className="edge press-sm inline-flex h-11 items-center gap-2 rounded-full bg-lime px-4 text-xs font-black text-ink shadow-pop-sm sm:text-sm"
              >
                <span className="hidden sm:inline">Berikutnya</span>
                <ChevronRight aria-hidden="true" size={18} />
              </button>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeGallery}
              aria-label="Tutup galeri"
              className="edge press-sm absolute right-2 top-2 grid size-11 place-items-center rounded-full bg-pink text-white shadow-pop-sm focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-lime sm:right-4 sm:top-4"
            >
              <X aria-hidden="true" size={20} strokeWidth={2.8} />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
