"use client";

import { useMemo, useState } from "react";
import { projects, projectFilters } from "@/data/projects";
import { ProjectCard } from "./project-card";

export function ProjectGrid({ limit }: { limit?: number }) {
  const [active, setActive] = useState("All");
  const filtered = useMemo(
    () =>
      projects.filter(
        (project) => active === "All" || project.tags.includes(active),
      ),
    [active],
  );
  const visible = limit ? filtered.slice(0, limit) : filtered;
  return (
    <>
      {!limit ? (
        <div className="filter-row" aria-label="Filter projects">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              className={`filter-pill ${active === filter ? "is-selected" : ""}`}
              aria-pressed={active === filter}
              onClick={() => setActive(filter)}
            >
              {filter}
              <span>
                {filter === "All"
                  ? projects.length
                  : projects.filter((p) => p.tags.includes(filter)).length}
              </span>
            </button>
          ))}
        </div>
      ) : null}
      <div className="project-grid">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      {visible.length === 0 ? (
        <p className="empty-state">No projects match this filter yet.</p>
      ) : null}
    </>
  );
}
