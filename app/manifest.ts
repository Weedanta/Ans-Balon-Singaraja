import type { MetadataRoute } from "next";
import { siteDescription, siteName } from "./lib/site.ts";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "ANS Balon",
    description: siteDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#fff6e8",
    theme_color: "#ff3e8e",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
