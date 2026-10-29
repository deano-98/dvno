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
import { AnalyticsLink } from "@/components/ui/analytics-link";

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
        {/* Main headline, introduction, and calls to action. */}
        <div className="hero-copy">
          {/* Current availability indicator. */}
          <div className="availability">
            <span className="availability-dot" />
            Available for selected projects
          </div>
          <p className="hero-kicker">DIGITAL SOLUTIONS / BUILT AROUND YOU</p>
          <h1>
            I build digital solutions that move <em>businesses forward.</em>
          </h1>
          <p className="hero-intro">
            From high-performing websites to custom software systems, 
            I connect technology with real business needs to help companies attract customers, simplify operations, 
            and grow with confidence.
          </p>
          {/* Primary paths to discuss a project or view past work. */}
          <div className="hero-actions">
            <CtaLink href="/contact">Discuss your project</CtaLink>
            <CtaLink href="/projects" secondary>
              Explore my work
            </CtaLink>
          </div>
          {/* Short summary of the developer's working principles. */}
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
        {/* Abstract illustration showing connected business systems. */}
        <div
          className="hero-art"
          aria-label="Abstract illustration of connected business systems"
          role="img"
        >
          {/* Background grid texture for the illustration. */}
          <div className="hero-art-grid" />
          {/* Caption describing the illustration's progression. */}
          <div className="hero-art-caption">
            <span>FROM PROBLEM</span>
            <span>TO PRACTICAL SYSTEM</span>
          </div>
          {/* Customer-facing web experience node. */}
          <div className="system-node node-web">
            <Globe2 />
            <span>Web experience</span>
            <small>Customer-facing</small>
          </div>
          {/* Structured business data node. */}
          <div className="system-node node-data">
            <Database />
            <span>Useful data</span>
            <small>Structured records</small>
          </div>
          {/* Connected operations workflow node. */}
          <div className="system-node node-flow">
            <Workflow />
            <span>Connected workflow</span>
            <small>Less friction</small>
          </div>
          {/* Centerpiece representing the business-first approach. */}
          <div className="system-center">
            {/* Decorative ring around the illustration's center. */}
            <div className="center-ring" />
            {/* Studio monogram at the center of the illustration. */}
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
          {/* Three steps shown at the foot of the illustration. */}
          <div className="hero-art-foot">
            <span>01 — UNDERSTAND</span>
            <ArrowDownRight size={16} />
            <span>02 — BUILD</span>
            <ArrowDownRight size={16} />
            <span>03 — IMPROVE</span>
          </div>
        </div>
        {/* Location, availability, and in-page navigation beneath the hero. */}
        <div className="hero-bottomline">
          <span>INDEPENDENT DEVELOPER / HARARE & REMOTE</span>
          <AnalyticsLink
            href="#approach"
            eventName="navigation_click"
            eventParameters={{ item: "approach", location: "home_hero", destination: "#approach" }}
          >
            SCROLL TO EXPLORE <ArrowDownRight size={14} />
          </AnalyticsLink>
        </div>
      </section>

      <section className="trust-strip">
        {/* First principle: understand the business problem. */}
        <div>
          <span className="strip-index">01</span>
          <p>Understand the business problem.</p>
        </div>
        {/* Second principle: choose technology for the problem. */}
        <div>
          <span className="strip-index">02</span>
          <p>Choose the right technology.</p>
        </div>
        {/* Third principle: aim for a measurable improvement. */}
        <div>
          <span className="strip-index">03</span>
          <p>Build for a measurable next step.</p>
        </div>
      </section>

      <section
        id="approach"
        className="section-wrap section-pad approach-section"
      >
        {/* Section overview and link to the services page. */}
        <div className="approach-intro">
          <SectionHeading
            eyebrow="A PRACTICAL APPROACH"
            title="Technology should simplify, not complicate."
          >
            A website is only one part of the picture. I connect the experience people see with the systems that make it work — building digital solutions around real needs, not just appearances.
          </SectionHeading>
          <CtaLink href="/services" secondary>
            Explore services
          </CtaLink>
        </div>
        {/* Three core capability areas. */}
        <div className="capability-grid">
          {capabilities.map((item, index) => (
            <article className="capability-item" key={item.title}>
              {/* Capability number and icon. */}
              <div className="capability-top">
                <span>0{index + 1}</span>
                <item.icon size={24} strokeWidth={1.4} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              {/* Decorative divider at the end of the capability card. */}
              <div className="capability-rule" />
            </article>
          ))}
        </div>
      </section>

      <section className="section-wrap section-pad work-section">
        {/* Selected-project introduction and link to the full portfolio. */}
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
        {/* Decorative orbit behind the dark feature band. */}
        <div className="dark-band-orbit" />
        {/* Statement of the studio's whole-system perspective. */}
        <div className="dark-band-content">
          <span className="eyebrow eyebrow-light">
            <span className="eyebrow-dot" />
            HOW I THINK
          </span>
          <h2>
            I build software with the <em>whole system</em> in mind.
          </h2>
          <p>
            From the first customer interaction to the data and workflows behind it, 
            every part should work together. I focus on choosing the right tools for 
            the problem, making thoughtful trade-offs, and building solutions that can 
            adapt as needs evolve.
          </p>
          <AnalyticsLink
            href="/projects"
            className="text-link text-link-light"
            eventName="navigation_click"
            eventParameters={{ item: "projects", location: "home_dark_band", destination: "/projects" }}
          >
            See how I approach projects <ArrowUpRight size={16} />
          </AnalyticsLink>
        </div>
        {/* Three tiles summarizing the think, build, and learn process. */}
        <div className="dark-band-side">
          {/* Understand the project context. */}
          <div className="code-tile">
            <span>01 / THINK</span>
            <Braces />
            <strong>
              Understand
              <br />
              the context.
            </strong>
          </div>
          {/* Implement the solution end to end. */}
          <div className="code-tile">
            <span>02 / BUILD</span>
            <Code2 />
            <strong>
              Make it work
              <br />
              end to end.
            </strong>
          </div>
          {/* Measure outcomes and identify what to improve next. */}
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
        {/* About-section label and year marker. */}
        <div className="about-index">
          <span className="eyebrow">
            <span className="eyebrow-dot" />A LITTLE ABOUT ME
          </span>
          <span className="about-number">DC / 2026</span>
        </div>
        {/* Developer background, approach, and portfolio call to action. */}
        <div className="about-main">
          <h2>
            Curious about the details.
            <br />
            <em>Focused on the outcome.</em>
          </h2>
          {/* Biography and working philosophy in two columns. */}
          <div className="about-columns">
            <p>
              I’m Dean, a software developer with a computer science background 
              and hands-on experience across full-stack development, databases, 
              cloud infrastructure, integrations, and business applications.
            </p>
            <p>
              I enjoy connecting business needs with practical technology. 
              My focus is on building digital solutions that are intuitive to use, 
              reliable in practice, and straightforward to maintain as a business grows.
            </p>
          </div>
          <CtaLink href="/projects" secondary>
            Explore my projects
          </CtaLink>
        </div>
        {/* Monogram, professional focus, and location details. */}
        <div className="about-aside">
          {/* Decorative monogram mark. */}
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
        {/* Services overview heading and package link. */}
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
        {/* List of service packages with enquiry links. */}
        <div className="home-service-list">
          {services.map((service, index) => (
            <AnalyticsLink
              href={`/contact?service=${service.id}`}
              className="home-service-row"
              key={service.id}
              eventName="service_click"
              eventParameters={{
                service: service.id,
                service_name: service.name,
                location: "home_service_list",
                action: "enquire",
              }}
            >
              <span className="home-service-number">0{index + 1}</span>
              {/* Package name, category, and ideal-customer summary. */}
              <div>
                <h3>
                  {service.name}
                  <span> / {service.eyebrow}</span>
                </h3>
                <p>{service.idealFor}</p>
              </div>
              <strong>{service.standard}</strong>
              <ArrowUpRight size={19} />
            </AnalyticsLink>
          ))}
        </div>
      </section>

      <section className="closing-cta">
        {/* Final project invitation with contact and services actions. */}
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
          {/* Final calls to discuss a project or compare packages. */}
          <div className="hero-actions">
            <CtaLink href="/contact">Discuss your project</CtaLink>
            <AnalyticsLink
              className="closing-secondary"
              href="/services"
              eventName="navigation_click"
              eventParameters={{ item: "services", location: "home_closing", destination: "/services" }}
            >
              View service packages <ArrowRight size={16} />
            </AnalyticsLink>
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
