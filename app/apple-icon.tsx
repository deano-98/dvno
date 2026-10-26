import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          fontSize: 108,
          fontWeight: 900,
          letterSpacing: "-8px",
          lineHeight: 1,
          paddingBottom: 10,
        }}
      >
        d.
      </div>
    ),
    { ...size },
  );
}
