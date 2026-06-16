import type { ProjectCardProps } from "./card.type";
import ArrowCircleRight from "reicon-react/icons/ArrowCircleRight";

import "./card.style.css";

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card-container">
      <section className="project-card-top">
        {project.image ? (
          <img
            className="project-card-top-image"
            src={project.image}
            alt={project.title}
          />
        ) : null}
      </section>
      <section className="project-card-bottom">
        <p className="highlight-text">{project.title}</p>
        <p className="project-card-bottom-desc">{project.description}</p>
        <a href={project.link} target="_blank">
          Live Demo {<ArrowCircleRight />}
        </a>
      </section>
    </div>
  );
}
