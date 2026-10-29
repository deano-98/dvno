"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { siteConfig, whatsappUrl } from "@/lib/site";
import { AnalyticsLink } from "@/components/ui/analytics-link";

const links = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Pin the overlay's clip-path origin to the hamburger so it warps out of (and back into) the button.
  const syncMenuOrigin = useCallback(() => {
    const button = toggleRef.current;
    const overlay = overlayRef.current;
    if (!button || !overlay) return;

    const { left, top, width, height } = button.getBoundingClientRect();
    overlay.style.setProperty("--menu-x", `${left + width / 2}px`);
    overlay.style.setProperty("--menu-y", `${top + height / 2}px`);
  }, []);

  const toggleMenu = () => {
    syncMenuOrigin();
    setOpen((value) => !value);
  };

  // Lock scroll and allow Escape to close while the overlay is open.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Keep the warp origin aligned if the viewport changes while the menu is open.
  useEffect(() => {
    syncMenuOrigin();
    window.addEventListener("resize", syncMenuOrigin);
    return () => window.removeEventListener("resize", syncMenuOrigin);
  }, [open, syncMenuOrigin]);

  // Close on route change, and if the layout jumps back to desktop.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 761px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <header className={`site-header${open ? " is-menu-open" : ""}`}>
        <nav className="nav-shell" aria-label="Main navigation">
          <AnalyticsLink
            href="/"
            className="brand"
            aria-label={`${siteConfig.name}, home`}
            eventName="navigation_click"
            eventParameters={{ item: "home", location: "navbar", destination: "/" }}
          >
            <span className="brand-mark">d.</span>
            <span className="brand-name">
              deano<span> / digital solutions</span>
            </span>
          </AnalyticsLink>
          {/* Desktop navigation links and primary contact action. */}
          <div className="desktop-links">
            {links.map((link) => (
              <AnalyticsLink
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href || (link.href === "/projects" && pathname.startsWith("/projects/")) ? "is-active" : ""}`}
                eventName="navigation_click"
                eventParameters={{
                  item: link.href.slice(1),
                  location: "navbar",
                  destination: link.href,
                }}
              >
                {link.label}
              </AnalyticsLink>
            ))}
            <AnalyticsLink
              href="/contact"
              className="nav-cta"
              eventName="navigation_click"
              eventParameters={{ item: "contact", location: "navbar", destination: "/contact" }}
            >
              Let&apos;s talk <ArrowUpRight size={15} />
            </AnalyticsLink>
          </div>
          <button
            ref={toggleRef}
            type="button"
            className={`mobile-menu-toggle${open ? " is-open" : ""}`}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={toggleMenu}
          >
            {/* Two bars share a center point: they slide apart as a burger, then rotate into an X. */}
            <span className="menu-toggle-icon" aria-hidden="true">
              <span />
              <span />
            </span>
          </button>
        </nav>
      </header>
      {/* Full-screen mobile overlay. clip-path is animated from the hamburger origin. */}
      <div
        ref={overlayRef}
        id="mobile-navigation"
        className={`mobile-overlay${open ? " is-open" : ""}`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="mobile-overlay-links">
          <AnalyticsLink
            href="/"
            onClick={() => setOpen(false)}
            eventName="navigation_click"
            eventParameters={{ item: "home", location: "mobile_menu", destination: "/" }}
          >
            <span>00</span> Home <ArrowUpRight />
          </AnalyticsLink>
          {links.map((link, index) => (
            <AnalyticsLink
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              eventName="navigation_click"
              eventParameters={{
                item: link.href.slice(1),
                location: "mobile_menu",
                destination: link.href,
              }}
            >
              <span>0{index + 1}</span>
              {link.label}
              <ArrowUpRight />
            </AnalyticsLink>
          ))}
        </div>
        <AnalyticsLink
          className="mobile-whatsapp"
          href={whatsappUrl("Hi Dean, I would like to discuss a project.")}
          target="_blank"
          rel="noreferrer"
          eventName="whatsapp_click"
          eventParameters={{ location: "mobile_menu" }}
        >
          Start a conversation <ArrowUpRight size={18} />
        </AnalyticsLink>
        <p className="mobile-note">
          Thoughtful technology. Practical business outcomes.
        </p>
      </div>
    </>
  );
}
