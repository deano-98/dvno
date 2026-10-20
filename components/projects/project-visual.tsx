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
    <div
      className={`project-visual visual-${project.accent} ${large ? "project-visual-large" : ""}`}
      aria-label={`Abstract preview for ${project.title}`}
      role="img"
    >
      <div className="visual-grain" />
      <div className="visual-topline">
        <span>PROJECT / {project.number}</span>
        <span>DC—STUDIO</span>
      </div>
      <div className="visual-orbit orbit-one" />
      <div className="visual-orbit orbit-two" />
      <div className="visual-core">
        <Icon size={large ? 42 : 34} strokeWidth={1.25} />
        <span>{project.tags[0]}</span>
      </div>
      <div className="visual-label visual-label-left">
        <span className="visual-label-dot" />
        {project.category}
      </div>
      <div className="visual-label visual-label-right">
        {project.stack[0]} <ArrowUpRight size={12} />
      </div>
      <div className="visual-bottomline">
        <span>DESIGNED AROUND THE WORK</span>
        <ArrowDownRight size={15} />
      </div>
    </div>
  );
}
