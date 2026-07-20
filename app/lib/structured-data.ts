import {
  siteAreaServed,
  siteDescription,
  siteInstagramUrl,
  siteName,
  sitePhone,
  sitePriceRange,
  siteUrl,
} from "./site.ts";

export type StructuredImage = { src: string; alt: string };

function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export function getStoreJsonLd() {
  return {
    "@context": "https://schema.org" as const,
    "@type": "Store" as const,
    name: siteName,
    description: siteDescription,
    url: siteUrl,
    image: absoluteUrl("/opengraph-image"),
    telephone: sitePhone,
    priceRange: sitePriceRange,
    areaServed: siteAreaServed,
    sameAs: [siteInstagramUrl],
  };
}

export function getGalleryJsonLd(items: readonly StructuredImage[]) {
  return {
    "@context": "https://schema.org" as const,
    "@type": "CollectionPage" as const,
    name: "Galeri Karya ANS Balon Singaraja",
    description: "Koleksi rangkaian balon custom karya ANS Balon Singaraja.",
    url: absoluteUrl("/galeri"),
    mainEntity: {
      "@type": "ItemList" as const,
      numberOfItems: items.length,
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem" as const,
        position: index + 1,
        item: {
          "@type": "ImageObject" as const,
          contentUrl: absoluteUrl(item.src),
          caption: item.alt,
        },
      })),
    },
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
