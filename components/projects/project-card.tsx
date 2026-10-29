import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { AnalyticsLink } from "@/components/ui/analytics-link";
import { ProjectVisual } from "./project-visual";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <AnalyticsLink
        href={`/projects/${project.slug}`}
        className="project-card-visual-link"
        aria-label={`View ${project.title} case study`}
        eventName="project_click"
        eventParameters={{
          project: project.slug,
          project_name: project.title,
          location: "project_card",
          action: "card",
        }}
      >
        <ProjectVisual project={project} />
      </AnalyticsLink>
      {/* Project details, metadata, tags, and case-study link. */}
      <div className="project-card-content">
        {/* Project number, category, and current status. */}
        <div className="project-meta">
          <span>
            {project.number} / {project.category}
          </span>
          <span className="status-label">{project.status}</span>
        </div>
        <h3>
          <AnalyticsLink
            href={`/projects/${project.slug}`}
            eventName="project_click"
            eventParameters={{
              project: project.slug,
              project_name: project.title,
              location: "project_card",
              action: "details",
            }}
          >
            {project.title}
            <ArrowUpRight size={18} />
          </AnalyticsLink>
        </h3>
        <p>{project.summary}</p>
        {/* Technologies and capabilities represented by this project. */}
        <div className="tag-list">
          {project.tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <AnalyticsLink
          href={`/projects/${project.slug}`}
          className="text-link"
          eventName="project_click"
          eventParameters={{
            project: project.slug,
            project_name: project.title,
            location: "project_card",
            action: "details",
          }}
        >
          Explore case study <ArrowUpRight size={15} />
        </AnalyticsLink>
      </div>
    </article>
  );
}
