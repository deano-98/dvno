import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  ChartNoAxesCombined,
  Check,
  Code2,
  Database,
  Globe2,
  Layers3,
  Workflow,
} from "lucide-react";
import { CtaLink } from "@/components/ui/cta-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectGrid } from "@/components/projects/project-grid";
import { services } from "@/data/services";

const capabilities = [
  {
    icon: Globe2,
    title: "Web experiences",
    copy: "Fast, thoughtful websites that help people understand your offer and take the next step.",
  },
  {
    icon: Database,
    title: "Business workflows",
    copy: "Forms, records and practical tools that reduce repetitive work and keep information organised.",
  },
  {
    icon: Layers3,
    title: "Cloud & integrations",
    copy: "APIs, automation and infrastructure designed to fit the way your business actually operates.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero section-wrap">
        <div className="hero-copy">
          <div className="availability">
            <span className="availability-dot" />
            Available for selected projects
          </div>
          <p className="hero-kicker">DIGITAL SOLUTIONS / BUILT AROUND YOU</p>
          <h1>
            I build digital solutions that move <em>businesses forward.</em>
          </h1>
          <p className="hero-intro">
            I design and develop modern websites and practical software systems
            that help businesses attract customers, streamline workflows, and
            turn digital opportunities into measurable results.
          </p>
          <div className="hero-actions">
            <CtaLink href="/contact">Discuss your project</CtaLink>
            <CtaLink href="/projects" secondary>
              Explore my work
            </CtaLink>
          </div>
          <div className="hero-proof">
            <span>
              <Check size={14} /> Business-first thinking
            </span>
            <span>
              <Check size={14} /> Full-stack implementation
            </span>
            <span>
              <Check size={14} /> Built to be measured
            </span>
          </div>
        </div>
        <div
          className="hero-art"
          aria-label="Abstract illustration of connected business systems"
          role="img"
        >
          <div className="hero-art-grid" />
          <div className="hero-art-caption">
            <span>FROM PROBLEM</span>
            <span>TO PRACTICAL SYSTEM</span>
          </div>
          <div className="system-node node-web">
            <Globe2 />
            <span>Web experience</span>
            <small>Customer-facing</small>
          </div>
          <div className="system-node node-data">
            <Database />
            <span>Useful data</span>
            <small>Structured records</small>
          </div>
          <div className="system-node node-flow">
            <Workflow />
            <span>Connected workflow</span>
            <small>Less friction</small>
          </div>
          <div className="system-center">
            <div className="center-ring" />
            <div className="center-monogram">
              d<span>.</span>
            </div>
            <span>
              BUSINESS
              <br />
              NEEDS FIRST
            </span>
          </div>
          <svg
            className="connection-lines"
            viewBox="0 0 500 520"
            fill="none"
            aria-hidden="true"
          >
            <path d="M250 254 L150 154 L86 154" />
            <path d="M250 254 L355 170 L414 170" />
            <path d="M250 254 L245 380 L375 410" />
            <circle cx="150" cy="154" r="4" />
            <circle cx="355" cy="170" r="4" />
            <circle cx="245" cy="380" r="4" />
          </svg>
          <div className="hero-art-foot">
            <span>01 — UNDERSTAND</span>
            <ArrowDownRight size={16} />
            <span>02 — BUILD</span>
            <ArrowDownRight size={16} />
            <span>03 — IMPROVE</span>
          </div>
        </div>
        <div className="hero-bottomline">
          <span>INDEPENDENT DEVELOPER / HARARE & REMOTE</span>
          <a href="#approach">
            SCROLL TO EXPLORE <ArrowDownRight size={14} />
          </a>
        </div>
      </section>

      <section className="trust-strip">
        <div>
          <span className="strip-index">01</span>
          <p>Understand the business problem.</p>
        </div>
        <div>
          <span className="strip-index">02</span>
          <p>Choose the right technology.</p>
        </div>
        <div>
          <span className="strip-index">03</span>
          <p>Build for a measurable next step.</p>
        </div>
      </section>

      <section
        id="approach"
        className="section-wrap section-pad approach-section"
      >
        <div className="approach-intro">
          <SectionHeading
            eyebrow="A PRACTICAL APPROACH"
            title="Good technology should make work feel simpler."
          >
            A website is often the beginning, not the whole solution. I look at
            the customer journey and the workflow behind it — then build what
            actually helps.
          </SectionHeading>
          <CtaLink href="/services" secondary>
            Explore services
          </CtaLink>
        </div>
        <div className="capability-grid">
          {capabilities.map((item, index) => (
            <article className="capability-item" key={item.title}>
              <div className="capability-top">
                <span>0{index + 1}</span>
                <item.icon size={24} strokeWidth={1.4} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <div className="capability-rule" />
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap section-pad work-section">
        <div className="section-heading-row">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Projects with a purpose."
          >
            A selection of builds, architecture work and concepts showing how I
            approach real-world problems. Each case study separates intended
            outcomes from verified results.
          </SectionHeading>
          <CtaLink href="/projects" secondary>
            View all projects
          </CtaLink>
        </div>
        <ProjectGrid limit={3} />
      </section>

      <section className="dark-band">
        <div className="dark-band-orbit" />
        <div className="dark-band-content">
          <span className="eyebrow eyebrow-light">
            <span className="eyebrow-dot" />
            HOW I THINK
          </span>
          <h2>
            I build software with the <em>whole system</em> in mind.
          </h2>
          <p>
            From the first customer click to the data and operations behind it,
            the details should work together. That means choosing tools for a
            reason, making trade-offs clear, and leaving room to improve.
          </p>
          <Link href="/projects" className="text-link text-link-light">
            See how I approach projects <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="dark-band-side">
          <div className="code-tile">
            <span>01 / THINK</span>
            <Braces />
            <strong>
              Understand
              <br />
              the context.
            </strong>
          </div>
          <div className="code-tile">
            <span>02 / BUILD</span>
            <Code2 />
            <strong>
              Make it work
              <br />
              end to end.
            </strong>
          </div>
          <div className="code-tile">
            <span>03 / LEARN</span>
            <ChartNoAxesCombined />
            <strong>
              Measure what
              <br />
              matters next.
            </strong>
          </div>
        </div>
      </section>

      <section className="section-wrap section-pad about-section">
        <div className="about-index">
          <span className="eyebrow">
            <span className="eyebrow-dot" />A LITTLE ABOUT ME
          </span>
          <span className="about-number">DC / 2026</span>
        </div>
        <div className="about-main">
          <h2>
            Curious about the details.
            <br />
            <em>Focused on the outcome.</em>
          </h2>
          <div className="about-columns">
            <p>
              I’m Dean, a software developer with a background in computer
              science and hands-on experience across full-stack development,
              databases, cloud infrastructure, integrations, and business
              applications.
            </p>
            <p>
              I enjoy joining the dots between what a business needs and what
              technology can do. I aim to build solutions that are clear to use,
              sensible to maintain, and useful long after launch.
            </p>
          </div>
          <CtaLink href="/projects" secondary>
            Explore my projects
          </CtaLink>
        </div>
        <div className="about-aside">
          <div className="aside-mark">
            d<span>.</span>
          </div>
          <p>
            Software engineering
            <br />
            with a business lens.
          </p>
          <span>
            HARARE, ZIMBABWE
            <br />
            AVAILABLE REMOTELY
          </span>
        </div>
      </section>

      <section className="section-wrap section-pad home-services">
        <div className="section-heading-row">
          <SectionHeading
            eyebrow="WAYS TO WORK TOGETHER"
            title="The right level of solution."
          >
            Start with a professional online presence, improve how enquiries
            flow, or build a custom system around your operations.
          </SectionHeading>
          <CtaLink href="/services" secondary>
            Compare packages
          </CtaLink>
        </div>
        <div className="home-service-list">
          {services.map((service, index) => (
            <Link
              href={`/contact?service=${service.id}`}
              className="home-service-row"
              key={service.id}
            >
              <span className="home-service-number">0{index + 1}</span>
              <div>
                <h3>
                  {service.name}
                  <span> / {service.eyebrow}</span>
                </h3>
                <p>{service.idealFor}</p>
              </div>
              <strong>{service.offer}</strong>
              <ArrowUpRight size={19} />
            </Link>
          ))}
        </div>
        <p className="home-service-note">
          Founding-client offers are introductory pricing, not a countdown
          promotion. Scope and recurring costs are agreed before work begins.
        </p>
      </section>

      <section className="closing-cta">
        <div className="closing-cta-inner">
          <span className="eyebrow eyebrow-light">
            <span className="eyebrow-dot" />
            HAVE A PROBLEM TO SOLVE?
          </span>
          <h2>
            Let&apos;s make the next step <em>clear.</em>
          </h2>
          <p>
            Tell me what your business is trying to do. We can work out whether
            a website, an integration, or a more tailored system makes the most
            sense.
          </p>
          <div className="hero-actions">
            <CtaLink href="/contact">Discuss your project</CtaLink>
            <Link className="closing-secondary" href="/services">
              View service packages <ArrowRight size={16} />
            </Link>
          </div>
          <span className="closing-cta-stamp">
            GOOD WORK
            <br />
            STARTS WITH
            <br />A GOOD QUESTION.
          </span>
        </div>
      </section>
    </>
  );
}
