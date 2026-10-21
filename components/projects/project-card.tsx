import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./project-visual";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <Link
        href={`/projects/${project.slug}`}
        className="project-card-visual-link"
        aria-label={`View ${project.title} case study`}
      >
        <ProjectVisual project={project} />
      </Link>
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
          <Link href={`/projects/${project.slug}`}>
            {project.title}
            <ArrowUpRight size={18} />
          </Link>
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
        <Link href={`/projects/${project.slug}`} className="text-link">
          Explore case study <ArrowUpRight size={15} />
        </Link>
      </div>
    </article>
  );
}
