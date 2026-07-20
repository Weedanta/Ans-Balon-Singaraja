# Instagram Gallery Design

## Goal

Menampilkan foto produk dari `app/assets/Instagram` sebagai preview kecil di homepage dan sebagai galeri lengkap pada halaman `/galeri`, tanpa mengubah identitas visual landing page ANS Balon.

## Experience

- Homepage menampilkan enam foto pilihan di antara bagian Koleksi dan Keunggulan.
- Preview memakai komposisi editorial yang sedikit bertumpuk, tetapi tetap mudah dipindai dan responsif.
- Tombol “Lihat semua karya” menuju `/galeri`.
- Halaman `/galeri` memuat seluruh 38 foto dalam grid responsif.
- Setiap foto dapat dibuka dalam lightbox dengan tombol tutup, sebelumnya, berikutnya, serta dukungan tombol Escape dan panah keyboard.
- Navigasi utama menambahkan tautan “Galeri” dan semua tautan anchor tetap bekerja dari homepage maupun `/galeri`.

## Visual Direction

Galeri memakai token situs yang sudah ada: paper `#fff6e8`, ink `#171019`, pink `#ff3e8e`, lime `#d7ff3f`, cobalt `#3a53ff`, dan sun `#ffd400`. Unbounded tetap menjadi display face dan Plus Jakarta Sans menjadi body face. Elemen khasnya adalah rangkaian foto seperti contact sheet perayaan: bingkai putih bertepi hitam, offset shadow, serta rotasi kecil yang terkontrol. Foto tetap menjadi fokus; dekorasi hanya muncul pada label, bingkai, dan CTA.

## Architecture

- `gallery-data.ts` menjadi sumber tunggal untuk static image imports, alt text, dan pilihan preview.
- `gallery-preview.tsx` adalah server component untuk section homepage.
- `gallery-grid.tsx` adalah client component terbatas untuk grid interaktif dan lightbox.
- `gallery-navigation.ts` memisahkan logika indeks lightbox agar dapat diuji tanpa DOM.
- `app/galeri/page.tsx` mengatur metadata dan komposisi halaman penuh.

## Accessibility and Resilience

- Semua foto memiliki alt text produk yang jelas.
- Tombol ikon memiliki accessible label dan focus ring.
- Lightbox dapat ditutup dengan Escape dan dinavigasi dengan tombol panah.
- Motion dekoratif mengikuti `prefers-reduced-motion` yang sudah tersedia secara global.
- Static imports membuat dimensi gambar tersedia saat build dan menghindari layout shift.

## Verification

- Unit test memeriksa wrap-around navigasi lightbox dan input kosong.
- ESLint dan production build harus lulus.
- Homepage dan `/galeri` diperiksa pada viewport desktop serta mobile, termasuk pembukaan/penutupan lightbox dan navigasi keyboard.

