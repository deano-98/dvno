"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  trackEvent,
  type AnalyticsEventName,
  type AnalyticsEventParameters,
} from "@/lib/analytics";

type AnalyticsLinkProps<T extends AnalyticsEventName> = {
  href: string;
  eventName: T;
  eventParameters: AnalyticsEventParameters[T];
  children: ReactNode;
  className?: string;
  target?: "_blank" | "_self";
  rel?: string;
  "aria-label"?: string;
  title?: string;
  onClick?: () => void;
  scrollToTop?: boolean;
};

export function AnalyticsLink<T extends AnalyticsEventName>({
  href,
  eventName,
  eventParameters,
  children,
  className,
  target,
  rel,
  "aria-label": ariaLabel,
  title,
  onClick: afterClick,
  scrollToTop = false,
}: AnalyticsLinkProps<T>) {
  const onClick = () => {
    trackEvent(eventName, eventParameters);
    afterClick?.();
  };
  const linkProps = {
    href,
    className,
    target,
    rel,
    "aria-label": ariaLabel,
    title,
    onClick,
  };

  return href.startsWith("/") || href.startsWith("#") ? (
    <Link
      {...linkProps}
      onNavigate={
        scrollToTop
          ? () => window.scrollTo({ top: 0, behavior: "instant" })
          : undefined
      }
    >
      {children}
    </Link>
  ) : (
    <a {...linkProps}>{children}</a>
  );
}