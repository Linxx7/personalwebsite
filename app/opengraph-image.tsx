import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ricardo Duarte – Desenvolvedor Full Stack Brasília";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0e1a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow top-right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,229,255,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(123,97,255,0.14) 0%, transparent 70%)",
          }}
        />

        {/* Border top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 2,
            background:
              "linear-gradient(90deg, transparent, #00e5ff, transparent)",
          }}
        />

        {/* Label */}
        <p
          style={{
            fontFamily: "monospace",
            fontSize: 18,
            color: "#00e5ff",
            letterSpacing: "0.25em",
            textTransform: "uppercase",
            margin: 0,
            marginBottom: 28,
          }}
        >
          disponível para projetos
        </p>

        {/* Name */}
        <div style={{ display: "flex", flexDirection: "column", margin: 0, marginBottom: 36 }}>
          <span
            style={{
              fontSize: 108,
              fontWeight: 800,
              color: "#e8f0fe",
              lineHeight: 1,
              margin: 0,
            }}
          >
            Ricardo
          </span>
          <span
            style={{
              fontSize: 108,
              fontWeight: 800,
              color: "#00e5ff",
              lineHeight: 1,
              margin: 0,
            }}
          >
            Duarte.
          </span>
        </div>

        {/* Stack */}
        <p
          style={{
            fontFamily: "monospace",
            fontSize: 24,
            color: "#8899bb",
            margin: 0,
            marginBottom: 40,
          }}
        >
          Full Stack Developer · React · Node.js · TypeScript
        </p>

        {/* Tags */}
        <div style={{ display: "flex", gap: 12 }}>
          {["AWS", "MongoDB", "Unity", "Game Dev"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "6px 16px",
                border: "1px solid rgba(0,229,255,0.25)",
                borderRadius: 4,
                fontFamily: "monospace",
                fontSize: 15,
                color: "#8899bb",
                background: "rgba(0,229,255,0.05)",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* URL bottom-right */}
        <p
          style={{
            position: "absolute",
            bottom: 72,
            right: 80,
            fontFamily: "monospace",
            fontSize: 20,
            color: "#39ff85",
            margin: 0,
          }}
        >
          ricardoduarte.dev
        </p>
      </div>
    ),
    { ...size }
  );
}
