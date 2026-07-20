# Instagram Gallery Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Menambahkan preview editorial enam foto pada homepage dan galeri lengkap yang dapat dibuka pada `/galeri`.

**Architecture:** Static image imports dan metadata filename-derived dipisahkan menjadi modul data kecil. Homepage tetap server-rendered, sedangkan interaktivitas lightbox dibatasi pada satu client component dengan logika indeks murni yang diuji terpisah.

**Tech Stack:** Next.js 16.2 App Router, React 19, TypeScript, Tailwind CSS 4, `next/image`, `lucide-react`, Node test runner.

## Global Constraints

- Gunakan seluruh 38 foto dari `app/assets/Instagram` tanpa menyalin atau mengubah file aset.
- Pertahankan token warna, tipografi, hard-edge border, dan offset shadow yang sudah digunakan situs.
- Preview homepage memuat tepat enam foto dan CTA ke `/galeri`.
- Lightbox harus mendukung tombol tutup, sebelumnya, berikutnya, Escape, ArrowLeft, dan ArrowRight.
- Jangan menambah dependency baru.

---

### Task 1: Gallery data and navigation model

**Files:**
- Create: `app/components/gallery/gallery-data.ts`
- Create: `app/components/gallery/gallery-metadata.ts`
- Create: `app/components/gallery/gallery-navigation.ts`
- Test: `app/components/gallery/gallery-metadata.test.mjs`
- Test: `app/components/gallery/gallery-navigation.test.mjs`

**Interfaces:**
- Produces: `GalleryItem`, `galleryItems`, `previewGalleryItems`, dan `getGalleryIndex(currentIndex: number, delta: number, total: number): number`.

- [ ] **Step 1: Write the failing navigation tests**

```ts
import assert from "node:assert/strict";
import test from "node:test";
import { getGalleryIndex } from "./gallery-navigation.ts";

test("wraps lightbox navigation at both ends", () => {
  assert.equal(getGalleryIndex(0, -1, 38), 37);
  assert.equal(getGalleryIndex(37, 1, 38), 0);
});

test("returns zero when the gallery is empty", () => {
  assert.equal(getGalleryIndex(4, 1, 0), 0);
});
```

- [ ] **Step 2: Run the test and verify the missing module failure**

Run: `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --test --test-isolation=none app/components/gallery/gallery-navigation.test.mjs`

Expected: FAIL because `gallery-navigation.ts` does not exist.

- [ ] **Step 3: Implement the pure navigation function**

```ts
export function getGalleryIndex(currentIndex: number, delta: number, total: number) {
  if (total <= 0) return 0;
  return (currentIndex + delta + total) % total;
}
```

- [ ] **Step 4: Add the complete static image manifest**

Import every JPG from `app/assets/Instagram`, define `GalleryItem` with `id`, `number`, `src`, and `alt`, export all 38 entries as `galleryItems`, then export six deliberately selected entries as `previewGalleryItems`. Keep stable filename-derived IDs and specific Indonesian alt text in `gallery-metadata.ts`.

- [ ] **Step 5: Run the unit test**

Run: `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --test --test-isolation=none app/components/gallery/gallery-metadata.test.mjs app/components/gallery/gallery-navigation.test.mjs`

Expected: 4 tests pass.

### Task 2: Homepage gallery preview

**Files:**
- Create: `app/components/gallery/gallery-preview.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `previewGalleryItems` from Task 1.
- Produces: `GalleryPreview()` server component and homepage anchor `#galeri`.

- [ ] **Step 1: Build the editorial preview component**

Create a semantic `<section id="galeri">` using `next/image` and `next/link`. Render six items in a responsive two-column/mobile and twelve-column/desktop composition, using the existing `edge`, `shadow-pop`, `font-display`, and palette utilities. The CTA label is “Lihat semua karya” and its destination is `/galeri`.

- [ ] **Step 2: Insert the preview in the homepage flow**

Import `GalleryPreview` in `app/page.tsx` and render it after `<Collections />` and before `<Benefits />`.

- [ ] **Step 3: Check component types**

Run: `npx tsc --noEmit`

Expected: exit code 0.

### Task 3: Full gallery page and accessible lightbox

**Files:**
- Create: `app/components/gallery/gallery-grid.tsx`
- Create: `app/galeri/page.tsx`

**Interfaces:**
- Consumes: `galleryItems`, `GalleryItem`, and `getGalleryIndex` from Task 1; `Header` and `Footer` from the landing components.
- Produces: interactive `GalleryGrid({ items }: { items: GalleryItem[] })` and route `/galeri`.

- [ ] **Step 1: Implement the client grid and lightbox**

Create `GalleryGrid` with `useState`, `useEffect`, and `useRef`. Each thumbnail is a button with a numbered accessible label. An open selection renders a fixed modal with `role="dialog"`, `aria-modal="true"`, a large `next/image`, close/previous/next controls, an image counter, keyboard navigation, body-scroll locking, a keyboard focus trap, initial focus on close, and focus restoration to the original thumbnail on close.

- [ ] **Step 2: Compose the gallery route**

Export Indonesian route metadata, render `Header`, a compact colorful page hero, `<GalleryGrid items={galleryItems} />`, an Instagram CTA using `instagramUrl`, and `Footer`. Keep the page statically renderable.

- [ ] **Step 3: Verify route compilation**

Run: `npx tsc --noEmit`

Expected: exit code 0.

### Task 4: Route-safe navigation and discovery

**Files:**
- Modify: `app/components/landing/brand.tsx`
- Modify: `app/sitemap.ts`

**Interfaces:**
- Consumes: existing site URL helpers.
- Produces: navigation that works on both routes and a sitemap entry for `/galeri`.

- [ ] **Step 1: Update header destinations**

Change homepage destinations to `/#beranda`, `/#koleksi`, `/#keunggulan`, and `/#cara-pesan`; add `{ href: "/galeri", label: "Galeri" }`. Keep the mobile WhatsApp CTA unchanged.

- [ ] **Step 2: Add the gallery to the sitemap**

Add a `/galeri` entry with the same site URL helper and a lower change frequency than the homepage.

- [ ] **Step 3: Run static checks**

Run: `npm run lint`

Expected: exit code 0 with no ESLint errors.

### Task 5: Production and visual verification

**Files:**
- Modify only files identified by failures from the checks above.

**Interfaces:**
- Consumes: the completed homepage and `/galeri` route.
- Produces: a verified responsive implementation.

- [ ] **Step 1: Run all automated checks**

Run: `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --test --test-isolation=none app/components/gallery/gallery-metadata.test.mjs app/components/gallery/gallery-navigation.test.mjs`

Expected: 4 tests pass.

Run: `npm run lint`

Expected: exit code 0.

Run: `npm run build`

Expected: exit code 0 and static routes include `/` and `/galeri`.

- [ ] **Step 2: Inspect both pages in a browser**

Start the local Next.js server, inspect `/` and `/galeri` at approximately 1440×900 and 390×844, then verify: no horizontal overflow, all images load, CTA routes correctly, lightbox closes and changes images from both mouse and keyboard, and focus remains visible.

- [ ] **Step 3: Review the diff**

Run: `git diff --check` and `git status --short`.

Expected: no whitespace errors; only gallery-related source/docs plus the user-provided `app/assets/Instagram` files appear.

