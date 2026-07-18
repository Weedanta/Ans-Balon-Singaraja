import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { siteName } from "./site";

export const alt = `${siteName} — bucket balon & balon karakter custom`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadLogo() {
  const logoPath = join(process.cwd(), "public", "logo.png");
  if (!existsSync(logoPath)) return null;
  const data = await readFile(logoPath, "base64");
  return `data:image/png;base64,${data}`;
}

export default async function SocialImage() {
  const logoSrc = await loadLogo();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#ff3e8e",
          border: "16px solid #171019",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 44,
            right: 60,
            width: 130,
            height: 130,
            borderRadius: "50%",
            background: "#d7ff3f",
            border: "8px solid #171019",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 60,
            right: 170,
            width: 90,
            height: 90,
            borderRadius: "50%",
            background: "#7b3fe4",
            border: "8px solid #171019",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 84,
              height: 84,
              borderRadius: 22,
              background: "#fff6e8",
              border: "6px solid #171019",
              overflow: "hidden",
            }}
          >
            {logoSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={logoSrc} width={84} height={84} style={{ objectFit: "contain" }} alt="" />
            ) : (
              <span style={{ fontSize: 44, fontWeight: 800, color: "#ff3e8e" }}>A</span>
            )}
          </div>
          <span
            style={{
              fontSize: 34,
              fontWeight: 800,
              color: "#fff6e8",
              letterSpacing: -1,
              textTransform: "uppercase",
            }}
          >
            ANS Balon Singaraja
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 980 }}>
          <span
            style={{
              fontSize: 74,
              fontWeight: 800,
              lineHeight: 1.02,
              color: "#fff6e8",
              letterSpacing: -2,
            }}
          >
            Bikin momen kecil jadi paling meriah.
          </span>
          <span style={{ fontSize: 30, fontWeight: 700, color: "#171019" }}>
            Bucket balon & balon karakter custom — Singaraja, Bali
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
