export function getGalleryIndex(currentIndex: number, delta: number, total: number) {
  if (total <= 0) return 0;

  return (currentIndex + delta + total) % total;
}
