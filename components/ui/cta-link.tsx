import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { AnalyticsLink } from "./analytics-link";

export function CtaLink({
  href,
  children,
  secondary = false,
  external = false,
  location = "cta",
  service,
  project,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  external?: boolean;
  location?: string;
  service?: string;
  project?: string;
}) {
  const className = `button ${secondary ? "button-secondary" : "button-primary"}`;
  const content = (
    <>
      {children}
      <ArrowUpRight size={16} strokeWidth={1.8} />
    </>
  );
  if (external)
    return (
      <AnalyticsLink
        className={className}
        href={href}
        target="_blank"
        rel="noreferrer"
        eventName="outbound_click"
        eventParameters={{ destination_type: "other", location }}
      >
        {content}
      </AnalyticsLink>
    );

  if (href.startsWith("/contact"))
    return (
      <AnalyticsLink
        className={className}
        href={href}
        eventName="contact_click"
        eventParameters={{ location, ...(service ? { service } : {}), ...(project ? { project } : {}) }}
        scrollToTop
      >
        {content}
      </AnalyticsLink>
    );

  return (
    <AnalyticsLink
      className={className}
      href={href}
      eventName="navigation_click"
      eventParameters={{
        item: href.split("/").filter(Boolean).at(-1) || "home",
        location,
        destination: href.split("?")[0],
      }}
    >
      {content}
    </AnalyticsLink>
  );
}
