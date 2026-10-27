import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { Navbar } from "@/components/navigation/navbar";
import { LenisProvider } from "@/components/lenis-provider";
import { AnalyticsTools } from "@/components/analytics";
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
    <html lang="en" data-scroll-behavior="smooth">
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
            <Link href="/" className="brand">
              <span className="brand-mark">
                d.
              </span>
              <span className="brand-name">
                deano<span> / digital solutions</span>
              </span>
            </Link>
            <p>
              Thoughtful technology.
              <br />
              Practical business outcomes.
            </p>
            <Link className="footer-top-link" href="/contact">
              Have a project in mind? <span>Let&apos;s talk ↗</span>
            </Link>
          </div>
          {/* Copyright, short tagline, and selected-work link. */}
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Developed by devo</span>
            <span>Built with purpose, not noise.</span>
            <div className="footer-social-links">
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label={`Email ${siteConfig.email}`}
                title={`Email ${siteConfig.email}`}
              >
                <Mail size={18} aria-hidden="true" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile (opens in a new tab)"
                title="LinkedIn"
              >
                <Linkedin size={18} aria-hidden="true" />
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
                title="GitHub"
              >
                <Github size={18} aria-hidden="true" />
              </a>
            </div>
            <Link href="/projects">Selected work ↗</Link>
          </div>
        </footer>
        <AnalyticsTools />
      </body>
    </html>
  );
}
