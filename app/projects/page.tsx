import type { Metadata } from "next";
import { ArrowDownRight } from "lucide-react";
import { ProjectGrid } from "@/components/projects/project-grid";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected full-stack, cloud, database and business workflow projects by Dean Chap.",
};

export default function ProjectsPage() {
  return (
    <>
      <section className="page-hero section-wrap">
        {/* Introductory title and description for the projects index. */}
        <div className="page-hero-copy">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            SELECTED WORK / 2024—2026
          </span>
          <h1>
            Thoughtful builds.
            <br />
            <em>Practical outcomes.</em>
          </h1>
          <p>
            Projects, architecture work and concepts that explore how software
            can improve the way a business serves customers and gets work done.
          </p>
        </div>
        {/* Project count, context, and link to the project list. */}
        <div className="page-hero-side">
          <span>PROJECT INDEX</span>
          <strong>06</strong>
          <p>
            Case studies and concepts. Outcomes are framed as targets unless
            measured results are available.
          </p>
          <a href="#project-list">
            Explore the work <ArrowDownRight size={15} />
          </a>
        </div>
      </section>
      <section
        id="project-list"
        className="section-wrap section-pad projects-page"
      >
        <SectionHeading
          eyebrow="THE PORTFOLIO"
          title="Start with the problem, not the stack."
        >
          Filter by capability to find the work most relevant to your business
          or team.
        </SectionHeading>
        <ProjectGrid />
      </section>
    </>
  );
}
