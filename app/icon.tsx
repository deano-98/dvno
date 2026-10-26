import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#182b49",
          color: "#fffefa",
          fontSize: 22,
          fontWeight: 900,
          letterSpacing: "-2px",
          lineHeight: 1,
          paddingBottom: 2,
        }}
      >
        d.
      </div>
    ),
    { ...size },
  );
}
