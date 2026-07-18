import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join } from "node:path";

async function loadLogo() {
  const logoPath = join(process.cwd(), "public", "logo.png");
  if (!existsSync(logoPath)) return null;
  const data = await readFile(logoPath, "base64");
  return `data:image/png;base64,${data}`;
}

export async function renderIcon(size: number) {
  const logoSrc = await loadLogo();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: logoSrc ? "#fff6e8" : "#ff3e8e",
        }}
      >
        {logoSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={logoSrc} width={size} height={size} style={{ objectFit: "contain" }} alt="" />
        ) : (
          <span style={{ fontSize: size * 0.58, fontWeight: 800, color: "#fff6e8" }}>A</span>
        )}
      </div>
    ),
    { width: size, height: size },
  );
}
