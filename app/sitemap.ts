import type { MetadataRoute } from "next";
import { galleryItems } from "./components/gallery/gallery-data";
import { siteUrl } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: siteUrl + "/galeri",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      images: galleryItems.map((item) => new URL(item.src.src, siteUrl).toString()),
    },
    {
      url: siteUrl + "/link",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
