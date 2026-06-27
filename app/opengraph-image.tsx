import { ImageResponse } from "next/og";

export const alt = "Hontec — Software that takes work off your team's plate.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "linear-gradient(135deg, #0A0A0B 0%, #18181B 60%, #2A1610 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg viewBox="0 0 64 64" width="56" height="56">
            <rect x="12" y="10" width="14" height="44" rx="1.5" fill="#FFFFFF" />
            <path
              d="M26 30 Q52 30 52 44 L52 54 L38 54 L38 44 Q38 40 34 40 L26 40 Z"
              fill="#FFFFFF"
            />
            <rect x="42" y="10" width="10" height="13" rx="1.5" fill="#FFFFFF" />
          </svg>
          <span style={{ fontSize: 36, fontWeight: 600, letterSpacing: -1 }}>
            Hontec
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 22,
              color: "#FF8A5C",
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Products · Custom Software
          </div>
          <div
            style={{
              fontSize: 74,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 980,
            }}
          >
            Software that takes work off your team&apos;s plate.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <span>hontec.in</span>
          <span>Vadodara · Remote-first · Global delivery</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
