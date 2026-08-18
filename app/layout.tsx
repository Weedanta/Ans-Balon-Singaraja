import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Unbounded } from "next/font/google";
import "./globals.css";
import { siteDescription, siteName, siteTitle, siteUrl } from "./lib/site";

const display = Unbounded({
  subsets: ["latin"],
  variable: "--font-display-raw",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body-raw",
});

export const viewport: Viewport = {
  themeColor: "#ff3e8e",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  referrer: "origin-when-cross-origin",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "shopping",
  keywords: [
    "bucket balon Singaraja",
    "balon karakter Singaraja",
    "hadiah ulang tahun Singaraja",
    "balon custom Bali",
    "rangkaian bunga balon Bali",
    "hot air balloon bouquet Bali",
    "hadiah wisuda Singaraja",
    "ANS Balon Singaraja",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: { index: true, follow: true },
  other: {
    "geo.region": "ID-BA",
    "geo.placename": "Singaraja, Bali",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${display.variable} ${body.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
