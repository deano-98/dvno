import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
  <>
    {/* Reusable section title, eyebrow, and optional supporting copy. */}
    <div
      className={`section-heading ${align === "center" ? "text-center" : ""}`}
    >
      <span className="eyebrow">
        <span className="eyebrow-dot" />
        {eyebrow}
      </span>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  </>
  );
}
