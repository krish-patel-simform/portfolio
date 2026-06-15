import { ProjectCard } from "../Card/ProjectCard";
import { useData } from "../../hooks/useData";
import "./project.style.css";

export default function Project() {
  const data = useData();
  return (
    <div className="project-container" id={"project"}>
      <p className="highlight-text">MY PROJECTS</p>
      <p className="heading">Some of my work</p>
      <div className="project-grid-container">
        {data.liveProjects.map((project, index) => {
          return <ProjectCard key={index} project={project} />;
        })}
      </div>
    </div>
  );
}
