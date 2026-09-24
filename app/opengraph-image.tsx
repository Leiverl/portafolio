import { ImageResponse } from "next/og";

export const alt = "Leiver — Full-stack developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background: "#09090b",
          color: "#f4f4f5",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "#34d399",
              color: "#052e16",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            L
          </div>
          <div style={{ fontSize: 28, fontWeight: 600 }}>Leiver</div>
          <div style={{ fontSize: 20, color: "#a1a1aa" }}>· Ecuador</div>
        </div>
        <div
          style={{
            fontSize: 64,
            lineHeight: 1.05,
            fontWeight: 600,
            letterSpacing: -2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>Full-stack developer</div>
          <div style={{ color: "#34d399" }}>from backend to mobile.</div>
        </div>
        <div style={{ fontSize: 24, color: "#a1a1aa" }}>
          TypeScript · Node · PostgreSQL · React
        </div>
      </div>
    ),
    size,
  );
}