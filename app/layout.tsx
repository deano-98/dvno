import type { Metadata, Viewport } from "next";
import { Github, Linkedin, Mail } from "lucide-react";
import { Navbar } from "@/components/navigation/navbar";
import { LenisProvider } from "@/components/lenis-provider";
import { AnalyticsTools } from "@/components/analytics";
import { AnalyticsLink } from "@/components/ui/analytics-link";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Dean Chap — Digital Solutions Developer",
    template: "%s | Dean Chap",
  },
  description: siteConfig.description,
  applicationName: "Dean Chap — Digital Solutions",
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "Dean Chap — Digital Solutions Developer",
    description: siteConfig.description,
    siteName: "Dean Chap",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dean Chap — Digital Solutions Developer",
    description: siteConfig.description,
  },
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f6f2",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <LenisProvider />
        <Navbar />
        <main id="main-content">{children}</main>
        <footer className="site-footer">
          {/* Footer brand, positioning statement, and contact prompt. */}
          <div className="footer-top">
            <AnalyticsLink
              href="/"
              className="brand"
              eventName="navigation_click"
              eventParameters={{ item: "home", location: "footer", destination: "/" }}
            >
              <span className="brand-mark">
                d.
              </span>
              <span className="brand-name">
                deano<span> / digital solutions</span>
              </span>
            </AnalyticsLink>
            <p>
              Thoughtful technology.
              <br />
              Practical business outcomes.
            </p>
            <AnalyticsLink
              className="footer-top-link"
              href="/contact"
              eventName="contact_click"
              eventParameters={{ location: "footer_cta" }}
            >
              Have a project in mind? <span>Let&apos;s talk ↗</span>
            </AnalyticsLink>
          </div>
          {/* Copyright, short tagline, and selected-work link. */}
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Developed by devo</span>
            <span>Built with purpose, not noise.</span>
            <div className="footer-social-links">
              <AnalyticsLink
                href={`mailto:${siteConfig.email}`}
                aria-label={`Email ${siteConfig.email}`}
                title={`Email ${siteConfig.email}`}
                eventName="email_click"
                eventParameters={{ location: "footer" }}
              >
                <Mail size={18} aria-hidden="true" />
              </AnalyticsLink>
              <AnalyticsLink
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
                title="LinkedIn"
                eventName="social_click"
                eventParameters={{ item: "linkedin", location: "footer" }}
              >
                <Linkedin size={18} aria-hidden="true" />
              </AnalyticsLink>
              <AnalyticsLink
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
                title="GitHub"
                eventName="social_click"
                eventParameters={{ item: "github", location: "footer" }}
              >
                <Github size={18} aria-hidden="true" />
              </AnalyticsLink>
            </div>
            <AnalyticsLink
              href="/projects"
              eventName="navigation_click"
              eventParameters={{ item: "projects", location: "footer", destination: "/projects" }}
            >
              Selected work ↗
            </AnalyticsLink>
          </div>
        </footer>
        <AnalyticsTools />
      </body>
    </html>
  );
}
