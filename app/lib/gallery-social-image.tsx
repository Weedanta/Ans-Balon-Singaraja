import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import {
  contentType,
  galleryPhotoFiles,
  gallerySocialAlt,
  size,
} from "./gallery-social-image-config";

export { contentType, gallerySocialAlt, size };

const frames = [
  { label: "01", left: 520, top: 120, width: 270, height: 360, rotate: -7 },
  { label: "18", left: 740, top: 62, width: 280, height: 372, rotate: 3 },
  { label: "28", left: 944, top: 155, width: 248, height: 338, rotate: 7 },
] as const;

export default async function GallerySocialImage(): Promise<ImageResponse> {
  const photoSources = await Promise.all(
    galleryPhotoFiles.map(async (file) => {
      const data = await readFile(join(process.cwd(), file), "base64");
      return `data:image/jpeg;base64,${data}`;
    }),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#3a53ff",
          border: "14px solid #171019",
          color: "#fff6e8",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 470,
            top: -74,
            width: 210,
            height: 210,
            display: "flex",
            borderRadius: "50%",
            background: "#ff3e8e",
            border: "8px solid #171019",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 442,
            bottom: -46,
            width: 130,
            height: 130,
            display: "flex",
            borderRadius: "50%",
            background: "#d7ff3f",
            border: "8px solid #171019",
          }}
        />

        <div
          style={{
            width: 530,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            padding: "52px 32px 44px 46px",
            position: "relative",
            zIndex: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              background: "#d7ff3f",
              border: "5px solid #171019",
              boxShadow: "7px 7px 0 #171019",
              color: "#171019",
              fontSize: 23,
              fontWeight: 900,
              letterSpacing: 2,
              padding: "10px 18px 8px",
              transform: "rotate(-1deg)",
            }}
          >
            GALERI ANS BALON
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 72,
              fontWeight: 900,
              letterSpacing: -3,
              lineHeight: 0.92,
              textTransform: "uppercase",
              textShadow: "5px 5px 0 #171019",
            }}
          >
            <span>38 karya,</span>
            <span style={{ color: "#d7ff3f" }}>38 cerita</span>
            <span style={{ color: "#d7ff3f" }}>kecil.</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              color: "#fff6e8",
              fontSize: 20,
              fontWeight: 800,
              letterSpacing: 1.2,
              textTransform: "uppercase",
            }}
          >
            <span>Bucket balon</span>
            <span style={{ color: "#ff3e8e", fontSize: 30 }}>•</span>
            <span>Karakter custom</span>
          </div>
        </div>

        {photoSources.map((src, index) => {
          const frame = frames[index];

          return (
            <div
              key={frame.label}
              style={{
                position: "absolute",
                left: frame.left,
                top: frame.top,
                width: frame.width,
                height: frame.height,
                display: "flex",
                flexDirection: "column",
                padding: "12px 12px 10px",
                background: "#fff6e8",
                border: "6px solid #171019",
                boxShadow: "12px 12px 0 #171019",
                transform: `rotate(${frame.rotate}deg)`,
                zIndex: index + 2,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt=""
                width={frame.width - 36}
                height={frame.height - 76}
                style={{
                  width: "100%",
                  height: frame.height - 76,
                  display: "flex",
                  objectFit: "cover",
                  border: "4px solid #171019",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "8px 3px 0",
                  color: "#171019",
                  fontSize: 18,
                  fontWeight: 900,
                  letterSpacing: 1.5,
                }}
              >
                <span>KARYA</span>
                <span style={{ color: index === 1 ? "#3a53ff" : "#ff3e8e" }}>
                  {frame.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    ),
    { ...size },
  );
}
