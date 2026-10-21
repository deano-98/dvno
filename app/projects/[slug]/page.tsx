import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectVisual } from "@/components/projects/project-visual";
import { CtaLink } from "@/components/ui/cta-link";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project
    ? { title: project.title, description: project.summary }
    : { title: "Project not found" };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  return (
    <>
      <section className="case-hero section-wrap">
        <Link href="/projects" className="back-link">
          <ArrowLeft size={15} /> All projects
        </Link>
        {/* Case-study title, summary, tags, and status. */}
        <div className="case-hero-copy">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            {project.number} / {project.category}
          </span>
          <h1>
            {project.title}
            <em>.</em>
          </h1>
          <p>{project.summary}</p>
          {/* Project capabilities and technology tags. */}
          <div className="tag-list">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <span className="case-status">{project.status}</span>
        </div>
        <ProjectVisual project={project} large />
      </section>
      <section className="case-content section-wrap">
        {/* Main case-study sections alongside the project snapshot sidebar. */}
        <div className="case-main">
          <article className="case-block">
            <span className="case-block-index">01</span>
            {/* Context and business problem addressed by the project. */}
            <div>
              <span className="eyebrow">THE CONTEXT</span>
              <h2>The business problem</h2>
              <p>{project.problem}</p>
            </div>
          </article>
          <article className="case-block">
            <span className="case-block-index">02</span>
            {/* Description of the proposed solution. */}
            <div>
              <span className="eyebrow">THE APPROACH</span>
              <h2>The solution</h2>
              <p>{project.solution}</p>
            </div>
          </article>
          <article className="case-block">
            <span className="case-block-index">03</span>
            {/* Implementation approach and technology stack. */}
            <div>
              <span className="eyebrow">UNDER THE HOOD</span>
              <h2>How it works</h2>
              <p>{project.howItWorks}</p>
              {/* Technologies used in the project. */}
              <div className="stack-list">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </article>
          <article className="case-block">
            <span className="case-block-index">04</span>
            {/* Suggested success measures and any project-specific caveat. */}
            <div>
              <span className="eyebrow">MEASURE WHAT MATTERS</span>
              <h2>What success would look like</h2>
              <p>
                These are suggested indicators for evaluating the project after
                launch, not claimed results.
              </p>
              <ul className="success-list">
                {project.success.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={17} />
                    {item}
                  </li>
                ))}
              </ul>
              {project.note ? (
                <p className="project-note">{project.note}</p>
              ) : null}
            </div>
          </article>
        </div>
        {/* Project summary card with stack and related contact action. */}
        <aside className="case-sidebar">
          {/* Snapshot of the project and related next steps. */}
          <div className="case-sidebar-card">
            <span className="eyebrow">PROJECT SNAPSHOT</span>
            <h3>Built around the real workflow.</h3>
            <p>
              Technology is only useful when it supports a clear goal. This case
              study describes the approach and what should be validated next.
            </p>
            {/* Visual separator between the summary and technology list. */}
            <div className="sidebar-divider" />
            <span className="sidebar-label">TECHNOLOGY</span>
            {/* Technologies highlighted in the project snapshot. */}
            <div className="stack-list">
              {project.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <CtaLink
              href={`/contact?service=${project.slug === "gaucho-ordering" ? "growth" : "operations"}`}
            >
              Build something similar
            </CtaLink>
          </div>
        </aside>
      </section>
      <section className="next-project">
        {/* Link to the next case study and a project discussion action. */}
        <div>
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            NEXT CASE STUDY
          </span>
          <Link href={`/projects/${nextProject.slug}`}>
            <span>
              {nextProject.number} / {nextProject.category}
            </span>
            <h2>
              {nextProject.title}
              <ArrowUpRight size={25} />
            </h2>
          </Link>
        </div>
        <CtaLink href="/contact" secondary>
          Discuss a project
        </CtaLink>
      </section>
    </>
  );
}
