import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0A0A0B",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg viewBox="0 0 64 64" width="48" height="48">
          <rect x="12" y="10" width="14" height="44" rx="1.5" fill="#FFFFFF" />
          <path
            d="M26 30 Q52 30 52 44 L52 54 L38 54 L38 44 Q38 40 34 40 L26 40 Z"
            fill="#FFFFFF"
          />
          <rect x="42" y="10" width="10" height="13" rx="1.5" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
