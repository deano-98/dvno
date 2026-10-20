import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function CtaLink({
  href,
  children,
  secondary = false,
  external = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  external?: boolean;
}) {
  const className = `button ${secondary ? "button-secondary" : "button-primary"}`;
  const content = (
    <>
      {children}
      <ArrowUpRight size={16} strokeWidth={1.8} />
    </>
  );
  return external ? (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    <Link className={className} href={href}>
      {content}
    </Link>
  );
}
