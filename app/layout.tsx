import type { Metadata, Viewport } from "next";
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
            <a href="/" className="brand">
              <span className="brand-mark">
                d.
              </span>
              <span className="brand-name">
                devo<span> / digital solutions</span>
              </span>
            </a>
            <p>
              Thoughtful technology.
              <br />
              Practical business outcomes.
            </p>
            <a className="footer-top-link" href="/contact">
              Have a project in mind? <span>Let&apos;s talk ↗</span>
            </a>
          </div>
          {/* Copyright, short tagline, and selected-work link. */}
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Developed by devo</span>
            <span>Built with purpose, not noise.</span>
            <a href="/projects">Selected work ↗</a>
          </div>
        </footer>
        <AnalyticsTools />
      </body>
    </html>
  );
}
