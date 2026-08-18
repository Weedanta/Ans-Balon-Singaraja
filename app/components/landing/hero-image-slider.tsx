"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { galleryItems } from "../gallery/gallery-data";

// Curated high-impact real product photos for the hero carousel
const heroSlideIndexes = [0, 1, 11, 14, 24, 34];
const heroSlides = heroSlideIndexes.map((idx) => galleryItems[idx]).filter(Boolean);

export function HeroImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[18px] bg-ink">
      {heroSlides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              placeholder="blur"
              sizes="(max-width: 1024px) 92vw, 46vw"
              className="object-cover object-center transition-transform duration-7000 ease-out scale-100"
            />
          </div>
        );
      })}

      {/* Slide indicator dots */}
      <div className="absolute bottom-3 inset-x-0 z-20 flex justify-center gap-1.5 pointer-events-none">
        {heroSlides.map((slide, idx) => (
          <span
            key={slide.id}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "w-6 bg-lime shadow-pop-sm"
                : "w-1.5 bg-white/60"
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}
