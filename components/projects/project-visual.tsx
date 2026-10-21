import {
  ArrowDownRight,
  ArrowUpRight,
  Database,
  Globe2,
  Layers3,
  MessageCircle,
  Workflow,
} from "lucide-react";
import type { Project } from "@/data/projects";

const iconByTag: Record<string, typeof Globe2> = {
  "Web App": Globe2,
  Database,
  Cloud: Layers3,
  WhatsApp: MessageCircle,
  API: Workflow,
  Automation: Workflow,
};

export function ProjectVisual({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const Icon = iconByTag[project.tags[0]] || Globe2;
  return (
    <>
      {/* Decorative project preview composed from metadata and visual layers. */}
      <div
        className={`project-visual visual-${project.accent} ${large ? "project-visual-large" : ""}`}
        aria-label={`Abstract preview for ${project.title}`}
        role="img"
      >
        {/* Grain texture overlay for the preview artwork. */}
        <div className="visual-grain" />
        {/* Project identifier and studio label at the top of the artwork. */}
        <div className="visual-topline">
          <span>PROJECT / {project.number}</span>
          <span>DC—STUDIO</span>
        </div>
        {/* Decorative orbit rings around the project icon. */}
        <div className="visual-orbit orbit-one" />
        {/* Second orbit ring adds depth to the preview artwork. */}
        <div className="visual-orbit orbit-two" />
        {/* Project category icon and its primary tag. */}
        <div className="visual-core">
          <Icon size={large ? 42 : 34} strokeWidth={1.25} />
          <span>{project.tags[0]}</span>
        </div>
        {/* Category label and indicator around the preview. */}
        <div className="visual-label visual-label-left">
          <span className="visual-label-dot" />
          {project.category}
        </div>
        {/* Technology label and external-link cue. */}
        <div className="visual-label visual-label-right">
          {project.stack[0]} <ArrowUpRight size={12} />
        </div>
        {/* Closing caption along the bottom edge of the artwork. */}
        <div className="visual-bottomline">
          <span>DESIGNED AROUND THE WORK</span>
          <ArrowDownRight size={15} />
        </div>
      </div>
    </>
  );
}
